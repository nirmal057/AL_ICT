
import type { Note } from "../../types";

export const note_9_8_1: Note = {
    id: "note-9-8-1",
    title: "අනුක්‍රමය සහ ඉන්ඩෙන්ටේෂන්",
    type: "html",
    content: `
      <h2>අනුක්‍රමය (Sequence)</h2>
      <p>අනුක්‍රමය යනු සරලම පාලන ව්‍යුහයයි. මෙහිදී, කේතයේ ඇති ප්‍රකාශ (statements) කිසිදු මඟහැරීමකින් හෝ නැවත කිරීමකින් තොරව, ලියා ඇති අනුපිළිවෙලටම, එකින් එක, ඉහළ සිට පහළට ක්‍රියාත්මක වේ. මෙය පරිගණක වැඩසටහනක පෙරනිමි (default) හැසිරීමයි.</p>
      
      <Activity id="python-sandbox" code={\`# Sequential Execution
# Each line is executed one after the other, from top to bottom.

print("Step 1: Welcome to the program.")

# Variable assignments also happen in sequence
item_name = "Book"
price = 500
quantity = 2
print("Step 2: Variables have been assigned.")

# Calculations are performed in order
total_cost = price * quantity
print("Step 3: Calculation is complete.")

# Final output is displayed at the end
print(f"Step 4: The total cost for {quantity} {item_name}s is Rs. {total_cost}.")
\`} />

      <h2 class="mt-8">Python හි ඉන්ඩෙන්ටේෂන් වල වැදගත්කම</h2>
      <p>බොහෝ ක්‍රමලේඛන භාෂා (උදා: C, Java) <code>{ }</code> වැනි වරහන්, කේත කුට්ටි (code blocks) වෙන්කර දැක්වීමට භාවිතා කරයි. නමුත්, Python මෙම කාර්යය සඳහා <b>ඉන්ඩෙන්ටේෂන් (Indentation)</b>, එනම් පේළියක ආරම්භයේ ඇති හිස්තැන් භාවිතා කරයි. මෙය Python භාෂාවේ ඇති අනන්‍ය සහ අනිවාර්ය ලක්ෂණයකි.</p>
      <p><code>if</code>, <code>while</code>, <code>for</code>, සහ <code>def</code> (ශ්‍රිත) වැනි පාලන ව්‍යුහයන්ට අයත් කේත කුට්ටි හඳුනා ගන්නේ මෙම හිස්තැන් මගිනි. එකම කුට්ටියකට අයත් සියලුම ප්‍රකාශ එකම මට්ටමකින් (සම්මතය: හිස්තැන් 4ක්) indent කළ යුතුය. වැරදි ඉන්ඩෙන්ටේෂන්, <code>IndentationError</code> නමින් දෝෂයක් ඇති කරයි.</p>

       <Activity id="python-sandbox" code={\`# Correct Indentation
if True:
    print("This is inside the if block.")
    print("This is also inside the if block.")
    if 10 > 5:
        print("This is in a nested block, indented further.")

print("This is outside the if block.")

# Incorrect Indentation - This will cause an error!
# Try uncommenting the lines below to see the IndentationError.
# if True:
# print("This line has incorrect indentation.")
\`} />

      <p>මෙම ක්‍රමය, සියලුම Python කේත එකම ශෛලියකට අනුව පිරිසිදුව සහ කියවීමට පහසුව තබා ගැනීමට ක්‍රමලේඛකයින්ට බල කරයි.</p>
    `,
    tags: ["control structures", "sequence", "indentation", "python"],
    relatedQuestions: [{ id: "pq-2011-p1-20" }],
};

    

    