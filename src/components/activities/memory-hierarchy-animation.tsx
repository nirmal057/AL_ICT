"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Play, RotateCcw, HardDrive, Cpu, MemoryStick, Zap, ChevronsRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

const fullDataString = "0100100101000011010101000100100101010011010001100101010101001110";

const MemoryBlock = ({ label, speed, data, capacity, isActive, className, children }: { label: string; speed: string; data?: string; capacity: string; isActive: boolean; className?: string; children?: React.ReactNode }) => (
    <div className={cn("relative p-4 border-2 rounded-lg transition-all duration-300 min-h-[100px]", isActive ? "border-primary/80 bg-primary/10 shadow-lg" : "border-border bg-card", className)}>
        <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold text-sm flex items-center gap-2">{label}</h4>
            <Badge variant={isActive ? "default" : "secondary"}>{speed}</Badge>
        </div>
        <div className="font-mono text-xs text-muted-foreground break-all min-h-[2.5em] flex items-center justify-center p-2 bg-background/50 rounded-md">
            <AnimatePresence>
                {isActive && data && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.2 } }}
                    >
                        {data}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
        <p className="text-right text-xs mt-1 text-muted-foreground">{capacity}</p>
        {children}
    </div>
);

const DataFlow = ({ from, to, duration, isActive }: { from: string, to: string, duration: number, isActive: boolean }) => (
    <AnimatePresence>
        {isActive && (
             <motion.div
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: duration, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
             >
                <svg width="100%" height="100%" viewBox="0 0 400 400" className="overflow-visible">
                    <path
                        d={`M ${from} L ${to}`}
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        fill="none"
                    />
                     <motion.g
                        initial={{ offsetDistance: "0%" }}
                        animate={{ offsetDistance: "100%" }}
                        transition={{ duration: duration, ease: "linear" }}
                    >
                        <path d={`M ${from} L ${to}`} fill="none" />
                        <circle r="4" fill="hsl(var(--primary))" />
                    </motion.g>
                </svg>
            </motion.div>
        )}
    </AnimatePresence>
);

export const MemoryHierarchyAnimation = ({ isPrintView }: { isPrintView: boolean }) => {
    const [step, setStep] = useState(0);
    const isAnimating = step > 0 && step < 5;

    const startAnimation = () => {
        if (isAnimating) return;
        setStep(1); // Start
        setTimeout(() => setStep(2), 100); // HDD -> RAM
        setTimeout(() => setStep(3), 2100); // RAM -> Cache
        setTimeout(() => setStep(4), 3200); // Cache -> Registers
        setTimeout(() => setStep(5), 4000); // End
    };

    const resetAnimation = () => {
        setStep(0);
    };

    if (isPrintView) {
        return (
            <div className="p-4 border rounded-lg bg-gray-50 not-prose">
                <h4 className="font-semibold mb-2">Memory Hierarchy Animation</h4>
                <p className="text-sm text-muted-foreground">This is an interactive animation. Please view this content in a web browser to use the simulator.</p>
            </div>
        );
    }
    
    return (
        <Card className="not-prose my-6">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><ChevronsRight /> Memory Hierarchy Data Flow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <p className="text-sm text-muted-foreground">This animation shows how data moves from slower, larger storage to faster, smaller memory closer to the CPU.</p>
                 <div className="relative p-4 border-2 border-dashed rounded-xl bg-muted/30">
                    {/* Motherboard area */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 transform -rotate-90">
                           <h3 className="font-bold text-lg text-muted-foreground tracking-widest">MOTHERBOARD</h3>
                        </div>
                        
                        <div className="grid grid-cols-[1fr,2fr] gap-8 ml-12">
                            {/* Left Side: Storage */}
                            <div className="space-y-4 flex flex-col justify-center">
                                 <MemoryBlock 
                                    label="Hard Disk"
                                    speed="Slow"
                                    capacity="~1 TB"
                                    isActive={step >= 1}
                                    data={fullDataString}
                                />
                            </div>

                            {/* Right Side: CPU and RAM */}
                            <div className="space-y-4">
                                <div className="p-4 border-2 rounded-lg bg-background/50">
                                     <h3 className="font-bold text-center mb-2 text-primary flex items-center justify-center gap-2"><Cpu size={20}/>CPU</h3>
                                     <div className="grid grid-cols-2 gap-4">
                                        <MemoryBlock 
                                            label="Registers"
                                            speed="Fastest"
                                            capacity="< 1 KB"
                                            isActive={step >= 4}
                                            data={fullDataString.substring(8, 16)}
                                        />
                                        <MemoryBlock 
                                            label="Cache"
                                            speed="Very Fast"
                                            capacity="~4 MB"
                                            isActive={step >= 3}
                                            data={fullDataString.substring(0, 24)}
                                        />
                                     </div>
                                </div>
                                 <MemoryBlock 
                                    label="RAM"
                                    speed="Fast"
                                    capacity="~16 GB"
                                    isActive={step >= 2}
                                    data={fullDataString.substring(0, 40)}
                                />
                            </div>
                        </div>

                         <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{viewBox:"0 0 400 400"}}>
                            <DataFlow from="100,60" to="260,280" duration={2} isActive={step === 2} />
                            <DataFlow from="260,220" to="280,110" duration={1} isActive={step === 3} />
                            <DataFlow from="280,50" to="190,50" duration={0.5} isActive={step === 4} />
                         </div>

                    </div>
                 </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-4">
                <ButtonGroup>
                    <Button onClick={startAnimation} disabled={isAnimating}>
                        <Play className="mr-2 h-4 w-4" /> {step === 5 ? "Replay" : "Play Animation"}
                    </Button>
                     <Button onClick={resetAnimation} variant="outline" disabled={step === 0}>
                        <RotateCcw className="mr-2 h-4 w-4" /> Reset
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};
