
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

export const ControlFlowStructuresDiagram = () => (
    <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
        {/* Sequence */}
        <Card>
            <CardHeader><CardTitle className="text-lg font-headline text-center">අනුක්‍රමය (Sequence)</CardTitle></CardHeader>
            <CardContent className="flex flex-col items-center gap-2">
                <div className="p-2 border rounded-md bg-background w-full text-center">Statement 1</div>
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
                <div className="p-2 border rounded-md bg-background w-full text-center">Statement 2</div>
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
                <div className="p-2 border rounded-md bg-background w-full text-center">Statement 3</div>
            </CardContent>
        </Card>

        {/* Selection */}
        <Card>
            <CardHeader><CardTitle className="text-lg font-headline text-center">තේරීම (Selection)</CardTitle></CardHeader>
            <CardContent className="flex flex-col items-center gap-2">
                <div className="p-3 border-2 border-primary rounded-lg w-full text-center diamond-shape bg-background">Condition?</div>
                <div className="flex w-full justify-around">
                    <div className="flex flex-col items-center">
                        <ArrowDown className="h-6 w-6 text-muted-foreground" />
                        <span className="text-xs font-bold text-green-600">True</span>
                        <div className="p-2 border rounded-md bg-background mt-1 text-center">Do This</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <ArrowDown className="h-6 w-6 text-muted-foreground" />
                        <span className="text-xs font-bold text-red-600">False</span>
                        <div className="p-2 border rounded-md bg-background mt-1 text-center">Do That</div>
                    </div>
                </div>
                 <ArrowDown className="h-6 w-6 text-muted-foreground mt-2" />
                 <div className="p-2 border rounded-md bg-background w-full text-center">Continue...</div>
            </CardContent>
        </Card>
        
        {/* Repetition */}
        <Card>
            <CardHeader><CardTitle className="text-lg font-headline text-center">පුනරාවර්තනය (Repetition)</CardTitle></CardHeader>
            <CardContent className="flex flex-col items-center gap-2">
                 <div className="p-3 border-2 border-primary rounded-lg w-full text-center diamond-shape bg-background">Condition Met?</div>
                 <div className="flex w-full justify-center relative">
                    <ArrowDown className="h-6 w-6 text-muted-foreground" />
                    <span className="text-xs font-bold text-green-600 absolute top-0 left-1/2 ml-4">True</span>
                 </div>
                 <div className="p-2 border rounded-md bg-background w-full text-center">Repeat this Block</div>
                  <div className="w-full h-10 border-r-2 border-b-2 border-l-2 border-muted-foreground rounded-b-lg relative">
                      <ArrowDown className="h-6 w-6 text-muted-foreground absolute -bottom-3 left-1/2 -translate-x-1/2 rotate-180" />
                  </div>
                 <div className="w-full flex justify-end relative">
                      <ArrowDown className="h-6 w-6 text-muted-foreground -rotate-90" />
                      <span className="text-xs font-bold text-red-600 absolute right-0 mt-2 mr-2">False</span>
                 </div>
            </CardContent>
        </Card>
    </div>
);
