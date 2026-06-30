
import type { Note } from "../../types";

export const note_3_3_4: Note = {
    id: "note-3-3-4",
    title: "AND මෙහෙයුම",
    type: "html",
    content: `
      <h2>බිටු අනුසාරිත AND මෙහෙයුම (Bitwise AND Operation)</h2>
      <p>AND මෙහෙයුම, "තාර්කික ගුණිතයක්" ලෙසද හැඳින්විය හැක. එය ද්විමය සංඛ්‍යා දෙකක් මත ක්‍රියා කරයි. මෙහිදී, සංඛ්‍යා දෙකෙහිම එකම ස්ථානයේ (corresponding position) ඇති බිටු යුගලය ගෙන, ඒ මත AND තර්කය යොදවයි. AND මෙහෙයුමේ මූලික නීතිය නම්: <b>ආදාන බිටු දෙකම 1 නම් පමණක්, ප්‍රතිදානය 1 වේ. අනෙක් සෑම අවස්ථාවකදීම ප්‍රතිදානය 0 වේ.</b></p>
      
      <h4>සත්‍යතා වගුව:</h4>
      <div class="overflow-x-auto my-4"><table class="w-48 border text-center">
            <thead><tr class="bg-muted"><th>A</th><th>B</th><th>A AND B</th></tr></thead>
            <tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td></tr></tbody>
      </table></div>

      <h4>උදාහරණය: 11001010₂ AND 10110101₂</h4>
       <div class="my-4 p-4 border rounded-lg bg-muted/30">
        <pre class="font-mono text-lg text-right overflow-x-auto">
          1 1 0 0 1 0 1 0
      AND 1 0 1 1 0 1 0 1
      -----------------
          1 0 0 0 0 0 0 0
        </pre>
         <h5 class="font-semibold mt-4">පියවරෙන් පියවර පැහැදිලි කිරීම:</h5>
          <ol class="text-sm list-decimal pl-5 mt-2 space-y-1 font-mono">
              <li><b>දකුණුපසම තීරුව:</b> 0 AND 1 = <b>0</b></li>
              <li><b>දෙවන තීරුව:</b> 1 AND 0 = <b>0</b></li>
              <li><b>තෙවන තීරුව:</b> 0 AND 1 = <b>0</b></li>
              <li><b>හතරවන තීරුව:</b> 1 AND 0 = <b>0</b></li>
              <li><b>පස්වන තීරුව:</b> 0 AND 1 = <b>0</b></li>
              <li><b>හයවන තීරුව:</b> 0 AND 1 = <b>0</b></li>
              <li><b>හත්වන තීරුව:</b> 1 AND 0 = <b>0</b></li>
              <li><b>වම්පසම තීරුව:</b> 1 AND 1 = <b>1</b></li>
          </ol>
        <p class="mt-2 font-bold text-lg text-center">පිළිතුර: 10000000₂</p>
      </div>

      <h4>ප්‍රායෝගික භාවිතය: ආවරණය (Masking)</h4>
      <p>AND මෙහෙයුම, ද්විමය සංඛ්‍යාවක නිශ්චිත බිටු කිහිපයක් පමණක් "තෝරා ගැනීමට" හෝ "පෙරීමට" (filter) බහුලව භාවිතා වේ. මෙය "Masking" ලෙස හැඳින්වේ. යම් බිටුවක අගය කුමක්දැයි දැනගැනීමට අවශ්‍ය නම්, එම ස්ථානයට 1 ද, අනෙක් සියලු ස්ථාන වලට 0 ද යෙදූ "mask" එකක් සමඟ AND කිරීමෙන්, අනෙක් සියලු බිටු 0 බවට පත් කර, අපට අවශ්‍ය බිටුව පමණක් ඉතිරි කරගත හැක.</p>
       <p class="text-sm mt-2"><b>උදාහරණය:</b> <code>11011010</code> යන බයිටයේ 3 වන බිටුව (දකුණේ සිට, 0න් පටන්ගෙන) '1' ද '0' ද යන්න පරීක්ෂා කිරීමට, අපට <code>00001000</code> (mask) සමඟ AND කළ හැක. <br/><code>11011010 AND 00001000 = 00001000</code>. ප්‍රතිඵලය ශුන්‍ය නොවන නිසා, 3 වන බිටුව '1' බව නිගමනය කළ හැක.</p>

      <Activity id="activity-binary-calculator"/>
    `,
    tags: ["bitwise", "logic operations", "AND", "masking"],
};

    