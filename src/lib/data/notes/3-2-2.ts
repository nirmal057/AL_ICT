
import type { Note } from "../../types";

export const note_3_2_2: Note = {
    id: "note-3-2-2",
    title: "EBCDIC ආකේතන ක්‍රමය",
    type: "html",
    content: `
      <h2>EBCDIC (Extended Binary Coded Decimal Interchange Code)</h2>
      <p>EBCDIC යනු IBM සමාගම විසින් ඔවුන්ගේ мэයින්ෆ්‍රේම් (mainframe) සහ මධ්‍ය පරිගණක (minicomputer) පද්ධති සඳහා විශේෂයෙන් නිර්මාණය කරන ලද 8-bit ආකේතන ක්‍රමයකි. එයට ASCII මෙන්ම අනුලක්ෂණ 256 (2⁸) ක් නිරූපණය කළ හැකිය.</p>
      <p>EBCDIC හි ප්‍රධාන වෙනස වන්නේ එහි අනුලක්ෂණ සැකැස්මයි. ASCII මෙන් නොව, EBCDIC හි අක්ෂර අනුපිළිවෙල එක දිගට නොමැත; උදාහරණයක් ලෙස, 'I' සහ 'J' අක්ෂර අතර කේත පරාසයේ හිඩැසක් පවතී. මෙය IBM පද්ධති වලින් පිටත බහුලව භාවිතා නොවූ අතර, ASCII ක්‍රමය පුද්ගලික පරිගණක සහ වෙබ් සඳහා වූ ගෝලීය සම්මතය බවට පත්විය.</p>

      <Activity id="activity-character-encoder" defaultEncoding="ebcdic" />

      <h3 class="mt-6">ASCII සහ EBCDIC සැසඳීම</h3>
      <div class="overflow-x-auto my-4"><table class="w-full border">
        <thead>
          <tr class="bg-muted">
            <th class="p-2 border">ගුණාංගය</th>
            <th class="p-2 border">ASCII</th>
            <th class="p-2 border">EBCDIC</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="p-2 border font-semibold">බිටු ගණන</td><td class="p-2 border">7-bit (මූලික), 8-bit (විස්තෘත)</td><td class="p-2 border">8-bit</td></tr>
          <tr><td class="p-2 border font-semibold">භාවිතය</td><td class="p-2 border">පුද්ගලික පරිගණක, වෙබ්, බොහෝ නවීන පද්ධති</td><td class="p-2 border">IBM мэයින්ෆ්‍රේම් සහ මධ්‍ය පරිගණක</td></tr>
          <tr><td class="p-2 border font-semibold">අනුලක්ෂණ සැකැස්ම</td><td class="p-2 border">ඉංග්‍රීසි අක්ෂර අනුක්‍රමිකව (contiguous) පවතී.</td><td class="p-2 border">අක්ෂර අතර හිඩැස් (gaps) පවතී.</td></tr>
          <tr><td class="p-2 border font-semibold">උදාහරණ (Hex)</td><td class="p-2 border font-mono">'a'=61, 'b'=62, 'A'=41, '0'=30</td><td class="p-2 border font-mono">'a'=81, 'b'=82, 'A'=C1, '0'=F0</td></tr>
          <tr><td class="p-2 border font-semibold">ප්‍රචලිත බව</td><td class="p-2 border">ඉතා ඉහළයි. ගෝලීය සම්මතයක් බවට පත්ව ඇත.</td><td class="p-2 border">ඉතා අඩුයි. ප්‍රධාන වශයෙන් IBM පද්ධති වලට සීමා වේ.</td></tr>
        </tbody>
      </table></div>
    `,
    tags: ["ebcdic", "character encoding", "8-bit", "ibm"],
    relatedQuestions: ["pq-2020-p1-8"],
};

    