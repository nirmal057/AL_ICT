
"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export const FlowchartNode = ({ label, x, y, type = "process" }: { label: string, x: number, y: number, type?: "process" | "decision" | "terminal" | "io" }) => {
    const commonProps = {
        className: "fill-card stroke-foreground",
        strokeWidth: "1.5"
    };

    const textProps: React.SVGProps<SVGTextElement> = {
        x,
        y,
        textAnchor: "middle",
        alignmentBaseline: "middle",
        className: "text-[10px] font-semibold"
    };

    if (type === "terminal") {
        return (
            <g>
                <rect x={x - 50} y={y - 15} width="100" height="30" rx="15" {...commonProps} />
                <text {...textProps}>{label}</text>
            </g>
        );
    }

    if (type === "decision") {
        return (
            <g>
                <path d={`M ${x} ${y - 25} L ${x + 70} ${y} L ${x} ${y + 25} L ${x - 70} ${y} Z`} {...commonProps} />
                <text {...textProps} style={{ whiteSpace: "pre-wrap" }}>{label}</text>
            </g>
        );
    }
    
     if (type === "io") {
        return (
            <g>
                <path d={`M ${x - 55} ${y - 15} L ${x + 45} ${y - 15} L ${x + 55} ${y + 15} L ${x - 45} ${y + 15} Z`} {...commonProps} />
                <text {...textProps}>{label}</text>
            </g>
        );
    }

    // Process (default)
    return (
        <g>
            <rect x={x - 60} y={y - 20} width="120" height="40" rx="5" {...commonProps} />
            <text {...textProps} style={{ whiteSpace: "pre-wrap" }}>{label}</text>
        </g>
    );
};

export const Arrow = ({ from, to, label }: { from: {x: number, y: number}, to: {x: number, y: number}, label?: string }) => {
    return (
        <g>
            <defs>
                <marker id="arrow-flow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" className="fill-foreground" />
                </marker>
            </defs>
            <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} markerEnd="url(#arrow-flow)" className="stroke-foreground" />
            {label && <text x={(from.x + to.x) / 2 - 10} y={(from.y + to.y) / 2 - 5} className="text-[10px] bg-background px-1">{label}</text>}
        </g>
    )
};


const KMapCell = ({ val, x, y, className }: { val: string, x: number, y: number, className?: string }) => (
    <text x={x} y={y} textAnchor="middle" alignmentBaseline="middle" className={cn("text-lg font-bold", className)}>{val}</text>
);

export const LogicCircuit2014P1Q12 = () => (
    <svg viewBox="0 0 350 150" className="w-full max-w-sm h-auto">
        <text x="10" y="25">X</text><line x1="20" y1="20" x2="50" y2="20" className="stroke-foreground"/>
        <text x="10" y="55">Y</text><line x1="20" y1="50" x2="50" y2="50" className="stroke-foreground"/>
        <text x="80" y="105">Z</text><line x1="90" y1="100" x2="130" y2="100" className="stroke-foreground"/>

        {/* OR Gate (X, Y) */}
        <path d="M 50 15 C 80 35, 80 55, 50 75 Q 60, 45, 50 15 Z" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <line x1="83" y1="45" x2="130" y2="45" className="stroke-foreground"/>

        {/* AND Gate */}
        <path d="M 130 40 L 130 105 C 150 105, 150 40, 130 40 Z" className="fill-card stroke-foreground" strokeWidth="1.5"/>
        <line x1="160" y1="72.5" x2="190" y2="72.5" className="stroke-foreground"/>

        {/* Final OR Gate */}
        <line x1="20" y1="50" x2="165" y2="50" className="stroke-foreground"/>
        <line x1="165" y1="50" x2="190" y2="60" className="stroke-foreground"/>
        <path d="M 190 55 C 220 72.5, 220 92.5, 190 110 Q 200, 82.5, 190 55 Z" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <line x1="223" y1="82.5" x2="250" y2="82.5" className="stroke-foreground"/>
        <text x="260" y="87.5">Q</text>
    </svg>
);
export const LogicCircuit2014P1Q12Options = () => {
    // Simplified circuits based on the options. Only showing the correct one (4).
    return(
        <div className="flex justify-center">
            <svg viewBox="0 0 250 100" className="w-full max-w-xs h-auto">
                <text x="10" y="25">X</text><line x1="20" y1="20" x2="50" y2="20" className="stroke-foreground"/>
                <text x="10" y="85">Z</text><line x1="20" y1="80" x2="50" y2="80" className="stroke-foreground"/>
                <text x="80" y="55">Y</text><line x1="90" y1="50" x2="130" y2="50" className="stroke-foreground"/>
                {/* AND Gate (X,Z) */}
                <path d="M 50 15 L 50 85 C 70 85, 70 15, 50 15 Z" className="fill-card stroke-foreground" strokeWidth="1.5" />
                <line x1="80" y1="50" x2="130" y2="50" className="stroke-foreground"/>
                {/* OR Gate */}
                <path d="M 130 45 C 160 62.5, 160 82.5, 130 100 Q 140, 72.5, 130 45 Z" className="fill-card stroke-foreground" transform="translate(0, -20)" strokeWidth="1.5" />
                <line x1="163" y1="52.5" x2="190" y2="52.5" className="stroke-foreground"/>
                <text x="200" y="57.5">Q</text>
            </svg>
        </div>
    );
};


export const CircuitDiagram2014P1Q13 = () => (
    <svg viewBox="0 0 300 150" className="w-full max-w-xs h-auto">
        {/* Power Source */}
        <circle cx="20" cy="75" r="10" className="fill-none stroke-foreground" /><text x="20" y="79" textAnchor="middle">+</text>
        
        {/* Wires */}
        <line x1="30" y1="75" x2="60" y2="75" className="stroke-foreground" />
        <line x1="60" y1="25" x2="60" y2="125" className="stroke-foreground" />
        <line x1="60" y1="25" x2="100" y2="25" className="stroke-foreground" />
        <line x1="60" y1="125" x2="100" y2="125" className="stroke-foreground" />
        <line x1="60" y1="75" x2="100" y2="75" className="stroke-foreground" />

        <line x1="180" y1="25" x2="220" y2="25" className="stroke-foreground" />
        <line x1="180" y1="125" x2="220" y2="125" className="stroke-foreground" />
        <line x1="180" y1="75" x2="220" y2="75" className="stroke-foreground" />
        <line x1="220" y1="25" x2="220" y2="125" className="stroke-foreground" />
        <line x1="220" y1="75" x2="260" y2="75" className="stroke-foreground" />
        
        {/* Switches */}
        <g transform="translate(100, 20)"><circle cx="20" cy="5" r="3" className="fill-foreground"/><line x1="20" y1="5" x2="60" y2="5" className="stroke-foreground"/><text x="40" y="-5" textAnchor="middle">S1</text></g>
        <g transform="translate(100, 120)"><circle cx="20" cy="5" r="3" className="fill-foreground"/><line x1="20" y1="5" x2="60" y2="5" className="stroke-foreground"/><text x="40" y="-5" textAnchor="middle">S4</text></g>
        <g transform="translate(100, 70)"><circle cx="20" cy="5" r="3" className="fill-foreground"/><line x1="20" y1="5" x2="30" y2="5" className="stroke-foreground"/><text x="10" y="-5" textAnchor="middle">S2</text></g>
        <g transform="translate(140, 70)"><circle cx="20" cy="5" r="3" className="fill-foreground"/><line x1="20" y1="5" x2="30" y2="5" className="stroke-foreground"/><text x="10" y="-5" textAnchor="middle">S3</text></g>
        
        {/* Bulb */}
        <circle cx="270" cy="75" r="10" className="fill-none stroke-foreground" /><line x1="264" y1="70" x2="276" y2="80" className="stroke-foreground"/><line x1="264" y1="80" x2="276" y2="70" className="stroke-foreground"/>
    </svg>
);


export const DirectoryTree2014P1Q18 = () => (
    <div className="font-mono text-sm p-4 bg-muted/50 rounded-lg">
        <p>shop/</p>
        <p className="pl-4">├── index.html</p>
        <p className="pl-4">├── home/</p>
        <p className="pl-4">├── images/</p>
        <p className="pl-4">└── greeting/</p>
        <p className="pl-8">    └── birthday/</p>
        <p className="pl-12">        └── greeting.html</p>
    </div>
);


