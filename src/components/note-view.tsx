
"use client"

import type { Note, Paper, MCQQuestion, StructuredQuestion, Activity } from "@/lib/types";
import { Badge } from "./ui/badge";
import { Tag, Link, Check } from 'lucide-react';
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { allPapers } from "@/lib/data";
import { Button } from "./ui/button";
import dynamic from 'next/dynamic';
import { useProgressStore } from "@/hooks/use-progress-store";
import { useViewSettingsStore } from "@/hooks/use-view-settings-store";
import { Skeleton } from "./ui/skeleton";

// --- Dynamic Imports for Activities ---
const DataVsInfoQuiz = dynamic(() => import('./activities/data-vs-info-quiz').then(mod => mod.DataVsInfoQuiz), { ssr: false, loading: () => <ActivitySkeleton /> });
const DataProcessingAnimation = dynamic(() => import('./activities/data-processing-animation').then(mod => mod.DataProcessingAnimation), { ssr: false, loading: () => <ActivitySkeleton /> });
const ValuableInfoQuiz = dynamic(() => import('./activities/valuable-info-quiz').then(mod => mod.ValuableInfoQuiz), { ssr: false, loading: () => <ActivitySkeleton /> });
const QualitativeVsQuantitativeQuiz = dynamic(() => import('./activities/qualitative-vs-quantitative-quiz').then(mod => mod.QualitativeVsQuantitativeQuiz), { ssr: false, loading: () => <ActivitySkeleton /> });
const ErgonomicsQuiz = dynamic(() => import('./activities/ergonomics-quiz').then(mod => mod.ErgonomicsQuiz), { ssr: false, loading: () => <ActivitySkeleton /> });
const CloudServiceSorter = dynamic(() => import('./activities/cloud-service-sorter').then(mod => mod.CloudServiceSorter), { ssr: false, loading: () => <ActivitySkeleton /> });
const WwwDeconstructed = dynamic(() => import('./activities/www-deconstructed').then(mod => mod.WwwDeconstructed), { ssr: false, loading: () => <ActivitySkeleton /> });
const HardwareSoftwareSorter = dynamic(() => import('./activities/hardware-software-sorter').then(mod => mod.HardwareSoftwareSorter), { ssr: false, loading: () => <ActivitySkeleton /> });
const ProprietaryFossSorter = dynamic(() => import('./activities/proprietary-foss-sorter').then(mod => mod.ProprietaryFossSorter), { ssr: false, loading: () => <ActivitySkeleton /> });
const NumberSystemConverter = dynamic(() => import('./activities/number-system-converter').then(mod => mod.NumberSystemConverter), { ssr: false, loading: () => <ActivitySkeleton /> });
const SignedNumberConverter = dynamic(() => import('./activities/signed-number-converter').then(mod => mod.SignedNumberConverter), { ssr: false, loading: () => <ActivitySkeleton /> });
const ColorPickerTool = dynamic(() => import('./activities/color-picker-tool').then(mod => mod.ColorPickerTool), { ssr: false, loading: () => <ActivitySkeleton /> });
const PositionalAbacus = dynamic(() => import('./activities/positional-abacus').then(mod => mod.PositionalAbacus), { ssr: false, loading: () => <ActivitySkeleton /> });
const VonNeumannArchitectureDiagram = dynamic(() => import('./activities/von-neumann-simulator').then(mod => mod.VonNeumannArchitectureDiagram), { ssr: false, loading: () => <ActivitySkeleton /> });
const HTMLSandbox = dynamic(() => import('./activities/html-sandbox').then(mod => mod.HTMLSandbox), { ssr: false, loading: () => <ActivitySkeleton /> });
const MemoryAccessSimulator = dynamic(() => import('./activities/memory-access-simulator').then(mod => mod.MemoryAccessSimulator), { ssr: false, loading: () => <ActivitySkeleton /> });
const CharacterEncoder = dynamic(() => import('./activities/character-encoder').then(mod => mod.CharacterEncoder), { ssr: false, loading: () => <ActivitySkeleton /> });
const BinaryCalculator = dynamic(() => import('./activities/binary-calculator').then(mod => mod.BinaryCalculator), { ssr: false, loading: () => <ActivitySkeleton /> });
const PythonSandbox = dynamic(() => import('./activities/python-sandbox').then(mod => mod.PythonSandbox), { ssr: false, loading: () => <ActivitySkeleton /> });
const SQLSandbox = dynamic(() => import('./activities/sql-sandbox').then(mod => mod.SQLSandbox), { ssr: false, loading: () => <ActivitySkeleton /> });
const KMapSimulator = dynamic(() => import('./activities/k-map-simulator').then(mod => mod.KMapSimulator), { ssr: false, loading: () => <ActivitySkeleton /> });
const Mindmap1_1 = dynamic(() => import('./activities/mindmap-1-1').then(mod => mod.Mindmap1_1), { ssr: false, loading: () => <ActivitySkeleton /> });
const MemoryHierarchyAnimation = dynamic(() => import('./activities/memory-hierarchy-animation').then(mod => mod.MemoryHierarchyAnimation), { ssr: false, loading: () => <ActivitySkeleton /> });
const ManualComputerSimulator = dynamic(() => import('./activities/manual-computer-simulator').then(mod => mod.ManualComputerSimulator), { ssr: false, loading: () => <ActivitySkeleton /> });


