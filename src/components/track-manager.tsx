
"use client";

import React, { useState, useRef } from 'react';
import { useProgressStore } from '@/hooks/use-progress-store';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { MoreVertical, Pen, PlusCircle, Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from './ui/input';
import { Label } from './ui/label';

export const TrackManager = () => {
    const { tracks, activeTrackId, switchTrack, createTrack, editTrack, deleteTrack } = useProgressStore();
    const [dialogState, setDialogState] = useState<'create' | 'rename' | 'delete' | null>(null);
    const [trackName, setTrackName] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCreate = () => {
        if(trackName) {
            createTrack(trackName);
            setTrackName('');
            setDialogState(null);
        }
    }

    const handleRename = () => {
        if(trackName && activeTrackId) {
            editTrack(activeTrackId, trackName);
            setTrackName('');
            setDialogState(null);
        }
    }

    const handleDelete = () => {
        if(activeTrackId) {
            deleteTrack(activeTrackId);
            setDialogState(null);
        }
    }

    const activeTrack = tracks.find(t => t.id === activeTrackId);

    return (
        <div className="flex items-center gap-2 p-2 border rounded-lg bg-background">
            <Select value={activeTrackId || ''} onValueChange={(id) => switchTrack(id)}>
                <SelectTrigger className="flex-grow">
                    <SelectValue placeholder="Select a track..." />
                </SelectTrigger>
                <SelectContent>
                    {tracks.map(track => (
                        <SelectItem key={track.id} value={track.id}>{track.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MoreVertical className="h-5 w-5" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => setDialogState('create')}>
                        <PlusCircle className="mr-2 h-4 w-4"/>
                        <span>Create new track</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => {
                        setTrackName(activeTrack?.name || '');
                        setDialogState('rename');
                    }} disabled={!activeTrackId}>
                        <Pen className="mr-2 h-4 w-4"/>
                        <span>Rename current track</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => setDialogState('delete')} disabled={!activeTrackId || tracks.length <= 1} variant='destructive'>
                         <Trash2 className="mr-2 h-4 w-4"/>
                        <span>Delete current track</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Create/Rename Dialog */}
             <AlertDialog open={dialogState === 'create' || dialogState === 'rename'} onOpenChange={() => setDialogState(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{dialogState === 'create' ? 'Create New Track' : 'Rename Track'}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {dialogState === 'create' ? 'Enter a name for your new learning track.' : `Enter a new name for the track "${activeTrack?.name}".`}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="py-4">
                        <Label htmlFor="track-name" className="sr-only">Track Name</Label>
                        <Input 
                            id="track-name"
                            ref={inputRef}
                            value={trackName}
                            onChange={(e) => setTrackName(e.target.value)}
                            placeholder="e.g., Revision, Theory..."
                            onKeyDown={(e) => e.key === 'Enter' && (dialogState === 'create' ? handleCreate() : handleRename())}
                        />
                    </div>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={dialogState === 'create' ? handleCreate : handleRename}>
                            {dialogState === 'create' ? 'Create' : 'Rename'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            
            {/* Delete Confirmation Dialog */}
            <AlertDialog open={dialogState === 'delete'} onOpenChange={() => setDialogState(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will permanently delete the track "{activeTrack?.name}" and all its progress (bookmarks, completed topics, history). This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} variant="destructive">Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
