
"use client";

import React, { useState, useMemo } from "react";
import { data } from "@/lib/data";
import { Input } from "./ui/input";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "./ui/table";
import { BookText } from "lucide-react";

interface GlossaryPageProps {
    onItemSelect: (id: string, type: 'note' | 'paper' | 'tool' | 'glossary') => void;
}

const ITEMS_TO_SHOW = 20;

export const GlossaryPage = ({ onItemSelect }: GlossaryPageProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const glossary = data.glossary;

    const displayedGlossary = useMemo(() => {
        if (!searchTerm) {
            return glossary.slice(0, ITEMS_TO_SHOW);
        }
        const lowercasedFilter = searchTerm.toLowerCase();
        return glossary.filter(item =>
            item.english.toLowerCase().includes(lowercasedFilter) ||
            item.sinhala.toLowerCase().includes(lowercasedFilter) ||
            item.tamil.toLowerCase().includes(lowercasedFilter)
        );
    }, [searchTerm, glossary]);

    return (
        <div className="a4-page">
            <div className="text-center mb-8">
                <BookText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h1 className="font-headline text-4xl font-bold tracking-tight">Glossary of Terms</h1>
                <p className="text-muted-foreground mt-2 font-body text-lg">English - Sinhala - Tamil Technical Terms</p>
            </div>
            
            <div className="my-4">
                <Input
                    placeholder="Search glossary..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm mx-auto"
                />
            </div>
            
            <div className="border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">No</TableHead>
                            <TableHead>English</TableHead>
                            <TableHead>Sinhala</TableHead>
                            <TableHead>Tamil</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {displayedGlossary.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.id}</TableCell>
                                <TableCell>{item.english}</TableCell>
                                <TableCell>{item.sinhala}</TableCell>
                                <TableCell>{item.tamil}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
             {displayedGlossary.length === 0 && searchTerm && (
                <p className="text-center text-muted-foreground mt-8">No terms found for "{searchTerm}".</p>
             )}
              {displayedGlossary.length > 0 && !searchTerm && (
                <p className="text-center text-muted-foreground mt-4 text-sm">Showing {ITEMS_TO_SHOW} of {glossary.length} terms. Use search to see more.</p>
             )}
        </div>
    );
};
