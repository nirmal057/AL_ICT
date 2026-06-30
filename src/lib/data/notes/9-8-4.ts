
import type { Note } from "../../types";

export const note_9_8_4: Note = {
    id: "note-9-8-4",
    title: "if-elif-else ප්‍රකාශය (බහුවිධ තේරීම)",
    type: "html",
    content: `
      <h2><code>if-elif-else</code> ප්‍රකාශය (Multi-way Selection)</h2>
      <p>කොන්දේසි කිහිපයක් එකින් එක පරීක්ෂා කිරීමට මෙම ව්‍යුහය භාවිතා කරයි. Python, පළමු <code>if</code> කොන්දේසියේ සිට පිළිවෙලින් පහළට පරීක්ෂා කරයි. <code>elif</code> යනු "else if" යන්නෙහි කෙටි রূপයයි.</p>
      <ul>
        <li>යම් කොන්දේසියක් සත්‍ය (True) වූ විට, ඊට අදාළ කේත කොටස ක්‍රියාත්මක කර, සම්පූර්ණ <code>if-elif-else</code> ව්‍යුහයෙන් ඉවත් වේ.</li>
        <li>කිසිදු <code>if</code> හෝ <code>elif</code> කොන්දේසියක් සත්‍ය නොවන්නේ නම්, අවසානයේ ඇති <code>else</code> කොටස ක්‍රියාත්මක වේ (<code>else</code> කොටසක් තිබේ නම්).</li>
      </ul>
      <p>මෙය විවිධ අවස්ථා සඳහා විවිධ ක්‍රියා සිදු කිරීමට අවශ්‍ය විට ඉතා ප්‍රයෝජනවත් වේ.</p>
      
      <h4 class="mt-4">Syntax</h4>
      <pre><code>if condition_A:
    # block of code if condition_A is true
elif condition_B:
    # block of code if condition_A is false but condition_B is true
elif condition_C:
    # block of code if A and B are false but C is true
else:
    # block of code if all previous conditions are false
</code></pre>
      
      <h3 class="mt-6 font-semibold">උදාහරණ</h3>

      <h4 class="mt-4">උදාහරණය 1: ලකුණු මත පදනම්ව ශ්‍රේණියක් ලබා දීම</h4>
      <Activity id="python-sandbox" code={\`# Example 1: Grading system based on score
score = 75

print(f"The score is {score}")

if score >= 80:
    print("Grade: A")
elif score >= 65:
    print("Grade: B")
elif score >= 50:
    print("Grade: C")
else:
    print("Grade: F (Fail)")

# Try changing the 'score' value to 90, 70, 55, and 40 to see different outputs!\`}/>

      <h4 class="mt-4">උදාහරණය 2: සංඛ්‍යාවක ලකුණ (+, -, 0) පරීක්ෂා කිරීම</h4>
      <p>මෙම උදාහරණයෙන් <code>elif</code> කොන්දේසි වල අනුපිළිවෙලෙහි වැදගත්කමද පෙන්වයි. උදාහරණයක් ලෙස, ඔබ <code>score >= 50</code> කොන්දේසිය <code>score >= 80</code> ට පෙර තැබුවොත්, ලකුණු 90ක් ලබාගත් ශිෂ්‍යයෙකුට පවා 'C' ශ්‍රේණිය ලැබෙනු ඇත, මන්ද පළමු සත්‍ය වන කොන්දේසිය 50ට වඩා වැඩි වීමයි.</p>
      <Activity id="python-sandbox" code={\`# Example 2: Checking the sign of a number
number = -10

print(f"The number is {number}")

if number > 0:
    print("The number is positive.")
elif number < 0:
    print("The number is negative.")
else:
    print("The number is zero.")
\`}/>
    `,
    tags: ["control structures", "selection", "if-elif-else", "python"],
    relatedQuestions: [{id: "pq-2020-p1-39"}, {id: "pq-2012-p1-20"}]
};



    