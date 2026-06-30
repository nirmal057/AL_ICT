
import type { Note } from "../../types";

export const note_7_6_0: Note = {
    id: "note-7-6-0",
    title: "පද්ධති විශ්ලේෂණය",
    type: "html",
    content: `
      <h2>පද්ධති විශ්ලේෂණය (System Analysis)</h2>
      <p>මෙම අදියරේදී, පවතින පද්ධතිය (එය අත්හතුරු හෝ පරිගණකගත එකක් විය හැක) ගැඹුරින් අධ්‍යයනය කර, එහි ඇති ගැටලු, සීමාවන්, සහ නව පද්ධතිය මගින් සපුරාලිය යුතු අවශ්‍යතා මොනවාදැයි හඳුනා ගනී.</p>
      
      <h3>අවශ්‍යතා වර්ග (Types of Requirements)</h3>
      <div class="grid md:grid-cols-2 gap-4 my-4">
        <div class="p-4 border rounded-lg bg-background">
          <h4 class="font-bold">කාර්යබද්ධ අවශ්‍යතා (Functional Requirements)</h4>
          <p class="text-sm">පද්ධතිය මගින් "කළ යුතු" දේවල් මොනවාද යන්න නිර්වචනය කරයි. මේවා ක්‍රියාකාරකම් සහ ක්‍රියාවලි මත පදනම් වේ.</p>
          <p class="text-xs mt-2"><b>උදාහරණ:</b>
          <ul class="list-disc pl-5">
            <li>පද්ධතියට ශිෂ්‍ය ලකුණු ඇතුළත් කිරීමට හැකි විය යුතුය.</li>
            <li>පරිශීලකයාට වාර්තාවක් මුද්‍රණය කිරීමට හැකි විය යුතුය.</li>
            <li>පද්ධතිය විකුණුම් සාරාංශයක් ගණනය කළ යුතුය.</li>
          </ul>
        </p>
        </div>
        <div class="p-4 border rounded-lg bg-background">
          <h4 class="font-bold">කාර්යබද්ධ නොවන අවශ්‍යතා (Non-functional Requirements)</h4>
          <p class="text-sm">පද්ධතියේ ගුණාත්මකභාවය, කාර්ය සාධනය, සහ ආරක්ෂාව වැනි දේ නිර්වචනය කරයි. මේවා පද්ධතිය "විය යුතු" ආකාරය විස්තර කරයි.</p>
          <p class="text-xs mt-2"><b>උදාහරණ:</b>
          <ul class="list-disc pl-5">
            <li>වෙබ් අඩවියේ සෑම පිටුවක්ම තත්පර 2 ක් ඇතුළත පූරණය විය යුතුය (Performance).</li>
            <li>පද්ධතියට එකවර පරිශීලකයින් 100 දෙනෙකුට සහාය විය යුතුය (Capacity).</li>
            <li>මුරපද ගුප්ත කේතනය කර ගබඩා කළ යුතුය (Security).</li>
          </ul>
        </p>
        </div>
      </div>


      <h3>දත්ත රැස් කිරීමේ ක්‍රම (Fact-Finding Techniques)</h3>
      <ul>
        <li><b>සම්මුඛ සාකච්ඡා (Interviews):</b> පරිශීලකයින් සහ කළමනාකරුවන්ගෙන් ප්‍රශ්න කිරීම.</li>
        <li><b>ප්‍රශ්නාවලි (Questionnaires):</b> විශාල පිරිසකගෙන් තොරතුරු ලබා ගැනීමට.</li>
        <li><b>නිරීක්ෂණ (Observations):</b> පවතින පද්ධතිය ක්‍රියාත්මක වන ආකාරය නිරීක්ෂණය කිරීම.</li>
        <li><b>ලේඛන විශ්ලේෂණය (Document Analysis):</b> පවතින වාර්තා, ආකෘති පත්‍ර වැනි දේ අධ්‍යයනය කිරීම.</li>
      </ul>

      <h3>විශ්ලේෂණ මෙවලම් (Analysis Tools)</h3>
      <h4>දත්ත ගැලීම් සටහන් (Data Flow Diagrams - DFD)</h4>
      <p>DFD යනු පද්ධතියක් තුළ දත්ත ගලා යන ආකාරය (එනම්, පද්ධතියේ ක්‍රියාවලි, දත්ත ගබඩා, බාහිර පාර්ශ්වයන් සහ ඒවා අතර දත්ත හුවමාරුව) දෘශ්‍යමය වශයෙන් නිරූපණය කරන ප්‍රබල මෙවලමකි. එය පද්ධතියේ ක්‍රියාකාරීත්වය තේරුම් ගැනීමට උපකාරී වේ.</p>
      <h5>DFD සංරචක:</h5>
      <div class="overflow-x-auto my-4"><table class="w-full my-4 border">
        <thead><tr class="bg-muted"><th class="p-2 border">සංරචකය</th><th class="p-2 border">සංකේතය</th><th class="p-2 border">විස්තරය</th><tr class="bg-muted"></thead>
        <tbody>
            <tr><td class="p-2 border font-semibold">බාහිර භූතාර්ථය (External Entity)</td><td class="p-2 border">සෘජුකෝණාස්‍රය</td><td class="p-2 border">පද්ධතියට දත්ත සපයන හෝ පද්ධතියෙන් දත්ත ලබා ගන්නා, නමුත් පද්ධතියෙන් පිටත සිටින පුද්ගලයෙක්, ආයතනයක් හෝ වෙනත් පද්ධතියක් (උදා: පාරිභෝගිකයා, කළමනාකරු).</td></tr>
            <tr><td class="p-2 border font-semibold">ක්‍රියාවලිය (Process)</td><td class="p-2 border">වටකුරු කොන් සහිත සෘජුකෝණාස්‍රය හෝ වෘත්තය</td><td class="p-2 border">ආදානය කරන ලද දත්ත, වෙනත් දත්ත බවට පරිවර්තනය කරන ක්‍රියාවකි (උදා: ගණනය කිරීම, වලංගු කිරීම).</td></tr>
            <tr><td class="p-2 border font-semibold">දත්ත ගබඩාව (Data Store)</td><td class="p-2 border">විවෘත-අන්ත සෘජුකෝණාස්‍රය</td><td class="p-2 border">දත්ත ස්ථිරව හෝ තාවකාලිකව ගබඩා කර තබන ස්ථානයකි (උදා: ශිෂ්‍ය ගොනුව, නිෂ්පාදන වගුව).</td></tr>
            <tr><td class="p-2 border font-semibold">දත්ත ගැලීම (Data Flow)</td><td class="p-2 border">ඊතලයක්</td><td class="p-2 border">දත්ත ගමන් කරන දිශාව පෙන්වයි.</td></tr>
        </tbody>
      </table></div>
      
      <h4>තාර්කික දත්ත ව්‍යුහ (Logical Data Structure - LDS)</h4>
      <p>පද්ධතියේ දත්ත සහ ඒවා අතර ඇති සම්බන්ධතා නිරූපණය කරයි. මෙය පසුව ER රූප සටහනක් බවට පත් වේ.</p>
    `,
    tags: ["system analysis", "requirements", "dfd", "data flow diagram"],
    relatedQuestions: ["pq-2022-p1-26", "pq-2022-p1-27", "pq-2022-p2-2b", "pq-2023-p1-25", "pq-2023-p1-28", {id: "pq-2020-p1-23"}],
};
