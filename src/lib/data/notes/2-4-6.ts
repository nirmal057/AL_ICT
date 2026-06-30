
import type { Note } from "../../types";

export const note_2_4_6: Note = {
    id: "note-2-4-6",
    title: "මතක ප්‍රවේශ ක්‍රම",
    type: "html",
    content: `
      <h2>මතක ප්‍රවේශ ක්‍රම (Memory Access Methods)</h2>
      <p>ගබඩා උපාංගයක ඇති දත්ත වෙත ළඟා වන ආකාරය "ප්‍රවේශ ක්‍රමය" ලෙස හැඳින්වේ. මෙම ක්‍රම, උපාංගයේ භෞතික ව්‍යුහය සහ තාක්ෂණය මත රඳා පවතී.</p>
      
      <h3>1. අනුක්‍රමික ප්‍රවේශය (Sequential Access)</h3>
      <p>අනුක්‍රමික ප්‍රවේශයේදී, දත්ත වෙත ළඟා විය හැක්කේ ඒවා ගබඩා කර ඇති භෞතික අනුපිළිවෙලට එකින් එක ගමන් කිරීමෙන් පමණි. අපට අවශ්‍ය දත්තය වෙත කෙලින්ම "පැනීමට" නොහැක. එය හරියට වීඩියෝ කැසට් පටියක (VHS) ඇති චිත්‍රපටයේ මැද කොටස නැරඹීමට, ආරම්භයේ සිට වේගයෙන් ඉදිරියට (fast-forward) යාමට සිදු වීම වැනිය.</p>
      <ul>
        <li><b>ප්‍රධාන උදාහරණය:</b> චුම්භක පටි (Magnetic Tape).</li>
        <li><b>ලක්ෂණය:</b> දත්ත විශාල ප්‍රමාණයක් අනුපිළිවෙලින් කියවන හෝ ලියන අවස්ථා සඳහා (උදා: දත්ත සංස්ථිත කිරීම - backup) සුදුසු වුවද, නිශ්චිත දත්තයක් ඉක්මනින් සොයා ගැනීමට ඉතා මන්දගාමී වේ.</li>
      </ul>

      <h3>2. සෘජු / සසම්භාවී ප්‍රවේශය (Direct / Random Access)</h3>
      <p>සෘජු හෝ සසම්භාවී ප්‍රවේශයේදී, ගබඩා උපාංගයේ ඕනෑම ස්ථානයක ඇති දත්තයකට, අතරමැදි දත්ත හරහා නොගොස්, ආසන්න වශයෙන් එකම කාලයකින් සෘජුවම ප්‍රවේශ විය හැක. මෙය DVD එකක හෝ ඔබගේ දුරකථනයේ ඇති ගීත ලැයිස්තුවකින්, ඔබට අවශ්‍ය ගීතය (chapter/track) කෙලින්ම තෝරා වාදනය කිරීම වැනිය.</p>
      <ul>
        <li><b>උදාහරණ:</b> RAM, දෘඪ තැටි (HDD), SSD, CD/DVD/Blu-Ray තැටි.</li>
        <li><b>ලක්ෂණය:</b> මෙම ක්‍රමය, මෙහෙයුම් පද්ධති සහ යෙදුම් වැඩසටහන් සඳහා අත්‍යවශ්‍ය වේ, මන්ද ඒවාට නිරන්තරයෙන් මතකයේ විවිධ ස්ථානවල ඇති දත්ත ඉක්මනින් ලබා ගැනීමට අවශ්‍ය වන බැවිනි.</li>
      </ul>
      
      <Activity id="activity-memory-access-simulator" />

      <div class="overflow-x-auto my-6"><table class="w-full my-4 border">
        <thead>
          <tr class="bg-muted">
            <th class="p-2 border">ලක්ෂණය</th>
            <th class="p-2 border">අනුක්‍රමික ප්‍රවේශය</th>
            <th class="p-2 border">සෘජු / සසම්භාවී ප්‍රවේශය</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border font-semibold">ප්‍රවේශ ක්‍රමය</td>
            <td class="p-2 border">පිළිවෙලට, එකින් එක.</td>
            <td class="p-2 border">ඕනෑම ස්ථානයකට කෙලින්ම.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">වේගය</td>
            <td class="p-2 border">මන්දගාමී.</td>
            <td class="p-2 border">වේගවත්.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">ප්‍රධාන උපාංගය</td>
            <td class="p-2 border">චුම්භක පටි (Magnetic Tape).</td>
            <td class="p-2 border">RAM, HDD, SSD, Optical Discs.</td>
          </tr>
        </tbody>
      </table></div>
    `,
    tags: ["access methods", "sequential access", "random access", "direct access"],
    relatedQuestions: [],
};