export const InformationValueDecayDiagram = () => (
    <svg viewBox="0 0 400 250" className="w-full max-w-md h-auto">
        <title>Information Value Decay Over Time</title>
        {/* Axes */}
        <line x1="40" y1="220" x2="380" y2="220" className="stroke-foreground" strokeWidth="1.5" />
        <line x1="40" y1="220" x2="40" y2="20" className="stroke-foreground" strokeWidth="1.5" />
        <text x="385" y="225" className="text-xs fill-muted-foreground">Time</text>
        <text x="35" y="15" textAnchor="end" className="text-xs fill-muted-foreground">Value</text>

        {/* Curves */}
        <path d="M 50 50 Q 80 150, 150 210" stroke="hsl(var(--chart-1))" fill="none" strokeWidth="2" />
        <text x="70" y="70" fill="hsl(var(--chart-1))" className="text-sm font-bold">P</text>

        <path d="M 60 60 Q 95 160, 170 215" stroke="hsl(var(--chart-2))" fill="none" strokeWidth="2" />
        <text x="85" y="80" fill="hsl(var(--chart-2))" className="text-sm font-bold">Q</text>

        <path d="M 70 40 Q 110 140, 200 210" stroke="hsl(var(--chart-3))" fill="none" strokeWidth="2" />
        <text x="100" y="60" fill="hsl(var(--chart-3))" className="text-sm font-bold">R</text>

        <path d="M 80 80 Q 200 180, 350 215" stroke="hsl(var(--chart-4))" fill="none" strokeWidth="2" />
        <text x="150" y="120" fill="hsl(var(--chart-4))" className="text-sm font-bold">S</text>

        <path d="M 90 90 Q 220 190, 360 218" stroke="hsl(var(--chart-5))" fill="none" strokeWidth="2" />
        <text x="180" y="140" fill="hsl(var(--chart-5))" className="text-sm font-bold">T</text>
    </svg>
);


export const KMap2024Q14 = () => (
    <svg viewBox="0 0 250 150" className="w-full max-w-xs h-auto">
        {/* Grid lines */}
        <line x1="50" y1="50" x2="250" y2="50" className="stroke-foreground" />
        <line x1="50" y1="90" x2="250" y2="90" className="stroke-foreground" />
        <line x1="100" y1="10" x2="100" y2="130" className="stroke-foreground" />
        <line x1="150" y1="10" x2="150" y2="130" className="stroke-foreground" />
        <line x1="200" y1="10" x2="200" y2="130" className="stroke-foreground" />


        {/* Labels */}
        <text x="25" y="35" className="text-sm fill-muted-foreground">y</text>
        <text x="5" y="70" className="text-sm fill-muted-foreground">0</text>
        <text x="5" y="110" className="text-sm fill-muted-foreground">1</text>
        <text x="45" y="20" className="text-sm fill-muted-foreground">xz</text>
        <text x="75" y="35" className="text-sm fill-muted-foreground">00</text>
        <text x="125" y="35" className="text-sm fill-muted-foreground">01</text>
        <text x="175" y="35" className="text-sm fill-muted-foreground">11</text>
        <text x="225" y="35" className="text-sm fill-muted-foreground">10</text>
        
        {/* K-Map values */}
        <KMapCell val="0" x="75" y="70" />
        <KMapCell val="1" x="125" y="70" />
        <KMapCell val="0" x="175" y="70" />
        <KMapCell val="0" x="225" y="70" />

        <KMapCell val="0" x="75" y="110" />
        <KMapCell val="1" x="125" y="110" />
        <KMapCell val="0" x="175" y="110" />
        <KMapCell val="0" x="225" y="110" />

        {/* Grouping */}
        <rect x="105" y="55" width="40" height="70" rx="5" ry="5" className="fill-primary/20 stroke-primary" strokeWidth="2" />
    </svg>
);

const ASCIITable2024Q10 = () => (
    <div className="w-full overflow-x-auto my-4">
        <table className="border-collapse border w-full text-sm">
            <thead className="bg-muted">
                <tr>
                    <th className="p-2 border">Word</th>
                    <th className="p-2 border">Binary Representation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="p-2 border font-mono">no</td>
                    <td className="p-2 border font-mono">1101110 1101111</td>
                </tr>
                 <tr>
                    <td className="p-2 border font-mono">N!</td>
                    <td className="p-2 border font-mono">1001110 0100001</td>
                </tr>
                 <tr>
                    <td className="p-2 border font-mono">No!</td>
                    <td className="p-2 border font-mono"></td>
                </tr>
            </tbody>
        </table>
    </div>
);

const LogicGate2024P2Q5a = () => (
  <svg viewBox="0 0 300 150" className="w-full max-w-sm h-auto">
    <title>Logic Circuit for 2024 Paper 2 Q5a</title>
    
    <text x="10" y="25">A</text>
    <line x1="20" y1="20" x2="80" y2="20" className="stroke-foreground"/>
    
    <text x="10" y="55">B</text>
    <line x1="20" y1="50" x2="80" y2="50" className="stroke-foreground"/>
    
    <text x="10" y="105">C</text>
    <line x1="20" y1="100" x2="160" y2="100" className="stroke-foreground"/>

    <path d="M 80 10 C 100 10, 100 60, 80 60 L 80 10 Z" className="fill-card stroke-foreground" strokeWidth="1.5" />
    <circle cx="110" cy="35" r="3" className="fill-card stroke-foreground" strokeWidth="1.5"/>
    <line x1="113" y1="35" x2="160" y2="35" className="stroke-foreground"/>

    <path d="M 160 30 L 160 105 C 180 105, 180 30, 160 30 Z" className="fill-card stroke-foreground" strokeWidth="1.5"/>
    <line x1="190" y1="67.5" x2="220" y2="67.5" className="stroke-foreground"/>
    <text x="230" y="72.5">Z</text>
  </svg>
);

const KMap2024P2Q5c = () => (
    <svg viewBox="0 0 250 150" className="w-full max-w-xs h-auto">
        <title>Karnaugh Map for 2024 Paper 2 Q5c</title>
        <rect x="50" y="50" width="200" height="80" className="fill-none stroke-foreground" strokeWidth="1.5" />
        <line x1="50" y1="90" x2="250" y2="90" className="stroke-foreground" />
        <line x1="100" y1="50" x2="100" y2="130" className="stroke-foreground" />
        <line x1="150" y1="50" x2="150" y2="130" className="stroke-foreground" />
        <line x1="200" y1="50" x2="200" y2="130" className="stroke-foreground" />
        <text x="25" y="70" textAnchor="middle">C</text>
        <text x="25" y="110" textAnchor="middle">1</text>
        <text x="125" y="35" textAnchor="middle">AB</text>
        <text x="75" y="45" textAnchor="middle">00</text>
        <text x="125" y="45" textAnchor="middle">01</text>
        <text x="175" y="45" textAnchor="middle">11</text>
        <text x="225" y="45" textAnchor="middle">10</text>
        <text x="35" y="70" textAnchor="middle">0</text>
    </svg>
);

const ArduinoCircuit2024P2Q7a = () => (
  <svg viewBox="0 0 400 200" className="w-full max-w-md h-auto">
    <title>Arduino Circuit for 2024 Paper 2 Q7a</title>
    {/* ATmega328P Chip */}
    <rect x="100" y="50" width="200" height="100" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5"/>
    <text x="200" y="105" textAnchor="middle" className="font-bold">ATmega328P</text>

    {/* Power and Ground */}
    <line x1="20" y1="20" x2="380" y2="20" className="stroke-red-500" strokeWidth="1"/>
    <text x="15" y="18" className="text-xs fill-red-500">+5V</text>
    <line x1="20" y1="180" x2="380" y2="180" className="stroke-blue-500" strokeWidth="1"/>
    <text x="15" y="185" className="text-xs fill-blue-500">GND</text>
    
    {/* Buzzer */}
    <circle cx="350" cy="100" r="15" className="fill-muted stroke-foreground" strokeWidth="1.5"/>
    <text x="350" y="105" textAnchor="middle">Buzzer</text>
    <line x1="335" y1="100" x2="280" y2="100" className="stroke-foreground"/>
    <text x="285" y="95" className="text-xs">Pin 14 (D8)</text>
    <line x1="280" y1="100" x2="200" y2="100" className="stroke-foreground"/>
    
    {/* Sensor and Resistor */}
    <rect x="20" y="80" width="40" height="20" className="fill-muted stroke-foreground"/>
    <text x="40" y="95" textAnchor="middle" className="text-xs">Sensor</text>
    <line x1="60" y1="90" x2="100" y2="90" className="stroke-foreground"/>
    <line x1="120" y1="90" x2="120" y2="20" className="stroke-foreground"/>
    <line x1="120" y1="90" x2="150" y2="90" className="stroke-foreground"/>
    <text x="155" y="85" className="text-xs">Pin 15 (D9)</text>
    
    {/* Pull-down resistor */}
    <rect x="115" y="110" width="10" height="40" className="fill-none stroke-foreground"/>
    <text x="130" y="130" className="text-xs">10k</text>
    <line x1="120" y1="90" x2="120" y2="110" className="stroke-foreground"/>
    <line x1="120" y1="150" x2="120" y2="180" className="stroke-foreground"/>
  </svg>
);


