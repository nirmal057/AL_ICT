
"use client"

import React, { useState, useMemo, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BrainCircuit, RotateCcw, Lightbulb, Check, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

// --- TYPE DEFINITIONS ---
type KMapValue = '0' | '1' | 'X';
type KMapSize = '2' | '3' | '4';
type SolveMode = 'SOP' | 'POS';
type Group = { term: string; cells: number[]; color: string };
type PrimeImplicant = { term: string; cells: number[]; covers: number[] };

// --- CONSTANTS ---
const COLORS = [
  'bg-red-500/20 border-red-500',
  'bg-blue-500/20 border-blue-500',
  'bg-green-500/20 border-green-500',
  'bg-yellow-500/20 border-yellow-500',
  'bg-purple-500/20 border-purple-500',
  'bg-pink-500/20 border-pink-500',
  'bg-orange-500/20 border-orange-500',
  'bg-cyan-500/20 border-cyan-500',
];
const GRAY_CODE_MAP = [0, 1, 3, 2]; // For 4-wide grids

// --- UTILITY FUNCTIONS ---
const getVarNames = (numVars: number) => 
  numVars === 2 ? ['A', 'B'] : numVars === 3 ? ['A', 'B', 'C'] : ['A', 'B', 'C', 'D'];

const indexToBinary = (index: number, numVars: number) => 
  index.toString(2).padStart(numVars, '0');

const positionToIndex = (row: number, col: number, numVars: number): number => {
    if (numVars === 2) return row * 2 + col;
    if (numVars === 3) return row * 4 + GRAY_CODE_MAP.indexOf(col);
    return GRAY_CODE_MAP.indexOf(row) * 4 + GRAY_CODE_MAP.indexOf(col);
};

const getTermForGroup = (cells: number[], numVars: number, mode: SolveMode): string => {
  const varNames = getVarNames(numVars);
  if (cells.length === 0) return '';
  if (cells.length === Math.pow(2, numVars)) return mode === 'SOP' ? '1' : '0';

  let termParts: string[] = [];
  const firstBin = indexToBinary(cells[0], numVars);

  for (let i = 0; i < numVars; i++) {
    const firstBit = firstBin[i];
    if (cells.every(cell => indexToBinary(cell, numVars)[i] === firstBit)) {
      if (mode === 'SOP') {
        termParts.push(varNames[i] + (firstBit === '0' ? "'" : ""));
      } else { // POS
        termParts.push(varNames[i] + (firstBit === '1' ? "'" : ""));
      }
    }
  }

  if (mode === 'SOP') {
    return termParts.join('');
  } else {
    return `(${termParts.join(' + ')})`;
  }
};

// --- CORE QUINE-MCCLUSKEY BASED SOLVER ---
const findAllPrimeImplicants = (
  termsToCover: number[],
  dontCares: number[],
  numVars: number,
  mode: SolveMode,
): PrimeImplicant[] => {
  const allTerms = new Set([...termsToCover, ...dontCares]);
  const allPossibleGroups: { cells: number[] }[] = [];

  const rows = numVars > 2 ? 4 : 2;
  const cols = numVars >= 3 ? 4 : 2;

  // 1. Generate all valid rectangular groups of every possible size
  for (let h = 1; h <= rows; h *= 2) {
    for (let w = 1; w <= cols; w *= 2) {
      if (h * w === 1 && termsToCover.length === 0) continue;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cells: number[] = [];
          let isValid = true;
          for (let dr = 0; dr < h; dr++) {
            for (let dc = 0; dc < w; dc++) {
              const row = (r + dr) % rows;
              const col = (c + dc) % cols;
              const idx = positionToIndex(row, col, numVars);
              if (!allTerms.has(idx)) {
                isValid = false;
                break;
              }
              cells.push(idx);
            }
            if (!isValid) break;
          }
          if (isValid) {
            allPossibleGroups.push({ cells: [...new Set(cells)].sort((a, b) => a - b) });
          }
        }
      }
    }
  }

  // 2. Filter out groups that are subsets of larger groups to find true PIs
  const primeImplicants: PrimeImplicant[] = [];
  const uniqueKeys = new Set<string>();

  allPossibleGroups.sort((a, b) => b.cells.length - a.cells.length); // Process largest groups first

  for (const group of allPossibleGroups) {
    const isSubset = allPossibleGroups.some(otherGroup => 
      group.cells.length < otherGroup.cells.length && 
      group.cells.every(cell => otherGroup.cells.includes(cell))
    );

    if (!isSubset) {
      const key = group.cells.join(',');
      if (!uniqueKeys.has(key)) {
        const covers = group.cells.filter(cell => termsToCover.includes(cell));
        if (covers.length > 0) { // Must cover at least one target term
          primeImplicants.push({
            term: getTermForGroup(group.cells, numVars, mode),
            cells: group.cells,
            covers,
          });
          uniqueKeys.add(key);
        }
      }
    }
  }
  return primeImplicants;
};


