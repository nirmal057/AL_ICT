
"use client";

import React, { useState, useEffect, useRef } from 'react';
import type { Paper, PaperI, PaperII, MCQQuestion, StructuredQuestion, PaperPart, MarkingComponent, Note, SubQuestion } from "@/lib/types";
import { Button } from "./ui/button";
import { Link, CheckCircle, XCircle, RefreshCcw, Award } from "lucide-react";
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';
import { Progress } from './ui/progress';
import { ButtonGroup } from './ui/button-group';
import { NoteView } from './note-view';
import { PastPaperDiagram } from './diagrams/past-paper-diagrams';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from './ui/scroll-area';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';
import { CodeBlock } from './ui/code-block';

const parseQuestionContent = (content: string) => {
    const regex = /(\[CODE:(?:python|text|html|cpp)\][\s\S]*?\[\/CODE\]|\[DIAGRAM:[^\]]+\])/g;
    const parts = content.split(regex);

    return parts.map((part, index) => {
        if (!part) return null;

        const codeMatch = part.match(/\[CODE:(python|text|html|cpp)\]([\s\S]*?)\[\/CODE\]/);
        if (codeMatch) {
            const lang = codeMatch[1];
            const code = codeMatch[2].trim();
            return <CodeBlock key={index} language={lang} code={code} />;
        }

        const diagramMatch = part.match(/\[DIAGRAM:([^\]]+)\]/);
        if (diagramMatch) {
            const diagramId = diagramMatch[1];
            return <div className="my-4 flex justify-center"><PastPaperDiagram key={index} id={diagramId} /></div>;
        }

        return <div key={index} dangerouslySetInnerHTML={{ __html: part.replace(/\\n/g, '<br/>') }} />;
    });
};


interface PaperViewProps {
    paper: Paper | Note; 
    onNoteLinkClick: (noteId: string) => void;
    scrollToQuestionId?: string | null;
}