const ResultTable2024P2Q9b = () => (
    <div className="overflow-x-auto my-4 text-sm">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Student_ID</TableHead>
                    <TableHead>Student_Name</TableHead>
                    <TableHead>Subject_ID</TableHead>
                    <TableHead>Subject_Name</TableHead>
                    <TableHead>Teacher_ID</TableHead>
                    <TableHead>Teacher_Name</TableHead>
                    <TableHead>Exam_Date</TableHead>
                    <TableHead>Mark</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow><TableCell>101</TableCell><TableCell>Arun</TableCell><TableCell>SU101</TableCell><TableCell>ICT</TableCell><TableCell>2001</TableCell><TableCell>Smith</TableCell><TableCell>2024-09-20</TableCell><TableCell>85</TableCell></TableRow>
                <TableRow><TableCell>102</TableCell><TableCell>Kamal</TableCell><TableCell>SU102</TableCell><TableCell>Physics</TableCell><TableCell>2002</TableCell><TableCell>Johnson</TableCell><TableCell>2024-09-21</TableCell><TableCell>78</TableCell></TableRow>
                <TableRow><TableCell>103</TableCell><TableCell>Fernando</TableCell><TableCell>SU101</TableCell><TableCell>ICT</TableCell><TableCell>2001</TableCell><TableCell>Smith</TableCell><TableCell>2024-09-20</TableCell><TableCell>90</TableCell></TableRow>
                <TableRow><TableCell>104</TableCell><TableCell>Haran</TableCell><TableCell>SU103</TableCell><TableCell>Maths</TableCell><TableCell>2003</TableCell><TableCell>Williams</TableCell><TableCell>2024-09-19</TableCell><TableCell>88</TableCell></TableRow>
                <TableRow><TableCell>105</TableCell><TableCell>Bob</TableCell><TableCell>SU101</TableCell><TableCell>ICT</TableCell><TableCell>2001</TableCell><TableCell>Smith</TableCell><TableCell>2024-09-20</TableCell><TableCell>65</TableCell></TableRow>
                <TableRow><TableCell>101</TableCell><TableCell>Arun</TableCell><TableCell>SU102</TableCell><TableCell>Physics</TableCell><TableCell>2002</TableCell><TableCell>Johnson</TableCell><TableCell>2024-09-21</TableCell><TableCell>68</TableCell></TableRow>
                <TableRow><TableCell>103</TableCell><TableCell>Fernando</TableCell><TableCell>SU103</TableCell><TableCell>Maths</TableCell><TableCell>2003</TableCell><TableCell>Williams</TableCell><TableCell>2024-09-19</TableCell><TableCell>76</TableCell></TableRow>
            </TableBody>
        </Table>
    </div>
);

const PageTable2024P2Q10d = () => (
    <div className="overflow-x-auto my-4 text-sm">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Page Number</TableHead>
                    <TableHead>Frame Number (Binary)</TableHead>
                    <TableHead>Valid Bit</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow><TableCell>0</TableCell><TableCell>111</TableCell><TableCell>1</TableCell></TableRow>
                <TableRow><TableCell>1</TableCell><TableCell>100</TableCell><TableCell>1</TableCell></TableRow>
                <TableRow><TableCell>2</TableCell><TableCell>110</TableCell><TableCell>1</TableCell></TableRow>
                <TableRow><TableCell>3</TableCell><TableCell>101</TableCell><TableCell>1</TableCell></TableRow>
                <TableRow><TableCell>4</TableCell><TableCell>000</TableCell><TableCell>0</TableCell></TableRow>
                <TableRow><TableCell>5</TableCell><TableCell>000</TableCell><TableCell>0</TableCell></TableRow>
                <TableRow><TableCell>6</TableCell><TableCell>000</TableCell><TableCell>0</TableCell></TableRow>
            </TableBody>
        </Table>
    </div>
);


export const LogicGate2024Q12 = () => (
    <svg viewBox="0 0 300 100" className="w-full max-w-[250px] h-auto">
      <text x="10" y="25">X</text><line x1="20" y1="20" x2="50" y2="20" className="stroke-foreground"/>
      <text x="10" y="55">Y</text><line x1="20" y1="50" x2="50" y2="50" className="stroke-foreground"/>
      <text x="10" y="85">Z</text><line x1="20" y1="80" x2="140" y2="80" className="stroke-foreground"/>

      <path d="M 50 10 C 70 10, 70 60, 50 60 L 50 10 Z" className="fill-card stroke-foreground" strokeWidth="1.5" />
      <circle cx="80" cy="35" r="3" className="fill-card stroke-foreground" strokeWidth="1.5"/>
      <line x1="83" y1="35" x2="140" y2="35" className="stroke-foreground"/>

      <path d="M 140 30 L 140 85 C 160 85, 160 30, 140 30 Z" className="fill-card stroke-foreground" strokeWidth="1.5"/>
      <line x1="170" y1="57.5" x2="200" y2="57.5" className="stroke-foreground"/>
      <text x="210" y="62.5">F</text>
    </svg>
);

export const MotherboardDiagram2024Q5 = () => (
  <svg viewBox="0 0 500 400" className="w-full max-w-lg h-auto">
    <g transform="translate(10, 10)">
        <rect width="480" height="380" rx="10" className="fill-muted/50 stroke-foreground" strokeWidth="1.5" />
        <text x="240" y="25" textAnchor="middle" className="font-bold">Motherboard</text>
        
        {/* X - CPU */}
        <rect x="190" y="50" width="100" height="60" rx="5" className="fill-card stroke-foreground" />
        <text x="240" y="80" textAnchor="middle">CPU</text>
        <text x="240" y="40" textAnchor="middle" className="text-sm font-bold">X</text>
        
        {/* Y - RAM */}
        <rect x="320" y="50" width="140" height="20" rx="3" className="fill-card stroke-foreground" />
        <rect x="320" y="80" width="140" height="20" rx="3" className="fill-card stroke-foreground" />
        <text x="390" y="40" textAnchor="middle" className="text-sm font-bold">Y</text>
        
        {/* Z - PCIe */}
        <rect x="150" y="150" width="180" height="30" rx="3" className="fill-card stroke-foreground" />
        <text x="240" y="140" textAnchor="middle" className="text-sm font-bold">Z</text>
        
        {/* IO */}
        <rect x="20" y="50" width="100" height="150" rx="5" className="fill-card stroke-foreground" />
        <text x="70" y="65" textAnchor="middle" className="text-sm">I/O Ports</text>
        <text x="70" y="90" textAnchor="middle" className="text-xs">C: Audio</text>
        <text x="70" y="110" textAnchor="middle" className="text-xs">E: USB</text>
        <text x="70" y="130" textAnchor="middle" className="text-xs">D: Network</text>
        
        {/* Storage */}
        <rect x="150" y="220" width="80" height="30" rx="3" className="fill-card stroke-foreground" />
        <text x="190" y="210" textAnchor="middle" className="text-sm font-bold">A</text>
        
        {/* BIOS */}
        <rect x="250" y="220" width="80" height="30" rx="3" className="fill-card stroke-foreground" />
        <text x="290" y="210" textAnchor="middle" className="text-sm font-bold">B</text>
    </g>
  </svg>
);


