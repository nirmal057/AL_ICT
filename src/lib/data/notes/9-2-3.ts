
import type { Note } from "../../types";

export const note_9_2_3: Note = {
    id: "note-9-2-3",
    title: "ව්‍යුහ සටහන් (Structure Charts)",
    type: "html",
    content: `
      <h2>ව්‍යුහ සටහන් (Structure Charts)</h2>
      <p>ව්‍යුහ සටහනක් යනු මුදුන්-සිට-පහළට සැලසුම් කිරීමේදී (Top-down Design) නිර්මාණය වන ධූරාවලිය, දෘශ්‍යමය වශයෙන් නිරූපණය කිරීමට භාවිතා කරන රූප සටහනකි. ගැලීම් සටහනක් (Flowchart) මෙන් ක්‍රියාවලියේ තර්කනය හෝ පාලන ප්‍රවාහය (if/else, loops) නොපෙන්වන අතර, ව්‍යුහ සටහනක ප්‍රධාන අරමුණ වන්නේ පද්ධතියේ සමස්ත <b>ව්‍යුහය</b> පෙන්වීමයි. එනම්, පද්ධතිය සමන්විත වන ප්‍රධාන මොඩියුල (modules) හෝ ශ්‍රිත (functions) මොනවාද, සහ ඒවා එකිනෙක කැඳවන්නේ (call) කෙසේද යන්නයි.</p>
      
      <h3>ව්‍යුහ සටහනක ප්‍රධාන සංරචක:</h3>
      <ul>
        <li><b>මොඩියුලය (Module):</b> සෘජුකෝණාස්‍රයකින් නිරූපණය කරයි. මෙය වැඩසටහනේ ශ්‍රිතයක් හෝ ක්‍රියාපටිපාටියක් නියෝජනය කරයි.</li>
        <li><b>කැඳවීම (Call):</b> එක් මොඩියුලයක සිට තවත් මොඩියුලයකට අඳින ලද ඊතලයකින් නිරූපණය කරයි. මෙමගින් එක් මොඩියුලයක් තවත් මොඩියුලයක් ක්‍රියාත්මක කරන බව පෙන්වයි.</li>
        <li><b>දත්ත හුවමාරුව (Data Couple):</b> මොඩියුල අතර හුවමාරු වන දත්ත, ඊතලය දිගේ කුඩා කවයක් සහ ඊ හිසක් මගින් නිරූපණය කරයි. ඊ හිසේ දිශාවෙන් දත්ත ගලන දිශාව පෙන්වයි.</li>
      </ul>

      <div class="my-6 p-4 border rounded-lg bg-slate-50 dark:bg-gray-800">
        <h4 class="font-bold text-lg mb-2">උදාහරණය: ශිෂ්‍ය සාමාර්ථය ගණනය කිරීමේ පද්ධතිය</h4>
        <p>අපගේ "ශිෂ්‍ය සාමාර්ථය ගණනය කිරීමේ" ගැටලුව සඳහා වන ව්‍යුහ සටහනක් පහත දැක්වේ. මෙහිදී, ප්‍රධාන මොඩියුලය තවත් උප-මොඩියුල තුනක් කැඳවයි: ලකුණු ලබාගැනීම, සාමාන්‍යය ගණනය කිරීම, සහ ප්‍රතිඵලය පෙන්වීම.</p>

        <div class="flex justify-center items-center my-4 p-4 border rounded-md">
            <svg width="400" height="300" viewBox="0 0 400 300" class="w-full max-w-lg">
                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"></path></marker>
                </defs>
                <!-- Main Module -->
                <rect x="100" y="20" width="200" height="40" rx="5" class="fill-card stroke-foreground" stroke-width="1.5"></rect>
                <text x="200" y="45" text-anchor="middle" class="font-semibold">Calculate Student Grade</text>

                <!-- Connecting Lines -->
                <line x1="200" y1="60" x2="200" y2="100" class="stroke-foreground" stroke-width="1.5"></line>
                <line x1="60" y1="100" x2="340" y2="100" class="stroke-foreground" stroke-width="1.5"></line>
                
                <!-- Sub Modules -->
                <line x1="60" y1="100" x2="60" y2="140" class="stroke-foreground" stroke-width="1.5"></line>
                <rect x="10" y="140" width="100" height="40" rx="5" class="fill-card stroke-foreground" stroke-width="1.5"></rect>
                <text x="60" y="165" text-anchor="middle">Get Marks</text>

                <line x1="200" y1="100" x2="200" y2="140" class="stroke-foreground" stroke-width="1.5"></line>
                <rect x="150" y="140" width="100" height="40" rx="5" class="fill-card stroke-foreground" stroke-width="1.5"></rect>
                <text x="200" y="165" text-anchor="middle">Calculate Avg</text>

                <line x1="340" y1="100" x2="340" y2="140" class="stroke-foreground" stroke-width="1.5"></line>
                <rect x="290" y="140" width="100" height="40" rx="5" class="fill-card stroke-foreground" stroke-width="1.5"></rect>
                <text x="340" y="165" text-anchor="middle">Display Result</text>

                <!-- Data Couples -->
                <line x1="180" y1="120" x2="60" y2="120" marker-end="url(#arrow)" class="stroke-foreground"></line>
                <circle cx="120" cy="120" r="5" class="fill-background stroke-foreground" stroke-width="1.5"></circle>
                <text x="120" y="115" text-anchor="middle" font-size="10">marks</text>

                <line x1="220" y1="120" x2="200" y2="120" marker-end="url(#arrow)" class="stroke-foreground"></line>
                <circle cx="210" cy="120" r="5" class="fill-background stroke-foreground" stroke-width="1.5"></circle>
                <text x="210" y="115" text-anchor="middle" font-size="10">average</text>
                
                <line x1="240" y1="120" x2="340" y2="120" marker-end="url(#arrow)" class="stroke-foreground"></line>
                 <circle cx="290" cy="120" r="5" class="fill-background stroke-foreground" stroke-width="1.5"></circle>
                <text x="290" y="115" text-anchor="middle" font-size="10">status</text>
            </svg>
        </div>
        <p class="text-sm mt-2">මෙම සටහනෙන්, ප්‍රධාන මොඩියුලය විසින් 'Get Marks' මොඩියුලය කැඳවා 'marks' ලබාගන්නා බවත්, එම 'marks' භාවිතා කර 'Calculate Avg' මොඩියුලය 'average' ගණනය කරන බවත්, අවසානයේදී 'Display Result' මොඩියුලයට 'status' යවා ප්‍රතිඵලය පෙන්වන බවත් පැහැදිලිව දැකගත හැක.</p>
      </div>
    `,
    tags: ["structure chart", "top-down design", "modules", "problem solving"],
};
