
import type { Note } from "../../types";

export const note_4_2_5: Note = {
    id: "note-4-2-5",
    title: "විචල්‍ය-4 කානෝ සිතියම (4-Variable K-Map)",
    type: "html",
    content: `
      <h2>විචල්‍ය-4 කානෝ සිතියම (4-Variable K-Map)</h2>
      <p>විචල්‍ය හතරක් (උදා: A, B, C, D) සහිත ප්‍රකාශන සුළු කිරීම සඳහා 4-විචල්‍ය සිතියම භාවිතා වේ. මෙය 4x4 ජාලයකින් සමන්විත වන අතර, මුළු කොටු 16 (2⁴) ක් ඇත. සංකීර්ණ බූලීය ප්‍රකාශන සරල කිරීම සඳහා මෙම සිතියම ඉතා ප්‍රබල මෙවලමකි, නමුත් එහි ඇති "වටා එතීමේ" (wrap-around) යාබදතාවය නිවැරදිව අවබෝධ කර ගැනීම ඉතා වැදගත් වේ.</p>

      <h3>සිතියමේ ව්‍යුහය</h3>
      <p>සිතියම ගොඩනැගීමේදී, විචල්‍ය දෙකක් (උදා: AB) පේළි නිරූපණය කිරීමටත්, අනෙක් විචල්‍ය දෙක (උදා: CD) තීරු නිරූපණය කිරීමටත් යොදා ගනී. 3-විචල්‍ය සිතියමේ මෙන්ම, මෙහිදීද පේළි සහ තීරු දෙකම සඳහා <b>Gray කේත අනුපිළිවෙල (00, 01, 11, 10)</b> භාවිතා කිරීම අත්‍යවශ්‍ය වේ. මෙමගින්, ඕනෑම යාබද පේළි දෙකක් හෝ යාබද තීරු දෙකක් අතර වෙනස් වන්නේ එක් බිටුවක් පමණක් බව සහතික කෙරේ.</p>
      <div class="flex justify-center my-4">
        <svg viewBox="0 0 250 250" class="w-full max-w-xs h-auto">
          <rect x="50" y="50" width="200" height="200" class="fill-none stroke-foreground" stroke-width="1.5" />
          <line x1="50" y1="100" x2="250" y2="100" class="stroke-foreground" />
          <line x1="50" y1="150" x2="250" y2="150" class="stroke-foreground" />
          <line x1="50" y1="200" x2="250" y2="200" class="stroke-foreground" />
          <line x1="100" y1="50" x2="100" y2="250" class="stroke-foreground" />
          <line x1="150" y1="50" x2="150" y2="250" class="stroke-foreground" />
          <line x1="200" y1="50" x2="200" y2="250" class="stroke-foreground" />
          <text x="25" y="75" text-anchor="end">00</text>
          <text x="25" y="125" text-anchor="end">01</text>
          <text x="25" y="175" text-anchor="end">11</text>
          <text x="25" y="225" text-anchor="end">10</text>
          <text x="25" y="150" text-anchor="middle" transform="rotate(-90 25 150)">AB</text>
          <text x="125" y="40" text-anchor="middle">CD</text>
          <text x="75" y="45" text-anchor="middle">00</text>
          <text x="125" y="45" text-anchor="middle">01</text>
          <text x="175" y="45" text-anchor="middle">11</text>
          <text x="225" y="45" text-anchor="middle">10</text>
        </svg>
      </div>

      <h3>වටා එතීම (Wrap-around Adjacency)</h3>
      <p>4-විචල්‍ය සිතියමක යාබදතාවය තේරුම් ගැනීමට, එය පැතලි ජාලයක් ලෙස නොව, ගෝලයක් හෝ ටෝරසයක් (torus - ඩෝනට් එකක හැඩය) මෙන් සිතිය යුතුය. దీని තේරුම:</p>
      <ul>
          <li>ඉහළම පේළිය (AB=00) සහ පහළම පේළිය (AB=10) එකිනෙකට යාබද වේ.</li>
          <li>වම්පසම තීරුව (CD=00) සහ දකුණුපසම තීරුව (CD=10) එකිනෙකට යාබද වේ.</li>
      </ul>
      <p>මෙම සංකල්පය නිසා, සිතියමේ දාරවල සහ කොන් වල ඇති '1' කොටු, එකිනෙක සමඟ කාණ්ඩ කර, වඩාත් සරල පද ලබා ගැනීමට ඉඩ සැලසේ. උදාහරණයක් ලෙස, සිතියමේ කොන් හතරේ ඇති '1' කොටු හතරම එකට කාණ්ඩ කළ හැක.</p>

      <p class="mt-4">පහත දැක්වෙන K-Map Simulator එක භාවිතයෙන් 4-විචල්‍ය සිතියම් ගවේෂණය කරන්න.</p>
      <Activity id="k-map-simulator" defaultVars="4" />
      <hr class="my-6"/>
      <h2>උදාහරණ</h2>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 1: සරල 4-කොටු කාණ්ඩය</h4>
        <p><b>ප්‍රකාශනය: Z = A'B'C'D' + A'B'C'D + A'BC'D' + A'BC'D</b></p>
        <p><b>පියවර 1:</b> සිතියම පුරවන්න. (minterms: 0000, 0001, 0100, 0101).</p>
        <div class="flex justify-center my-4">
             <svg viewBox="0 0 260 260" class="w-full max-w-xs h-auto">
              <rect x="50" y="50" width="200" height="200" class="fill-none stroke-foreground" stroke-width="1.5" /> <line x1="50" y1="100" x2="250" y2="100" class="stroke-foreground" /><line x1="50" y1="150" x2="250" y2="150" class="stroke-foreground" /><line x1="50" y1="200" x2="250" y2="200" class="stroke-foreground" /> <line x1="100" y1="50" x2="100" y2="250" class="stroke-foreground" /><line x1="150" y1="50" x2="150" y2="250" class="stroke-foreground" /><line x1="200" y1="50" x2="200" y2="250" class="stroke-foreground" />
              <text x="25" y="75">00</text><text x="25" y="125">01</text><text x="25" y="175">11</text><text x="25" y="225">10</text><text x="25" y="150" transform="rotate(-90 25 150)">AB</text><text x="125" y="40">CD</text><text x="75" y="45">00</text><text x="125" y="45">01</text><text x="175" y="45">11</text><text x="225" y="45">10</text>
              <text x="75" y="75" class="font-bold text-lg">1</text><text x="125" y="75" class="font-bold text-lg">1</text>
              <text x="75" y="125" class="font-bold text-lg">1</text><text x="125" y="125" class="font-bold text-lg">1</text>
              <rect x="55" y="55" width="90" height="90" rx="5" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පියවර 2:</b> '1' කොටු හතරම එකට 2x2 කාණ්ඩයක් ලෙස එකතු කරන්න.</p>
        <p><b>පියවර 3:</b> කාණ්ඩය පුරා වෙනස් නොවන විචල්‍යයන් සොයන්න.</p>
        <ul class="text-sm list-disc pl-5">
            <li><b>පේළි දෙස බලන විට (AB=00 සහ AB=01):</b> A හි අගය (0) නියතව පවතී. B හි අගය 0 සිට 1 දක්වා වෙනස් වේ. එබැවින් <b>A'</b> ඉතිරි වේ, B ඉවත් වේ.</li>
            <li><b>තීරු දෙස බලන විට (CD=00 සහ CD=01):</b> C හි අගය (0) නියතව පවතී. D හි අගය 0 සිට 1 දක්වා වෙනස් වේ. එබැවින් <b>C'</b> ඉතිරි වේ, D ඉවත් වේ.</li>
        </ul>
        <p class="font-bold text-center mt-2 text-lg">Z = A'C'</p>
      </div>

       <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 2: Wrap-around කාණ්ඩ කිරීම (දාර දෙක)</h4>
        <p><b>ප්‍රකාශනය: Z = A'B'C'D' + A'BC'D' + AB'C'D' + ABC'D'</b></p>
        <p><b>පියවර 1:</b> සිතියම පුරවන්න. (0000, 0100, 1000, 1100)</p>
        <div class="flex justify-center my-4">
             <svg viewBox="0 0 260 260" class="w-full max-w-xs h-auto">
              <rect x="50" y="50" width="200" height="200" class="fill-none stroke-foreground" stroke-width="1.5" /> <line x1="50" y1="100" x2="250" y2="100" class="stroke-foreground" /><line x1="50" y1="150" x2="250" y2="150" class="stroke-foreground" /><line x1="50" y1="200" x2="250" y2="200" class="stroke-foreground" /> <line x1="100" y1="50" x2="100" y2="250" class="stroke-foreground" /><line x1="150" y1="50" x2="150" y2="250" class="stroke-foreground" /><line x1="200" y1="50" x2="200" y2="250" class="stroke-foreground" />
              <text x="25" y="75">00</text><text x="25" y="125">01</text><text x="25" y="175">11</text><text x="25" y="225">10</text><text x="25" y="150" transform="rotate(-90 25 150)">AB</text><text x="125" y="40">CD</text><text x="75" y="45">00</text><text x="125" y="45">01</text><text x="175" y="45">11</text><text x="225" y="45">10</text>
              <text x="75" y="75" class="font-bold text-lg">1</text><text x="75" y="125" class="font-bold text-lg">1</text><text x="75" y="175" class="font-bold text-lg">1</text><text x="75" y="225" class="font-bold text-lg">1</text>
              <rect x="55" y="55" width="40" height="190" rx="5" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පැහැදිලි කිරීම:</b> වම්පසම තීරුවේ ඇති '1' කොටු හතරම එකට කාණ්ඩ කළ හැක. මෙම කාණ්ඩය පුරා, C=0 (C') සහ D=0 (D') නියතව පවතී. A සහ B යන විචල්‍යයන් වෙනස් වන බැවින් ඒවා ඉවත් වේ.</p>
        <p class="font-bold text-center mt-2 text-lg">Z = C'D'</p>
      </div>

       <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 3: කොන් හතරේ කාණ්ඩ කිරීම (4 Corners)</h4>
        <p><b>ප්‍රකාශනය: Z = A'B'C'D' + A'B'CD' + AB'C'D' + AB'CD'</b></p>
        <div class="flex justify-center my-4">
            <svg viewBox="0 0 260 260" class="w-full max-w-xs h-auto">
              <rect x="50" y="50" width="200" height="200" class="fill-none stroke-foreground" stroke-width="1.5" /> <line x1="50" y1="100" x2="250" y2="100" class="stroke-foreground" /><line x1="50" y1="150" x2="250" y2="150" class="stroke-foreground" /><line x1="50" y1="200" x2="250" y2="200" class="stroke-foreground" /> <line x1="100" y1="50" x2="100" y2="250" class="stroke-foreground" /><line x1="150" y1="50" x2="150" y2="250" class="stroke-foreground" /><line x1="200" y1="50" x2="200" y2="250" class="stroke-foreground" />
              <text x="25" y="75">00</text><text x="25" y="125">01</text><text x="25" y="175">11</text><text x="25" y="225">10</text><text x="25" y="150" transform="rotate(-90 25 150)">AB</text><text x="125" y="40">CD</text><text x="75" y="45">00</text><text x="125" y="45">01</text><text x="175" y="45">11</text><text x="225" y="45">10</text>
              <text x="75" y="75" class="font-bold text-lg">1</text><text x="225" y="75" class="font-bold text-lg">1</text>
              <text x="75" y="225" class="font-bold text-lg">1</text><text x="225" y="225" class="font-bold text-lg">1</text>
              <rect x="55" y="55" width="40" height="40" rx="5" class="fill-purple-500/20 stroke-purple-500" stroke-width="2" />
              <rect x="205" y="55" width="40" height="40" rx="5" class="fill-purple-500/20 stroke-purple-500" stroke-width="2" />
              <rect x="55" y="205" width="40" height="40" rx="5" class="fill-purple-500/20 stroke-purple-500" stroke-width="2" />
              <rect x="205" y="205" width="40" height="40" rx="5" class="fill-purple-500/20 stroke-purple-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පැහැදිලි කිරීම:</b> සිතියමේ කොන් හතරේ ඇති '1' කොටු හතරම එකට කාණ්ඩ කළ හැක. මෙම කාණ්ඩය තුළ:</p>
        <ul class="text-sm list-disc pl-5">
            <li>A හි අගය වෙනස් වේ.</li>
            <li>B හි අගය 0 ලෙස නියතව පවතී (ඉහළ සහ පහළ පේළි). එබැවින් <b>B'</b> ඉතිරි වේ.</li>
            <li>C හි අගය වෙනස් වේ.</li>
            <li>D හි අගය 0 ලෙස නියතව පවතී (වම් සහ දකුණු තීරු). එබැවින් <b>D'</b> ඉතිරි වේ.</li>
        </ul>
        <p class="font-bold text-center mt-2 text-lg">Z = B'D'</p>
      </div>

       <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 4: බහු කාණ්ඩ සහ අතිච්ඡාදනය</h4>
        <p><b>ප්‍රකාශනය: Z = Σ(0, 1, 2, 4, 5, 6, 8, 9, 12, 13, 14)</b></p>
        <div class="flex justify-center my-4">
             <svg viewBox="0 0 260 260" class="w-full max-w-xs h-auto">
              <rect x="50" y="50" width="200" height="200" class="fill-none stroke-foreground" stroke-width="1.5" /> <line x1="50" y1="100" x2="250" y2="100" class="stroke-foreground" /><line x1="50" y1="150" x2="250" y2="150" class="stroke-foreground" /><line x1="50" y1="200" x2="250" y2="200" class="stroke-foreground" /> <line x1="100" y1="50" x2="100" y2="250" class="stroke-foreground" /><line x1="150" y1="50" x2="150" y2="250" class="stroke-foreground" /><line x1="200" y1="50" x2="200" y2="250" class="stroke-foreground" />
              <text x="25" y="75">00</text><text x="25" y="125">01</text><text x="25" y="175">11</text><text x="25" y="225">10</text><text x="25" y="150" transform="rotate(-90 25 150)">AB</text><text x="125" y="40">CD</text><text x="75" y="45">00</text><text x="125" y="45">01</text><text x="175" y="45">11</text><text x="225" y="45">10</text>
              <text x="75" y="75" class="font-bold">1</text><text x="125" y="75" class="font-bold">1</text><text x="225" y="75" class="font-bold">1</text>
              <text x="75" y="125" class="font-bold">1</text><text x="125" y="125" class="font-bold">1</text><text x="225" y="125" class="font-bold">1</text>
              <text x="75" y="225" class="font-bold">1</text><text x="125" y="225" class="font-bold">1</text>
              <text x="75" y="175" class="font-bold">1</text><text x="125" y="175" class="font-bold">1</text><text x="225" y="175" class="font-bold">1</text>
              <!-- Groupings -->
              <rect x="55" y="55" width="40" height="190" rx="5" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
              <rect x="205" y="55" width="40" height="190" rx="5" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
              <rect x="55" y="55" width="190" height="40" rx="5" class="fill-green-500/20 stroke-green-500" stroke-width="2" />
              <rect x="55" y="105" width="190" height="40" rx="5" class="fill-red-500/20 stroke-red-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පැහැදිලි කිරීම:</b></p>
        <ul class="text-sm list-disc pl-5">
            <li><b>නිල් කාණ්ඩය (කොටු 8):</b> වම්පස තීරුව (CD=00) සහ දකුණුපස තීරුව (CD=10) wrap-around මගින් කාණ්ඩ කරයි. මෙම විශාල කාණ්ඩය පුරා, D=0 (D') පමණක් නියතව පවතී. එබැවින් පදය <b>D'</b> වේ.</li>
            <li><b>කොළ කාණ්ඩය (කොටු 4):</b> ඉහළ පේළිය (AB=00) කාණ්ඩ කරයි. මෙහි A=0, B=0 නියත වේ, C, D වෙනස් වේ. පදය <b>A'B'</b> වේ.</li>
            <li><b>රතු කාණ්ඩය (කොටු 4):</b> දෙවන පේළිය (AB=01) කාණ්ඩ කරයි. මෙහි A=0, B=1 නියත වේ, C, D වෙනස් වේ. පදය <b>A'B</b> වේ.</li>
        </ul>
        <p>දැනටමත් නිල් කාණ්ඩයෙන් ආවරණය වී ඇති කොටු, විශාල කාණ්ඩ සෑදීමට නැවත භාවිතා කිරීම (overlapping) නිරීක්ෂණය කරන්න.</p>
        <p class="font-bold text-center mt-2 text-lg">Z = D' + A'B' + A'B</p>
        <p class="text-center text-sm">මෙය තවදුරටත් <b>Z = D' + A'</b> ලෙස සුළු කළ හැක (A'B' + A'B = A'(B'+B) = A'(1) = A').</p>
      </div>

    `,
    tags: ["k-map", "boolean algebra", "4-variable", "simplification", "wrap-around"],
    relatedQuestions: [],
};