export const DFD2023P1Q28 = () => (
     <svg viewBox="0 0 450 300" className="w-full max-w-lg h-auto">
      <defs>
        <marker id="arrow-dfd" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="fill-foreground" /></marker>
      </defs>
      {/* External Entity */}
      <rect x="20" y="125" width="80" height="50" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
      <text x="60" y="152.5" textAnchor="middle">සාමාජිකයා</text>
      
      {/* Process 1 */}
      <ellipse cx="200" cy="70" rx="60" ry="30" className="fill-card stroke-foreground" strokeWidth="1.5"/>
      <text x="200" y="65" textAnchor="middle" className="text-sm">1.0</text>
      <text x="200" y="80" textAnchor="middle" className="text-sm">පොත් සෙවීම</text>

      {/* Process 2 */}
       <ellipse cx="200" cy="230" rx="60" ry="30" className="fill-card stroke-foreground" strokeWidth="1.5"/>
      <text x="200" y="225" textAnchor="middle" className="text-sm">2.0</text>
      <text x="200" y="240" textAnchor="middle" className="text-sm">පොත් තාවකාලිකව</text>
      
      {/* Process 3 */}
       <ellipse cx="370" cy="150" rx="60" ry="30" className="fill-card stroke-foreground" strokeWidth="1.5"/>
      <text x="370" y="145" textAnchor="middle" className="text-sm">3.0</text>
      <text x="370" y="160" textAnchor="middle" className="text-sm">පොත් නැවත භාරදීම</text>
      
      {/* Data Stores */}
      <rect x="280" y="20" width="100" height="40" className="fill-card stroke-foreground" strokeWidth="1.5" strokeDasharray="5,5"/>
      <text x="330" y="45" textAnchor="middle">D1 පොත්</text>
      <line x1="280" y1="40" x2="380" y2="40" className="stroke-foreground" />
      
      <rect x="280" y="240" width="100" height="40" className="fill-card stroke-foreground" strokeWidth="1.5" strokeDasharray="5,5"/>
      <text x="330" y="265" textAnchor="middle">D2 සාමාජිකයින්</text>
      <line x1="280" y1="260" x2="380" y2="260" className="stroke-foreground" />

      {/* Arrows */}
      <line x1="100" y1="135" x2="180" y2="85" markerEnd="url(#arrow-dfd)" className="stroke-foreground" />
      <text x="140" y="100" className="text-xs fill-muted-foreground">(P)</text>
      <line x1="180" y1="55" x2="100" y2="125" markerEnd="url(#arrow-dfd)" className="stroke-foreground" />
      <text x="120" y="80" className="text-xs fill-muted-foreground">සෙවුම් ප්‍රතිඵල</text>

      <line x1="200" y1="100" x2="200" y2="200" markerEnd="url(#arrow-dfd)" className="stroke-foreground" />
      <text x="205" y="150" className="text-xs fill-muted-foreground">(Q)</text>

      <line x1="260" y1="230" x2="300" y2="240" markerEnd="url(#arrow-dfd)" className="stroke-foreground" />
      <text x="280" y="225" className="text-xs fill-muted-foreground">(R)</text>

      <line x1="280" y1="40" x2="250" y2="65" markerEnd="url(#arrow-dfd)" className="stroke-foreground" />
      <line x1="330" y1="240" x2="350" y2="180" markerEnd="url(#arrow-dfd)" className="stroke-foreground" />

      <line x1="100" y1="165" x2="310" y2="160" markerEnd="url(#arrow-dfd)" className="stroke-foreground" />
      <text x="200" y="175" className="text-xs fill-muted-foreground">(S)</text>

    </svg>
);

export const DFD2023P1Q25 = () => (
     <svg viewBox="0 0 450 150" className="w-full max-w-lg h-auto">
      <defs>
        <marker id="arrow-dfd-25" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="fill-foreground" /></marker>
      </defs>
      <rect x="20" y="50" width="80" height="50" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
      <text x="60" y="77.5" textAnchor="middle">E1</text>
      
      <ellipse cx="200" cy="75" rx="60" ry="30" className="fill-card stroke-foreground" strokeWidth="1.5"/>
      <text x="200" y="70" textAnchor="middle" className="text-sm">P1</text>
      
       <ellipse cx="350" cy="75" rx="60" ry="30" className="fill-card stroke-foreground" strokeWidth="1.5"/>
      <text x="350" y="70" textAnchor="middle" className="text-sm">P2</text>
      
      <rect x="200" y="10" width="100" height="40" className="fill-card stroke-foreground" strokeWidth="1.5" strokeDasharray="5,5"/>
      <text x="250" y="35" textAnchor="middle">D1</text>
      <line x1="200" y1="30" x2="300" y2="30" className="stroke-foreground" />

      <line x1="100" y1="75" x2="140" y2="75" markerEnd="url(#arrow-dfd-25)" className="stroke-foreground" />
      <line x1="260" y1="75" x2="290" y2="75" markerEnd="url(#arrow-dfd-25)" className="stroke-foreground" />
    </svg>
);


export const ERDiagram2023P1Q34 = () => (
     <svg viewBox="0 0 350 250" className="w-full max-w-sm h-auto">
        <rect x="125" y="100" width="100" height="50" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <text x="175" y="128" textAnchor="middle" className="font-semibold">Employee</text>

        {/* Attributes */}
        <g>
            <line x1="175" y1="100" x2="175" y2="50" className="stroke-foreground" />
            <ellipse cx="175" cy="30" rx="60" ry="20" className="fill-card stroke-foreground" strokeWidth="1.5" />
            <text x="175" y="33" textAnchor="middle" className="text-sm underline">Employee_Number</text>
        </g>
        <g>
            <line x1="225" y1="110" x2="285" y2="80" className="stroke-foreground" />
            <ellipse cx="295" cy="60" rx="50" ry="20" className="fill-card stroke-foreground" strokeWidth="1.5" />
            <text x="295" y="63" textAnchor="middle" className="text-sm">Employee_Name</text>
        </g>
        <g>
            <line x1="125" y1="110" x2="65" y2="80" className="stroke-foreground" />
            <ellipse cx="55" cy="60" rx="50" ry="20" className="fill-card stroke-foreground" strokeWidth="1.5" />
            <text x="55" y="63" textAnchor="middle" className="text-sm">Designation</text>
        </g>
         <g>
            <line x1="125" y1="140" x2="65" y2="170" className="stroke-foreground" />
            <ellipse cx="55" cy="190" rx="50" ry="20" className="fill-card stroke-foreground" strokeWidth="1.5" />
            <text x="55" y="193" textAnchor="middle" className="text-sm">Qualifications</text>
             <ellipse cx="55" cy="190" rx="45" ry="16" className="fill-card stroke-foreground" strokeWidth="1.5" />
        </g>
         <g>
            <line x1="225" y1="140" x2="285" y2="170" className="stroke-foreground" />
            <ellipse cx="295" cy="190" rx="55" ry="20" className="fill-card stroke-foreground" strokeWidth="1.5" />
            <text x="295" y="193" textAnchor="middle" className="text-sm">Date_of_Birth</text>

            <line x1="295" y1="210" x2="295" y2="225" className="stroke-foreground" />
            <ellipse cx="295" cy="235" rx="25" ry="12" className="fill-card stroke-foreground" strokeDasharray="3" strokeWidth="1.5" />
             <text x="295" y="238" textAnchor="middle" className="text-sm">Age</text>
        </g>
    </svg>
)

export const ERDiagram2023P1Q35 = () => (
     <svg viewBox="0 0 400 150" className="w-full max-w-lg h-auto">
        {/* Lecturer Entity */}
        <rect x="20" y="50" width="100" height="50" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <text x="70" y="78" textAnchor="middle" className="font-semibold">Lecturer</text>
        
        {/* Course Entity */}
        <rect x="280" y="50" width="100" height="50" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <text x="330" y="78" textAnchor="middle" className="font-semibold">Course</text>
        
        {/* Relationship */}
        <path d="M 120 75 L 180 75 L 200 55 L 220 75 L 280 75" className="fill-none stroke-foreground" strokeWidth="1.5"/>
        <text x="200" y="45" textAnchor="middle" className="text-sm">Teaches</text>

        {/* Cardinality */}
        <text x="130" y="70" className="text-sm">1</text>
        <text x="260" y="70" className="text-sm">M</text>
    </svg>
);

