
"use client"

import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select';
import { Label } from '../ui/label';

type Base = '2' | '8' | '10' | '16';
const hexChars = "0123456789ABCDEF";

export const PositionalAbacus = ({ isPrintView }: { isPrintView: boolean }) => {
  const [base, setBase] = useState<Base>('10');
  const [places, setPlaces] = useState(4);
  const [values, setValues] = useState<number[]>(Array(4).fill(0));

  const handleBaseChange = (newBaseStr: string) => {
    const newBase = newBaseStr as Base;
    setBase(newBase);
    let newPlaces = places;
    if (newBase === '2' && places > 8) newPlaces = 8;
    else if (newBase === '10' && places > 6) newPlaces = 6;
    else if (newBase === '8' && places > 6) newPlaces = 6;
    else if (newBase === '16' && places > 4) newPlaces = 4;
    setPlaces(newPlaces);
    setValues(Array(newPlaces).fill(0));
  };

  const handlePlacesChange = (newPlacesStr: string) => {
    const newPlaces = parseInt(newPlacesStr);
    setPlaces(newPlaces);
    setValues(Array(newPlaces).fill(0));
  };
  
  const handleBeadClick = (place: number) => {
    setValues(prev => {
      const newValues = [...prev];
      newValues[place] = (newValues[place] + 1) % parseInt(base);
      return newValues;
    });
  };

  const resetAbacus = () => {
    setValues(Array(places).fill(0));
  }

  const { totalValue, calculationString } = useMemo(() => {
    let total = 0;
    const calcParts: string[] = [];
    const numBase = parseInt(base);
    values.forEach((value, index) => {
      const placePower = places - 1 - index;
      const positionalValue = Math.pow(numBase, placePower);
      if (value > 0) {
        total += value * positionalValue;
        calcParts.push(`(${hexChars[value]} × ${numBase}<sup>${placePower}</sup>)`);
      }
    });
    return { totalValue: total, calculationString: calcParts.reverse().join(' + ') };
  }, [values, base, places]);

  const baseName = useMemo(() => {
    if (base === '2') return "Binary";
    if (base === '8') return "Octal";
    if (base === '16') return "Hexadecimal";
    return "Decimal";
  }, [base]);

  const placeOptions = useMemo(() => {
    if (base === '2') return [4, 8, 12, 16];
    if (base === '8') return [3, 4, 5, 6];
    if (base === '16') return [2, 3, 4];
    return [2, 3, 4, 5, 6];
  }, [base]);

  if (isPrintView) {
    return (
       <div className="p-4 border rounded-lg not-prose">
            <h4 className="font-semibold mb-2">Positional Abacus: {baseName} (Base {base})</h4>
            <p className="text-sm">This shows how positional values work in the {baseName} system. The value of a digit depends on its position.</p>
            <div className="mt-2 text-center text-sm">Example: (1 × {base}²) + (0 × {base}¹) + (1 × {base}⁰)</div>
        </div>
    )
  }

  return (
    <Card className="not-prose">
      <CardHeader className="flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CardTitle>Positional Abacus</CardTitle>
        <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
                <Label htmlFor="base-select" className="text-sm">Base</Label>
                <Select value={base} onValueChange={handleBaseChange} >
                  <SelectTrigger id="base-select" className="w-[150px]">
                    <SelectValue/>
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="2">Binary (2)</SelectItem>
                      <SelectItem value="8">Octal (8)</SelectItem>
                      <SelectItem value="10">Decimal (10)</SelectItem>
                      <SelectItem value="16">Hexadecimal (16)</SelectItem>
                  </SelectContent>
              </Select>
            </div>
             <div className="flex items-center gap-1.5">
                <Label htmlFor="places-select" className="text-sm">Places</Label>
                <Select value={places.toString()} onValueChange={handlePlacesChange} >
                  <SelectTrigger id="places-select" className="w-[80px]">
                    <SelectValue/>
                  </SelectTrigger>
                  <SelectContent>
                     {placeOptions.map(p => <SelectItem key={p} value={p.toString()}>{p}</SelectItem>)}
                  </SelectContent>
              </Select>
            </div>
            <Button variant="ghost" size="icon" onClick={resetAbacus}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-end gap-1 md:gap-2 overflow-x-auto p-4 bg-muted/50 rounded-lg">
          {values.map((value, index) => {
            const numBase = parseInt(base);
            const placePower = places - 1 - index;
            const positionalValue = Math.pow(numBase, placePower);
            
            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="flex flex-col-reverse h-48 w-8 md:w-10 bg-background rounded-t-full rounded-b-md border border-b-4">
                  {Array.from({ length: value }).map((_, i) => (
                     <div key={i} className={cn("w-full h-3 rounded-full mb-1", 
                        base === '2' ? 'bg-blue-500' :
                        base === '8' ? 'bg-green-500' :
                        base === '10' ? 'bg-purple-500' :
                        'bg-red-500'
                     )} />
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="h-12 w-12 text-lg font-bold font-mono rounded-full"
                  onClick={() => handleBeadClick(index)}
                >
                  {hexChars[value]}
                </Button>
                <div className="text-xs text-muted-foreground font-mono">
                  {numBase}<sup>{placePower}</sup>
                </div>
                 <div className="text-xs font-semibold">
                  ({positionalValue})
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-center justify-center pt-6 border-t bg-muted/50">
        <h3 className="text-lg font-semibold">Decimal Value</h3>
        <p 
            className="text-sm text-muted-foreground break-all"
            dangerouslySetInnerHTML={{ __html: calculationString || "0" }}
        />
        <p className="text-3xl font-bold font-mono mt-2">{totalValue}</p>
      </CardFooter>
    </Card>
  );
};
