
import type { Paper, PaperI } from "../types";
import { modelPaper1 } from "./past-papers/model-paper-1";
import alPaperII from "../../../2025/GCE_AL_ICT_Paper_II_Sinhala-v2.md";
import al2013PaperI from "../../../2025/GCE_AL_ICT_2013_Model_Paper_I_Sinhala-v1.md";
import ol2022PaperI from "../../../2025/gce_ol_ict_2022_2023_model_paper_2.md";
import { parseMarkdownMCQPaper } from "./markdown-paper-parser";

const markdownPaperContent = { title: "", instructions: "", questions: [] };

const applyRelatedNotes = (paper: PaperI, relatedNotes: Record<number, string>): PaperI => ({
  ...paper,
  questions: paper.questions.map(question => {
    const relatedNoteId = relatedNotes[question.questionNumber];
    return relatedNoteId ? { ...question, relatedNoteId } : question;
  }),
});

const al2013RelatedNotes: Record<number, string> = {
  1: "note-2-1-1",
  2: "note-2-1-2",
  3: "note-1-1-4",
  4: "note-2-4-1",
  5: "note-3-1-2",
  7: "note-8-1-0",
  10: "note-7-5-0",
  11: "note-7-8-0",
  12: "note-3-1-3",
  13: "note-10-3-0",
  14: "note-3-3-6",
  16: "note-2-4-4",
  17: "note-5-1-5",
  19: "note-13-2-0",
  20: "note-9-8-0",
  21: "note-9-8-5",
  22: "note-4-2-1",
  28: "note-7-6-0",
  29: "note-7-1-0",
  32: "note-8-6-0",
  33: "note-8-6-0",
  34: "note-1-7-2",
  35: "note-4-2-5",
  36: "note-1-3-2",
  37: "note-4-1-0",
  38: "note-8-2-0",
  39: "note-2-4-0",
  40: "note-10-3-0",
  41: "note-6-7-1",
  42: "note-6-1",
  44: "note-9-10-0",
  45: "note-9-10-0",
  46: "note-9-9-0",
  47: "note-9-13-0",
  48: "note-9-10-0",
  49: "note-9-10-0",
  50: "note-9-11-0",
};

const ol2022RelatedNotes: Record<number, string> = {
  1: "note-1-3-1",
  2: "note-6-2-0",
  5: "note-1-3-2",
  11: "note-3-1-2",
  13: "note-7-8-0",
  14: "note-7-9-0",
  16: "note-1-7-2",
  18: "note-2-4-0",
  19: "note-9-4-0",
  20: "note-6-5-0",
  25: "note-8-2-0",
  27: "note-8-1-0",
  28: "note-1-1-1",
  29: "note-12-1-0",
  30: "note-2-1-2",
  31: "note-4-1-0",
  32: "note-10-4-0",
  34: "note-10-7-0",
  35: "note-4-1-0",
  36: "note-9-3-1",
  37: "note-9-10-0",
  38: "note-9-10-0",
  39: "note-9-10-0",
  40: "note-9-8-5",
};

const importedModelPapers: Paper[] = [
  {
    id: "model-paper-al-paper-ii-sinhala-v2",
    title: "A/L ICT ආදර්ශ ප්‍රශ්න පත්‍රය II",
    year: 2025,
    issuer: "All Bits of ICT",
    subject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය",
    subjectCode: 24,
    time: "පැය දෙකයි",
    markdownContent: alPaperII,
    content: markdownPaperContent,
  },
  {
    id: "model-paper-al-2013-paper-i-sinhala-v1",
    title: "A/L ICT ආදර්ශ ප්‍රශ්න පත්‍රය I (2013)",
    year: 2013,
    issuer: "All Bits of ICT",
    subject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය",
    subjectCode: 24,
    time: "පැය දෙකයි",
    content: applyRelatedNotes(parseMarkdownMCQPaper("model-al-2013", al2013PaperI), al2013RelatedNotes),
  },
  {
    id: "model-paper-ol-2022-2023-paper-i",
    title: "O/L ICT ආදර්ශ ප්‍රශ්න පත්‍රය I (2022/2023)",
    year: 2023,
    issuer: "All Bits of ICT",
    subject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය",
    subjectCode: 24,
    time: "පැය තුනයි",
    content: applyRelatedNotes(parseMarkdownMCQPaper("model-ol-2022", ol2022PaperI), ol2022RelatedNotes),
  },
];

export const modelPapers: Paper[] = [
  modelPaper1,
  ...importedModelPapers,
];


