
import type { Note } from "../../types";

export const note_9_9_0: Note = {
    id: "note-9-9-0",
    title: "උප-ක්‍රමලේඛ (ශ්‍රිත)",
    type: "html",
    content: `
      <h2>උප-ක්‍රමලේඛ (Subprograms) / ශ්‍රිත (Functions)</h2>
      <p>ශ්‍රිතයක් යනු නිශ්චිත කාර්යයක් ඉටු කිරීම සඳහා නිර්මාණය කරන ලද, නැවත නැවත භාවිත කළ හැකි කේත කොටසකි. විශාල වැඩසටහනක් කුඩා, කළමනාකරණය කළ හැකි ශ්‍රිත වලට බෙදීමෙන්, කේතය වඩාත් සංවිධානාත්මක, කියවීමට පහසු සහ නඩත්තු කිරීමට පහසු වේ.</p>

      <h3>ශ්‍රිත වර්ග (Types of Functions)</h3>
      <ul>
        <li><b>තුළැති ශ්‍රිත (Built-in Functions):</b> Python භාෂාව සමඟ පෙරනිමියෙන් එන ශ්‍රිත. උදා: <code>print()</code>, <code>len()</code>, <code>input()</code>.</li>
        <li><b>පරිශීලක-නිර්වචිත ශ්‍රිත (User-defined Functions):</b> ක්‍රමලේඛකයා විසින් තම අවශ්‍යතාවය පරිදි නිර්මාණය කරන ශ්‍රිත.</li>
      </ul>

      <h3>ශ්‍රිතයක් නිර්වචනය කිරීම සහ කැඳවීම</h3>
      <p>Python හි, ශ්‍රිතයක් <code>def</code> මූල පදය භාවිතයෙන් නිර්වචනය කෙරේ.</p>
      <Activity id="python-sandbox" code={\`# Defining a function
def greet(name):
    """This function greets the person passed in as a parameter."""
    print("Hello, " + name + ". Good morning!")

# Calling the function
print("Calling the function for 'Nimal'")
greet("Nimal")

print("Calling the function for 'Saman'")
greet("Saman")\`} />
      
      <h3>පරාමිතීන් සහ තර්ක (Parameters and Arguments)</h3>
      <ul>
        <li><b>පරාමිතිය (Parameter):</b> ශ්‍රිතය නිර්වචනය කිරීමේදී, ශ්‍රිතයට ලබා දෙන දත්ත සඳහා යොදන විචල්‍ය නාමයයි. (ඉහත උදාහරණයේ <code>name</code>).</li>
        <li><b>තර්කය (Argument):</b> ශ්‍රිතය කැඳවීමේදී, එම පරාමිතියට ලබා දෙන සැබෑ අගයයි. (ඉහත උදාහරණයේ <code>"Nimal"</code>).</li>
      </ul>

      <h3>ප්‍රත්‍යාගමන අගයන් (Return Values)</h3>
      <p>ශ්‍රිතයකට, එය කැඳවූ ස්ථානයට ප්‍රතිඵලයක් ලෙස දත්ත ආපසු යැවිය හැක. මේ සඳහා <code>return</code> ප්‍රකාශය භාවිතා කරයි.</p>
       <Activity id="python-sandbox" code={\`# This function takes two numbers and returns their sum
def add(x, y):
    return x + y

# Call the function and store the returned value in a variable
sum_result = add(5, 3)
print("The sum is:", sum_result)

another_sum = add(10, 20)
print("Another sum is:", another_sum)\`} />

      <h3>විචල්‍යයන්ගේ විෂය පථය (Scope of Variables)</h3>
      <p>විචල්‍යයක විෂය පථය යනු එම විචල්‍යයට ප්‍රවේශ විය හැකි වැඩසටහනේ කොටසයි.</p>
      <ul>
        <li><b>දේශීය විචල්‍ය (Local Variables):</b> ශ්‍රිතයක් තුළ නිර්වචනය කරන ලද විචල්‍යයන් වේ. ඒවාට ප්‍රවේශ විය හැක්කේ එම ශ්‍රිතය තුළ සිට පමණි.</li>
        <li><b>ගෝලීය විචල්‍ය (Global Variables):</b> සියලුම ශ්‍රිත වලින් පිටත, වැඩසටහනේ ප්‍රධාන කොටසේ නිර්වචනය කරන ලද විචල්‍යයන් වේ. වැඩසටහන පුරාම ඕනෑම ශ්‍රිතයකට මෙම විචල්‍යයන්ට ප්‍රවේශ විය හැක. ශ්‍රිතයක් තුළ ගෝලීය විචල්‍යයක අගය වෙනස් කිරීමට නම්, <code>global</code> මූල පදය භාවිතා කළ යුතුය.</li>
      </ul>
      <Activity id="python-sandbox" code={\`global_var = "I am global"

def my_func():
    # To modify the global variable, you must use the 'global' keyword
    # global global_var
    # global_var = "Modified global"
    local_var = "I am local"
    print("Inside the function:")
    print(global_var) # Can access (read) global variable
    print(local_var)

print("Outside the function:")
print(global_var)
my_func()

# The following line will cause an error because local_var is not accessible here.
# Try uncommenting it to see the error!
# print(local_var)\`} />
    `,
    tags: ["functions", "procedures", "subprograms", "python", "scope"],
    relatedQuestions: ["pq-2022-p1-38", "pq-2022-p1-39", "pq-2022-p1-42", "pq-2022-p2-8b", "pq-2023-p1-40", "pq-2023-p1-41", "pq-2020-p1-38", "pq-2020-p1-40", {id:"pq-2013-p1-17"}],
};
