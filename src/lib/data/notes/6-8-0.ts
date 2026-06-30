
import type { Note } from "../../types";

export const note_6_8_0: Note = {
    id: "note-6-8-0",
    title: "ප්‍රවාහන නියමාවලි (TCP සහ UDP)",
    type: "html",
    content: `
      <h2>ප්‍රවාහන නියමාවලි (Transport Protocols)</h2>
      <p>TCP/IP ආකෘතියේ ප්‍රවාහන ස්ථරයේ (Transport Layer) ප්‍රධාන කාර්යය වන්නේ, යෙදුම් දෙකක් අතර දත්ත හුවමාරු වන ආකාරය කළමනාකරණය කිරීමයි. මේ සඳහා භාවිතා වන ප්‍රධාන නියමාවලි දෙක වන්නේ TCP සහ UDP ය.</p>
      
      <div class="overflow-x-auto my-4"><table class="w-full my-4 border">
        <thead>
          <tr class="bg-muted">
            <th class="p-2 border">ලක්ෂණය</th>
            <th class="p-2 border">TCP (Transmission Control Protocol)</th>
            <th class="p-2 border">UDP (User Datagram Protocol)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border font-semibold">සම්බන්ධතා වර්ගය</td>
            <td class="p-2 border"><b>සම්බන්ධතා-නැඹුරු (Connection-Oriented):</b> දත්ත යැවීමට පෙර, යවන්නා සහ ලබන්නා අතර "handshake" ක්‍රියාවලියක් හරහා ස්ථාවර සම්බන්ධතාවයක් ඇති කර ගනී.</td>
            <td class="p-2 border"><b>සම්බන්ධතා-විරහිත (Connectionless):</b> කිසිදු පූර්ව සම්බන්ධතාවයක් ඇති කර නොගෙන, දත්ත සෘජුවම යවයි.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">විශ්වසනීයත්වය</td>
            <td class="p-2 border"><b>ඉහළ විශ්වසනීයත්වයක් ඇත.</b> දත්ත පොදි (packets) නිවැරදි අනුපිළිවෙලට, දෝෂ රහිතව ලැබුණු බවට සහතික කරයි. නැතිවූ පොදි නැවත යවයි.</td>
            <td class="p-2 border"><b>විශ්වසනීයත්වයක් නැත.</b> දත්ත ලැබේද, නැතිවේද, හෝ නිවැරදි අනුපිළිවෙලට ලැබේද යන්න පිළිබඳව සහතිකයක් නොදේ.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">වේගය</td>
            <td class="p-2 border">සම්බන්ධතාවය ස්ථාපිත කිරීම සහ දෝෂ පරීක්ෂාව නිසා UDP වලට වඩා <b>මන්දගාමී</b> වේ.</td>
            <td class="p-2 border">අමතර ක්‍රියාවලි නොමැති නිසා TCP වලට වඩා <b>වේගවත්</b> වේ.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">භාවිතා වන යෙදුම්</th>
            <td class="p-2 border">දත්තවල නිරවද්‍යතාව ඉතා වැදගත් වන යෙදුම්. <br/><b>උදා:</b> වෙබ් ගවේෂණය (HTTP), ගොනු හුවමාරුව (FTP), ඊ-තැපෑල (SMTP).</td>
            <td class="p-2 border">වේගය ඉතා වැදගත් වන, සුළු දත්ත නැතිවීමක් ගැටලුවක් නොවන යෙදුම්.<br/><b>උදා:</b> මාර්ගගත ක්‍රීඩා (Online Gaming), වීඩියෝ සහ හඬ ප්‍රවාහය (Video/Voice Streaming), DNS.</td>
          </tr>
        </tbody>
      </table></div>
    `,
    tags: ["transport protocols", "tcp", "udp"],
    relatedQuestions: ["pq-2022-p1-15", "pq-2021-p1-17", { id: "pq-2011-p1-19" }, {id: "pq-2015-p1-18"}],
};

    