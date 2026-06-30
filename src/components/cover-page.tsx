
"use client";

import {
  BookCopy,
  FileText,
  Clock,
  Bookmark,
  CheckSquare,
  Book,
  Construction,
  BookText,
  ArrowRight,
  Code,
  TrendingUp,
  MoreVertical,
  PlusCircle,
  Pen,
  Trash2,
} from "lucide-react";
import { data, allContent, allNotes } from "@/lib/data";
import type { Topic, Note, Paper } from "@/lib/types";
import { useProgressStore } from "@/hooks/use-progress-store";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "./ui/button";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import React, { useState, useRef } from "react";
import { ItemListDialog } from "./ui/item-list-dialog";
import { Highlighter } from "./ui/highlighter";
import { Progress } from "./ui/progress";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";


const isPaper = (item: Note | Paper): item is Paper => "year" in item;

// Helper to get all note IDs in syllabus order
const getSyllabusNoteOrder = (topics: Topic[]): string[] => {
  let noteIds: string[] = [];
  topics.forEach(topic => {
    if (topic.notes) {
      noteIds.push(...topic.notes.map(n => n.id));
    }
    if (topic.subTopics) {
      noteIds.push(...getSyllabusNoteOrder(topic.subTopics));
    }
  });
  return noteIds;
};
const syllabusOrder = getSyllabusNoteOrder(data.topics);

// Helper to find the next lesson
const findNextLesson = (completedTopics: string[]): Note | null => {
    for (const noteId of syllabusOrder) {
        if (!completedTopics.includes(noteId)) {
            return allNotes.find(note => note.id === noteId) || null;
        }
    }
    return null; // All lessons completed
};