export const DFD2023P2Q4 = () => (
     <svg viewBox="0 0 450 300" className="w-full max-w-lg h-auto">
      <defs>
        <marker id="arrow-dfd2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="fill-foreground" /></marker>
      </defs>
      {/* Entities */}
      <rect x="10" y="50" width="100" height="50" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
      <text x="60" y="78" textAnchor="middle" className="font-bold">(P)</text>
      
      <rect x="10" y="200" width="100" height="50" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
      <text x="60" y="228" textAnchor="middle" className="font-bold">(W)</text>

      {/* Processes */}
      <ellipse cx="220" cy="50" rx="60" ry="30" className="fill-card stroke-foreground" strokeWidth="1.5"/>
      <text x="220" y="45" textAnchor="middle" className="text-sm">1.0</text>
      <text x="220" y="60" textAnchor="middle" className="font-bold text-sm">(R)</text>
      
      <ellipse cx="220" cy="150" rx="60" ry="30" className="fill-card stroke-foreground" strokeWidth="1.5"/>
      <text x="220" y="145" textAnchor="middle" className="text-sm">2.0</text>
      <text x="220" y="160" textAnchor="middle" className="font-bold text-sm">(U)</text>
      
      <ellipse cx="220" cy="250" rx="60" ry="30" className="fill-card stroke-foreground" strokeWidth="1.5"/>
      <text x="220" y="245" textAnchor="middle" className="text-sm">3.0</text>
      <text x="220" y="260" textAnchor="middle" className="font-bold text-sm">Student Mgt</text>

      {/* Data Stores */}
      <rect x="330" y="50" width="100" height="40" className="fill-card stroke-foreground" strokeWidth="1.5" strokeDasharray="5,5"/>
      <text x="380" y="70" textAnchor="middle">D1 (S)</text>
      <line x1="330" y1="70" x2="430" y2="70" className="stroke-foreground" />
      
      <rect x="330" y="230" width="100" height="40" className="fill-card stroke-foreground" strokeWidth="1.5" strokeDasharray="5,5"/>
      <text x="380" y="250" textAnchor="middle">D2 (T)</text>
      <line x1="330" y1="250" x2="430" y2="250" className="stroke-foreground" />
      
      {/* Arrows */}
      <line x1="110" y1="60" x2="160" y2="60" markerEnd="url(#arrow-dfd2)" className="stroke-foreground"/>
      <text x="135" y="55" textAnchor="middle" className="text-xs">Student No + Req Details</text>
      
      <line x1="160" y1="40" x2="110" y2="40" markerEnd="url(#arrow-dfd2)" className="stroke-foreground"/>
      <text x="135" y="35" textAnchor="middle" className="text-xs">Results</text>
      
      <line x1="280" y1="65" x2="330" y2="65" markerEnd="url(#arrow-dfd2)" className="stroke-foreground"/>
      <text x="305" y="60" textAnchor="middle" className="text-xs">(Q)</text>
      
      <line x1="110" y1="150" x2="160" y2="150" markerEnd="url(#arrow-dfd2)" className="stroke-foreground"/>
      <text x="135" y="145" textAnchor="middle" className="text-xs">Student No</text>
      
      <line x1="160" y1="160" x2="110" y2="160" markerEnd="url(#arrow-dfd2)" className="stroke-foreground"/>
      <text x="135" y="175" textAnchor="middle" className="text-xs">Student Details</text>
      
      <line x1="110" y1="240" x2="160" y2="240" markerEnd="url(#arrow-dfd2)" className="stroke-foreground"/>
      <text x="135" y="235" textAnchor="middle" className="text-xs">Student Details</text>
      
      <line x1="160" y1="260" x2="110" y2="260" markerEnd="url(#arrow-dfd2)" className="stroke-foreground"/>
      <text x="135" y="275" textAnchor="middle" className="text-xs">Confirmation</text>
      
      <line x1="280" y1="250" x2="330" y2="250" markerEnd="url(#arrow-dfd2)" className="stroke-foreground" />
      <text x="305" y="245" textAnchor="middle" className="text-xs">Student Details</text>
      
      <line x1="330" y1="260" x2="280" y2="260" markerEnd="url(#arrow-dfd2)" className="stroke-foreground" />
      <text x="305" y="275" textAnchor="middle" className="text-xs">Student Details</text>

    </svg>
)

export const AnalogDigitalSignal2024Q18 = () => (
    <svg viewBox="0 0 400 150" className="w-full max-w-lg h-auto">
        <g transform="translate(10, 10)">
            <text x="75" y="10" textAnchor="middle" className="font-semibold">A</text>
            <rect x="0" y="20" width="150" height="100" className="fill-none stroke-foreground" strokeWidth="1"/>
            <path d="M 0 70 Q 37.5 20, 75 70 T 150 70" stroke="hsl(var(--primary))" strokeWidth="2" fill="none"/>
            <line x1="0" y1="70" x2="150" y2="70" className="stroke-foreground stroke-dashed" strokeWidth="0.5"/>
            <text x="-5" y="70" textAnchor="end" className="text-xs">V</text>
            <text x="75" y="130" textAnchor="middle" className="text-xs">t</text>
        </g>
         <g transform="translate(200, 10)">
            <text x="75" y="10" textAnchor="middle" className="font-semibold">B</text>
            <rect x="0" y="20" width="150" height="100" className="fill-none stroke-foreground" strokeWidth="1"/>
            <path d="M 0 95 L 25 95 L 25 45 L 50 45 L 50 95 L 75 95 L 75 45 L 100 45 L 100 95 L 125 95 L 125 45 L 150 45" stroke="hsl(var(--primary))" strokeWidth="2" fill="none"/>
             <line x1="0" y1="70" x2="150" y2="70" className="stroke-foreground stroke-dashed" strokeWidth="0.5"/>
             <text x="-5" y="45" textAnchor="end" className="text-xs">1</text>
             <text x="-5" y="95" textAnchor="end" className="text-xs">0</text>
            <text x="75" y="130" textAnchor="middle" className="text-xs">t</text>
        </g>
    </svg>
)

export const SequentialLogicCircuit2019Q10 = () => (
     <svg viewBox="0 0 300 150" className="w-full max-w-sm h-auto">
      <defs>
        <marker id="arrow-seq" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="fill-foreground" /></marker>
      </defs>
      
      {/* Input */}
      <line x1="10" y1="75" x2="50" y2="75" markerEnd="url(#arrow-seq)" className="stroke-foreground"/>
      <text x="25" y="70" textAnchor="middle" className="text-sm">Input</text>
      
      {/* Block A */}
      <rect x="50" y="50" width="100" height="50" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
      <text x="100" y="78" textAnchor="middle" className="font-bold">A</text>
      
      {/* Output */}
       <line x1="150" y1="75" x2="200" y2="75" markerEnd="url(#arrow-seq)" className="stroke-foreground"/>
      <text x="175" y="70" textAnchor="middle" className="text-sm">Output</text>
      
      {/* Block B and loop */}
      <rect x="200" y="50" width="50" height="50" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
      <text x="225" y="78" textAnchor="middle" className="font-bold">B</text>
      
      <line x1="225" y1="100" x2="225" y2="120" className="stroke-foreground"/>
      <line x1="225" y1="120" x2="75" y2="120" className="stroke-foreground"/>
      <line x1="75" y1="120" x2="75" y2="100" markerEnd="url(#arrow-seq)" className="stroke-foreground"/>

    </svg>
)

export const NANDGateCircuit2019Q11 = () => (
     <svg viewBox="0 0 400 200" className="w-full max-w-md h-auto">
        {/* Inputs */}
        <text x="10" y="25">A</text><line x1="20" y1="20" x2="50" y2="20" className="stroke-foreground"/>
        <text x="10" y="55">B</text><line x1="20" y1="50" x2="50" y2="50" className="stroke-foreground"/>
        <text x="10" y="125">X</text><line x1="20" y1="120" x2="50" y2="120" className="stroke-foreground"/>
        <text x="10" y="155">Y</text><line x1="20" y1="150" x2="50" y2="150" className="stroke-foreground"/>

        {/* First layer of NAND gates */}
        {/* NAND 1 (A,B) */}
        <path d="M 50 10 C 70 10, 70 60, 50 60 L 50 10 Z" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <circle cx="80" cy="35" r="3" className="fill-card stroke-foreground" strokeWidth="1.5"/>
        <line x1="83" y1="35" x2="120" y2="35" className="stroke-foreground"/>

         {/* NAND 2 (X,Y) */}
        <path d="M 50 110 C 70 110, 70 170, 50 170 L 50 110 Z" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <circle cx="80" cy="140" r="3" className="fill-card stroke-foreground" strokeWidth="1.5"/>
        <line x1="83" y1="140" x2="120" y2="140" className="stroke-foreground"/>
        
        {/* Second layer of NAND gates */}
        <line x1="120" y1="35" x2="150" y2="70" className="stroke-foreground"/>
        <line x1="120" y1="140" x2="150" y2="110" className="stroke-foreground"/>

        <path d="M 150 60 C 170 60, 170 120, 150 120 L 150 60 Z" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <circle cx="180" cy="90" r="3" className="fill-card stroke-foreground" strokeWidth="1.5"/>
        <line x1="183" y1="90" x2="220" y2="90" className="stroke-foreground"/>
        <text x="230" y="95">F</text>
    </svg>
)

export const Flowchart2019Q32 = () => (
    <svg viewBox="0 0 300 450" className="w-full max-w-xs h-auto">
        <FlowchartNode label="Start" x={150} y={30} type="terminal" />
        <Arrow from={{x:150, y:45}} to={{x:150, y:80}} />

        <FlowchartNode label="Read L, K" x={150} y={100} type="io" />
        <Arrow from={{x:150, y:120}} to={{x:150, y:150}} />

        <FlowchartNode label="n ← len(L)" x={150} y={170} type="process" />
        <Arrow from={{x:150, y:190}} to={{x:150, y:220}} />

        <FlowchartNode label="count ← 0" x={150} y={240} type="process" />
        <Arrow from={{x:150, y:260}} to={{x:150, y:290}} />
        
        <FlowchartNode label="Q" x={150} y={315} type="decision" />
        <Arrow from={{x:150, y:340}} to={{x:150, y:370}} label="True" />

        <FlowchartNode label="P" x={150} y={390} type="process" />
        <line x1="150" y1="410" x2="50" y2="410" className="stroke-foreground" />
        <line x1="50" y1="410" x2="50" y2="315" className="stroke-foreground" />
        <Arrow from={{x:50, y:315}} to={{x:80, y:315}} />
        
        <Arrow from={{x:220, y:315}} to={{x:270, y:315}} label="False" />
        <FlowchartNode label="Print count" x={320} y={315} type="io" />
    </svg>
);


