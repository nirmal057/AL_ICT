
"use client"

import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Type, Binary, Repeat, AlertCircle, Eye, TableIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { ScrollArea } from '../ui/scroll-area';

type Encoding = 'ascii' | 'utf-8' | 'bcd' | 'ebcdic';
type ConversionMode = 'text-to-binary' | 'binary-to-text';

const ASCII_PREVIEW = [
    { dec: '65', hex: '41', char: 'A' }, { dec: '66', hex: '42', char: 'B' }, { dec: '67', hex: '43', char: 'C' },
    { dec: '97', hex: '61', char: 'a' }, { dec: '98', hex: '62', char: 'b' }, { dec: '99', hex: '63', char: 'c' },
    { dec: '48', hex: '30', char: '0' }, { dec: '49', hex: '31', char: '1' }, { dec: '50', hex: '32', char: '2' },
];

const EBCDIC_CHARS: Record<string, number> = {
  ' ': 64, 'a': 129, 'b': 130, 'c': 131, 'd': 132, 'e': 133, 'f': 134, 'g': 135, 'h': 136, 'i': 137,
  'j': 145, 'k': 146, 'l': 147, 'm': 148, 'n': 149, 'o': 150, 'p': 151, 'q': 152, 'r': 153,
  's': 162, 't': 163, 'u': 164, 'v': 165, 'w': 166, 'x': 167, 'y': 168, 'z': 169,
  'A': 193, 'B': 194, 'C': 195, 'D': 196, 'E': 197, 'F': 198, 'G': 199, 'H': 200, 'I': 201,
  'J': 209, 'K': 210, 'L': 211, 'M': 212, 'N': 213, 'O': 214, 'P': 215, 'Q': 216, 'R': 217,
  'S': 226, 'T': 227, 'U': 228, 'V': 229, 'W': 230, 'X': 231, 'Y': 232, 'Z': 233,
  '0': 240, '1': 241, '2': 242, '3': 243, '4': 244, '5': 245, '6': 246, '7': 247, '8': 248, '9': 249
};
const CHARS_EBCDIC: Record<number, string> = Object.fromEntries(Object.entries(EBCDIC_CHARS).map(([k, v]) => [v, k]));

const EBCDIC_PREVIEW = [
    { dec: '193', hex: 'C1', char: 'A' }, { dec: '194', hex: 'C2', char: 'B' }, { dec: '195', hex: 'C3', char: 'C' },
    { dec: '129', hex: '81', char: 'a' }, { dec: '130', hex: '82', char: 'b' }, { dec: '131', hex: '83', char: 'c' },
    { dec: '209', hex: 'D1', char: 'J' }, { dec: '210', hex: 'D2', char: 'K' }, { dec: '145', hex: '91', char: 'j' },
    { dec: '240', hex: 'F0', char: '0' }, { dec: '241', hex: 'F1', char: '1' }, { dec: '242', hex: 'F2', char: '2' },
];

// --- Conversion Logic ---

