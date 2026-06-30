"use client";

import { create } from 'zustand';
// Removed persist middleware to avoid localStorage SSR issues
import { v4 as uuidv4 } from 'uuid';

interface Track {
  id: string;
  name: string;
  completedTopics: string[];
  bookmarks: string[];
  lastViewed: string[];
}

interface ProgressState {
  tracks: Track[];
  activeTrackId: string | null;
  activeTrack: Track | null;
  initialized: boolean;
  
  createTrack: (name: string) => void;
  editTrack: (id: string, newName: string) => void;
  deleteTrack: (id: string) => void;
  switchTrack: (id: string) => void;

  toggleTopicComplete: (topicId: string) => void;
  toggleBookmark: (itemId: string) => void;
  addLastViewed: (itemId: string) => void;
  setInitialized: (val: boolean) => void;
}

const getActiveTrack = (tracks: Track[], activeTrackId: string | null): Track | null => {
    if (!activeTrackId) return null;
    return tracks.find(t => t.id === activeTrackId) || null;
}

// Check if we're on the client side
const isBrowser = typeof window !== 'undefined';

export const useProgressStore = create<ProgressState>((set, get) => ({
      tracks: [],
      activeTrackId: null,
      activeTrack: null,
      initialized: false,

      setInitialized: (val: boolean) => {
        set((state) => {
            if (val && state.tracks.length === 0) {
                const newTrackId = uuidv4();
                const newTracks = [{
                    id: newTrackId,
                    name: 'Default Track',
                    completedTopics: [],
                    bookmarks: [],
                    lastViewed: [],
                }];
                return { 
                    initialized: true,
                    tracks: newTracks,
                    activeTrackId: newTrackId,
                    activeTrack: newTracks[0]
                };
            }
            if (val) {
                 const currentTracks = get().tracks;
                 const currentActiveId = get().activeTrackId;
                 return {
                    initialized: true,
                    activeTrack: getActiveTrack(currentTracks, currentActiveId)
                 }
            }
            return { initialized: val };
        });
      },

      createTrack: (name) => {
        set((state) => {
          const newTrack: Track = {
            id: uuidv4(),
            name,
            completedTopics: [],
            bookmarks: [],
            lastViewed: [],
          };
          const newTracks = [...state.tracks, newTrack];
          return {
            tracks: newTracks,
            activeTrackId: newTrack.id,
            activeTrack: newTrack
          };
        });
      },

      editTrack: (id, newName) => {
        set((state) => {
          const newTracks = state.tracks.map((track) =>
            track.id === id ? { ...track, name: newName } : track
          );
           return { 
             tracks: newTracks,
             activeTrack: getActiveTrack(newTracks, state.activeTrackId)
           };
        });
      },

      deleteTrack: (id) => {
        set((state) => {
          if(state.tracks.length <= 1) return {}; // Prevent deleting the last track
          const newTracks = state.tracks.filter((track) => track.id !== id);
          let newActiveId = state.activeTrackId;
          if(state.activeTrackId === id) {
              newActiveId = newTracks[0]?.id || null;
          }
          return { 
            tracks: newTracks,
            activeTrackId: newActiveId,
            activeTrack: getActiveTrack(newTracks, newActiveId)
          };
        });
      },

      switchTrack: (id) => {
        set(state => ({ 
            activeTrackId: id,
            activeTrack: getActiveTrack(state.tracks, id)
        }));
      },

      toggleTopicComplete: (topicId) =>
        set((state) => {
          if (!state.activeTrack) return {};
          const isCompleted = state.activeTrack.completedTopics.includes(topicId);
          const newTopics = isCompleted
            ? state.activeTrack.completedTopics.filter((id) => id !== topicId)
            : [...state.activeTrack.completedTopics, topicId];
          
          const newTracks = state.tracks.map(track => 
            track.id === state.activeTrackId ? {...track, completedTopics: newTopics} : track
          );
          return { 
            tracks: newTracks,
            activeTrack: getActiveTrack(newTracks, state.activeTrackId)
          };
        }),

      toggleBookmark: (itemId) =>
        set((state) => {
            if (!state.activeTrack) return {};
            const isBookmarked = state.activeTrack.bookmarks.includes(itemId);
            const newBookmarks = isBookmarked
                ? state.activeTrack.bookmarks.filter((id) => id !== itemId)
                : [itemId, ...state.activeTrack.bookmarks];
            
            const newTracks = state.tracks.map(track => 
                track.id === state.activeTrackId ? {...track, bookmarks: newBookmarks} : track
            );
            return { 
                tracks: newTracks,
                activeTrack: getActiveTrack(newTracks, state.activeTrackId)
            };
        }),

      addLastViewed: (itemId) =>
        set((state) => {
            if (!state.activeTrack) return {};
            const newLastViewed = [itemId, ...state.activeTrack.lastViewed.filter((id) => id !== itemId)].slice(0, 10);

            const newTracks = state.tracks.map(track => 
                track.id === state.activeTrackId ? {...track, lastViewed: newLastViewed} : track
            );
            return { 
                tracks: newTracks,
                activeTrack: getActiveTrack(newTracks, state.activeTrackId)
            };
        }),
}));

// Install uuid if not already installed: npm install uuid @types/uuid
// We will add it to package.json
