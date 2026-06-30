
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Shuffle, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Separator } from '../ui/separator';
import { ButtonGroup } from '../ui/button-group';

const questions = [
  {
    id: 'q1',
    question: 'පරිගණක තිරය දෙස එක දිගට බලා සිටීම නිසා ඇතිවිය හැකි සෞඛ්‍ය ගැටලුව කුමක්ද?',
    options: [
      'Repetitive Strain Injury (RSI)',
      'Eye Strain',
      'කොන්දේ වේදනාව',
    ],
    correctAnswer: 'Eye Strain',
    explanation: 'තිරය දෙස බොහෝ වේලා බලා සිටීමෙන් ඇස් වෙහෙසට පත්වීම (Eye Strain) සාමාන්‍යයි.'
  },
  {
    id: 'q2',
    question: '“20-20-20” රීතිය කුමන සෞඛ්‍ය ගැටලුව වළක්වා ගැනීමට උපකාරී වේද?',
    options: [
        'Eye Strain',
        'Repetitive Strain Injury (RSI)',
        'බෙල්ලේ වේදනාව',
    ],
    correctAnswer: 'Eye Strain',
    explanation: 'සෑම මිනිත්තු 20කට වරක්, අඩි 20ක් දුරින් ඇති දෙයක් දෙස තත්පර 20ක් බැලීමෙන් ඇස් වලට විවේකයක් ලැබේ.'
  },
  {
    id: 'q3',
    question: 'යතුරුලියනය කිරීම වැනි එකම ක්‍රියාව නැවත නැවත කිරීම නිසා ඇතිවිය හැකි ආබාධය කුමක්ද?',
     options: [
      'Eye Strain',
      'Carpal Tunnel Syndrome (a type of RSI)',
      'ඩිජිටල් විභේදනය',
    ],
    correctAnswer: 'Carpal Tunnel Syndrome (a type of RSI)',
    explanation: 'Repetitive Strain Injury (RSI) යනු නැවත නැවත කරන ක්‍රියා නිසා ඇතිවන තත්වයකි. Carpal Tunnel Syndrome යනු එහි එක් ප්‍රභේදයකි.'
  },
];

const shuffleArray = (array: any[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

export const ErgonomicsQuiz = ({ isPrintView }: { isPrintView: boolean }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(shuffleArray([...questions]));

  const handleAnswerChange = (questionId: string, value: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
    setShuffledQuestions(shuffleArray([...questions]));
  };

  if (isPrintView) {
    return (
      <div className="not-prose">
        <h4 className="font-semibold mb-2">Ergonomics Quiz</h4>
        <ol className="space-y-4">
          {questions.map((q, index) => (
            <li key={q.id} className="text-sm">
              <p className="font-medium">{index + 1}. {q.question}</p>
              <p className="pl-4 mt-1 text-gray-700"><b>Correct Answer:</b> {q.correctAnswer}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <Card className="not-prose">
      <CardHeader>
        <CardTitle>Ergonomics Quiz</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">Select the correct answer for each question.</p>
        <Separator className="mb-6" />
        <div className="space-y-6">
          {shuffledQuestions.map(q => {
            const selectedAnswer = answers[q.id];
            const isCorrect = selectedAnswer === q.correctAnswer;

            return (
              <div key={q.id} className={cn("p-4 border rounded-lg", isSubmitted && (isCorrect ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-red-500 bg-red-50 dark:bg-red-900/20"))}>
                <p className="font-medium mb-3">{q.question}</p>
                <RadioGroup value={selectedAnswer} onValueChange={(value) => handleAnswerChange(q.id, value)} disabled={isSubmitted}>
                  {q.options.map(option => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`${q.id}-${option}`} />
                      <Label htmlFor={`${q.id}-${option}`}>{option}</Label>
                      {isSubmitted && selectedAnswer === option && (
                          isCorrect 
                            ? <CheckCircle className="h-5 w-5 text-green-500 ml-2" /> 
                            : <XCircle className="h-5 w-5 text-red-500 ml-2" />
                        )}
                    </div>
                  ))}
                </RadioGroup>
                {isSubmitted && !isCorrect && (
                  <p className="text-sm text-red-600 dark:text-red-400 mt-2">{q.explanation}</p>
                )}
                {isSubmitted && isCorrect && (
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">{q.explanation}</p>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
       <CardFooter>
        <ButtonGroup>
          <Button onClick={handleSubmit} disabled={Object.keys(answers).length !== questions.length || isSubmitted}>
            Check Answers
          </Button>
          <Button onClick={handleReset} variant="outline">
            <Shuffle className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </ButtonGroup>
       </CardFooter>
    </Card>
  );
};

    