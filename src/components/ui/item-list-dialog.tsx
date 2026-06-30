
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./button";
import type { Note, Paper } from "@/lib/types";
import { Book, FileText } from "lucide-react";

interface ItemListDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title: string;
  items: (Note | Paper)[];
  onItemSelect: (
    id: string,
    type: "note" | "paper" | "topic" | "cover-page" | "toc-page" | "glossary"
  ) => void;
}

const isPaper = (item: Note | Paper): item is Paper => "year" in item;

export function ItemListDialog({
  isOpen,
  onOpenChange,
  title,
  items,
  onItemSelect,
}: ItemListDialogProps) {
  const handleItemClick = (
    id: string,
    type: "note" | "paper"
  ) => {
    onItemSelect(id, type);
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Select an item to view it.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-72 w-full rounded-md border">
          <div className="p-4">
            {items.length > 0 ? (
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.id}>
                    <Button
                      variant="ghost"
                      className="p-2 h-auto font-normal text-muted-foreground hover:text-primary justify-start text-left w-full"
                      onClick={() =>
                        handleItemClick(
                          item.id,
                          isPaper(item) ? "paper" : "note"
                        )
                      }
                    >
                      {isPaper(item) ? (
                        <Book className="mr-2 h-4 w-4 flex-shrink-0" />
                      ) : (
                        <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                      )}
                      <span className="truncate">{item.title}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-center text-muted-foreground p-8">
                No items to display.
              </p>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
