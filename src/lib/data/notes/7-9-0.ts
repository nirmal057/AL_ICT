
import type { Note } from "../../types";

export const note_7_9_0: Note = {
    id: "note-7-9-0",
    title: "පද්ධතිය ක්‍රියාවට නැංවීම",
    type: "html",
    content: `
      <h2>පද්ධතිය ක්‍රියාවට නැංවීම (System Implementation/Deployment)</h2>
      <p>සංවර්ධනය කර පරීක්ෂා කරන ලද නව පද්ධතිය, පැරණි පද්ධතිය වෙනුවට සැබෑ ලෝකයේ භාවිතය සඳහා ස්ථාපනය කිරීමේ ක්‍රියාවලියයි.</p>

      <h3>ක්‍රියාවට නැංවීමේ ක්‍රම (Implementation Methods)</h3>
      <div class="overflow-x-auto my-4"><table class="w-full my-4 border">
        <thead>
          <tr class="bg-muted">
            <th class="p-2 border">ක්‍රමය</th>
            <th class="p-2 border">විස්තරය</th>
            <th class="p-2 border">වාසි</th>
            <th class="p-2 border">අවාසි</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border font-semibold">සෘජු ක්‍රමය (Direct Cutover)</td>
            <td class="p-2 border">පැරණි පද්ධතිය එකවර නවතා දමා, ඒ මොහොතේම නව පද්ධතිය ආරම්භ කිරීම.</td>
            <td class="p-2 border">වේගවත්, පිරිවැය අඩුයි.</td>
            <td class="p-2 border">ඉතා අවදානම් සහිතයි. නව පද්ධතියේ දෝෂයක් ඇත්නම්, ආපසු පැරණි ක්‍රමයට යා නොහැක.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">සමාන්තර ක්‍රමය (Parallel)</td>
            <td class="p-2 border">පැරණි සහ නව පද්ධති දෙකම එකවර որոշ කාලයක් ක්‍රියාත්මක කිරීම.</td>
            <td class="p-2 border">ආරක්ෂිතම ක්‍රමයයි. නව පද්ධතියේ ගැටලුවක් වුවහොත් පැරණි පද්ධතිය භාවිත කළ හැක.</td>
            <td class="p-2 border">පිරිවැය අධිකයි, කාර්ය මණ්ඩලයට වැඩ දෙගුණයක් කිරීමට සිදු වේ.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">අවධි ක්‍රමය (Phased)</td>
            <td class="p-2 border">නව පද්ධතිය කොටස් (modules) වශයෙන්, එකින් එක ක්‍රියාවට නැංවීම.</td>
            <td class="p-2 border">අවදානම අඩුයි.</td>
            <td class="p-2 border">සම්පූර්ණ පද්ධතියම ක්‍රියාත්මක වීමට වැඩි කාලයක් ගතවේ.</td>
          </tr>
           <tr>
            <td class="p-2 border font-semibold">නියාමක ක්‍රමය (Pilot)</td>
            <td class="p-2 border">නව පද්ධතිය සම්පූර්ණයෙන්ම, ආයතනයේ තෝරාගත් කුඩා කණ්ඩායමකට හෝ ශාඛාවකට පමණක් මුලින්ම ලබා දීම.</td>
            <td class="p-2 border">අවදානම අඩුයි, සැබෑ පරිසරයක පද්ධතිය පරීක්ෂා කළ හැක.</td>
            <td class="p-2 border">සමස්ත ආයතනයටම පද්ධතිය ලැබීමට ප්‍රමාද විය හැක.</td>
          </tr>
        </tbody>
      </table></div>

      <h3>ක්‍රියාවට නැංවීමෙන් පසු ක්‍රියාකාරකම්</h3>
      <ul>
        <li><b>දත්ත පර්යටනය (Data Migration):</b> පැරණි පද්ධතියේ ඇති දත්ත නව පද්ධතියට මාරු කිරීම.</li>
        <li><b>පරිශීලක පුහුණුව (User Training):</b> නව පද්ධතිය භාවිතා කරන ආකාරය පරිශීලකයින්ට ඉගැන්වීම.</li>
        <li><b>නඩත්තුව (Maintenance):</b> පද්ධතිය ක්‍රියාත්මක වීමෙන් පසු ඇතිවන දෝෂ නිවැරදි කිරීම සහ නව අවශ්‍යතා වලට ගැලපෙන සේ යාවත්කාලීන කිරීම.</li>
      </ul>
    `,
    tags: ["system implementation", "deployment", "direct", "parallel", "phased", "pilot"],
    relatedQuestions: [{ id: "pq-2022-p1-23", content: "", questionNumber: 0, correctAnswer: 0, options: []}, { id: "pq-2023-p1-24", content: "", questionNumber: 0, correctAnswer: 0, options: []}, { id: "pq-2023-p1-30", content: "", questionNumber: 0, correctAnswer: 0, options: []}],
};
