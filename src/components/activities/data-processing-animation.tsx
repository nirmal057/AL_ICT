"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Cpu, Database, FileText, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { ButtonGroup } from '../ui/button-group';

const steps = [
  { name: 'Input', text: 'ශිෂ්‍යයාගේ නම: "සමන්", ලකුණු: 85, 72, 91', icon: Database },
  { name: 'Process', text: 'සාමාන්‍යය ගණනය කිරීම: (85+72+91)/3 = 82.67', icon: Cpu },
  { name: 'Output', text: '"සමන්ගේ සාමාන්‍ය ලකුණු 82.67කි."', icon: FileText },
];

export function DataProcessingAnimation({ isPrintView }: { isPrintView: boolean }) {
  const [currentStep, setCurrentStep] = useState(-1);

  const startAnimation = () => {
    setCurrentStep(0);
    setTimeout(() => setCurrentStep(1), 1500);
    setTimeout(() => setCurrentStep(2), 3000);
    setTimeout(() => setCurrentStep(-1), 5000);
  };
  
  if (isPrintView) {
    return (
        <div className="not-prose">
            <h4 className="font-semibold mb-2">Data Processing Cycle</h4>
            <ol className="space-y-2">
                {steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                        <span className="font-bold mr-2">{index + 1}. {step.name}:</span>
                        <span className="text-sm">{step.text}</span>
                    </li>
                ))}
            </ol>
        </div>
    )
  }

  return (
    <Card className="not-prose my-6">
      <CardHeader>
        <CardTitle>Data Processing Cycle</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative flex items-center justify-between h-48 bg-muted/30 rounded-lg p-4 overflow-hidden">
          {/* Boxes */}
          {steps.map((step, index) => (
            <React.Fragment key={step.name}>
              <div className="flex flex-col items-center z-10 w-1/4">
                <div className={cn("flex items-center justify-center h-16 w-16 rounded-full border-2 bg-background", currentStep >= index ? 'border-primary' : 'border-border')}>
                    <step.icon className={cn("h-8 w-8", currentStep >= index ? 'text-primary' : 'text-muted-foreground')} />
                </div>
                <p className="mt-2 font-semibold">{step.name}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 flex justify-center items-center">
                  <ArrowRight className="h-8 w-8 text-muted-foreground/50" />
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Animated Item */}
          <AnimatePresence>
            {currentStep !== -1 && (
              <motion.div
                className="absolute top-1/2 left-0 z-20"
                initial={{ x: '12.5%', y: '-50%', scale: 0.8 }}
                animate={{
                  x: currentStep === 0 ? '12.5%' : currentStep === 1 ? '50%' : '87.5%',
                  y: '-50%',
                  scale: 1,
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <div className="p-3 bg-primary/20 border border-primary rounded-lg shadow-lg text-center text-sm w-48">
                  {steps[currentStep].text}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4">
        <Button onClick={startAnimation} disabled={currentStep !== -1}>
            <Play className="mr-2 h-4 w-4" /> Start Animation
        </Button>
      </CardFooter>
    </Card>
  );
}
