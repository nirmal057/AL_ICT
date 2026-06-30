
import type { Note } from "../../types";

export const note_3_3_1: Note = {
    id: "note-3-3-1",
    title: "ද්විමය එකතු කිරීම",
    type: "html",
    content: `
      <h2>ද්විමය එකතු කිරීම (Binary Addition)</h2>
      <p>ද්විමය එකතු කිරීම, අප එදිනෙදා භාවිතා කරන දශම එකතු කිරීමට බෙහෙවින් සමාන වේ. එහිදී අනුගමනය කළ යුතු මූලික නීති හතරක් ඇත. මෙහිදී වඩාත්ම වැදගත් නීතිය වන්නේ <code>1 + 1</code> යි. දශම ක්‍රමයේ 1+1=2 වන නමුත්, ද්විමය ක්‍රමයේ '2' ඉලක්කමක් නොමැත. '2' ද්විමය ලෙස '10' වන නිසා, ප්‍රතිඵලය <code>0</code> වන අතර <code>1</code> ක් ඊළඟ වම්පස තීරුවට <b>"ඉතිරියක්" (Carry)</b> ලෙස ගෙන යයි.</p>
      
      <div class="overflow-x-auto"><table class="w-full my-4 border text-center">
        <thead><tr class="bg-muted"><th class="p-2 border" colspan="3">ද්විමය එකතු කිරීමේ නීති</th></tr></thead>
        <tbody>
          <tr><td class="p-2 border font-mono">0 + 0</td><td class="p-2 border font-mono">= 0</td></tr>
          <tr><td class="p-2 border font-mono">0 + 1</td><td class="p-2 border font-mono">= 1</td></tr>
          <tr><td class="p-2 border font-mono">1 + 0</td><td class="p-2 border font-mono">= 1</td></tr>
          <tr><td class="p-2 border font-mono">1 + 1</td><td class="p-2 border font-mono">= 10 (ප්‍රතිඵලය 0, ඉතිරිය 1)</td></tr>
        </tbody>
      </table></div>

      <h4>උදාහරණය: 101100₂ + 1100₂</h4>
      <p>ගණනය කිරීමේ පහසුව සඳහා, ඉලක්කම් අඩු සංඛ්‍යාවේ වම්පසට 0 යොදා සංඛ්‍යා දෙකෙහිම දිග සමාන කර ගනිමු.</p>
      <div class="my-4 p-4 border rounded-lg bg-muted/30">
          <pre class="font-mono text-lg text-right overflow-x-auto">
      <span class="text-primary text-sm">  1 1 1 0 0</span>  (ඉතිරි / Carry)
        1 0 1 1 0 0
      + 0 0 1 1 0 0
      -----------------
        1 1 1 0 0 0
          </pre>
          <h5 class="font-semibold mt-4">පියවරෙන් පියවර පැහැදිලි කිරීම:</h5>
          <ol class="text-sm list-decimal pl-5 mt-2 space-y-1">
              <li><b>දකුණුපසම තීරුව (2⁰):</b> 0 + 0 = <b>0</b>.</li>
              <li><b>දෙවන තීරුව (2¹):</b> 0 + 0 = <b>0</b>.</li>
              <li><b>තෙවන තීරුව (2²):</b> 1 + 1 = 10. ප්‍රතිඵලය <b>0</b>, ඉතිරිය <b>1</b>.</li>
              <li><b>හතරවන තීරුව (2³):</b> 1 + 1 + (ඉතිරි 1) = 11. ප්‍රතිඵලය <b>1</b>, ඉතිරිය <b>1</b>.</li>
              <li><b>පස්වන තීරුව (2⁴):</b> 0 + 0 + (ඉතිරි 1) = <b>1</b>.</li>
              <li><b>හයවන තීරුව (2⁵):</b> 1 + 0 = <b>1</b>.</li>
          </ol>
          <p class="mt-2 font-bold text-lg text-center">පිළිතුර: 111000₂</p>
      </div>

      <div class="p-4 my-4 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-md text-sm">
          <b>විභාග උපදෙස:</b> ඔබගේ පිළිතුර නිවැරදි දැයි පරීක්ෂා කිරීමට, සියලුම සංඛ්‍යා දශමයට හරවා ගණනය කර බලන්න. <br>101100₂ = 44₁₀ | 1100₂ = 12₁₀ | 44 + 12 = 56₁₀. අපගේ පිළිතුර: 111000₂ = 56₁₀. පිළිතුර නිවැරදිය!
      </div>
      <Activity id="activity-binary-calculator"/>
    `,
    tags: ["binary arithmetic", "addition", "carry"],
};