export const Flowchart2024Q29 = () => (
    <svg viewBox="0 0 450 550" className="w-full max-w-sm h-auto">
        <FlowchartNode label="ආරම්භය" x={225} y={30} type="terminal" />
        <Arrow from={{ x: 225, y: 45 }} to={{ x: 225, y: 80 }} />
        
        <FlowchartNode label="A" x={225} y={100} />
        <Arrow from={{ x: 225, y: 120 }} to={{ x: 225, y: 155 }} />

        <FlowchartNode label={"පරිශීලකයාට වෙන් කිරීමක්\nසිදු කිරීමට අවශ්‍ය නම්"} x={225} y={180} type="decision" />
        <Arrow from={{ x: 225, y: 205 }} to={{ x: 225, y: 240 }} label="Yes" />
        <Arrow from={{ x: 295, y: 180 }} to={{ x: 370, y: 180 }} label="No" />
        <line x1="370" y1="180" x2="370" y2="475" className="stroke-foreground" />
        <Arrow from={{ x: 370, y: 475 }} to={{ x: 275, y: 475 }} />

        <FlowchartNode label="B" x={225} y={260} />
        <Arrow from={{ x: 225, y: 280 }} to={{ x: 225, y: 310 }} />

        <FlowchartNode label="C" x={225} y={330} />
        <Arrow from={{ x: 225, y: 350 }} to={{ x: 225, y: 385 }} />

        <FlowchartNode label={"පරිශීලකයා සිසුවකු\nනොවේ නම්"} x={225} y={410} type="decision" />
        
        <line x1="155" y1="410" x2="80" y2="410" className="stroke-foreground" />
        <Arrow from={{ x: 80, y: 410 }} to={{ x: 80, y: 455 }} label="No" />
        <Arrow from={{ x: 80, y: 475 }} to={{ x: 150, y: 475 }} />

        <Arrow from={{ x: 225, y: 435 }} to={{ x: 225, y: 500 }} label="Yes" />
        <FlowchartNode label="D" x={225} y={520} />
        <line x1="225" y1="540" x2="180" y2="540" className="stroke-foreground" />
        <Arrow from={{ x: 180, y: 540 }} to={{ x: 180, y: 485 }} />
        

        <FlowchartNode label={"වෙන් කිරීම ස්ථිර කර\nවෙන් කිරීමේ දත්ත සමුදාය\nයාවත්කාලීන කරන්න."} x={225} y={475} />
         <Arrow from={{ x: 225, y: 495 }} to={{ x: 225, y: 520 }} />

        <FlowchartNode label="අවසානය" x={225} y={540} type="terminal" />
    </svg>
);

