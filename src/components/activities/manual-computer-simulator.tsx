
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Label } from '@/components/ui/label';
import { Play, Pause, RefreshCcw, Loader, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ButtonGroup } from '../ui/button-group';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

const ProgramSteps = [
  { instruction: 'LOAD A, 5', binary: '00010101' },
  { instruction: 'ADD A, 2', binary: '00100010' },
  { instruction: "STORE A, 8", binary: '00111000' },
  { instruction: 'HALT', binary: '11110000' },
];

const STAGE_DURATIONS = {
  SETUP: 2000,
  LOAD: 1500,
  PROCESS: 500,
  OUTPUT: 2000,
};

type Stage = 'IDLE' | 'SETUP' | 'LOAD' | 'PROCESS' | 'OUTPUT' | 'DONE';

const StageInfo: Record<Stage, { title: string, description: string }> = {
    IDLE: { title: "Ready", description: "Press 'Start' to begin the simulation." },
    SETUP: { title: "Setup Time", description: "Operator is manually setting up the job (e.g., loading punch cards). The expensive CPU is idle." },
    LOAD: { title: "Loading Instruction", description: "The instruction is being loaded from the input into the computer's memory." },
    PROCESS: { title: "Processing", description: "The CPU is actively executing the instruction. This is the only time the CPU is doing useful work." },
    OUTPUT: { title: "Output/Teardown", description: "Operator is recording the output and preparing for the next job. The CPU is idle again." },
    DONE: { title: "Finished", description: "All instructions processed. The system is idle." },
}


