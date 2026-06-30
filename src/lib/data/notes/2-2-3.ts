
import type { Note } from "../../types";

export const note_2_2_3: Note = {
    id: "note-2-2-3",
    title: "පද්ධති පථ (System Bus)",
    type: "html",
    content: `
      <h2>පද්ධති පථ (System Bus)</h2>
      <p>වොන් නියුමාන් නිර්මිතයේ සියලුම ප්‍රධාන සංරචක (මධ්‍ය සැකසුම් ඒකකය, මතකය, ආදාන/ප්‍රතිදාන) එකිනෙකට සම්බන්ධ කරන, දත්ත සහ පාලන සංඥා ගමන් කරන විද්‍යුත් "මහා මාර්ග පද්ධතිය" පද්ධති පථය ලෙස හැඳින්වේ. මෙය භෞතිකව, මවු පුවරුවේ (Motherboard) ඇති සන්නායක පථ (conductive tracks) සමූහයකි.</p>
      <p>පද්ධති පථය ප්‍රධාන උප-පථ තුනකින් සමන්විත වේ:</p>
      
      <div class="overflow-x-auto my-4">
        <table class="w-full border">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">පථය (Bus)</th>
                    <th class="p-2 border">ගැලීමේ දිශාව</th>
                    <th class="p-2 border">කාර්යය</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border font-semibold">ලිපින පථය (Address Bus)</td>
                    <td class="p-2 border">ඒක-මාර්ග (Uni-directional)</td>
                    <td class="p-2 border">CPU එක මගින් මතකයේ හෝ I/O උපාංගයක දත්ත කියවීමට හෝ ලිවීමට අවශ්‍ය නිශ්චිත ස්ථානයේ ලිපිනය (memory location) රැගෙන යයි. මෙය CPU සිට අනෙකුත් උපාංග වෙතට පමණක් ගමන් කරයි.</td>
                </tr>
                <tr>
                    <td class="p-2 border font-semibold">දත්ත පථය (Data Bus)</td>
                    <td class="p-2 border">ද්වි-මාර්ග (Bi-directional)</td>
                    <td class="p-2 border">CPU, මතකය, සහ I/O උපාංග අතර සැබෑ දත්ත සහ උපදෙස් රැගෙන යයි. දත්ත CPU වෙතට සහ CPU වෙතින් පිටතට ගමන් කරන නිසා මෙය ද්වි-මාර්ග වේ.</td>
                </tr>
                <tr>
                    <td class="p-2 border font-semibold">පාලන පථය (Control Bus)</td>
                    <td class="p-2 border">ද්වි-මාර්ග (Bi-directional)</td>
                    <td class="p-2 border">පද්ධතියේ සියලුම ක්‍රියාකාරකම් සම්බන්ධීකරණය කරන පාලන සංඥා සහ තත්ත්ව සංඥා රැගෙන යයි. උදා: මතක කියවීමේ/ලිවීමේ සංඥා (Memory Read/Write signals), ඔරලෝසු ස්පන්දන (Clock signals), සහ අතුරු බිඳුම් (Interrupts).</td>
                </tr>
            </tbody>
        </table>
      </div>
      
      <div class="my-6 p-4 border rounded-lg bg-background flex justify-center">
        <svg viewBox="0 0 400 200" class="w-full max-w-lg h-auto">
            <defs>
                <marker id="arrow-unidir" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" /></marker>
                <marker id="arrow-bidir-start" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" /></marker>
                <marker id="arrow-bidir-end" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" /></marker>
            </defs>

            <rect x="20" y="75" width="80" height="50" rx="5" class="fill-card stroke-foreground" />
            <text x="60" y="103" text-anchor="middle" class="font-semibold">CPU</text>

            <rect x="300" y="75" width="80" height="50" rx="5" class="fill-card stroke-foreground" />
            <text x="340" y="103" text-anchor="middle" class="font-semibold">Memory</text>

            <!-- Address Bus -->
            <line x1="100" y1="90" x2="300" y2="90" class="stroke-foreground" marker-end="url(#arrow-unidir)" />
            <text x="200" y="85" text-anchor="middle" font-size="12">Address Bus</text>

            <!-- Data Bus -->
            <line x1="100" y1="110" x2="300" y2="110" class="stroke-foreground" marker-start="url(#arrow-bidir-start)" marker-end="url(#arrow-bidir-end)" />
            <text x="200" y="125" text-anchor="middle" font-size="12">Data Bus</text>

             <!-- Control Bus -->
            <path d="M 100 100 L 150 100 L 150 140 L 250 140 L 250 100 L 300 100" class="stroke-foreground fill-none" marker-start="url(#arrow-bidir-start)" marker-end="url(#arrow-bidir-end)" />
            <text x="200" y="155" text-anchor="middle" font-size="12">Control Bus</text>
        </svg>
      </div>

    `,
    tags: ["system bus", "address bus", "data bus", "control bus", "architecture"],
    relatedQuestions: ["pq-2017-p1-1"],
};
    
