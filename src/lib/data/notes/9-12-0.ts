
import type { Note } from "../../types";

export const note_9_12_0: Note = {
    id: "note-9-12-0",
    title: "දත්ත සමුදා කළමනාකරණය",
    type: "html",
    content: `
      <h2>දත්ත සමුදා කළමනාකරණය (Database Management with Python)</h2>
      <p>ක්‍රමලේඛනයකදී දත්ත සමුදායක් සමඟ අන්තර් ක්‍රියා කිරීම, දත්ත මත පදනම් වූ යෙදවුම් (data-driven applications) නිර්මාණය කිරීමේදී අත්‍යවශ්‍ය වේ. Python, SQL විමසුම් (queries) ක්‍රියාත්මක කිරීමෙන් දත්ත සමුදායන් කළමනාකරණය කිරීමට ඉඩ සලසයි.</p>

      <h3>මූලික මෙහෙයුම් (CRUD Operations)</h3>
      <p>දත්ත සමුදා කළමනාකරණයේ මූලික මෙහෙයුම් හතර "CRUD" ලෙස හැඳින්වේ.</p>
      <ul>
          <li><b>Create (නිර්මාණය කිරීම):</b> දත්ත සමුදායට නව දත්ත ඇතුළත් කිරීම. (SQL: <code>INSERT</code>)</li>
          <li><b>Read (කියවීම / ලබාගැනීම):</b> දත්ත සමුදායෙන් දත්ත ලබා ගැනීම. (SQL: <code>SELECT</code>)</li>
          <li><b>Update (යාවත්කාලීන කිරීම):</b> පවතින දත්ත වෙනස් කිරීම. (SQL: <code>UPDATE</code>)</li>
          <li><b>Delete (මකා දැමීම):</b> දත්ත සමුදායෙන් දත්ත ඉවත් කිරීම. (SQL: <code>DELETE</code>)</li>
      </ul>

      <h3>Python සමඟ දත්ත සමුදාය සම්බන්ධ කිරීම (උදාහරණයක් ලෙස)</h3>
      <p>Python වැඩසටහනකින් දත්ත සමුදායක් සමඟ වැඩ කිරීමට සාමාන්‍යයෙන් පුස්තකාලයක් (උදා: <code>sqlite3</code>, <code>mysql-connector-python</code>) භාවිතා කරයි. ක්‍රියාවලිය සාමාන්‍යයෙන් පහත පියවර අනුගමනය කරයි:</p>
      <ol>
          <li>පුස්තකාලය import කර ගැනීම.</li>
          <li>දත්ත සමුදායට සම්බන්ධතාවයක් (connection) ඇති කර ගැනීම.</li>
          <li>කර්සරයක් (cursor) නිර්මාණය කර ගැනීම. කර්සරය යනු SQL විමසුම් ක්‍රියාත්මක කිරීමට භාවිතා කරන වස්තුවකි.</li>
          <li>SQL විමසුම string එකක් ලෙස නිර්මාණය කර, කර්සරය හරහා එය ක්‍රියාත්මක කිරීම.</li>
          <li>වෙනස්කම් ස්ථිර කිරීමට <code>connection.commit()</code> භාවිතා කිරීම.</li>
          <li>සම්බන්ධතාවය වසා දැමීම.</li>
      </ol>
      <Activity id="python-sandbox" code={\`# Example using SQLite (which is built-in to Python)
import sqlite3

# This is an in-memory database, it will be gone when the program finishes.
# To make it persistent, you can pass a file name: sqlite3.connect('example.db')
conn = sqlite3.connect(':memory:')

# Create a cursor object to execute SQL commands
c = conn.cursor()

# Execute a query to create a table
c.execute('''CREATE TABLE stocks
             (date text, trans text, symbol text, qty real, price real)''')

# Execute another query to insert a row of data
c.execute("INSERT INTO stocks VALUES ('2024-01-05','BUY','MSFT',100,380.5)")

# Save (commit) the changes to the database
conn.commit()

# --- Now let's read the data back ---
print("Data in stocks table:")
# Execute a SELECT query
for row in c.execute('SELECT * FROM stocks ORDER BY price'):
        print(row)

# Close the connection to the database
conn.close()
\`} />
    `,
    tags: ["database management", "crud", "sql", "python", "sqlite"],
};

