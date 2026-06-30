
import type { Note } from "../../types";

export const note_9_5_0: Note = {
    id: "note-9-5-0",
    title: "ක්‍රමලේඛන පරිවර්තනය",
    type: "html",
    content: `
      <h2>ක්‍රමලේඛන පරිවර්තනය (Program Translation)</h2>
      <p>මිනිසුන් වන අප, Python, Java, හෝ C වැනි ඉහළ මට්ටමේ භාෂා (High-level languages) භාවිතයෙන් ක්‍රමලේඛ ලියන නමුත්, පරිගණකයේ මධ්‍ය සැකසුම් ඒකකයට (CPU) එම භාෂා සෘජුවම තේරුම් ගත නොහැක. CPU එකට තේරුම් ගත හැක්කේ 0 සහ 1 වලින් සැදුම්ලත් <strong>යන්ත්‍ර භාෂාව (Machine Language)</strong> පමණි. එබැවින්, අප ලියන මිනිසාට-තේරුම්ගත-හැකි කේතය, යන්ත්‍රයට-තේරුම්ගත-හැකි කේතයක් බවට පරිවර්තනය කිරීමේ ක්‍රියාවලිය අත්‍යවශ්‍ය වේ.</p>

      <ul>
        <li><strong>ප්‍රභව කේතය (Source Code):</strong> ක්‍රමලේඛකයෙකු විසින් Python, Java, C වැනි ඉහළ මට්ටමේ භාෂාවකින් ලියන ලද, මිනිසාට කියවිය හැකි කේතයයි.</li>
        <li><strong>වස්තු කේතය (Object Code) / යන්ත්‍ර කේතය (Machine Code):</strong> පරිගණකයේ CPU එකට තේරුම් ගත හැකි, ද්විමය (binary) උපදෙස් මාලාවයි. ප්‍රභව කේතය පරිවර්තනය කිරීමෙන් පසු ලැබෙන ප්‍රතිඵලය මෙයයි.</li>
      </ul>
      
      <p>මෙම පරිවර්තනය සඳහා "ක්‍රමලේඛන පරිවර්තක" (Program Translators) නමින් හැඳින්වෙන විශේෂ මෘදුකාංග භාවිතා කරයි. ප්‍රධාන පරිවර්තක වර්ග දෙකකි.</p>

      <div class="grid md:grid-cols-2 gap-4 my-4">
        <div class="p-4 border rounded-lg">
          <h3 class="font-bold">1. අර්ථ වින්‍යාසකය (Interpreter)</h3>
          <p class="text-sm">අර්ථ වින්‍යාසකයක්, ප්‍රභව කේතයේ <strong>එක් පේළියක් (statement) බැගින්</strong> කියවා, එය යන්ත්‍ර කේතයට පරිවර්තනය කර, <strong>වහාම ක්‍රියාත්මක කරයි</strong>. එය සම්පූර්ණ වැඩසටහනම එකවර පරිවර්තනය නොකරයි. වැඩසටහන ක්‍රියාත්මක කරන සෑම අවස්ථාවකදීම මෙම පේළියෙන්-පේළිය පරිවර්තනය නැවත සිදු කළ යුතුය.</p>
        </div>
        <div class="p-4 border rounded-lg">
          <h3 class="font-bold">2. සම්පාදකය (Compiler)</h3>
          <p class="text-sm">සම්පාදකයක්, <strong>සම්පූර්ණ ප්‍රභව කේතයම එකවර</strong> කියවා, එය සම්පූර්ණයෙන්ම යන්ත්‍ර කේතයට පරිවර්තනය කර, <strong>ක්‍රියාත්මක කළ හැකි ගොනුවක් (executable file - e.g., .exe file)</strong> නිර්මාණය කරයි. වැඩසටහන ක්‍රියාත්මක කිරීමේදී මෙම පෙර-පරිවර්තනය කරන ලද ගොනුව කෙලින්ම භාවිතා කරන බැවින්, එය ඉතා වේගවත් වේ.</p>
        </div>
      </div>
      
      <h4>සැසඳීම: සම්පාදකය vs. අර්ථ වින්‍යාසකය</h4>
      <div class="overflow-x-auto"><table class="w-full border">
        <thead class="bg-muted">
            <tr><th class="p-2 border">ලක්ෂණය</th><th class="p-2 border">අර්ථ වින්‍යාසකය (Interpreter)</th><th class="p-2 border">සම්පාදකය (Compiler)</th></tr>
        </thead>
        <tbody>
            <tr><td class="p-2 border font-semibold">ක්‍රියාවලිය</td><td class="p-2 border">පේළියෙන් පේළිය පරිවර්තනය කර ක්‍රියාත්මක කරයි.</td><td class="p-2 border">සම්පූර්ණ කේතයම එකවර පරිවර්තනය කර වස්තු ගොනුවක් සාදයි.</td></tr>
            <tr><td class="p-2 border font-semibold">ක්‍රියාත්මක වීමේ වේගය</td><td class="p-2 border">මන්දගාමී (සෑම වාරයකදීම පරිවර්තනය අවශ්‍ය නිසා).</td><td class="p-2 border">ඉතා වේගවත් (දැනටමත් පරිවර්තනය කර ඇති නිසා).</td></tr>
            <tr><td class="p-2 border font-semibold">දෝෂ වාර්තාකරණය</td><td class="p-2 border">දෝෂයක් හමු වූ පේළියේදීම වැඩසටහන නතර කරයි. නිදොස් කිරීමට පහසුය.</td><td class="p-2 border">සියලුම වාක්‍ය වින්‍යාස දෝෂ පරිවර්තනය අවසානයේ එකවර වාර්තා කරයි.</td></tr>
             <tr><td class="p-2 border font-semibold">ස්වාධීනත්වය</td><td class="p-2 border">ක්‍රියාත්මක කිරීමට සෑම විටම අර්ථ වින්‍යාසකය අවශ්‍ය වේ.</td><td class="p-2 border">නිර්මාණය කළ ක්‍රියාත්මක කළ හැකි ගොනුව, සම්පාදකය නොමැතිව වුවද ක්‍රියාත්මක කළ හැක.</td></tr>
            <tr><td class="p-2 border font-semibold">උදාහරණ භාෂා</td><td class="p-2 border">Python, JavaScript, BASIC</td><td class="p-2 border">C, C++, Pascal</td></tr>
        </tbody>
      </table></div>

      <h3 class="mt-4">සන්ධාරකය (Linker)</h3>
      <p>විශාල වැඩසටහන් බොහෝ විට කුඩා කේත ගොනු කිහිපයකට බෙදා ලියනු ලැබේ. එසේම, <code>print()</code> වැනි සම්මත කාර්යයන් සඳහා අප ලියන කේතයට අමතරව, භාෂාව විසින් සපයන ලද පුස්තකාල (libraries) ද භාවිතා කරයි. සන්ධාරකයක කාර්යය වන්නේ, සම්පාදනය කරන ලද මෙම විවිධ වස්තු කේත ගොනු සහ අවශ්‍ය පුස්තකාල ගොනු එකට "සම්බන්ධ කර", තනි, සම්පූර්ණ ක්‍රියාත්මක කළ හැකි ගොනුවක් නිර්මාණය කිරීමයි.</p>
    `,
    tags: ["compiler", "interpreter", "linker", "source code", "object code", "translation"],
    relatedQuestions: [{ id: "pq-2019-p1-16" }, {id: "pq-2011-p1-44"}]
};

    