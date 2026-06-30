
import type { Note } from "../../types";

export const note_4_4_0: Note = {
    id: "note-4-4-0",
    title: "ඒකාබද්ධ සහ අනුක්‍රමික තාර්කික පරිපථ",
    type: "html",
    content: `
      <h2>ඒකාබද්ධ තාර්කික පරිපථ (Combinational Logic Circuits)</h2>
      <p>ඒකාබද්ධ තාර්කික පරිපථයක් යනු, එහි ඕනෑම මොහොතක ප්‍රතිදානය, එම මොහොතේ පවතින ආදානයන් මත පමණක් රඳා පවතින අංකිත පරිපථ වර්ගයකි. මෙම පරිපථවලට "මතකයක්" නොමැත; එනම්, අතීත ආදාන අගයන් වත්මන් ප්‍රතිදානයට බලපාන්නේ නැත.</p>
      
      <h3>ප්‍රධාන ඒකාබද්ධ පරිපථ වර්ග:</h3>
      <ul>
        <li>
          <b>එකතුකරණ (Adders):</b> ද්විමය සංඛ්‍යා එකතු කිරීම සඳහා යොදා ගැනේ.
          <ul>
            <li><b>අර්ධ එකතුකරණය (Half Adder):</b> බිටු දෙකක් එකතු කර, එකතුව (Sum) සහ ඉතිරිය (Carry) ලබා දෙයි.</li>
            <li><b>පූර්ණ එකතුකරණය (Full Adder):</b> බිටු දෙකක් සහ පෙර පියවරෙන් ලැබුණු ඉතිරියක් (Carry-in) එකතු කර, එකතුව සහ නව ඉතිරිය (Carry-out) ලබා දෙයි.</li>
          </ul>
        </li>
        <li>
          <b>විකේතක (Decoders):</b> n ආදානයන් සඳහා 2ⁿ ප්‍රතිදානයන් දක්වා ජනනය කරයි. දී ඇති ද්විමය කේතයකට අනුරූප එක් ප්‍රතිදානයක් පමණක් සක්‍රිය කරයි.
        </li>
        <li>
          <b>බහුපථකාරක (Multiplexers - MUX):</b> ආදාන රේඛා කිහිපයකින් එකක් තෝරා, එය තනි ප්‍රතිදාන රේඛාවකට යොමු කරයි. "දත්ත වරකයක්" (Data Selector) ලෙසද ක්‍රියා කරයි.</li>
      </ul>

      <h2>අනුක්‍රමික තාර්කික පරිපථ (Sequential Logic Circuits)</h2>
      <p>ඒකාබද්ධ පරිපථ මෙන් නොව, අනුක්‍රමික පරිපථයක ප්‍රතිදානය වත්මන් ආදානයන් මෙන්ම, පරිපථයේ පෙර පැවති තත්ත්වය (previous state) මත ද රඳා පවතී. මේ සඳහා ඔවුන්ට මතක මූලද්‍රව්‍ය (memory elements) ඇත. මෙම මතකය, ප්‍රතිදාන නැවත ආදානයට "ප්‍රතිපෝෂණය" (feedback) කිරීම මගින් නිර්මාණය වේ.</p>
      
      <div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
        <div class="p-4 border rounded-lg">
            <h4 class="font-bold text-center">ඒකාබද්ධ පරිපථය</h4>
            <div class="flex justify-center items-center h-32">
                <div class="text-center">ආදාන<br/>(Inputs)</div>
                <div class="text-4xl mx-4">→</div>
                <div class="p-4 border rounded-md bg-background text-center">තාර්කික<br/>පරිපථය</div>
                <div class="text-4xl mx-4">→</div>
                <div class="text-center">ප්‍රතිදාන<br/>(Outputs)</div>
            </div>
             <p class="text-xs text-center mt-2 text-muted-foreground">ප්‍රතිදානය වත්මන් ආදානය මත පමණක් රඳා පවතී.</p>
        </div>
        <div class="p-4 border rounded-lg">
            <h4 class="font-bold text-center">අනුක්‍රමික පරිපථය</h4>
             <div class="relative flex flex-col justify-center items-center h-32">
                 <div class="flex items-center">
                    <div class="text-center">ආදාන<br/>(Inputs)</div>
                    <div class="text-4xl mx-2">→</div>
                    <div class="p-4 border rounded-md bg-background text-center">තාර්කික<br/>පරිපථය (A)</div>
                    <div class="text-4xl mx-2">→</div>
                    <div class="text-center">ප්‍රතිදාන<br/>(Outputs)</div>
                 </div>
                 <div class="absolute bottom-0 right-1/4 flex flex-col items-center">
                    <div class="p-2 border rounded-md bg-muted text-center text-sm">මතක<br/>මූලද්‍රව්‍ය (B)</div>
                    <div class="h-4 w-px bg-foreground"></div>
                    <div class="w-20 h-px bg-foreground -translate-y-px"></div>
                 </div>
             </div>
              <p class="text-xs text-center mt-2 text-muted-foreground">ප්‍රතිදානය, ආදානය සහ පෙර තත්ත්වය මත රඳා පවතී.</p>
        </div>
      </div>
      
      <ul>
          <li><b>පිළි-පෙරළ (Flip-Flop):</b> බිටු එකක දත්තයක් (0 හෝ 1) ගබඩා කළ හැකි මූලික මතක ඒකකයයි. පරිගණකයේ රෙජිස්තර සහ ක්‍ෂණික මතකය (SRAM) වැනි දෑ සෑදී ඇත්තේ පිළි-පෙරළ වලිනි. අනුක්‍රමික පරිපථයක්, ඒකාබද්ධ තාර්කික පරිපථයක් (A කොටස) සහ මතක මූලද්‍රව්‍යයකින් (B කොටස) සමන්විත වේ.</li>
      </ul>
    `,
    tags: ["integrated circuits", "combinational", "sequential", "adder", "decoder", "multiplexer", "flip-flop"],
    relatedQuestions: ["pq-2019-p1-10"],
};

    