
import type { Note } from "../../types";

export const note_3_1_2: Note = {
    id: "note-3-1-2",
    title: "සංඛ්‍යා පද්ධති අතර පරිවර්තන",
    type: "html",
    content: `
      <h2>සංඛ්‍යා පද්ධති අතර පරිවර්තන (Conversions between Number Systems)</h2>
      <p>එක් සංඛ්‍යා පද්ධතියකින් තවත් පද්ධතියකට අගයක් පරිවර්තනය කරන්නේ කෙසේදැයි ඉගෙන ගැනීම, පරිගණකය දත්ත සමඟ ක්‍රියා කරන ආකාරය තේරුම් ගැනීමට අත්‍යවශ්‍ය වේ. විභාගයේදී මෙම කොටසින් අනිවාර්යයෙන්ම ප්‍රශ්න එන බැවින්, එක් එක් ක්‍රමවේදය හොඳින් අවබෝධ කර ගැනීම වැදගත් වේ.</p>
      <p>පහත දැක්වෙන අන්තර්ක්‍රියාකාරී පරිවර්තකය (Converter) භාවිතා කර, ඕනෑම සංඛ්‍යාවක් එක් පාදයක සිට තවත් පාදයකට පරිවර්තනය කර, එහි පියවරෙන් පියවර පැහැදිලි කිරීම බලන්න. විවිධ සංඛ්‍යා සහ පාද යොදා අත්හදා බැලීමෙන් ඔබට මෙම ක්‍රමවේදයන් පහසුවෙන් අවබෝධ කරගත හැකිය.</p>
      <Activity id="activity-number-system-converter" />
      
      <h3 class="mt-6 font-semibold">i. දශම (Decimal) සිට අනෙක් පාද වලට</h3>
      <p>මෙම ක්‍රියාවලිය කොටස් දෙකකට බෙදා ඇත: පූර්ණ සංඛ්‍යා (integers) සඳහා සහ භාගික සංඛ්‍යා (fractions) සඳහා.</p>
      
      <h4 class="font-semibold mt-4">පූර්ණ සංඛ්‍යා සඳහා: නැවත නැවත බෙදීමේ ක්‍රමය</h4>
      <p>දශම සංඛ්‍යාවක් වෙනත් පාදයකට හැරවීමට, අපි එම දශම සංඛ්‍යාව පරිවර්තනය කළ යුතු පාදයෙන් අඛණ්ඩව බෙදිය යුතුය. එක් එක් බෙදීමෙන් ලැබෙන 'ඉතිරිය' (remainder) අගය සටහන් කර ගනිමු. බෙදීම තවදුරටත් කළ නොහැකි වන තෙක් (එනම්, පිළිතුර 0 වන තෙක්) මෙම ක්‍රියාවලිය සිදු කරයි. අවසානයේ, සටහන් කරගත් ඉතිරි අගයන්, <b>අවසානයේ සිට ආරම්භයට (පහළ සිට ඉහළට)</b> පිළිවෙලට ලිවීමෙන් නව පාදයේ සංඛ්‍යාව ලැබේ.</p>
      <p><b>උදාහරණය: 43₁₀ ද්විමය, අෂ්ටම සහ ෂඩ් දශම වලට හරවමු.</b></p>
      
      <div class="grid md:grid-cols-3 gap-4 my-4">
        <div class="p-4 border rounded-lg bg-muted/30 overflow-x-auto">
          <h4 class="font-bold mb-2">ද්විමයට (පාදය 2)</h4>
          <p class="text-sm mb-2 text-muted-foreground">43, 2න් බෙදාගෙන යන්න. එක් එක් පියවරේදී ඉතිරිය සටහන් කරන්න.</p>
          <div class="font-mono text-sm">
            <div class="flex items-center">
              <div class="text-right w-8">2</div>
              <div class="border-l-2 border-b-2 border-foreground w-12 text-center">43</div>
            </div>
            <div class="flex items-center">
              <div class="text-right w-8">2</div>
              <div class="border-l-2 border-b-2 border-foreground w-12 text-center">21</div>
              <div class="pl-2 text-primary font-bold">→ 1 <span class="text-xs text-muted-foreground">(LSB)</span></div>
            </div>
             <div class="flex items-center">
              <div class="text-right w-8">2</div>
              <div class="border-l-2 border-b-2 border-foreground w-12 text-center">10</div>
              <div class="pl-2 text-primary font-bold">→ 1</div>
            </div>
             <div class="flex items-center">
              <div class="text-right w-8">2</div>
              <div class="border-l-2 border-b-2 border-foreground w-12 text-center">5</div>
              <div class="pl-2 text-primary font-bold">→ 0</div>
            </div>
             <div class="flex items-center">
              <div class="text-right w-8">2</div>
              <div class="border-l-2 border-b-2 border-foreground w-12 text-center">2</div>
              <div class="pl-2 text-primary font-bold">→ 1</div>
            </div>
             <div class="flex items-center">
              <div class="text-right w-8">2</div>
              <div class="border-l-2 border-b-2 border-foreground w-12 text-center">1</div>
              <div class="pl-2 text-primary font-bold">→ 0</div>
            </div>
             <div class="flex items-center">
              <div class="text-right w-8"></div>
              <div class="w-12 text-center">0</div>
              <div class="pl-2 text-primary font-bold">→ 1 <span class="text-xs text-muted-foreground">(MSB)</span></div>
            </div>
          </div>
          <p class="mt-2 text-center">ඉතිරි අගයන් පහළ සිට ඉහළට කියවන්න: <b class="font-mono">101011₂</b></p>
        </div>
        <div class="p-4 border rounded-lg bg-muted/30 overflow-x-auto">
          <h4 class="font-bold mb-2">අෂ්ටමයට (පාදය 8)</h4>
          <p class="text-sm mb-2 text-muted-foreground">43, 8න් බෙදන්න.</p>
           <div class="font-mono text-sm">
            <div class="flex items-center">
              <div class="text-right w-8">8</div>
              <div class="border-l-2 border-b-2 border-foreground w-12 text-center">43</div>
            </div>
            <div class="flex items-center">
              <div class="text-right w-8">8</div>
              <div class="border-l-2 border-b-2 border-foreground w-12 text-center">5</div>
              <div class="pl-2 text-primary font-bold">→ 3</div>
            </div>
            <div class="flex items-center">
              <div class="text-right w-8"></div>
              <div class="w-12 text-center">0</div>
              <div class="pl-2 text-primary font-bold">→ 5</div>
            </div>
          </div>
           <p class="mt-2 text-center">ඉතිරි අගයන් පහළ සිට ඉහළට කියවන්න: <b class="font-mono">53₈</b></p>
        </div>
        <div class="p-4 border rounded-lg bg-muted/30 overflow-x-auto">
          <h4 class="font-bold mb-2">ෂඩ් දශමයට (පාදය 16)</h4>
          <p class="text-sm mb-2 text-muted-foreground">43, 16න් බෙදන්න. ඉතිරිය 10-15 අතර නම්, අදාළ අක්ෂරය (A-F) භාවිතා කරන්න.</p>
           <div class="font-mono text-sm">
            <div class="flex items-center">
              <div class="text-right w-8">16</div>
              <div class="border-l-2 border-b-2 border-foreground w-12 text-center">43</div>
            </div>
            <div class="flex items-center">
              <div class="text-right w-8">16</div>
              <div class="border-l-2 border-b-2 border-foreground w-12 text-center">2</div>
              <div class="pl-2 text-primary font-bold">→ 11 (B)</div>
            </div>
             <div class="flex items-center">
              <div class="text-right w-8"></div>
              <div class="w-12 text-center">0</div>
              <div class="pl-2 text-primary font-bold">→ 2</div>
            </div>
          </div>
           <p class="mt-2 text-center">ඉතිරි අගයන් පහළ සිට ඉහළට කියවන්න: <b class="font-mono">2B₁₆</b></p>
        </div>
      </div>
      
      <h4 class="font-semibold mt-4">භාගික සංඛ්‍යා සඳහා: නැවත නැවත ගුණ කිරීමේ ක්‍රමය</h4>
      <p>දශම භාගික කොටසක් පරිවර්තනය කිරීමට, අපි එම භාගය පරිවර්තනය කළ යුතු පාදයෙන් නැවත නැවත ගුණ කරමු. එක් එක් ගුණ කිරීමෙන් පසුව, ලැබෙන පිළිතුරේ 'පූර්ණ සංඛ්‍යා' කොටස (දශම ලක්ෂයට වම් පස ඇති කොටස) සටහන් කරගෙන, ඉතිරි භාගික කොටස නැවත ගුණ කිරීම සඳහා යොදා ගනිමු. භාගික කොටස 0 වන තුරු (හෝ අවශ්‍ය නිරවද්‍යතාව දක්වා) මෙය සිදු කරයි. අවසානයේ, සටහන් කරගත් පූර්ණ සංඛ්‍යා කොටස්, <b>ආරම්භයේ සිට අවසානයට (ඉහළ සිට පහළට)</b> පිළිවෙලට ලිවීමෙන් නව පාදයේ භාගික සංඛ්‍යාව ලැබේ.</p>
      <div class="p-4 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-md my-2 text-sm"><b>විභාග ඉලක්කය:</b> 2024 Paper I, Q7 වැනි ප්‍රශ්න සඳහා මෙම පරිවර්තන ක්‍රමය අත්‍යවශ්‍ය වේ.</div>
      <p><b>උදාහරණය: 0.125₁₀ ද්විමයට හරවමු.</b></p>
      <div class="font-mono text-sm p-4 bg-muted/50 rounded-md my-2 overflow-x-auto">
        <b>පියවර 1:</b> 0.125, 2න් ගුණ කරන්න. → 0.25. පූර්ණ සංඛ්‍යා කොටස <b class="text-primary">0</b>. ඉතිරි භාගය 0.25.<br/>
        <b>පියවර 2:</b> 0.25, 2න් ගුණ කරන්න. → 0.5. පූර්ණ සංඛ්‍යා කොටස <b class="text-primary">0</b>. ඉතිරි භාගය 0.5.<br/>
        <b>පියවර 3:</b> 0.5, 2න් ගුණ කරන්න. → 1.0. පූර්ණ සංඛ්‍යා කොටස <b class="text-primary">1</b>. ඉතිරි භාගය 0.0, එබැවින් නවත්වන්න.<br/><br/>
        <b>ප්‍රතිඵලය:</b> ඉහළ සිට පහළට පූර්ණ සංඛ්‍යා කොටස් කියවන්න: <b>0.001₂</b>
      </div>

      <h3 class="mt-6 font-semibold">ii. අනෙක් පාද වලින් දශම (Decimal) වලට</h3>
      <p>ඕනෑම සංඛ්‍යා පද්ධතියක ඇති සංඛ්‍යාවක් දශම බවට පරිවර්තනය කිරීමට, අපි එම සංඛ්‍යාවේ එක් එක් ඉලක්කම එහි 'ස්ථානීය අගය' (Positional Value) සමඟ ගුණ කර, ලැබෙන සියලුම ප්‍රතිඵල එකතු කළ යුතුය. ස්ථානීය අගය යනු, එම ඉලක්කම පිහිටි ස්ථානය මත රඳා පවතින, පාදයේ බලයකි. දශම ලක්ෂයට වම් පස ඇති පළමු ඉලක්කමේ ස්ථානීය අගය පාදයේ 0 වන බලයෙන් (base⁰) ආරම්භ වී වමට යනවිට බලය වැඩිවේ. දශම ලක්ෂයට දකුණු පස ඇති ඉලක්කම් සඳහා ස්ථානීය අගය පාදයේ සෘණ බලයන් (-1, -2...) ලෙස යෙදේ.</p>
      
      <p class="mt-2"><b>උදාහරණය: 101011₂ දශමයට හරවමු.</b></p>
      <p class="text-sm text-muted-foreground">මෙම ද්විමය සංඛ්‍යාවේ එක් එක් '1' හෝ '0' ඉලක්කම, එය පිහිටන ස්ථානය අනුව 2 හි බලයකින් ගුණ කරමු. දකුණුපසම ඉලක්කම 2⁰ ස්ථානයයි.</p>
      <div class="font-mono text-sm p-4 bg-muted/50 rounded my-2 overflow-x-auto">
      <b>පියවර 1:</b> එක් එක් ඉලක්කම එහි ස්ථානීය අගයෙන් ගුණ කරන්න.<br>
      = (1 × 2⁵) + (0 × 2⁴) + (1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰)<br><br>
      <b>පියවර 2:</b> එක් එක් බලයේ අගය ගණනය කරන්න.<br>
      = (1 × 32) + (0 × 16) + (1 × 8) + (0 × 4) + (1 × 2) + (1 × 1)<br><br>
      <b>පියවර 3:</b> ගුණිතයන් එකතු කරන්න.<br>
      = 32 + 0 + 8 + 0 + 2 + 1 = <b>43₁₀</b></div>

      <p class="mt-2"><b>උදාහරණය: 2B₁₆ දශමයට හරවමු.</b></p>
       <p class="text-sm text-muted-foreground">මෙහි B යනු දශම ක්‍රමයේ 11 ට සමාන වේ. ඉලක්කම් දෙක ඒවායේ ස්ථානීය අගයන් වන 16¹ සහ 16⁰ වලින් ගුණ කරමු.</p>
      <div class="font-mono text-sm p-4 bg-muted/50 rounded my-2 overflow-x-auto">
      <b>පියවර 1:</b> එක් එක් ඉලක්කම (B=11) එහි ස්ථානීය අගයෙන් ගුණ කරන්න.<br>
      = (2 × 16¹) + (11 × 16⁰)<br><br>
      <b>පියවර 2:</b> ගුණිතයන් ගණනය කරන්න.<br>
      = (2 × 16) + (11 × 1)<br><br>
      <b>පියවර 3:</b> ප්‍රතිඵල එකතු කරන්න.<br>
      = 32 + 11 = <b>43₁₀</b></div>

      <h3 class="mt-6 font-semibold">iii. කෙටි ක්‍රම: ද්විමය ↔ අෂ්ටම / ෂඩ් දශම</h3>
      <p>අෂ්ටම (8) සහ ෂඩ් දශම (16) යන පාදයන් දෙකේ බලයන් වන නිසා (8 = 2³ සහ 16 = 2⁴), මෙම පරිවර්තන සඳහා ඉතා පහසු කෙටි ක්‍රමයක් ඇත. දශම ක්‍රමයට පරිවර්තනය නොකර, ද්විමය සංඛ්‍යාවක් කෙලින්ම අෂ්ටම හෝ ෂඩ් දශම බවට පත් කිරීමට, ද්විමය ඉලක්කම් සුදුසු ලෙස කාණ්ඩ කිරීම ප්‍රමාණවත් වේ.</p>
      
      <h4 class="font-semibold mt-2">ද්විමය සිට අෂ්ටම (Binary → Octal)</h4>
      <p>ද්විමය සංඛ්‍යාව, දශම ලක්ෂයේ සිට දකුණට සහ වමට, <b>ඉලක්කම් තුන බැගින් (3-bit)</b> කාණ්ඩ කරන්න. කාණ්ඩ සම්පූර්ණ කිරීමට අවශ්‍ය නම්, කෙළවරට '0' එකතු කරන්න. ඉන්පසු, එක් එක් 3-bit කාණ්ඩයට අදාළ අෂ්ටම ඉලක්කම ලියන්න.</p>
      
      <h4 class="font-semibold mt-2">ද්විමය සිට ෂඩ් දශම (Binary → Hexadecimal)</h4>
      <p>ද්විමය සංඛ්‍යාව, දශම ලක්ෂයේ සිට දකුණට සහ වමට, <b>ඉලක්කම් හතර බැගින් (4-bit)</b> කාණ්ඩ කරන්න. අවශ්‍ය නම් කෙළවරට '0' එකතු කරන්න. ඉන්පසු, එක් එක් 4-bit කාණ්ඩයට අදාළ ෂඩ් දශම ඉලක්කම ලියන්න.</p>

      <p class="mt-4"><b>උදාහරණය: 11101001₂ අෂ්ටම සහ ෂඩ් දශම වලට හරවමු.</b></p>
      <div class="grid md:grid-cols-2 gap-4 my-4">
        <div class="p-4 border rounded-lg bg-muted/30">
            <h4 class="font-bold mb-2">අෂ්ටමයට (Octal)</h4>
            <p class="text-sm mb-2"><b>පියවර 1:</b> 11101001 ද්විමය සංඛ්‍යාව දකුණේ සිට 3 බැගින් කාණ්ඩ කරමු. වම්පසම කාණ්ඩයට ඉලක්කම් දෙකක් පමණක් ඉතිරි වන බැවින්, එය 3-bit කාණ්ඩයක් කිරීමට ඉදිරියෙන් '0' එකක් එකතු කරමු.</p>
            <div class="p-2 bg-background rounded-md text-center font-mono tracking-widest text-lg">
                <span class="text-muted-foreground">0</span>11 | 101 | 001
            </div>
            <p class="text-sm my-2"><b>පියවර 2:</b> එක් එක් 3-bit කාණ්ඩය අදාළ අෂ්ටම අගයට පරිවර්තනය කරන්න.</p>
            <div class="flex justify-around mt-4 text-center">
                <div>
                    <p class="font-mono">011₂</p>
                    <p class="text-2xl font-bold">3₈</p>
                </div>
                <div>
                    <p class="font-mono">101₂</p>
                    <p class="text-2xl font-bold">5₈</p>
                </div>
                <div>
                    <p class="font-mono">001₂</p>
                    <p class="text-2xl font-bold">1₈</p>
                </div>
            </div>
            <p class="mt-4 text-center font-bold">ප්‍රතිඵලය: 351₈</p>
        </div>
        <div class="p-4 border rounded-lg bg-muted/30">
            <h4 class="font-bold mb-2">ෂඩ් දශමයට (Hexadecimal)</h4>
            <p class="text-sm mb-2"><b>පියවර 1:</b> 11101001 ද්විමය සංඛ්‍යාව දකුණේ සිට 4 බැගින් කාණ්ඩ කරමු. මෙහිදී කාණ්ඩ දෙකකට හරියටම බෙදේ.</p>
            <div class="p-2 bg-background rounded-md text-center font-mono tracking-widest text-lg">
                1110 | 1001
            </div>
            <p class="text-sm my-2"><b>පියවර 2:</b> එක් එක් 4-bit කාණ්ඩය අදාළ ෂඩ් දශම අගයට පරිවර්තනය කරන්න.</p>
            <div class="flex justify-around mt-4 text-center">
                <div>
                    <p class="font-mono">1110₂</p>
                    <p class="text-2xl font-bold">E₁₆</p>
                </div>
                <div>
                    <p class="font-mono">1001₂</p>
                    <p class="text-2xl font-bold">9₁₆</p>
                </div>
            </div>
            <p class="mt-4 text-center font-bold">ප්‍රතිඵලය: E9₁₆</p>
        </div>
      </div>
    `,
    tags: ["number systems", "conversion", "decimal", "binary", "octal", "hexadecimal"],
    relatedQuestions: [{ id: "pq-2022-p1-5", content: "", questionNumber: 0, correctAnswer: 0, options: []}, { id: "pq-2022-p1-7", content: "", questionNumber: 0, correctAnswer: 0, options: []}],
};
