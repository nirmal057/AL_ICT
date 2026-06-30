
import type { Note } from "../../types";

export const note_9_8_3: Note = {
    id: "note-9-8-3",
    title: "if-else ප්‍රකාශය (දෙමංසල තේරීම)",
    type: "html",
    content: `
      <h2><code>if-else</code> ප්‍රකාශය (Two-way Selection)</h2>
      <p><code>if-else</code> ප්‍රකාශය, කොන්දේසියක් මත පදනම්ව ක්‍රියාත්මක විය යුතු මාර්ග දෙකක් (two paths) තෝරා ගැනීමට ඉඩ සලසයි. කොන්දේසිය සත්‍ය (True) නම් <code>if</code> කොටස ක්‍රියාත්මක වන අතර, කොන්දේසිය අසත්‍ය (False) නම් <code>else</code> කොටස ක්‍රියාත්මක වේ. ඕනෑම අවස්ථාවක මෙම කොටස් දෙකෙන් එකක් පමණක් ක්‍රියාත්මක වීම සහතික කෙරේ.</p>
      
      <h4 class="mt-4">Syntax</h4>
      <pre class="p-3 rounded-md mt-2"><code>if condition:
    # block of code if condition is true
    statement_A
else:
    # block of code if condition is false
    statement_B
</code></pre>

    <h3 class="mt-6 font-semibold">උදාහරණ</h3>

      <h4 class="mt-4">උදාහරණය 1: ඉරට්ටේ ද ඔත්තේ ද යන්න පරීක්ෂා කිරීම</h4>
      <Activity id="python-sandbox" code={\`# Example 1: Check if a number is even or odd
number = 7
print(f"Checking the number {number}...")

# The modulo operator (%) gives the remainder of a division.
# If a number is perfectly divisible by 2, the remainder is 0.
if number % 2 == 0:
    print(f"{number} is an Even number.")
else:
    print(f"{number} is an Odd number.")

# Try changing the 'number' to an even value like 10 and run again!\`} />

      <h4 class="mt-4">උදාහරණය 2: මුරපදයක් පරීක්ෂා කිරීම</h4>
      <p>මෙය සරල මුරපද පරීක්ෂාවකි. සැබෑ ලෝකයේදී, මුරපද කිසිවිටෙක මෙසේ සරල පෙළ (plain text) ලෙස ගබඩා නොකරන බව මතක තබා ගන්න!</p>
       <Activity id="python-sandbox" code={\`# Example 2: Password check
correct_password = "password123"
user_input = "password123"

print("Checking entered password...")

if user_input == correct_password:
    print("Access Granted. Welcome!")
else:
    print("Access Denied. Incorrect password.")

# Change the value of 'user_input' to something else to see the 'else' block run.
# e.g., user_input = "wrongpassword"
\`} />
    `,
    tags: ["control structures", "selection", "if-else", "python"],
};
