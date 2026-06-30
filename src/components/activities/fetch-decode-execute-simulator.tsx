
"use client";

import React, { useState, useEffect, useReducer, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { Play, Pause, RefreshCcw, SkipForward, Cpu, MemoryStick, HelpCircle, Save, FolderOpen, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { ButtonGroup } from '../ui/button-group';

// --- Types and Constants ---

type Stage = 'FETCH_1' | 'FETCH_2' | 'FETCH_3' | 'FETCH_4' | 'DECODE' | 'EXECUTE_LDA' | 'EXECUTE_STA' | 'EXECUTE_STA_2' | 'EXECUTE_ADD' | 'EXECUTE_SUB' | 'EXECUTE_JMP' | 'EXECUTE_HLT' | 'IDLE' | 'ERROR';

const RAM_SIZE = 16;
const INSTRUCTION_SET: Record<string, string> = {
    '0001': 'LDA', '0010': 'STA', '0011': 'ADD',
    '0100': 'SUB', '0101': 'JMP', '1111': 'HLT'
};
const OPCODES: Record<string, string> = Object.fromEntries(Object.entries(INSTRUCTION_SET).map(([k, v]) => [v, k]));

interface MachineState {
  pc: number; mar: number; mdr: number; cir: string; acc: number;
  ram: { instruction: string; value: number }[];
  stage: Stage;
  running: boolean;
  speed: number;
  message: string;
  activeComponents: Set<string>;
}

const initialRam = () => Array(RAM_SIZE).fill(null).map(() => ({ instruction: 'HLT', value: 0 }));

const sampleProgram1 = () => {
    const ram = initialRam();
    ram[0] = { instruction: 'LDA', value: 5 }; // LDA 5
    ram[1] = { instruction: 'ADD', value: 6 }; // ADD 6
    ram[2] = { instruction: 'STA', value: 7 }; // STA 7
    ram[3] = { instruction: 'HLT', value: 0 }; // HLT
    ram[5] = { instruction: 'HLT', value: 42 }; // Data
    ram[6] = { instruction: 'HLT', value: 13 }; // Data
    return ram;
};

const initialState: MachineState = {
  pc: 0, mar: 0, mdr: 0, cir: '00000000', acc: 0,
  ram: sampleProgram1(),
  stage: 'IDLE',
  running: false,
  speed: 500,
  message: 'Ready. Load a program or step through.',
  activeComponents: new Set(),
};

type Action =
  | { type: 'TICK' } | { type: 'STEP' } | { type: 'RUN' }
  | { type: 'PAUSE' } | { type: 'RESET' } | { type: 'SET_SPEED'; payload: number }
  | { type: 'LOAD_PROGRAM'; payload: any[] } | { type: 'UPDATE_RAM'; payload: { index: number; instruction: string; value: number } };

// --- Reducer Logic ---

function machineReducer(state: MachineState, action: Action): MachineState {
    const nextState = { ...state, activeComponents: new Set<string>() };

    const activate = (...components: string[]) => {
        components.forEach(c => nextState.activeComponents.add(c));
    };

    switch (action.type) {
        case 'STEP':
        case 'TICK':
            const { pc, stage, ram, acc } = state;
            const currentInstruction = ram[pc]?.instruction || 'HLT';
            const currentValue = ram[pc]?.value || 0;
            const operand = state.cir.substring(4);
            const operandAddr = parseInt(operand, 2);

            switch (stage) {
                case 'IDLE':
                case 'EXECUTE_HLT':
                    nextState.stage = 'FETCH_1';
                    nextState.message = 'Starting Fetch Cycle.';
                    activate('pc');
                    break;
                case 'FETCH_1':
                    nextState.mar = pc;
                    nextState.stage = 'FETCH_2';
                    nextState.message = `FETCH: PC value (${pc}) copied to MAR.`;
                    activate('pc', 'mar', 'control-bus', 'address-bus');
                    break;
                case 'FETCH_2':
                    const fetchedOp = OPCODES[currentInstruction];
                    const fetchedVal = currentValue.toString(2).padStart(4, '0');
                    nextState.mdr = parseInt(fetchedOp + fetchedVal, 2);
                    nextState.stage = 'FETCH_3';
                    nextState.message = `FETCH: Instruction from RAM[${pc}] moved to MDR.`;
                    activate('ram', 'mdr', 'control-bus', 'data-bus');
                    break;
                case 'FETCH_3':
                    nextState.pc = pc + 1;
                    nextState.stage = 'FETCH_4';
                    nextState.message = 'FETCH: Program Counter incremented.';
                    activate('pc', 'cu');
                    break;
                case 'FETCH_4':
                    nextState.cir = state.mdr.toString(2).padStart(8, '0');
                    nextState.stage = 'DECODE';
                    nextState.message = 'FETCH: MDR value copied to CIR for decoding.';
                    activate('mdr', 'cir', 'cu');
                    break;
                case 'DECODE':
                    const opcode = nextState.cir.substring(0, 4);
                    const decodedInstruction = INSTRUCTION_SET[opcode] || 'ERROR';
                    if (decodedInstruction === 'ERROR') {
                      nextState.stage = 'ERROR';
                      nextState.message = `ERROR: Invalid Opcode ${opcode}`;
                      nextState.running = false;
                      break;
                    }
                    nextState.stage = `EXECUTE_${decodedInstruction}` as Stage;
                    nextState.message = `DECODE: Instruction is ${decodedInstruction}.`;
                    activate('cir', 'cu');
                    break;
                
                // EXECUTE STAGES
                case 'EXECUTE_LDA':
                    nextState.mar = operandAddr;
                    nextState.acc = ram[operandAddr].value;
                    nextState.stage = 'FETCH_1';
                    nextState.message = `EXECUTE (LDA): Loaded value ${ram[operandAddr].value} from RAM[${operandAddr}] into ACC.`;
                    activate('cu', 'mar', 'address-bus', 'ram', 'data-bus', 'mdr', 'acc', 'alu');
                    break;
                case 'EXECUTE_STA': // Multi-step
                    nextState.mar = operandAddr;
                    nextState.mdr = acc;
                    nextState.stage = 'EXECUTE_STA_2';
                    nextState.message = `EXECUTE (STA): ACC value (${acc}) moved to MDR. Address ${operandAddr} sent to MAR.`;
                    activate('cu', 'acc', 'mdr', 'mar', 'address-bus', 'control-bus');
                    break;
                case 'EXECUTE_STA_2':
                    nextState.ram[operandAddr] = { ...nextState.ram[operandAddr], value: state.mdr };
                    nextState.stage = 'FETCH_1';
                    nextState.message = `EXECUTE (STA): Stored value from MDR to RAM[${operandAddr}].`;
                    activate('mdr', 'ram', 'data-bus', 'control-bus');
                    break;
                case 'EXECUTE_ADD':
                    nextState.acc = acc + ram[operandAddr].value;
                    nextState.stage = 'FETCH_1';
                    nextState.message = `EXECUTE (ADD): Added value ${ram[operandAddr].value} from RAM[${operandAddr}] to ACC. New ACC value: ${nextState.acc}`;
                    activate('cu', 'alu', 'acc', 'mdr', 'ram', 'data-bus', 'address-bus', 'mar');
                    break;
                case 'EXECUTE_SUB':
                     nextState.acc = acc - ram[operandAddr].value;
                     nextState.stage = 'FETCH_1';
                     nextState.message = `EXECUTE (SUB): Subtracted value ${ram[operandAddr].value} from RAM[${operandAddr}] from ACC. New ACC value: ${nextState.acc}`;
                     activate('cu', 'alu', 'acc', 'mdr', 'ram', 'data-bus', 'address-bus', 'mar');
                    break;
                case 'EXECUTE_JMP':
                    nextState.pc = operandAddr;
                    nextState.stage = 'FETCH_1';
                    nextState.message = `EXECUTE (JMP): PC updated to ${operandAddr}.`;
                    activate('cu', 'pc');
                    break;
                case 'EXECUTE_HLT':
                    nextState.running = false;
                    nextState.message = 'EXECUTE (HLT): Program halted.';
                    activate('cu');
                    break;
                default:
                    nextState.stage = 'IDLE';
                    break;
            }
            break;
        
        case 'RUN':
            return { ...state, running: true };
        case 'PAUSE':
            return { ...state, running: false };
        case 'RESET':
            return { ...initialState, ram: sampleProgram1() };
        case 'LOAD_PROGRAM':
            return { ...initialState, ram: action.payload };
        case 'SET_SPEED':
            return { ...state, speed: action.payload };
        case 'UPDATE_RAM':
            const newRam = [...state.ram];
            newRam[action.payload.index] = { instruction: action.payload.instruction, value: action.payload.value };
            return { ...state, ram: newRam };
    }

    return nextState;
}

// --- Components ---

const Register = ({ name, value, bits, isActive }: { name: string, value: string | number, bits: number, isActive: boolean }) => (
    <div className={cn("flex items-center justify-between p-1 border rounded-md transition-all duration-300", isActive ? 'bg-primary/20 border-primary shadow-md' : 'bg-muted/50')}>
        <Label htmlFor={name} className="text-xs font-semibold">{name}</Label>
        <Tooltip>
            <TooltipTrigger asChild>
                <div className="font-mono text-xs bg-background px-2 py-1 rounded w-24 text-right truncate">
                    {typeof value === 'number' ? value.toString(2).padStart(bits, '0') : value}
                </div>
            </TooltipTrigger>
            <TooltipContent>
                <p>Decimal: {typeof value === 'number' ? value : parseInt(value, 2)}</p>
                <p>Hex: 0x{typeof value === 'number' ? value.toString(16).toUpperCase() : parseInt(value, 2).toString(16).toUpperCase()}</p>
            </TooltipContent>
        </Tooltip>
    </div>
);

const BusLine = ({ name, isActive }: { name: string, isActive: boolean }) => (
    <div className={cn("absolute w-full h-1 bg-muted-foreground/30 transition-colors duration-300", isActive && 'bg-primary/70 animate-[pulse_0.5s_ease-in-out_infinite]')} />
);

export function VonNeumannArchitectureDiagram({ isPrintView }: { isPrintView: boolean }) {
    const [state, dispatch] = useReducer(machineReducer, initialState);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (state.running) {
            intervalRef.current = setInterval(() => {
                dispatch({ type: 'TICK' });
            }, state.speed);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [state.running, state.speed]);

    if (isPrintView) {
        return (
            <div className="p-4 border rounded-lg bg-gray-50">
                <h4 className="font-semibold mb-2">Fetch-Decode-Execute Cycle Simulator</h4>
                <p className="text-sm text-muted-foreground">This is an interactive simulation of the Fetch-Decode-Execute cycle. Please view this content in a web browser to use the simulator.</p>
            </div>
        );
    }
    
    const { pc, mar, mdr, cir, acc, ram, stage, running, speed, message, activeComponents } = state;

    return (
        <TooltipProvider>
        <Card className="w-full mx-auto my-4 overflow-hidden not-prose">
             <CardHeader className="bg-muted/50 p-4 border-b">
                 <p className="text-sm"><b>Current Stage:</b> <span className="font-semibold text-primary">{stage.replace(/_/g, ' ')}</span></p>
                 <p className="text-sm"><b>Operation:</b> {message}</p>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] gap-4 items-start">
                    {/* CPU */}
                    <Card className={cn('p-4 space-y-2 transition-all duration-300', activeComponents.has('cu') || activeComponents.has('alu') ? 'border-primary ring-2 ring-primary/50' : 'border-border')}>
                        <h4 className="font-semibold text-center mb-2">CPU</h4>
                        <div className="grid grid-cols-2 gap-2">
                             <div className={cn("p-2 border rounded-md space-y-1 transition-all duration-300", activeComponents.has('cu') && 'bg-primary/10')}>
                                <h5 className="text-xs font-bold text-center">Control Unit</h5>
                                <Register name="PC" value={pc} bits={4} isActive={activeComponents.has('pc')} />
                                <Register name="CIR" value={cir} bits={8} isActive={activeComponents.has('cir')} />
                             </div>
                             <div className={cn("p-2 border rounded-md space-y-1 transition-all duration-300", activeComponents.has('alu') && 'bg-primary/10')}>
                                 <h5 className="text-xs font-bold text-center">ALU</h5>
                                 <Register name="ACC" value={acc} bits={8} isActive={activeComponents.has('acc')} />
                             </div>
                        </div>
                        <div className={cn("p-2 border rounded-md space-y-1 transition-all duration-300", (activeComponents.has('mar') || activeComponents.has('mdr')) && 'bg-primary/10')}>
                             <h5 className="text-xs font-bold text-center">Memory Interface</h5>
                             <Register name="MAR" value={mar} bits={4} isActive={activeComponents.has('mar')} />
                             <Register name="MDR" value={mdr} bits={8} isActive={activeComponents.has('mdr')} />
                        </div>
                    </Card>

                    {/* Buses */}
                    <div className="relative h-64 flex flex-col justify-center items-center gap-8 pt-10">
                        <div className="w-full text-center">
                            <p className="text-xs font-semibold">Address Bus →</p>
                            <BusLine name="address-bus" isActive={activeComponents.has('address-bus')} />
                        </div>
                         <div className="w-full text-center">
                            <p className="text-xs font-semibold">↔ Data Bus ↔</p>
                            <BusLine name="data-bus" isActive={activeComponents.has('data-bus')} />
                        </div>
                         <div className="w-full text-center">
                            <p className="text-xs font-semibold">↔ Control Bus ↔</p>
                            <BusLine name="control-bus" isActive={activeComponents.has('control-bus')} />
                        </div>
                    </div>

                    {/* RAM */}
                    <Card className={cn('p-4 transition-all duration-300', activeComponents.has('ram') && 'border-primary ring-2 ring-primary/50')}>
                         <h4 className="font-semibold text-center mb-2">RAM</h4>
                         <div className="h-80 overflow-y-auto pr-2">
                             <Table>
                                 <TableHeader>
                                     <TableRow>
                                         <TableHead>Addr</TableHead>
                                         <TableHead>Instruction</TableHead>
                                         <TableHead>Value</TableHead>
                                     </TableRow>
                                 </TableHeader>
                                 <TableBody>
                                     {ram.map((cell, index) => (
                                         <TableRow key={index} className={cn(
                                             "transition-colors duration-300",
                                             pc === index && 'bg-yellow-200/50 dark:bg-yellow-800/30',
                                             mar === index && activeComponents.has('ram') && 'bg-primary/20'
                                         )}>
                                             <TableCell className="font-mono text-xs">{index.toString(16).toUpperCase().padStart(2, '0')}</TableCell>
                                             <TableCell className="font-mono text-xs">{cell.instruction}</TableCell>
                                             <TableCell className="font-mono text-xs">{cell.value}</TableCell>
                                         </TableRow>
                                     ))}
                                 </TableBody>
                             </Table>
                         </div>
                    </Card>
                </div>
            </CardContent>
            <Separator />
            <CardFooter className="p-4 flex flex-wrap items-center justify-between gap-4 bg-muted/50">
                <ButtonGroup>
                    <Button onClick={() => dispatch({ type: 'STEP' })} disabled={running} size="sm"><SkipForward className="mr-2 h-4 w-4" /> Step</Button>
                    {running ? (
                        <Button onClick={() => dispatch({ type: 'PAUSE' })} variant="destructive" size="sm"><Pause className="mr-2 h-4 w-4" /> Pause</Button>
                    ) : (
                        <Button onClick={() => dispatch({ type: 'RUN' })} size="sm"><Play className="mr-2 h-4 w-4" /> Run</Button>
                    )}
                    <Button onClick={() => dispatch({ type: 'RESET' })} variant="outline" size="sm"><RefreshCcw className="mr-2 h-4 w-4" /> Reset</Button>
                </ButtonGroup>
                <div className="flex items-center gap-2">
                    <Label htmlFor="speed" className="text-sm">Speed</Label>
                    <Slider id="speed" min={50} max={2000} step={50} value={[2050 - speed]} onValueChange={(v) => dispatch({ type: 'SET_SPEED', payload: 2050 - v[0]})} className="w-32" />
                </div>
            </CardFooter>
        </Card>
        </TooltipProvider>
    );
}
