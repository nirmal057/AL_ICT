
"use client";

import { cn } from "@/lib/utils";

const KMapOption = ({ n, children }: { n: number, children: React.ReactNode }) => (
    <div className="border rounded-lg p-2">
        <div className="font-bold text-center mb-2">({n})</div>
        <div className="flex justify-center">{children}</div>
    </div>
);

const KMapGrid = ({ rows, cols, className }: { rows: string[], cols: string[], className?: string }) => (
    <svg viewBox="0 0 160 160" className={cn("w-40 h-auto", className)}>
        <rect x="40" y="40" width="120" height="120" className="fill-none stroke-foreground" strokeWidth="1" />
        <line x1="40" y1="70" x2="160" y2="70" className="stroke-foreground" />
        <line x1="40" y1="100" x2="160" y2="100" className="stroke-foreground" />
        <line x1="40" y1="130" x2="160" y2="130" className="stroke-foreground" />
        <line x1="70" y1="40" x2="70" y2="160" className="stroke-foreground" />
        <line x1="100" y1="40" x2="100" y2="160" className="stroke-foreground" />
        <line x1="130" y1="40" x2="130" y2="160" className="stroke-foreground" />
        {/* Row labels */}
        {rows.map((label, i) => <text key={`r-${i}`} x="25" y={55 + i * 30} className="text-xs">{label}</text>)}
        {/* Col labels */}
        {cols.map((label, i) => <text key={`c-${i}`} x={55 + i * 30} y="35" className="text-xs">{label}</text>)}
    </svg>
);


export const KMapLayout2013P1Q9 = () => {
    const rowLabels = ["00", "01", "11", "10"];
    const colLabels = ["00", "01", "11", "10"];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 not-prose">
            <KMapOption n={1}><KMapGrid rows={rowLabels} cols={colLabels} /></KMapOption>
            <KMapOption n={2}><KMapGrid rows={rowLabels} cols={["00", "11", "01", "10"]} /></KMapOption>
            <KMapOption n={3}><KMapGrid rows={rowLabels} cols={["01", "00", "11", "10"]} /></KMapOption>
            <KMapOption n={4}><KMapGrid rows={["00", "11", "01", "10"]} cols={colLabels} /></KMapOption>
            <KMapOption n={5}><KMapGrid rows={["01", "00", "11", "10"]} cols={colLabels} /></KMapOption>
        </div>
    );
};
