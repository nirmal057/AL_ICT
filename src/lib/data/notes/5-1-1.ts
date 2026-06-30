
import type { Note } from "../../types";

export const note_5_1_1: Note = {
    id: "note-5-1-1",
    title: "මෙහෙයුම් පද්ධතියක් යනු කුමක්ද?",
    type: "html",
    content: `
      <h2>1. මෙහෙයුම් පද්ධතියක් යනු කුමක්ද? (What is an Operating System?)</h2>
      <p>සරලවම කිවහොත්, මෙහෙයුම් පද්ධතියක් යනු පරිගණක දෘඪාංග (Hardware) සහ පරිශීලකයා (User) අතර අතරමැදියෙකු ලෙස ක්‍රියා කරන, අතිශය වැදගත් පද්ධති මෘදුකාංගයකි. එය පරිගණකයේ 'ප්‍රධාන කළමනාකරු' හෝ 'අධ්‍යක්ෂක' ලෙස සිතිය හැක. එය නොමැතිව, පරිගණකයේ ඇති භෞතික කොටස් (දෘඪාංග) කිසිවක් ක්‍රියාත්මක කළ නොහැක.</p>
      
      <div class="my-6 p-4 border-l-4 border-primary bg-muted/50">
        <h4 class="font-bold">උපමාවක්: අවන්හලක ප්‍රධාන සූපවේදියා</h4>
        <p>පරිගණකයක් යනු කාර්යබහුල අවන්හලක් ලෙස සිතන්න.
        <ul class="list-disc pl-5 mt-2 text-sm">
          <li><b>දෘඪාංග (Hardware):</b> ලිප්, උදුන්, පිහි වැනි කුස්සියේ ඇති උපකරණ.</li>
          <li><b>යෙදුම් මෘදුකාංග (Application Software):</b> වට්ටෝරු පොත (උදා: Word, Photoshop).</li>
          <li><b>පරිශීලකයා (User):</b> ආහාර ඇණවුම් කරන පාරිභෝගිකයා.</li>
          <li><b>මෙහෙයුම් පද්ධතිය (OS):</b> ප්‍රධාන සූපවේදියා (Head Chef).</li>
        </ul>
        <p class="mt-2">ප්‍රධාන සූපවේදියා සෑම දෙයක්ම උයන්නේ නැත. නමුත් ඔහු අනෙක් සූපවේදීන්ට (CPU, RAM) උපදෙස් දෙයි, කුමන වට්ටෝරුවක් (ක්‍රියාවලියක්) කවදා ක්‍රියාත්මක කළ යුතුද යන්න තීරණය කරයි, සහ මුළුතැන්ගෙයම සුමටව ක්‍රියාත්මක වන බවට වග බලා ගනී. මෙහෙයුම් පද්ධතිය ද එලෙසම, පරිගණකයේ සියලුම සම්පත් කළමනාකරණය කරමින්, යෙදුම් මෘදුකාංග ක්‍රියාත්මක වීමට අවශ්‍ය පරිසරය සකසා දෙයි.</p>
      </div>

      <p>මෙහෙයුම් පද්ධතිය නොමැතිව, පරිගණකයක ඇති ප්‍රොසෙසරය (CPU), මතකය (Memory), ආචයන උපාංග (Storage Devices) වැනි දෘඪාංග සමඟ සෘජුවම සන්නිවේදනය කිරීම පරිශීලකයෙකුට ඉතා සංකීර්ණ කාර්යයකි. මෙහෙයුම් පද්ධතිය මෙම සංකීර්ණ බව සඟවා, පරිශීලකයාට සහ යෙදුම් මෘදුකාංගවලට (Application Software) පහසු පරිසරයක් නිර්මාණය කර දෙයි. එය දෘඪාංගයේ සැබෑ ස්වරූපය සඟවා, සරල "අතථ්‍ය යන්ත්‍රයක්" (Virtual Machine) ලෙස ක්‍රියා කරයි.</p>
      <p><b>ප්‍රධාන උදාහරණ:</b> Microsoft Windows, Apple macOS, Linux, Android, iOS.</p>

      <p>පහත රූප සටහනින් පරිගණක පද්ධතියක මෙහෙයුම් පද්ධතියේ ස්ථානගත වීම තේරුම් ගත හැක:</p>
      <div class="my-4 p-4 border rounded-lg bg-muted/30 flex justify-center">
        <svg viewBox="0 0 400 300" class="w-full max-w-sm h-auto font-sans">
            <defs>
                <marker id="arrow-os" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" class="fill-foreground"></path></marker>
            </defs>
            
            <g class="text-center">
                <rect x="100" y="20" width="200" height="40" rx="5" class="fill-card stroke-foreground" stroke-width="1.5"></rect>
                <text x="200" y="45" text-anchor="middle" class="font-semibold">පරිශීලකයා (User)</text>

                <line x1="200" y1="60" x2="200" y2="80" class="stroke-foreground" stroke-width="1.5" marker-end="url(#arrow-os)" marker-start="url(#arrow-os)"></line>
                
                <rect x="50" y="80" width="300" height="40" rx="5" class="fill-card stroke-foreground" stroke-width="1.5"></rect>
                <text x="200" y="105" text-anchor="middle" class="font-semibold">යෙදුම් මෘදුකාංග (Application Software)</text>
                
                <line x1="200" y1="120" x2="200" y2="140" class="stroke-foreground" stroke-width="1.5" marker-end="url(#arrow-os)" marker-start="url(#arrow-os)"></line>
                
                <rect x="25" y="140" width="350" height="40" rx="5" class="fill-primary/20 stroke-primary" stroke-width="2"></rect>
                <text x="200" y="165" text-anchor="middle" class="font-bold fill-primary">මෙහෙයුම් පද්ධතිය (Operating System)</text>
                
                <line x1="200" y1="180" x2="200" y2="200" class="stroke-foreground" stroke-width="1.5" marker-end="url(#arrow-os)" marker-start="url(#arrow-os)"></line>
                
                <rect x="0" y="200" width="400" height="40" rx="5" class="fill-card stroke-foreground" stroke-width="1.5"></rect>
                <text x="200" y="225" text-anchor="middle" class="font-semibold">දෘඪාංග (Hardware)</text>
            </g>
        </svg>
      </div>
    `,
    tags: ["os", "definition", "intermediary"],
    relatedQuestions: [],
};
    
