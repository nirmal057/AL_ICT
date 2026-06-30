
import type { Note } from "../../types";

export const note_6_10_0: Note = {
    id: "note-6-10-0",
    title: "ජාල නිර්මිත යොමු ආකෘති (OSI සහ TCP/IP)",
    type: "html",
    content: `
      <h2>ජාල නිර්මිත යොමු ආකෘති (Network Architecture Reference Models)</h2>
      <p>ජාල නිර්මිතයක් යනු ජාලයක් සැලසුම් කිරීම සහ ගොඩනැගීම සඳහා වූ සංකල්පීය රාමුවකි. එය ජාලයේ සංරචක, ඒවායේ කාර්යයන්, සහ ඒවා එකිනෙක සම්බන්ධ වන ආකාරය නිර්වචනය කරයි. විවිධ නිෂ්පාදකයින්ගේ උපාංග එකිනෙක හා ගැටලුවකින් තොරව ක්‍රියා කිරීම (interoperability) සහතික කිරීම සඳහා, OSI සහ TCP/IP වැනි සම්මත යොමු ආකෘති නිර්මාණය කර ඇත.</p>

      <h3>OSI ආකෘතිය (Open Systems Interconnection Model)</h3>
      <p>මෙය ජාල සන්නිවේදනය ස්ථර හතකට (7 layers) බෙදා දක්වන සංකල්පීය ආකෘතියකි. එය ජාලකරණයේ සෑම පියවරක්ම ඉතා විස්තරාත්මකව නිර්වචනය කරන අතර, ප්‍රායෝගිකව ක්‍රියාත්මක කරනවාට වඩා, ජාලකරණය ඉගැන්වීම සහ තේරුම් ගැනීම සඳහා යොමු ආකෘතියක් ලෙස බහුලව භාවිතා වේ.</p>
      
      <h3>TCP/IP ආකෘතිය (Transmission Control Protocol/Internet Protocol Model)</h3>
      <p>මෙය OSI ආකෘතියට වඩා ප්‍රායෝගික ආකෘතියකි. අන්තර්ජාලය ගොඩනැගී ඇත්තේ මෙම ආකෘතිය මතය. එය ස්ථර හතරකින් (සමහර විට පහකින්) සමන්විත වේ. OSI ආකෘතියේ ඉහළ ස්ථර කිහිපයක කාර්යයන් TCP/IP ආකෘතියේ තනි යෙදුම් ස්ථරයකට ඒකාබද්ධ කර ඇත.</p>
      
      <h3>OSI සහ TCP/IP ආකෘති සැසඳීම</h3>
      <div class="overflow-x-auto my-4"><table class="w-full my-4 border">
        <thead>
          <tr class="bg-muted">
            <th class="p-2 border">OSI ආකෘතිය (7 ස්ථර)</th>
            <th class="p-2 border">TCP/IP ආකෘතිය (4 ස්ථර)</th>
            <th class="p-2 border">ප්‍රධාන කාර්යය / නියමාවලි</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="p-2 border">7. යෙදුම් (Application)</td><td rowspan="3" class="p-2 border align-middle font-semibold">4. යෙදුම් (Application)</td><td rowspan="3" class="p-2 border align-middle">HTTP, FTP, SMTP, DNS</td></tr>
          <tr><td class="p-2 border">6. ඉදිරිපත් කිරීම (Presentation)</td></tr>
          <tr><td class="p-2 border">5. සැසි (Session)</td></tr>
          <tr><td class="p-2 border">4. ප්‍රවාහන (Transport)</td><td class="p-2 border font-semibold">3. ප්‍රවාහන (Transport)</td><td class="p-2 border">TCP, UDP</td></tr>
          <tr><td class="p-2 border">3. ජාල (Network)</td><td class="p-2 border font-semibold">2. අන්තර්ජාල (Internet)</td><td class="p-2 border">IP, ICMP</td></tr>
          <tr><td class="p-2 border">2. දත්ත සබැඳි (Data Link)</td><td rowspan="2" class="p-2 border align-middle font-semibold">1. ජාල ප්‍රවේශ (Network Access)</td><td rowspan="2" class="p-2 border align-middle">Ethernet, Wi-Fi, MAC ලිපිනය</td></tr>
          <tr><td class="p-2 border">1. භෞතික (Physical)</td></tr>
        </tbody>
      </table></div>
    `,
    tags: ["network architecture", "osi model", "tcp/ip model", "layers"],
    relatedQuestions: ["pq-2022-p1-20"],
};
