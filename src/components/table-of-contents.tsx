

"use client";

import React, { useMemo, useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { DataStructure, Topic, Note, Paper } from "@/lib/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Book, Construction, Home, BookOpen, BookText, Check, Share2 } from "lucide-react";
import { cn } from '@/lib/utils';
import { allNotes } from '@/lib/data';
import { TrackManager } from './track-manager';
import { useProgressStore } from '@/hooks/use-progress-store';

interface TableOfContentsProps {
  data: DataStructure;
  onItemSelect: (id: string, type: 'note' | 'paper' | 'tool' | 'cover-page' | 'toc-page' | 'topic' | 'glossary') => void;
  selectedItemId: string | null;
}

const findTopicPath = (topics: Topic[], itemId: string): string[] => {
    for (const topic of topics) {
        if (topic.id === itemId) {
            return [topic.id];
        }

        if (topic.subTopics) {
            const subPath = findTopicPath(topic.subTopics, itemId);
            if (subPath.length > 0) {
                return [topic.id, ...subPath];
            }
        }
        
        if (topic.notes?.some(noteRef => (noteRef as any).id === itemId)) {
            const subPath = topic.subTopics ? findTopicPath(topic.subTopics, itemId) : [];
            if(subPath.length > 0) return [topic.id, ...subPath];
            return [topic.id];
        }

    }
    return [];
};


const TopicMenu = ({ topics, onItemSelect, selectedItemId, autoExpandedTopics, onManualExpand, level = 0, prefix = '', completedTopics }: { topics: Topic[], onItemSelect: (id: string, type: 'note' | 'topic') => void, selectedItemId: string | null, autoExpandedTopics: string[], onManualExpand: (value: string[]) => void, level?: number, prefix?: string, completedTopics: string[] }) => {
    const getNoteById = (id: string) => allNotes.find(note => note.id === id);
    
    const renderTopics = (topicsToRender: Topic[], currentLevel: number, currentPrefix: string) => {
        return topicsToRender.map((topic, index) => {
          const hasContent = (topic.notes && topic.notes.length > 0) || (topic.subTopics && topic.subTopics.length > 0);
          const itemPrefix = currentPrefix ? `${currentPrefix}.${index + 1}` : `${index + 1}`;

          return (
            <AccordionItem value={topic.id} key={topic.id} className="border-b-0">
              <AccordionTrigger 
                onClick={(e) => {
                  if(!hasContent) {
                    e.preventDefault();
                    onItemSelect(topic.id, 'topic');
                  }
                }}
                className={cn(
                    "text-left hover:no-underline rounded-md px-2 py-1.5",
                     currentLevel === 0 ? "text-base font-headline font-semibold" : "pl-3",
                     currentLevel === 1 ? "text-sm font-semibold" : "",
                     currentLevel > 1 ? "text-sm" : "",
                     autoExpandedTopics.includes(topic.id) && "text-primary"
                )}
                hideChevron={!hasContent}
              >
                  <span className="flex-grow text-left" onClick={(e) => { e.stopPropagation(); onItemSelect(topic.id, 'topic')}}>
                    <span className="mr-2 font-semibold">{itemPrefix}</span>
                    {topic.title}
                  </span>
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <div className={cn("border-l ml-2 pl-2 py-1", currentLevel > 0 && "ml-3")}>
                    {topic.notes && topic.notes.map(noteRef => {
                        const note = getNoteById((noteRef as any).id);
                        if (!note) return null;
                        const isCompleted = completedTopics.includes(note.id);
                        return (
                            <button 
                                key={note.id}
                                onClick={() => onItemSelect(note.id, 'note')} 
                                className={cn("flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-1 rounded hover:bg-muted",
                                    selectedItemId === note.id && "bg-primary/10 text-primary font-semibold",
                                    isCompleted && "text-foreground/80"
                                )}
                                >
                                <FileText className="h-4 w-4 flex-shrink-0" />
                                <span className="flex-grow">{note.title}</span>
                                {isCompleted && <Check className="h-4 w-4 text-green-500 flex-shrink-0" />}
                            </button>
                        )
                    })}
                  {topic.subTopics && topic.subTopics.length > 0 && renderTopics(topic.subTopics, currentLevel + 1, itemPrefix) }
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })
    }

    return (
       <Accordion 
        type="multiple" 
        className="w-full" 
        value={autoExpandedTopics}
        onValueChange={onManualExpand}
      >
        {renderTopics(topics, 0, prefix)}
      </Accordion>
    );
};


const PapersMenu = ({ pastPapers, recallPapers, modelPapers, onItemSelect, selectedItemId }: { pastPapers: Paper[], recallPapers: Paper[], modelPapers: Paper[], onItemSelect: (id: string, type: 'paper') => void, selectedItemId: string | null }) => {
    const groupedPastPapers = useMemo(() => {
        return pastPapers.reduce((acc, paper) => {
            const year = paper.year;
            if (!acc[year]) {
                acc[year] = [];
            }
            acc[year].push(paper);
            return acc;
        }, {} as Record<string, Paper[]>);
    }, [pastPapers]);

    const sortedYears = useMemo(() => {
        return Object.keys(groupedPastPapers).sort((a, b) => Number(b) - Number(a));
    }, [groupedPastPapers]);

    const selectedPaperYear = useMemo(() => {
      if (!selectedItemId) return null;
      const paper = pastPapers.find(p => p.id === selectedItemId);
      return paper ? paper.year.toString() : null;
    }, [selectedItemId, pastPapers]);
    
    const isRecallPaperSelected = useMemo(() => {
      if (!selectedItemId) return false;
      return recallPapers.some(p => p.id === selectedItemId);
    }, [selectedItemId, recallPapers]);

    const isModelPaperSelected = useMemo(() => {
        if(!selectedItemId) return false;
        return modelPapers.some(p => p.id === selectedItemId);
    }, [selectedItemId, modelPapers]);


    return (
        <Accordion type="multiple" defaultValue={['past-papers', selectedPaperYear, isModelPaperSelected ? 'model-papers' : '', isRecallPaperSelected ? 'recall-papers' : ''].filter(Boolean) as string[]}>
             <AccordionItem value="past-papers">
                <AccordionTrigger className="text-base font-headline font-semibold">
                    Past Papers
                </AccordionTrigger>
                <AccordionContent className="pl-4">
                     <Accordion type="single" collapsible defaultValue={selectedPaperYear || undefined}>
                        {sortedYears.map(year => (
                            <AccordionItem value={year} key={year}>
                                <AccordionTrigger className="text-sm font-semibold">
                                    {year}
                                </AccordionTrigger>
                                <AccordionContent className="pl-4">
                                    {groupedPastPapers[year].map(paper => (
                                        <button 
                                            key={paper.id} 
                                            onClick={() => onItemSelect(paper.id, 'paper')} 
                                            className={cn("flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-2 rounded hover:bg-muted",
                                                selectedItemId === paper.id && "bg-primary/10 text-primary font-semibold"
                                            )}
                                            >
                                            <Book className="h-4 w-4 flex-shrink-0" />
                                            <span className="flex-grow">{paper.title}</span>
                                        </button>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="recall-papers">
                <AccordionTrigger className="text-base font-headline font-semibold">
                    Recall Papers
                </AccordionTrigger>
                 <AccordionContent className="pl-4">
                    {recallPapers.map(paper => (
                         <button 
                            key={paper.id} 
                            onClick={() => onItemSelect(paper.id, 'paper')} 
                            className={cn("flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-2 rounded hover:bg-muted",
                                selectedItemId === paper.id && "bg-primary/10 text-primary font-semibold"
                            )}
                            >
                            <Book className="h-4 w-4 flex-shrink-0" />
                            <span className="flex-grow">{paper.title}</span>
                        </button>
                    ))}
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="model-papers">
                <AccordionTrigger className="text-base font-headline font-semibold">
                    Model Papers
                </AccordionTrigger>
                 <AccordionContent className="pl-4">
                    {modelPapers.map(paper => (
                         <button 
                            key={paper.id} 
                            onClick={() => onItemSelect(paper.id, 'paper')} 
                            className={cn("flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-2 rounded hover:bg-muted",
                                selectedItemId === paper.id && "bg-primary/10 text-primary font-semibold"
                            )}
                            >
                            <Book className="h-4 w-4 flex-shrink-0" />
                            <span className="flex-grow">{paper.title}</span>
                        </button>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
};

const ToolsMenu = ({ tools, onItemSelect, selectedItemId }: { tools: Note[], onItemSelect: (id: string, type: 'tool') => void, selectedItemId: string | null }) => {
    const mindmaps = tools.filter(tool => tool.tags.includes('mindmap'));
    const otherTools = tools.filter(tool => !tool.tags.includes('mindmap'));

    return (
        <div className="space-y-4">
             <div>
                <h3 className="text-sm font-headline font-semibold mb-2 pl-2">Mindmaps</h3>
                <div className="space-y-1">
                    {mindmaps.map(tool => (
                        <button 
                          key={tool.id} 
                          onClick={() => onItemSelect(tool.id, 'tool')} 
                          className={cn("flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-2 rounded hover:bg-muted",
                             selectedItemId === tool.id && "bg-primary/10 text-primary font-semibold"
                          )}
                        >
                            <Share2 className="h-4 w-4 flex-shrink-0" />
                            <span className="flex-grow">{tool.title}</span>
                        </button>
                    ))}
                </div>
            </div>
             <div>
                <h3 className="text-sm font-headline font-semibold mb-2 pl-2">Simulators & Calculators</h3>
                <div className="space-y-1">
                    {otherTools.map(tool => (
                        <button 
                          key={tool.id} 
                          onClick={() => onItemSelect(tool.id, 'tool')} 
                          className={cn("flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-2 rounded hover:bg-muted",
                             selectedItemId === tool.id && "bg-primary/10 text-primary font-semibold"
                          )}
                        >
                            <Construction className="h-4 w-4 flex-shrink-0" />
                            <span className="flex-grow">{tool.title}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};


export const TableOfContents = ({ data, onItemSelect, selectedItemId }: TableOfContentsProps) => {
  const [manualExpandedTopics, setManualExpandedTopics] = useState<string[]>([]);
  const { activeTrack } = useProgressStore();
  
  const completedTopics = activeTrack?.completedTopics || [];

  const autoExpandedTopics = useMemo(() => {
    if (!selectedItemId) return [];
    return findTopicPath(data.topics, selectedItemId);
  }, [selectedItemId, data.topics]);

  const combinedExpandedTopics = useMemo(() => {
    return [...new Set([...autoExpandedTopics, ...manualExpandedTopics])];
  }, [autoExpandedTopics, manualExpandedTopics]);

  useEffect(() => {
    setManualExpandedTopics(prev => [...new Set([...prev, ...autoExpandedTopics])]);
  }, [autoExpandedTopics]);

  const selectedTabValue = useMemo(() => {
    if (!selectedItemId || ['cover-page', 'toc-page', 'glossary-page'].includes(selectedItemId)) return 'notes';
    if (data.pastPapers.some(p => p.id === selectedItemId)) return 'papers';
    if (data.recallPapers.some(p => p.id === selectedItemId)) return 'papers';
    if (data.modelPapers.some(p => p.id === selectedItemId)) return 'papers';
    if (data.tools.some(t => t.id === selectedItemId)) return 'tools';
    if(autoExpandedTopics.length > 0) return 'notes';
    return 'notes';
  }, [selectedItemId, data, autoExpandedTopics]);

  const [activeTab, setActiveTab] = useState(selectedTabValue);

  useEffect(() => {
    setActiveTab(selectedTabValue);
  }, [selectedTabValue]);

  const handleAndClose = (id: string, type: 'note' | 'paper' | 'tool' | 'cover-page' | 'toc-page' | 'topic' | 'glossary') => {
      onItemSelect(id, type);
  }

  return (
    <>
      <div className="p-4 pb-2">
         <h2 className="text-2xl font-bold font-headline">Table of Contents</h2>
         <div className="mt-4">
            <TrackManager />
         </div>
      </div>
      <div className="px-4 py-2">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="papers">Papers</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          <ScrollArea className="h-[calc(100vh-230px)] mt-2">
            <TabsContent value="notes" className="pr-2 space-y-1">
              <button 
                onClick={() => handleAndClose('cover-page', 'cover-page')} 
                className={cn("flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-2 rounded hover:bg-muted font-semibold",
                   selectedItemId === 'cover-page' && "bg-primary/10 text-primary"
                )}
              >
                <Home className="h-4 w-4 flex-shrink-0" />
                <span className="flex-grow">Cover Page</span>
              </button>
               <button 
                onClick={() => handleAndClose('toc-page', 'toc-page')} 
                className={cn("flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-2 rounded hover:bg-muted font-semibold",
                   selectedItemId === 'toc-page' && "bg-primary/10 text-primary"
                )}
              >
                <BookOpen className="h-4 w-4 flex-shrink-0" />
                <span className="flex-grow">Table of Contents</span>
              </button>
               <button 
                onClick={() => handleAndClose('glossary-page', 'glossary')} 
                className={cn("flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground w-full text-left p-2 rounded hover:bg-muted font-semibold",
                   selectedItemId === 'glossary-page' && "bg-primary/10 text-primary"
                )}
              >
                <BookText className="h-4 w-4 flex-shrink-0" />
                <span className="flex-grow">Glossary</span>
              </button>
              <div className="my-2 border-b"></div>
              <TopicMenu 
                  topics={data.topics} 
                  onItemSelect={handleAndClose as any} 
                  selectedItemId={selectedItemId} 
                  autoExpandedTopics={combinedExpandedTopics}
                  onManualExpand={setManualExpandedTopics}
                  completedTopics={completedTopics}
              />
            </TabsContent>
            <TabsContent value="papers" className="pr-2">
              <PapersMenu pastPapers={data.pastPapers} recallPapers={data.recallPapers} modelPapers={data.modelPapers} onItemSelect={handleAndClose as any} selectedItemId={selectedItemId} />
            </TabsContent>
            <TabsContent value="tools" className="pr-2">
               <ToolsMenu tools={data.tools} onItemSelect={handleAndClose as any} selectedItemId={selectedItemId} />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </>
  )
}
