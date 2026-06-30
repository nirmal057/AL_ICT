
import type { Note } from "../../types";

export const note_3_2_1: Note = {
    id: "note-3-2-1",
    title: "ASCII ආකේතන ක්‍රමය",
    type: "html",
    content: `
      <h2>ASCII (American Standard Code for Information Interchange)</h2>
      <p>ASCII යනු මුල් කාලීන සහ වඩාත්ම බලපෑමක් ඇති කළ ආකේතන ක්‍රමයයි. එය පුද්ගලික පරිගණක (PCs) සහ අන්තර්ජාලයේ මුල් කාලීන දත්ත හුවමාරුව සඳහා වූ සම්මතය බවට පත් විය.</p>
      <ul>
        <li><b>මූලික ASCII:</b> මෙය 7-bit කේතයක් ලෙස නිර්මාණය කරන ලද අතර, එමගින් එකිනෙකට වෙනස් අනුලක්ෂණ 128 (2⁷) ක් නිරූපණය කළ හැකි විය. මෙයට ඉංග්‍රීසි හෝඩියේ ලොකු අකුරු (A-Z), කුඩා අකුරු (a-z), ඉලක්කම් (0-9), විරාම ලකුණු, සහ මූලික පාලන අනුලක්ෂණ (උදා: line feed, escape) ඇතුළත් විය.</li>
        <li><b>විස්තෘත ASCII (Extended ASCII):</b> පරිගණක මතකය බයිට (8-bit) ලෙස සංවිධානය වූ නිසා, 7-bit ASCII කේතයේ භාවිතා නොවූ අටවන බිටුව ද ප්‍රයෝජනයට ගන්නා ලදී. මෙමගින් තවත් අනුලක්ෂණ 128 ක් (2⁸ = 256) නිරූපණය කිරීමට ඉඩ ලැබුණි. මෙම අමතර ඉඩ, යුරෝපීය භාෂාවල ඇති විශේෂ අක්ෂර (උදා: é, ä), ග්‍රැෆික් සංකේත, සහ ගණිතමය සංකේත නිරූපණය කිරීමට යොදා ගැනිණි.</li>
      </ul>
      
      <Activity id="activity-character-encoder" defaultEncoding="ascii" />

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">පෙළ ASCII බවට පරිවර්තනය කිරීම</h4>
        <p>"ICT" යන වචනය 8-bit ASCII කේතයට හරවන ආකාරය බලමු.</p>
        <p class="text-sm text-muted-foreground mb-2">පළමුව, අපට අදාළ ASCII අගයන් දැන සිටිය යුතුය (විභාගයේදී මේවා ලබා දෙනු ලැබේ).</p>
        <ul class="text-sm list-disc pl-5 font-mono">
            <li>'I' = 73 (දශම)</li>
            <li>'C' = 67 (දශම)</li>
            <li>'T' = 84 (දශම)</li>
        </ul>
        <ol class="list-decimal pl-5 mt-4 space-y-2">
            <li><b>පියවර 1:</b> එක් එක් අක්ෂරයේ දශම අගය 8-bit ද්විමය අගයකට පරිවර්තනය කරන්න.
                 <ul class="font-mono text-sm mt-2 space-y-1">
                    <li>73₁₀ = 01001001₂</li>
                    <li>67₁₀ = 01000011₂</li>
                    <li>84₁₀ = 01010100₂</li>
                </ul>
            </li>
            <li><b>පියවර 2:</b> මෙම ද්විමය අගයන් පිළිවෙලට එකට ලියන්න.
                <p class="font-mono bg-muted/50 p-2 rounded mt-1">01001001 01000011 01010100</p>
            </li>
        </ol>
      </div>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">ASCII ද්විමය නැවත පෙළ බවට හැරවීම</h4>
        <p><code>01000001 01100010</code> ද්විමය කේතය අක්ෂර බවට හරවන ආකාරය බලමු.</p>
        <ol class="list-decimal pl-5 mt-4 space-y-2">
            <li><b>පියවර 1:</b> ද්විමය තන්තුව 8-bit කාණ්ඩ (bytes) වලට වෙන් කරන්න.
                 <p class="font-mono bg-muted/50 p-2 rounded mt-1">01000001 සහ 01100010</p>
            </li>
            <li><b>පියවර 2:</b> එක් එක් 8-bit කාණ්ඩය දශම අගයකට පරිවර්තනය කරන්න.
                 <ul class="font-mono text-sm mt-2 space-y-1">
                    <li>01000001₂ = (1 × 2⁶) + (1 × 2⁰) = 64 + 1 = 65₁₀</li>
                    <li>01100010₂ = (1 × 2⁶) + (1 × 2⁵) + (1 × 2¹) = 64 + 32 + 2 = 98₁₀</li>
                </ul>
            </li>
             <li><b>පියවර 3:</b> ASCII වගුව භාවිතයෙන් එක් එක් දශම අගයට අදාළ අක්ෂරය සොයාගන්න. (විභාගයේදී අගයන් ලබා දෙනු ඇත).
                <ul class="text-sm mt-2 space-y-1">
                    <li>65₁₀ → 'A'</li>
                    <li>98₁₀ → 'b'</li>
                </ul>
            </li>
            <li><b>පියවර 4:</b> අක්ෂර එකට එකතු කරන්න.
                <p class="font-mono bg-muted/50 p-2 rounded mt-1">Ab</p>
            </li>
        </ol>
      </div>
    `,
    tags: ["ascii", "character encoding", "8-bit", "text conversion"],
    relatedQuestions: [],
};
    

    