const textToBinary = (text: string, encoding: Encoding): { result: string, steps: string[], error: string | null } => {
  let binaryString = '';
  let steps: string[] = [];
  try {
     if (encoding === 'bcd') {
      if (/[^0-9]/.test(text)) return { result: '', steps: [], error: 'BCD can only encode numeric digits (0-9).' };
      for(let char of text) {
        const bin = parseInt(char).toString(2).padStart(4, '0');
        binaryString += bin + ' ';
        steps.push(`Digit '${char}' → 4-bit binary <b>${bin}</b>`);
      }
    } else if (encoding === 'ebcdic') {
        for (const char of text) {
            const charCode = EBCDIC_CHARS[char];
            if (charCode === undefined) {
                 return { result: '', steps: [], error: `Character "${char}" is not supported in this simplified EBCDIC table.` };
            }
            const charBinary = charCode.toString(2).padStart(8, '0');
            binaryString += charBinary + ' ';
            steps.push(`The EBCDIC code for '${char}' is ${charCode}, which is <b>${charBinary}</b> in 8-bit binary.`);
        }
    } else { // ASCII or UTF-8
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charCode = text.charCodeAt(i);
        let charBinary = '';
        let stepDescription = '';

        if (encoding === 'ascii') {
          if (charCode > 127) {
              return { result: '', steps: [], error: `Non-ASCII character "${char}" found. Please use UTF-8 for non-English characters or remove it.` };
          }
          charBinary = charCode.toString(2).padStart(8, '0');
          stepDescription = `The ASCII code for '${char}' is ${charCode}, which is <b>${charBinary}</b> in 8-bit binary.`;
        } else { // utf-8
          if (charCode < 128) {
            charBinary = charCode.toString(2).padStart(8, '0');
            stepDescription = `The UTF-8 code for '${char}' (1-byte) is ${charCode}, which is <b>${charBinary}</b>.`;
          } else if (charCode < 2048) {
            const byte1 = 192 | (charCode >> 6);
            const byte2 = 128 | (charCode & 63);
            charBinary = `${byte1.toString(2).padStart(8, '0')} ${byte2.toString(2).padStart(8, '0')}`;
            stepDescription = `The UTF-8 code for '${char}' (2-bytes) is ${charCode}, represented as <b>${charBinary}</b>.`;
          } else {
              const byte1 = 224 | (charCode >> 12);
              const byte2 = 128 | ((charCode >> 6) & 63);
              const byte3 = 128 | (charCode & 63);
              charBinary = `${byte1.toString(2).padStart(8, '0')} ${byte2.toString(2).padStart(8, '0')} ${byte3.toString(2).padStart(8, '0')}`;
              stepDescription = `The UTF-8 code for '${char}' (3-bytes) is ${charCode}, represented as <b>${charBinary}</b>.`;
          }
        }
        binaryString += charBinary + ' ';
        steps.push(stepDescription);
      }
    }
    return { result: binaryString.trim(), steps, error: null };
  } catch (e) {
    return { result: '', steps: [], error: 'An unexpected error occurred during text-to-binary conversion.' };
  }
};

const binaryToText = (binary: string, encoding: Encoding): { result: string, steps: string[], error: string | null } => {
    const cleanedBinary = binary.replace(/\s/g, '');
    const bitsPerChunk = encoding === 'bcd' ? 4 : 8;
    if (/[^01]/.test(cleanedBinary) || cleanedBinary.length % bitsPerChunk !== 0) {
        return { result: '', steps: [], error: `Invalid binary string. It should contain only 0s and 1s, and its length must be a multiple of ${bitsPerChunk}.` };
    }

    const chunks = cleanedBinary.match(new RegExp(`.{1,${bitsPerChunk}}`, 'g')) || [];
    let text = '';
    let steps: string[] = [];
    
    try {
        if(encoding === 'bcd') {
             for (const chunk of chunks) {
                const dec = parseInt(chunk, 2);
                if (dec > 9) return { result: '', steps: [], error: `Invalid BCD chunk "${chunk}". BCD can only represent digits 0-9.`};
                text += dec.toString();
                steps.push(`Binary <b>${chunk}</b> is decimal <b>${dec}</b>.`);
            }
        } else if(encoding === 'ebcdic') {
             for (const byte of chunks) {
                const charCode = parseInt(byte, 2);
                const char = CHARS_EBCDIC[charCode];
                 if (!char) {
                     return { result: '', steps: [], error: `Binary code "${byte}" has no corresponding character in this simplified EBCDIC table.` };
                }
                text += char;
                steps.push(`Binary <b>${byte}</b> is decimal ${charCode}, which corresponds to the EBCDIC character '<b>${char}</b>'.`);
            }
        } else if (encoding === 'ascii') {
            for (const byte of chunks) {
                const charCode = parseInt(byte, 2);
                if (charCode > 127) {
                     return { result: '', steps: [], error: `Binary code "${byte}" represents a non-ASCII character. Try converting using UTF-8.` };
                }
                const char = String.fromCharCode(charCode);
                text += char;
                steps.push(`Binary <b>${byte}</b> is decimal ${charCode}, which corresponds to the character '<b>${char}</b>'.`);
            }
        } else { // utf-8
            let i = 0;
            while(i < chunks.length) {
                const byte1 = parseInt(chunks[i], 2);
                let char = '';
                let stepDescription = '';
                if (byte1 < 128) {
                    char = String.fromCharCode(byte1);
                    stepDescription = `Binary <b>${chunks[i]}</b> (1-byte char) corresponds to '<b>${char}</b>'.`;
                    i += 1;
                } else if ((byte1 & 224) === 192) {
                    const byte2 = parseInt(chunks[i+1], 2);
                    const charCode = ((byte1 & 31) << 6) | (byte2 & 63);
                    char = String.fromCharCode(charCode);
                    stepDescription = `Binary <b>${chunks[i]} ${chunks[i+1]}</b> (2-byte char) corresponds to '<b>${char}</b>'.`;
                    i += 2;
                } else if ((byte1 & 240) === 224) {
                    const byte2 = parseInt(chunks[i+1], 2);
                    const byte3 = parseInt(chunks[i+2], 2);
                    const charCode = ((byte1 & 15) << 12) | ((byte2 & 63) << 6) | (byte3 & 63);
                    char = String.fromCharCode(charCode);
                    stepDescription = `Binary <b>${chunks[i]} ${chunks[i+1]} ${chunks[i+2]}</b> (3-byte char) corresponds to '<b>${char}</b>'.`;
                    i += 3;
                } else {
                     return { result: '', steps: [], error: `Invalid UTF-8 starting byte: ${chunks[i]}`};
                }
                text += char;
                steps.push(stepDescription);
            }
        }
        return { result: text, steps, error: null };
    } catch (e) {
        return { result: '', steps: [], error: 'An unexpected error occurred during conversion.' };
    }
};