const MCQQuestionView = ({ 
    question, 
    onNoteLinkClick,
    selectedAnswer,
    onAnswerChange,
    isSubmitted,
}: { 
    question: MCQQuestion, 
    onNoteLinkClick: (noteId: string) => void;
    selectedAnswer?: string;
    onAnswerChange: (questionId: string, answer: string) => void;
    isSubmitted: boolean;
}) => {
    const isCorrect = isSubmitted && selectedAnswer === question.correctAnswer.toString();
    const isIncorrect = isSubmitted && selectedAnswer && selectedAnswer !== question.correctAnswer.toString();
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        if (isSubmitted && question.relatedNoteId) {
            const hintShown = sessionStorage.getItem('noteLinkHintShown');
            if (!hintShown) {
                setShowHint(true);
                sessionStorage.setItem('noteLinkHintShown', 'true');
                const timer = setTimeout(() => setShowHint(false), 3000); 
                return () => clearTimeout(timer);
            }
        }
    }, [isSubmitted, question.relatedNoteId]);
    
    return (
        <div id={question.id} className={cn("p-4 rounded-lg border transition-colors", isSubmitted && (isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : isIncorrect ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''))}>
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-start">
                    <span className="font-bold mr-4">{question.questionNumber}.</span>
                    <div className="flex-grow prose prose-p:my-1 prose-p:leading-normal prose-sm max-w-none">{parseQuestionContent(question.content)}</div>
                </div>
                 {isSubmitted && question.relatedNoteId && (
                     <div className="no-print">
                        <TooltipProvider>
                            <Tooltip open={showHint} onOpenChange={setShowHint}>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" onClick={() => onNoteLinkClick(question.relatedNoteId!)}>
                                        <Link className="h-5 w-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>අදාළ සටහන බලන්න</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                )}
            </div>
            
            <RadioGroup 
              value={selectedAnswer}
              onValueChange={(value) => onAnswerChange(question.id, value)}
              disabled={isSubmitted}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 mt-2 pl-8"
            >
                {question.options.map((option, index) => {
                    const optionValue = (index + 1).toString();
                    const isThisOptionCorrect = question.correctAnswer.toString() === optionValue;
                    const isThisOptionSelected = selectedAnswer === optionValue;

                    return (
                        <div key={index} className="flex items-center space-x-2">
                            <RadioGroupItem value={optionValue} id={`${question.id}-opt${index}`} />
                            <Label 
                                htmlFor={`${question.id}-opt${index}`} 
                                className={cn(
                                    "flex-1 text-sm",
                                    isSubmitted && isThisOptionCorrect && "font-bold text-green-700 dark:text-green-400",
                                    isSubmitted && isThisOptionSelected && !isThisOptionCorrect && "font-bold line-through text-red-700 dark:text-red-400"
                                )}
                            >
                                ({index + 1}) {option}
                            </Label>
                            {isSubmitted && isThisOptionSelected && (
                                isCorrect ? <CheckCircle className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />
                            )}
                        </div>
                    );
                })}
            </RadioGroup>
        </div>
    );
};

const MarkingSchemeView = ({ scheme, totalMarks }: { scheme: MarkingComponent[], totalMarks: number }) => (
    <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
            <DialogTitle>ලකුණු දීමේ පටිපාටිය</DialogTitle>
             <DialogDescription>
                ප්‍රශ්නය සඳහා ලකුණු ලබා දෙන ආකාරය පහත විස්තර කෙරේ.
            </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
             <div className="space-y-2 text-sm">
                {scheme.map(item => (
                    <div key={item.id} className="flex justify-between items-start p-2 rounded bg-muted">
                        <div className="flex-grow pr-4">
                            <p>{item.description}</p>
                            {item.notes && <p className="text-xs text-muted-foreground mt-1">({item.notes})</p>}
                        </div>
                        <span className="font-bold text-primary whitespace-nowrap">ලකුණු {item.marks}</span>
                    </div>
                ))}
            </div>
             <div className="text-right font-bold mt-4 border-t pt-2">එකතුව: ලකුණු {totalMarks}</div>
        </ScrollArea>
    </DialogContent>
);


const StructuredQuestionView = ({ question, onNoteLinkClick }: { question: StructuredQuestion, onNoteLinkClick: (noteId: string) => void; }) => {
    return (
        <div id={question.id} className="mb-8 break-inside-avoid structured-question">
             <div className="question-main flex items-start mb-4">
                <span className="question-number font-bold mr-4">{question.questionNumber}.</span>
                <div className="flex-grow prose prose-sm max-w-none prose-p:my-1 prose-p:leading-normal">
                    {parseQuestionContent(question.content)}
                </div>
            </div>

            {question.subParts && question.subParts.map(subPart => (
                 <div key={subPart.id} className="sub-question">
                    <div className="sub-question-header">
                        <span className="sub-label">{subPart.label}</span>
                        <div className="sub-content prose prose-sm max-w-none prose-p:my-1 prose-p:leading-normal">
                          {parseQuestionContent(subPart.content)}
                        </div>
                        <span className="marks-inline">(ලකුණු {subPart.marks}යි.)</span>
                    </div>
                 </div>
            ))}

            <div className="flex justify-end items-center gap-4 mt-4 no-print">
                 {question.relatedNoteId && (
                    <Button variant="link" size="sm" onClick={() => onNoteLinkClick(question.relatedNoteId!)}>
                        <Link className="h-4 w-4 mr-1" />
                        අදාළ සටහන බලන්න
                    </Button>
                )}
                {question.markingScheme && (
                     <Dialog>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <DialogTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <Award className="h-5 w-5" />
                                        </Button>
                                    </DialogTrigger>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>ලකුණු දීමේ පටිපාටිය</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <MarkingSchemeView scheme={question.markingScheme} totalMarks={question.totalMarks} />
                    </Dialog>
                )}
            </div>
        </div>
    );
};

const PaperPartView = ({ part, onNoteLinkClick }: { part: PaperPart, onNoteLinkClick: (noteId: string) => void; }) => {
    const isMCQPart = (q: any): q is MCQQuestion => q.hasOwnProperty('options');

    const [answers, setAnswers] = React.useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleAnswerChange = (questionId: string, answer: string) => {
        if(isSubmitted) return;
        setAnswers(prev => ({...prev, [questionId]: answer}));
    };

    const checkAnswers = () => {
        setIsSubmitted(true);
    };

    const reset = () => {
        setAnswers({});
        setIsSubmitted(false);
    }
    
    const mcqQuestions = part.questions.filter(isMCQPart);
    const { score, total } = React.useMemo(() => {
        if (!isSubmitted || mcqQuestions.length === 0) return { score: 0, total: mcqQuestions.length };
        const correctAnswers = mcqQuestions.filter(q => answers[q.id] === q.correctAnswer.toString()).length;
        return { score: correctAnswers, total: mcqQuestions.length };
    }, [isSubmitted, answers, mcqQuestions]);


    return (
        <div className="mb-8">
            <h3 className="font-headline text-lg font-bold mb-2 text-center">{part.title}</h3>
            <div className="prose prose-sm max-w-none mb-6" dangerouslySetInnerHTML={{ __html: part.instructions.replace(/\\n/g, '<br />') }} />

            
            <div className="space-y-4">
                {part.questions.map(q => 
                    isMCQPart(q) ? (
                        <MCQQuestionView 
                            key={q.id} 
                            question={q} 
                            onNoteLinkClick={onNoteLinkClick}
                            selectedAnswer={answers[q.id]}
                            onAnswerChange={handleAnswerChange}
                            isSubmitted={isSubmitted}
                        />
                    ) : (
                        <StructuredQuestionView key={q.id} question={q as StructuredQuestion} onNoteLinkClick={onNoteLinkClick} />
                    )
                )}
            </div>
             {mcqQuestions.length > 0 && (
                <div className="flex flex-wrap gap-4 items-center justify-between no-print border-t pt-6 mt-10">
                    {isSubmitted && (
                        <Card className="p-4 flex-grow">
                            <CardHeader className="p-0 pb-2">
                            <CardTitle className="text-lg">ප්‍රතිඵල</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 flex items-center gap-4">
                                <p className="text-2xl font-bold">{score} / {total}</p>
                                <Progress value={(score/total) * 100} className="w-48" />
                                <p className="font-semibold">{((score/total) * 100).toFixed(2)}%</p>
                            </CardContent>
                        </Card>
                    )}
                    <div className="flex-grow flex justify-end">
                        <ButtonGroup>
                            <Button onClick={checkAnswers} disabled={Object.keys(answers).length !== total || isSubmitted}>
                                {isSubmitted ? 'පිළිතුරු පරීක්ෂා කරන ලදී' : `පිළිතුරු පරීක්ෂා කරන්න (${Object.keys(answers).length}/${total})`}
                            </Button>
                            {isSubmitted && (
                                <Button onClick={reset} variant="outline">
                                    <RefreshCcw className="mr-2 h-4 w-4" /> නැවත උත්සහ කරන්න
                                </Button>
                            )}
                        </ButtonGroup>
                    </div>
                </div>
             )}
        </div>
    );
}

const PaperIView = ({ content, onNoteLinkClick }: { content: PaperI; onNoteLinkClick: (noteId: string) => void; }) => {
    return <PaperPartView part={content as PaperPart} onNoteLinkClick={onNoteLinkClick} />;
};

const PaperIIView = ({ content, onNoteLinkClick }: { content: PaperII, onNoteLinkClick: (noteId: string) => void; }) => {
    return (
        <div>
            <PaperPartView part={content.partA} onNoteLinkClick={onNoteLinkClick} />
            {content.partB && content.partB.questions.length > 0 && <PaperPartView part={content.partB} onNoteLinkClick={onNoteLinkClick} />}
        </div>
    );
};


export function PaperView({ paper, onNoteLinkClick, scrollToQuestionId }: PaperViewProps) {
    const viewRef = useRef<HTMLDivElement>(null);
    const isFullPaper = (p: Paper | Note): p is Paper => 'year' in p && 'content' in p && typeof p.content === 'object';
    
    useEffect(() => {
        if (scrollToQuestionId && viewRef.current) {
            const questionElement = document.getElementById(scrollToQuestionId);
            if (questionElement) {
                setTimeout(() => {
                    questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    questionElement.classList.add('highlight-question');
                    setTimeout(() => {
                        questionElement.classList.remove('highlight-question');
                    }, 2000); // Highlight for 2 seconds
                }, 100); // Delay to ensure content is rendered
            }
        }
    }, [scrollToQuestionId]);

    if (!isFullPaper(paper)) {
        // This handles model papers that are structured as Notes
        return <NoteView note={paper as Note} onQuestionLinkClick={onNoteLinkClick} />;
    }

    const isModelPaper = paper.id.startsWith("model-paper") || paper.id.startsWith("recall-paper");
    const isPaperI = (content: PaperI | PaperII): content is PaperI => 'questions' in content && Array.isArray((content as any).questions);
    const paperType = isPaperI(paper.content) ? "I" : "II";
    
    const getIssuer = (p: Paper) => {
        if (p.issuer && typeof p.issuer === 'object') {
            return p.issuer;
        }
        if (isModelPaper && p.issuer && typeof p.issuer === 'string') { 
            return { sinhala: p.issuer, tamil: p.issuer, english: p.issuer };
        }
        return {
            sinhala: "ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුව",
            tamil: "இலங்கைப் பரீட்சைத் திணைக்களம்",
            english: "Department of Examinations, Sri Lanka"
        };
    };

    const issuer = getIssuer(paper);
    const examName = paper.examName;

    const subjectCode = paper.subjectCode?.toString() || 'S';
    
    const time = typeof paper.time === 'string' 
        ? { sinhala: paper.time, tamil: paper.time, english: paper.time }
        : paper.time;

    return (
        <div className="a4-page" ref={viewRef}>
             <style jsx global>{`
                .highlight-question {
                    background-color: var(--highlight-bg, #fefce8); /* Yellow-100 */
                    transition: background-color 0.5s ease-in-out;
                    border-radius: 8px;
                }
                .dark .highlight-question {
                    background-color: var(--highlight-bg-dark, #42422a); /* Darker yellow */
                }
            `}</style>
             <div className="text-xs font-mono flex justify-between">
                <span>{isModelPaper ? `ModelPaper/${paper.year}/${subjectCode}/${paperType}` : `AL/${paper.year}/${subjectCode}/S-${paperType}`}</span>
            </div>
            <div className="paper-container">
                 <div className="paper-main-header">
                    <div className="paper-top-strip">
                        <div className="logo-placeholder"><Award className="h-6 w-6 text-muted-foreground"/></div>
                        <div className="text-center leading-tight">
                            <p className="font-bold">{issuer.sinhala}</p>
                            <p className="font-bold">{issuer.tamil}</p>
                            <p className="font-bold">{issuer.english}</p>
                        </div>
                        <div className="logo-placeholder"><Award className="h-6 w-6 text-muted-foreground"/></div>
                    </div>

                     <div className="paper-title-section text-center justify-center">
                        {examName ? (
                            <div className="text-center leading-tight">
                                <p className="font-bold">{examName.sinhala}, ${paper.year}</p>
                                <p className="font-bold">{examName.tamil}, ${paper.year}</p>
                                <p className="font-bold">{examName.english}, ${paper.year}</p>
                            </div>
                        ) : (
                             <p className="font-bold">{paper.title}</p>
                        )}
                    </div>


                    <div className="paper-info-section">
                        <div className="paper-info-box text-left">
                             <p className="leading-tight">තොරතුරු හා සන්නිවේදන තාක්ෂණය</p>
                             <p className="leading-tight">தகவல், தொடர்பாடல் தொழினுட்பவியல்</p>
                            <p className="font-bold leading-tight">Information & Communication Technology</p>
                        </div>
                         <div className="paper-info-code-boxes">
                            <div className="paper-info-box-small">{paper.year.toString().slice(-2)}</div>
                            <div className="paper-info-box-small">{subjectCode}</div>
                            <div className="paper-info-box-small">{paperType === 'I' ? 'I' : 'II'}</div>
                        </div>
                        <div className="paper-info-box text-left">
                             <p className="italic leading-tight">{time.sinhala}</p>
                             <p className="italic leading-tight">{time.tamil}</p>
                             <p className="font-bold italic leading-tight">{time.english}</p>
                        </div>
                    </div>
                </div>

                <div className="paper-content-section">
                     {isPaperI(paper.content) 
                        ? <PaperIView content={paper.content} onNoteLinkClick={onNoteLinkClick} /> 
                        : <PaperIIView content={paper.content as PaperII} onNoteLinkClick={onNoteLinkClick} />}
                </div>
                 <div className="paper-footer">
                    <hr className="paper-hr" />
                </div>
            </div>
        </div>
    );
}
