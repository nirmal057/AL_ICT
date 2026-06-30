
"use client";

import { useState } from 'react';
import { DndContext, useDraggable, useDroppable, closestCenter } from '@dnd-kit/core';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, Shuffle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { ButtonGroup } from '../ui/button-group';

const initialItems = [
  { id: 'item-1', text: 'Netflix', type: 'SaaS' },
  { id: 'item-2', text: 'Amazon EC2 Instance', type: 'IaaS' },
  { id: 'item-3', text: 'Google App Engine', type: 'PaaS' },
  { id: 'item-4', text: 'Microsoft Office 365', type: 'SaaS' },
  { id: 'item-5', text: 'Heroku', type: 'PaaS' },
  { id: 'item-6', text: 'DigitalOcean Droplets', type: 'IaaS' },
  { id: 'item-7', text: 'Salesforce', type: 'SaaS' },
  { id: 'item-8', text: 'Firebase', type: 'PaaS' },
  { id: 'item-9', text: 'Azure Virtual Network', type: 'IaaS' },
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
        'p-2 border rounded-md shadow-sm bg-card cursor-grab touch-none relative w-full text-center',
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

const Droppable = ({ id, children, title, description }: { id: string, children: React.ReactNode, title: string, description: string }) => {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div ref={setNodeRef} className={cn("p-4 border border-dashed rounded-lg bg-muted/50 min-h-[150px] flex flex-col gap-2 w-full")}>
      <h3 className="font-semibold text-center">{title}</h3>
      <p className="text-xs text-center text-muted-foreground">{description}</p>
      <div className="flex-grow space-y-2 mt-2">
        {children}
      </div>
    </div>
  );
};

export const CloudServiceSorter = ({ isPrintView }: { isPrintView: boolean }) => {
  const [items, setItems] = useState(shuffleArray([...initialItems]));
  const [saasItems, setSaasItems] = useState<typeof initialItems>([]);
  const [paasItems, setPaasItems] = useState<typeof initialItems>([]);
  const [iaasItems, setIaasItems] = useState<typeof initialItems>([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleDragEnd = (event: any) => {
    if(isChecked) return;
    const { active, over } = event;
    if (!over) return;

    const draggedItem = items.find(i => i.id === active.id) || saasItems.find(i => i.id === active.id) || paasItems.find(i => i.id === active.id) || iaasItems.find(i => i.id === active.id);
    if (!draggedItem) return;

    // Remove from all lists
    setItems(prev => prev.filter(i => i.id !== active.id));
    setSaasItems(prev => prev.filter(i => i.id !== active.id));
    setPaasItems(prev => prev.filter(i => i.id !== active.id));
    setIaasItems(prev => prev.filter(i => i.id !== active.id));
    
    // Add to new list
    if (over.id === 'droppable-saas') {
        setSaasItems(prev => [...prev, draggedItem]);
    } else if (over.id === 'droppable-paas') {
        setPaasItems(prev => [...prev, draggedItem]);
    } else if (over.id === 'droppable-iaas') {
        setIaasItems(prev => [...prev, draggedItem]);
    } else {
        setItems(prev => [...prev, draggedItem]);
    }
  };

  const checkAnswers = () => {
    setIsChecked(true);
  };

  const resetQuiz = () => {
    setItems(shuffleArray([...initialItems]));
    setSaasItems([]);
    setPaasItems([]);
    setIaasItems([]);
    setIsChecked(false);
  };
  
  if (isPrintView) {
      return (
        <div className="not-prose">
            <h4 className="font-semibold mb-2">Cloud Service Models</h4>
            <p className="text-sm text-muted-foreground mb-4">Sort the following services.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <h5 className="font-bold mb-2">SaaS</h5>
                    <ul className="list-disc pl-5 space-y-1">
                        {initialItems.filter(i => i.type === 'SaaS').map(item => <li key={item.id} className="text-sm">{item.text}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-2">PaaS</h5>
                     <ul className="list-disc pl-5 space-y-1">
                        {initialItems.filter(i => i.type === 'PaaS').map(item => <li key={item.id} className="text-sm">{item.text}</li>)}
                    </ul>
                </div>
                 <div>
                    <h5 className="font-bold mb-2">IaaS</h5>
                     <ul className="list-disc pl-5 space-y-1">
                        {initialItems.filter(i => i.type === 'IaaS').map(item => <li key={item.id} className="text-sm">{item.text}</li>)}
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
          <CardTitle>වලාකුළු සේවා ආකෘති</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Drag and drop these services into the correct cloud model category.</p>
            <div className="p-4 border rounded-lg min-h-[80px] grid grid-cols-2 md:grid-cols-3 gap-2 items-center justify-center bg-background">
              {items.map(item => <Draggable key={item.id} id={item.id} isCorrect={null} isChecked={false} isPlaced={false}>{item.text}</Draggable>)}
              {items.length === 0 && <p className="text-sm text-muted-foreground col-span-full">All items have been placed!</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Droppable id="droppable-saas" title="SaaS" description="සේවාවක් ලෙස මෘදුකාංග">
                {saasItems.map(item => <Draggable key={item.id} id={item.id} isCorrect={isChecked ? item.type === 'SaaS' : null} isChecked={isChecked} isPlaced={true}>{item.text}</Draggable>)}
              </Droppable>
              <Droppable id="droppable-paas" title="PaaS" description="සේවාවක් ලෙස වේදිකාව">
                {paasItems.map(item => <Draggable key={item.id} id={item.id} isCorrect={isChecked ? item.type === 'PaaS' : null} isChecked={isChecked} isPlaced={true}>{item.text}</Draggable>)}
              </Droppable>
              <Droppable id="droppable-iaas" title="IaaS" description="සේවාවක් ලෙස යටිතල පහසුකම්">
                {iaasItems.map(item => <Draggable key={item.id} id={item.id} isCorrect={isChecked ? item.type === 'IaaS' : null} isChecked={isChecked} isPlaced={true}>{item.text}</Draggable>)}
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