// --- Dynamic Imports for Diagrams ---
import { componentMap } from './diagrams';

const ActivitySkeleton = () => (
    <div className="w-full h-64 bg-muted animate-pulse rounded-lg" />
);

interface NoteViewProps {
  note: Note;
  onQuestionLinkClick: (questionId: string) => void;
  printSettings?: { includeQuestions: boolean, includeActivities: boolean };
}

const getQuestionById = (questionId: string): { question: MCQQuestion | StructuredQuestion, paper: Paper } | null => {
    for (const paper of allPapers) {
        const questions = paper.content.hasOwnProperty('questions')
            ? (paper.content as any).questions
            : [...(paper.content as any).partA.questions, ...(paper.content as any).partB.questions];
        
        const foundQuestion = questions.find((q: any) => q.id === questionId);
        if (foundQuestion) {
            return { question: foundQuestion, paper };
        }
    }
    return null;
}


const RelatedQuestions = ({ questionIds, onQuestionLinkClick }: { questionIds: string[], onQuestionLinkClick: (questionId: string) => void }) => {
    if (!questionIds || questionIds.length === 0) return null;

    const questions = questionIds.map(getQuestionById).filter(Boolean) as { question: MCQQuestion | StructuredQuestion, paper: Paper }[];

    return (
        <div className="my-8 print:my-4">
            <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-headline font-semibold no-print">
                        අදාළ පසුගිය විභාග ප්‍රශ්න
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4 pt-4">
                            {questions.map(({ question, paper }) => (
                                <div key={question.id} className="p-4 border rounded-lg bg-muted/50">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="font-semibold text-sm">
                                            {paper.title} - Q{typeof question.questionNumber === 'string' ? question.questionNumber : question.questionNumber}
                                        </p>
                                        <Button variant="ghost" size="sm" onClick={() => onQuestionLinkClick(question.id)}>
                                            <Link className="h-4 w-4 mr-2" />
                                            ප්‍රශ්නයට යන්න
                                        </Button>
                                    </div>
                                    <div className="prose prose-sm max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: question.content }} />
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
             {/* This section will only be visible during printing */}
            <div className="hidden print:block pt-4">
                <h3 className="font-headline text-xl font-semibold mb-4 border-b pb-2">අදාළ පසුගිය විභාග ප්‍රශ්න</h3>
                 <div className="space-y-4 pt-2">
                    {questions.map(({ question, paper }) => (
                        <div key={question.id} className="p-4 border rounded-lg bg-slate-50 break-inside-avoid">
                            <p className="font-semibold text-sm mb-2">
                                {paper.title} - Q{typeof question.questionNumber === 'string' ? question.questionNumber : question.questionNumber}
                            </p>
                            <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: question.content }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const ActivityRenderer = ({ activity, code, isPrintView, defaultEncoding, defaultVars }: { activity: Activity, code?: string, isPrintView: boolean, defaultEncoding?: any, defaultVars?: any }) => {
    switch (activity) {
        case 'activity-data-vs-info-quiz':
            return <DataVsInfoQuiz isPrintView={isPrintView} />;
        case 'activity-data-processing-animation':
            return <DataProcessingAnimation isPrintView={isPrintView} />;
        case 'activity-valuable-info-quiz':
            return <ValuableInfoQuiz isPrintView={isPrintView} />;
        case 'activity-qual-vs-quan-quiz':
            return <QualitativeVsQuantitativeQuiz isPrintView={isPrintView} />;
        case 'activity-ergonomics-quiz':
            return <ErgonomicsQuiz isPrintView={isPrintView} />;
        case 'activity-cloud-service-sorter':
            return <CloudServiceSorter isPrintView={isPrintView} />;
        case 'activity-www-deconstructed':
            return <WwwDeconstructed isPrintView={isPrintView} />;
        case 'activity-hardware-software-sorter':
            return <HardwareSoftwareSorter isPrintView={isPrintView} />;
        case 'activity-proprietary-foss-sorter':
            return <ProprietaryFossSorter isPrintView={isPrintView} />;
        case 'activity-number-system-converter':
            return <NumberSystemConverter isPrintView={isPrintView} />;
        case 'activity-signed-number-converter':
            return <SignedNumberConverter isPrintView={isPrintView} />;
        case 'activity-color-picker-tool':
            return <ColorPickerTool isPrintView={isPrintView} />;
        case 'activity-positional-abacus':
            return <PositionalAbacus isPrintView={isPrintView} />;
        case 'python-sandbox':
            return <PythonSandbox initialCode={code || ''} isPrintView={isPrintView} />;
        case 'html-sandbox':
            return <HTMLSandbox initialCode={code || ''} isPrintView={isPrintView} />;
        case 'activity-von-neumann-simulator':
             return <VonNeumannArchitectureDiagram isPrintView={isPrintView} />;
        case 'tool-sql-sandbox':
            return <SQLSandbox isPrintView={isPrintView} />;
        case 'activity-memory-access-simulator':
            return <MemoryAccessSimulator isPrintView={isPrintView} />;
        case 'activity-character-encoder':
            return <CharacterEncoder isPrintView={isPrintView} defaultEncoding={defaultEncoding}/>;
        case 'activity-binary-calculator':
            return <BinaryCalculator isPrintView={isPrintView} />;
        case 'k-map-simulator':
            return <KMapSimulator isPrintView={isPrintView} defaultVars={defaultVars} />;
        case 'mindmap-1-1':
            return <Mindmap1_1 />;
        case 'memory-hierarchy-animation':
            return <MemoryHierarchyAnimation isPrintView={isPrintView} />;
        case 'activity-manual-computer-simulator':
            return <ManualComputerSimulator isPrintView={isPrintView} />;
        
        default:
            return null;
    }
};

// This parser finds and replaces placeholders for interactive components.
export const parseAndRenderContent = (htmlContent: string, isPrintView: boolean) => {
    if (!htmlContent || typeof htmlContent !== 'string') {
        return null;
    }
    const regex = /(<Activity\s+id="[^"]+"(?:\s+code={`([^`]*|[\s\S]*?)}`)?(?:\s+defaultEncoding="([^"]+)")?(?:\s+defaultVars="([^"]+)")?\s*\/>)|(<Component\s+id="[^"]+"\s*\/>)/g;
    const parts = htmlContent.split(regex);

    return parts.map((part, index) => {
        if (!part) return null;

        if (part.startsWith('<Activity')) {
            const idMatch = part.match(/id="([^"]+)"/);
            const activityId = idMatch ? idMatch[1] as Activity : null;
            const codeMatch = part.match(/code={`([\s\S]*?)`}/);
            const code = codeMatch ? codeMatch[1] : undefined;
            const encodingMatch = part.match(/defaultEncoding="([^"]+)"/);
            const defaultEncoding = encodingMatch ? encodingMatch[1] : undefined;
            const varsMatch = part.match(/defaultVars="([^"]+)"/);
            const defaultVars = varsMatch ? varsMatch[1] : undefined;
            
            if(activityId) {
                return (
                  <div key={index} className="my-6">
                     <div className={isPrintView ? 'hidden' : 'web-view'}>
                        <ActivityRenderer activity={activityId} code={code} isPrintView={false} defaultEncoding={defaultEncoding} defaultVars={defaultVars} />
                     </div>
                      <div className={isPrintView ? 'print-view p-4 border rounded-lg bg-slate-50 break-inside-avoid' : 'hidden'}>
                        <ActivityRenderer activity={activityId} code={code} isPrintView={true} defaultEncoding={defaultEncoding} defaultVars={defaultVars} />
                     </div>
                  </div>
                );
            }
        } else if (part.startsWith('<Component')) {
             const idMatch = part.match(/id="([^"]+)"/);
             const componentId = idMatch ? idMatch[1] : null;
             if (componentId && componentMap[componentId]) {
                 const ComponentToRender = componentMap[componentId];
                 return <div key={index} className="my-6"><ComponentToRender /></div>;
             }
        }

        return <div key={index} className="prose max-w-none" dangerouslySetInnerHTML={{ __html: part }} />;
    });
};

export function NoteView({ note, onQuestionLinkClick, printSettings }: NoteViewProps) {
    const { activeTrack, toggleTopicComplete } = useProgressStore();
    const diagramImage = PlaceHolderImages.find(img => img.id === note.diagram);
    const relatedQuestionIds = (note.relatedQuestions || []).map(q => q.id);
    const isPrinting = !!printSettings;
    const isCompleted = activeTrack?.completedTopics.includes(note.id) || false;
    const { fontSize } = useViewSettingsStore();
    
    // Handle tools which are also passed as 'note' prop
    const isTool = note.tags?.includes("tool") ?? false;
    if (isTool) {
        const activityId = note.content.match(/id="([^"]+)"/)?.[1] as Activity | undefined;
        const defaultVars = note.content.match(/defaultVars="([^"]+)"/)?.[1];
        if (activityId) {
           return (
                <div 
                   className="a4-page transition-all duration-300"
                   style={{ fontSize: `${fontSize}px` }}
               >
                   <h1 className="font-headline text-4xl font-bold mb-2">{note.title}</h1>
                   <div className="my-6">
                       <ActivityRenderer activity={activityId} isPrintView={false} defaultVars={defaultVars || '3'} />
                   </div>
               </div>
           );
        }
    }


    return (
        <div 
            className="a4-page transition-all duration-300"
            style={{ fontSize: `${fontSize}px` }}
        >
            
            <h1 className="font-headline text-4xl font-bold mb-2">{note.title}</h1>

            <div>{parseAndRenderContent(note.content, isPrinting)}</div>

            {diagramImage && (
                <div className="my-8">
                    <h3 className="font-headline text-xl font-semibold mb-4">Diagram</h3>
                    <Image
                        src={diagramImage.imageUrl}
                        alt={diagramImage.description}
                        width={600}
                        height={400}
                        className="rounded-lg border shadow-sm"
                        data-ai-hint={diagramImage.imageHint}
                    />
                </div>
            )}
            
            <div className={isPrinting ? 'hidden' : 'print:hidden'}>
                <RelatedQuestions questionIds={relatedQuestionIds || []} onQuestionLinkClick={onQuestionLinkClick} />
            </div>
             {isPrinting && printSettings?.includeQuestions && <RelatedQuestions questionIds={relatedQuestionIds || []} onQuestionLinkClick={onQuestionLinkClick} />}

            <div className="mt-8 pt-4 border-t no-print">
                <Button onClick={() => toggleTopicComplete(note.id)} variant={isCompleted ? "default" : "outline"}>
                    <Check className="mr-2 h-4 w-4" />
                    {isCompleted ? "Completed" : "Mark as Complete"}
                </Button>
            </div>
        </div>
    );
}

