
import type { Note } from "../../types";

export const note_3_3_2: Note = {
    id: "note-3-3-2",
    title: "ද්විමය අඩු කිරීම",
    type: "html",
    content: `
      <h2>ද්විමය අඩු කිරීම (Binary Subtraction)</h2>
      <p>මෙහිදීද දශම අඩු කිරීමට සමාන "ඉක්කා ගැනීම" (Borrow) සංකල්පය භාවිතා වේ. නමුත් ද්විමය පද්ධතියේදී, වම්පස තීරුවෙන් 1ක් ඉක්කා ගත් විට, එම තීරුවට ලැබෙන්නේ 10 (එනම්, දශම 2) කි.</p>
      
       <div class="overflow-x-auto"><table class="w-full my-4 border text-center">
        <thead><tr class="bg-muted"><th class="p-2 border" colspan="3">ද්විමය අඩු කිරීමේ නීති</th></tr></thead>
        <tbody>
          <tr><td class="p-2 border font-mono">0 - 0</td><td class="p-2 border font-mono">= 0</td></tr>
          <tr><td class="p-2 border font-mono">1 - 1</td><td class="p-2 border font-mono">= 0</td></tr>
          <tr><td class="p-2 border font-mono">1 - 0</td><td class="p-2 border font-mono">= 1</td></tr>
          <tr><td class="p-2 border font-mono">0 - 1</td><td class="p-2 border font-mono">= 1 (වම්පසින් 1ක් ඉක්කා ගනී)</td></tr>
        </tbody>
      </table></div>

      <h4>උදාහරණය: 101100₂ - 1101₂</h4>
       <div class="my-4 p-4 border rounded-lg bg-muted/30">
          <pre class="font-mono text-lg text-right overflow-x-auto">
      <span class="text-primary text-sm">    0 1 10 10 1 10</span> (ඉක්කා ගැනීමෙන් පසු)
        1 0 1 1 0 0
      - 0 0 1 1 0 1
      -----------------
        0 1 1 1 1 1
          </pre>
          <h5 class="font-semibold mt-4">පියවරෙන් පියවර පැහැදිලි කිරීම:</h5>
          <ol class="text-sm list-decimal pl-5 mt-2 space-y-1">
              <li><b>2⁰ තීරුව:</b> 0 - 1. අඩු කළ නොහැක. 2¹ තීරුවෙන් ඉක්කා ගත යුතුය, නමුත් එහිද ඇත්තේ 0 කි. එබැවින් 2² තීරුවේ ඇති 1, 2¹ තීරුවට ඉක්කා ගනී. එවිට 2² තීරුව 0 වන අතර, 2¹ තීරුව 10 (දශම 2) වේ. දැන්, එම 10න් 1ක් 2⁰ තීරුවට ඉක්කා ගනී. එවිට 2¹ තීරුව 1 වන අතර, 2⁰ තීරුව 10 වේ. දැන් ගණනය කරන්න: 10 - 1 = <b>1</b>.</li>
              <li><b>2¹ තීරුව:</b> (ඉක්කා ගැනීමෙන් පසු ඉතිරි වූ) 1 - 0 = <b>1</b>.</li>
              <li><b>2² තීරුව:</b> (ඉක්කා ගැනීමෙන් පසු ඉතිරි වූ) 0 - 1. අඩු කළ නොහැක. 2³ තීරුවෙන් 1ක් ඉක්කා ගනී. 2³ තීරුව 0 වන අතර, 2² තීරුව 10 වේ. දැන් ගණනය කරන්න: 10 - 1 = <b>1</b>.</li>
              <li><b>2³ තීරුව:</b> (ඉක්කා ගැනීමෙන් පසු ඉතිරි වූ) 0 - 1. අඩු කළ නොහැක. 2⁵ තීරුවෙන් 1ක් ඉක්කා ගනී. 2⁵ තීරුව 0 වන අතර, 2⁴ තීරුව 10 වේ. එයින් 1ක් 2³ තීරුවට ඉක්කා ගනී. 2⁴ තීරුව 1 වන අතර, 2³ තීරුව 10 වේ. දැන් ගණනය කරන්න: 10 - 1 = <b>1</b>.</li>
              <li><b>2⁴ තීරුව:</b> (ඉක්කා ගැනීමෙන් පසු ඉතිරි වූ) 1 - 0 = <b>1</b>.</li>
              <li><b>2⁵ තීරුව:</b> (ඉක්කා ගැනීමෙන් පසු ඉතිරි වූ) 0 - 0 = <b>0</b>.</li>
          </ol>
           <p class="mt-2 font-bold text-lg text-center">පිළිතුර: 011111₂ (හෙවත් 11111₂)</p>
      </div>

       <div class="p-4 my-4 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md text-sm">
          <b>ඔබ දන්නවාද?</b> සැබෑ පරිගණක අඩු කිරීම සඳහා මෙම "ඉක්කා ගැනීමේ" ක්‍රමය භාවිතා නොකරයි. එය පරිපථ සඳහා සංකීර්ණ වේ. ඒ වෙනුවට, පරිගණකය අඩු කිරීමේ ක්‍රියාව, <b>දෙකෙහි අනුපූරකය (Two's Complement)</b> භාවිතා කර එකතු කිරීමේ ක්‍රියාවක් බවට පත් කරයි (A - B යනු A + (-B) ලෙස). මෙමගින් ALU හි සැලසුම බෙහෙවින් සරල කරයි.
      </div>
      <Activity id="activity-binary-calculator"/>
    `,
    tags: ["binary arithmetic", "subtraction", "borrow"],
};
