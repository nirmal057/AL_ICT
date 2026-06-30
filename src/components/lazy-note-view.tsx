
"use client"

import { useEffect, useRef, useState } from "react";
import type { Note } from "@/lib/types";
import { NoteView } from "./note-view";
import { Skeleton } from "./ui/skeleton";

interface LazyNoteViewProps {
  note: Note;
  onQuestionLinkClick: (questionId: string) => void;
  printSettings?: { includeQuestions: boolean, includeActivities: boolean };
}

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


export function LazyNoteView({ note, onQuestionLinkClick, printSettings }: LazyNoteViewProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "200px 0px",
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);


    return (
        <div ref={ref}>
            {isVisible ? <NoteView note={note} onQuestionLinkClick={onQuestionLinkClick} printSettings={printSettings} /> : <NoteSkeleton />}
        </div>
    );
}

    