
"use client";

import React from "react";
import type { DataStructure, Note, Topic } from "@/lib/types";
import { data, allNotes } from "@/lib/data";
import { FileText, Book, Construction, BookText, Check, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgressStore } from "@/hooks/use-progress-store";

interface TableOfContentsPageProps {
    onItemSelect: (id: string, type: 'note' | 'paper' | 'tool' | 'glossary') => void;
}

const TopicList = ({ topics, onItemSelect, level = 0, completedTopics }: { topics: Topic[], onItemSelect: (id: string, type: 'note') => void, level?: number, completedTopics: string[] }) => {
    
    const getNoteById = (id: string): Note | undefined => {
        return allNotes.find(note => note.id === id);
    };

    return (
    <ul className="space-y-2">
        {topics.map(topic => (
            <li key={topic.id}>
                <h3 className={cn("font-semibold font-headline",
                    level === 0 && "text-xl mt-4 border-b pb-1",
                    level === 1 && "text-lg",
                    level === 2 && "text-base"
                )} style={{ marginLeft: `${level * 1}rem` }}>{topic.title}</h3>
                {topic.notes && topic.notes.length > 0 && (
                    <ul className="space-y-1 mt-2" style={{ marginLeft: `${(level + 1) * 1}rem` }}>
                        {topic.notes.map(noteRef => {
                            const note = getNoteById(noteRef.id);
                            if (!note) return null;
                            const isCompleted = completedTopics.includes(note.id);
                            return (
                                <li key={note.id}>
                                    <button
                                        onClick={() => onItemSelect(note.id, 'note')}
                                        className={cn(
                                            "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-1 rounded hover:bg-muted",
                                            isCompleted && "text-foreground/80"
                                        )}
                                    >
                                        <FileText className="h-4 w-4 flex-shrink-0" />
                                        <span className="flex-grow">{note.title}</span>
                                        {isCompleted && <Check className="h-4 w-4 text-green-500 flex-shrink-0" />}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                )}
                {topic.subTopics && topic.subTopics.length > 0 && (
                    <div className="mt-2">
                       <TopicList topics={topic.subTopics} onItemSelect={onItemSelect} level={level + 1} completedTopics={completedTopics} />
                    </div>
                )}
            </li>
        ))}
    </ul>
    );
};

export const TableOfContentsPage = ({ onItemSelect }: TableOfContentsPageProps) => {
    const { activeTrack } = useProgressStore();
    const completedTopics = activeTrack?.completedTopics || [];

    const mindmaps = data.tools.filter(tool => tool.tags.includes('mindmap'));
    const otherTools = data.tools.filter(tool => !tool.tags.includes('mindmap'));

    return (
        <div className="a4-page">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-center mb-8">Table of Contents</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                <section>
                    <h2 className="font-headline text-2xl font-bold mb-4 border-b-2 border-primary pb-2">Syllabus Notes</h2>
                    <TopicList topics={data.topics} onItemSelect={(id, type) => onItemSelect(id, type)} completedTopics={completedTopics} />
                </section>
                
                <div className="space-y-8">
                    <section>
                        <h2 className="font-headline text-2xl font-bold mb-4 border-b-2 border-primary pb-2">Past Papers</h2>
                         <div className="space-y-2">
                            {data.pastPapers.sort((a,b) => b.year - a.year).map(paper => (
                                <button 
                                  key={paper.id} 
                                  onClick={() => onItemSelect(paper.id, 'paper')} 
                                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-1 rounded hover:bg-muted"
                                >
                                    <Book className="h-4 w-4 flex-shrink-0" />
                                    <span className="flex-grow">{paper.title}</span>
                                </button>
                            ))}
                        </div>
                    </section>
                    
                    <section>
                        <h2 className="font-headline text-2xl font-bold mb-4 border-b-2 border-primary pb-2">Recall Papers</h2>
                         <div className="space-y-2">
                            {data.recallPapers.sort((a,b) => b.year - a.year).map(paper => (
                                <button 
                                  key={paper.id} 
                                  onClick={() => onItemSelect(paper.id, 'paper')} 
                                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-1 rounded hover:bg-muted"
                                >
                                    <Book className="h-4 w-4 flex-shrink-0" />
                                    <span className="flex-grow">{paper.title}</span>
                                </button>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl font-bold mb-4 border-b-2 border-primary pb-2">Interactive Tools</h2>
                        
                        <h3 className="font-semibold font-headline text-lg mt-4 mb-2">Mindmaps</h3>
                        <div className="space-y-2">
                            {mindmaps.map(tool => (
                                <button 
                                  key={tool.id} 
                                  onClick={() => onItemSelect(tool.id, 'tool')} 
                                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-1 rounded hover:bg-muted"
                                >
                                    <Share2 className="h-4 w-4 flex-shrink-0" />
                                    <span className="flex-grow">{tool.title}</span>
                                </button>
                            ))}
                        </div>

                        <h3 className="font-semibold font-headline text-lg mt-6 mb-2">Simulators & Calculators</h3>
                        <div className="space-y-2">
                            {otherTools.map(tool => (
                                <button 
                                  key={tool.id} 
                                  onClick={() => onItemSelect(tool.id, 'tool')} 
                                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-1 rounded hover:bg-muted"
                                >
                                    <Construction className="h-4 w-4 flex-shrink-0" />
                                    <span className="flex-grow">{tool.title}</span>
                                </button>
                            ))}
                        </div>
                    </section>

                     <section>
                        <h2 className="font-headline text-2xl font-bold mb-4 border-b-2 border-primary pb-2">Reference</h2>
                        <div className="space-y-2">
                            <button 
                                onClick={() => onItemSelect('glossary-page', 'glossary')} 
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-1 rounded hover:bg-muted"
                            >
                                <BookText className="h-4 w-4 flex-shrink-0" />
                                <span className="flex-grow">Glossary of Terms</span>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
