
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
  { id: 'item-1', text: 'විභාග ලකුණු (85)', type: 'quantitative' },
  { id: 'item-2', text: 'ඇස්වල වර්ණය (නිල්)', type: 'qualitative' },
  { id: 'item-3', text: 'උස (175cm)', type: 'quantitative' },
  { id: 'item-4', text: 'සේවාව පිළිබඳ අදහස (හොඳයි)', type: 'qualitative' },
  { id: 'item-5', text: 'කාමරයක උෂ්ණත්වය (25°C)', type: 'quantitative' },
  { id: 'item-6', text: 'හිසකෙස් වර්ණය (කළු)', type: 'qualitative' },
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

export const QualitativeVsQuantitativeQuiz = ({ isPrintView }: { isPrintView: boolean }) => {
  const [items, setItems] = useState(shuffleArray([...initialItems]));
  const [quantitativeItems, setQuantitativeItems] = useState<typeof initialItems>([]);
  const [qualitativeItems, setQualitativeItems] = useState<typeof initialItems>([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleDragEnd = (event: any) => {
    if(isChecked) return;
    const { active, over } = event;
    if (!over) return;

    const draggedItem = items.find(i => i.id === active.id) || quantitativeItems.find(i => i.id === active.id) || qualitativeItems.find(i => i.id === active.id);
    if (!draggedItem) return;

    setItems(prev => prev.filter(i => i.id !== active.id));
    setQuantitativeItems(prev => prev.filter(i => i.id !== active.id));
    setQualitativeItems(prev => prev.filter(i => i.id !== active.id));
    
    if (over.id === 'droppable-quantitative') {
        setQuantitativeItems(prev => [...prev, draggedItem]);
    } else if (over.id === 'droppable-qualitative') {
        setQualitativeItems(prev => [...prev, draggedItem]);
    } else {
        setItems(prev => [...prev, draggedItem]);
    }
  };

  const checkAnswers = () => {
    setIsChecked(true);
  };

  const resetQuiz = () => {
    setItems(shuffleArray([...initialItems]));
    setQuantitativeItems([]);
    setQualitativeItems([]);
    setIsChecked(false);
  };
  
  if (isPrintView) {
      const correctQuantitative = initialItems.filter(i => i.type === 'quantitative');
      const correctQualitative = initialItems.filter(i => i.type === 'qualitative');
      return (
        <div className="not-prose">
            <h4 className="font-semibold mb-2">Qualitative vs Quantitative Data</h4>
            <p className="text-sm text-muted-foreground mb-4">Sort the following items into the correct categories.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <h5 className="font-bold mb-2">ප්‍රමාණාත්මක දත්ත (Quantitative)</h5>
                    <ul className="list-disc pl-5 space-y-1">
                        {correctQuantitative.map(item => <li key={item.id} className="text-sm">{item.text}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-2">ගුණාත්මක දත්ත (Qualitative)</h5>
                     <ul className="list-disc pl-5 space-y-1">
                        {correctQualitative.map(item => <li key={item.id} className="text-sm">{item.text}</li>)}
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
          <CardTitle>Qualitative vs Quantitative Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Drag and drop the items into the correct categories below.</p>
          <div className="p-4 border rounded-lg min-h-[80px] flex flex-wrap gap-2 items-center justify-center bg-background">
            {items.map(item => <Draggable key={item.id} id={item.id} isCorrect={null} isChecked={false} isPlaced={false}>{item.text}</Draggable>)}
            {items.length === 0 && <p className="text-sm text-muted-foreground">All items placed!</p>}
          </div>
           <Separator/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Droppable id="droppable-quantitative" title="ප්‍රමාණාත්මක දත්ත (Quantitative)">
              {quantitativeItems.map(item => <Draggable key={item.id} id={item.id} isCorrect={isChecked ? item.type === 'quantitative' : null} isChecked={isChecked} isPlaced={true}>{item.text}</Draggable>)}
            </Droppable>
            <Droppable id="droppable-qualitative" title="ගුණාත්මක දත්ත (Qualitative)">
              {qualitativeItems.map(item => <Draggable key={item.id} id={item.id} isCorrect={isChecked ? item.type === 'qualitative' : null} isChecked={isChecked} isPlaced={true}>{item.text}</Draggable>)}
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

    