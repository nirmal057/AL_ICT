"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Palette, Binary, Text, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '../ui/tooltip';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const decimalToBinary = (dec: number) => {
    return (dec >>> 0).toString(2).padStart(8, '0');
}

const textToBinary = (text: string) => {
  return text.split('').map(char => {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
  }).join(' ');
}

export const ColorPickerTool = ({ isPrintView }: { isPrintView: boolean }) => {
  const [color, setColor] = useState('#a7d1ab');
  const [showDescriptionAsBinary, setShowDescriptionAsBinary] = useState(false);

  const getTextColor = (hexcolor: string) => {
    hexcolor = hexcolor.replace("#", "");
    const r = parseInt(hexcolor.substring(0, 2), 16);
    const g = parseInt(hexcolor.substring(2, 4), 16);
    const b = parseInt(hexcolor.substring(4, 6), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
  };
  
  const rgb = hexToRgb(color);
  const descriptionText = `ඔබ වෙබ් අඩවියක දකින වර්ණයක් (${color.toUpperCase()}) යනු ෂඩ් දශම කේතයකි. එය පරිගණකය තුළ රතු, කොළ, සහ නිල් වර්ණ වල තීව්‍රතාව නිරූපණය කරන ද්විමය සංඛ්‍යා සමූහයක් නියෝජනය කරයි.`;
  const descriptionBinary = useMemo(() => textToBinary(descriptionText), [descriptionText]);


  if (isPrintView) {
    return (
      <div className="not-prose">
        <h4 className="font-semibold mb-2">Did you know? Hexadecimal Color Codes</h4>
        <p className="text-sm">Web colors are often represented using 6-digit hexadecimal codes. For example, `#FF0000` represents pure red. The first two digits represent Red, the next two Green, and the last two Blue (RGB).</p>
      </div>
    );
  }

  return (
    <TooltipProvider>
    <Card className="my-4 not-prose">
        <CardHeader className="flex-col sm:flex-row items-start sm:items-center sm:justify-between">
            <CardTitle className="flex items-center gap-2 mb-2 sm:mb-0"><Palette /> Color Code Explorer</CardTitle>
            <div className="flex flex-wrap items-center gap-2">
              <Label htmlFor="color-picker" className="font-semibold text-sm">Color:</Label>
              <Input
                id="color-picker"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-16 h-10 p-1"
              />
              <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => setShowDescriptionAsBinary(!showDescriptionAsBinary)}>
                        {showDescriptionAsBinary ? <Text className="h-5 w-5" /> : <Binary className="h-5 w-5" />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{showDescriptionAsBinary ? "Show Text" : "Convert Text to Binary"}</p>
                </TooltipContent>
              </Tooltip>
            </div>
        </CardHeader>
        <CardContent 
            className="p-6 transition-colors duration-300 rounded-b-md"
            style={{ 
            backgroundColor: color, 
            color: getTextColor(color) 
            }}
        >
            <h4 className="font-bold">Did you know?</h4>
            {showDescriptionAsBinary ? (
                <p className="text-xs font-mono break-all mt-2 bg-background/20 p-2 rounded">
                    {descriptionBinary}
                </p>
            ) : (
            <p className="text-sm mt-2">
                {descriptionText}
            </p>
            )}
        </CardContent>
        {rgb && (
          <CardFooter className="p-0">
             <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-0">
                  <div className="border-t">
                    <AccordionTrigger className="p-4 text-sm font-semibold"><Eye className="mr-2 h-4 w-4" />Show Binary Breakdown</AccordionTrigger>
                  </div>
                  <AccordionContent className="p-4 pt-0">
                    <div className="flex flex-col md:flex-row gap-4 mt-2 font-mono text-xs">
                        <div className="p-2 bg-muted rounded flex-1">
                            <p>Red: <b>{rgb.r}</b> = <span className="font-bold text-red-500">{decimalToBinary(rgb.r)}</span></p>
                        </div>
                        <div className="p-2 bg-muted rounded flex-1">
                            <p>Green: <b>{rgb.g}</b> = <span className="font-bold text-green-500">{decimalToBinary(rgb.g)}</span></p>
                        </div>
                        <div className="p-2 bg-muted rounded flex-1">
                            <p>Blue: <b>{rgb.b}</b> = <span className="font-bold text-blue-500">{decimalToBinary(rgb.b)}</span></p>
                        </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </CardFooter>
        )}
    </Card>
    </TooltipProvider>
  );
};
