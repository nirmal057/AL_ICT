
import type { Note } from "../../types";

export const note_1_3_3: Note = {
    id: "note-1-3-3",
    title: "හිමිකාරී සහ විවෘත මූලාශ්‍ර මෘදුකාංග",
    type: "html",
    content: `
      <h2>හිමිකාරී මෘදුකාංග (Proprietary) vs. විවෘත මූලාශ්‍ර මෘදුකාංග (FOSS)</h2>
      <p>මෘදුකාංග ඒවායේ බලපත්‍ර සහ බෙදාහැරීමේ අයිතිය අනුව ප්‍රධාන වර්ග දෙකකට බෙදිය හැක.</p>

      <div class="overflow-x-auto my-4"><table class="w-full border">
        <thead>
          <tr class="bg-muted">
            <th class="p-2 border">ගුණාංගය</th>
            <th class="p-2 border">හිමිකාරී මෘදුකාංග (Proprietary Software)</th>
            <th class="p-2 border">නිදහස් සහ විවෘත මූලාශ්‍ර මෘදුකාංග (FOSS)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border font-semibold">නිර්වචනය</td>
            <td class="p-2 border">මූලාශ්‍ර කේතය (Source Code) නිෂ්පාදකයාගේ රහසකි. භාවිතයට බලපත්‍රයක් (License) මිලදී ගත යුතුය. මෘදුකාංගය පිටපත් කිරීම, වෙනස් කිරීම සහ බෙදාහැරීම සීමා කර ඇත.</td>
            <td class="p-2 border">මූලාශ්‍ර කේතය පොදුවේ ලබා ගත හැක. ඕනෑම කෙනෙකුට භාවිත කිරීමට, අධ්‍යයනය කිරීමට, වෙනස් කිරීමට සහ බෙදාහැරීමට නිදහස ඇත.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">පිරිවැය</td>
            <td class="p-2 border">බොහෝ විට බලපත්‍ර ගාස්තුවක් ගෙවිය යුතුය.</td>
            <td class="p-2 border">බොහෝ විට නොමිලේ වේ (නමුත් සෑම විටම නොවේ).</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">මූලාශ්‍ර කේතය</td>
            <td class="p-2 border">ලබා ගත නොහැක.</td>
            <td class="p-2 border">ලබා ගත හැක.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">වෙනස් කිරීම</td>
            <td class="p-2 border">අවසර නැත.</td>
            <td class="p-2 border">අවසර ඇත.</td>
          </tr>
           <tr>
            <td class="p-2 border font-semibold">සහය (Support)</td>
            <td class="p-2 border">නිෂ්පාදකයා විසින් වෘත්තීය සහය (dedicated support) ලබා දේ.</td>
            <td class="p-2 border">ප්‍රජාව (Community) මගින් සහය ලබා දේ (Forums, Blogs).</td>
          </tr>
           <tr>
            <td class="p-2 border font-semibold">වාසි</td>
            <td class="p-2 border"><ul class="list-disc pl-4"><li>වෘත්තීය සහය සහ වගකීම</li><li>බොහෝ විට වඩාත් පරිශීලක-හිතකාමී සහ ඔපදැමූ (polished) වීම</li><li>ස්ථාවරත්වය සහ විශ්වසනීයත්වය පිළිබඳ සහතිකයක් තිබීම</li></ul></td>
            <td class="p-2 border"><ul class="list-disc pl-4"><li>බොහෝ විට නොමිලේ වීම</li><li>ඉහළ නම්‍යශීලී බව සහ අවශ්‍ය පරිදි වෙනස් කිරීමේ හැකියාව</li><li>විනිවිදභාවය සහ ආරක්ෂාව (කේතය ඕනෑම කෙනෙකුට පරීක්ෂා කළ හැක)</li></ul></td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">අවාසි</td>
            <td class="p-2 border"><ul class="list-disc pl-4"><li>මිල අධික වීම</li><li>පරිශීලකයාට වෙනස්කම් කළ නොහැකි වීම (Vendor lock-in)</li><li>නිෂ්පාදකයා මත සම්පූර්ණයෙන්ම රඳා පැවතීම</li></ul></td>
            <td class="p-2 border"><ul class="list-disc pl-4"><li>වෘත්තීය සහය නොමැති වීම (සමහර විට)</li><li>ඇතැම් විට භාවිතය සංකීර්ණ වීම</li><li>ගැළපීම් පිළිබඳ ගැටලු ඇතිවිය හැක</li></ul></td>
          </tr>
           <tr>
            <td class="p-2 border font-semibold">උදාහරණ</td>
            <td class="p-2 border">Microsoft Windows, Microsoft Office, Adobe Photoshop, macOS, Google Chrome</td>
            <td class="p-2 border">Linux, LibreOffice, GIMP, Android (AOSP), Mozilla Firefox, Chromium</td>
          </tr>
        </tbody>
      </table></div>
      <Activity id="activity-proprietary-foss-sorter" />
    `,
    tags: ["software", "proprietary", "open source", "foss", "free software"],
    relatedQuestions: ["pq-2023-p1-1"],
};