const selectMinimalCover = (
  primeImplicants: PrimeImplicant[],
  termsToCover: number[]
): { finalGroups: PrimeImplicant[]; steps: string[] } => {
  const steps: string[] = [];
  let uncoveredTerms = new Set(termsToCover);
  const finalGroups: PrimeImplicant[] = [];

  // 1. Find and select Essential Prime Implicants
  const termCoverageCount: { [key: number]: PrimeImplicant[] } = {};
  termsToCover.forEach(m => { termCoverageCount[m] = []; });
  primeImplicants.forEach(pi => {
      pi.covers.forEach(m => {
          if(termCoverageCount[m]) termCoverageCount[m].push(pi);
      });
  });

  const essentialPIs = new Map<string, PrimeImplicant>();
  Object.values(termCoverageCount).forEach(coveringPIs => {
    if (coveringPIs.length === 1) {
      essentialPIs.set(coveringPIs[0].term, coveringPIs[0]);
    }
  });

  if(essentialPIs.size > 0){
    const essentialTerms = Array.from(essentialPIs.keys());
    steps.push(`Found ${essentialTerms.length} essential prime implicant(s): ${essentialTerms.join(', ')}. These must be in the solution.`);
    essentialPIs.forEach(pi => {
        finalGroups.push(pi);
        pi.covers.forEach(m => uncoveredTerms.delete(m));
    });
  } else {
    steps.push("No essential prime implicants found. Proceeding to select a minimal cover.");
  }

  // 2. Cover remaining terms using a greedy approach
  let remainingPIs = primeImplicants
    .filter(p => !finalGroups.some(fg => fg.term === p.term))
    .sort((a,b) => b.cells.length - a.cells.length); 

  while (uncoveredTerms.size > 0 && remainingPIs.length > 0) {
    let bestPI = remainingPIs[0];
    let maxCovered = 0;

    for(const pi of remainingPIs) {
        const coveredCount = pi.covers.filter(m => uncoveredTerms.has(m)).length;
        if(coveredCount > maxCovered) {
            maxCovered = coveredCount;
            bestPI = pi;
        }
    }
    
    if(!bestPI || maxCovered === 0) break; 

    steps.push(`To cover remaining terms, selected group '${bestPI.term}' which covers ${maxCovered} new uncovered term(s).`);
    finalGroups.push(bestPI);
    bestPI.covers.forEach(m => uncoveredTerms.delete(m));
    remainingPIs = remainingPIs.filter(p => p.term !== bestPI.term);
  }

  return { finalGroups, steps };
};


