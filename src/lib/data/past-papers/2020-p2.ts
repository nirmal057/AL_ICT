
import type { Paper, StructuredQuestion } from "../../types";

const partA: StructuredQuestion[] = [];
const partB: StructuredQuestion[] = [];

export const paper2020_p2: Paper = {
    id: "past-paper-2020-p2",
    title: "A/L ICT Paper II - 2020",
    examName: {
      sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
      tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
      english: "General Certificate of Education (Adv. Level) Examination",
    },
    year: 2020,
    subject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය",
    subjectCode: 70,
    time: {
        sinhala: "පැය තුනයි",
        tamil: "மூன்று மணித்தியாலம்",
        english: "Three hours"
    },
    content: {
      title: "Paper II",
      partA: {
        title: "Part A - ව්‍යුහගත රචනා",
        instructions: "ප්‍රශ්න හතරටම පිළිතුරු මෙම පත්‍රයේම සපයන්න.",
        questions: partA
      },
      partB: {
        title: "Part B - රචනා",
        instructions: "ඕනෑම ප්‍රශ්න හතරකට පමණක් පිළිතුරු සපයන්න.",
        questions: partB
      }
    }
  };