export const CoverPage = ({
  onItemSelect,
  isCoverPage,
}: {
  onItemSelect: (
    id: string,
    type: "note" | "paper" | "topic" | "cover-page" | "toc-page" | "glossary"
  ) => void;
  isCoverPage: boolean;
}) => {
  const { tracks, createTrack, editTrack, deleteTrack } = useProgressStore();
  const [isRecentModalOpen, setRecentModalOpen] = useState(false);
  const [isBookmarkModalOpen, setBookmarkModalOpen] = useState(false);

  const [dialogState, setDialogState] = useState<'create' | 'rename' | 'delete' | null>(null);
  const [trackName, setTrackName] = useState('');
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const activeTrack = tracks.find(t => t.id === selectedTrackId);


  const handleCreate = () => {
      if(trackName) {
          createTrack(trackName);
          setTrackName('');
          setDialogState(null);
      }
  }

  const handleRename = () => {
      if(trackName && selectedTrackId) {
          editTrack(selectedTrackId, trackName);
          setTrackName('');
          setDialogState(null);
      }
  }

  const handleDelete = () => {
      if(selectedTrackId) {
          deleteTrack(selectedTrackId);
          setDialogState(null);
      }
  }

  const lastViewedItems = (tracks.find(t => t.id === useProgressStore.getState().activeTrackId)?.lastViewed || [])
    .map((id) => allContent.find((item) => item.id === id))
    .filter((item): item is Note | Paper => !!item);

  const bookmarkedItems = (tracks.find(t => t.id === useProgressStore.getState().activeTrackId)?.bookmarks || [])
    .map((id) => allContent.find((item) => item.id === id))
    .filter((item): item is Note | Paper => !!item);

  const features = [
    {
      Icon: FileText,
      name: "Syllabus Notes",
      description: "Dive deep into the A/L ICT curriculum with comprehensive and structured notes for every chapter.",
      href: "toc-page",
      cta: "View Notes",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
      onClick: () => onItemSelect("toc-page", "topic"),
    },
    {
      Icon: Book,
      name: "Past Papers",
      description: "Practice with a collection of past papers to sharpen your skills and test your knowledge.",
      href: "toc-page",
      cta: "View Papers",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
       onClick: () => onItemSelect("toc-page", "paper"),
    },
    {
      Icon: Construction,
      name: "Interactive Tools",
      description: "Explore complex concepts with hands-on tools and simulators.",
      href: "toc-page",
      cta: "Explore Tools",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
       onClick: () => onItemSelect("toc-page", "tool"),
    },
    {
      Icon: Clock,
      name: "Recently Viewed",
      description: "Quickly jump back to the notes and papers you last visited.",
      href: "/",
      cta: "See All",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
       onClick: () => setRecentModalOpen(true),
      children: (
        <div className="pointer-events-auto">
            <ul className="space-y-2 mt-2">
                {lastViewedItems.length > 0 ? (
                    lastViewedItems.slice(0,5).map(item => (
                        <li key={`recent-${item.id}`}>
                            <Button variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-primary justify-start text-left text-sm" onClick={() => onItemSelect(item.id, isPaper(item) ? 'paper' : 'note')}>
                                {isPaper(item) ? <Book className="mr-2 h-4 w-4" /> : <FileText className="mr-2 h-4 w-4" />}
                                <span className="truncate">{item.title}</span>
                            </Button>
                        </li>
                    ))
                ) : (
                    <p className="text-sm text-muted-foreground">No recent items.</p>
                )}
            </ul>
        </div>
      ),
    },
     {
      Icon: Bookmark,
      name: "Bookmarks",
      description: "Access your saved notes and questions for quick review.",
      href: "/",
      cta: "View All Bookmarks",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3",
      onClick: () => setBookmarkModalOpen(true),
        children: (
         <div className="pointer-events-auto">
          <ul className="space-y-2 mt-2">
              {bookmarkedItems.length > 0 ? (
                  bookmarkedItems.slice(0, 5).map(item => (
                      <li key={`bookmark-${item.id}`}>
                          <Button variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-primary justify-start text-left text-sm" onClick={() => onItemSelect(item.id, isPaper(item) ? 'paper' : 'note')}>
                              {isPaper(item) ? <Book className="mr-2 h-4 w-4" /> : <FileText className="mr-2 h-4 w-4" />}
                              <span className="truncate">{item.title}</span>
                          </Button>
                      </li>
                  ))
              ) : (
                  <p className="text-sm text-muted-foreground">No bookmarks yet.</p>
              )}
          </ul>
        </div>
      ),
    },
  ];

  return (
     <div className={cn("a4-page", isCoverPage && "bg-transparent shadow-none border-0")}>
      <div className="relative">
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg mb-16">
            <div className="text-center">
                <div className="text-4xl md:text-6xl">
                    <Logo />
                </div>
                <p className="mt-4 text-lg text-muted-foreground">
                  Your <Highlighter>digital notebook</Highlighter> for mastering{" "}
                  <Highlighter color="hsl(var(--accent))">every bit of</Highlighter> A/L{" "}
                  <Highlighter>ICT studies</Highlighter>.
                </p>
            </div>
        </div>

        <h2 className="font-headline text-3xl font-bold mb-4">Dashboard</h2>
        <BentoGrid className="lg:grid-rows-2">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>

        <div className="mt-16">
          <div className="mb-4">
              <h2 className="font-headline text-3xl font-bold">Your Learning Tracks</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                  Tracks help you organize your studies. Create separate tracks for first-time learning, revision, or past papers. Each track saves its own progress and bookmarks.
              </p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tracks.map(track => {
                const progress = (track.completedTopics.length / syllabusOrder.length) * 100;
                const nextLesson = findNextLesson(track.completedTopics);
                
                return (
                  <div key={track.id} className="bg-card p-4 rounded-lg border flex flex-col relative">
                      <div className="absolute top-2 right-2">
                         <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onSelect={() => {
                                    setSelectedTrackId(track.id);
                                    setTrackName(track.name);
                                    setDialogState('rename');
                                }}>
                                    <Pen className="mr-2 h-4 w-4"/>
                                    <span>Rename</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => {
                                    setSelectedTrackId(track.id);
                                    setDialogState('delete');
                                }} disabled={tracks.length <= 1} variant='destructive'>
                                    <Trash2 className="mr-2 h-4 w-4"/>
                                    <span>Delete</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="flex-grow">
                          <h3 className="flex items-center gap-3 text-lg font-headline font-semibold">
                              <TrendingUp className="h-6 w-6 text-primary/70" />
                              <span>{track.name}</span>
                          </h3>
                          <div className="my-3">
                              <Progress value={progress} />
                              <p className="text-xs text-muted-foreground mt-1 text-right">{Math.round(progress)}% Complete</p>
                          </div>
                          {nextLesson ? (
                            <p className="text-sm text-muted-foreground">
                                Next up: <span className="font-semibold text-foreground">{nextLesson.title}</span>
                            </p>
                          ) : (
                            <p className="text-sm font-semibold text-green-600">Congratulations! You've completed all lessons in this track.</p>
                          )}
                      </div>
                      <Button
                          variant={nextLesson ? "outline" : "default"}
                          className="w-full mt-4"
                          onClick={() => nextLesson && onItemSelect(nextLesson.id, "note")}
                          disabled={!nextLesson}
                      >
                         {nextLesson ? (
                           <>Continue Learning <ArrowRight className="ml-2 h-4 w-4" /></>
                         ) : (
                            "Track Completed!"
                         )}
                      </Button>
                  </div>
                )
              })}
              <button onClick={() => setDialogState('create')} className="bg-transparent p-4 rounded-lg border-2 border-dashed flex flex-col items-center justify-center text-muted-foreground hover:bg-accent hover:border-solid hover:text-accent-foreground transition-all">
                  <PlusCircle className="h-8 w-8 mb-2" />
                  <span className="font-semibold">Create New Track</span>
              </button>
           </div>
        </div>

        <div className="mt-16">
          <h2 className="font-headline text-3xl font-bold mb-4">
            Table of Contents
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Browse the main chapters of the A/L ICT curriculum. Select a chapter
            to start learning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.topics.map((topic, index) => (
              <div
                key={topic.id}
                className="bg-card p-4 rounded-lg border flex flex-col"
              >
                <div className="flex-grow">
                  <h3 className="flex items-start gap-3 text-lg font-headline font-semibold">
                    <span className="text-2xl font-bold text-primary/70 dark:text-primary/50">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span>{topic.title}</span>
                  </h3>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() => onItemSelect(topic.id, "topic")}
                >
                  Go to Chapter <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
       <AlertDialog open={dialogState === 'create' || dialogState === 'rename'} onOpenChange={() => setDialogState(null)}>
          <AlertDialogContent>
              <AlertDialogHeader>
                  <AlertDialogTitle>{dialogState === 'create' ? 'Create New Track' : 'Rename Track'}</AlertDialogTitle>
                  <AlertDialogDescription>
                      {dialogState === 'create' ? 'Enter a name for your new learning track.' : `Enter a new name for the track "${activeTrack?.name}".`}
                  </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="py-4">
                  <Label htmlFor="track-name" className="sr-only">Track Name</Label>
                  <Input 
                      id="track-name"
                      ref={inputRef}
                      value={trackName}
                      onChange={(e) => setTrackName(e.target.value)}
                      placeholder="e.g., Revision, Theory..."
                      onKeyDown={(e) => e.key === 'Enter' && (dialogState === 'create' ? handleCreate() : handleRename())}
                  />
              </div>
              <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={dialogState === 'create' ? handleCreate : handleRename}>
                      {dialogState === 'create' ? 'Create' : 'Rename'}
                  </AlertDialogAction>
              </AlertDialogFooter>
          </AlertDialogContent>
      </AlertDialog>
            
      <AlertDialog open={dialogState === 'delete'} onOpenChange={() => setDialogState(null)}>
          <AlertDialogContent>
              <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                      This will permanently delete the track "{activeTrack?.name}" and all its progress. This action cannot be undone.
                  </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete} variant="destructive">Delete</AlertDialogAction>
              </AlertDialogFooter>
          </AlertDialogContent>
      </AlertDialog>

      <ItemListDialog
        isOpen={isRecentModalOpen}
        onOpenChange={setRecentModalOpen}
        title="Recently Viewed Items"
        items={lastViewedItems}
        onItemSelect={onItemSelect}
      />
      <ItemListDialog
        isOpen={isBookmarkModalOpen}
        onOpenChange={setBookmarkModalOpen}
        title="Bookmarked Items"
        items={bookmarkedItems}
        onItemSelect={onItemSelect}
      />
    </div>
  );
};
