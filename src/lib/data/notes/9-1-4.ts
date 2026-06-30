
import type { Note } from "../../types";

export const note_9_1_4: Note = {
    id: "note-9-1-4",
    title: "පියවර 4: විසඳුම ක්‍රියාත්මක කිරීම",
    type: "html",
    content: `
        <h2>පියවර 4: විසඳුම ක්‍රියාත්මක කිරීම (Implementation)</h2>
        <p>මෙම අදියරේදී, අප පෙර පියවරේදී සැලසුම් කළ ඇල්ගොරිතමය (ගැලීම් සටහන හෝ ව්‍යාජ කේතය), පරිගණකයට තේරුම් ගත හැකි ක්‍රමලේඛන භාෂාවක් (programming language) භාවිතයෙන් සැබෑ කේතයක් බවට පත් කරනු ලැබේ. මෙය "කේතනය කිරීම" (coding) ලෙසද හැඳින්වේ.</p>
        <p>භාෂාව තෝරාගැනීම (උදා: Python, Java, C++) ගැටලුවේ ස්වභාවය සහ පවතින සම්පත් මත රඳා පවතී. Python, එහි සරල බව සහ කියවීමේ පහසුව නිසා ආරම්භකයින් සඳහා ඉතා යෝග්‍ය වේ.</p>

        <div class="my-6 p-4 border rounded-lg bg-background">
            <h4 class="font-bold text-lg mb-2">ප්‍රායෝගික උදාහරණය: Python කේතය</h4>
            <p>අපගේ "ශිෂ්‍ය සාමාර්ථය ගණනය කිරීමේ" ඇල්ගොරිතමය Python භාෂාවෙන් ක්‍රියාත්මක කරන ආකාරය පහත දැක්වේ. මෙම කේතය, අපගේ ව්‍යාජ කේතයට සෘජුවම අනුරූප වන බව නිරීක්ෂණය කරන්න.</p>
            
            <p class="mt-4">පහත ඇති Python Sandbox එකෙහි "Run" බොත්තම ක්ලික් කර, විවිධ ලකුණු ඇතුළත් කර ප්‍රතිඵලය බලන්න.</p>

            <Activity id="python-sandbox" code={\`# For this sandbox, we will use fixed values instead of asking for input.
# You can change these values to test different scenarios.
mark1 = 80
mark2 = 70
mark3 = 60

# Step 2: Process the data
total = mark1 + mark2 + mark3
average = total / 3

# Step 3: Make a decision
if average >= 50:
    status = "Pass"
else:
    status = "Fail"

# Step 4: Display the output
# The f-string (f"...") is a modern way to format strings in Python
print(f"Marks: {mark1}, {mark2}, {mark3}")
print(f"Average score: {average:.2f}") # .2f formats the average to 2 decimal places
print(f"Status: {status}")
\`} />
             <p class="mt-2 text-sm text-muted-foreground">කේතය ලිවීමෙන් පසු, එය නිවැරදිව ක්‍රියා කරන්නේදැයි තහවුරු කර ගැනීමට පරීක්ෂා කිරීමේ අදියරට යොමු විය යුතුය.</p>
        </div>
    `,
    tags: ["problem solving", "implementation", "coding", "python"],
};
