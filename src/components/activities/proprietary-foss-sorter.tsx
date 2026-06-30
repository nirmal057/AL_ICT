
"use client";

import { useState } from 'react';
import { DndContext, useDraggable, useDroppable, closestCenter } from '@dnd-kit/core';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, Shuffle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Separator } from '../ui/separator';
import { ButtonGroup } from '../ui/button-group';

const initialItems = [
  { id: 'item-1', text: 'Microsoft Windows', type: 'proprietary' },
  { id: 'item-2', text: 'Linux Kernel', type: 'foss' },
  { id: 'item-3', text: 'Adobe Photoshop', type: 'proprietary' },
  { id: 'item-4', text: 'GIMP', type: 'foss' },
  { id: 'item-5', text: 'macOS', type: 'proprietary' },
  { id: 'item-6', text: 'LibreOffice', type: 'foss' },
  { id: 'item-7', text: 'Android (AOSP)', type: 'foss' },
  { id: 'item-8', text: 'iOS', type: 'proprietary' },
  { id: 'item-9', text: 'Chromium Browser', type: 'foss' },
  { id: 'item-10', text: 'Google Chrome', type: 'proprietary' },
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

const Draggable = ({ id, children, isCorrect, isChecked, isPlaced }: { id: string, children: React.ReactNode, isCorrect: boolean | null, isChecked: boolean, isPlaced: boolean }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={cn(
        'p-2 border rounded-md shadow-sm bg-card cursor-grab touch-none relative',
        isPlaced && 'cursor-default',
        isChecked && isCorrect === true && 'bg-green-100 dark:bg-green-900/30 border-green-500',
        isChecked && isCorrect === false && 'bg-red-100 dark:bg-red-900/30 border-red-500',
      )}
    >
      {children}
       {isChecked && (
        <div className="absolute -top-2 -right-2 bg-background rounded-full">
          {isCorrect ? <CheckCircle className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />}
        </div>
      )}
    </div>
  );
};

const Droppable = ({ id, children, title, className }: { id: string, children: React.ReactNode, title: string, className?: string }) => {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div ref={setNodeRef} className={cn("p-4 border border-dashed rounded-lg bg-muted/50 min-h-[100px] flex flex-col gap-2", className)}>
      <h3 className="font-semibold text-center">{title}</h3>
      <div className="flex-grow space-y-2">
        {children}
      </div>
    </div>
  );
};

export const ProprietaryFossSorter = ({ isPrintView }: { isPrintView: boolean }) => {
  const [items, setItems] = useState(shuffleArray([...initialItems]));
  const [proprietaryItems, setProprietaryItems] = useState<typeof initialItems>([]);
  const [fossItems, setFossItems] = useState<typeof initialItems>([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleDragEnd = (event: any) => {
    if(isChecked) return;
    const { active, over } = event;
    if (!over) return;

    const draggedItem = items.find(i => i.id === active.id) || proprietaryItems.find(i => i.id === active.id) || fossItems.find(i => i.id === active.id);
    if (!draggedItem) return;

    setItems(prev => prev.filter(i => i.id !== active.id));
    setProprietaryItems(prev => prev.filter(i => i.id !== active.id));
    setFossItems(prev => prev.filter(i => i.id !== active.id));
    
    if (over.id === 'droppable-proprietary') {
        setProprietaryItems(prev => [...prev, draggedItem]);
    } else if (over.id === 'droppable-foss') {
        setFossItems(prev => [...prev, draggedItem]);
    } else {
        setItems(prev => [...prev, draggedItem]);
    }
  };

  const checkAnswers = () => {
    setIsChecked(true);
  };

  const resetQuiz = () => {
    setItems(shuffleArray([...initialItems]));
    setProprietaryItems([]);
    setFossItems([]);
    setIsChecked(false);
  };
  
  if (isPrintView) {
      const correctProprietary = initialItems.filter(i => i.type === 'proprietary');
      const correctFoss = initialItems.filter(i => i.type === 'foss');
      return (
        <div className="not-prose">
            <h4 className="font-semibold mb-2">Proprietary vs Open-Source</h4>
            <p className="text-sm text-muted-foreground mb-4">Sort the following software into the correct categories.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <h5 className="font-bold mb-2">හිමිකාර මෘදුකාංග (Proprietary)</h5>
                    <ul className="list-disc pl-5 space-y-1">
                        {correctProprietary.map(item => <li key={item.id} className="text-sm">{item.text}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-2">විවෘත මූලාශ්‍ර (Open-Source)</h5>
                     <ul className="list-disc pl-5 space-y-1">
                        {correctFoss.map(item => <li key={item.id} className="text-sm">{item.text}</li>)}
                    </ul>
                </div>
            </div>
        </div>
      )
  }

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <Card className="not-prose">
        <CardHeader>
          <CardTitle>හිමිකාර සහ විවෘත මූලාශ්‍ර මෘදුකාංග</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Drag and drop the following software into the correct categories.</p>
          <div className="p-4 border rounded-lg min-h-[80px] flex flex-wrap gap-2 items-center justify-center bg-background">
            {items.map(item => <Draggable key={item.id} id={item.id} isCorrect={null} isChecked={false} isPlaced={false}>{item.text}</Draggable>)}
            {items.length === 0 && <p className="text-sm text-muted-foreground">All items have been placed!</p>}
          </div>
          <Separator/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Droppable id="droppable-proprietary" title="හිමිකාර මෘදුකාංග (Proprietary)">
              {proprietaryItems.map(item => <Draggable key={item.id} id={item.id} isCorrect={isChecked ? item.type === 'proprietary' : null} isChecked={isChecked} isPlaced={true}>{item.text}</Draggable>)}
            </Droppable>
            <Droppable id="droppable-foss" title="විවෘත මූලාශ්‍ර (Open-Source)">
              {fossItems.map(item => <Draggable key={item.id} id={item.id} isCorrect={isChecked ? item.type === 'foss' : null} isChecked={isChecked} isPlaced={true}>{item.text}</Draggable>)}
            </Droppable>
          </div>
        </CardContent>
        <CardFooter>
            <ButtonGroup>
              <Button onClick={checkAnswers} disabled={items.length > 0 || isChecked}>Check Answers</Button>
              <Button onClick={resetQuiz} variant="outline"><Shuffle className="mr-2 h-4 w-4" /> Reset</Button>
            </ButtonGroup>
        </CardFooter>
      </Card>
    </DndContext>
  );
};

    