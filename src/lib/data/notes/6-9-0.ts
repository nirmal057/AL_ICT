
import type { Note } from "../../types";

export const note_6_9_0: Note = {
    id: "note-6-9-0",
    title: "යෙදුම් ස්තරය (Application Layer)",
    type: "html",
    content: `
      <h2>යෙදුම් ස්තරය (Application Layer)</h2>
      <p>OSI සහ TCP/IP ආකෘති දෙකෙහිම ඉහළින්ම ඇති ස්ථරය මෙයයි. යෙදුම් මෘදුකාංග වලට ජාල සේවාවන් වෙත ප්‍රවේශ වීමට ඉඩ සලසන අතර, පරිශීලකයා සමඟ සෘජුවම අන්තර් ක්‍රියා කරයි. අප දිනපතා භාවිතා කරන බොහෝ අන්තර්ජාල සේවාවන් ක්‍රියාත්මක වන්නේ මෙම ස්ථරයේ ඇති නියමාවලි (protocols) මතය.</p>

      <h3>ප්‍රධාන යෙදුම් ස්තරයේ නියමාවලි</h3>
      <div class="overflow-x-auto my-4"><table class="w-full my-4 border">
        <thead>
          <tr class="bg-muted">
            <th class="p-2 border">නියමාවලිය</th>
            <th class="p-2 border">සම්පූර්ණ නම</th>
            <th class="p-2 border">කාර්යය</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border font-semibold">HTTP/HTTPS</td>
            <td class="p-2 border">HyperText Transfer Protocol (Secure)</td>
            <td class="p-2 border">වෙබ් පිටු සහ අනෙකුත් වෙබ් සම්පත් ඉල්ලා සිටීමට සහ ලබා ගැනීමට භාවිතා කරයි. HTTPS මගින් දත්ත සුරක්ෂිතව (encrypted) සම්ප්‍රේෂණය කරයි.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">FTP</td>
            <td class="p-2 border">File Transfer Protocol</td>
            <td class="p-2 border">සේවාදායකයක් (server) සහ සේවාලාභියෙකු (client) අතර ගොනු හුවමාරු කර ගැනීමට භාවිතා කරයි.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">SMTP</td>
            <td class="p-2 border">Simple Mail Transfer Protocol</td>
            <td class="p-2 border">විද්‍යුත් තැපැල් (e-mail) යැවීම සඳහා භාවිතා කරන ප්‍රධාන නියමාවලියයි.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">POP3/IMAP</td>
            <td class="p-2 border">Post Office Protocol / Internet Message Access Protocol</td>
            <td class="p-2 border">විද්‍යුත් තැපැල් සේවාදායකයකින් ඊ-මේල් ලබා ගැනීම (receive) සඳහා භාවිතා කරයි.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">DNS</td>
            <td class="p-2 border">Domain Name System</td>
            <td class="p-2 border">මිනිසුන්ට කියවිය හැකි වසම් නාම (domain names - උදා: www.google.com) පරිගණකයට තේරුම් ගත හැකි IP ලිපින (උදා: 172.217.167.78) බවට පරිවර්තනය කරයි.</td>
          </tr>
           <tr>
            <td class="p-2 border font-semibold">DHCP</td>
            <td class="p-2 border">Dynamic Host Configuration Protocol</td>
            <td class="p-2 border">ජාලයකට සම්බන්ධ වන උපාංග වලට IP ලිපිනය, උපජාල ආවරණය (subnet mask) වැනි ජාල වින්‍යාසයන් ස්වයංක්‍රීයව ලබා දෙයි.</td>
          </tr>
        </tbody>
      </table></div>
    `,
    tags: ["application layer", "http", "ftp", "smtp", "dns", "dhcp"],
    relatedQuestions: ["pq-2022-p1-22", { id: "pq-2011-p1-16" }, {id:"pq-2013-p1-36"}, {id: "pq-2012-p1-6"}, {id:"pq-2012-p1-8"}],
};

    

    
