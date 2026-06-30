
import type { Note } from "../../types";

export const note_3_3_6: Note = {
    id: "note-3-3-6",
    title: "XOR මෙහෙයුම",
    type: "html",
    content: `
      <h2>බිටු අනුසාරිත XOR මෙහෙයුම (Bitwise Exclusive OR Operation)</h2>
      <p>XOR (Exclusive OR) මෙහෙයුම, "විශේෂිත OR" ලෙසද හැඳින්වේ. එය ද ද්විමය සංඛ්‍යා දෙකක් මත ක්‍රියා කරයි. XOR මෙහෙයුමේ මූලික නීතිය නම්: <b>ආදාන බිටු දෙක එකිනෙකට වෙනස් නම් (එකක් 0 සහ අනෙක 1 නම්), ප්‍රතිදානය 1 වේ. ආදාන බිටු දෙකම සමාන නම් (දෙකම 0 හෝ දෙකම 1), ප්‍රතිදානය 0 වේ.</b></p>
      
      <h4>සත්‍යතා වගුව:</h4>
      <div class="overflow-x-auto my-4"><table class="w-48 border text-center">
        <thead><tr class="bg-muted"><th>A</th><th>B</th><th>A XOR B</th></tr></thead>
        <tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td></tr></tbody>
      </table></div>
      
      <h4>උදාහරණය: 11001010₂ XOR 10110101₂</h4>
       <div class="my-4 p-4 border rounded-lg bg-muted/30">
        <pre class="font-mono text-lg text-right overflow-x-auto">
          1 1 0 0 1 0 1 0
      XOR 1 0 1 1 0 1 0 1
      -----------------
          0 1 1 1 1 1 1 1
        </pre>
         <h5 class="font-semibold mt-4">පියවරෙන් පියවර පැහැදිලි කිරීම:</h5>
          <ol class="text-sm list-decimal pl-5 mt-2 space-y-1 font-mono">
              <li><b>දකුණුපසම තීරුව:</b> 0 XOR 1 = <b>1</b> (අසමාන)</li>
              <li><b>දෙවන තීරුව:</b> 1 XOR 0 = <b>1</b> (අසමාන)</li>
              <li><b>තෙවන තීරුව:</b> 0 XOR 1 = <b>1</b> (අසමාන)</li>
              <li><b>හතරවන තීරුව:</b> 1 XOR 0 = <b>1</b> (අසමාන)</li>
              <li><b>පස්වන තීරුව:</b> 0 XOR 1 = <b>1</b> (අසමාන)</li>
              <li><b>හයවන තීරුව:</b> 0 XOR 1 = <b>1</b> (අසමාන)</li>
              <li><b>හත්වන තීරුව:</b> 1 XOR 0 = <b>1</b> (අසමාන)</li>
              <li><b>වම්පසම තීරුව:</b> 1 XOR 1 = <b>0</b> (සමාන)</li>
          </ol>
        <p class="mt-2 font-bold text-lg text-center">පිළිතුර: 01111111₂</p>
      </div>

      <h4>ප්‍රායෝගික භාවිතය</h4>
      <ul>
        <li><b>බිටු පෙරළීම (Flipping Bits):</b> යම් බිටු කිහිපයක අගය පෙරළීමට (0 නම් 1 කිරීමට, 1 නම් 0 කිරීමට) අවශ්‍ය නම්, එම ස්ථාන වලට 1 ද, අනෙක් ස්ථාන වලට 0 ද යෙදූ "mask" එකක් සමඟ XOR කිරීමෙන් එය කළ හැක.</li>
        <li><b>දත්ත ගුප්ත කේතනය (Encryption):</b> XOR මෙහෙයුමේ ඇති විශේෂ ලක්ෂණය නම්, ප්‍රතිඵලය නැවතත් එක් ආදානයක් සමඟ XOR කළ විට අනෙක් ආදානය ලැබීමයි (<code>(A XOR B) XOR B = A</code>). මෙම ගුණය, සරල ගුප්ත කේතන ඇල්ගොරිතම සඳහා යොදා ගනී. මුල් දත්ත (Plaintext) යතුරක් (Key) සමඟ XOR කර කේතික පෙළ (Ciphertext) සෑදිය හැකි අතර, එම Ciphertext එක නැවතත් එම Key එක සමඟම XOR කිරීමෙන් මුල් Plaintext එක ලබාගත හැක.</li>
        <li><b>දෝෂ හඳුනාගැනීම (Error Detection):</b> දත්ත සම්ප්‍රේෂණයේදී දෝෂ සිදුවී ඇත්දැයි පරීක්ෂා කිරීමට Parity Bit ගණනය කිරීම වැනි ක්‍රම සඳහා යොදා ගැනේ.</li>
      </ul>
      
      <Activity id="activity-binary-calculator"/>
    `,
    tags: ["bitwise", "logic operations", "XOR", "exclusive or"],
};
