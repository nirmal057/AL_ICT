
import type { Note } from "../../types";

export const note_3_3_3: Note = {
    id: "note-3-3-3",
    title: "NOT මෙහෙයුම (ප්‍රති-අර්ථය / පෙරළීම)",
    type: "html",
    content: `
      <h2>බිටු අනුසාරිත NOT මෙහෙයුම (Bitwise NOT Operation)</h2>
      <p>NOT මෙහෙයුම, බිටු අනුසාරිත තාර්කික මෙහෙයුම් අතරින් සරලම එකකි. එය ක්‍රියා කරන්නේ තනි ද්විමය සංඛ්‍යාවක් මත පමණි. එහි එකම කාර්යය වන්නේ එම සංඛ්‍යාවේ ඇති සෑම බිටුවක්ම එහි ප්‍රතිවිරුද්ධ අගයට පෙරළීමයි. එනම්, සියලුම '0' බිටු '1' බවටත්, සියලුම '1' බිටු '0' බවටත් පත් කරයි. මෙම ක්‍රියාවලිය "පෙරළීම" (Inverting) හෝ "අනුපූරණය" (Complementing) ලෙසද හැඳින්වේ. ඇත්ත වශයෙන්ම, මෙය <b>එකෙහි අනුපූරකය (One's Complement)</b> ගණනය කිරීම හා සමාන වේ.</p>

      <h4>සත්‍යතා වගුව:</h4>
      <p>NOT මෙහෙයුම එක් බිටුවක් මත ක්‍රියා කරන ආකාරය මෙම සරල වගුවෙන් පෙන්වයි.</p>
       <div class="overflow-x-auto my-4"><table class="w-32 border text-center">
            <thead><tr class="bg-muted"><th>A</th><th>NOT A</th></tr></thead>
            <tbody><tr><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td></tr></tbody>
      </table></div>

      <h4>උදාහරණය: NOT 01101001₂</h4>
      <p>මෙම මෙහෙයුමේදී, එක් එක් තීරුව වෙන වෙනම සලකා බලනු ලැබේ.</p>
       <div class="my-4 p-4 border rounded-lg bg-muted/30">
        <pre class="font-mono text-lg text-center overflow-x-auto">
      NOT   0 1 1 0 1 0 0 1
          -----------------
      ===>  1 0 0 1 0 1 1 0
        </pre>
        <p class="mt-2 font-bold text-lg text-center">පිළිතුර: 10010110₂</p>
      </div>

      <p>පහත දැක්වෙන කැල්කියුලේටරය භාවිතයෙන් විවිධ ද්විමය සංඛ්‍යා සඳහා NOT මෙහෙයුම යොදා එහි ප්‍රතිඵලය ක්ෂණිකව නිරීක්ෂණය කරන්න. (කැල්කියුලේටරයේ NOT මෙහෙයුම නොමැති බැවින්, ඔබට එය වෙනත් මෙහෙයුමක් සමඟ සංසන්දනය කළ හැක.)</p>
      <Activity id="activity-binary-calculator"/>
    `,
    tags: ["bitwise", "logic operations", "NOT", "invert"],
};