const solveKMap = (values: KMapValue[], numVars: number, mode: SolveMode): { simplified: string; groups: Group[]; steps: string[] } => {
  const termsToCover = values.map((v, i) => v === (mode === 'SOP' ? '1' : '0') ? i : -1).filter(i => i !== -1);
  const dontCares = values.map((v, i) => v === 'X' ? i : -1).filter(i => i !== -1);
  
  const termName = mode === 'SOP' ? 'minterms (1s)' : 'maxterms (0s)';
  if (termsToCover.length === 0) return { simplified: mode === 'SOP' ? '0' : '1', groups: [], steps: [`No ${termName} found. Result is ${mode === 'SOP' ? '0' : '1'}.`] };
  if (termsToCover.length + dontCares.length === Math.pow(2, numVars)) return { simplified: mode === 'SOP' ? '1' : '0', groups: [], steps: [`All cells are ${mode === 'SOP' ? '1s' : '0s'} or X's. Result is ${mode === 'SOP' ? '1' : '0'}.`]}

  let steps: string[] = [`Terms to cover: ${termsToCover.join(', ')}`, `Don't Cares: ${dontCares.join(', ')}`];
  const primeImplicants = findAllPrimeImplicants(termsToCover, dontCares, numVars, mode);
  steps.push(`Found ${primeImplicants.length} prime implicant(s): ${primeImplicants.map(p => p.term).join(', ')}`);
  
  const { finalGroups, steps: coverSteps } = selectMinimalCover(primeImplicants, termsToCover);
  steps.push(...coverSteps);
  
  const finalTerms = finalGroups.map(g => g.term).filter(Boolean);
  let simplified: string;
  if(mode === 'SOP') {
      simplified = finalTerms.length > 0 ? [...new Set(finalTerms)].join(' + ') : '1';
  } else {
      simplified = finalTerms.length > 0 ? [...new Set(finalTerms)].join(' * ') : '0';
  }

  const coloredGroups: Group[] = finalGroups.map((g, i) => ({ ...g, color: COLORS[i % COLORS.length] }));
  steps.push(`Final simplified expression: ${simplified}`);
  return { simplified, groups: coloredGroups, steps };
};


