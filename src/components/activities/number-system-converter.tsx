"use client"

import React, { useState, useRef } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { AlertCircle, ArrowRight, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

type Base = '2' | '8' | '10' | '16';

const getBaseName = (base: Base) => {
  switch (base) {
    case '2': return 'Binary';
    case '8': return 'Octal';
    case '10': return 'Decimal';
    case '16': return 'Hexadecimal';
  }
}

const isValidNumberForBase = (num: string, base: Base): boolean => {
  if (!num) return true;
  const regex = {
    '2': /^[01\.]+$/,
    '8': /^[0-7\.]+$/,
    '10': /^[0-9\.]+$/,
    '16': /^[0-9a-fA-F\.]+$/,
  };
  return regex[base].test(num);
};

const toDecimal = (num: string, fromBase: Base): { value: number; steps: string[] } => {
  const [integerPart, fractionalPart] = num.split('.');
  let decimalValue = 0;
  const steps: string[] = [];
  const from = parseInt(fromBase);

  // Integer part
  const intSteps: string[] = [];
  let intValue = 0;
  if (integerPart) {
    for (let i = 0; i < integerPart.length; i++) {
        const digit = parseInt(integerPart[integerPart.length - 1 - i], from);
        const positionalValue = Math.pow(from, i);
        intValue += digit * positionalValue;
        intSteps.push(`(${digit} × ${from}<sup>${i}</sup>)`);
    }
    steps.push(`<b>Integer Part (${integerPart}):</b><br/> ${intSteps.reverse().join(' + ')} = ${intValue}`);
  }
  decimalValue += intValue;

  // Fractional part
  if (fractionalPart) {
    const fracSteps: string[] = [];
    let fracValue = 0;
    for (let i = 0; i < fractionalPart.length; i++) {
      const digit = parseInt(fractionalPart[i], from);
      const positionalValue = Math.pow(from, -(i + 1));
      fracValue += digit * positionalValue;
      fracSteps.push(`(${digit} × ${from}<sup>-${i + 1}</sup>)`);
    }
    steps.push(`<b>Fractional Part (0.${fractionalPart}):</b><br/> ${fracSteps.join(' + ')} = ${fracValue.toFixed(4)}`);
    decimalValue += fracValue;
  }
  
  if (integerPart && fractionalPart) {
    steps.push(`<b>Total Decimal Value:</b> ${intValue} + ${fracValue.toFixed(4)} = ${decimalValue}`);
  } else if (!integerPart && fractionalPart) {
     steps.push(`<b>Final Decimal Value:</b> ${decimalValue}`);
  } else if (integerPart && !fractionalPart) {
    steps.push(`<b>Final Decimal Value:</b> ${decimalValue}`);
  }


  return { value: decimalValue, steps };
};

const fromDecimal = (num: number, toBase: Base): { value: string; steps: string[] } => {
  const to = parseInt(toBase);
  let integerPart = Math.floor(num);
  let fractionalPart = num - integerPart;
  const steps: string[] = [];

  // Integer part
  let integerResult = '';
  if (integerPart === 0) {
    integerResult = '0';
  } else {
    const intStepsRows = [];
    let tempInt = integerPart;
    let remainders = '';
    while (tempInt > 0) {
      const remainder = tempInt % to;
      const quotient = Math.floor(tempInt / to);
      intStepsRows.push(`<tr><td class="text-center p-1 border">${to}</td><td class="text-center p-1 border">${tempInt}</td><td class="text-center p-1 border"><b>${remainder.toString(to).toUpperCase()}</b></td></tr>`);
      tempInt = quotient;
      remainders = remainder.toString(to).toUpperCase() + remainders;
    }
    integerResult = remainders;
    const table = `<div class="overflow-x-auto"><table class="w-full my-2"><thead><tr><th class="p-1 border">Base</th><th class="p-1 border">Number</th><th class="p-1 border">Remainder</th></tr></thead><tbody>${intStepsRows.join('')}</tbody></table></div>`;
    steps.push(`<b>Integer Part (${integerPart}):</b><br/>Divide the number by ${to} repeatedly and record the remainders.<br/>${table}<br/>Reading remainders from bottom to top: <b>${integerResult}</b>`);
  }

  // Fractional part
  let fractionalResult = '';
  if (fractionalPart > 0) {
    const fracSteps: string[] = [];
    let tempFrac = fractionalPart;
    let maxPrecision = 10; 
    while (tempFrac > 0 && maxPrecision > 0) {
      const product = tempFrac * to;
      const digit = Math.floor(product);
      fracSteps.push(`${tempFrac.toFixed(4)} × ${to} = ${product.toFixed(4)} → Integer part is <b>${digit.toString(to).toUpperCase()}</b>`);
      fractionalResult += digit.toString(to).toUpperCase();
      tempFrac = product - digit;
      maxPrecision--;
    }
    steps.push(`<b>Fractional Part (${(num-integerPart).toFixed(4)}):</b><br/>Multiply the fractional part by ${to} repeatedly and record the integer part of the product.<br/>` + fracSteps.join('<br/>') + `<br/>Reading integer parts from top to bottom: <b>${fractionalResult}</b>`);
  }

  const finalResult = fractionalPart > 0 ? `${integerResult || '0'}.${fractionalResult}` : integerResult;
  steps.push(`<b>Final Result:</b> Combining the integer and fractional parts, we get <b>${finalResult}</b>.`);
  
  return { value: finalResult, steps };
};

const convertShortcut = (num: string, fromBase: Base, toBase: Base): {value: string; steps: string[]} => {
    const steps: string[] = [];
    
    // To Binary first
    const toBinary = (digit: string, base: number) => {
        const numBits = base === 8 ? 3 : 4;
        return parseInt(digit, base).toString(2).padStart(numBits, '0');
    }
    let binary = num.split('').map(digit => toBinary(digit, parseInt(fromBase))).join(' ');
    steps.push(`1. Convert each ${getBaseName(fromBase)} digit to its binary equivalent:<br/><div class="font-mono my-2 p-2 bg-muted rounded overflow-x-auto">${num.split('').map(d => `${d}<sub>${fromBase}</sub> → ${toBinary(d, parseInt(fromBase))}<sub>2</sub>`).join('<br/>')}</div>Combined: <b>${binary.replace(/\s/g, '')}</b>`);

    // From Binary to Target
    const bitsPerDigit = toBase === '8' ? 3 : 4;
    let binaryUnspaced = binary.replace(/\s/g, '');
    
    // Pad binary string
    while(binaryUnspaced.length % bitsPerDigit !== 0) {
        binaryUnspaced = '0' + binaryUnspaced;
    }
    const groupedBinary = binaryUnspaced.match(new RegExp(`.{1,${bitsPerDigit}}`, 'g'))?.join(' | ');
    steps.push(`2. Group the binary string into ${bitsPerDigit}-bit chunks (from right to left):<br/><div class="font-mono my-2 p-2 bg-muted rounded overflow-x-auto"><b>${groupedBinary}</b></div>`);
    
    const fromBinary = (binaryString: string) => {
        let result = '';
        const chunks = binaryString.match(new RegExp(`.{1,${bitsPerDigit}}`, 'g')) || [];
        for (const chunk of chunks) {
            result += parseInt(chunk, 2).toString(parseInt(toBase)).toUpperCase();
        }
        return result;
    }
    const result = fromBinary(binaryUnspaced);
    const conversionSteps = (binaryUnspaced.match(new RegExp(`.{1,${bitsPerDigit}}`, 'g')) || []).map(chunk => `${chunk}<sub>2</sub> → ${parseInt(chunk, 2).toString(parseInt(toBase)).toUpperCase()}<sub>${toBase}</sub>`).join('<br/>');

    steps.push(`3. Convert each chunk to a ${getBaseName(toBase)} digit:<br/><div class="font-mono my-2 p-2 bg-muted rounded overflow-x-auto">${conversionSteps}</div>Final Result: <b>${result}</b>`);

    return { value: result, steps };
}


export const NumberSystemConverter = ({ isPrintView }: { isPrintView: boolean }) => {
  const [inputValue, setInputValue] = useState('43');
  const [fromBase, setFromBase] = useState<Base>('10');
  const [toBase, setToBase] = useState<Base>('2');
  const [result, setResult] = useState<{ value: string; steps: string[] } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleConvert = () => {
    if (!inputValue.trim()) {
      setError(`Please enter a number to convert.`);
      setResult(null);
      return;
    }
    if (!isValidNumberForBase(inputValue, fromBase)) {
      setError(`Invalid number for ${getBaseName(fromBase)} base. Please use valid digits.`);
      setResult(null);
      return;
    }
    setError(null);

    let conversionResult;
    // Direct conversion
    if (fromBase === toBase) {
        conversionResult = { value: inputValue, steps: ["Input base is the same as the output base. No conversion needed."] };
    } else if (fromBase === '10') {
      conversionResult = fromDecimal(parseFloat(inputValue), toBase);
    } else if (toBase === '10') {
      conversionResult = { ...toDecimal(inputValue, fromBase), value: toDecimal(inputValue, fromBase).value.toString() };
    } else { // Convert via decimal (or shortcut for 2/8/16)
        const shortcutBases: Base[] = ['2', '8', '16'];
        if(shortcutBases.includes(fromBase) && shortcutBases.includes(toBase) && !inputValue.includes('.')) {
             conversionResult = convertShortcut(inputValue, fromBase, toBase);
        } else {
            const decimalConversion = toDecimal(inputValue, fromBase);
            const finalConversion = fromDecimal(decimalConversion.value, toBase);
            const combinedSteps = [
                `<h3>Step 1: Convert from ${getBaseName(fromBase)} to Decimal</h3>`,
                ...decimalConversion.steps,
                `<hr class="my-4"/>`,
                `<h3>Step 2: Convert from Decimal to ${getBaseName(toBase)}</h3>`,
                ...finalConversion.steps
            ];
            conversionResult = { value: finalConversion.value, steps: combinedSteps };
        }
    }
    setResult(conversionResult);
  };
  
  if (isPrintView) {
      return (
          <div className='not-prose'>
              <h4 className="font-semibold mb-2">Number System Conversions</h4>
              <p className="text-sm text-muted-foreground mb-4">Example: Convert 43₁₀ to Binary.</p>
              <div className="text-sm space-y-2">
                <p>1. Divide 43 by 2 repeatedly and record the remainders:</p>
                <ul className="list-disc pl-5">
                    <li>43 ÷ 2 = 21 R 1</li>
                    <li>21 ÷ 2 = 10 R 1</li>
                    <li>10 ÷ 2 = 5 R 0</li>
                    <li>5 ÷ 2 = 2 R 1</li>
                    <li>2 ÷ 2 = 1 R 0</li>
                    <li>1 ÷ 2 = 0 R 1</li>
                </ul>
                <p>2. Read remainders from bottom to top: <b>101011</b>.</p>
                <p><b>Result: 43₁₀ = 101011₂</b></p>
              </div>
          </div>
      )
  }

  return (
    <Card className='not-prose'>
      <CardHeader>
        <CardTitle>Number System Converter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="shadow-sm border rounded-lg">
          <div 
              className="relative flex items-center justify-center h-20 text-4xl text-center font-mono tracking-wider bg-background rounded-t-lg cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              <div className='absolute inset-0 w-full h-full'>
                <input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full h-full bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-4 text-transparent selection:text-transparent selection:bg-primary/30 caret-foreground text-center"
                />
              </div>
              <span className="truncate px-4">{inputValue || '0'}</span>
              <sub className="text-2xl text-muted-foreground font-mono self-end mb-3">{fromBase}</sub>
          </div>
          <div className="flex justify-between items-center bg-background border-input border-t">
              <div className="w-2/5">
                  <Select value={fromBase} onValueChange={(v) => setFromBase(v as Base)}>
                      <SelectTrigger className="rounded-none border-0 border-r focus:ring-0 focus:ring-offset-0 rounded-bl-lg">
                        <SelectValue/>
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="2">Binary (Base 2)</SelectItem>
                          <SelectItem value="8">Octal (Base 8)</SelectItem>
                          <SelectItem value="10">Decimal (Base 10)</SelectItem>
                          <SelectItem value="16">Hexadecimal (Base 16)</SelectItem>
                      </SelectContent>
                  </Select>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground flex-shrink-0" />
              <div className="w-2/5">
                  <Select value={toBase} onValueChange={(v) => setToBase(v as Base)}>
                      <SelectTrigger className="rounded-none border-0 border-l focus:ring-0 focus:ring-offset-0 rounded-br-lg">
                        <SelectValue/>
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="2">Binary (Base 2)</SelectItem>
                          <SelectItem value="8">Octal (Base 8)</SelectItem>
                          <SelectItem value="10">Decimal (Base 10)</SelectItem>
                          <SelectItem value="16">Hexadecimal (Base 16)</SelectItem>
                      </SelectContent>
                  </Select>
              </div>
          </div>
           <Button onClick={handleConvert} className="w-full rounded-t-none rounded-b-lg">Convert</Button>
        </div>

        {result && !error && (
            <div className="mt-6">
                <h3 className="font-semibold text-center mb-2">Result</h3>
                <p className="text-xl md:text-2xl font-bold font-mono text-center p-4 bg-muted/50 rounded-md break-all">
                    {inputValue}<sub>{fromBase}</sub> = {result.value}<sub>{toBase}</sub>
                </p>
            </div>
        )}
      </CardContent>
      {(error || (result && result.steps.length > 0)) && (
        <CardFooter className="p-0">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-0">
              <div className="border-t">
                <AccordionTrigger className="p-4 text-sm font-semibold"><Eye className="mr-2 h-4 w-4" />
                  {error ? "View Error Details" : "Show Step-by-step Explanation"}
                </AccordionTrigger>
              </div>
              <AccordionContent className="p-4 pt-0">
                  {error ? (
                    <Alert variant="destructive" className="mt-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Invalid Input</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  ) : (
                    <div className="text-sm space-y-4 p-4 border rounded-md bg-background/50">
                        {result?.steps.map((step, index) => (
                            <div key={index} dangerouslySetInnerHTML={{ __html: step }} />
                        ))}
                    </div>
                  )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardFooter>
      )}
    </Card>
  );
};
