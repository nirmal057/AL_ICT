"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Palette,
  Droplets,
} from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Button } from "@/components/ui/button";
import { useViewSettingsStore } from "@/hooks/use-view-settings-store";

export const ViewSettingsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    reset,
    increasePageWidth,
    decreasePageWidth,
    setNextBgColor,
    setNextTextColor,
  } = useViewSettingsStore();

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Dock className="p-3">
              <DockIcon onClick={decreasePageWidth}>
                <ZoomOut className="h-5 w-5" />
              </DockIcon>
              <DockIcon onClick={increasePageWidth}>
                <ZoomIn className="h-5 w-5" />
              </DockIcon>
              <DockIcon onClick={setNextBgColor}>
                <Palette className="h-5 w-5" />
              </DockIcon>
              <DockIcon onClick={setNextTextColor}>
                <Droplets className="h-5 w-5" />
              </DockIcon>
              <DockIcon onClick={reset}>
                <RotateCcw className="h-5 w-5" />
              </DockIcon>
              <DockIcon onClick={handleToggle}>
                <X className="h-5 w-5" />
              </DockIcon>
            </Dock>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Button
              onClick={handleToggle}
              size="icon"
              className="rounded-full h-12 w-12"
            >
              <Settings className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
