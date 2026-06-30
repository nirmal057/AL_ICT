
import type { Note } from "../../types";

export const note_7_1_0: Note = {
    id: "note-7-1-0",
    title: "පද්ධති සංකල්ප (System Concepts)",
    type: "html",
    content: `
      <h2>පද්ධතියක් යනු කුමක්ද?</h2>
      <p>පද්ධතියක් යනු පොදු අරමුණක් හෝ පරමාර්ථයක් ඉටු කර ගැනීම සඳහා එකිනෙක හා සම්බන්ධව ක්‍රියා කරන, අන්තර්ක්‍රියාකාරී කොටස් (components) සමූහයකි. සෑම පද්ධතියක්ම නිශ්චිත ආදානයන් (inputs) ලබාගෙන, ඒවා සකසා, නිශ්චිත ප්‍රතිදානයන් (outputs) ලබා දෙයි.</p>

      <h3>පද්ධතියක මූලික ලක්ෂණ</h3>
      <ul>
        <li><b>සංරචක (Components):</b> පද්ධතියක් සෑදී ඇති කොටස්.</li>
        <li><b>මායිම (Boundary):</b> පද්ධතිය එහි පරිසරයෙන් වෙන් කරන සීමාව.</li>
        <li><b>පරිසරය (Environment):</b> පද්ධතියේ මායිමෙන් පිටත ඇති සියල්ල.</li>
        <li><b>ආදාන (Inputs):</b> පරිසරයෙන් පද්ධතියට ඇතුළු වන දේ.</li>
        <li><b>ප්‍රතිදාන (Outputs):</b> පද්ධතියෙන් පරිසරයට නිකුත් කරන දේ.</li>
        <li><b>අරමුණ (Purpose):</b> පද්ධතිය පවතින හේතුව හෝ ඉටු කරන කාර්යය.</li>
        <li><b>සීමා (Constraints):</b> පද්ධතිය ක්‍රියාත්මක විය යුතු සීමාවන්.</li>
      </ul>

      <h3>පද්ධති වර්ගීකරණය</h3>
      <div class="overflow-x-auto"><table class="w-full my-4 border">
        <thead>
          <tr class="bg-muted">
            <th class="p-2 border">වර්ගීකරණ නිර්ණායකය</th>
            <th class="p-2 border">වර්ග</th>
            <th class="p-2 border">විස්තරය සහ උදාහරණ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border font-semibold" rowspan="2">පරිසරය සමඟ අන්තර්ක්‍රියා</td>
            <td class="p-2 border"><b>විවෘත පද්ධති (Open Systems)</b></td>
            <td class="p-2 border">තම පරිසරය සමඟ අන්තර්ක්‍රියා කරයි (ආදාන ලබාගනී, ප්‍රතිදාන ලබාදෙයි). උදා: ව්‍යාපාරික ආයතනයක්, මිනිස් සිරුර.</td>
          </tr>
          <tr>
            <td class="p-2 border"><b>සංවෘත පද්ධති (Closed Systems)</b></td>
            <td class="p-2 border">පරිසරයෙන් හුදකලා වී ක්‍රියා කරයි. ප්‍රායෝගික ලෝකයේ දුර්ලභ වේ. උදා: රසායනික ප්‍රතික්‍රියාවක් සිදුවන මුද්‍රා තැබූ භාජනයක්.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold" rowspan="2">භෞතික පැවැත්ම</td>
            <td class="p-2 border"><b>භෞතික පද්ධති (Physical Systems)</b></td>
            <td class="p-2 border">ස්පර්ශ කළ හැකි, ද්‍රව්‍යමය කොටස් වලින් සමන්විත වේ. උදා: පරිගණකයක්, මෝටර් රථයක්.</td>
          </tr>
          <tr>
            <td class="p-2 border"><b>වියුක්ත පද්ධති (Abstract Systems)</b></td>
            <td class="p-2 border">සංකල්ප, නීති, සහ ක්‍රියා පටිපාටි වලින් සමන්විත වේ. උදා: ගණිතමය ආකෘතියක්, භාෂාවක්.</td>
          </tr>
           <tr>
            <td class="p-2 border font-semibold" rowspan="2">මිනිස් මැදිහත්වීම</td>
            <td class="p-2 border"><b>ස්වභාවික පද්ධති (Natural Systems)</b></td>
            <td class="p-2 border">ස්වභාවධර්මය විසින් නිර්මාණය කර ඇත. උදා: සෞරග්‍රහ මණ්ඩලය, පරිසර පද්ධතියක්.</td>
          </tr>
          <tr>
            <td class="p-2 border"><b>කෘත්‍රිම / මිනිසා විසින් සාදන ලද පද්ධති (Man-made Systems)</b></td>
            <td class="p-2 border">මිනිසා විසින් නිශ්චිත අරමුණක් සඳහා නිර්මාණය කර ඇත. උදා: ගොඩනැගිල්ලක්, පුස්තකාල පද්ධතියක්.</td>
          </tr>
        </tbody>
      </table></div>
    `,
    tags: ["system concepts", "open systems", "closed systems", "physical systems", "abstract systems"],
    relatedQuestions: [{ id: "pq-2011-p1-11" }, { id: "pq-2012-p1-10" }, {id:"pq-2012-p1-34"}],
};

    

    

    