export const ManualComputerSimulator = ({ isPrintView }: { isPrintView: boolean }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stage, setStage] = useState<Stage>('IDLE');
  const [binaryInput, setBinaryInput] = useState<string[]>(Array(8).fill('0'));
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [cpuUsage, setCpuUsage] = useState<{ active: number, idle: number }>({ active: 0, idle: 0 });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && stage !== 'DONE') {
      interval = setInterval(() => {
        setTime(prev => prev + 100);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning, stage]);

  const runStage = useCallback((currentStage: Stage, instructionIndex: number) => {
    if (!isRunning) return;

    setStage(currentStage);

    let nextStage: Stage;
    let nextInstructionIndex = instructionIndex;
    let duration = 0;
    
    switch (currentStage) {
      case 'SETUP':
        duration = STAGE_DURATIONS.SETUP;
        nextStage = 'LOAD';
        setCpuUsage(prev => ({...prev, idle: prev.idle + duration}));
        break;
      case 'LOAD':
        duration = STAGE_DURATIONS.LOAD;
        nextStage = 'PROCESS';
        setBinaryInput(ProgramSteps[instructionIndex].binary.split(''));
        setCpuUsage(prev => ({...prev, idle: prev.idle + duration}));
        break;
      case 'PROCESS':
         duration = STAGE_DURATIONS.PROCESS;
         nextStage = 'OUTPUT';
         setCpuUsage(prev => ({...prev, active: prev.active + duration}));
        break;
      case 'OUTPUT':
         duration = STAGE_DURATIONS.OUTPUT;
         nextInstructionIndex = instructionIndex + 1;
         if (nextInstructionIndex >= ProgramSteps.length) {
            nextStage = 'DONE';
            setIsRunning(false);
         } else {
             nextStage = 'LOAD';
         }
         setCurrentStep(nextInstructionIndex);
         setCpuUsage(prev => ({...prev, idle: prev.idle + duration}));
        break;
      default:
        return;
    }
    
    if (nextStage !== 'DONE' && isRunning) {
      setTimeout(() => runStage(nextStage, nextInstructionIndex), duration);
    }

  }, [isRunning]);
  
  const startSimulation = () => {
    if(isRunning) return;
    setIsRunning(true);
    setCurrentStep(0);
    setTime(0);
    setCpuUsage({ active: 0, idle: 0 });
    runStage('SETUP', 0);
  };
  
  const resetSimulation = () => {
    setIsRunning(false);
    setStage('IDLE');
    setCurrentStep(0);
    setTime(0);
    setCpuUsage({ active: 0, idle: 0 });
    setBinaryInput(Array(8).fill('0'));
  };

  if (isPrintView) {
    return (
        <div className="p-4 border rounded-lg bg-gray-50 not-prose">
            <h4 className="font-semibold mb-2">Manual Computer Simulator</h4>
            <p className="text-sm text-muted-foreground">This is an interactive simulation demonstrating the inefficiencies of early serial processing systems. Please view this content in a web browser to use the simulator.</p>
        </div>
    );
  }
  
  const totalUsage = cpuUsage.active + cpuUsage.idle;
  const activePercentage = totalUsage > 0 ? (cpuUsage.active / totalUsage) * 100 : 0;
  const idlePercentage = totalUsage > 0 ? (cpuUsage.idle / totalUsage) * 100 : 0;

  return (
    <Card className="not-prose my-6 overflow-hidden">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">Manual Computer Simulator</CardTitle>
             <p className="text-sm text-muted-foreground pt-2">Simulating the inefficient, one-job-at-a-time nature of early computing before modern operating systems.</p>
        </CardHeader>
        <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
                {/* Left side: Console */}
                <div className="p-4 border rounded-lg bg-muted/50 space-y-4">
                    <h3 className="font-semibold text-center">Virtual Console</h3>
                    {/* Punch Card Area */}
                    <div className="h-20">
                         <AnimatePresence>
                         {isRunning && stage !== 'DONE' && (
                             <motion.div 
                                key={currentStep}
                                className="w-48 h-20 bg-yellow-200 dark:bg-yellow-800 border-2 border-dashed border-yellow-500 rounded-lg p-2 mx-auto flex flex-col justify-center items-center"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100}}
                                transition={{ duration: 0.5}}
                             >
                                 <p className="text-xs font-semibold">Program Step {currentStep + 1}</p>
                                 <p className="font-mono text-sm">{ProgramSteps[currentStep].instruction}</p>
                             </motion.div>
                         )}
                         </AnimatePresence>
                         {stage === 'IDLE' && <p className="text-xs text-muted-foreground text-center pt-6">Punch cards will appear here.</p>}
                         {stage === 'DONE' && <p className="text-xs text-green-600 font-semibold text-center pt-6">All jobs processed!</p>}
                    </div>

                    {/* Switchboard */}
                    <div className="p-4 bg-background border rounded-md">
                        <Label className="text-xs text-muted-foreground">Binary Switchboard</Label>
                        <div className="flex justify-center items-center gap-1.5 mt-2">
                            {binaryInput.map((bit, index) => (
                                <div key={index} className="flex flex-col items-center gap-1">
                                    <div className={cn("w-3 h-3 rounded-full transition-colors", bit === '1' ? 'bg-green-500 shadow-[0_0_5px_1px_#22c55e]' : 'bg-muted-foreground/30')} />
                                    <div className={cn("w-6 h-8 flex items-center justify-center rounded bg-muted font-mono", bit === '1' && 'text-green-500 font-bold')}>
                                        {bit}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right side: Status and Timeline */}
                <div className="space-y-4">
                    <Card>
                        <CardHeader className="p-3">
                             <CardTitle className="text-base">Current Status</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                             <p className="font-semibold text-primary">{StageInfo[stage].title}</p>
                             <p className="text-xs text-muted-foreground">{StageInfo[stage].description}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="p-3">
                             <CardTitle className="text-base">CPU Utilization Timeline</CardTitle>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                           <div className="w-full bg-muted rounded-full h-6 flex overflow-hidden">
                                <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="bg-green-500 h-full transition-all duration-300" style={{ width: `${activePercentage}%`}} />
                                    </TooltipTrigger>
                                    <TooltipContent><p>CPU Active: {(cpuUsage.active / 1000).toFixed(1)}s</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                       <div className="bg-red-500 h-full transition-all duration-300" style={{ width: `${idlePercentage}%` }} />
                                    </TooltipTrigger>
                                    <TooltipContent><p>CPU Idle: {(cpuUsage.idle / 1000).toFixed(1)}s</p></TooltipContent>
                                </Tooltip>
                                </TooltipProvider>
                           </div>
                           <div className="flex justify-between text-xs mt-1">
                                <span className="text-green-600 font-semibold">Active</span>
                                <span className="text-red-600 font-semibold">Idle (Wasted Time)</span>
                           </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <ButtonGroup>
                <Button onClick={startSimulation} disabled={isRunning || stage === 'DONE'}>
                    <Play className="h-4 w-4 mr-2" /> Start Simulation
                </Button>
                <Button onClick={resetSimulation} variant="outline">
                    <RefreshCcw className="h-4 w-4 mr-2" /> Reset
                </Button>
            </ButtonGroup>
            <div className="ml-auto text-sm font-mono text-muted-foreground">
                Elapsed Time: <b>{(time / 1000).toFixed(1)}s</b>
            </div>
        </CardFooter>
    </Card>
  );
};
