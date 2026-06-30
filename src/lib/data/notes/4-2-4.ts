
import type { Note } from "../../types";

export const note_4_2_4: Note = {
    id: "note-4-2-4",
    title: "විචල්‍ය-3 කානෝ සිතියම (3-Variable K-Map)",
    type: "html",
    content: `
      <h2>විචල්‍ය-3 කානෝ සිතියම (3-Variable K-Map)</h2>
      <p>විචල්‍ය දෙකේ සිතියමෙන් මූලධර්ම ඉගෙන ගත් පසු, විචල්‍ය තුනක් (උදා: A, B, C) සහිත බූලීය ශ්‍රිතයක් සුළු කිරීම සඳහා 3-විචල්‍ය සිතියම භාවිතා කළ හැක. මෙහිදී සෛල 8 (2³) ක් ඇති අතර, ඒවා සාමාන්‍යයෙන් 2x4 ජාලයක සකස් කරනු ලැබේ. මෙම සිතියම, බූලීය වීජ ගණිතය භාවිතයෙන් සුළු කිරීමට අපහසු ප්‍රකාශන සඳහා පවා, දෘශ්‍යමය වශයෙන් සරල විසඳුමක් ලබා දෙයි.</p>
      
      <h3>සිතියමේ ව්‍යුහය සහ Gray කේත භාවිතය</h3>
      <p>සිතියම ගොඩනැගීමේදී, එක් විචල්‍යයක් (උදා: A) පේළි දෙක නිරූපණය කිරීමටත්, අනෙක් විචල්‍ය දෙක (උදා: BC) තීරු හතර නිරූපණය කිරීමටත් යොදා ගනී. මෙහිදී, තීරු අනුපිළිවෙල සඳහා Gray කේතය (00, 01, 11, 10) භාවිතා කිරීම අත්‍යවශ්‍ය වේ. මෙමගින්, යාබද ඕනෑම තීරු දෙකක් අතර වෙනස් වන්නේ එක් බිටුවක් පමණක් වන අතර, එම නිසා සිතියමේ යාබද කොටු අතර තාර්කික අසල්වැසිභාවය (logical adjacency) ආරක්ෂා වේ.</p>
       <div class="flex justify-center my-4">
        <svg viewBox="0 0 250 150" class="w-full max-w-sm h-auto">
          <rect x="50" y="50" width="200" height="80" class="fill-none stroke-foreground" stroke-width="1.5" />
          <line x1="50" y1="90" x2="250" y2="90" class="stroke-foreground" />
          <line x1="100" y1="50" x2="100" y2="130" class="stroke-foreground" />
          <line x1="150" y1="50" x2="150" y2="130" class="stroke-foreground" />
          <line x1="200" y1="50" x2="200" y2="130" class="stroke-foreground" />
          <text x="35" y="70" text-anchor="end">A=0</text>
          <text x="35" y="110" text-anchor="end">A=1</text>
          <text x="125" y="40" text-anchor="middle">BC</text>
          <text x="75" y="45" text-anchor="middle" class="text-blue-600 dark:text-blue-400">00</text>
          <text x="125" y="45" text-anchor="middle" class="text-green-600 dark:text-green-400">01</text>
          <text x="175" y="45" text-anchor="middle" class="text-purple-600 dark:text-purple-400">11</text>
          <text x="225" y="45" text-anchor="middle" class="text-red-600 dark:text-red-400">10</text>
        </svg>
      </div>
      <p><b>සිතියමේ දාර වටා එතීම (Wrap-around Adjacency):</b> 3-විචල්‍ය සිතියමක, පළමු තීරුව (BC=00) සහ අවසාන තීරුව (BC=10) ද තාර්කිකව යාබද වේ. මන්ද, 00 සහ 10 අතර වෙනස් වන්නේද එක් බිටුවක් (B විචල්‍යය) පමණි. මෙය හරියට සිතියම සිලින්ඩරයක් මෙන් නැමූ විට, දාර දෙක එකිනෙක ස්පර්ශ වීම වැනිය. මෙමගින්, දාරවල ඇති '1' කොටු එකට කාණ්ඩ කිරීමට අවස්ථාව ලැබේ.</p>
      
      <p class="mt-4">පහත දැක්වෙන K-Map Simulator එක භාවිතයෙන් 3-විචල්‍ය සිතියම් ගවේෂණය කරන්න.</p>
      <Activity id="k-map-simulator" defaultVars="3" />
      <hr class="my-6"/>
      <h2>උදාහරණ</h2>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 1: සරල සිරස් කාණ්ඩ</h4>
        <p><b>ප්‍රකාශනය: Z = A'BC + ABC</b></p>
        <p><b>පියවර 1:</b> K-map එක පුරවන්න. (A'BC → 011, ABC → 111)</p>
        <div class="flex justify-center my-4">
            <svg viewBox="0 0 260 160" class="w-full max-w-sm h-auto">
              <rect x="50" y="50" width="200" height="80" class="fill-none stroke-foreground" stroke-width="1.5" /> <line x1="50" y1="90" x2="250" y2="90" class="stroke-foreground" /> <line x1="100" y1="50" x2="100" y2="130" class="stroke-foreground" /> <line x1="150" y1="50" x2="150" y2="130" class="stroke-foreground" /> <line x1="200" y1="50" x2="200" y2="130" class="stroke-foreground" />
              <text x="35" y="70" text-anchor="end">0</text><text x="35" y="110" text-anchor="end">1</text><text x="125" y="40" text-anchor="middle">BC</text><text x="75" y="45" text-anchor="middle">00</text><text x="125" y="45" text-anchor="middle">01</text><text x="175" y="45" text-anchor="middle">11</text><text x="225" y="45" text-anchor="middle">10</text>
              <text x="175" y="70" class="text-lg font-bold">1</text><text x="175" y="110" class="text-lg font-bold">1</text>
              <rect x="155" y="55" width="40" height="70" rx="5" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පියවර 2:</b> '1' කොටු කාණ්ඩ කරන්න. මෙහි සිරස් අතට කාණ්ඩයක් සෑදිය හැක.</p>
        <p><b>පියවර 3:</b> කාණ්ඩයෙන් පදය ව්‍යුත්පන්න කරන්න. මෙම කාණ්ඩය පුරා B=1 සහ C=1 වෙනස් නොවේ. A හි අගය 0 සිට 1 ට වෙනස් වන බැවින් A ඉවත් වේ.</p>
        <p class="font-bold text-center mt-2 text-lg">Z = BC</p>
      </div>

       <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 2: Wrap-around කාණ්ඩ කිරීම</h4>
        <p><b>ප්‍රකාශනය: Z = A'B'C' + AB'C'</b></p>
        <p><b>පියවර 1:</b> K-map එක පුරවන්න. (A'B'C' → 000, AB'C' → 100)</p>
        <div class="flex justify-center my-4">
            <svg viewBox="0 0 260 160" class="w-full max-w-sm h-auto">
              <rect x="50" y="50" width="200" height="80" class="fill-none stroke-foreground" stroke-width="1.5" /> <line x1="50" y1="90" x2="250" y2="90" class="stroke-foreground" /> <line x1="100" y1="50" x2="100" y2="130" class="stroke-foreground" /> <line x1="150" y1="50" x2="150" y2="130" class="stroke-foreground" /> <line x1="200" y1="50" x2="200" y2="130" class="stroke-foreground" />
              <text x="35" y="70" text-anchor="end">0</text><text x="35" y="110" text-anchor="end">1</text><text x="125" y="40" text-anchor="middle">BC</text><text x="75" y="45" text-anchor="middle">00</text><text x="125" y="45" text-anchor="middle">01</text><text x="175" y="45" text-anchor="middle">11</text><text x="225" y="45" text-anchor="middle">10</text>
              <text x="75" y="70" class="text-lg font-bold">1</text><text x="75" y="110" class="text-lg font-bold">1</text>
              <rect x="55" y="55" width="40" height="70" rx="5" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පියවර 2:</b> '1' කොටු දෙක සිරස් අතට යාබද වේ. ඒවා කාණ්ඩ කරන්න.</p>
        <p><b>පියවර 3:</b> මෙම කාණ්ඩය පුරා B=0 (B') සහ C=0 (C') වෙනස් නොවේ. A හි අගය වෙනස් වන බැවින් A ඉවත් වේ.</p>
        <p class="font-bold text-center mt-2 text-lg">Z = B'C'</p>
      </div>

       <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 3: 2024 Past Paper Q14</h4>
        <p><b>ප්‍රකාශනය: F(x, y, z) = Σ(1, 5)</b>. මෙයින් අදහස් වන්නේ minterms 1 (x'y'z) සහ 5 (xy'z) සඳහා ප්‍රතිදානය 1 වන බවයි.</p>
        <p><b>පියවර 1:</b> K-map එක පුරවන්න. (x'y'z → 001, xy'z → 101)</p>
        <div class="flex justify-center my-4">
            <svg viewBox="0 0 250 150" class="w-full max-w-xs h-auto">
                <rect x="50" y="50" width="200" height="80" class="fill-none stroke-foreground" stroke-width="1.5" />
                <line x1="50" y1="90" x2="250" y2="90" class="stroke-foreground" /><line x1="100" y1="50" x2="100" y2="130" class="stroke-foreground" /><line x1="150" y1="50" x2="150" y2="130" class="stroke-foreground" /><line x1="200" y1="50" x2="200" y2="130" class="stroke-foreground" />
                <text x="35" y="70" text-anchor="end">x=0</text><text x="35" y="110" text-anchor="end">x=1</text><text x="125" y="40" text-anchor="middle">yz</text>
                <text x="75" y="45" text-anchor="middle">00</text><text x="125" y="45" text-anchor="middle">01</text><text x="175" y="45" text-anchor="middle">11</text><text x="225" y="45" text-anchor="middle">10</text>
                <text x="125" y="70" class="text-lg font-bold">1</text><text x="125" y="110" class="text-lg font-bold">1</text>
                <rect x="105" y="55" width="40" height="70" rx="5" class="fill-purple-500/20 stroke-purple-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පියවර 2:</b> යාබද '1' කොටු දෙක කාණ්ඩ කරන්න.</p>
        <p><b>පියවර 3:</b> මෙම කාණ්ඩය පුරා y=0 (y') සහ z=1 (z) වෙනස් නොවේ. x හි අගය වෙනස් වන බැවින් x ඉවත් වේ.</p>
        <p class="font-bold text-center mt-2 text-lg">F = y'z</p>
      </div>

       <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 4: කොටු හතරක කාණ්ඩය</h4>
        <p><b>ප්‍රකාශනය: Z = A'B'C' + A'B'C + AB'C' + AB'C</b></p>
        <p><b>පියවර 1:</b> K-map එක පුරවන්න. (000, 001, 100, 101)</p>
        <div class="flex justify-center my-4">
            <svg viewBox="0 0 260 160" class="w-full max-w-sm h-auto">
              <rect x="50" y="50" width="200" height="80" class="fill-none stroke-foreground" stroke-width="1.5" /> <line x1="50" y1="90" x2="250" y2="90" class="stroke-foreground" /> <line x1="100" y1="50" x2="100" y2="130" class="stroke-foreground" /> <line x1="150" y1="50" x2="150" y2="130" class="stroke-foreground" /> <line x1="200" y1="50" x2="200" y2="130" class="stroke-foreground" />
              <text x="35" y="70" text-anchor="end">0</text><text x="35" y="110" text-anchor="end">1</text><text x="125" y="40" text-anchor="middle">BC</text><text x="75" y="45" text-anchor="middle">00</text><text x="125" y="45" text-anchor="middle">01</text><text x="175" y="45" text-anchor="middle">11</text><text x="225" y="45" text-anchor="middle">10</text>
              <text x="75" y="70" class="text-lg font-bold">1</text><text x="125" y="70" class="text-lg font-bold">1</text>
              <text x="75" y="110" class="text-lg font-bold">1</text><text x="125" y="110" class="text-lg font-bold">1</text>
              <rect x="55" y="55" width="90" height="70" rx="5" class="fill-red-500/20 stroke-red-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පියවර 2:</b> '1' කොටු හතරම එකට කාණ්ඩ කරන්න.</p>
        <p><b>පියවර 3:</b> මෙම 2x2 කාණ්ඩය පුරා, A (0 සිට 1) සහ C (0 සිට 1) යන විචල්‍ය දෙකම වෙනස් වේ. B හි අගය (0) පමණක් නියතව පවතී.</p>
        <p class="font-bold text-center mt-2 text-lg">Z = B'</p>
      </div>
    `,
    tags: ["k-map", "boolean algebra", "3-variable", "simplification"],
    relatedQuestions: [{ id: "pq-2024-p1-14" }],
};
