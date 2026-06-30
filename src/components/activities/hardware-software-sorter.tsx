
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
  { id: 'item-1', text: 'යතුරුපුවරුව', type: 'hardware' },
  { id: 'item-2', text: 'Microsoft Word', type: 'software' },
  { id: 'item-3', text: 'මධ්‍ය සැකසුම් ඒකකය (CPU)', type: 'hardware' },
  { id: 'item-4', text: 'Linux මෙහෙයුම් පද්ධතිය', type: 'software' },
  { id: 'item-5', text: 'මොනිටරය', type: 'hardware' },
  { id: 'item-6', text: 'ස්ථිරාංග / BIOS', type: 'software' },
  { id: 'item-7', text: 'උපාංග ධාවකය (Device Driver)', type: 'software' },
  { id: 'item-8', text: 'RAM මතකය', type: 'hardware' },
  { id: 'item-9', text: 'සම්පාදකය (Compiler)', type: 'software' },
  { id: 'item-10', text: 'මවු පුවරුව', type: 'hardware' },
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

export const HardwareSoftwareSorter = ({ isPrintView }: { isPrintView: boolean }) => {
  const [items, setItems] = useState(shuffleArray([...initialItems]));
  const [hardwareItems, setHardwareItems] = useState<typeof initialItems>([]);
  const [softwareItems, setSoftwareItems] = useState<typeof initialItems>([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleDragEnd = (event: any) => {
    if(isChecked) return;
    const { active, over } = event;
    if (!over) return;

    const draggedItem = items.find(i => i.id === active.id) || hardwareItems.find(i => i.id === active.id) || softwareItems.find(i => i.id === active.id);
    if (!draggedItem) return;

    setItems(prev => prev.filter(i => i.id !== active.id));
    setHardwareItems(prev => prev.filter(i => i.id !== active.id));
    setSoftwareItems(prev => prev.filter(i => i.id !== active.id));
    
    if (over.id === 'droppable-hardware') {
        setHardwareItems(prev => [...prev, draggedItem]);
    } else if (over.id === 'droppable-software') {
        setSoftwareItems(prev => [...prev, draggedItem]);
    } else {
        setItems(prev => [...prev, draggedItem]);
    }
  };

  const checkAnswers = () => {
    setIsChecked(true);
  };

  const resetQuiz = () => {
    setItems(shuffleArray([...initialItems]));
    setHardwareItems([]);
    setSoftwareItems([]);
    setIsChecked(false);
  };
  
  if (isPrintView) {
      const correctHardware = initialItems.filter(i => i.type === 'hardware');
      const correctSoftware = initialItems.filter(i => i.type === 'software');
      return (
        <div className="not-prose">
            <h4 className="font-semibold mb-2">Hardware and Software</h4>
            <p className="text-sm text-muted-foreground mb-4">Sort the following items into the correct categories.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <h5 className="font-bold mb-2">දෘඪාංග (Hardware)</h5>
                    <ul className="list-disc pl-5 space-y-1">
                        {correctHardware.map(item => <li key={item.id} className="text-sm">{item.text}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-2">මෘදුකාංග (Software)</h5>
                     <ul className="list-disc pl-5 space-y-1">
                        {correctSoftware.map(item => <li key={item.id} className="text-sm">{item.text}</li>)}
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
          <CardTitle>දෘඪාංග සහ මෘදුකාංග</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Drag and drop the items into the correct categories. Some items might be tricky!</p>
          <div className="p-4 border rounded-lg min-h-[80px] flex flex-wrap gap-2 items-center justify-center bg-background">
            {items.map(item => <Draggable key={item.id} id={item.id} isCorrect={null} isChecked={false} isPlaced={false}>{item.text}</Draggable>)}
            {items.length === 0 && <p className="text-sm text-muted-foreground">All items have been placed!</p>}
          </div>
          <Separator/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Droppable id="droppable-hardware" title="දෘඪාංග (Hardware)">
              {hardwareItems.map(item => <Draggable key={item.id} id={item.id} isCorrect={isChecked ? item.type === 'hardware' : null} isChecked={isChecked} isPlaced={true}>{item.text}</Draggable>)}
            </Droppable>
            <Droppable id="droppable-software" title="මෘදුකාංග (Software)">
              {softwareItems.map(item => <Draggable key={item.id} id={item.id} isCorrect={isChecked ? item.type === 'software' : null} isChecked={isChecked} isPlaced={true}>{item.text}</Draggable>)}
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

    