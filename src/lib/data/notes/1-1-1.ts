
import type { Note } from "../../types";

export const note_1_1_1: Note = {
    id: "note-1-1-1",
    title: "දත්ත සහ තොරතුරු අතර වෙනස (Data vs. Information)",
    type: "html",
    content: `
        <h2>දත්ත (Data) vs. තොරතුරු (Information)</h2>
        <p>දත්ත සහ තොරතුරු යනු එකිනෙකට සම්බන්ධ නමුත් වෙනස් සංකල්ප දෙකකි. දත්ත යනු අමු, සකස් නොකළ කරුණු වන අතර, තොරතුරු යනු එම දත්ත අර්ථවත් ලෙස සැකසීමෙන් (processing) ලැබෙන ප්‍රතිඵලයයි.</p>
        
        <h3>සැසඳීම</h3>
        <div class="overflow-x-auto my-4">
            <table class="w-full border">
                <thead class="bg-muted">
                    <tr>
                        <th class="p-2 border">ලක්ෂණය</th>
                        <th class="p-2 border">දත්ත (Data)</th>
                        <th class="p-2 border">තොරතුරු (Information)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="p-2 border font-semibold">අර්ථ දැක්වීම</td>
                        <td class="p-2 border">සකස් නොකළ, සංවිධානය නොවූ අමු කරුණු සහ සංඛ්‍යා.</td>
                        <td class="p-2 border">අර්ථයක් ලබා දීම සඳහා සකස් කරන ලද සහ සංවිධානය කරන ලද දත්ත.</td>
                    </tr>
                    <tr>
                        <td class="p-2 border font-semibold">ස්වභාවය</td>
                        <td class="p-2 border">අසංවිධානාත්මක, තනිවම පැහැදිලි අර්ථයක් නැත.</td>
                        <td class="p-2 border">සංවිධානාත්මක, සන්දර්භයක් තුළ අර්ථවත් වේ.</td>
                    </tr>
                     <tr>
                        <td class="p-2 border font-semibold">උදාහරණය</td>
                        <td class="p-2 border">78, "නිමල්", "කොළඹ"</td>
                        <td class="p-2 border">"කොළඹ සිට පැමිණි නිමල්, විභාගයෙන් ලකුණු 78ක් ලබා ගත්තේය."</td>
                    </tr>
                    <tr>
                        <td class="p-2 border font-semibold">භාවිතය</td>
                        <td class="p-2 border">තොරතුරු නිර්මාණය කිරීමේ අමුද්‍රව්‍ය.</td>
                        <td class="p-2 border">තීරණ ගැනීම, විශ්ලේෂණය, සහ අවබෝධය සඳහා.</td>
                    </tr>
                </tbody>
            </table>
        </div>

       <div class="my-6 p-4 border rounded-lg bg-muted/30 flex justify-center">
            <svg viewBox="0 0 400 100" class="w-full max-w-md h-auto">
                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" class="fill-foreground" />
                    </marker>
                </defs>
                <rect x="10" y="30" width="120" height="40" rx="5" class="fill-card stroke-foreground" stroke-width="1.5" />
                <text x="70" y="55" text-anchor="middle" class="font-semibold fill-foreground">දත්ත (Data)</text>
                <line x1="135" y1="50" x2="245" y2="50" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)" />
                <text x="190" y="45" text-anchor="middle" font-size="12" class="fill-muted-foreground">ක්‍රියාවලිය (Process)</text>
                <rect x="270" y="30" width="120" height="40" rx="5" class="fill-primary/20 stroke-primary" stroke-width="1.5" />
                <text x="330" y="55" text-anchor="middle" class="font-semibold fill-primary-foreground">තොරතුරු (Info)</text>
            </svg>
        </div>
        <p>මෙම රූපසටහනෙන් පෙන්වන පරිදි, දත්ත, ක්‍රියාවලිය, සහ තොරතුරු අතර ප්‍රබල අන්තර් සම්බන්ධතාවක් පවතී. දත්ත, ක්‍රියාවලියක් හරහා ගොස් තොරතුරු බවට පත්වේ.
        
      <Activity id="activity-data-vs-info-quiz" />
    `,
    tags: ["data", "information", "knowledge", "DIKW pyramid"],
    relatedQuestions: [
        { id: "model-paper-1-1a-1" },
        { id: "pq-2011-p2-1a-i" },
        { id: "pq-2012-p1-3" },
        { id: "pq-2012-p2-1a-i" },
        {id: "pq-2012-p1-4"}
    ]
};

    