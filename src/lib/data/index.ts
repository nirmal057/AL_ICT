

import type { DataStructure, Note, Topic, Paper, MCQQuestion, StructuredQuestion, PaperPart, PaperI, PaperII } from "../types";
import { topics_structure } from "./topics";
import { notes as allNotesData } from "./notes";
import { pastPapers as allPastPapers } from "./past-papers";
import { modelPapers } from "./model-papers";
import { recallPapers } from "./recall-papers";
import { tools } from "./tools";
import { glossary } from "./glossary";

// --- Central Data Hub ---

const rawData: DataStructure = {
  topics: topics_structure,
  notes: allNotesData,
  pastPapers: allPastPapers,
  recallPapers: recallPapers,
  modelPapers,
  tools,
  glossary,
};

// --- Relationship Building ---

// 1. Extract all questions from all papers into a single array
const allQuestions: (MCQQuestion | StructuredQuestion)[] = [...rawData.pastPapers, ...rawData.modelPapers, ...rawData.recallPapers].flatMap(paper => {
    if ('questions' in paper.content) { // PaperI or partA of PaperII
      const content = paper.content as PaperI | PaperPart;
      return content.questions;
    }
    // Handle PaperII structure
    const paperII = paper.content as PaperII;
    const partAQuestions = paperII.partA?.questions || [];
    const partBQuestions = paperII.partB?.questions || [];
    return [...partAQuestions, ...partBQuestions];
});


// 2. Build a Map to link notes to their related questions.
// This runs once when the module is loaded (at build time).
const questionsByNote = new Map<string, (MCQQuestion | StructuredQuestion)[]>();

allQuestions.forEach(q => {
  if (q.relatedNoteId) {
    const existing = questionsByNote.get(q.relatedNoteId) || [];
    questionsByNote.set(q.relatedNoteId, [...existing, q]);
  }
});

// 3. Hydrate notes with their related questions
const hydratedNotes: Note[] = rawData.notes.map(note => ({
  ...note,
  relatedQuestions: questionsByNote.get(note.id) || []
}));


// --- Final Exports ---

export const data: DataStructure = {
  ...rawData,
  notes: hydratedNotes,
};

export const allNotes: Note[] = hydratedNotes;
export const allPapers: Paper[] = rawData.pastPapers;
export { allQuestions };


const flattenTopicsForContent = (topics: Topic[]): (Topic | Note)[] => {
  let content: (Topic | Note)[] = [];
  topics.forEach(topic => {
    content.push(topic);

    const noteIds = topic.notes?.map(n => n.id) || [];
    const notesInTopic = allNotes.filter(n => noteIds.includes(n.id));
    content.push(...notesInTopic);
    
    if (topic.subTopics) {
      content.push(...flattenTopicsForContent(topic.subTopics));
    }
  });
  return content;
}

export const allContent: (Note | Paper | Topic)[] = [
  ...flattenTopicsForContent(data.topics),
  ...data.pastPapers,
  ...data.recallPapers,
  ...data.modelPapers,
  ...data.tools,
  ...data.glossary.map(g => ({ ...g, type: 'glossary' as const, content: '', tags: [], relatedQuestions: [] }))
];
