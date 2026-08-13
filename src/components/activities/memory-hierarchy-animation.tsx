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
    <div className={cn("relative w-full min-w-0 overflow-hidden rounded-lg border-2 p-3 sm:p-4 transition-all duration-300 min-h-[100px]", isActive ? "border-primary/80 bg-primary/10 shadow-lg" : "border-border bg-card", className)}>
        <div className="mb-2 flex items-center justify-between gap-2">
            <h4 className="flex items-center gap-2 text-xs font-bold sm:text-sm">{label}</h4>
            <Badge variant={isActive ? "default" : "secondary"} className="shrink-0 text-[10px] sm:text-xs">{speed}</Badge>
        </div>
        <div className="flex min-h-[2.5em] items-center justify-center rounded-md bg-background/50 p-2 font-mono text-[10px] text-muted-foreground break-all sm:min-h-[3em] sm:p-3 sm:text-xs">
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
        <p className="mt-1 text-right text-[10px] text-muted-foreground sm:text-xs">{capacity}</p>
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
                    <circle cx={to.split(',')[0]} cy={to.split(',')[1]} r="4" fill="hsl(var(--primary))" />
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
        <Card className="not-prose my-6 w-full max-w-full overflow-hidden">
            <CardHeader className="px-4 py-4 sm:px-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg"><ChevronsRight className="h-5 w-5" /> Memory Hierarchy Data Flow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-3 sm:px-4 md:px-6">
                <p className="text-xs leading-5 text-muted-foreground sm:text-sm">This animation shows how data moves from slower, larger storage to faster, smaller memory closer to the CPU.</p>
                <div className="relative w-full max-w-full overflow-hidden rounded-xl border-2 border-dashed bg-muted/30 p-3 sm:p-4">
                    {/* Motherboard area */}
                    <div className="relative w-full max-w-full overflow-hidden">
                        <div className="mb-4 flex justify-center md:justify-start">
                            <h3 className="text-sm font-bold tracking-[0.25em] text-muted-foreground sm:text-base">MOTHERBOARD</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-[minmax(220px,1fr)_minmax(0,2fr)] lg:gap-8">
                            {/* Left Side: Storage */}
                            <div className="flex flex-col justify-center space-y-4">
                                <MemoryBlock
                                    label="Hard Disk"
                                    speed="Slow"
                                    capacity="~1 TB"
                                    isActive={step >= 1}
                                    data={fullDataString}
                                />
                            </div>

                            {/* Right Side: CPU and RAM */}
                            <div className="space-y-4 min-w-0">
                                <div className="rounded-lg border-2 bg-background/50 p-3 sm:p-4">
                                    <h3 className="mb-2 flex items-center justify-center gap-2 text-center text-sm font-bold text-primary sm:text-base"><Cpu size={18} className="shrink-0 sm:h-5 sm:w-5" />CPU</h3>
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
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

                        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-full lg:block" style={{ viewBox: "0 0 400 400" }}>
                            <DataFlow from="100,60" to="260,280" duration={2} isActive={step === 2} />
                            <DataFlow from="260,220" to="280,110" duration={1} isActive={step === 3} />
                            <DataFlow from="280,50" to="190,50" duration={0.5} isActive={step === 4} />
                        </div>

                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t px-4 py-4 sm:px-6">
                <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
                    <Button onClick={startAnimation} disabled={isAnimating} className="w-full sm:w-auto">
                        <Play className="mr-2 h-4 w-4" /> {step === 5 ? "Replay" : "Play Animation"}
                    </Button>
                    <Button onClick={resetAnimation} variant="outline" disabled={step === 0} className="w-full sm:w-auto">
                        <RotateCcw className="mr-2 h-4 w-4" /> Reset
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};
