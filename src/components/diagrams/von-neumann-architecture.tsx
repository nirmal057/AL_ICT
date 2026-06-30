
"use client"

export const VonNeumannArchitectureDiagram = () => (
    <div className="my-6">
        <svg viewBox="0 0 800 500" className="w-full h-auto bg-background p-4 border rounded-lg text-foreground">
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" className="fill-foreground" />
                </marker>
            </defs>
            
            <rect x="50" y="200" width="150" height="80" rx="5" ry="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
            <text x="125" y="245" textAnchor="middle" className="font-semibold fill-foreground" fontSize="20">ආදාන ඒකකය</text>

            <rect x="600" y="200" width="150" height="80" rx="5" ry="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
            <text x="675" y="245" textAnchor="middle" className="font-semibold fill-foreground" fontSize="20">ප්‍රතිදාන ඒකකය</text>

            <rect x="250" y="50" width="300" height="400" rx="10" ry="10" className="fill-muted/50 stroke-foreground" strokeWidth="1.5" />
            
            <rect x="260" y="60" width="280" height="190" rx="5" ry="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
            <text x="400" y="85" textAnchor="middle" className="font-bold fill-foreground" fontSize="18">මධ්‍යම සැකසුම් ඒකකය</text>

            <rect x="280" y="105" width="240" height="65" rx="5" ry="5" className="fill-background stroke-foreground" strokeWidth="1" />
            <text x="400" y="140" textAnchor="middle" className="font-semibold fill-foreground" fontSize="18">පාලන ඒකකය</text>

            <rect x="280" y="180" width="240" height="60" rx="5" ry="5" className="fill-background stroke-foreground" strokeWidth="1" />
            <text x="400" y="205" textAnchor="middle" className="font-semibold fill-foreground" fontSize="16">අංක ගණිතමය සහ</text>
            <text x="400" y="225" textAnchor="middle" className="font-semibold fill-foreground" fontSize="16">තාර්කික ඒකකය</text>

            <rect x="260" y="320" width="280" height="120" rx="5" ry="5" className="fill-card stroke-foreground" strokeWidth="1.5" />
            <text x="400" y="380" textAnchor="middle" className="font-semibold fill-foreground" fontSize="22">මතක ඒකකය</text>
            
            <line x1="200" y1="240" x2="380" y2="175" className="stroke-foreground" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="240" y="200" className="fill-foreground font-semibold" fontSize="16">ආදානය</text>

            <line x1="420" y1="175" x2="600" y2="240" className="stroke-foreground" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="520" y="200" className="fill-foreground font-semibold" fontSize="16">ප්‍රතිදානය</text>

            <line x1="400" y1="250" x2="400" y2="310" className="stroke-foreground" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <line x1="400" y1="320" x2="400" y2="260" className="stroke-foreground" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </svg>
    </div>
);
