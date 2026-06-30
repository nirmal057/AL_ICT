
import type { Note } from "../../types";

export const note_9_7_0: Note = {
    id: "note-9-7-0",
    title: "Python ක්‍රමලේඛන මූලිකාංග",
    type: "html",
    content: `
      <h2>Python ක්‍රමලේඛන මූලිකාංග (Python Fundamentals)</h2>
      <p>Python යනු ඉගෙනීමට පහසු, ඉතා ජනප්‍රිය ඉහළ මට්ටමේ ක්‍රමලේඛන භාෂාවකි. එහි සරල වාක්‍ය වින්‍යාසය (syntax) නිසා ආරම්භකයින්ට ඉතා යෝග්‍ය වේ. මෙම කොටසේදී, Python ක්‍රමලේඛනයේ මූලිකම සංකල්ප හඳුන්වා දෙනු ලැබේ.</p>

      <h3>ක්‍රමලේඛයක ව්‍යුහය (Structure of a Program)</h3>
      <p>Python ක්‍රමලේඛයක් යනු ඉහළ සිට පහළට ක්‍රියාත්මක වන ප්‍රකාශ (statements) මාලාවකි. Python වලදී, කේත කුට්ටි (code blocks) වෙන්කර දැක්වීමට වරහන් වෙනුවට ඉන්ඩෙන්ටේෂන් (indentation - පේළියක ආරම්භයේ ඇති හිස්තැන්) භාවිතා කිරීම විශේෂත්වයකි.</p>

      <h3>විවරණ (Comments)</h3>
      <p>විවරණ යනු කේතය ගැන පැහැදිලි කිරීම් ලිවීමට භාවිතා කරන, නමුත් වැඩසටහන ක්‍රියාත්මක වීමේදී නොසලකා හරින පාඨයන් ය. Python වල, <code>#</code> ලකුණ භාවිතයෙන් තනි පේළියේ විවරණ යෙදිය හැක.</p>
      <Activity id="python-sandbox" code={\`# This is a single-line comment in Python
# Comments are ignored by the interpreter

# This line assigns the text "ICT" to the variable 'name'
name = "ICT" 

print(name) # This will print the value of the 'name' variable\`} />

      <h3>නියත සහ විචල්‍ය (Constants and Variables)</h3>
      <ul>
        <li><b>විචල්‍ය (Variable):</b> වැඩසටහන ක්‍රියාත්මක වන විට අගය වෙනස් විය හැකි, දත්ත ගබඩා කර තබා ගන්නා නාමික ස්ථානයකි. Python වලදී විචල්‍යයක් නිර්මාණය කිරීමට, නමක් දී ඊට අගයක් පැවරීම (assign) සිදු කරයි. Python හි විචල්‍ය නාම (Identifiers) අක්ෂරයකින් හෝ යටි ඉරකින් (_) ආරම්භ විය යුතුය.</li>
        <li><b>නියත (Constant):</b> වැඩසටහන ක්‍රියාත්මක වන විට අගය වෙනස් නොවන අගයකි. Python වල නියත සඳහා විශේෂ keyword එකක් නොමැති නමුත්, සම්ප්‍රදායක් ලෙස ඉංග්‍රීසි ලොකු අකුරු (UPPERCASE) භාවිතයෙන් නියත නම් කිරීම සිදු කරයි.</li>
      </ul>
      <Activity id="python-sandbox" code={\`# A variable to store a student's age
age = 18 
print("Initial age:", age)

# The value of the variable can be changed
age = age + 1 
print("New age:", age)

# A constant (by convention) to store the value of PI
PI = 3.14159
print("The value of PI is:", PI)\`} />
      
      <h3>ප්‍රාථමික දත්ත වර්ග (Primitive Data Types)</h3>
      <ul>
        <li><b>Integer (<code>int</code>):</b> පූර්ණ සංඛ්‍යා (e.g., 10, -5, 0).</li>
        <li><b>Float:</b> දශම සංඛ්‍යා (e.g., 3.14, -0.5).</li>
        <li><b>String (<code>str</code>):</b> අක්ෂර මාලාවක් (e.g., "Hello", 'Python').</li>
        <li><b>Boolean (<code>bool</code>):</b> සත්‍ය (<code>True</code>) හෝ අසත්‍ය (<code>False</code>) යන අගයන් දෙක පමණක් ගන්නා දත්ත වර්ගයකි.</li>
      </ul>
        <Activity id="python-sandbox" code={\`# Examples of different data types
num_students = 25       # Integer
avg_score = 78.5        # Float
subject_name = "ICT"    # String
is_passing = True       # Boolean

print("Number of students:", num_students, type(num_students))
print("Average score:", avg_score, type(avg_score))
print("Subject:", subject_name, type(subject_name))
print("Is passing:", is_passing, type(is_passing))\`} />

      <h3>කාරක (Operators)</h3>
      <p>විචල්‍ය සහ අගයන් මත මෙහෙයුම් සිදු කිරීමට කාරක භාවිතා කරයි.</p>
      <ul>
        <li><b>ගණිතමය (Arithmetic):</b> <code>+</code> (එකතු කිරීම), <code>-</code> (අඩු කිරීම), <code>*</code> (ගුණ කිරීම), <code>/</code> (බෙදීම), <code>%</code> (මොඩියුලස් - ඉතිරිය), <code>**</code> (ඝාතනය), <code>//</code> (පූර්ණ සංඛ්‍යා බෙදීම - Floor Division).</li>
        <li><b>පැවරුම් (Assignment):</b> <code>=</code>, <code>+=</code>, <code>-=</code>, etc.</li>
        <li><b>සම්බන්ධක (Relational/Comparison):</b> <code>==</code> (සමානද?), <code>!=</code> (අසමානද?), <code>></code>, <code><</code>, <code>>=</code>, <code><=</code>. මෙමගින් boolean අගයක් (True/False) ලැබේ.</li>
        <li><b>තාර්කික (Logical):</b> <code>and</code>, <code>or</code>, <code>not</code>. Boolean අගයන් සම්බන්ධ කිරීමට භාවිතා කරයි.</li>
        <li><b>බිටු අනුසාරිත (Bitwise):</b> <code>&</code> (AND), <code>|</code> (OR), <code>^</code> (XOR), <code>~</code> (NOT). බිටු මට්ටමින් මෙහෙයුම් සිදු කරයි.</li>
      </ul>
      <p><b>කාරක ප්‍රමුඛතාව (Operator Precedence):</b> ගණිතයේදී මෙන්, Python වලදී ද කාරක ක්‍රියාත්මක වීම සඳහා නිශ්චිත ප්‍රමුඛතා අනුපිළිවෙලක් ඇත (උදා: ගුණ කිරීම සහ බෙදීම, එකතු කිරීමට සහ අඩු කිරීමට පෙර සිදු වේ).</p>
      
      <h3>ආදාන/ප්‍රතිදාන (Input/Output)</h3>
      <ul>
          <li><b>ආදානය:</b> පරිශීලකයාගෙන් දත්ත ලබා ගැනීමට <code>input()</code> ශ්‍රිතය භාවිතා කරයි. මෙය සැමවිටම string එකක් ලෙස දත්ත ලබා දෙයි. එය ගණිත කර්ම සඳහා යොදා ගැනීමට පෙර <code>int()</code> හෝ <code>float()</code> වැනි ශ්‍රිතයකින් පරිවර්තනය කළ යුතුය.</li>
          <li><b>ප්‍රතිදානය:</b> තිරය මත අගයන් පෙන්වීමට <code>print()</code> ශ්‍රිතය භාවිතා කරයි.</li>
      </ul>
       <Activity id="python-sandbox" code={\`# In this sandbox, input() is disabled. 
# We'll simulate getting input.
# name = input("Enter your name: ") 
# age_str = input("Enter your age: ")

name = "Kamal"
age_str = "18"
print("Simulated input for name: " + name)
print("Simulated input for age: " + age_str)

age = int(age_str) # convert string to integer

# Print a formatted message
print("Hello, " + name + "! You will be " + str(age + 1) + " next year.")\`}/>
    `,
    tags: ["python", "variables", "operators", "data types", "fundamentals"],
    relatedQuestions: ["pq-2022-p1-37", "pq-2023-p1-39", "pq-2020-p1-35", {id: "pq-2011-p1-37"}, {id: "pq-2011-p1-46"}, {id: "pq-2011-p1-47"}, {id:"pq-2013-p1-14"}, {id:"pq-2013-p1-16"}, {id:"pq-2013-p1-19"}, {id: "pq-2014-p1-4"}, {id: "pq-2014-p1-5"}],
};

    
