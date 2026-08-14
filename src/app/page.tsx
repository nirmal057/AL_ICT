
"use client";

import React, { useState, useMemo, useEffect, useRef, Suspense } from "react";
import type { Note, Paper, Topic } from "@/lib/types";
import { BookOpen, Menu, Home, BookCopy, ChevronRight, BookText, Construction, Bookmark, Code, FileText, Book, ArrowLeft, ArrowRight, Info } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { TableOfContents } from "@/components/table-of-contents";
import { Button } from "@/components/ui/button";
import { CoverPage } from "@/components/cover-page";
import { TableOfContentsPage } from "@/components/table-of-contents-page";
import { GlossaryPage } from "@/components/glossary-page";
import { useProgressStore } from "@/hooks/use-progress-store";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { ViewSettingsPanel } from "@/components/view-settings-panel";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useViewSettingsStore } from "@/hooks/use-view-settings-store";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

// --- Dynamic Imports ---
const NoteView = dynamic(() => import('@/components/note-view').then(mod => mod.NoteView), { 
    ssr: false,
    loading: () => <NoteSkeleton /> 
});
const PaperView = dynamic(() => import('@/components/paper-view').then(mod => mod.PaperView), { 
    ssr: false,
    loading: () => <NoteSkeleton /> 
});


const NoteSkeleton = () => (
    <div className="a4-page">
        <Skeleton className="h-10 w-3/4 mb-2" />
        <div className="flex gap-2 mb-8">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-24" />
        </div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <br />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-4/5 mb-2" />
    </div>
);


// Helper to check if an item is a Paper
function isPaper(item: Note | Paper | Topic): item is Paper {
  return 'year' in item;
}
function isTopic(item: Note | Paper | Topic): item is Topic {
  return 'subTopics' in item || ('notes' in item && !('type' in item));
}

const ChapterPage = ({ topic, chapterNumber }: { topic: Topic, chapterNumber: string }) => (
    <div className="a4-page flex flex-col items-center justify-center text-center">
        <BookCopy className="h-16 w-16 text-muted-foreground mb-4" />
        <p className="text-sm font-semibold text-primary">Chapter {chapterNumber}</p>
        <h1 className="font-headline text-4xl font-bold mt-2">{topic.title}</h1>
    </div>
);

