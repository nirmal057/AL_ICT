
import type { Note } from "../../types";

export const note_7_2_0: Note = {
    id: "note-7-2-0",
    title: "විවිධ වර්ගයේ තොරතුරු පද්ධති",
    type: "html",
    content: `
      <h2>විවිධ වර්ගයේ තොරතුරු පද්ධති (Different Types of Information Systems)</h2>
      <p>ආයතනයක විවිධ මට්ටම්වල සහ විවිධ කාර්යයන් සඳහා විශේෂිත වූ තොරතුරු පද්ධති වර්ග කිහිපයක් ඇත.</p>
      
      <div class="overflow-x-auto"><table class="w-full my-4 border">
        <thead>
          <tr class="bg-muted">
            <th class="p-2 border">පද්ධති වර්ගය (Abbreviation)</th>
            <th class="p-2 border">සම්පූර්ණ නම</th>
            <th class="p-2 border">ප්‍රධාන කාර්යය</th>
            <th class="p-2 border">පරිශීලකයා</th>
            <th class="p-2 border">උදාහරණය</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border font-semibold">TPS</td>
            <td class="p-2 border">ගනුදෙනු සැකසුම් පද්ධති (Transaction Processing System)</td>
            <td class="p-2 border">දෛනික, පුනරාවර්තන ගනුදෙනු වාර්තා කිරීම සහ සැකසීම.</td>
            <td class="p-2 border">මෙහෙයුම් මට්ටමේ සේවකයින් (Operational Staff)</td>
            <td class="p-2 border">ATM යන්ත්‍රයක්, වෙළඳසැලක බිල්පත් කරන පද්ධතිය (POS).</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">MIS</td>
            <td class="p-2 border">කළමනාකරණ තොරතුරු පද්ධති (Management Information System)</td>
            <td class="p-2 border">TPS වලින් ලැබෙන දත්ත සාරාංශ කර කළමනාකරුවන්ට වාර්තා ලෙස ලබා දීම.</td>
            <td class="p-2 border">මධ්‍යම මට්ටමේ කළමනාකරුවන් (Middle Managers)</td>
            <td class="p-2 border">මාසික විකුණුම් වාර්තාව, සේවක පැමිණීමේ සාරාංශය.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">DSS</td>
            <td class="p-2 border">තීරණ සහාය පද්ධති (Decision Support System)</td>
            <td class="p-2 border">අසම්පූර්ණ දත්ත විශ්ලේෂණය කර, ව්‍යුහගත නොවූ (unstructured) තීරණ ගැනීමට සහාය වීම.</td>
            <td class="p-2 border">ජ්‍යෙෂ්ඨ කළමනාකරුවන් (Senior Managers)</td>
            <td class="p-2 border">නව නිෂ්පාදනයක් වෙළඳපොළට හඳුන්වා දීමේදී එහි බලපෑම විශ්ලේෂණය කරන පද්ධතියක්.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">ESS</td>
            <td class="p-2 border">විධායක සහාය පද්ධති (Executive Support System)</td>
            <td class="p-2 border">ආයතනයේ සමස්ත ක්‍රියාකාරීත්වය පිළිබඳ ඉහළ මට්ටමේ, සාරාංශගත දර්ශනයක් ලබා දීම.</td>
            <td class="p-2 border">විධායක නිලධාරීන් (Executives, CEO)</td>
            <td class="p-2 border">ආයතනයේ ලාභය, වෙළඳපොල කොටස වැනි දේ ප්‍රස්තාරිකව පෙන්වන උපකරණ පුවරුවක් (Dashboard).</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">OAS</td>
            <td class="p-2 border">කාර්යාල ස්වයංකරණ පද්ධති (Office Automation System)</td>
            <td class="p-2 border">කාර්යාලීය දෛනික කටයුතු (ඊ-මේල්, ලේඛන සැකසීම, කාලසටහන් කළමනාකරණය) කාර්යක්ෂම කිරීම.</td>
            <td class="p-2 border">සියලුම කාර්යාල සේවකයින්</td>
            <td class="p-2 border">Microsoft Office, Google Workspace.</td>
          </tr>
           <tr>
            <td class="p-2 border font-semibold">ERPS</td>
            <td class="p-2 border">ව්‍යවසාය සම්පත් සැකසුම් පද්ධති (Enterprise Resource Planning System)</td>
            <td class="p-2 border">ආයතනයක සියලුම දෙපාර්තමේන්තු (මානව සම්පත්, මූල්‍ය, නිෂ්පාදන) එකම පද්ධතියක් යටතට ගෙන ඒම.</td>
            <td class="p-2 border">සමස්ත ආයතනයම</td>
            <td class="p-2 border">SAP, Oracle ERP.</td>
          </tr>
        </tbody>
      </table></div>
    `,
    tags: ["system types", "tps", "mis", "dss", "ess"],
    relatedQuestions: ["pq-2022-p1-24", "pq-2021-p1-21"],
};


