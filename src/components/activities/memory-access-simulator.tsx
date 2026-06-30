"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { cn } from '@/lib/utils';
import { Play, RotateCcw } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { ButtonGroup } from '../ui/button-group';

const TAPE_BLOCKS = 10;
const DISK_BLOCKS = 10;

export function MemoryAccessSimulator({ isPrintView }: { isPrintView: boolean }) {
  const [targetBlock, setTargetBlock] = useState(5);
  const [seqHeadPos, setSeqHeadPos] = useState(-1);
  const [randHeadPos, setRandHeadPos] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSeqHeadPos(0);
    setRandHeadPos(-1);

    const seqInterval = setInterval(() => {
      setSeqHeadPos(prev => {
        if (prev >= targetBlock - 1) {
          clearInterval(seqInterval);
          // Jump random head after sequential is done
          setTimeout(() => {
            setRandHeadPos(targetBlock - 1);
            setTimeout(() => setIsAnimating(false), 500);
          }, 300);
          return targetBlock - 1;
        }
        return prev + 1;
      });
    }, 300);
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setSeqHeadPos(-1);
    setRandHeadPos(-1);
  };

  const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= TAPE_BLOCKS) {
      setTargetBlock(value);
    }
  }
  
  if (isPrintView) {
    return (
        <div className="p-4 border rounded-lg bg-gray-50 not-prose">
            <h4 className="font-semibold mb-2">Memory Access Methods</h4>
            <p className="text-sm text-muted-foreground">This is an interactive simulation demonstrating Sequential vs. Random Access. Please view this content in a web browser to use the simulator.</p>
        </div>
    );
  }

  return (
    <Card className="not-prose my-6">
      <CardHeader className="flex-col sm:flex-row items-start sm:items-center sm:justify-between">
        <CardTitle className="mb-2 sm:mb-0">Memory Access Method Simulator</CardTitle>
        <div className='flex flex-wrap items-center gap-2'>
            <Label htmlFor="target-block" className="flex-shrink-0">Target Block (1-{TAPE_BLOCKS})</Label>
            <Input 
                id="target-block"
                type="number"
                value={targetBlock}
                onChange={handleTargetChange}
                className="w-20"
                min={1}
                max={TAPE_BLOCKS}
                disabled={isAnimating}
            />
        </div>
      </CardHeader>
      <CardContent>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sequential Access */}
          <div className="space-y-4">
            <h3 className="font-semibold text-center">අනුක්‍රමික ප්‍රවේශය (Sequential Access)</h3>
            <div className="p-4 bg-muted/50 rounded-lg relative h-20 flex items-center">
              {/* Tape */}
              <div className="flex w-full justify-between">
                {Array.from({ length: TAPE_BLOCKS }).map((_, i) => (
                  <div key={i} className={cn(
                      "w-8 h-12 border-2 flex items-center justify-center font-mono",
                      i === targetBlock-1 ? "bg-primary/20 border-primary" : "bg-background border-border"
                  )}>
                    {i+1}
                  </div>
                ))}
              </div>
              {/* Read Head */}
              <AnimatePresence>
                {seqHeadPos !== -1 && (
                  <motion.div
                    className="absolute top-0 left-0 w-8 h-20 text-primary"
                    initial={{ x: 0 }}
                    animate={{ x: `${seqHeadPos * 100 + seqHeadPos * 4}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  >
                    <div className="w-full h-full border-2 border-primary rounded-md bg-primary/20 flex flex-col items-center justify-center">
                      <div className="text-xs">Head</div>
                      <div className="h-2 w-0.5 bg-primary"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
             <p className="text-xs text-center text-muted-foreground">උදා: චුම්භක පටි (Magnetic Tape). අවශ්‍ය දත්තය වෙත ළඟා වීමට ආරම්භයේ සිට පිළිවෙලින් යා යුතුය.</p>
          </div>

          {/* Random Access */}
          <div className="space-y-4">
            <h3 className="font-semibold text-center">සසම්භාවී ප්‍රවේශය (Random Access)</h3>
            <div className="p-4 bg-muted/50 rounded-lg relative h-20 flex items-center">
              {/* Disk */}
               <div className="flex w-full justify-between">
                {Array.from({ length: DISK_BLOCKS }).map((_, i) => (
                   <div key={i} className={cn(
                      "w-8 h-12 border-2 flex items-center justify-center font-mono",
                      i === targetBlock-1 ? "bg-primary/20 border-primary" : "bg-background border-border"
                  )}>
                    {i+1}
                  </div>
                ))}
              </div>
               {/* Read Head */}
              <AnimatePresence>
                {randHeadPos !== -1 && (
                  <motion.div
                    className="absolute top-0 left-0 w-8 h-20 text-primary"
                    initial={{ scale: 0.5, opacity: 0, x: `${randHeadPos * 100 + randHeadPos * 4}%` }}
                    animate={{ scale: 1, opacity: 1, x: `${randHeadPos * 100 + randHeadPos * 4}%` }}
                    transition={{ duration: 0.3 }}
                  >
                     <div className="w-full h-full border-2 border-primary rounded-md bg-primary/20 flex flex-col items-center justify-center">
                      <div className="text-xs">Head</div>
                      <div className="h-2 w-0.5 bg-primary"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p className="text-xs text-center text-muted-foreground">උදා: RAM, SSD. අවශ්‍ය දත්තය වෙත කෙලින්ම ප්‍රවේශ විය හැක.</p>
          </div>
        </div>
      </CardContent>
       <CardFooter className="flex-col md:flex-row gap-4 items-center justify-center border-t pt-4">
            <ButtonGroup>
                <Button onClick={startAnimation} disabled={isAnimating}>
                    <Play className="mr-2 h-4 w-4" /> Start
                </Button>
                <Button onClick={resetAnimation} variant="outline" disabled={!isAnimating && seqHeadPos === -1}>
                    <RotateCcw className="mr-2 h-4 w-4" /> Reset
                </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
  );
}
