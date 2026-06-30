
"use client";

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export const MermaidDiagram = ({ chart, className }: MermaidDiagramProps) => {
    const { theme, resolvedTheme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const renderDiagram = async () => {
            if (containerRef.current) {
                try {
                    setIsLoading(true);
                    const currentTheme = resolvedTheme === 'dark' ? 'dark' : 'default';
                    
                    mermaid.initialize({
                        startOnLoad: false,
                        theme: currentTheme,
                        securityLevel: 'loose',
                        themeVariables: {
                            background: 'transparent',
                             primaryColor: 'hsl(var(--background))', // Node background
                            primaryTextColor: 'hsl(var(--foreground))', // Node text
                            primaryBorderColor: 'hsl(var(--border))',
                            lineColor: 'hsl(var(--primary))',
                            secondaryColor: 'hsl(var(--secondary))',
                            tertiaryColor: 'hsl(var(--muted))'
                        }
                    });

                    const { svg } = await mermaid.render(`mermaid-${Math.random().toString(36).substring(7)}`, chart);
                    setSvg(svg);
                } catch (error) {
                    console.error('Mermaid rendering failed:', error);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        renderDiagram();
    }, [chart, resolvedTheme]);

    return (
        <div ref={containerRef} className={cn("w-full h-full flex items-center justify-center", className)}>
            {isLoading && <Skeleton className="w-full h-96" />}
            {svg && !isLoading && (
                 <div dangerouslySetInnerHTML={{ __html: svg }} />
            )}
        </div>
    );
};
