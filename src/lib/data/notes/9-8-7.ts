
import type { Note } from "../../types";

export const note_9_8_7: Note = {
    id: "note-9-8-7",
    title: "නීඩිත ව්‍යුහ සහ ලූප පාලනය",
    type: "html",
    content: `
      <h2>නීඩිත පාලන ව්‍යුහ (Nested Control Structures)</h2>
      <p>එක් පාලන ව්‍යුහයක් (<code>if</code>, <code>for</code>, <code>while</code>) තුළ තවත් පාලන ව්‍යුහයක් යෙදීම "නීඩිත කිරීම" (nesting) ලෙස හැඳින්වේ. මෙමගින් වඩාත් සංකීර්ණ තර්කන සහ ක්‍රියාවලි නිර්මාණය කළ හැක.</p>

      <h4>උදාහරණය 1: නීඩිත <code>for</code> ලූප</h4>
      <p>පහත උදාහරණයේ, පිටත ලූපය (outer loop) එක් වරක් ක්‍රියාත්මක වන විට, ඇතුළත ලූපය (inner loop) සම්පූර්ණයෙන්ම ක්‍රියාත්මක වේ. මෙය ගුණ කිරීමේ වගුවක් වැනි රටා නිර්මාණයට යොදාගත හැක.</p>
      <Activity id="python-sandbox" code={\`# Print a simple pattern using nested loops
# The outer loop controls the rows
for i in range(1, 4):  # Rows 1, 2, 3
    # The inner loop controls the columns for each row
    for j in ['A', 'B']: # Columns A, B
        print(f"Cell ({i}, {j})")
    print("--- End of row ---")\`} />

      <h4>උදාහරණය 2: නීඩිත <code>if</code> ප්‍රකාශන</h4>
      <p>පරිශීලකයෙකු ලොග් වීමේදී, පරිශීලක නාමය සහ මුරපදය යන දෙකම නිවැරදි දැයි පරීක්ෂා කිරීමට නීඩිත if භාවිතා කළ හැක.</p>
      <Activity id="python-sandbox" code={\`# Example of nested if statements
correct_username = "admin"
correct_password = "password123"

# Simulated user inputs
entered_username = "admin"
entered_password = "password123"

if entered_username == correct_username:
    print("Username correct.")
    if entered_password == correct_password:
        print("Password correct. Access granted!")
    else:
        print("Password incorrect. Access denied.")
else:
    print("Username not found. Access denied.")
\`} />

      <h2 class="mt-6">ලූප පාලන ප්‍රකාශ (Loop Control Statements)</h2>
      <p>සමහර විට, ලූපයක සාමාන්‍ය ප්‍රවාහය වෙනස් කිරීමට අවශ්‍ය වේ. මේ සඳහා <code>break</code> සහ <code>continue</code> යන ප්‍රකාශ භාවිතා කරයි.</p>

      <h3 class="mt-4"><code>break</code> ප්‍රකාශය</h3>
      <p><code>break</code> ප්‍රකාශය මගින්, එය අයත් වන ලූපය (<code>for</code> හෝ <code>while</code>) සම්පූර්ණයෙන්ම සහ ක්ෂණිකව නතර කර, ලූපයෙන් පසුව ඇති ඊළඟ ප්‍රකාශයට පාලනය යොමු කරයි. එය කොන්දේසියක් සපුරාලූ විට ලූපයෙන් "පැන යාමට" භාවිතා කරයි.</p>

      <h4>උදාහරණය 3: ලැයිස්තුවක අංක 12 හමු වූ විට සෙවීම නතර කිරීම</h4>
      <Activity id="python-sandbox" code={\`numbers = [1, 5, 8, 12, 19, 25]

print("Searching for the number 12...")
for num in numbers:
    print(f"Checking {num}...")
    if num == 12:
        print("Found 12! Breaking the loop.")
        break  # Exit the loop immediately
    print(f"{num} is not 12, continuing...")

print("Loop finished.")\`} />

      <h3 class="mt-4"><code>continue</code> ප්‍රකාශය</h3>
      <p><code>continue</code> ප්‍රකාශය මගින්, ලූපයේ වත්මන් පුනරාවර්තනය (current iteration) පමණක් නතර කර, ඊළඟ පුනරාවර්තනය ආරම්භ කරයි. එනම්, <code>continue</code> ප්‍රකාශයට පසුව ඇති ලූපය තුළ වූ කේත කොටස එම වාරය සඳහා මඟ හැරේ.</p>

      <h4>උදාහරණය 4: ඉරට්ටේ සංඛ්‍යා පමණක් මුද්‍රණය කිරීම (ඔත්තේ සංඛ්‍යා මඟහැරීම)</h4>
      <Activity id="python-sandbox" code={\`print("Printing even numbers from 1 to 10:")
for i in range(1, 11):  # Numbers from 1 to 10
    # Check if the number is odd
    if i % 2 != 0:  
        # If it is odd, skip to the next iteration
        print(f"Skipping odd number: {i}")
        continue  
    
    # This line only runs for even numbers
    print(f"Found even number: {i}")
\`} />
    `,
    tags: ["nested loops", "loop control", "break", "continue", "python"],
    relatedQuestions: ["pq-2022-p2-3b", "pq-2022-p2-8a-i", "pq-2023-p1-43", "pq-2023-p1-45", "pq-2024-p1-39", "pq-2024-p1-41"],
};
