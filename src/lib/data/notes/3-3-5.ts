
import type { Note } from "../../types";

export const note_3_3_5: Note = {
    id: "note-3-3-5",
    title: "OR මෙහෙයුම",
    type: "html",
    content: `
      <h2>බිටු අනුසාරිත OR මෙහෙයුම (Bitwise OR Operation)</h2>
      <p>OR මෙහෙයුම, "තාර්කික එකතුවක්" ලෙස හැඳින්විය හැක. එය ද ද්විමය සංඛ්‍යා දෙකක් මත ක්‍රියා කරයි. මෙහිදී, සංඛ්‍යා දෙකෙහිම එකම ස්ථානයේ ඇති බිටු යුගලය ගෙන, ඒ මත OR තර්කය යොදවයි. OR මෙහෙයුමේ මූලික නීතිය නම්: <b>අවම වශයෙන් එක් ආදාන බිටුවක් හෝ 1 නම්, ප්‍රතිදානය 1 වේ. බිටු දෙකම 0 නම් පමණක් ප්‍රතිදානය 0 වේ.</b></p>
      
      <h4>සත්‍යතා වගුව:</h4>
      <div class="overflow-x-auto my-4"><table class="w-48 border text-center">
        <thead><tr class="bg-muted"><th>A</th><th>B</th><th>A OR B</th></tr></thead>
        <tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td></tr></tbody>
      </table></div>
      
      <h4>උදාහරණය: 11001010₂ OR 10110101₂</h4>
       <div class="my-4 p-4 border rounded-lg bg-muted/30">
        <pre class="font-mono text-lg text-right overflow-x-auto">
          1 1 0 0 1 0 1 0
      OR  1 0 1 1 0 1 0 1
      -----------------
          1 1 1 1 1 1 1 1
        </pre>
         <h5 class="font-semibold mt-4">පියවරෙන් පියවර පැහැදිලි කිරීම:</h5>
          <ol class="text-sm list-decimal pl-5 mt-2 space-y-1 font-mono">
              <li><b>දකුණුපසම තීරුව:</b> 0 OR 1 = <b>1</b></li>
              <li><b>දෙවන තීරුව:</b> 1 OR 0 = <b>1</b></li>
              <li><b>තෙවන තීරුව:</b> 0 OR 1 = <b>1</b></li>
              <li><b>හතරවන තීරුව:</b> 1 OR 0 = <b>1</b></li>
              <li><b>පස්වන තීරුව:</b> 0 OR 1 = <b>1</b></li>
              <li><b>හයවන තීරුව:</b> 0 OR 1 = <b>1</b></li>
              <li><b>හත්වන තීරුව:</b> 1 OR 0 = <b>1</b></li>
              <li><b>වම්පසම තීරුව:</b> 1 OR 1 = <b>1</b></li>
          </ol>
        <p class="mt-2 font-bold text-lg text-center">පිළිතුර: 11111111₂</p>
      </div>

      <h4>ප්‍රායෝගික භාවිතය: බිටු සක්‍රීය කිරීම (Setting Bits)</h4>
      <p>OR මෙහෙයුම, ද්විමය සංඛ්‍යාවක නිශ්චිත බිටු කිහිපයක් "ON" කිරීමට (එනම්, 1 බවට පත් කිරීමට) භාවිතා කරයි. යම් බිටු ස්ථානයක් 1 බවට පත් කිරීමට අවශ්‍ය නම්, එම ස්ථානයට 1 ද, අනෙක් ස්ථාන වලට 0 ද යෙදූ "mask" එකක් සමඟ OR කිරීමෙන්, එම බිටුව බලහත්කාරයෙන් 1 බවට පත් කළ හැකි අතර, අනෙක් බිටු වල අගයන් වෙනස් නොවේ.</p>
      <p class="text-sm mt-2"><b>උදාහරණය:</b> <code>11000010</code> යන බයිටයේ 4 වන බිටුව '1' බවට පත් කිරීමට (set), අපට <code>00010000</code> (mask) සමඟ OR කළ හැක.<br/><code>11000010 OR 00010000 = 11010010</code>. ප්‍රතිඵලයේ 4 වන බිටුව '1' බවට පත්ව ඇති අතර අනෙක් බිටු වෙනස් වී නැත.</p>
      
      <Activity id="activity-binary-calculator"/>
    `,
    tags: ["bitwise", "logic operations", "OR", "setting bits"],
};

    