export default function AppHomePage() {
  const [selectedItemId, setSelectedItemId] = useState<string | null>("cover-page");
  const [activeContent, setActiveContent] = useState<(Note | Paper | Topic)[]>([]);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const mainScrollAreaRef = useRef<HTMLDivElement>(null);
  const [scrollTargetId, setScrollTargetId] = useState<string | null>(null);
  const [questionToScrollTo, setQuestionToScrollTo] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { activeTrack, toggleBookmark, addLastViewed } = useProgressStore();
  const { toast } = useToast();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pageWidth, fontSize } = useViewSettingsStore();
  const [history, setHistory] = useState<string[]>(["cover-page"]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [showUpdateNotice, setShowUpdateNotice] = useState(false);

  const data = useMemo(() => require('@/lib/data').data, []);
  const allContent = useMemo(() => require('@/lib/data').allContent, []);
  const allNotes = useMemo(() => require('@/lib/data').allNotes, []);
  const allPapers = useMemo(() => require('@/lib/data').allPapers, []);

  const findParentTopic = useMemo(() => (topics: Topic[], itemId: string): Topic | null => {
      for (const topic of topics) {
          if (topic.notes?.some(noteRef => (noteRef as any).id === itemId)) {
              return topic;
          }
          if (topic.subTopics) {
              const found = findParentTopic(topic.subTopics, itemId);
              if (found) return topic;
          }
      }
      return null;
  }, []);

  const getNotesForTopic = useMemo(() => (topic: Topic): (Note|Topic)[] => {
      let notes: (Note|Topic)[] = [];
      if (topic.notes) {
          notes = notes.concat(topic.notes.map(noteRef => allNotes.find(n => n.id === noteRef.id)).filter(n => n) as Note[]);
      }
      if (topic.subTopics) {
          topic.subTopics.forEach(subTopic => {
              notes.push(subTopic);
              notes = notes.concat(getNotesForTopic(subTopic));
          });
      } else if (!topic.notes) {
        notes.push(topic);
      }
      return notes;
  }, [allNotes]);

  const findTopicById = useMemo(() => (topics: Topic[], id: string): Topic | null => {
      for (const topic of topics) {
          if (topic.id === id) return topic;
          if (topic.subTopics) {
              const found = findTopicById(topic.subTopics, id);
              if (found) return found;
          }
      }
      return null;
  }, []);

  const getChapterNumberForTopic = useMemo(() => (topics: Topic[], topicId: string, prefix = ''): string => {
      for (let i = 0; i < topics.length; i++) {
          const topic = topics[i];
          const currentPrefix = prefix ? `${prefix}.${i + 1}` : `${i + 1}`;
          if (topic.id === topicId) {
              return currentPrefix;
          }
          if (topic.subTopics) {
              const found = getChapterNumberForTopic(topic.subTopics, topicId, currentPrefix);
              if (found) return found;
          }
      }
      return '';
  }, []);

  const bookmarks = activeTrack?.bookmarks || [];

  useEffect(() => {
    const noticeShown = sessionStorage.getItem('updateNoticeShown');
    if (!noticeShown) {
      setShowUpdateNotice(true);
      sessionStorage.setItem('updateNoticeShown', 'true');
    }
    handleItemSelect("cover-page", 'cover-page', true, false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
 useEffect(() => {
    if (scrollTargetId && contentRefs.current[scrollTargetId]) {
      setIsScrolling(true);
      contentRefs.current[scrollTargetId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      const timer = setTimeout(() => {
        setIsScrolling(false);
        setScrollTargetId(null); 
      }, 1000); 

      return () => clearTimeout(timer);
    }
  }, [scrollTargetId, activeContent]);
  
  useEffect(() => {
    observerRef.current?.disconnect();
    
    const visibleEntries: IntersectionObserverEntry[] = [];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrolling) return;

      entries.forEach(entry => {
        const index = visibleEntries.findIndex(e => e.target.id === entry.target.id);
        if (entry.isIntersecting) {
          if (index === -1) {
            visibleEntries.push(entry);
          }
        } else {
          if (index !== -1) {
            visibleEntries.splice(index, 1);
          }
        }
      });
      
      visibleEntries.sort((a,b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);

      if (visibleEntries.length > 0) {
        const topMostVisibleId = visibleEntries[0].target.id;
        if(topMostVisibleId !== selectedItemId){
            setSelectedItemId(topMostVisibleId);
            addLastViewed(topMostVisibleId);
        }
      }
    };
    
    observerRef.current = new IntersectionObserver(observerCallback, {
        root: mainScrollAreaRef.current,
        threshold: 0.1,
    });

    const currentObserver = observerRef.current;
    Object.values(contentRefs.current).forEach(ref => {
        if (ref) {
            currentObserver.observe(ref);
        }
    });

    return () => currentObserver.disconnect();
  }, [activeContent, isScrolling, addLastViewed, selectedItemId]);


  const { currentSelectedItem, parentTopic, itemType } = useMemo(() => {
    if (!selectedItemId) return { currentSelectedItem: null, parentTopic: null, itemType: null };
    
    let item = allContent.find(i => i.id === selectedItemId);
    let type: string | null = null;
    let parent: Topic | null = null;

    if (item) {
        if (isPaper(item) || data.modelPapers.some(p => p.id === item?.id) || data.recallPapers.some(p => p.id === item?.id)) {
            type = 'paper';
        } else if (isTopic(item)) {
            type = 'topic';
            parent = findParentTopic(data.topics, item.id);
        } else if ('type' in item && item.type === 'glossary') {
            type = 'glossary';
        } else if ('tags' in item && item.tags?.includes('tool')) {
            type = 'tool';
        } else {
            type = 'note';
            parent = findParentTopic(data.topics, item.id);
        }
    }
    
    return { currentSelectedItem: item, parentTopic: parent, itemType: type };
  }, [selectedItemId, allContent, data]);

 const handleItemSelect = (id: string, type: 'note' | 'paper' | 'question' | 'tool' | 'cover-page' | 'toc-page' | 'topic' | 'glossary', shouldScroll = true, isNewHistoryEntry = true) => {
    let contentToShow: (Note | Paper | Topic)[] = [];
    let finalSelectedId = id;
    let newQuestionToScrollTo: string | null = null;

    if (type !== 'question') {
      setQuestionToScrollTo(null);
    }

    switch(type) {
        case 'note':
            const noteParentTopic = findParentTopic(data.topics, id);
            if (noteParentTopic) {
                const topicWithNotes = findTopicById(data.topics, noteParentTopic.id);
                if (topicWithNotes) {
                     contentToShow = getNotesForTopic(topicWithNotes);
                }
            } else { 
               const note = allNotes.find(n => n.id === id);
               if(note) contentToShow = [note];
            }
            finalSelectedId = id;
            break;
        case 'topic':
            const topic = findTopicById(data.topics, id);
            if (topic) {
                contentToShow = getNotesForTopic(topic);
                if (contentToShow.length > 0) {
                     finalSelectedId = contentToShow[0].id;
                } else {
                    finalSelectedId = id; 
                }
            }
            break;
        case 'paper':
            const paper = [...allPapers, ...data.modelPapers, ...data.recallPapers].find(p => p.id === id);
            if (paper) contentToShow = [paper];
            finalSelectedId = id;
            break;
        case 'cover-page':
            contentToShow = [];
            finalSelectedId = 'cover-page';
            break;
        case 'toc-page':
            contentToShow = [];
            finalSelectedId = 'toc-page';
            break;
        case 'glossary':
             contentToShow = [];
             finalSelectedId = 'glossary-page';
            break;
        case 'tool':
            const toolNote = data.tools.find(n => n.id === id);
            if (toolNote) {
              contentToShow = [toolNote];
            }
            finalSelectedId = id;
            break;
        case 'question':
            const paperOfQuestion = [...allPapers, ...data.modelPapers, ...data.recallPapers].find(p => 
                (p.content.hasOwnProperty('questions') ? (p.content as any).questions : [...(p.content as any).partA.questions, ...(p.content as any).partB.questions])
                .some((q: any) => q.id === id)
            );
            if (paperOfQuestion) {
                contentToShow = [paperOfQuestion];
                finalSelectedId = paperOfQuestion.id;
                newQuestionToScrollTo = id;
            }
            break;
    }
    
    if (shouldScroll && type !== 'question') {
        mainScrollAreaRef.current?.scrollTo({ top: 0, behavior: 'auto' });
    }
    
    if (activeContent.length === 0 || contentToShow.length === 0 || activeContent[0].id !== contentToShow[0]?.id) {
        setActiveContent(contentToShow);
    }

    setQuestionToScrollTo(newQuestionToScrollTo);
    setSelectedItemId(finalSelectedId); 
    setMobileMenuOpen(false);

    if (isNewHistoryEntry && id !== history[historyIndex]) {
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(id);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
    }

    if (shouldScroll && type !== 'question' && finalSelectedId !== 'cover-page' && finalSelectedId !== 'toc-page' && finalSelectedId !== 'glossary-page') {
      setTimeout(() => setScrollTargetId(finalSelectedId), 50);
    }
  };
  
  const handleGoHome = () => {
      handleItemSelect("cover-page", 'cover-page');
  }

  const handleToggleBookmark = () => {
    if (selectedItemId) {
      toggleBookmark(selectedItemId);
      const isBookmarked = bookmarks.includes(selectedItemId);
      toast({
        title: isBookmarked ? "Bookmark Removed" : "Bookmark Added",
        description: isBookmarked
          ? `"${currentSelectedItem?.title}" was removed from your bookmarks.`
          : `"${currentSelectedItem?.title}" was added to your bookmarks.`,
      });
    }
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      const prevId = history[newIndex];
      const prevItem = allContent.find(item => item.id === prevId);
      if (prevItem) {
        const type = isPaper(prevItem) ? 'paper' : allNotes.some(n => n.id === prevId) ? 'note' : 'question';
        handleItemSelect(prevId, type as any, true, false);
        setHistoryIndex(newIndex);
      }
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      const nextId = history[newIndex];
      const nextItem = allContent.find(item => item.id === nextId);
      if (nextItem) {
        const type = isPaper(nextItem) ? 'paper' : allNotes.some(n => n.id === nextId) ? 'note' : 'question';
        handleItemSelect(nextId, type as any, true, false);
        setHistoryIndex(newIndex);
      }
    }
  };

  const renderContent = () => {
    const isCover = selectedItemId === 'cover-page';
    if (isCover || (activeContent.length === 0 && ['cover-page', 'toc-page', 'glossary-page'].includes(selectedItemId ?? ''))) {
      if (selectedItemId === 'cover-page') {
        return (
          <div ref={el => { contentRefs.current['cover-page'] = el }} id="cover-page" className="page-wrapper">
            <CoverPage onItemSelect={(id, type) => handleItemSelect(id, type as any)} isCoverPage={isCover} />
          </div>
        );
      }
      if (selectedItemId === 'toc-page') {
        return (
          <div ref={el => { contentRefs.current['toc-page'] = el }} id="toc-page" className="page-wrapper">
            <TableOfContentsPage onItemSelect={(id, type) => handleItemSelect(id, type as any)} />
          </div>
        );
      }
      if (selectedItemId === 'glossary-page') {
        return (
          <div ref={el => { contentRefs.current['glossary-page'] = el }} id="glossary-page" className="page-wrapper">
            <GlossaryPage onItemSelect={(id, type) => handleItemSelect(id, type as any)} />
          </div>
        );
      }
    }
    
     if (activeContent.length === 0) {
      return (
         <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
          <BookOpen className="h-16 w-16 mb-4" />
          <h2 className="text-2xl font-semibold font-headline">Select a topic</h2>
          <p>Please select a topic from the table of contents.</p>
        </div>
      );
    }

    return activeContent.map((item) => {
        if (!item) return null;
        const keyId = item.id;
        if (isTopic(item) && !('type' in item)) {
            const chapterNum = getChapterNumberForTopic(data.topics, keyId);
            return (
                <div ref={el => { contentRefs.current[keyId] = el }} id={keyId} key={keyId} className="page-wrapper">
                    <ChapterPage topic={item} chapterNumber={chapterNum} />
                </div>
            );
        }

        const isTool = 'tags' in item && item.tags?.includes('tool');

        const component = isPaper(item)
          ? <PaperView paper={item as Paper} onNoteLinkClick={(noteId) => handleItemSelect(noteId, 'note')} scrollToQuestionId={questionToScrollTo} />
          : <NoteView
              note={item as Note}
              onQuestionLinkClick={(questionId) => handleItemSelect(questionId, 'question')}
              onNoteLinkClick={(noteId) => handleItemSelect(noteId, 'note')}
            />;
        
        return (
            <div ref={el => { contentRefs.current[keyId] = el }} id={keyId} key={keyId} className="page-wrapper">
                {component}
            </div>
        );
    });
  };

  const isBookmarked = selectedItemId ? bookmarks.includes(selectedItemId) : false;
  const isDashboard = selectedItemId === 'cover-page' || selectedItemId === 'toc-page' || selectedItemId === 'glossary-page';


  return (
    <div className="flex h-screen bg-background">

       <AlertDialog open={showUpdateNotice} onOpenChange={setShowUpdateNotice}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2"><Info className="h-6 w-6 text-primary"/> Welcome to All bits of ICT!</AlertDialogTitle>
            <AlertDialogDescription className="pt-4">
              Thank you for visiting. Please note that this website is still under active development. Content is being updated and proofread continuously.
              Enjoy your visit!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowUpdateNotice(false)}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <aside className="w-80 hidden md:flex flex-col border-r bg-background/80 backdrop-blur-sm z-10">
        <TableOfContents 
          data={data} 
          onItemSelect={(id, type) => handleItemSelect(id, type as any)}
          selectedItemId={selectedItemId}
        />
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden relative">
        <header className={cn("sticky top-0 z-20 border-b bg-background/80 backdrop-blur-sm no-print hidden md:flex", isDashboard && "bg-transparent border-b-0")}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2 font-semibold">
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" onClick={handleBack} disabled={historyIndex <= 0}>
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handleForward} disabled={historyIndex >= history.length - 1}>
                            <ArrowRight className="h-5 w-5" />
                        </Button>
                    </div>
                      <div className="flex items-center gap-1 md:gap-2 text-sm text-muted-foreground truncate">
                         <Logo className="text-xl hidden sm:flex" />
                          {parentTopic ? (
                              <>
                                  <ChevronRight className="h-4 w-4" />
                                  <span className="hidden sm:inline truncate">{parentTopic.title}</span>
                                  <span className="sm:hidden truncate">...</span>
                                  <ChevronRight className="h-4 w-4" />
                              </>
                          ) : itemType && itemType !== 'note' && itemType !== 'topic' && !isDashboard ? (
                              <>
                                  <ChevronRight className="h-4 w-4" />
                                  {itemType === 'glossary' && <BookText className="h-4 w-4 text-foreground" />}
                                  {itemType === 'tool' && <Construction className="h-4 w-4 text-foreground" />}
                                  {itemType === 'paper' && <BookOpen className="h-4 w-4 text-foreground" />}
                              </>
                          ) : null}
                          <span className="font-semibold text-foreground truncate">
                              {!isDashboard && currentSelectedItem ? currentSelectedItem.title : ''}
                          </span>
                      </div>
                </div>
                <div className="flex items-center gap-2">
                    {currentSelectedItem && ['note', 'paper'].includes(itemType || '') && !isDashboard && (
                        <Button variant="ghost" size="icon" onClick={handleToggleBookmark} aria-label="Bookmark">
                            <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current text-primary' : ''}`} />
                        </Button>
                    )}
                    <Button variant="ghost" size="icon" onClick={handleGoHome} aria-label="Go to Cover Page">
                        <Home className="h-5 w-5" />
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </header>
        <div className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <div 
            className="page-container" 
            ref={mainScrollAreaRef}
          >
            <main
              className="transition-all duration-300"
            >
              <Suspense fallback={<NoteSkeleton />}>
                {renderContent()}
              </Suspense>
            </main>
          </div>
          {!isDashboard && <ViewSettingsPanel />}
        </div>
        
        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur-sm z-50">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                       <Button variant="ghost" size="icon">
                          <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 w-80">
                       <TableOfContents 
                          data={data} 
                          onItemSelect={(id, type) => handleItemSelect(id, type as any)}
                          selectedItemId={selectedItemId}
                        />
                    </SheetContent>
                </Sheet>

                <div className="flex items-center gap-2">
                     <Button variant="ghost" size="icon" onClick={handleBack} disabled={historyIndex <= 0}>
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={handleForward} disabled={historyIndex >= history.length - 1}>
                        <ArrowRight className="h-5 w-5" />
                    </Button>
                </div>
                
                <Button variant="ghost" size="icon" onClick={handleGoHome} aria-label="Go to Cover Page">
                    <Home className="h-5 w-5" />
                </Button>

                {currentSelectedItem && ['note', 'paper'].includes(itemType || '') && !isDashboard && (
                    <Button variant="ghost" size="icon" onClick={handleToggleBookmark} aria-label="Bookmark">
                        <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current text-primary' : ''}`} />
                    </Button>
                )}

                <ThemeToggle />
            </div>
        </div>
      </div>
    </div>
  );
}
