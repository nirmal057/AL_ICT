
import type { Note } from "../../types";

export const note_9_3_2: Note = {
    id: "note-9-3-2",
    title: "ව්‍යාජ කේත සහ හස්ත රේඛණය",
    type: "html",
    content: `
        <h2>ව්‍යාජ කේත (Pseudocode)</h2>
        <p>ව්‍යාජ කේත යනු ඇල්ගොරිතමයක් නිරූපණය කිරීම සඳහා භාවිතා කරන තවත් ක්‍රමයකි. මෙහිදී ඉංග්‍රීසි භාෂාවේ වචන සහ සරල ක්‍රමලේඛන භාෂාවලට සමාන ව්‍යුහයක් භාවිතා කරමින් ඇල්ගොරිතමයේ පියවර ලියා දක්වයි. මෙය කිසිදු නිශ්චිත ක්‍රමලේඛන භාෂාවකට අයත් නොවන අතර, ක්‍රමලේඛකයාට තර්කනය (logic) පහසුවෙන් තේරුම් ගැනීමට සහ පසුව ඕනෑම ක්‍රමලේඛන භාෂාවකට පරිවර්තනය කිරීමට ඉඩ සලසයි.</p>

        <h3>ව්‍යාජ කේත වල භාවිතා වන මූලික විධාන (Keywords)</h3>
        <div class="overflow-x-auto my-4">
            <table class="w-full border">
                <thead class="bg-muted"><tr class="text-left"><th class="p-2 border">විධානය (Keyword)</th><th class="p-2 border">කාර්යය</th><th class="p-2 border">උදාහරණය</th></tr></thead>
                <tbody>
                    <tr><td class="p-2 border"><code>BEGIN, END</code></td><td class="p-2 border">ඇල්ගොරිතමයේ ආරම්භය සහ අවසානය.</td><td class="p-2 border"><code>BEGIN ... END</code></td></tr>
                    <tr><td class="p-2 border"><code>INPUT, READ, GET</code></td><td class="p-2 border">පරිශීලකයාගෙන් දත්ත ලබාගැනීම.</td><td class="p-2 border"><code>INPUT age</code></td></tr>
                    <tr><td class="p-2 border"><code>PRINT, DISPLAY, OUTPUT</code></td><td class="p-2 border">ප්‍රතිඵල පෙන්වීම.</td><td class="p-2 border"><code>PRINT total</code></td></tr>
                    <tr><td class="p-2 border"><code>SET, PROCESS, CALCULATE</code></td><td class="p-2 border">ගණනය කිරීම් හෝ අගයක් පැවරීම.</td><td class="p-2 border"><code>SET total = mark1 + mark2</code></td></tr>
                    <tr><td class="p-2 border"><code>IF...THEN...ELSE...ENDIF</code></td><td class="p-2 border">කොන්දේසි මත පදනම්ව තීරණ ගැනීම.</td><td class="p-2 border"><code>IF age > 18 THEN ... ELSE ... ENDIF</code></td></tr>
                    <tr><td class="p-2 border"><code>WHILE...ENDWHILE</code></td><td class="p-2 border">කොන්දේසියක් සත්‍ය වන තාක් නැවත නැවත ක්‍රියාත්මක වීම (Loop).</td><td class="p-2 border"><code>WHILE count < 5 ... ENDWHILE</code></td></tr>
                    <tr><td class="p-2 border"><code>FOR...ENDFOR</code></td><td class="p-2 border">නිශ්චිත වාර ගණනක් නැවත නැවත ක්‍රියාත්මක වීම (Loop).</td><td class="p-2 border"><code>FOR i from 1 to 10 ... ENDFOR</code></td></tr>
                </tbody>
            </table>
        </div>
        
        <h2 class="mt-8">හස්ත රේඛණය (Hand Tracing / Dry Run)</h2>
        <p>හස්ත රේඛණය යනු පරිගණකයක් නොමැතිව, කඩදාසියක් සහ පෑනක් භාවිතයෙන්, ඇල්ගොරිතමයක් (ගැලීම් සටහනක් හෝ ව්‍යාජ කේතයක්) පියවරෙන් පියවර ක්‍රියාත්මක කර බැලීමේ ක්‍රියාවලියයි. මෙහි ප්‍රධාන අරමුණ වන්නේ ඇල්ගොරිතමයේ තර්කනය නිවැරදිද සහ එය බලාපොරොත්තු වන ප්‍රතිඵලය ලබා දෙන්නේද යන්න තහවුරු කර ගැනීමයි.</p>
        <h4>හස්ත රේඛණයක් සිදුකරන ආකාරය</h4>
        <ol class="list-decimal list-inside space-y-2 text-sm">
            <li><b>වගුවක් සකස් කිරීම:</b> ඔබගේ ඇල්ගොරිතමයේ ඇති සියලුම විචල්‍යයන් සඳහා තීරු (columns) සහිත වගුවක් සාදන්න. ප්‍රතිදානයන් සටහන් කිරීමට "Output" නමින් තවත් තීරුවක් එක් කරන්න.</li>
            <li><b>පියවරෙන් පියවර අනුගමනය:</b> ඇල්ගොරිතමයේ පළමු පියවරේ සිට ආරම්භ කර, එක් එක් පියවර ක්‍රියාත්මක වන විට විචල්‍යයන්ගේ අගයන් වගුවේ යාවත්කාලීන කරන්න.</li>
            <li><b>ප්‍රතිදානය සටහන් කිරීම:</b> යම් පියවරකදී ප්‍රතිදානයක් (Output/Print) සිදු වන්නේ නම්, එම අගය "Output" තීරුවේ සටහන් කරන්න.</li>
            <li><b>අවසානය දක්වා ක්‍රියාත්මක කිරීම:</b> ඇල්ගොරිතමය අවසන් වන තුරු මෙම ක්‍රියාවලිය සිදු කරන්න.</li>
        </ol>
        
        <h2 class="mt-8">ව්‍යාජ කේත සහ හස්ත රේඛණ සඳහා උදාහරණ</h2>

        <div class="my-4 p-4 border rounded-lg bg-background">
            <h4 class="font-bold">උදාහරණය 1: සංඛ්‍යා දෙකකින් විශාලතම සංඛ්‍යාව සෙවීම</h4>
            <pre><code>BEGIN
    INPUT num1, num2
    IF num1 > num2 THEN
        PRINT num1, " is the larger number."
    ELSE
        PRINT num2, " is the larger number."
    ENDIF
END</code></pre>
            <h5 class="font-semibold text-sm mt-2">Hand Trace (num1=10, num2=15)</h5>
            <div class="overflow-x-auto"><table class="w-full my-2 border text-center text-xs">
                <thead class="bg-muted"><tr><th class="p-1 border">Step</th><th class="p-1 border">Pseudocode Line</th><th class="p-1 border">num1</th><th class="p-1 border">num2</th><th class="p-1 border">Condition (num1 > num2)</th><th class="p-1 border">Output</th></tr></thead>
                <tbody>
                    <tr><td class="p-1 border">1</td><td class="p-1 border text-left">INPUT num1, num2</td><td class="p-1 border">10</td><td class="p-1 border">15</td><td class="p-1 border">-</td><td class="p-1 border"></td></tr>
                    <tr><td class="p-1 border">2</td><td class="p-1 border text-left">IF num1 > num2 THEN</td><td class="p-1 border">10</td><td class="p-1 border">15</td><td class="p-1 border">False</td><td class="p-1 border">Go to ELSE</td></tr>
                    <tr><td class="p-1 border">3</td><td class="p-1 border text-left">ELSE -> PRINT num2...</td><td class="p-1 border">10</td><td class="p-1 border">15</td><td class="p-1 border">-</td><td class="p-1 border">15 is the larger number.</td></tr>
                    <tr><td class="p-1 border">4</td><td class="p-1 border text-left">END</td><td class="p-1 border">10</td><td class="p-1 border">15</td><td class="p-1 border">-</td><td class="p-1 border"></td></tr>
                </tbody>
            </table></div>
        </div>

        <div class="my-4 p-4 border rounded-lg bg-background">
            <h4 class="font-bold">උදාහරණය 2: 1 සිට 5 දක්වා සංඛ්‍යා මුද්‍රණය කිරීම (WHILE Loop)</h4>
            <pre><code>BEGIN
    SET counter = 1
    WHILE counter <= 5
        PRINT counter
        SET counter = counter + 1
    ENDWHILE
END</code></pre>
            <h5 class="font-semibold text-sm mt-2">Hand Trace</h5>
            <div class="overflow-x-auto"><table class="w-full my-2 border text-center text-xs">
                <thead class="bg-muted"><tr><th class="p-1 border">Step</th><th class="p-1 border">Pseudocode Line</th><th class="p-1 border">counter</th><th class="p-1 border">Condition (counter <= 5)</th><th class="p-1 border">Output</th></tr></thead>
                <tbody>
                    <tr><td class="p-1 border">1</td><td class="p-1 border text-left">SET counter = 1</td><td class="p-1 border">1</td><td class="p-1 border">-</td><td class="p-1 border"></td></tr>
                    <tr><td class="p-1 border">2</td><td class="p-1 border text-left">WHILE counter <= 5</td><td class="p-1 border">1</td><td class="p-1 border">True</td><td class="p-1 border"></td></tr>
                    <tr><td class="p-1 border">3</td><td class="p-1 border text-left">PRINT counter</td><td class="p-1 border">1</td><td class="p-1 border">-</td><td class="p-1 border">1</td></tr>
                    <tr><td class="p-1 border">4</td><td class="p-1 border text-left">SET counter = counter + 1</td><td class="p-1 border">2</td><td class="p-1 border">-</td><td class="p-1 border"></td></tr>
                    <tr><td class="p-1 border">5</td><td class="p-1 border text-left">WHILE counter <= 5</td><td class="p-1 border">2</td><td class="p-1 border">True</td><td class="p-1 border"></td></tr>
                    <tr><td class="p-1 border">6</td><td class="p-1 border text-left">PRINT counter</td><td class="p-1 border">2</td><td class="p-1 border">-</td><td class="p-1 border">2</td></tr>
                    <tr><td class="p-1 border">...</td><td class="p-1 border text-left">...</td><td class="p-1 border">...</td><td class="p-1 border">...</td><td class="p-1 border">...</td></tr>
                    <tr><td class="p-1 border">14</td><td class="p-1 border text-left">WHILE counter <= 5</td><td class="p-1 border">5</td><td class="p-1 border">True</td><td class="p-1 border"></td></tr>
                    <tr><td class="p-1 border">15</td><td class="p-1 border text-left">PRINT counter</td><td class="p-1 border">5</td><td class="p-1 border">-</td><td class="p-1 border">5</td></tr>
                    <tr><td class="p-1 border">16</td><td class="p-1 border text-left">SET counter = counter + 1</td><td class="p-1 border">6</td><td class="p-1 border">-</td><td class="p-1 border"></td></tr>
                    <tr><td class="p-1 border">17</td><td class="p-1 border text-left">WHILE counter <= 5</td><td class="p-1 border">6</td><td class="p-1 border">False</td><td class="p-1 border">Loop Ends</td></tr>
                    <tr><td class="p-1 border">18</td><td class="p-1 border text-left">END</td><td class="p-1 border">6</td><td class="p-1 border">-</td><td class="p-1 border"></td></tr>
                </tbody>
            </table></div>
             <p class="text-sm mt-1"><b>පැහැදිලි කිරීම:</b> වගුවෙන් පෙන්වන පරිදි, counter විචල්‍යයේ අගය 1 සිට 5 දක්වා වැඩිවන විට, එක් එක් වටයේදී එම අගය මුද්‍රණය වේ. counter හි අගය 6 වූ විට, WHILE කොන්දේසිය අසත්‍ය වන අතර පුඩුවෙන් ඉවත් වී ඇල්ගොරිතමය අවසන් වේ. අවසාන ප්‍රතිදානය 1, 2, 3, 4, 5 ලෙස නිවැරදිව ලැබේ.</p>
        </div>
    `,
    tags: ["algorithms", "pseudocode", "hand trace", "dry run", "problem solving"],
    relatedQuestions: [{id: "pq-2019-p1-32"}],
};
    

    