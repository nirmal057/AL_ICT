import type { Note } from "../../types";

export const note_9_2_2: Note = {
    id: "note-9-2-2",
    title: "පියවරාකාර පිරිපහදුව (Stepwise Refinement)",
    type: "html",
    content: `
      <h2>පියවරාකාර පිරිපහදුව (Stepwise Refinement)</h2>
      <p>පියවරාකාර පිරිපහදුව යනු, මුදුන්-සිට-පහළට සැලසුම් කිරීමේදී (Top-down Design) භාවිතා වන ප්‍රධානතම තාක්ෂණයයි. මෙහිදී, විසඳුමක එක් එක් පියවර, මුලින්ම සාමාන්‍ය, වියුක්ත (abstract) මට්ටමින් ලියා, පසුව එක් එක් පියවර තවත් සවිස්තරාත්මක, නිශ්චිත උප-පියවර වලට "පිරිපහදු" (refine) කරනු ලැබේ. මෙම ක්‍රියාවලිය, විසඳුම ක්‍රමලේඛන භාෂාවකින් ලිවිය හැකි තරම් පැහැදිලි සහ සරල වන තෙක් නැවත නැවත සිදු කෙරේ.</p>
      <p>මෙය හරියට රචනාවක් ලිවීම වැනිය. ඔබ මුලින්ම ප්‍රධාන මාතෘකා කිහිපයක් (outline) ලියා ගනී. ඉන්පසු එක් එක් මාතෘකාව යටතේ ප්‍රධාන කරුණු ලියා දක්වයි. අවසානයේදී, එම කරුණු විස්තර කර සම්පූර්ණ ඡේද ගොඩනගයි. පියවරාකාර පිරිපහදුව ද එලෙසම, ඉහළ මට්ටමේ අදහසේ සිට පහළ මට්ටමේ විස්තර දක්වා ක්‍රමානුකූලව ගමන් කරයි.</p>

      <div class="my-6 p-4 border rounded-lg bg-slate-50 dark:bg-gray-800">
        <h4 class="font-bold text-lg mb-2">උදාහරණය: ශිෂ්‍ය සාමාර්ථය ගණනය කිරීම</h4>
        <p>අපි අපගේ "ශිෂ්‍ය සාමාර්ථය ගණනය කිරීමේ" ගැටලුවට මෙම ක්‍රමය යොදා ගනිමු.</p>

        <h5 class="font-semibold mt-4">පිරිපහදු මට්ටම 1 (ඉතා වියුක්ත)</h5>
        <pre><code>Begin
    1. අවශ්‍ය ලකුණු ලබාගන්න.
    2. සාමාන්‍යය ගණනය කරන්න.
    3. තත්ත්වය තීරණය කර පෙන්වන්න.
End</code></pre>
        <p class="text-sm mt-2 text-muted-foreground">මෙම මට්ටමේදී, අපට විසඳුම පිළිබඳ ඉහළ මට්ටමේ අදහසක් ලැබේ, නමුත් එය ක්‍රියාත්මක කිරීමට තරම් විස්තරාත්මක නැත.</p>

        <h5 class="font-semibold mt-4">පිරිපහදු මට්ටම 2 (තරමක් විස්තරාත්මක)</h5>
        <p>දැන්, අපි 1 වන මට්ටමේ එක් එක් පියවර තවදුරටත් විස්තර කරමු.</p>
         <pre><code>Begin
    // පියවර 1 පිරිපහදු කිරීම
    Read mark1, mark2, mark3

    // පියවර 2 පිරිපහදු කිරීම
    total = mark1 + mark2 + mark3
    average = total / 3

    // පියවර 3 පිරිපහදු කිරීම
    If average >= 50 then
        Display "Pass"
    Else
        Display "Fail"
    Endif
End</code></pre>
        <p class="text-sm mt-2 text-muted-foreground">මෙම මට්ටම, ව්‍යාජ කේතයකට (Pseudocode) බෙහෙවින් සමාන වන අතර, ක්‍රමලේඛකයෙකුට මෙය කේතයක් බවට පත් කිරීමට තරම් පැහැදිලිය.</p>

        <h5 class="font-semibold mt-4">පිරිපහදු මට්ටම 3 (ක්‍රමලේඛයට ආසන්න)</h5>
        <p>අවශ්‍ය නම්, අපට මෙය තවදුරටත්, නිශ්චිත ක්‍රමලේඛන භාෂාවක ශ්‍රිත සහ විචල්‍යයන්ට සමාන වන සේ පිරිපහදු කළ හැක.</p>
         <pre><code>Function CalculateStatus()
    Declare Integer mark1, mark2, mark3
    Declare Real average
    Declare String status

    Input mark1 from user
    Input mark2 from user
    Input mark3 from user
    
    average = (mark1 + mark2 + mark3) / 3

    If average >= 50 then
        Set status = "Pass"
    Else
        Set status = "Fail"
    Endif

    Print "The final status is: " + status
End Function</code></pre>
        <p class="mt-4">පියවරාකාර පිරිපහදුව මගින්, සංකීර්ණ ගැටලුවක්, පාලනය කළ හැකි, තාර්කික පියවර මාලාවක් බවට පත් කර, දෝෂ රහිත සහ කාර්යක්ෂම විසඳුමක් කරා ළඟා වීමට මග පෙන්වයි.</p>
      </div>
    `,
    tags: ["stepwise refinement", "top-down design", "problem solving", "algorithm design"],
};
