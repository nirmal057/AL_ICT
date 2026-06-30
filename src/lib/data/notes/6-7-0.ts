
import type { Note } from "../../types";

export const note_6_7_0: Note = {
    id: "note-6-7-0",
    title: "ජාල අන්තර්සම්බන්ධ කිරීම",
    type: "html",
    content: `
      <h2>ජාල අන්තර්සම්බන්ධ කිරීම (Network Interconnection)</h2>
      <p>විවිධ ජාල හෝ ජාල කොටස් එකිනෙකට සම්බන්ධ කර, විශාල ජාලයක් නිර්මාණය කිරීමට සහ දත්ත හුවමාරුවට පහසුකම් සැලසීමට විවිධ ජාලකරණ උපාංග භාවිතා කරයි.</p>

      <div class="overflow-x-auto my-4"><table class="w-full my-4 border">
        <thead>
          <tr class="bg-muted">
            <th class="p-2 border">උපාංගය</th>
            <th class="p-2 border">OSI ස්ථරය</th>
            <th class="p-2 border">කාර්යය</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border font-semibold">පුනර්කරකය (Repeater)</td>
            <td class="p-2 border">1 - භෞතික (Physical)</td>
            <td class="p-2 border">දුර වැඩිවත්ම දුර්වල වන සංඥා නැවත ජනනය කර (regenerate) ප්‍රබල කර, ජාලයක දුර වැඩි කිරීමට භාවිතා කරයි.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">නාභිය (Hub)</td>
            <td class="p-2 border">1 - භෞතික (Physical)</td>
            <td class="p-2 border">එක් වරායකට (port) ලැබෙන දත්ත, අනෙක් සියලුම වරායන් වෙත විකාශනය (broadcast) කරයි. මෙය "බුද්ධිමත් නොවන" උපකරණයකි.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">ස්විචය (Switch)</td>
            <td class="p-2 border">2 - දත්ත සබැඳි (Data Link)</td>
            <td class="p-2 border">MAC ලිපින වගුවක් භාවිතා කර, ලැබෙන දත්ත රාමුව (frame) අදාළ ගමනාන්ත වරායට පමණක් යොමු කරයි. නාභියකට වඩා කාර්යක්ෂම වන අතර, අනවශ්‍ය ජාල තදබදය (traffic) අඩු කරයි.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">මාර්ග හසුරුව (Router)</td>
            <td class="p-2 border">3 - ජාල (Network)</td>
            <td class="p-2 border">විවිධ ජාල (උදා: ඔබගේ ගෘහස්ථ LAN ජාලය සහ අන්තර්ජාලය) එකිනෙකට සම්බන්ධ කරයි. IP ලිපින භාවිතා කර, දත්ත පොදි (packets) සඳහා හොඳම මාර්ගය (best path) තීරණය කර යොමු කරයි.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">දොරටු මග (Gateway)</td>
            <td class="p-2 border">සියලුම ස්ථර</td>
            <td class="p-2 border">සම්පූර්ණයෙන්ම වෙනස් නියමාවලි (protocols) භාවිතා කරන ජාල දෙකක් අතර සන්නිවේදනයට ඉඩ සලසයි (උදා: LAN ජාලයක් සහ PSTN ජාලයක් අතර).</td>
          </tr>
        </tbody>
      </table></div>

      <h3>උපජාලකරණය (Subnetting)</h3>
      <p>උපජාලකරණය යනු විශාල IP ජාලයක්, "උපජාල" (subnets) නමින් හැඳින්වෙන කුඩා, කළමනාකරණය කළ හැකි ජාල කොටස් වලට බෙදීමේ ක්‍රියාවලියයි. මෙය සිදු කරන්නේ, ජාල ලිපිනයේ සත්කාරක (host) කොටසින් බිටු කිහිපයක් ලබාගෙන, ඒවා උපජාල කොටසක් ලෙස භාවිතා කිරීමෙනි.</p>
      <p><b>වාසි:</b></p>
      <ul>
        <li><b>ජාල කාර්යසාධනය වැඩි දියුණු කිරීම:</b> විකාශන ගමනාගමනය (broadcast traffic) එක් එක් උපජාලයට සීමා කිරීමෙන් සමස්ත ජාල තදබදය අඩු කරයි.</li>
        <li><b>ජාල ආරක්ෂාව වැඩි දියුණු කිරීම:</b> එක් උපජාලයකට එල්ල වන ආරක්ෂක තර්ජනයක්, අනෙක් උපජාල වලට පැතිරීම වැළැක්විය හැක.</li>
        <li><b>IP ලිපින කළමනාකරණය පහසු කිරීම.</b></li>
      </ul>
      <p>උපජාලය හඳුනාගැනීම සඳහා <b>උපජාල ආවරණයක් (Subnet Mask)</b> භාවිතා කරයි.</p>
    `,
    tags: ["interconnection", "hub", "switch", "router", "gateway", "subnetting"],
    relatedQuestions: ["pq-2022-p1-18", "pq-2022-p2-6b", "pq-2019-p1-21", {id:"pq-2013-p1-41"}, {id:"pq-2013-p1-46"}, {id: "pq-2015-p1-20"}],
};

    