// --- REACT COMPONENT ---
export const KMapSimulator = ({ isPrintView = false, defaultVars = '3' }: { isPrintView?: boolean, defaultVars?: KMapSize }) => {
  const [numVars, setNumVars] = useState<KMapSize>(defaultVars);
  const [expression, setExpression] = useState('');
  const [map, setMap] = useState<KMapValue[]>(Array(Math.pow(2, parseInt(numVars))).fill('0'));
  const [solution, setSolution] = useState<{ simplified: string; groups: Group[]; steps: string[] } | null>(null);
  const [hoveredGroupTerm, setHoveredGroupTerm] = useState<string | null>(null);
  const [mode, setMode] = useState<SolveMode>('SOP');

  const { mapSize, varNames, mapVarNames } = useMemo(() => {
    const n = parseInt(numVars);
    const size = n === 2 ? { rows: 2, cols: 2 } : n === 3 ? { rows: 2, cols: 4 } : { rows: 4, cols: 4 };
    const vars = getVarNames(n);
    const mapVars = n === 2 ? { row: ['A'], col: ['B'] } : n === 3 ? { row: ['A'], col: ['B', 'C'] } : { row: ['A', 'B'], col: ['C', 'D'] };
    return { mapSize: size, varNames: vars, mapVarNames: mapVars };
  }, [numVars]);

  useEffect(() => {
    setNumVars(defaultVars);
  }, [defaultVars]);

  useEffect(() => {
    handleReset();
  }, [numVars, mode]);

  const handleCellClick = (index: number) => {
    const newMap = [...map];
    const currentVal = newMap[index];
    newMap[index] = currentVal === '0' ? '1' : currentVal === '1' ? 'X' : '0';
    setMap(newMap);
    setSolution(null);
    setExpression('');
  };
  
  const handleSolve = () => {
      const solved = solveKMap(map, parseInt(numVars), mode);
      setSolution(solved);
      setExpression(solved.simplified);
  }
  
  const handleReset = () => {
    setMap(Array(Math.pow(2, parseInt(numVars))).fill('0'));
    setSolution(null);
    setExpression('');
  };
  
  const handleFillFromSopExpression = () => {
    const n = parseInt(numVars);
    const newMap = Array(Math.pow(2, n)).fill('0') as KMapValue[];
    const terms = expression.split('+').map(t => t.trim().toUpperCase());
    
    for (let idx = 0; idx < newMap.length; idx++) {
      const binary = indexToBinary(idx, n);
      for (const term of terms) {
        if (!term) continue;
        let match = true;
        for (let v = 0; v < varNames.length; v++) {
          const varName = varNames[v];
          if (term.includes(varName)) {
            const isNegated = term.includes(varName + "'");
            const bitShouldBe = isNegated ? '0' : '1';
            if (binary[v] !== bitShouldBe) {
              match = false;
              break;
            }
          }
        }
        if (match) newMap[idx] = '1';
      }
    }
    setMap(newMap);
    setSolution(null);
  };
  
  const handleFillFromPosExpression = () => {
    const n = parseInt(numVars);
    const totalCells = Math.pow(2, n);
    const allCells = new Set(Array.from({ length: totalCells }, (_, i) => i));

    const terms = expression.split('*').map(t => t.replace(/[()]/g, '').trim().toUpperCase());

    for (const term of terms) {
        if (!term) continue;
        const sumLiterals = term.split('+');
        
        for (let idx = 0; idx < totalCells; idx++) {
            const binary = indexToBinary(idx, n);
            let termIsZero = false;
            for (const literal of sumLiterals) {
                const varName = literal.replace("'", "");
                const varIndex = varNames.indexOf(varName);
                if (varIndex === -1) continue;

                const isNegated = literal.includes("'");
                const bitValue = binary[varIndex];

                if ((!isNegated && bitValue === '0') || (isNegated && bitValue === '1')) {
                    termIsZero = true;
                    break;
                }
            }
            if (termIsZero) {
                 allCells.delete(idx);
            }
        }
    }
    
    const newMap = Array(totalCells).fill('1') as KMapValue[];
    allCells.forEach(idx => { newMap[idx] = '0' });

    setMap(newMap);
    setSolution(null);
  };
  
  const handleFillFromExpression = () => {
      if(mode === 'SOP') {
          handleFillFromSopExpression();
      } else {
          handleFillFromPosExpression();
      }
  }

  const getCellGroups = (index: number) => solution?.groups.filter(g => g.cells.includes(index)) ?? [];

  if (isPrintView) { 
    return (
      <div className="p-4 border rounded-lg bg-gray-50 not-prose">
        <h4 className="font-semibold mb-2">Karnaugh Map Simulator</h4>
        <p className="text-sm text-muted-foreground">This is an interactive K-Map tool. Please view this content in a web browser to use the simulator.</p>
      </div>
    );
   }

  const renderCell = (rowIndex: number, colIndex: number) => {
    const index = positionToIndex(rowIndex, colIndex, parseInt(numVars));
    const cellGroups = getCellGroups(index);
    const isHovered = hoveredGroupTerm !== null && cellGroups.some(g => g.term === hoveredGroupTerm);

    return (
      <td 
        key={`${rowIndex}-${colIndex}`}
        className="border-2 border-foreground w-16 h-16 text-center text-2xl font-bold cursor-pointer relative transition-all hover:bg-muted/50"
        onClick={() => handleCellClick(index)}
      >
        <AnimatePresence mode="wait">
            <motion.span
                 key={map[index]}
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.5 }}
                 transition={{ duration: 0.2 }}
                 className={cn(
                    'absolute inset-0 flex items-center justify-center',
                    map[index] === 'X' && 'text-muted-foreground',
                 )}
            >
                {map[index]}
            </motion.span>
        </AnimatePresence>
        <div className="absolute inset-0 pointer-events-none">
          {cellGroups.map((group, i) => (
             <motion.div 
                key={group.term + i} 
                className={cn(
                  "absolute inset-0 border-4",
                  group.color,
                )}
                initial={{ opacity: 0}}
                animate={{ 
                    opacity: (isHovered && group.term === hoveredGroupTerm) ? 1 : 0.7,
                    scale: (isHovered && group.term === hoveredGroupTerm) ? 1.1 : 1,
                    transition: { duration: 0.2 }
                }}
                style={{ clipPath: `inset(-2px ${i*4}px ${i*4}px -2px)` }}
             />
          ))}
        </div>
      </td>
    );
  };

  const grayLabels = ['00', '01', '11', '10'];

  return (
    <Card className="not-prose my-6 overflow-hidden">
      <CardHeader className="flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
        <CardTitle className="flex items-center gap-2">
          <BrainCircuit /> K-Map Simulator
        </CardTitle>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="vars">Variables:</Label>
            <Select value={numVars} onValueChange={(v) => setNumVars(v as KMapSize)}>
              <SelectTrigger id="vars" className="w-[80px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="mode">Mode:</Label>
            <Select value={mode} onValueChange={(v) => setMode(v as SolveMode)}>
              <SelectTrigger id="mode" className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SOP">SOP</SelectItem>
                <SelectItem value="POS">POS</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
             {mode === 'SOP' ? (
                <div>
                  <Label htmlFor="expression">SOP Expression (e.g., A'BC + ABC')</Label>
                  <div className='flex gap-2 mt-1'>
                    <Input 
                      id="expression" 
                      value={expression} 
                      onChange={e => setExpression(e.target.value)} 
                      placeholder="Enter Sum of Products expression"
                      onKeyDown={e => e.key === 'Enter' && handleFillFromExpression()}
                    />
                    <Button variant="outline" size="sm" onClick={handleFillFromExpression}>Fill</Button>
                  </div>
                </div>
            ) : (
                <div>
                  <Label htmlFor="expression">POS Expression (e.g., (A+B')*(A'+C))</Label>
                  <div className='flex gap-2 mt-1'>
                    <Input 
                      id="expression" 
                      value={expression} 
                      onChange={e => setExpression(e.target.value)} 
                      placeholder="Enter Product of Sums expression"
                      onKeyDown={e => e.key === 'Enter' && handleFillFromExpression()}
                    />
                    <Button variant="outline" size="sm" onClick={handleFillFromExpression}>Fill</Button>
                  </div>
                </div>
            )}
            
            <div className="overflow-x-auto">
              <table className="border-collapse mx-auto">
                 <tbody>
                  <tr>
                    <td className="border-b-2 border-r-2 border-foreground p-2 text-center text-xs font-semibold bg-muted">
                      {mapVarNames.row.join('')}<span className='text-xl'>\</span>{mapVarNames.col.join('')}
                    </td>
                    {Array.from({length: mapSize.cols}).map((_, i) => (
                      <td key={i} className="border-b-2 border-foreground p-2 text-center font-mono font-semibold bg-muted">
                        {numVars === '2' ? i : grayLabels[i]}
                      </td>
                    ))}
                  </tr>
                  {Array.from({length: mapSize.rows}).map((_, i) => (
                    <tr key={i}>
                      <td className="border-r-2 border-foreground p-2 text-center font-mono font-semibold bg-muted">
                        {numVars === '2' ? i : (numVars === '3' ? i : grayLabels[i])}
                      </td>
                      {Array.from({length: mapSize.cols}).map((_, j) => renderCell(i, j))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex gap-2 text-xs text-muted-foreground items-start">
              <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <p>Click cells to cycle: 0 → 1 → X (don't care) → 0. You can also enter a boolean expression and click 'Fill'.</p>
            </div>
          </div>
          
          <div className='space-y-4'>
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Lightbulb className="h-5 w-5"/> Simplified Expression
              </h4>
              <div className="p-4 bg-muted rounded-md min-h-[4rem] flex items-center justify-center">
                {solution ? (
                  <p className="text-xl font-bold font-mono">{solution.simplified}</p>
                ) : (
                  <p className="text-sm text-muted-foreground">Click 'Solve' to simplify</p>
                )}
              </div>
            </div>
            
            {solution && solution.groups.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Final Groups</h4>
                <div className="space-y-2">
                  {solution.groups.map((group) => (
                    <motion.div 
                      key={group.term}
                      className={cn(
                        "p-3 rounded-lg border-2 cursor-pointer",
                        group.color,
                      )}
                      onMouseEnter={() => setHoveredGroupTerm(group.term)}
                      onMouseLeave={() => setHoveredGroupTerm(null)}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-lg">{group.term || (mode === 'SOP' ? '1' : '0')}</span>
                        <Badge variant="secondary">{group.cells.length} cells</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Covers terms: {group.covers.sort((a, b) => a - b).join(', ')}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            
            {solution && solution.steps.length > 0 && (
               <Accordion type="single" collapsible defaultValue='steps'>
                <AccordionItem value="steps">
                  <AccordionTrigger>Solution Steps</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-sm">
                      {solution.steps.map((step, i) => (
                        <p key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className='font-bold text-foreground'>•</span> 
                          <span>{step}</span>
                        </p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button onClick={handleSolve}><Check className="mr-2 h-4 w-4"/> Solve</Button>
        <Button variant="outline" onClick={handleReset}><RotateCcw className="mr-2 h-4 w-4"/> Reset</Button>
      </CardFooter>
    </Card>
  );
};
