import type { MCQQuestion, PaperI } from "../types";

const toPaperHtml = (lines: string[]) => {
  const value = lines.join("\n").trim();
  if (!value) return "";

  const code = value.replace(/```(?:\w+)?\n([\s\S]*?)```/g, (_, source: string) => `[CODE:text]${source.trim()}[/CODE]`);
  return code
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/^\s*[-*]\s+/gm, "• ")
    .replace(/\n/g, "<br />");
};

const getAnswerKey = (markdown: string) => {
  const key: Record<number, number> = {};
  const answerSection = markdown.split(/##\s+Paper I\s*-\s*MCQ Answers/i)[1] ?? "";
  for (const match of answerSection.matchAll(/\*\*(\d+)\*\*\s*\|\s*\((\d+)\)/g)) {
    key[Number(match[1])] = Number(match[2]);
  }
  return key;
};

/** Converts the repository's Paper-I Markdown format to the app's interactive MCQ format. */
export const parseMarkdownMCQPaper = (idPrefix: string, markdown: string): PaperI => {
  const questionSource = markdown.split(/^#\s+Answer Scheme/m)[0];
  const lines = questionSource.replace(/\r\n/g, "\n").split("\n");
  const answerKey = getAnswerKey(markdown);
  const questions: MCQQuestion[] = [];
  const questionStart = /^(?:>\s*)?#{3,6}\s+(\d+)\.\s*(.*)$/;
  const optionStart = /^\s*(?:>\s*)?\((\d+)\)\s*(.*)$/;

  for (let index = 0; index < lines.length;) {
    const heading = lines[index].match(questionStart);
    if (!heading) { index++; continue; }

    const number = Number(heading[1]);
    const questionLines = [heading[2]];
    const options: string[] = [];
    let currentOption: string[] | null = null;
    index++;

    while (index < lines.length && !questionStart.test(lines[index])) {
      const option = lines[index].match(optionStart);
      if (option) {
        if (currentOption) options.push(toPaperHtml(currentOption));
        currentOption = [option[2]];
      } else if (currentOption) {
        currentOption.push(lines[index].replace(/^>\s?/, ""));
      } else {
        questionLines.push(lines[index].replace(/^>\s?/, ""));
      }
      index++;
    }
    if (currentOption) options.push(toPaperHtml(currentOption));

    if (options.length >= 2) {
      questions.push({
        id: `${idPrefix}-${number}`,
        questionNumber: number,
        content: toPaperHtml(questionLines),
        options,
        // A zero value indicates that the source Markdown has no answer key.
        correctAnswer: answerKey[number] ?? 0,
      });
    }
  }

  return {
    title: "I කොටස",
    instructions: "සියලුම ප්‍රශ්නවලට පිළිතුරු සපයන්න. එක් එක් ප්‍රශ්නය සඳහා වඩාත් සුදුසු පිළිතුර තෝරන්න.",
    questions,
    answerKeyAvailable: Object.keys(answerKey).length > 0,
  };
};
