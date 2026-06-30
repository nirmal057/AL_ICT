
import type { Note } from "../../types";

export const note_9_11_0: Note = {
    id: "note-9-11-0",
    title: "ගොනු හැසිරවීම",
    type: "html",
    content: `
      <h2>ගොනු හැසිරවීම (File Handling)</h2>
      <p>Python වැනි ක්‍රමලේඛන භාෂා, පරිගණකයේ ගොනු පද්ධතියේ ඇති ගොනු (files) සමඟ වැඩ කිරීමට පහසුකම් සපයයි. දත්ත ස්ථිරව ගබඩා කිරීමට මෙය එක් ක්‍රමයකි. ගොනු හැසිරවීමේ මූලික මෙහෙයුම් නම්:</p>
      <ul>
        <li><b>විවෘත කිරීම (Opening):</b> ගොනුවක් සමඟ වැඩ කිරීමට පෙර එය <code>open()</code> ශ්‍රිතය භාවිතයෙන් විවෘත කළ යුතුය. මෙහිදී ගොනුව කියවීමට (read - 'r'), ලිවීමට (write - 'w'), හෝ එකතු කිරීමට (append - 'a') ද යන්න සඳහන් කරයි.</li>
        <li><b>කියවීම (Reading):</b> විවෘත කළ ගොනුවකින් දත්ත කියවා වැඩසටහන තුළට ලබා ගැනීම.</li>
        <li><b>ලිවීම (Writing):</b> වැඩසටහනේ ඇති දත්ත ගොනුවක් තුළට ලිවීම. ලිවීමේදී පවතින දත්ත මකා අලුත් දත්ත ලියැවේ.</li>
        <li><b>එකතු කිරීම (Appending):</b> පවතින ගොනුවක අවසානයට නව දත්ත එකතු කිරීම.</li>
        <li><b>වසා දැමීම (Closing):</b> ගොනුව සමඟ වැඩ කිරීම අවසන් වූ පසු, එය <code>close()</code> ශ්‍රිතයෙන් වසා දැමීම හොඳ පුරුද්දකි. මෙය සම්පත් නිදහස් කිරීමට සහ දත්ත සුරක්ෂිතව ගබඩා වීම සහතික කිරීමට උපකාරී වේ. <code>with</code> ප්‍රකාශය භාවිතා කිරීමෙන් ගොනුව ස්වයංක්‍රීයව වැසී යයි.</li>
      </ul>
      <Activity id="python-sandbox" code={\`# Writing to a file using 'with' statement (recommended)
# 'w' mode creates the file if it does not exist, and overwrites it if it does.
with open("myfile.txt", "w") as f:
    f.write("Hello, World!\\n")
    f.write("This is a new line.\\n")

# Appending to the same file
# 'a' mode adds content to the end of the file.
with open("myfile.txt", "a") as f:
    f.write("This line is appended.\\n")

# Reading from a file
print("Reading the content of myfile.txt:")
with open("myfile.txt", "r") as f:
    content = f.read()
    print(content)
\`} />
    `,
    tags: ["file handling", "python", "io"],
    relatedQuestions: ["pq-2020-p1-41", "pq-2024-p1-42", {id: "pq-2011-p1-50"}],
};

    