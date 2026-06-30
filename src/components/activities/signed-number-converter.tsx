"use client"

import React, { useState, useMemo, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

type BitLength = '4' | '8' | '16';

const toBinary = (num: number, bits: number): string => {
  let binaryString = (num >>> 0).toString(2);
  if (binaryString.length > bits) {
    return binaryString.slice(binaryString.length - bits);
  }
  return binaryString.padStart(bits, '0');
};

const getSignedRepresentations = (num: number, bits: number) => {
  const isNegative = num < 0;
  const absNum = Math.abs(num);

  const maxPositive = Math.pow(2, bits - 1) - 1;
  const minNegative = -Math.pow(2, bits - 1);

  if (num > maxPositive || num < minNegative) {
    return { error: `Number must be between ${minNegative} and ${maxPositive} for ${bits} bits.` };
  }
  
  const positiveBinary = toBinary(absNum, bits);

  // Sign-Magnitude
  let signMagnitude = positiveBinary;
  if (isNegative) {
    if (num < minNegative) { 
        signMagnitude = "Error";
    } else {
        signMagnitude = '1' + positiveBinary.slice(1);
    }
  }

  // One's Complement
  let onesComplement = positiveBinary;
  if (isNegative) {
    onesComplement = positiveBinary.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
  }

  // Two's Complement
  let twosComplement = positiveBinary;
  if (isNegative) {
    const inverted = positiveBinary.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
    const decimalInverted = parseInt(inverted, 2);
    twosComplement = toBinary(decimalInverted + 1, bits);
  }
  
  if (num === minNegative) {
      signMagnitude = "Error";
      onesComplement = "Error";
  }


  return { signMagnitude, onesComplement, twosComplement, error: null };
};

const BinaryString = ({ binaryString, isSignBit }: { binaryString: string, isSignBit?: boolean }) => (
    <div className={cn(
        "flex gap-1 font-mono p-2",
        binaryString.length > 8 ? "text-sm gap-0.5" : "text-lg"
    )}>
        {binaryString.split('').map((bit, index) => (
            <span
                key={index}
                className={cn(
                    "w-6 h-8 flex items-center justify-center rounded",
                    (isSignBit && index === 0) ? 'font-bold text-primary' : '',
                    binaryString.length > 8 && "w-4 text-xs"
                )}
            >
                {bit}
            </span>
        ))}
    </div>
);


const OneComplementDisplay = ({ num, bits }: { num: number, bits: number }) => {
  const positiveBinary = toBinary(Math.abs(num), bits);
  
  if (num >= 0) {
    return <BinaryDisplay title="එකෙහි අනුපූරකය (One's Complement)" binaryString={positiveBinary} />;
  }

  const onesComplement = positiveBinary.split('').map(bit => bit === '0' ? '1' : '0').join('');

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">එකෙහි අනුපූරකය (One's Complement)</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center flex-grow p-4">
          <div className="flex flex-col items-center w-full bg-muted rounded-md p-2">
              <BinaryString binaryString={positiveBinary} />
              <p className="text-xs text-muted-foreground my-1">Invert all bits</p>
              <BinaryString binaryString={onesComplement} isSignBit />
          </div>
      </CardContent>
    </Card>
  )
}

const TwoComplementDisplay = ({ num, bits }: { num: number, bits: number }) => {
  const positiveBinary = toBinary(Math.abs(num), bits);
  
  if (num >= 0) {
    return <BinaryDisplay title="දෙකෙහි අනුපූරකය (Two's Complement)" binaryString={positiveBinary} />;
  }

  const onesComplement = positiveBinary.split('').map(bit => bit === '0' ? '1' : '0').join('');
  const twosComplement = toBinary(parseInt(onesComplement, 2) + 1, bits);

  return (
    <Card className="flex flex-col">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">දෙකෙහි අනුපූරකය (Two's Complement)</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center flex-grow p-4">
            <div className="flex flex-col items-end w-full bg-muted rounded-md p-2">
                <BinaryString binaryString={onesComplement} />
                <div className="flex items-center w-full justify-end pr-2">
                    <span className="text-lg font-mono mr-2">+</span>
                    <span className={cn(
                        "font-mono p-2 flex items-center justify-center",
                        bits > 8 ? "w-4 text-xs" : "w-6 h-8 text-lg"
                    )}>1</span>
                </div>
                <hr className="w-full border-t border-muted-foreground my-1" />
                <BinaryString binaryString={twosComplement} isSignBit />
            </div>
        </CardContent>
    </Card>
  )
}


