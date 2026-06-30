
"use client"

import type { Note, Paper, MCQQuestion, StructuredQuestion, Activity } from "@/lib/types";
import { BookOpen } from 'lucide-react';
import { LazyNoteView } from "./lazy-note-view";


interface PrintPreviewProps {
  notes: Note[];
  printSettings: { includeQuestions: boolean; includeActivities: boolean };
}


export function PrintPreview({ notes, printSettings }: PrintPreviewProps) {
  if (notes.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8">
            <BookOpen className="h-16 w-16 mb-4" />
            <h2 className="text-2xl font-semibold font-headline">මුද්‍රණ පෙරදසුන</h2>
            <p>මුද්‍රණය සඳහා පෙරදසුන් කිරීමට පැති තීරුවෙන් සටහන් තෝරන්න.</p>
        </div>
    );
  }
    
  return (
    <div>
      {notes.map((note) => (
         <LazyNoteView 
            key={note.id} 
            note={note} 
            onQuestionLinkClick={()=>{}} 
            printSettings={printSettings} 
          />
      ))}
    </div>
  );
}

    