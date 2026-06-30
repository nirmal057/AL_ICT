
import type { Note } from "../../types";

export const note_9_8_2: Note = {
    id: "note-9-8-2",
    title: "if ප්‍රකාශය (සරල තේරීම)",
    type: "html",
    content: `
      <h2><code>if</code> ප්‍රකාශය (Simple Selection)</h2>
      <p>මෙය තේරීම් ව්‍යුහවලින් සරලම එකයි. <code>if</code> ප්‍රකාශය මගින්, ලබා දී ඇති කොන්දේසියක් (condition) සත්‍ය (True) වන්නේ දැයි පරීක්ෂා කරයි. කොන්දේසිය සත්‍ය නම් පමණක්, ඊට අදාළ කේත කුට්ටිය (code block) ක්‍රියාත්මක වේ. කොන්දේසිය අසත්‍ය (False) නම්, එම කේත කුට්ටිය සම්පූර්ණයෙන්ම මඟ හරිනු ලැබේ.</p>
      
      <h4 class="mt-4">Syntax</h4>
      <pre><code>if condition:
    # block of code to be executed if the condition is true
    statement_1
    statement_2
</code></pre>
      <p>මෙහි <code>condition</code> යනු <code>True</code> හෝ <code>False</code> යන boolean අගයක් ලබා දෙන ඕනෑම ප්‍රකාශනයකි (උදා: <code>age > 18</code>, <code>x == 10</code>).</p>
      
      <h3 class="mt-6 font-semibold">උදාහරණ</h3>

      <h4 class="mt-4">උදාහරණය 1: ඡන්දය ප්‍රකාශ කිරීමේ සුදුසුකම</h4>
      <p>වයස 18 හෝ ඊට වැඩි නම් පමණක් සුදුසුකම් පණිවිඩය පෙන්වයි.</p>
      <Activity id="python-sandbox" code={\`# Example 1: Simple 'if' statement
age = 20

print(f"The age is {age}.")

# Check if the age is 18 or greater
if age >= 18:
    print("You are eligible to vote.")
    print("Please make sure you are registered.")

# This line will always be printed because it is outside the if block
print("End of program.")
\`} />

      <h4 class="mt-4">උදාහරණය 2: වට්ටමක් ලබා දීම</h4>
      <p>පාරිභෝගිකයෙකු රු. 5000 කට වඩා වැඩි භාණ්ඩ මිලදී ගන්නේ නම්, 10% ක වට්ටමක් ලබා දෙන වැඩසටහනකි.</p>
      <Activity id="python-sandbox" code={\`# Example 2: Giving a discount
purchase_amount = 6500
discount_percentage = 10
final_amount = purchase_amount

print(f"Initial amount: Rs. {purchase_amount}")

# Check if the purchase amount is greater than 5000
if purchase_amount > 5000:
    discount = purchase_amount * (discount_percentage / 100)
    final_amount = purchase_amount - discount
    print(f"Congratulations! You get a {discount_percentage}% discount of Rs. {discount:.2f}")

print(f"Final payable amount: Rs. {final_amount:.2f}")
\`} />

    <h3 class="mt-6 font-semibold">"සත්‍යතාව" (Truthiness) සංකල්පය</h3>
    <p>Python වලදී, <code>if</code> කොන්දේසියක් සඳහා boolean අගයක් (True/False) පමණක් නොව, වෙනත් දත්ත වර්ගද භාවිතා කළ හැක. Python, මෙම අගයන් "සත්‍ය" (truthy) හෝ "අසත්‍ය" (falsy) ලෙස සලකයි.</p>
    <ul>
        <li><b>Falsy අගයන්:</b> <code>False</code>, <code>None</code>, ඕනෑම සංඛ්‍යාත්මක ශුන්‍යයක් (<code>0</code>, <code>0.0</code>), සහ හිස් අනුක්‍රම (<code>""</code>, <code>[]</code>, <code>()</code>, <code>{}</code>).</li>
        <li><b>Truthy අගයන්:</b> Falsy නොවන අනෙක් සියලුම අගයන්.</li>
    </ul>

    <h4 class="mt-4">උදාහරණය 3: පරිශීලක නාමයක් හිස් දැයි පරීක්ෂා කිරීම</h4>
    <p>පරිශීලකයෙකු නමක් ඇතුළත් කර ඇත්දැයි පරීක්ෂා කිරීමට මෙම සංකල්පය භාවිතා කළ හැක.</p>
    <Activity id="python-sandbox" code={\`# Example 3: Checking for an empty string
username = "Nimal"
# username = "" # Try uncommenting this line to see what happens

if username: # This checks if the string is NOT empty (i.e., it's truthy)
    print(f"Welcome, {username}!")
else: # This will run if the string is empty (falsy)
    print("Username cannot be empty.")
\`} />
    `,
    tags: ["control structures", "selection", "if", "python", "truthiness"],
    relatedQuestions: [{ id: "pq-2022-p1-41", content: "", questionNumber: 0, correctAnswer: 0, options: []}],
};
