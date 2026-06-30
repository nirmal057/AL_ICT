
import type { Note } from "../../types";

export const note_1_3_2: Note = {
    id: "note-1-3-2",
    title: "මෘදුකාංග (Software)",
    type: "html",
    content: `
      <h2>මෘදුකාංග (Software)</h2>
      <p>දෘඪාංග වලට කුමක් කළ යුතුද සහ එය කරන්නේ කෙසේද යන්න පවසන උපදෙස් මාලාවක් හෝ වැඩසටහන් සමූහයකි. මෙය ස්පර්ශ කළ නොහැකි, අභෞතික කොටසකි. මෘදුකාංග ප්‍රධාන වර්ග දෙකකට බෙදිය හැක.</p>
      
      <h3>1. පද්ධති මෘදුකාංග (System Software)</h3>
      <p>පරිගණක දෘඪාංග කළමනාකරණය කරන සහ යෙදුම් මෘදුකාංග ක්‍රියාත්මක වීමට අවශ්‍ය වේදිකාව සපයන මෘදුකාංග වේ. මේවා පරිගණකයේ මූලික ක්‍රියාකාරීත්වය සඳහා අත්‍යවශ්‍ය වේ.</p>
      <div class="grid md:grid-cols-2 gap-4 my-4">
        <div class="p-4 border rounded-lg">
          <h4 class="font-bold">මෙහෙයුම් පද්ධති (Operating Systems - OS)</h4>
          <p class="text-sm">පරිගණකයේ සියලුම මූලික ක්‍රියාවන් (මතක කළමනාකරණය, ගොනු කළමනාකරණය, ආදාන/ප්‍රතිදාන පාලනය, ක්‍රියායන කළමනාකරණය) සිදු කරන ප්‍රධානතම මෘදුකාංගයයි. එය දෘඪාංග සහ යෙදුම් මෘදුකාංග අතර අතුරු මුහුණතක් ලෙස ක්‍රියා කරයි.</p>
          <p class="text-xs mt-2"><b>උදාහරණ:</b> Microsoft Windows, macOS, Linux, Android, iOS.</p>
        </div>
        <div class="p-4 border rounded-lg">
          <h4 class="font-bold">උපයෝගිතා මෘදුකාංග (Utility Software)</h4>
          <p class="text-sm">පරිගණකය නඩත්තු කිරීමට, විශ්ලේෂණය කිරීමට, වින්‍යාස කිරීමට සහ ප්‍රශස්ත කිරීමට උදව් වන මෘදුකාංග වේ.</p>
           <p class="text-xs mt-2"><b>උදාහරණ:</b> ප්‍රති-වයිරස වැඩසටහන් (Antivirus), තැටි ආකෘතිකරණ (Disk Formatting) සහ ප්‍රතිඛණ්ඩනය (Defragmentation) මෙවලම්, ගොනු සංරක්ෂණ (File Compression) මෘදුකාංග.</p>
        </div>
        <div class="p-4 border rounded-lg">
            <h4 class="font-bold">භාෂා පරිවර්තක (Language Translators)</h4>
            <p class="text-sm">ක්‍රමලේඛකයින් විසින් ඉහළ මට්ටමේ භාෂාවලින් (high-level languages) ලියන ලද ප්‍රභව කේතය (source code), පරිගණකයට තේරුම් ගත හැකි යන්ත්‍ර කේතය (machine code) බවට පරිවර්තනය කරයි.</p>
            <p class="text-xs mt-2"><b>උදාහරණ:</b> සම්පාදක (Compilers), අර්ථ වින්‍යාසක (Interpreters).</p>
        </div>
         <div class="p-4 border rounded-lg">
          <h4 class="font-bold">ස්ථීරාංග (Firmware)</h4>
          <p class="text-sm">දෘඪාංග උපාංගයක් තුළ ස්ථිරවම කාවැද්දූ, එම උපාංගය පාලනය කරන විශේෂිත මෘදුකාංගයකි. මෙය දෘඪාංග සහ අනෙකුත් මෘදුකාංග අතර අඩු මට්ටමේ සන්නිවේදනයක් සිදු කරයි. පරිගණකයේ BIOS හෝ රෙදි සෝදන යන්ත්‍රයක පාලන වැඩසටහන මීට උදාහරණ වේ.</p>
        </div>
      </div>

      <h3>2. යෙදුම් මෘදුකාංග (Application Software)</h3>
      <p>පරිශීලකයාගේ නිශ්චිත කාර්යයක් ඉටු කර ගැනීම සඳහා නිර්මාණය කර ඇති මෘදුකාංග වේ. මේවා "apps" ලෙසද පොදුවේ හැඳින්වේ.</p>
        <div class="overflow-x-auto my-4"><table class="border w-full">
            <thead><tr class="bg-muted"><th class="border p-2">වර්ගය</th><th class="border p-2">උදාහරණ</th></tr></thead>
            <tbody>
            <tr><td class="border p-2"><b>වදන් සැකසුම් (Word Processing)</b></td><td class="border p-2">Microsoft Word, Google Docs, LibreOffice Writer</td></tr>
            <tr><td class="border p-2"><b>පැතුරුම්පත් (Spreadsheets)</b></td><td class="border p-2">Microsoft Excel, Google Sheets, LibreOffice Calc</td></tr>
            <tr><td class="border p-2"><b>ඉදිරිපත් කිරීමේ මෘදුකාංග (Presentation Software)</b></td><td class="border p-2">Microsoft PowerPoint, Google Slides, LibreOffice Impress</td></tr>
            <tr><td class="border p-2"><b>වෙබ් ගවේශක (Web Browsers)</b></td><td class="border p-2">Google Chrome, Mozilla Firefox, Microsoft Edge</td></tr>
            <tr><td class="border p-2"><b>චිත්‍රක සහ සැලසුම් (Graphics and Design)</b></td><td class="border p-2">Adobe Photoshop, GIMP, Inkscape, Canva</td></tr>
            <tr><td class="border p-2"><b>දත්ත සමුදා මෘදුකාංග (Database Software)</b></td><td class="border p-2">MySQL, Microsoft SQL Server, Oracle</td></tr>
            </tbody>
        </table></div>
        <Activity id="activity-hardware-software-sorter" />
    `,
    tags: ["software", "system software", "application software", "operating system", "utility software", "firmware"],
    relatedQuestions: ["pq-2022-p1-1", "pq-2023-p1-1"],
};
