
import type { Note } from "../../types";

export const note_4_1_0: Note = {
    id: "note-4-1-0",
    title: "අංකිත තාර්කික ද්වාර",
    type: "html",
    content: `
      <h2>අංකිත තාර්කික ද්වාර (Digital Logic Gates)</h2>
      <p>තාර්කික ද්වාරයක් යනු බූලීය ශ්‍රිතයක් ක්‍රියාත්මක කරන මූලික ඉලෙක්ට්‍රොනික පරිපථයකි. එයට ආදාන (inputs) එකක් හෝ කිහිපයක් සහ එක් ප්‍රතිදානයක් (output) ඇත. පරිගණකයේ මධ්‍ය සැකසුම් ඒකකය (CPU) සහ අනෙකුත් සියලුම අංකිත උපාංග සෑදී ඇත්තේ මෙම මූලික තැනුම් ඒකක (building blocks) මිලියන ගණනක් එකතු කිරීමෙනි.</p>
      
      <h3>මූලික ද්වාර (Basic Gates)</h3>
      <div class="grid md:grid-cols-3 gap-4 my-4">
        <div class="p-4 border rounded-lg">
          <h4 class="font-bold">NOT Gate (Inverter)</h4>
          <p class="text-sm">ආදානයට ප්‍රතිවිරුද්ධ ප්‍රතිදානය ලබා දෙයි. ආදානය 1 නම්, ප්‍රතිදානය 0 වේ. ආදානය 0 නම්, ප්‍රතිදානය 1 වේ.</p>
        </div>
        <div class="p-4 border rounded-lg">
          <h4 class="font-bold">AND Gate</h4>
          <p class="text-sm">සියලුම ආදානයන් 1 නම් පමණක් ප්‍රතිදානය 1 වේ. එක් ආදානයක් හෝ 0 නම්, ප්‍රතිදානය 0 වේ.</p>
        </div>
        <div class="p-4 border rounded-lg">
          <h4 class="font-bold">OR Gate</h4>
          <p class="text-sm">ඕනෑම එක් ආදානයක් හෝ 1 නම්, ප්‍රතිදානය 1 වේ. සියලුම ආදානයන් 0 නම් පමණක් ප්‍රතිදානය 0 වේ.</p>
        </div>
      </div>

      <h3>ඒකාබද්ධ ද්වාර (Combined Gates)</h3>
       <div class="grid md:grid-cols-2 gap-4 my-4">
        <div class="p-4 border rounded-lg">
          <h4 class="font-bold">NAND Gate (NOT-AND)</h4>
          <p class="text-sm">AND ද්වාරයේ ප්‍රතිදානයට NOT ද්වාරයක් යෙදීමෙන් සෑදේ. එනම්, AND ද්වාරයේ ප්‍රතිඵලයේ ප්‍රතිවිරුද්ධයයි.</p>
        </div>
        <div class="p-4 border rounded-lg">
          <h4 class="font-bold">NOR Gate (NOT-OR)</h4>
          <p class="text-sm">OR ද්වාරයේ ප්‍රතිදානයට NOT ද්වාරයක් යෙදීමෙන් සෑදේ. එනම්, OR ද්වාරයේ ප්‍රතිඵලයේ ප්‍රතිවිරුද්ධයයි.</p>
        </div>
      </div>

      <h3>විශේෂ ද්වාර (Special Gates)</h3>
       <div class="grid md:grid-cols-2 gap-4 my-4">
        <div class="p-4 border rounded-lg">
          <h4 class="font-bold">XOR Gate (Exclusive OR)</h4>
          <p class="text-sm">ආදානයන් දෙක අසමාන විට (එකක් 1, අනෙක 0) පමණක් ප්‍රතිදානය 1 වේ.</p>
        </div>
        <div class="p-4 border rounded-lg">
          <h4 class="font-bold">XNOR Gate (Exclusive NOR)</h4>
          <p class="text-sm">XOR ද්වාරයේ ප්‍රතිදානයේ ප්‍රතිවිරුද්ධයයි. ආදානයන් දෙක සමාන විට (දෙකම 0 හෝ දෙකම 1) ප්‍රතිදානය 1 වේ.</p>
        </div>
      </div>

      <h3>සර්වත්‍ර ද්වාර (Universal Gates)</h3>
      <p><b>NAND</b> සහ <b>NOR</b> ද්වාර "සර්වත්‍ර ද්වාර" ලෙස හැඳින්වේ. මන්ද, මෙම ද්වාර වර්ග දෙකෙන් එකක් පමණක් භාවිතා කර, අනෙකුත් සියලුම මූලික ද්වාර (AND, OR, NOT) සහ ඒකාබද්ධ ද්වාර නිර්මාණය කළ හැකි බැවිනි. මෙය පරිපථ නිර්මාණයේදී නිෂ්පාදන ක්‍රියාවලිය සරල කිරීමට බෙහෙවින් උපකාරී වේ.</p>
    `,
    tags: ["logic gates", "digital circuits", "AND", "OR", "NOT", "NAND", "NOR", "XOR"],
    relatedQuestions: ["pq-2022-p1-9", {id:"pq-2013-p1-2"}, {id:"pq-2014-p1-13"}],
};
