
import type { Note } from "../../types";

export const note_3_1_1: Note = {
    id: "note-3-1-1",
    title: "සංඛ්‍යා පද්ධති හැඳින්වීම",
    type: "html",
    content: `
      <h2>හැඳින්වීම: පරිගණකයේ භාෂාව</h2>
      <p>අප චිත්‍රපට නරඹන විට, ගීත අසන විට, හෝ සරලව අකුරක් යතුරුලියනය කරන විට, පරිගණකය මේ සියල්ල තේරුම් ගන්නේ කෙසේද? පරිගණකය යනු විද්‍යුතයෙන් ක්‍රියා කරන ඉලෙක්ට්‍රොනික උපකරණයකි. එයට තේරුම් ගත හැක්කේ සංඥා දෙකක් පමණි: විදුලිය ඇත (ON) සහ විදුලිය නැත (OFF).</p>
      <p>මෙම අවස්ථා දෙක නිරූපණය කිරීමට, පරිගණකය ද්විමය (Binary) නම් සංඛ්‍යා පද්ධතියක් භාවිතා කරයි.</p>
      <ul class="list-disc pl-5">
          <li>විදුලිය ඇත (ON) = 1</li>
          <li>විදුලිය නැත (OFF) = 0</li>
      </ul>
      <p>ඔබ දකින සෑම දෙයක්ම - අකුරු, පින්තූර, වර්ණ - අවසානයේදී මෙම 1 සහ 0 අනුක්‍රමයන් බවට පරිවර්තනය වේ. උදාහරණයක් ලෙස, ඔබ වෙබ් අඩවියක දකින වර්ණයක් යනු රතු, කොළ, සහ නිල් වර්ණ වල තීව්‍රතාව නිරූපණය කරන ද්විමය සංඛ්‍යා සමූහයකි. පහත මෙවලම භාවිතයෙන් වර්ණ වෙනස් කර එය ද්විමය ලෙස නිරූපණය වන ආකාරය බලන්න.</p>
      <Activity id="activity-color-picker-tool" />

      <h2 class="mt-8">සංඛ්‍යා පද්ධති (Number Systems)</h2>
      <p>මිනිසුන් වන අපට දත්ත කියවීමට සහ තේරුම් ගැනීමට පහසු වන ලෙස ද්විමය ක්‍රමයට අමතරව තවත් සංඛ්‍යා පද්ධති කිහිපයක් පරිගණක විද්‍යාවේදී භාවිතා වේ.</p>
      <div class="overflow-x-auto"><table class="w-full my-4 border">
        <thead>
          <tr class="bg-muted">
            <th class="p-2 border">සංඛ්‍යා පද්ධතිය</th>
            <th class="p-2 border">පාදය (Base)</th>
            <th class="p-2 border">භාවිතා කරන ඉලක්කම්/සංකේත</th>
            <th class="p-2 border">භාවිතය</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border font-semibold">දශම (Decimal)</td>
            <td class="p-2 border text-center">10</td>
            <td class="p-2 border">0, 1, 2, 3, 4, 5, 6, 7, 8, 9</td>
            <td class="p-2 border">මිනිසුන් එදිනෙදා ජීවිතයේදී භාවිතා කරයි.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">ද්විමය (Binary)</td>
            <td class="p-2 border text-center">2</td>
            <td class="p-2 border">0, 1</td>
            <td class="p-2 border">පරිගණකයේ දෘඪාංග මට්ටමින් දත්ත නිරූපණය කරයි.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">අෂ්ටම (Octal)</td>
            <td class="p-2 border text-center">8</td>
            <td class="p-2 border">0, 1, 2, 3, 4, 5, 6, 7</td>
            <td class="p-2 border">දිගු ද්විමය සංඛ්‍යා කෙටි කර දැක්වීමට (දැන් භාවිතය අඩුයි).</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">ෂඩ් දශම (Hexadecimal)</td>
            <td class="p-2 border text-center">16</td>
            <td class="p-2 border">0-9, A, B, C, D, E, F</td>
            <td class="p-2 border">දිගු ද්විමය සංඛ්‍යා ඉතා කෙටියෙන් සහ පහසුවෙන් නිරූපණය කිරීමට. (මතක ලිපින, වර්ණ කේත සඳහා බහුලව යොදා ගනී).</td>
          </tr>
        </tbody>
      </table></div>

      <h3 class="mt-8 font-bold text-lg">ස්ථානීය අගය (Positional Value) යනු කුමක්ද?</h3>
      <p>ඕනෑම සංඛ්‍යා පද්ධතියක, ඉලක්කමක වටිනාකම තීරණය වන්නේ එය පිහිටන 'ස්ථානය' මතයි. අපි එදිනෙදා භාවිතා කරන දශම ක්‍රමය (පාදය 10) සලකා බලමු. '472' යන සංඛ්‍යාවේ '2' යනු 'එක ඒවා' 2ක්, '7' යනු 'දස ඒවා' 7ක්, සහ '4' යනු 'සිය ඒවා' 4කි. මෙම සංකල්පය සියලුම සංඛ්‍යා පද්ධති සඳහා පොදු වේ. වෙනසකට ඇත්තේ පාදය පමණි.</p>
      <p>පහත දැක්වෙන "Positional Abacus" මෙවලම භාවිතයෙන්, විවිධ පාද (base) සඳහා ඉලක්කම් වෙනස් කිරීමෙන් මුළු අගය වෙනස් වන ආකාරය නිරීක්ෂණය කරන්න.</p>
      <Activity id="activity-positional-abacus" />
    `,
    tags: ["number systems", "binary", "decimal", "octal", "hexadecimal", "positional value"],
    relatedQuestions: []
};

    