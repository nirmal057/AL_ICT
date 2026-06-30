
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Zap, GitFork, ShieldCheck, Gem, CircleDot, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '../ui/card';

const vs = [
  { id: 'volume', Icon: Database, title: 'පරිමාව (Volume)', description: 'දත්තවල අති විශාල ප්‍රමාණය (TB, PB)' },
  { id: 'velocity', Icon: Zap, title: 'වේගය (Velocity)', description: 'දත්ත ජනනය වන අධික වේගය' },
  { id: 'variety', Icon: GitFork, title: 'විවිධත්වය (Variety)', description: 'ව්‍යුහගත, ව්‍යුහගත නොවූ, අර්ධ-ව්‍යුහගත දත්ත' },
  { id: 'veracity', Icon: ShieldCheck, title: 'සත්‍යතාව (Veracity)', description: 'දත්තවල නිරවද්‍යතාව සහ විශ්වසනීයත්වය' },
  { id: 'value', Icon: Gem, title: 'වටිනාකම (Value)', description: 'දත්තවලින් ප්‍රයෝජනවත් තොරතුරු ලබාගැනීම' },
];

export const BigDataVisualization = () => {
  const [selected, setSelected] = useState(vs[0]);

  return (
    <Card className="w-full not-prose p-4 my-6 bg-muted/20">
      <CardContent className="p-0">
        <div className="relative w-full h-[350px] md:h-[250px] flex items-center justify-center">
          {/* Central Big Data element */}
          <motion.div
            className="absolute z-10 flex flex-col items-center justify-center w-32 h-32 rounded-full bg-primary text-primary-foreground shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <CircleDot className="w-8 h-8" />
            <h3 className="font-bold">Big Data</h3>
          </motion.div>

          {/* Orbiting V's */}
          {vs.map((v, i) => {
            const angle = (i / vs.length) * 2 * Math.PI;
            const radius = 130;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={v.id}
                className="absolute"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  x,
                  y,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: i * 0.1 },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <button
                  onClick={() => setSelected(v)}
                  className={cn(
                    "flex flex-col items-center justify-center w-20 h-20 rounded-full bg-background border-2 transition-all duration-300",
                    selected.id === v.id ? "border-primary shadow-lg" : "border-border"
                  )}
                >
                  <v.Icon className="w-6 h-6 mb-1" />
                  <span className="text-xs font-semibold">{v.title.split(' ')[0]}</span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Description Panel */}
        <div className="relative h-24 mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="p-4 bg-background border rounded-lg shadow-sm text-center"
            >
              <h4 className="font-bold text-primary flex items-center justify-center gap-2"><Info className='h-4 w-4' /> {selected.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{selected.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
};


    