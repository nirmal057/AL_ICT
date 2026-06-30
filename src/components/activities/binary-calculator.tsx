"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Calculator, Eye } from 'lucide-react';
import { ButtonGroup } from '../ui/button-group';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

type Operation = 'add' | 'subtract' | 'and' | 'or' | 'xor';

const padBinary = (bin: string, length: number) => bin.padStart(length, '0');

const binaryOperation = (a: string, b: string, op: Operation) => {
  const maxLength = Math.max(a.length, b.length);
  const paddedA = padBinary(a, maxLength);
  const paddedB = padBinary(b, maxLength);
  let result = '';
  let steps: { carry?: string; a: string; b: string; result: string; op: string, stepResult:string }[] = [];
  
  let carry = 0;

  for (let i = maxLength - 1; i >= 0; i--) {
    const bitA = parseInt(paddedA[i]);
    const bitB = parseInt(paddedB[i]);
    let step = { 
        carry: op === 'add' || op === 'subtract' ? (carry ? '1' : ' ') : undefined, 
        a: paddedA[i], 
        b: paddedB[i], 
        result: '', 
        op: getOpSymbol(op),
        stepResult: ''
    };

    switch (op) {
      case 'add': {
        const sum = bitA + bitB + carry;
        result = (sum % 2) + result;
        step.result = (sum % 2).toString();
        carry = sum > 1 ? 1 : 0;
        step.stepResult = `${bitA} + ${bitB} + ${step.carry?.trim() || 0} = ${sum}`;
        break;
      }
      case 'subtract': {
        const diff = bitA - bitB - carry;
        if (diff < 0) {
            result = '1' + result;
            carry = 1;
            step.stepResult = `${bitA+2} - ${bitB} - ${step.carry?.trim() || 0} = 1`;
        } else {
            result = diff.toString() + result;
            carry = 0;
             step.stepResult = `${bitA} - ${bitB} - ${step.carry?.trim() || 0} = ${diff}`;
        }
        step.result = result[0];
        break;
      }
      case 'and':
        result = (bitA & bitB) + result;
        step.result = (bitA & bitB).toString();
        step.stepResult = `${bitA} AND ${bitB} = ${step.result}`;
        break;
      case 'or':
        result = (bitA | bitB) + result;
        step.result = (bitA | bitB).toString();
        step.stepResult = `${bitA} OR ${bitB} = ${step.result}`;
        break;
      case 'xor':
        result = (bitA ^ bitB) + result;
        step.result = (bitA ^ bitB).toString();
        step.stepResult = `${bitA} XOR ${bitB} = ${step.result}`;
        break;
    }
    steps.unshift(step);
  }

  if (op === 'add' && carry > 0) {
    result = carry + result;
    steps.unshift({ carry: '1', a: ' ', b: ' ', result: '1', op: '+', stepResult: 'Final carry' });
  }

  return { result, steps };
};

const getOpSymbol = (op: Operation) => {
    switch(op){
        case 'add': return '+';
        case 'subtract': return '-';
        case 'and': return '&';
        case 'or': return '|';
        case 'xor': return '^';
    }
}

export const BinaryCalculator = ({ isPrintView }: { isPrintView: boolean }) => {
  const [valA, setValA] = useState('10110');
  const [valB, setValB] = useState('1101');
  const [operation, setOperation] = useState<Operation>('add');
  
  const validateInput = (value: string) => value.replace(/[^01]/g, '');

  const { result, steps } = useMemo(() => {
    if (!valA || !valB) return { result: '', steps: [] };
    return binaryOperation(valA, valB, operation);
  }, [valA, valB, operation]);
  
  const maxLength = Math.max(valA.length, valB.length, result.length);
  const paddedA = padBinary(valA, maxLength);
  const paddedB = padBinary(valB, maxLength);
  const finalResult = padBinary(result, maxLength);

  if (isPrintView) {
      return (
           <div className="p-4 border rounded-lg bg-gray-50 not-prose">
              <h4 className="font-semibold mb-2">Binary Calculator</h4>
              <p className="text-sm text-muted-foreground">This is an interactive binary calculator. Please view this content in a web browser to use the simulator.</p>
          </div>
      )
  }

  return (
    <Card className="not-prose my-6">
      <CardHeader className="flex-col items-start sm:flex-row sm:items-center sm:justify-between">
        <CardTitle className="flex items-center gap-2 mb-2 sm:mb-0">
            <Calculator /> Binary Calculator
        </CardTitle>
         <Select value={operation} onValueChange={(v) => setOperation(v as Operation)}>
            <SelectTrigger id="operation" className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="add">Addition (+)</SelectItem>
              <SelectItem value="subtract">Subtraction (-)</SelectItem>
              <SelectItem value="and">AND (&amp;)</SelectItem>
              <SelectItem value="or">OR (|)</SelectItem>
              <SelectItem value="xor">XOR (^)</SelectItem>
            </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-end gap-4 p-4 border rounded-lg">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="valA">Binary Number A</Label>
              <Input id="valA" value={valA} onChange={e => setValA(validateInput(e.target.value))} className="font-mono text-lg" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="valB">Binary Number B</Label>
              <Input id="valB" value={valB} onChange={e => setValB(validateInput(e.target.value))} className="font-mono text-lg" />
            </div>
        </div>
          
        <Separator />
          
        <div>
          <h3 className="font-semibold mb-2">Result</h3>
          <div className="p-4 bg-muted rounded-md font-mono text-xl text-right overflow-x-auto">
            {steps.length > 0 && (operation === 'add' || operation === 'subtract') &&
              <div className="text-sm text-muted-foreground">
                {steps[0].carry === ' ' ? ' ' : steps[0].carry?.padStart(maxLength, ' ')}
              </div>
            }
            <div>{paddedA}</div>
            <div className='flex justify-end items-center'>
                <span className='mr-2'>{getOpSymbol(operation)}</span>
                <span>{paddedB}</span>
            </div>
            <hr className="my-1 border-t-2 border-foreground" />
            <div className="font-bold">{finalResult}</div>
          </div>
        </div>
      </CardContent>
       {steps.length > 0 &&
        <CardFooter className="p-0">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-0">
              <div className="border-t">
                  <AccordionTrigger className="p-4 text-sm font-semibold"><Eye className="mr-2 h-4 w-4" />Show Step-by-step</AccordionTrigger>
              </div>
              <AccordionContent className="p-4 pt-0">
                  <div className="p-4 border rounded-md space-y-2 text-sm overflow-x-auto w-full bg-background">
                    <p className="text-muted-foreground">Calculation is done from right to left (Least Significant Bit to Most Significant Bit).</p>
                    {steps.map((step, index) => (
                      <div key={index} className="p-2 bg-muted/50 rounded-md">
                        <b>Column {steps.length - index}:</b> <span className='font-mono'>{step.stepResult}</span>. Result is <span className='font-bold font-mono'>{step.result}</span>.
                        { (operation === 'add' || operation === 'subtract') && step.carry && 
                          (index < steps.length-1 || step.carry.trim() === '1') &&
                          <span> Carry/borrow is <span className='font-bold font-mono'>{step.carry.trim() || '0'}</span>.</span>
                        }
                      </div>
                    ))}
                  </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardFooter>
      }
    </Card>
  );
};