export const CharacterEncoder = ({ isPrintView, defaultEncoding = 'ascii' }: { isPrintView: boolean, defaultEncoding?: Encoding }) => {
  const [mode, setMode] = useState<ConversionMode>('text-to-binary');
  const [textInput, setTextInput] = useState('ICT');
  const [binaryInput, setBinaryInput] = useState('01001001 01000011 01010100');
  const [encoding, setEncoding] = useState<Encoding>(defaultEncoding);

  useEffect(() => {
    setEncoding(defaultEncoding);
  }, [defaultEncoding]);


  const { result, steps, error } = useMemo(() => {
    if (mode === 'text-to-binary') {
        if (!textInput) return { result: '', steps: [], error: null };
        return textToBinary(textInput, encoding);
    } else {
        if (!binaryInput) return { result: '', steps: [], error: null };
        return binaryToText(binaryInput, encoding);
    }
  }, [mode, textInput, binaryInput, encoding]);
  
  const switchMode = () => setMode(prev => prev === 'text-to-binary' ? 'binary-to-text' : 'text-to-binary');

  if (isPrintView) {
    return (
      <div className="not-prose my-6">
        <h4 className="font-semibold mb-2">Character Encoding</h4>
        <p className="text-sm">Example: The text "A" in ASCII is represented as the binary number <code>01000001</code>.</p>
      </div>
    );
  }

  const getTableData = () => {
      switch(encoding) {
          case 'ascii': return ASCII_PREVIEW;
          case 'ebcdic': return EBCDIC_PREVIEW;
          default: return [];
      }
  }

  return (
    <Card className="not-prose my-6">
      <CardHeader className="flex-col sm:flex-row items-start sm:items-center justify-between">
        <CardTitle className="flex items-center gap-2 mb-2 sm:mb-0">Character Encoder</CardTitle>
         <div className="flex flex-wrap items-center gap-2">
            <Label htmlFor="encoding-select" className="text-sm">Encoding Standard</Label>
            <Select value={encoding} onValueChange={(v) => setEncoding(v as Encoding)}>
                <SelectTrigger id="encoding-select" className="w-full sm:w-[180px] bg-background">
                    <SelectValue placeholder="Select Encoding" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="ascii">ASCII</SelectItem>
                    <SelectItem value="utf-8">UTF-8</SelectItem>
                    <SelectItem value="bcd">BCD (Digits 0-9 only)</SelectItem>
                    <SelectItem value="ebcdic">EBCDIC</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="w-full text-sm text-muted-foreground p-2 rounded-md max-w-md">
            {encoding === 'ascii' && '7-bit standard for English characters, commonly used in 8-bit bytes.'}
            {encoding === 'utf-8' && 'A variable-length encoding for all world languages. The web standard.'}
            {encoding === 'bcd' && 'Represents each decimal digit with a 4-bit binary number.'}
            {encoding === 'ebcdic' && 'An 8-bit encoding used mainly on IBM mainframe systems.'}
        </div>
        
        <div className="border rounded-lg shadow-sm">
          <div className="p-4 space-y-2">
            <Label htmlFor="input-area" className="flex items-center gap-2 text-sm text-muted-foreground">{mode === 'text-to-binary' ? <Type/> : <Binary/>} {mode === 'text-to-binary' ? 'Your Text' : 'Binary Input'}</Label>
            {mode === 'text-to-binary' ? (
                <Textarea id="input-area" value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder="Type text here..." className="h-28 font-mono" rows={3}/>
            ) : (
                <Textarea id="input-area" value={binaryInput} onChange={(e) => setBinaryInput(e.target.value)} placeholder="Enter binary code here (e.g., 01001000 01100101)" className="h-28 font-mono" rows={3}/>
            )}
          </div>
          <div className="relative border-t border-b">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="outline" size="icon" onClick={switchMode} className="rounded-full bg-background z-10"><Repeat className="h-5 w-5" /></Button>
              </div>
          </div>
          <div className="p-4 space-y-2 bg-muted/50 rounded-b-lg">
             <Label htmlFor="output-area" className="flex items-center gap-2 text-sm text-muted-foreground">{mode === 'binary-to-text' ? <Type/> : <Binary/>} {mode === 'binary-to-text' ? 'Text Output' : 'Binary Output'}</Label>
             <div className="p-4 rounded-md bg-background min-h-[112px] font-mono break-words text-sm">
                {error ? <span className="text-destructive">{error}</span> : result || <span className="text-muted-foreground">Output will appear here...</span>}
            </div>
          </div>
        </div>
      </CardContent>

       <CardFooter className="p-0">
           <Accordion type="single" collapsible className="w-full">
               {(error || (result && steps.length > 0)) && (
                   <AccordionItem value="item-1">
                       <div className="border-t">
                           <AccordionTrigger className="p-4 text-sm font-semibold"><Eye className="mr-2 h-4 w-4" />Show Step-by-step Explanation</AccordionTrigger>
                       </div>
                       <AccordionContent className="p-4 pt-0">
                           <div className="text-sm space-y-2 p-4 border rounded-md bg-background mt-2">
                               {steps.map((step, index) => (<div key={index} dangerouslySetInnerHTML={{ __html: step }} />))}
                           </div>
                       </AccordionContent>
                   </AccordionItem>
               )}
                {(encoding === 'ascii' || encoding === 'ebcdic') && (
                    <AccordionItem value="item-2">
                        <div className="border-t">
                             <AccordionTrigger className="p-4 text-sm font-semibold"><TableIcon className="mr-2 h-4 w-4" />View Character Table</AccordionTrigger>
                        </div>
                        <AccordionContent className="p-4 pt-0">
                             <ScrollArea className="h-60">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Character</TableHead>
                                            <TableHead>Decimal</TableHead>
                                            <TableHead>Hex</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {getTableData().map(item => (
                                            <TableRow key={item.dec}>
                                                <TableCell className="font-mono font-bold">{item.char}</TableCell>
                                                <TableCell className="font-mono">{item.dec}</TableCell>
                                                <TableCell className="font-mono">{item.hex}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                             </ScrollArea>
                        </AccordionContent>
                    </AccordionItem>
                )}
            </Accordion>
        </CardFooter>
    </Card>
  );
};
