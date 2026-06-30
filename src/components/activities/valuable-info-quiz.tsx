
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, HelpCircle, Shuffle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Separator } from '../ui/separator';
import { ButtonGroup } from '../ui/button-group';

const scenarios = [
  {
    id: 's1',
    scenario: 'පාසල් සිසුවෙකුට කොටස් වෙළෙඳපොළේ මිල ගණන්.',
    correctCharacteristic: 'අදාලත්වය (Relevance)',
    isValuable: false
  },
  {
    id: 's2',
    scenario: 'විභාගයට පෙර දින ලැබෙන විභාග කාලසටහන.',
    correctCharacteristic: 'කාලීන බව (Timeliness)',
    isValuable: true
  },
  {
    id: 's3',
    scenario: 'වැරදි ලෙස මුද්‍රණය වූ දුම්රිය ප්‍රවේශ පත්‍රයක මිල.',
    correctCharacteristic: 'නිරවද්‍යතාව (Accuracy)',
    isValuable: false
  },
  {
    id: 's4',
    scenario: 'භාණ්ඩයක මිල සහ වර්ණය පමණක් ඇති, ප්‍රමාණය නැති දැන්වීමක්.',
    correctCharacteristic: 'පූර්ණත්වය (Completeness)',
    isValuable: false
  },
  {
    id: 's5',
    scenario: 'සරල ප්‍රස්තාර මගින් පැහැදිලි කළ තාක්ෂණික වාර්තාවක්.',
    correctCharacteristic: 'තේරුම් ගැනීමේ හැකියාව (Understandability)',
    isValuable: true
  },
];

const characteristics = [
  'අදාලත්වය (Relevance)',
  'කාලීන බව (Timeliness)',
  'නිරවද්‍යතාව (Accuracy)',
  'පූර්ණත්වය (Completeness)',
  'තේරුම් ගැනීමේ හැකියාව (Understandability)',
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

export const ValuableInfoQuiz = ({ isPrintView }: { isPrintView: boolean }) => {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shuffledScenarios, setShuffledScenarios] = useState(shuffleArray([...scenarios]));

  const handleSelection = (scenarioId: string, characteristic: string) => {
    if (isSubmitted) return;
    setSelections(prev => ({ ...prev, [scenarioId]: characteristic }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelections({});
    setIsSubmitted(false);
    setShuffledScenarios(shuffleArray([...scenarios]));
  };

  if (isPrintView) {
      return (
          <div className="not-prose">
              <h4 className="font-semibold mb-2">Characteristics of Valuable Information</h4>
              <p className="text-sm text-muted-foreground mb-4">Match the scenario with the primary characteristic it demonstrates or lacks.</p>
              <ul className="space-y-2">
                  {scenarios.map(item => (
                      <li key={item.id} className="text-sm border-t pt-2">
                          <p><b>Scenario:</b> {item.scenario}</p>
                          <p><b>Correct Characteristic:</b> {item.correctCharacteristic}</p>
                      </li>
                  ))}
              </ul>
          </div>
      )
  }

  return (
    <TooltipProvider>
      <Card className="not-prose my-6">
        <CardHeader>
          <CardTitle>Characteristics of Valuable Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">For each scenario, select the most relevant characteristic of valuable information that is either demonstrated or lacking.</p>
          <Separator className="mb-6"/>
          <div className="space-y-6">
            {shuffledScenarios.map(item => {
              const selection = selections[item.id];
              const isCorrect = item.correctCharacteristic === selection;

              return (
                <div key={item.id} className={cn("p-4 border rounded-lg transition-colors", 
                  isSubmitted && (isCorrect ? 'bg-green-100 dark:bg-green-900/30 border-green-500' : 'bg-red-100 dark:bg-red-900/30 border-red-500')
                )}>
                  <p className="font-medium mb-3 flex items-center justify-between">
                    <span>{item.scenario}</span>
                    {isSubmitted && !isCorrect && (
                      <Tooltip>
                          <TooltipTrigger asChild>
                              <span className="text-xs text-muted-foreground flex items-center cursor-help">
                                  <HelpCircle className="h-4 w-4 mr-1" />
                                  Correct: {item.correctCharacteristic}
                              </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>The correct characteristic is <span className="font-bold">{item.correctCharacteristic}</span>.</p>
                          </TooltipContent>
                      </Tooltip>
                      )}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {characteristics.map(char => {
                      const isSelected = selection === char;
                      return (
                        <Button
                          key={char}
                          variant={isSelected ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => handleSelection(item.id, char)}
                          className={cn(
                            "relative",
                            isSubmitted && isSelected && isCorrect && "bg-green-500 hover:bg-green-600",
                            isSubmitted && isSelected && !isCorrect && "bg-red-500 hover:bg-red-600",
                          )}
                          disabled={isSubmitted}
                        >
                          {isSubmitted && isSelected && <Check className="absolute -top-1 -right-1 h-4 w-4 bg-background text-foreground rounded-full p-0.5" />}
                          {char}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
         <CardFooter>
            <ButtonGroup>
              <Button onClick={handleSubmit} disabled={Object.keys(selections).length !== scenarios.length || isSubmitted}>
                Check Answers
              </Button>
              <Button onClick={handleReset} variant="outline">
                <Shuffle className="mr-2 h-4 w-4" />
                Reset
              </Button>
            </ButtonGroup>
         </CardFooter>
      </Card>
    </TooltipProvider>
  );
};

    