
"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  language: string;
  code: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ language, code, showLineNumbers, className }: CodeBlockProps & {className?: string}) {
  const { resolvedTheme } = useTheme();
  
  const style = resolvedTheme === 'dark' ? vscDarkPlus : prism;
  
  return (
    <div className={cn("my-4 rounded-lg border bg-background not-prose text-sm", className)}>
        <div className="flex justify-between items-center px-4 py-1.5 border-b bg-muted/50 rounded-t-lg">
            <span className="text-xs font-semibold uppercase">{language}</span>
        </div>
        <SyntaxHighlighter
            language={language === 'text' ? 'plaintext' : language}
            style={style}
            showLineNumbers={showLineNumbers}
            customStyle={{
                margin: 0,
                padding: '1rem',
                borderRadius: '0 0 8px 8px',
                fontSize: '14px',
                backgroundColor: 'transparent',
                whiteSpace: 'pre-wrap', 
                wordBreak: 'break-all',   
            }}
            wrapLongLines={true}
        >
            {code}
        </SyntaxHighlighter>
    </div>
  );
}
