


export type Activity =
  | 'activity-data-vs-info-quiz'
  | 'activity-data-processing-animation'
  | 'activity-valuable-info-quiz'
  | 'activity-qual-vs-quan-quiz'
  | 'activity-ergonomics-quiz'
  | 'activity-cloud-service-sorter'
  | 'activity-www-deconstructed'
  | 'activity-hardware-software-sorter'
  | 'activity-proprietary-foss-sorter'
  | 'activity-number-system-converter'
  | 'activity-signed-number-converter'
  | 'activity-color-picker-tool'
  | 'activity-positional-abacus'
  | 'python-sandbox'
  | 'html-sandbox'
  | 'activity-von-neumann-simulator'
  | 'activity-fetch-decode-execute-simulator'
  | 'tool-sql-sandbox'
  | 'activity-memory-access-simulator'
  | 'activity-character-encoder'
  | 'activity-binary-calculator'
  | 'k-map-simulator'
  | 'memory-hierarchy-animation'
  | 'mindmap-1-1'
  | 'activity-manual-computer-simulator'
  | 'activity-batch-processing-visualizer';


export interface Note {
  id: string;
  title: string;
  content: string;
  type: 'markdown' | 'html';
  tags: string[];
  diagram?: string;
  relatedQuestions?: Array<string | { id: string } | MCQQuestion | StructuredQuestion>;
  relatedNoteId?: string;
}

export interface Topic {
  id: string;
  title: string;
  subTopics?: Topic[];
  notes?: { id: string }[];
  tags?: string[];
}

// --- Paper Mode Types ---
export type QuestionType = 'mcq' | 'essay' | 'structured' | 'diagram-based' | 'calculation';

export interface MCQQuestion {
  id: string;
  questionNumber: number;
  content: string;
  options: string[];
  correctAnswer: number;
  relatedNoteId?: string;
}

export interface MarkingComponent {
  id:string;
  description: string;
  marks: number;
  notes?: string;
  dependency?: string; // e.g., "A"
}

export interface SubQuestion {
  id: string;
  label: string; // e.g., "(i)", "(ii)", "(a)", "(b)"
  content: string;
  marks: number;
  requiresAnswerBox?: boolean;
  answerBoxSize?: 'small' | 'medium' | 'large';
  relatedNoteId?: string; // Added this line
}


export interface StructuredQuestion {
  id: string;
  questionNumber: string; // e.g., "2(a)(i)"
  content: string;
  totalMarks: number;
  relatedNoteId?: string;
  markingScheme?: MarkingComponent[];
  questionType?: QuestionType; // NEW
  subParts?: SubQuestion[]; // NEW
  requiresAnswerBox?: boolean; // NEW
  answerBoxSize?: 'small' | 'medium' | 'large' | 'xlarge'; // NEW
}

export interface PaperPart {
  title: string;
  instructions: string;
  questions: (MCQQuestion | StructuredQuestion)[];
}

export interface PaperI {
  title: string;
  instructions: string;
  questions: MCQQuestion[];
}

export interface PaperII {
  title: string;
  partA: PaperPart;
  partB: PaperPart;
}

export interface Paper {
  id: string;
  title: string; // This will act as the short name for the sidebar
  examName?: {
    sinhala: string;
    tamil: string;
    english: string;
  };
  year: number;
  subject: string;
  subjectCode?: number;
  time: {
    sinhala: string;
    tamil: string;
    english: string;
  } | string;
  issuer?: {
    sinhala: string;
    tamil: string;
    english: string;
  } | string;
  confidentiality?: string;
  content: PaperI | PaperII;
}

export interface GlossaryTerm {
    id: number;
    english: string;
    sinhala: string;
    tamil: string;
    tags: string[];
}


export interface DataStructure {
  topics: Topic[];
  notes: Note[];
  pastPapers: Paper[];
  recallPapers: Paper[];
  modelPapers: Paper[];
  tools: Note[];
  glossary: GlossaryTerm[];
}

    