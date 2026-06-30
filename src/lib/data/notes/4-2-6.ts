
import type { Note } from "../../types";

export const note_4_2_6: Note = {
    id: "note-4-2-6",
    title: "'Don't Care' කොන්දේසි",
    type: "html",
    content: `
      <h2>'Don't Care' කොන්දේසි ('X')</h2>
      <p>සමහර තාර්කික පරිපථ වලදී, ඇතැම් ආදාන සංයෝජන කිසි විටෙකත් සිදු නොවිය හැක, නැතහොත් එම ආදාන සංයෝජනය සඳහා ලැබෙන ප්‍රතිදානය කුමක් වුවත් කමක් නැත. මෙම අවස්ථා "Don't Care" කොන්දේසි ලෙස හැඳින්වෙන අතර, කානෝ සිතියමේ 'X' ලකුණින් දැක්වේ.</p>
      
      <h3>'Don't Care' කොන්දේසි භාවිතයේ වාසිය</h3>
      <p>'X' කොටුවක්, කාණ්ඩයක් සෑදීමේදී '1' කොටුවක් ලෙස සැලකිය හැක, නමුත් එය කාණ්ඩයකට ඇතුළත් කිරීම අනිවාර්ය නොවේ. මෙහි ප්‍රධාන වාසිය නම්, 'X' කොටු උපායශීලීව භාවිතා කර, <b>හැකි විශාලතම කාණ්ඩ</b> සෑදීමට හැකි වීමයි. විශාල කාණ්ඩ වලින් ලැබෙන පද වල විචල්‍යයන් අඩු බැවින්, අවසාන බූලීය ප්‍රකාශනය වඩාත් සරල වේ.</p>

      <p class="mt-4">පහත දැක්වෙන K-Map Simulator එක භාවිතයෙන් 'X' අගයන් යොදා සිතියම් ගවේෂණය කරන්න.</p>
      <Activity id="k-map-simulator" />
      <hr class="my-6"/>
      <h2>උදාහරණ</h2>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 1: සරලතම කාණ්ඩය විශාල කිරීම</h4>
        <p><b>ප්‍රකාශනය: F(A, B, C) = Σ(1, 3, 5) සහ d(A, B, C) = Σ(7)</b>. ('d' මගින් 'don't care' minterms දක්වයි).</p>
        <div class="flex justify-center my-4">
            <svg viewBox="0 0 260 160" class="w-full max-w-sm h-auto">
              <rect x="50" y="50" width="200" height="80" class="fill-none stroke-foreground" stroke-width="1.5" /> <line x1="50" y1="90" x2="250" y2="90" class="stroke-foreground" /> <line x1="100" y1="50" x2="100" y2="130" class="stroke-foreground" /> <line x1="150" y1="50" x2="150" y2="130" class="stroke-foreground" /> <line x1="200" y1="50" x2="200" y2="130" class="stroke-foreground" />
              <text x="35" y="70">0</text><text x="35" y="110">1</text><text x="125" y="40">BC</text><text x="75" y="45">00</text><text x="125" y="45">01</text><text x="175" y="45">11</text><text x="225" y="45">10</text>
              <text x="125" y="70" class="font-bold text-lg">1</text><text x="175" y="70" class="font-bold text-lg">1</text>
              <text x="125" y="110" class="font-bold text-lg">1</text><text x="175" y="110" class="font-bold text-red-500 text-lg">X</text>
              <rect x="105" y="55" width="90" height="70" rx="5" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පැහැදිලි කිරීම:</b> 'X' නොතිබුණි නම්, අපට '1' කොටු දෙකක කාණ්ඩයක් (A'C) සහ තනි '1' කොටුවක කාණ්ඩයක් (AB'C) සෑදිය යුතුය (Z=A'C + AB'C). නමුත්, m(7) හි ඇති 'X' කොටුව '1' ලෙස සැලකීමෙන්, අපට '1' කොටු හතරක විශාල කාණ්ඩයක් සෑදිය හැක. මෙම කාණ්ඩය පුරා C=1 පමණක් නියතව පවතී.</p>
        <p class="font-bold text-center mt-2 text-lg">Z = C</p>
      </div>

       <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 2: අනවශ්‍ය 'X' නොසලකා හැරීම</h4>
        <p><b>ප්‍රකාශනය: F(A, B, C) = Σ(0, 1, 4) සහ d(A, B, C) = Σ(2, 6)</b>.</p>
        <div class="flex justify-center my-4">
            <svg viewBox="0 0 260 160" class="w-full max-w-sm h-auto">
              <rect x="50" y="50" width="200" height="80" class="fill-none stroke-foreground" stroke-width="1.5" /> <line x1="50" y1="90" x2="250" y2="90" class="stroke-foreground" /> <line x1="100" y1="50" x2="100" y2="130" class="stroke-foreground" /> <line x1="150" y1="50" x2="150" y2="130" class="stroke-foreground" /> <line x1="200" y1="50" x2="200" y2="130" class="stroke-foreground" />
              <text x="35" y="70">0</text><text x="35" y="110">1</text><text x="125" y="40">BC</text><text x="75" y="45">00</text><text x="125" y="45">01</text><text x="175" y="45">11</text><text x="225" y="45">10</text>
              <text x="75" y="70" class="font-bold text-lg">1</text><text x="125" y="70" class="font-bold text-lg">1</text><text x="225" y="70" class="font-bold text-red-500 text-lg">X</text>
              <text x="75" y="110" class="font-bold text-lg">1</text><text x="225" y="110" class="font-bold text-red-500 text-lg">X</text>
              <rect x="55" y="55" width="40" height="70" rx="5" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
              <rect x="55" y="55" width="90" height="40" rx="5" class="fill-green-500/20 stroke-green-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පැහැදිලි කිරීම:</b> m(2) සහ m(6) හි 'X' ඇත. m(0) සහ m(4) වලින් සිරස් කාණ්ඩයක් සෑදිය හැක (පදය: B'C'). m(0) සහ m(1) වලින් තිරස් කාණ්ඩයක් සෑදිය හැක (පදය: A'B'). m(2) හි ඇති 'X' කොටුව භාවිතා කර විශාල කාණ්ඩ සෑදිය නොහැකි නිසා, එය නොසලකා හරිනු ලැබේ. m(6) හි ඇති 'X' කොටුව ද එසේමයි.</p>
        <p class="font-bold text-center mt-2 text-lg">Z = A'B' + B'C'</p>
      </div>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 3: BCD to 7-Segment Display (Exam Level)</h4>
        <p>BCD (Binary Coded Decimal) කේතයක්, 7-segment දර්ශකයක 'g' කොටස දැල්වීම සඳහා වන තාර්කික ප්‍රකාශනය සුළු කරමු. BCD කේත 0-9 දක්වා පමණක් වලංගු වේ. එබැවින් 10 සිට 15 දක්වා ආදාන සංයෝජන 'Don't Care' (X) ලෙස සැලකිය හැක.</p>
        <p><b>ප්‍රකාශනය: g = Σ(2, 3, 4, 5, 6, 8, 9) + d(10, 11, 12, 13, 14, 15)</b></p>
        <div class="flex justify-center my-4">
             <svg viewBox="0 0 260 260" class="w-full max-w-xs h-auto">
              <rect x="50" y="50" width="200" height="200" class="fill-none stroke-foreground" stroke-width="1.5" /> <line x1="50" y1="100" x2="250" y2="100" class="stroke-foreground" /><line x1="50" y1="150" x2="250" y2="150" class="stroke-foreground" /><line x1="50" y1="200" x2="250" y2="200" class="stroke-foreground" /> <line x1="100" y1="50" x2="100" y2="250" class="stroke-foreground" /><line x1="150" y1="50" x2="150" y2="250" class="stroke-foreground" /><line x1="200" y1="50" x2="200" y2="250" class="stroke-foreground" />
              <text x="25" y="75">00</text><text x="25" y="125">01</text><text x="25" y="175">11</text><text x="25" y="225">10</text><text x="25" y="150" transform="rotate(-90 25 150)">AB</text><text x="125" y="40">CD</text><text x="75" y="45">00</text><text x="125" y="45">01</text><text x="175" y="45">11</text><text x="225" y="45">10</text>
              <text x="225" y="75" class="font-bold text-lg">1</text><text x="175" y="75" class="font-bold text-lg">1</text>
              <text x="75" y="125" class="font-bold text-lg">1</text><text x="125" y="125" class="font-bold text-lg">1</text><text x="225" y="125" class="font-bold text-lg">1</text>
              <text x="75" y="225" class="font-bold text-lg">1</text><text x="125" y="225" class="font-bold text-lg">1</text>
              <text x="175" y="225" class="font-bold text-red-500">X</text><text x="225" y="225" class="font-bold text-red-500">X</text>
              <text x="75" y="175" class="font-bold text-red-500">X</text><text x="125" y="175" class="font-bold text-red-500">X</text><text x="175" y="175" class="font-bold text-red-500">X</text><text x="225" y="175" class="font-bold text-red-500">X</text>
              <rect x="55" y="105" width="190" height="40" rx="5" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
              <rect x="155" y="55" width="40" height="90" rx="5" class="fill-green-500/20 stroke-green-500" stroke-width="2" />
               <rect x="55" y="205" width="90" height="40" rx="5" class="fill-purple-500/20 stroke-purple-500" stroke-width="2" />
                <rect x="205" y="55" width="40" height="90" rx="5" class="fill-yellow-500/20 stroke-yellow-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පැහැදිලි කිරීම:</b></p>
        <ul class="text-sm list-disc pl-5">
            <li><b>නිල් කාණ්ඩය:</b> m(4), m(5), m(6) සහ m(7)=X. මෙම 1x4 කාණ්ඩයෙන් ලැබෙන පදය <b>A'B</b> වේ.</li>
            <li><b>කොළ කාණ්ඩය:</b> m(2), m(3), m(6) සහ m(7)=X. මෙම 2x2 කාණ්ඩයෙන් ලැබෙන පදය <b>A'C</b> වේ.</li>
            <li><b>දම් කාණ්ඩය:</b> m(8), m(9) සහ m(10)=X, m(11)=X. මෙම 1x4 කාණ්ඩයෙන් ලැබෙන පදය <b>AD'</b> වේ.</li>
        </ul>
        <p>මෙහිදී, සියලුම '1' කොටු ආවරණය වී ඇති නිසා, අපට සරලම ප්‍රකාශනය ලැබේ.</p>
        <p class="font-bold text-center mt-2 text-lg">Z = A'B + A'C + AD'</p>
      </div>

       <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 4: සියලුම '1' ආවරණය කිරීම</h4>
        <p><b>ප්‍රකාශනය: F(A,B,C,D) = Σ(1,3,7,11,15) සහ d(A,B,C,D) = Σ(0,2,5)</b>.</p>
        <div class="flex justify-center my-4">
          <svg viewBox="0 0 260 260" class="w-full max-w-xs h-auto">
              <rect x="50" y="50" width="200" height="200" class="fill-none stroke-foreground" stroke-width="1.5" /> <line x1="50" y1="100" x2="250" y2="100" class="stroke-foreground" /><line x1="50" y1="150" x2="250" y2="150" class="stroke-foreground" /><line x1="50" y1="200" x2="250" y2="200" class="stroke-foreground" /> <line x1="100" y1="50" x2="100" y2="250" class="stroke-foreground" /><line x1="150" y1="50" x2="150" y2="250" class="stroke-foreground" /><line x1="200" y1="50" x2="200" y2="250" class="stroke-foreground" />
              <text x="25" y="75">00</text><text x="25" y="125">01</text><text x="25" y="175">11</text><text x="25" y="225">10</text><text x="25" y="150" transform="rotate(-90 25 150)">AB</text><text x="125" y="40">CD</text><text x="75" y="45">00</text><text x="125" y="45">01</text><text x="175" y="45">11</text><text x="225" y="45">10</text>
              <text x="75" y="75" class="font-bold text-red-500">X</text><text x="125" y="75" class="font-bold">1</text><text x="175" y="75" class="font-bold">1</text><text x="225" y="75" class="font-bold text-red-500">X</text>
              <text x="125" y="125" class="font-bold text-red-500">X</text><text x="175" y="125" class="font-bold">1</text>
              <text x="175" y="175" class="font-bold">1</text><text x="175" y="225" class="font-bold">1</text>
              <rect x="155" y="55" width="40" height="190" rx="5" class="fill-green-500/20 stroke-green-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පැහැදිලි කිරීම:</b></p>
        <ul class="text-sm list-disc pl-5">
            <li><b>කොළ කාණ්ඩය (කොටු 8):</b> CD=11 තීරුවේ ඇති '1' හතර සහ X හතර එකට එකතු කර විශාල කාණ්ඩයක් සෑදිය හැක. මෙම කාණ්ඩය පුරා C=1 සහ D=1 නියත වේ. එබැවින් පදය <b>CD</b> වේ.</li>
            <li>m(0), m(1), m(2), m(5) හි ඇති '1' සහ 'X' වලින් තවත් කාණ්ඩ සෑදිය හැකි වුවද, CD කාණ්ඩයෙන් දැනටමත් සිතියමේ ඇති සියලුම '1' කොටු ආවරණය වී ඇත. එබැවින් වෙනත් කාණ්ඩ සෑදීම අනවශ්‍යය.</li>
        </ul>
        <p class="font-bold text-center mt-2 text-lg">Z = CD</p>
      </div>

    `,
    tags: ["k-map", "boolean algebra", "don't care", "x conditions", "simplification"],
    relatedQuestions: [],
};