export const NormalizationTable2024Q34 = () => (
    <div className="w-full overflow-x-auto text-sm">
        <table className="border-collapse border border-foreground">
            <thead className="bg-muted">
                <tr><th className="border p-2" colSpan={4}>ප්‍රමත අවස්ථා (Normal Forms)</th><th className="border p-2" colSpan={4}>විස්තරය (Description)</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border p-2">0</td><td className="border p-2" colSpan={3}>Zero Normal Form</td>
                    <td className="border p-2">A</td><td className="border p-2" colSpan={3}>Atomic value attributes</td>
                </tr>
                 <tr>
                    <td className="border p-2">1</td><td className="border p-2" colSpan={3}>First Normal Form</td>
                    <td className="border p-2">B</td><td className="border p-2" colSpan={3}>Full functional dependency</td>
                </tr>
                 <tr>
                    <td className="border p-2">2</td><td className="border p-2" colSpan={3}>Second Normal Form</td>
                    <td className="border p-2">C</td><td className="border p-2" colSpan={3}>Repeating data</td>
                </tr>
                 <tr>
                    <td className="border p-2">3</td><td className="border p-2" colSpan={3}>Third Normal Form</td>
                    <td className="border p-2">D</td><td className="border p-2" colSpan={3}>Transitive dependency</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export const ComputerArchitectureBlockDiagram = () => (
    <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto">
        <defs>
            <marker id="arrow-arch" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" /></marker>
        </defs>
        {/* CPU */}
        <rect x="150" y="50" width="100" height="100" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <text x="200" y="105" textAnchor="middle" className="font-bold">CPU</text>
        <rect x="160" y="80" width="80" height="40" rx="3" className="fill-muted/50 stroke-foreground" strokeWidth="1" />
        <text x="200" y="95" textAnchor="middle" className="font-bold">A</text>

        {/* Memory */}
        <rect x="300" y="75" width="90" height="50" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <text x="345" y="103" textAnchor="middle" className="font-semibold">Memory</text>

        {/* Display */}
        <rect x="150" y="170" width="100" height="30" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <text x="200" y="190" textAnchor="middle" className="font-semibold">Display</text>

         {/* Keyboard */}
        <rect x="10" y="75" width="90" height="50" rx="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <text x="55" y="103" textAnchor="middle" className="font-semibold">Keyboard</text>

        {/* Arrows */}
        <line x1="100" y1="100" x2="150" y2="100" markerEnd="url(#arrow-arch)" className="stroke-foreground"/>
        <line x1="250" y1="100" x2="300" y2="100" markerEnd="url(#arrow-arch)" className="stroke-foreground"/>
        <line x1="300" y1="110" x2="250" y2="110" markerEnd="url(#arrow-arch)" className="stroke-foreground"/>
        <line x1="200" y1="150" x2="200" y2="170" markerEnd="url(#arrow-arch)" className="stroke-foreground"/>

    </svg>
);

export const MemoryHierarchyPyramid = () => (
    <div className="my-6 p-4 flex justify-center">
        <svg viewBox="0 0 320 220" className="w-full max-w-sm h-auto">
            <polygon points="160,10 290,210 30,210" className="fill-background stroke-border" strokeWidth="1"/>
            
            <text x="160" y="45" text-anchor="middle" fontSize="14" fontWeight="bold" fill="hsl(var(--primary))">A</text>
            <line x1="70" y1="60" x2="250" y2="60" className="stroke-border" stroke-dasharray="2,2"/>
            
            <text x="160" y="85" text-anchor="middle" fontSize="14" fontWeight="bold" fill="hsl(var(--primary))">B</text>
            <line x1="55" y1="105" x2="265" y2="105" className="stroke-border" stroke-dasharray="2,2"/>
            
            <text x="160" y="130" text-anchor="middle" fontSize="14" fontWeight="bold" fill="hsl(var(--primary))">C</text>
            <line x1="45" y1="150" x2="275" y2="150" className="stroke-border" stroke-dasharray="2,2"/>

            <text x="160" y="175" text-anchor="middle" fontSize="14" fontWeight="bold" fill="hsl(var(--primary))">D</text>
            <line x1="35" y1="190" x2="285" y2="190" className="stroke-border" stroke-dasharray="2,2"/>

            <text x="160" y="205" text-anchor="middle" fontSize="14" fontWeight="bold" fill="hsl(var(--primary))">E</text>

            {/* Arrow for Capacity */}
            <line x1="20" y1="210" x2="20" y2="10" stroke="currentColor" marker-end="url(#arrow)"/>
            <text x="10" y="110" writing-mode="vertical-rl" text-anchor="middle" fontSize="10">ධාරිතාව</text>

            {/* Arrow for Access Speed */}
            <line x1="300" y1="10" x2="300" y2="210" stroke="currentColor" marker-end="url(#arrow)"/>
            <text x="310" y="110" writing-mode="vertical-rl" text-anchor="middle" fontSize="10">ප්‍රවේශ වේගය</text>
            
            <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" /></marker></defs>
        </svg>
    </div>
);

export const KMapAndCircuit2024Q9 = () => (
    <div className="flex flex-wrap justify-center gap-8 items-center">
        <svg viewBox="0 0 250 150" className="w-full max-w-xs h-auto">
            <title>Karnaugh Map</title>
            <text x="125" y="10" textAnchor="middle" className="text-sm font-bold">(a) කානෝ සිතියම</text>
            <rect x="50" y="50" width="200" height="80" className="fill-none stroke-foreground" stroke-width="1.5" />
            <line x1="50" y1="90" x2="250" y2="90" className="stroke-foreground" />
            <line x1="100" y1="50" x2="100" y2="130" className="stroke-foreground" />
            <line x1="150" y1="50" x2="150" y2="130" className="stroke-foreground" />
            <line x1="200" y1="50" x2="200" y2="130" className="stroke-foreground" />
            <text x="25" y="70" textAnchor="middle">C</text>
            <text x="25" y="110" textAnchor="middle">1</text>
            <text x="125" y="35" textAnchor="middle">AB</text>
            <text x="75" y="45" textAnchor="middle">00</text>
            <text x="125" y="45" textAnchor="middle">01</text>
            <text x="175" y="45" textAnchor="middle">11</text>
            <text x="225" y="45" textAnchor="middle">10</text>
            <text x="35" y="70" textAnchor="middle">0</text>
            <KMapCell val="0" x="75" y="70" />
            <KMapCell val="0" x="125" y="70" />
            <KMapCell val="f" x="175" y="70" />
            <KMapCell val="e" x="225" y="70" />
            <KMapCell val="1" x="75" y="110" />
            <KMapCell val="h" x="125" y="110" />
            <KMapCell val="g" x="175" y="110" />
            <KMapCell val="1" x="225" y="110" />
        </svg>
        <svg viewBox="0 0 250 150" className="w-full max-w-xs h-auto">
            <title>Logic Circuit</title>
            <text x="125" y="10" textAnchor="middle" className="text-sm font-bold">(b) තර්කන පරිපථය</text>
            <line x1="20" y1="30" x2="80" y2="30" className="stroke-foreground" /><text x="10" y="35">A</text>
            <line x1="20" y1="60" x2="80" y2="60" className="stroke-foreground" /><text x="10" y="65">B</text>
            <line x1="20" y1="90" x2="160" y2="90" className="stroke-foreground" /><text x="10" y="95">C</text>
            <path d="M 80 20 C 100 20, 100 70, 80 70 L 80 20 Z" className="fill-card stroke-foreground" strokeWidth="1.5" />
            <line x1="110" y1="45" x2="160" y2="45" className="stroke-foreground" />
            <path d="M 80 80 C 100 80, 100 110, 80 110 L 80 80 Z" className="fill-card stroke-foreground" transform="translate(0, -30)" strokeWidth="1.5" />
            <line x1="110" y1="65" x2="160" y2="65" className="stroke-foreground" />
            <path d="M 160 40 L 160 95 C 180 95, 180 40, 160 40 Z" className="fill-card stroke-foreground" strokeWidth="1.5" />
            <line x1="190" y1="67.5" x2="220" y2="67.5" className="stroke-foreground" /><text x="225" y="72.5">Z</text>
        </svg>
    </div>
);

export const ProcessStateTransition2024Q10 = () => (
    <svg viewBox="0 0 500 250" className="w-full max-w-lg h-auto">
        {/* Nodes */}
        <FlowchartNode label="නව (New)" x={75} y={125} />
        <FlowchartNode label="සූදානම් (Ready)" x={250} y={50} />
        <FlowchartNode label="ධාවනය වන (Running)" x={250} y={200} />
        <FlowchartNode label="අවහිර කළ (Blocked)" x={425} y={200} />
        <FlowchartNode label="අවසන් (Terminated)" x={425} y={50} />
        
        {/* Arrows */}
        <Arrow from={{ x: 125, y: 125 }} to={{ x: 190, y: 65 }} />
        <Arrow from={{ x: 250, y: 80 }} to={{ x: 250, y: 170 }} label="B" />
        <Arrow from={{ x: 250, y: 170 }} to={{ x: 190, y: 80 }} label="C" />
        <Arrow from={{ x: 310, y: 200 }} to={{ x: 365, y: 200 }} label="A" />
        <Arrow from={{ x: 310, y: 50 }} to={{ x: 365, y: 50 }} label="D" />
        <Arrow from={{ x: 425, y: 170 }} to={{ x: 425, y: 80 }} label="E" />
    </svg>
);


export const FATTable2024Q12 = () => (
    <div className="w-full overflow-x-auto text-sm">
        <table className="border-collapse border border-foreground">
            <thead className="bg-muted">
                <tr><th className="border p-2">Location</th><th className="border p-2">Content</th></tr>
            </thead>
            <tbody>
                {[
                    {loc: 100, con: 102}, {loc: 101, con: "end"}, {loc: 102, con: 105},
                    {loc: 103, con: "end"}, {loc: 104, con: "free"}, {loc: 105, con: "end"},
                    {loc: 106, con: 109}, {loc: 107, con: 111}, {loc: 108, con: "end"},
                    {loc: 109, con: "end"}, {loc: 110, con: "free"}, {loc: 111, con: 106}
                ].map(row => (
                    <tr key={row.loc}>
                        <td className="border p-2 text-center">{row.loc}</td>
                        <td className="border p-2 text-center">{row.con}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export const SystemTypesMatch2024Q21 = () => (
    <div className="w-full overflow-x-auto text-sm">
        <table className="border-collapse border border-foreground">
             <thead className="bg-muted">
                <tr><th className="border p-2">A ලැයිස්තුව</th><th className="border p-2">B ලැයිස්තුව</th></tr>
            </thead>
            <tbody>
                <tr><td className="border p-2">P – ගනුදෙනු සැකසුම් පද්ධති (TPS)</td><td className="border p-2">1 – කළමනාකරුවන්ට තීරණ ගැනීමට දත්ත සැකසුම් හා වාර්තා ඉදිරිපත් කෙරේ.</td></tr>
                <tr><td className="border p-2">Q – කළමනාකරණ තොරතුරු පද්ධති (MIS)</td><td className="border p-2">2 – ආයතනයේ පුළුල් පරාසයක විවිධ ක්‍රියාකාරකම් කළමනාකරණය සඳහා දත්ත එකතු කිරීම, ගබඩා කිරීම සහ සැකසීම සිදු කරයි.</td></tr>
                <tr><td class="p-2 border">R – තීරණ සහාය පද්ධති (DSS)</td><td className="border p-2">3 – ආයතනයක එදිනෙදා මෙහෙයුම් සඳහා සහාය වන දත්ත එකතු කිරීම, ගබඩා කිරීම, සහ ලබාදීම සිදු කරයි.</td></tr>
                <tr><td className="border p-2">S – විධායක සහාය පද්ධති (ESS)</td><td class="p-2 border">4 – ජ්‍යෙෂ්ඨ කළමනාකරුවන්ට තොරතුරු ලබාදීමෙන් උපායමාර්ගික තීරණ ගැනීමට සහාය වේ.</td></tr>
            </tbody>
        </table>
    </div>
);

const LogicGate2011P2Q5d = () => (
    <svg viewBox="0 0 400 300" className="w-full max-w-lg h-auto">
        <text x="10" y="30">A</text><line x1="20" y1="25" x2="50" y2="25"/>
        <text x="10" y="60">B</text><line x1="20" y1="55" x2="50" y2="55"/>
        <text x="10" y="90">C</text><line x1="20" y1="85" x2="50" y2="85"/>
        <text x="10" y="120">D</text><line x1="20" y1="115" x2="50" y2="115"/>
        
        {/* NOT Gates */}
        <path d="M 50 25 L 70 30 L 50 35 Z" className="fill-card stroke-foreground" strokeWidth="1.5"/><circle cx="73" cy="30" r="3" className="fill-card stroke-foreground" strokeWidth="1.5"/><line x1="76" y1="30" x2="100" y2="30"/>
        <path d="M 50 55 L 70 60 L 50 65 Z" className="fill-card stroke-foreground" strokeWidth="1.5"/><circle cx="73" cy="60" r="3" className="fill-card stroke-foreground" strokeWidth="1.5"/><line x1="76" y1="60" x2="100" y2="60"/>
        
        {/* First level AND gates */}
        <path d="M 100 20 L 100 70 C 120 70, 120 20, 100 20 Z" className="fill-card stroke-foreground" strokeWidth="1.5" /><line x1="130" y1="45" x2="160" y2="45"/>
        <text x="135" y="40">A'B'</text>
        
        {/* Second level AND gate */}
        <line x1="50" y1="85" x2="160" y2="85"/><line x1="50" y1="115" x2="160" y2="115"/>
        <path d="M 160 75 L 160 125 C 180 125, 180 75, 160 75 Z" className="fill-card stroke-foreground" strokeWidth="1.5" /><line x1="190" y1="100" x2="220" y2="100"/>
        <text x="195" y="95">CD</text>

        {/* Final OR gate */}
        <line x1="160" y1="45" x2="220" y2="80"/><line x1="220" y1="100" x2="220" y2="120"/>
        <path d="M 220 70 C 240 70, 260 90, 250 110 L 220 130 Z" className="fill-card stroke-foreground" strokeWidth="1.5"/><line x1="250" y1="110" x2="280" y2="110"/>
        <text x="290" y="115">F</text>
    </svg>
);


const Flowchart2011P1Q21 = () => (
    <svg viewBox="0 0 350 450" className="w-full max-w-sm h-auto">
        <FlowchartNode label="Start" x={175} y={30} type="terminal" />
        <Arrow from={{x:175, y:45}} to={{x:175, y:75}} />
        <FlowchartNode label="X = 5" x={175} y={95} type="process"/>
        <Arrow from={{x:175, y:115}} to={{x:175, y:145}} />
        <FlowchartNode label="Display 'I have a positive integer. Can you guess it?'" x={175} y={165} type="io" />
        <Arrow from={{x:175, y:185}} to={{x:175, y:215}} />
        <FlowchartNode label="Get Y" x={175} y={235} type="io" />
        <Arrow from={{x:175, y:255}} to={{x:175, y:285}} />
        <FlowchartNode label="Y < 0?" x={175} y={310} type="decision" />
        <Arrow from={{x:175, y:335}} to={{x:175, y:365}} label="No" />
        <Arrow from={{x:245, y:310}} to={{x:280, y:310}} label="Yes"/>
        <FlowchartNode label="Stop" x={280} y={335} type="terminal" />
        
        <FlowchartNode label="X = Y?" x={175} y={390} type="decision" />
        <Arrow from={{x:175, y:415}} to={{x:175, y:445}} label="No" />
        <Arrow from={{x:245, y:390}} to={{x:280, y:390}} label="Yes" />
        <FlowchartNode label="Display 'You are correct'" x={280} y={415} type="io" />
        <Arrow from={{x:280, y:435}} to={{x:280, y:310}} />
    </svg>
);


type DiagramProps = {
  id: string;
};

// Generic component to render the correct SVG based on ID
export const PastPaperDiagram = ({ id }: DiagramProps) => {
  switch (id) {
    case "computer-architecture-block":
      return <ComputerArchitectureBlockDiagram />;
    case "2024-p1-q5":
      return <MotherboardDiagram2024Q5 />;
    case "2024-p1-q10":
      return <ASCIITable2024Q10 />;
    case "2024-p1-q12":
       return <LogicGate2024Q12 />;
    case "2024-p1-q14":
        return <KMap2024Q14 />;
    case "2024-p1-q18":
        return <AnalogDigitalSignal2024Q18 />;
    case "2024-p1-q29":
        return <Flowchart2024Q29 />;
    case "2024-p1-q34":
        return <NormalizationTable2024Q34 />;
    case "2023-p1-q25":
        return <DFD2023P1Q25 />;
    case "2023-p1-q28":
        return <DFD2023P1Q28 />;
    case "2023-p1-q34":
        return <ERDiagram2023P1Q34 />;
    case "2023-p1-q35":
        return <ERDiagram2023P1Q35 />;
    case "2023-p2-q4a":
        return <DFD2023P2Q4 />;
    case "2019-p1-q10":
        return <SequentialLogicCircuit2019Q10 />;
    case "2019-p1-q11":
        return <NANDGateCircuit2019Q11 />;
    case "pq-2019-p1-32":
        return <InformationValueDecayDiagram />;
    case "2019-p1-q32":
        return <Flowchart2019Q32 />;
    case "memory-hierarchy-pyramid":
        return <MemoryHierarchyPyramid />;
    case "k-map-and-circuit-2024-9":
        return <KMapAndCircuit2024Q9 />;
    case "process-state-transition-2024-10":
        return <ProcessStateTransition2024Q10 />;
    case "fat-table-2024-12":
        return <FATTable2024Q12 />;
    case "system-types-match-2024-21":
        return <SystemTypesMatch2024Q21 />;
    case "2024-p2-q5a":
        return <LogicGate2024P2Q5a />;
    case "2024-p2-q5c-ii":
        return <KMap2024P2Q5c />;
    case "2024-p2-q7a":
        return <ArduinoCircuit2024P2Q7a />;
    case "2024-p2-q9b-table":
        return <ResultTable2024P2Q9b />;
    case "2024-p2-q10d-table":
        return <PageTable2024P2Q10d />;
    case "2011-p1-q21-flowchart":
        return <Flowchart2011P1Q21 />;
    case "2011-p2-b-5d-truthtable":
        return <Table>
            <TableHeader><TableRow><TableHead>A</TableHead><TableHead>B</TableHead><TableHead>C</TableHead><TableHead>D</TableHead><TableHead>F</TableHead></TableRow></TableHeader>
            <TableBody>
                {Array.from({length: 16}).map((_, i) => {
                    const bin = i.toString(2).padStart(4, '0');
                    return <TableRow key={i}><TableCell>{bin[0]}</TableCell><TableCell>{bin[1]}</TableCell><TableCell>{bin[2]}</TableCell><TableCell>{bin[3]}</TableCell><TableCell></TableCell></TableRow>
                })}
            </TableBody>
        </Table>;
    case "2011-p2-b-5d-logic-circuit":
        return <LogicGate2011P2Q5d />;
    case "2012-p2-B1b-1":
        // devnote: A table is shown with two columns: 'කොන්දේසිය/ක්‍රියාවලිය' (Condition/Process) and 'බූලියානු අගය' (Boolean Value). The rows are as follows: 'පංකාව අත්යුරුව ක්‍රියාත්මක කරනු ලබයි' -> 1, 'පංකාව අත්පුරුව වසා දමනු ලබයි' -> 0, 'කාලගණකය ක්‍රියාත්මක වී ඇත' -> 1, 'කාලගණකය ක්‍රියාත්මක වී නැත' -> 0, 'පරිසරය සිසිල් බව සංවේදකය හඳුනාගනියි' -> 1, 'පරිසරය උණුසුම් බව සංවේදකය හඳුනාගනියි' -> 0.
        return <div className="text-muted-foreground">[Diagram for 2012 P2 Q1(b) is not yet implemented]</div>;
    case "2012-p2-B2c":
        // devnote: A webpage design is shown. Main heading 'Agriculture Sri Lanka'. Below is a large image with 'AGRI SRI LANKA' text overlay. Below the image, there is a paragraph starting 'Sri Lanka is an agricultural country...'. Then a heading 'The main plantation crops are' followed by a bulleted list with 'tea', 'rubber', 'coconut'. Then a heading 'Links to agricultural firms' followed by two hyperlinks: 'Jay Agro Technologies' and 'Lanka Agri Systems Pvt Ltd.'.
        return <div className="text-muted-foreground">[Diagram for 2012 P2 Q2(c) is not yet implemented]</div>;
    case "2012-p2-B4":
        // devnote: An ER diagram is shown. Entities are: Class (attributes: Class ID), Desk (attributes: Desk ID), Student (attributes: Student ID, Name, NIC), House (attributes: House ID, Name), Subject (attributes: Subject ID, Title). Relationships are: Class 'Has' (1 to n) Student, Desk 'Has' (1 to 1) Student, House 'Has' (1 to n) Student, Student 'Obtains Marks for' (m to n) Subject.
        return <div className="text-muted-foreground">[Diagram for 2012 P2 Q4 is not yet implemented]</div>;
    case "2013-p1-q23":
        // devnote: Five different ER diagrams are shown as options, depicting relationships between Student and Sport entities.
        return <div className="text-muted-foreground">[Diagram for 2013 P1 Q23 is not yet implemented]</div>;
    case "2013-p1-q28":
        // devnote: A DFD is shown with entities 'student' and 'admin', processes '1.0' and '2.0', and data stores 'D1' and 'D2'.
        return <div className="text-muted-foreground">[Diagram for 2013 P1 Q28 is not yet implemented]</div>;
    case "2013-p2-q1":
         // devnote: A webpage screenshot is shown for a travel company. It has a title, an image, a paragraph, a list of highlights, and a table of tour packages.
        return <div className="text-muted-foreground">[Diagram for 2013 P2 Q1 is not yet implemented]</div>;
    case "2013-p2-q3b":
        // devnote: A DFD for a library system is shown.
        return <div className="text-muted-foreground">[Diagram for 2013 P2 Q3(b) is not yet implemented]</div>;
    case "2013-p2-q4b":
        // devnote: An ER diagram is shown for a company database involving Employees, Departments, and Projects.
        return <div className="text-muted-foreground">[Diagram for 2013 P2 Q4(b) is not yet implemented]</div>;
     case "2014-p1-q12":
        return <LogicCircuit2014P1Q12 />;
    case "2014-p1-q12-options":
        return <LogicCircuit2014P1Q12Options />;
    case "2014-p1-q13":
        return <CircuitDiagram2014P1Q13 />;
    case "2014-p1-q18":
        return <DirectoryTree2014P1Q18 />;
    default:
      return <div className="text-red-500">Diagram not found: {id}</div>;
  }
};

    
