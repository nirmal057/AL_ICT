
"use client";

import React from "react";
import { FlowchartNode, Arrow } from "./past-paper-diagrams"; // Reusing node components

export const Flowchart2012P1Q43 = () => (
    <svg viewBox="0 0 300 500" className="w-full max-w-xs h-auto">
        <FlowchartNode label="Start" x={150} y={30} type="terminal" />
        <Arrow from={{x: 150, y: 45}} to={{x: 150, y: 75}} />

        <FlowchartNode label="Input x" x={150} y={95} type="io" />
        <Arrow from={{x: 150, y: 115}} to={{x: 150, y: 145}} />

        <FlowchartNode label="i = 1" x={150} y={165} type="process" />
        <Arrow from={{x: 150, y: 185}} to={{x: 150, y: 215}} />

        <FlowchartNode label="i <= x?" x={150} y={240} type="decision" />
        <Arrow from={{x: 150, y: 265}} to={{x: 150, y: 295}} label="Yes" />
        <Arrow from={{x: 220, y: 240}} to={{x: 270, y: 240}} label="No" />
        
        <FlowchartNode label="Stop" x={270} y={265} type="terminal" />
        <line x1="270" y1="240" x2="270" y2="255" className="stroke-foreground" />


        <FlowchartNode label="x % i == 0?" x={150} y={320} type="decision" />
        <Arrow from={{x: 150, y: 345}} to={{x: 150, y: 375}} label="Yes" />
        <Arrow from={{x: 90, y: 320}} to={{x: 50, y: 320}} label="No" />

        <FlowchartNode label="Print i" x={150} y={395} type="io" />
        <Arrow from={{x: 150, y: 415}} to={{x: 150, y: 430}} />
        
        <line x1="50" y1="320" x2="50" y2="445" className="stroke-foreground" />
        <line x1="150" y1="430" x2="50" y2="430" className="stroke-foreground" />
        <Arrow from={{x:50, y:430}} to={{x:50, y:445}} />

        <FlowchartNode label="i = i + 1" x={150} y={465} type="process" />
        <line x1="150" y1="485" x2="50" y2="485" className="stroke-foreground" />
        <line x1="50" y1="485" x2="50" y2="240" className="stroke-foreground" />
        <Arrow from={{x:50, y:240}} to={{x:80, y:240}} />
    </svg>
);
