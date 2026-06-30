
"use client";

export const LogicGate2011P1Q28 = () => (
    <svg viewBox="0 0 300 150" className="w-full max-w-xs h-auto">
        <title>Logic Circuit for 2011 Paper 1 Q28</title>

        {/* Inputs */}
        <text x="10" y="25">A</text>
        <line x1="20" y1="20" x2="80" y2="20" className="stroke-foreground"/>
        
        <text x="10" y="55">B</text>
        <line x1="20" y1="50" x2="80" y2="50" className="stroke-foreground"/>
        
        <text x="10" y="105">C</text>
        <line x1="20" y1="100" x2="80" y2="100" className="stroke-foreground"/>
        
        {/* NOR Gate (A, B) */}
        <path d="M 80,10 C 120,35 120,35 80,60 Q 90,35 80,10 Z" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <circle cx="123" cy="35" r="3" className="fill-card stroke-foreground" strokeWidth="1.5"/>
        <line x1="126" y1="35" x2="160" y2="35" className="stroke-foreground"/>

        {/* AND Gate (B, C) */}
        <line x1="50" y1="50" x2="50" y2="75" className="stroke-foreground" />
        <line x1="50" y1="75" x2="80" y2="75" className="stroke-foreground" />
        <path d="M 80 70 L 80 105 C 100 105, 100 70, 80 70 Z" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <line x1="110" y1="87.5" x2="160" y2="87.5" className="stroke-foreground" />
        
        {/* OR Gate */}
        <path d="M 160,30 C 200,55 200,90 160,115 Q 170,72.5 160,30 Z" className="fill-card stroke-foreground" strokeWidth="1.5" />
        <line x1="203" y1="72.5" x2="240" y2="72.5" className="stroke-foreground"/>
        <text x="250" y="77.5">Output</text>
    </svg>
);
