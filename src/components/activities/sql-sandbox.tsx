
"use client"

import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Loader2, RotateCcw, Database, AlertCircle, Terminal } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Separator } from '../ui/separator';
import { ButtonGroup } from '../ui/button-group';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

declare global {
  interface Window {
    initSqlJs: any;
  }
}

const initialCode = `
-- Welcome to the SQL Sandbox!
-- This is a safe environment to practice your SQL queries.
-- The database is pre-loaded with 'students' and 'courses' tables.
-- You can write any SELECT, INSERT, UPDATE, or DELETE query.
-- Click "Run" to see the results.

-- Example: Select all students from Colombo
SELECT * FROM students WHERE city = 'Colombo';
`.trim();

const sampleDB = `
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  age INTEGER,
  city TEXT
);

INSERT INTO students (id, first_name, last_name, age, city) VALUES
(1, 'Nimal', 'Silva', 20, 'Colombo'),
(2, 'Sunil', 'Perera', 22, 'Kandy'),
(3, 'Kamala', 'Fernando', 21, 'Galle'),
(4, 'Bimal', 'Jayawardena', 23, 'Colombo');

CREATE TABLE courses (
  course_id TEXT PRIMARY KEY,
  course_name TEXT,
  credits INTEGER
);

INSERT INTO courses (course_id, course_name, credits) VALUES
('ICT101', 'Introduction to ICT', 3),
('CS202', 'Database Systems', 4),
('CS105', 'Programming Fundamentals', 4);
`;

export const SQLSandbox = ({ isPrintView }: { isPrintView: boolean }) => {
  const [code, setCode] = useState(initialCode);
  const { theme } = useTheme();
  const [db, setDb] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initDB = async () => {
      setIsLoading(true);
      setError(null);
      try {
        let initSqlJs = window.initSqlJs;
        if (!initSqlJs) {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/sql-wasm.js';
          document.head.appendChild(script);

          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = () => reject(new Error("Failed to load SQL.js script from CDN."));
          });
          initSqlJs = window.initSqlJs;
        }

        const SQL = await initSqlJs({
          locateFile: (file: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}`
        });

        const database = new SQL.Database();
        database.run(sampleDB);
        setDb(database);
      } catch (e: any) {
        console.error("Initialization error:", e);
        setError("Failed to initialize the SQL engine. Please check your internet connection and try refreshing.");
      } finally {
        setIsLoading(false);
      }
    };
    initDB();
  }, []);

  const executeCode = () => {
    if (isLoading || !db) {
      setError("Database is not ready.");
      return;
    }
    try {
      const res = db.exec(code);
      setResults(res);
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setResults([]);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
  };
  
  const ResultsDisplay = () => {
    if (isLoading) {
       return <div className="flex items-center gap-2 text-muted-foreground"><Loader2 className="animate-spin h-4 w-4" /> Loading SQL Engine...</div>
    }
     if (error) {
       return (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
        )
     }

    if (!results || results.length === 0) {
      return <p className="text-muted-foreground text-sm">No results to display. Click "Run" to execute a query.</p>;
    }

    return (
        <div className="space-y-4">
            {results.map((result, i) => (
                <div key={i}>
                    <p className="font-semibold text-sm mb-2">Query {i+1} Result:</p>
                    {result.columns.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    {result.columns.map((col: string, j: number) => <TableHead key={j}>{col}</TableHead>)}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {result.values.map((row: any[], rowIndex: number) => (
                                    <TableRow key={rowIndex}>
                                        {row.map((val: any, cellIndex: number) => <TableCell key={cellIndex}>{val}</TableCell>)}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <p className="text-green-600 text-sm">Query executed successfully with no result set (e.g., INSERT, UPDATE).</p>
                    )}
                </div>
            ))}
        </div>
    )
  }

  if (isPrintView) {
    return (
      <div className="not-prose my-6">
        <h4 className="font-semibold mb-2">SQL Example</h4>
        <pre className="p-4 rounded-md bg-slate-100 text-sm overflow-x-auto">
          <code className="font-mono">{initialCode}</code>
        </pre>
      </div>
    );
  }

  return (
    <Card className="not-prose my-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2"><Database /> SQL Sandbox</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">SQL Editor</h4>
          <div className="border rounded-md overflow-hidden">
            <Editor
              height="300px"
              language="sql"
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
                <Button onClick={executeCode} disabled={isLoading}>
                  {isLoading ? <Loader2 className="animate-spin mr-2" /> : <Play className="mr-2" />}
                  Run
                </Button>
                <Button onClick={resetCode} disabled={isLoading} variant="outline">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                </Button>
            </ButtonGroup>
          </div>
          {(results.length > 0 || error || isLoading) && (
            <Accordion type="single" collapsible className="w-full" defaultValue='item-1'>
                <AccordionItem value="item-1" className="border-0">
                  <div className="border-t">
                    <AccordionTrigger className="p-4 text-sm font-semibold"><Terminal className="mr-2 h-4 w-4" />View Output</AccordionTrigger>
                  </div>
                  <AccordionContent className="p-4 pt-0">
                    <div className="p-4 rounded-md bg-muted text-sm min-h-[80px] w-full overflow-x-auto">
                      <ResultsDisplay />
                    </div>
                  </AccordionContent>
                </AccordionItem>
            </Accordion>
          )}
      </CardFooter>
    </Card>
  );
};

    