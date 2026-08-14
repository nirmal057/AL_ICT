"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, ExternalLink, MousePointer2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { topics_structure } from "@/lib/data/topics";
import { allNotes } from "@/lib/data";
import type { Topic } from "@/lib/types";

type TheoryLinks = Record<string, string>;

/**
 * The app is a single-page notes reader, so note IDs (not made-up URLs) are
 * its real theory destinations.  Every entry below is derived from the
 * existing syllabus tree and points to the first available note in that branch.
 */
const createTheoryLinks = (topics: Topic[]) => {
  const links: TheoryLinks = {};

  const visit = (topic: Topic): string | undefined => {
    const directNote = topic.notes?.[0]?.id;
    const childNote = topic.subTopics?.map(visit).find(Boolean);
    const noteId = directNote || childNote;

    if (noteId) links[topic.id] = noteId;
    return noteId;
  };

  topics.forEach(visit);
  return links;
};

export const theoryLinks = createTheoryLinks(topics_structure);

const projectNode: Topic = {
  id: "topic-14",
  title: "ICT ව්‍යාපෘතිය",
};

// Older data files were saved as UTF-8 text interpreted as Windows-1252.
// Decode only strings that genuinely contain that legacy mojibake.
const windows1252Bytes: Record<number, number> = {
  0x20ac: 0x80, 0x201a: 0x82, 0x192: 0x83, 0x201e: 0x84, 0x2026: 0x85,
  0x2020: 0x86, 0x2021: 0x87, 0x2c6: 0x88, 0x2030: 0x89, 0x160: 0x8a,
  0x2039: 0x8b, 0x152: 0x8c, 0x17d: 0x8e, 0x2018: 0x91, 0x2019: 0x92,
  0x201c: 0x93, 0x201d: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97,
  0x2dc: 0x98, 0x2122: 0x99, 0x161: 0x9a, 0x203a: 0x9b, 0x153: 0x9c,
  0x17e: 0x9e, 0x178: 0x9f,
};

const readableTitle = (title: string) => {
  if (!/[àâ]/.test(title)) return title;
  const bytes = Uint8Array.from([...title].map(char => windows1252Bytes[char.codePointAt(0)!] ?? char.codePointAt(0)!));
  const decoded = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
  return decoded.includes("�") ? title : decoded;
};

const MindMapNode = ({ topic, level = 0, onNoteLinkClick }: { topic: Topic; level?: number; onNoteLinkClick?: (noteId: string) => void }) => {
  const [isOpen, setIsOpen] = useState(level < 2);
  const noteId = theoryLinks[topic.id];
  const directNotes = (topic.notes ?? [])
    .map(({ id }) => allNotes.find(note => note.id === id))
    .filter((note): note is NonNullable<typeof note> => Boolean(note));
  const hasChildren = Boolean(topic.subTopics?.length || directNotes.length);
  const title = readableTitle(topic.title);

  return (
    <li className="relative pl-5 before:absolute before:left-0 before:top-5 before:h-px before:w-4 before:bg-border">
      <div className="flex items-start gap-1.5">
        {hasChildren ? (
          <button
            type="button"
            aria-label={isOpen ? `${title} හකුළන්න` : `${title} විවෘත කරන්න`}
            onClick={() => setIsOpen(open => !open)}
            className="mt-1 shrink-0 rounded p-0.5 text-muted-foreground hover:bg-muted"
          >
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
        ) : <span className="mt-1.5 h-4 w-4 shrink-0" />}

        {noteId ? (
          <button
            type="button"
            onClick={() => onNoteLinkClick?.(noteId)}
            title="අදාළ theory note වෙත යන්න"
            className={cn(
              "group flex min-h-9 items-center gap-1.5 rounded-lg border border-primary/25 bg-primary/5 px-3 py-1.5 text-left text-sm font-medium text-foreground shadow-sm transition",
              "hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
          >
            <span>{title}</span>
            <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-45 transition group-hover:opacity-100" />
          </button>
        ) : (
          <span title="Theory note ඉක්මනින් එක් කෙරේ" className="inline-flex min-h-9 items-center rounded-lg border border-dashed border-muted-foreground/40 bg-muted/30 px-3 py-1.5 text-sm text-muted-foreground">
            {title} <span className="ml-1 text-xs">(ඉක්මනින්)</span>
          </span>
        )}
      </div>

      {hasChildren && isOpen && (
        <ul className="ml-2 mt-2 space-y-2 border-l border-border pb-1">
          {topic.subTopics?.map(child => <MindMapNode key={child.id} topic={child} level={level + 1} onNoteLinkClick={onNoteLinkClick} />)}
          {directNotes.map(note => (
            <li key={note.id} className="relative pl-5 before:absolute before:left-0 before:top-5 before:h-px before:w-4 before:bg-border">
              <button
                type="button"
                onClick={() => onNoteLinkClick?.(note.id)}
                title="අදාළ theory note වෙත යන්න"
                className="group flex min-h-8 items-center gap-1.5 rounded-md border border-primary/15 bg-background px-2.5 py-1 text-left text-xs text-muted-foreground transition hover:border-primary hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>{readableTitle(note.title)}</span>
                <ExternalLink className="h-3 w-3 shrink-0 opacity-40 group-hover:opacity-100" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export const Mindmap1_1 = ({ onNoteLinkClick }: { onNoteLinkClick?: (noteId: string) => void }) => {
  const syllabus = useMemo(() => [...topics_structure, projectNode], []);

  return (
    <Card className="not-prose my-6 w-full">
      <CardHeader>
        <CardTitle>සම්පූර්ණ A/L ICT මනෝ සිතියම</CardTitle>
        <p className="flex items-center gap-2 text-sm font-normal text-muted-foreground">
          <MousePointer2 className="h-4 w-4" /> නිල් පැහැති මාතෘකාවක් තෝරන්න — අදාළ Theory/Notes වෙත යයි.
        </p>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[46rem] rounded-xl border bg-muted/20 p-5 md:p-7">
            <div className="mx-auto mb-7 w-fit rounded-full border-2 border-primary bg-primary px-6 py-3 text-center font-semibold text-primary-foreground shadow">
              G.C.E. A/L ICT
              <span className="block text-xs font-normal opacity-90">සම්පූර්ණ විෂය නිර්දේශය</span>
            </div>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-5">
              {syllabus.map(topic => <MindMapNode key={topic.id} topic={topic} onNoteLinkClick={onNoteLinkClick} />)}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
