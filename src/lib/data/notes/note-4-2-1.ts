
import type { Note } from "../../types";

export const note_4_2_1: Note = {
    id: "note-4-2-1",
    title: "බූලීය වීජ ගණිත නීති",
    type: "html",
    content: `
      <h2>බූලීය වීජ ගණිත නීති සහ වීජ ගණිතමය සුළු කිරීම</h2>
      <p>බූලීය වීජ ගණිතය, තාර්කික ප්‍රකාශන හැසිරවීම සහ සුළු කිරීම සඳහා භාවිතා වන මූලික නීති සහ ප්‍රත්‍යක්ෂ සමූහයකින් සමන්විත වේ. මෙම නීති තේරුම් ගැනීම, සංකීර්ණ පරිපථ සරල කිරීමට අත්‍යවශ්‍ය වේ.</p>
      
      <h3>මූලික නීති (Basic Laws & Axioms)</h3>
      <div class="overflow-x-auto">
        <table class="w-full my-4 border">
          <thead class="bg-muted">
            <tr>
              <th class="p-2 border">නීතිය</th>
              <th class="p-2 border">AND ආකෘතිය</th>
              <th class="p-2 border">OR ආකෘතිය</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-semibold">Identity Law</td><td class="p-2 border">A . 1 = A</td><td class="p-2 border">A + 0 = A</td></tr>
            <tr><td class="p-2 border font-semibold">Annulment Law</td><td class="p-2 border">A . 0 = 0</td><td class="p-2 border">A + 1 = 1</td></tr>
            <tr><td class="p-2 border font-semibold">Idempotent Law</td><td class="p-2 border">A . A = A</td><td class="p-2 border">A + A = A</td></tr>
            <tr><td class="p-2 border font-semibold">Complement Law</td><td class="p-2 border">A . A' = 0</td><td class="p-2 border">A + A' = 1</td></tr>
            <tr><td class="p-2 border font-semibold">Commutative Law</td><td class="p-2 border">A . B = B . A</td><td class="p-2 border">A + B = B + A</td></tr>
            <tr><td class="p-2 border font-semibold">Associative Law</td><td class="p-2 border">(A . B) . C = A . (B . C)</td><td class="p-2 border">(A + B) + C = A + (B + C)</td></tr>
          </tbody>
        </table>
      </div>

      <h3>විශේෂ නීති</h3>
      <ul>
          <li><b>විඝටන නීතිය (Distributive Law):</b> A . (B + C) = (A . B) + (A . C)  සහ  A + (B . C) = (A + B) . (A + C)</li>
          <li><b>අවශෝෂණ නීතිය (Absorption Law):</b> A + (A . B) = A  සහ  A . (A + B) = A</li>
          <li><b>ඩි මෝගන්ගේ නීතිය (De Morgan's Theorem):</b> (A + B)' = A' . B'  සහ  (A . B)' = A' + B'</li>
      </ul>

      <h3>වීජ ගණිතමය ක්‍රමය භාවිතයෙන් සුළු කිරීම</h3>
      <p>ඉහත නීති භාවිතා කර, තාර්කික ප්‍රකාශනයක් පියවරෙන් පියවර සුළු කිරීම මෙමගින් සිදු වේ.</p>
      <div class="my-6 p-4 border rounded-lg bg-background">
        <h4 class="font-bold text-lg mb-2">උදාහරණය: Z = (A + B) • (A + B̅) + AB̅ සුළු කිරීම</h4>
        <ol class="list-decimal pl-5 mt-2 space-y-2 text-sm">
            <li><b>පියවර 1:</b> විඝටන නීතිය යොදන්න (A + BC = (A+B)(A+C)).<br/>
                <code>(A + B) • (A + B̅) = A + (B • B̅)</code>
            </li>
            <li><b>පියවර 2:</b> අනුපූරක නීතිය යොදන්න (B • B̅ = 0).<br/>
                <code>A + 0 = A</code>
            </li>
            <li><b>පියවර 3:</b> දැන් ප්‍රකාශනය <code>A + AB̅</code> බවට පත් වේ. අවශෝෂණ නීතිය (Absorption Law) යොදන්න.<br/>
                 <code>A + AB̅ = A</code>
            </li>
        </ol>
        <p class="mt-2 font-bold text-center">සරල කළ ප්‍රකාශනය: <code>Z = A</code></p>
      </div>
    `,
    tags: ["boolean algebra", "simplification", "de morgan", "laws"],
    relatedQuestions: ["pq-2024-p1-13", {id: "pq-2011-p1-27"}, {id:"pq-2013-p1-1"}, {id:"pq-2013-p1-26"}, {id: "pq-2014-p1-12"}],
};

    