const BinaryDisplay = ({ title, binaryString }: { title: string, binaryString: string }) => {
    if (binaryString === "Error") {
        return (
          <Card className="flex flex-col">
            <CardHeader className="pb-2"><CardTitle className="text-base">{title}</CardTitle></CardHeader>
            <CardContent className="flex-grow flex items-center justify-center">
              <span className="text-destructive font-semibold text-base">Out of Range</span>
            </CardContent>
          </Card>
        )
    }

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center w-full bg-muted rounded-md p-2">
          <BinaryString binaryString={binaryString} isSignBit={true} />
        </div>
        <div className={cn(
            "flex justify-between w-full px-1 mt-1 text-xs text-muted-foreground",
            binaryString.length > 8 && "text-[10px]"
            )}>
          <div className="flex flex-col items-center">
            <ArrowRight className="h-3 w-3 -rotate-90" />
            <span>MSB (Sign)</span>
          </div>
          <div className="flex flex-col items-center">
            <ArrowRight className="h-3 w-3 -rotate-90" />
            <span>LSB</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const SignedNumberConverter = ({ isPrintView }: { isPrintView: boolean }) => {
  const [inputValue, setInputValue] = useState('-5');
  const [bitLength, setBitLength] = useState<BitLength>('8');
  const inputRef = useRef<HTMLInputElement>(null);

  const { signMagnitude, onesComplement, twosComplement, error } = useMemo(() => {
    const num = parseInt(inputValue);
    if (isNaN(num) || inputValue.trim() === '' || inputValue === '-') {
      return { error: "Please enter a valid integer." };
    }
    return getSignedRepresentations(num, parseInt(bitLength));
  }, [inputValue, bitLength]);
  
  if (isPrintView) {
    const num = -5;
    const bits = 8;
    const reps = getSignedRepresentations(num, bits);
    return (
      <div className="not-prose">
        <h4 className="font-semibold mb-2">Signed Number Representation</h4>
        <p className="text-sm mb-2">Example for Decimal: <b>{num}</b> using <b>{bits} bits</b></p>
        <ul className="space-y-2 text-sm">
            <li><b>Sign-Magnitude:</b> <span className="font-mono">{reps.signMagnitude}</span></li>
            <li><b>One's Complement:</b> <span className="font-mono">{reps.onesComplement}</span></li>
            <li><b>Two's Complement:</b> <span className="font-mono">{reps.twosComplement}</span></li>
        </ul>
      </div>
    );
  }

  const num = parseInt(inputValue) || 0;
  const bits = parseInt(bitLength) || 8;

  return (
    <Card className="not-prose">
      <CardHeader className="flex-col sm:flex-row items-start sm:items-center sm:justify-between">
        <CardTitle className="mb-2 sm:mb-0">Signed Number Converter</CardTitle>
         <div className="flex flex-wrap items-center gap-2">
            <Label htmlFor="bit-length-select" className="text-sm font-medium">Bit Length:</Label>
            <Select value={bitLength} onValueChange={(v) => setBitLength(v as BitLength)}>
              <SelectTrigger id="bit-length-select" className="w-[120px] focus:ring-0 focus:ring-offset-0"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="4">4-bit</SelectItem>
                <SelectItem value="8">8-bit</SelectItem>
                <SelectItem value="16">16-bit</SelectItem>
              </SelectContent>
            </Select>
        </div>
      </CardHeader>
      <CardContent>
         <div className="shadow-sm border rounded-lg mb-6">
            <div 
              className="relative flex items-center justify-center h-20 text-4xl text-center font-mono tracking-wider bg-background rounded-lg cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              <div className='absolute inset-0 w-full h-full'>
                <input
                    ref={inputRef}
                    value={inputValue}
                    type="number"
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full h-full bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-4 text-transparent selection:text-transparent selection:bg-primary/30 caret-foreground text-center"
                />
              </div>
              <span className="truncate px-4">{inputValue || '0'}</span>
               <sub className="text-2xl text-muted-foreground font-mono self-end mb-3">10</sub>
            </div>
         </div>
        
        {error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <div className="space-y-4">
            {signMagnitude && <BinaryDisplay title="ලකුණුවත් පරමොණය (Sign-Magnitude)" binaryString={signMagnitude} />}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {onesComplement && <OneComplementDisplay num={num} bits={bits} />}
              {twosComplement && <TwoComplementDisplay num={num} bits={bits} />}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
