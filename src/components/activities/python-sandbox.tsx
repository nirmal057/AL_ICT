"use client"

import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Loader2, RotateCcw, MonitorPlay, Terminal, Eye } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Separator } from '../ui/separator';
import { ButtonGroup } from '../ui/button-group';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

declare global {
  interface Window {
    pyodide: any;
  }
}

interface PythonSandboxProps {
  initialCode: string;
  isPrintView: boolean;
}

export const PythonSandbox = ({ initialCode, isPrintView }: PythonSandboxProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const { theme } = useTheme();

  const pyodideRef = useRef<any>(null);

  useEffect(() => {
    const loadPyodide = async () => {
      if (window.pyodide) {
        pyodideRef.current = window.pyodide;
        setIsLoading(false);
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
      script.onload = async () => {
        try {
          // @ts-ignore
          const pyodide = await window.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/'
          });
          pyodideRef.current = pyodide;
          // Make it globally available to avoid reloading
          window.pyodide = pyodide;
        } catch (e) {
            console.error("Pyodide loading failed:", e);
            setError("Failed to load Python runtime. Please check your network connection and try again.");
        } finally {
            setIsLoading(false);
        }
      };
      script.onerror = () => {
          setError("Failed to load Python script. Ad-blockers might be interfering.");
          setIsLoading(false);
      }
      document.head.appendChild(script);
    };

    loadPyodide();
  }, []);

  const executeCode = async () => {
    if (!pyodideRef.current || isRunning) return;
    setIsRunning(true);
    setOutput('');
    setError('');

    try {
      let consoleOutput = "";
      pyodideRef.current.setStdout({
        batched: (str: string) => {
          consoleOutput += str + '\n';
        }
      });
      pyodideRef.current.setStderr({
        batched: (str: string) => {
          setError(prev => prev + str + '\n');
        }
      });

      await pyodideRef.current.loadPackagesFromImports(code);
      let result = await pyodideRef.current.runPythonAsync(code);
      if(result !== undefined) {
         consoleOutput += result;
      }
      setOutput(consoleOutput);

    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsRunning(false);
    }
  };
  
  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    setError('');
  };

  if (isPrintView) {
    return (
      <div className="not-prose my-6">
        <h4 className="font-semibold mb-2">Python Code Example</h4>
        <pre className="p-4 rounded-md bg-slate-100 text-sm overflow-x-auto">
          <code className="font-mono">{initialCode}</code>
        </pre>
      </div>
    );
  }

  return (
    <Card className="not-prose my-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2"><MonitorPlay /> Python Sandbox</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <h4 className="font-semibold text-sm mb-2">Code Editor</h4>
          <div className="border rounded-md overflow-hidden">
            <Editor
              height="300px"
              language="python"
              theme={theme === 'dark' ? 'vs-dark' : 'light'}
              value={code}
              onChange={(value) => setCode(value || '')}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "monospace",
                scrollBeyondLastLine: false,
              }}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 p-0">
          <div className="p-4 w-full">
            <ButtonGroup>
                <Button onClick={executeCode} disabled={isLoading || isRunning}>
                  {(isLoading || isRunning) ? <Loader2 className="animate-spin mr-2" /> : <Play className="mr-2" />}
                  Run
                </Button>
                <Button onClick={resetCode} disabled={isLoading || isRunning} variant="outline">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                </Button>
            </ButtonGroup>
          </div>
           {(output || error || isLoading) && (
              <Accordion type="single" collapsible className="w-full" defaultValue='item-1'>
                <AccordionItem value="item-1" className="border-0">
                    <div className="border-t w-full">
                        <AccordionTrigger className="p-4 text-sm font-semibold"><Terminal className="mr-2 h-4 w-4" />View Output</AccordionTrigger>
                    </div>
                    <AccordionContent className="p-4 pt-0">
                        <div className="p-4 rounded-md bg-muted text-sm min-h-[80px] w-full overflow-x-auto">
                          <pre className="whitespace-pre-wrap font-mono text-xs">
                            {isLoading ? <span className="text-muted-foreground flex items-center gap-2"><Loader2 className="animate-spin h-4 w-4" /> Loading Python Runtime...</span> : 
                            isRunning ? <span className="text-muted-foreground">Executing...</span> :
                            error ? <span className="text-destructive">{error}</span> :
                            output ? <span>{output}</span> :
                            <span className="text-muted-foreground">Click "Run" to see the output.</span>}
                          </pre>
                        </div>
                    </AccordionContent>
                </AccordionItem>
              </Accordion>
           )}
      </CardFooter>
    </Card>
  );
};
