
"use client"

import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Eye, RotateCcw, Terminal } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Separator } from '../ui/separator';
import { ButtonGroup } from '../ui/button-group';

interface HTMLSandboxProps {
  initialCode: string;
  isPrintView: boolean;
}

export const HTMLSandbox = ({ initialCode, isPrintView }: HTMLSandboxProps) => {
  const [code, setCode] = useState(initialCode);
  const [renderedCode, setRenderedCode] = useState(initialCode);
  const { theme } = useTheme();

  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
  };
  
  const executeCode = () => {
      setRenderedCode(code);
  };

  const resetCode = () => {
    setCode(initialCode);
    setRenderedCode(initialCode);
  };

  useEffect(() => {
    // A small delay to render the initial code after the iframe is ready
    const timer = setTimeout(() => {
      setRenderedCode(initialCode);
    }, 100);
    return () => clearTimeout(timer);
  }, [initialCode]);

  if (isPrintView) {
    return (
      <div className="not-prose my-6">
        <h4 className="font-semibold mb-2">HTML/CSS Code Example</h4>
        <pre className="p-4 rounded-md bg-gray-100 text-sm overflow-x-auto">
          <code className="font-mono">{initialCode}</code>
        </pre>
      </div>
    );
  }

  return (
    <Card className="not-prose my-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2"><Code /> HTML Sandbox</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Code Editor</h4>
              <div className="border rounded-md overflow-hidden">
                <Editor
                  height="400px"
                  language="html"
                  theme={theme === 'dark' ? 'vs-dark' : 'light'}
                  value={code}
                  onChange={(value) => setCode(value || '')}
                  onMount={handleEditorDidMount}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    fontFamily: "monospace",
                    scrollBeyondLastLine: false,
                  }}
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2"><Terminal /> Live Preview</h4>
               <div className="h-[400px] border rounded-md overflow-hidden">
                <iframe
                    srcDoc={renderedCode}
                    title="HTML Preview"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="bg-white"
                />
               </div>
            </div>
        </div>
      </CardContent>
       <CardFooter className="border-t pt-4">
        <ButtonGroup>
            <Button onClick={executeCode}>
              <Eye className="mr-2"/>
              Preview
            </Button>
            <Button onClick={resetCode} variant="outline">
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
            </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

    