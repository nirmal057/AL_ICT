
import type { Note } from "../../types";

export const note_9_8_0: Note = {
    id: "note-9-8-0",
    title: "පාලන ව්‍යුහ හැඳින්වීම",
    type: "html",
    content: `
      <h2>පාලන ව්‍යුහ හැඳින්වීම (Introduction to Control Structures)</h2>
      <p>පාලන ව්‍යුහ යනු වැඩසටහනක ප්‍රකාශ (statements) ක්‍රියාත්මක වන අනුපිළිවෙල පාලනය කරන ක්‍රමලේඛන අංගයන් ය. සාමාන්‍යයෙන්, Python කේතයක් ඉහළ සිට පහළට, එක පේළියක් බැගින් ක්‍රියාත්මක වේ. නමුත් බොහෝ විට අපට මෙම සරල ප්‍රවාහය වෙනස් කිරීමට අවශ්‍ය වේ—නිදසුනක් ලෙස, යම් කොන්දේසියක් මත පදනම්ව කේත කොටසක් මඟ හැරීමට හෝ යම් කේත කොටසක් කිහිප වතාවක් නැවත ක්‍රියාත්මක කිරීමට. මේ සඳහා තේරීම් සහ පුනරාවර්තන ව්‍යුහ භාවිතා කරයි.</p>

      <h3>පාලන ප්‍රවාහයේ මූලික වර්ග 3</h3>
      <p>පරිගණක ක්‍රමලේඛනයේදී, ඕනෑම සංකීර්ණ තර්කනයක් මෙම මූලික පාලන ව්‍යුහ තුනේ එකතුවක් ලෙස ගොඩනැගිය හැක.</p>
      
      <Component id="diagram-control-flow-structures" />

      <div class="grid md:grid-cols-3 gap-4 my-4">
        <div class="p-4 border rounded-lg bg-muted/30">
          <h4 class="font-bold text-lg">1. අනුක්‍රමය (Sequence)</h4>
          <p class="text-sm mt-1">ප්‍රකාශ, ඒවා ලියා ඇති අනුපිළිවෙලටම, එකින් එක ක්‍රියාත්මක වීම. මෙය පෙරනිමි ප්‍රවාහයයි.</p>
        </div>
        <div class="p-4 border rounded-lg bg-muted/30">
          <h4 class="font-bold text-lg">2. තේරීම (Selection)</h4>
          <p class="text-sm mt-1">යම් කොන්දේසියක් සත්‍ය හෝ අසත්‍ය වීම මත ක්‍රියාත්මක විය යුතු කේත කොටස තෝරා ගැනීම (<code>if</code>, <code>elif</code>, <code>else</code>).</p>
        </div>
        <div class="p-4 border rounded-lg bg-muted/30">
          <h4 class="font-bold text-lg">3. පුනරාවර්තනය (Repetition / Iteration)</h4>
          <p class="text-sm mt-1">යම් කේත කොටසක් කොන්දේසියක් සපුරාලන තුරු හෝ නිශ්චිත වාර ගණනක් නැවත නැවත ක්‍රියාත්මක කිරීම (<code>for</code>, <code>while</code>).</p>
        </div>
      </div>
      <p>ඊළඟ සටහන් වලදී, අපි මෙම එක් එක් ව්‍යුහය Python භාෂාව තුළ ක්‍රියාත්මක කරන ආකාරය විස්තරාත්මකව ඉගෙන ගනිමු.</p>
    `,
    tags: ["control structures", "control flow", "python", "introduction"],
    relatedQuestions: ["pq-2024-p1-39", "pq-2024-p1-41", {id: "pq-2012-p1-43"}],
};

    