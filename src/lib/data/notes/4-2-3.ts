
import type { Note } from "../../types";

export const note_4_2_3: Note = {
    id: "note-4-2-3",
    title: "විචල්‍ය-2 කානෝ සිතියම (2-Variable K-Map)",
    type: "html",
    content: `
      <h2>විචල්‍ය-2 කානෝ සිතියම (2-Variable K-Map)</h2>
      <p>විචල්‍ය දෙකක් (උදා: A සහ B) ඇති බූලීය ශ්‍රිතයක් සුළු කිරීමේ මූලික පියවර ඉගෙන ගැනීමට 2-විචල්‍ය සිතියම කදිම ආරම්භයකි. මෙහි 2x2 ජාලයක සකස් කළ කොටු 4 (2²) ක් ඇත.</p>
      
      <h3>සිතියමේ ව්‍යුහය</h3>
      <p>සිතියම ගොඩනැගීමේදී, එක් විචල්‍යයක් (උදා: A) පේළි නිරූපණය කිරීමටත්, අනෙක් විචල්‍යය (උදා: B) තීරු නිරූපණය කිරීමටත් යොදා ගනී. එක් එක් කොටුව, සත්‍යතා වගුවේ එක් ආදාන සංයෝජනයකට (minterm) අනුරූප වේ. A=0 පේළිය A' ලෙසත්, A=1 පේළිය A ලෙසත් හැඳින්වේ. එමෙන්ම, B=0 තීරුව B' ලෙසත්, B=1 තීරුව B ලෙසත් හැඳින්වේ.</p>
      <div class="flex justify-center my-4">
        <svg viewBox="0 0 150 150" class="w-48 h-auto">
          <rect x="50" y="50" width="100" height="100" class="fill-none stroke-foreground" stroke-width="1.5" />
          <line x1="50" y1="100" x2="150" y2="100" class="stroke-foreground" />
          <line x1="100" y1="50" x2="100" y2="150" class="stroke-foreground" />
          <text x="25" y="75" text-anchor="middle">A=0</text>
          <text x="25" y="125" text-anchor="middle">A=1</text>
          <text x="75" y="40" text-anchor="middle">B=0</text>
          <text x="125" y="40" text-anchor="middle">B=1</text>
          <text x="75" y="75" text-anchor="middle" class="fill-muted-foreground">A'B'</text>
          <text x="125" y="75" text-anchor="middle" class="fill-muted-foreground">A'B</text>
          <text x="75" y="125" text-anchor="middle" class="fill-muted-foreground">AB'</text>
          <text x="125" y="125" text-anchor="middle" class="fill-muted-foreground">AB</text>
        </svg>
      </div>
      <p>පහත දැක්වෙන K-Map Simulator එක භාවිතයෙන් විවිධ ප්‍රකාශන ඇතුළත් කර, ඒවායේ සිතියම් සහ සරල කළ ප්‍රතිඵල නිරීක්ෂණය කරන්න.</p>
      <Activity id="k-map-simulator" defaultVars="2" />
      <hr class="my-6"/>
      <h2>උදාහරණ</h2>
      
      <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 1: සරල OR ද්වාරය</h4>
        <p><b>ප්‍රකාශනය: Z = A + B</b></p>
        <p><b>පියවර 1:</b> සත්‍යතා වගුවෙන් K-map එක පුරවන්න. A=0, B=0 හැර අනෙක් සෑම අවස්ථාවකම Z=1 වේ.</p>
        <div class="flex justify-center my-4">
            <svg viewBox="0 0 160 150" class="w-48 h-auto">
              <rect x="50" y="50" width="100" height="100" class="fill-none stroke-foreground" stroke-width="1.5" />
              <line x1="50" y1="100" x2="150" y2="100" class="stroke-foreground" />
              <line x1="100" y1="50" x2="100" y2="150" class="stroke-foreground" />
              <text x="25" y="75" text-anchor="middle">A=0</text>
              <text x="25" y="125" text-anchor="middle">A=1</text>
              <text x="75" y="40" text-anchor="middle">B=0</text>
              <text x="125" y="40" text-anchor="middle">B=1</text>
              <text x="75" y="75" text-anchor="middle" class="text-lg">0</text>
              <text x="125" y="75" text-anchor="middle" class="text-lg font-bold">1</text>
              <text x="75" y="125" text-anchor="middle" class="text-lg font-bold">1</text>
              <text x="125" y="125" text-anchor="middle" class="text-lg font-bold">1</text>
              <!-- Groupings -->
              <rect x="55" y="105" width="90" height="40" rx="5" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
              <rect x="105" y="55" width="40" height="90" rx="5" class="fill-green-500/20" stroke="hsl(var(--chart-2))" stroke-width="2" />
            </svg>
        </div>
        <p><b>පියවර 2:</b> යාබද '1' කොටු හැකි විශාලතම කාණ්ඩ වලට එකතු කරන්න.</p>
        <ul class="text-sm list-disc pl-5">
            <li><b>නිල් කාණ්ඩය (තිරස්):</b> A=1 වන පේළියේ ඇති '1' දෙක කාණ්ඩ කරයි. මෙම කාණ්ඩය පුරා ගමන් කිරීමේදී, A හි අගය (1) වෙනස් නොවේ, නමුත් B හි අගය 0 සිට 1 ට වෙනස් වේ. වෙනස් වන විචල්‍යය (B) ඉවත් වන අතර, වෙනස් නොවන විචල්‍යය (A) ඉතිරි වේ. එබැවින් මෙම කාණ්ඩය සඳහා පදය <b>A</b> වේ.</li>
            <li><b>කොළ කාණ්ඩය (සිරස්):</b> B=1 වන තීරුවේ ඇති '1' දෙක කාණ්ඩ කරයි. මෙම කාණ්ඩය පුරා ගමන් කිරීමේදී, B හි අගය (1) වෙනස් නොවේ, නමුත් A හි අගය 0 සිට 1 ට වෙනස් වේ. වෙනස් වන විචල්‍යය (A) ඉවත් වන අතර, වෙනස් නොවන විචල්‍යය (B) ඉතිරි වේ. එබැවින් මෙම කාණ්ඩය සඳහා පදය <b>B</b> වේ.</li>
        </ul>
        <p><b>පියවර 3:</b> එක් එක් කාණ්ඩයෙන් ලැබුණු පද, OR (+) කාරකය භාවිතයෙන් එකතු කරන්න.</p>
        <p class="font-bold text-center mt-2 text-lg">Z = A + B</p>
      </div>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 2: තනි කාණ්ඩයක්</h4>
        <p><b>ප්‍රකාශනය: Z = A'B' + A'B</b></p>
        <div class="flex justify-center my-4">
            <svg viewBox="0 0 160 150" class="w-48 h-auto">
              <rect x="50" y="50" width="100" height="100" class="fill-none stroke-foreground" stroke-width="1.5" /><line x1="50" y1="100" x2="150" y2="100" class="stroke-foreground" /><line x1="100" y1="50" x2="100" y2="150" class="stroke-foreground" />
              <text x="25" y="75" text-anchor="middle">A=0</text><text x="25" y="125" text-anchor="middle">A=1</text><text x="75" y="40" text-anchor="middle">B=0</text><text x="125" y="40" text-anchor="middle">B=1</text>
              <text x="75" y="75" text-anchor="middle" class="text-lg font-bold">1</text><text x="125" y="75" text-anchor="middle" class="text-lg font-bold">1</text><text x="75" y="125" text-anchor="middle" class="text-lg">0</text><text x="125" y="125" text-anchor="middle" class="text-lg">0</text>
              <rect x="55" y="55" width="90" height="40" rx="5" class="fill-blue-500/20 stroke-blue-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පැහැදිලි කිරීම:</b> මෙහි ඇත්තේ තනි තිරස් කාණ්ඩයක් පමණි. එම කාණ්ඩය පුරා A හි අගය (0) නියතව පවතින අතර, B හි අගය 0 සිට 1 දක්වා වෙනස් වේ. එබැවින් B ඉවත් වී, A හි අගය 0 නිසා <b>A'</b> ඉතිරි වේ.</p>
        <p class="font-bold text-center mt-2 text-lg">Z = A'</p>
      </div>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 3: කාණ්ඩ කළ නොහැකි '1' කොටු (XOR ද්වාරය)</h4>
        <p><b>ප්‍රකාශනය: Z = A'B + AB'</b></p>
        <div class="flex justify-center my-4">
            <svg viewBox="0 0 160 150" class="w-48 h-auto">
              <rect x="50" y="50" width="100" height="100" class="fill-none stroke-foreground" stroke-width="1.5" /><line x1="50" y1="100" x2="150" y2="100" class="stroke-foreground" /><line x1="100" y1="50" x2="100" y2="150" class="stroke-foreground" />
              <text x="25" y="75" text-anchor="middle">A=0</text><text x="25" y="125" text-anchor="middle">A=1</text><text x="75" y="40" text-anchor="middle">B=0</text><text x="125" y="40" text-anchor="middle">B=1</text>
              <text x="75" y="75" text-anchor="middle" class="text-lg">0</text><text x="125" y="75" text-anchor="middle" class="text-lg font-bold">1</text><text x="75" y="125" text-anchor="middle" class="text-lg font-bold">1</text><text x="125" y="125" text-anchor="middle" class="text-lg">0</text>
              <rect x="105" y="55" width="40" height="40" rx="5" class="fill-red-500/20 stroke-red-500" stroke-width="2" /><rect x="55" y="105" width="40" height="40" rx="5" class="fill-red-500/20 stroke-red-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පැහැදිලි කිරීම:</b> මෙහි '1' කොටු දෙක එකිනෙකට යාබද නොවේ (විකර්ණව පිහිටයි). එබැවින් ඒවා එකට කාණ්ඩ කළ නොහැක. එක් එක් '1' කොටුව වෙන වෙනම කාණ්ඩ ලෙස සැලකිය යුතුය. එම නිසා ප්‍රකාශනය තවදුරටත් සුළු කළ නොහැක.</p>
        <p class="font-bold text-center mt-2 text-lg">Z = A'B + AB'</p>
      </div>

       <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය 4: සියලු කොටු '1' වීම</h4>
        <p><b>ප්‍රකාශනය: Z = 1</b> (සෑම ආදාන සංයෝජනයක් සඳහාම ප්‍රතිදානය 1 වේ)</p>
        <div class="flex justify-center my-4">
            <svg viewBox="0 0 160 150" class="w-48 h-auto">
              <rect x="50" y="50" width="100" height="100" class="fill-none stroke-foreground" stroke-width="1.5" /><line x1="50" y1="100" x2="150" y2="100" class="stroke-foreground" /><line x1="100" y1="50" x2="100" y2="150" class="stroke-foreground" />
              <text x="25" y="75" text-anchor="middle">A=0</text><text x="25" y="125" text-anchor="middle">A=1</text><text x="75" y="40" text-anchor="middle">B=0</text><text x="125" y="40" text-anchor="middle">B=1</text>
              <text x="75" y="75" text-anchor="middle" class="text-lg font-bold">1</text><text x="125" y="75" text-anchor="middle" class="text-lg font-bold">1</text><text x="75" y="125" text-anchor="middle" class="text-lg font-bold">1</text><text x="125" y="125" text-anchor="middle" class="text-lg font-bold">1</text>
              <rect x="55" y="55" width="90" height="90" rx="5" class="fill-purple-500/20 stroke-purple-500" stroke-width="2" />
            </svg>
        </div>
        <p><b>පැහැදිලි කිරීම:</b> මෙහි සියලුම කොටු '1' වන බැවින්, අපට හැකි විශාලතම කාණ්ඩය වන කොටු 4 කින් යුත් කාණ්ඩයක් සෑදිය හැක. මෙම කාණ්ඩය පුරා ගමන් කිරීමේදී A සහ B යන විචල්‍ය දෙකම 0 සිට 1 ට වෙනස් වේ. සියලුම විචල්‍යයන් ඉවත් වන බැවින්, ප්‍රතිඵලය 1 වේ.</p>
        <p class="font-bold text-center mt-2 text-lg">Z = 1</p>
      </div>

    `,
    tags: ["k-map", "boolean algebra", "2-variable", "simplification"],
    relatedQuestions: [],
};
