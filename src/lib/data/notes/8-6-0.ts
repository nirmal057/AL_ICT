
import type { Note } from "../../types";

export const note_8_6_0: Note = {
    id: "note-8-6-0",
    title: "දත්ත සමුදා පද්ධති සංරචක සහ SQL",
    type: "html",
    content: `
      <h2>දත්ත සමුදා පද්ධති සංරචක (Database System Components)</h2>
      <p>දත්ත සමුදා පද්ධතියක් යනු දත්ත ගබඩා කිරීම, කළමනාකරණය කිරීම, සහ ඒවාට ප්‍රවේශ වීම සඳහා එකට ක්‍රියා කරන දෘඪාංග, මෘදුකාංග, දත්ත, ක්‍රියාපටිපාටි, සහ මිනිසුන්ගෙන් සමන්විත පද්ධතියකි. මෙහි මෘදුකාංග සංරචකය <b>දත්ත සමුදා කළමනාකරණ පද්ධතිය (DBMS)</b> ලෙස හැඳින්වේ.</p>

      <h3>දත්ත සමුදා කළමනාකරණ පද්ධතිය (DBMS - Database Management System)</h3>
      <p>DBMS යනු දත්ත සමුදාය නිර්මාණය කිරීමට, එයට ප්‍රවේශ වීමට, සහ එය කළමනාකරණය කිරීමට පරිශීලකයින්ට සහ අනෙකුත් වැඩසටහන් වලට ඉඩ සලසන මෘදුකාංග එකතුවකි. (උදා: MySQL, Oracle, SQL Server, PostgreSQL).</p>
      
      <h3>ව්‍යුහගත විමසුම් බස (SQL - Structured Query Language)</h3>
      <p>SQL යනු සම්බන්ධක දත්ත සමුදායන් (relational databases) සමඟ සන්නිවේදනය කිරීම සඳහා භාවිතා කරන සම්මත භාෂාවයි. දත්ත නිර්වචනය කිරීමට, හැසිරවීමට, සහ පාලනය කිරීමට SQL විධාන භාවිතා කරයි.</p>

      <div class="grid md:grid-cols-2 gap-4 my-4">
        <div class="p-4 border rounded-lg bg-muted/30">
          <h4 class="font-bold">දත්ත නිර්වචන භාෂාව (DDL - Data Definition Language)</h4>
          <p class="text-sm">දත්ත සමුදායේ ව්‍යුහය (schema) නිර්මාණය කිරීමට සහ වෙනස් කිරීමට භාවිතා කරයි.</p>
          <ul class="list-disc pl-5 mt-2 text-sm">
            <li><b>CREATE:</b> නව වගු (TABLE), දර්ශක (INDEX), හෝ දත්ත සමුදා (DATABASE) නිර්මාණය කරයි.</li>
            <li><b>ALTER:</b> පවතින වගුවක ව්‍යුහය වෙනස් කරයි (තීරු එකතු කිරීම/ඉවත් කිරීම).</li>
            <li><b>DROP:</b> වගු හෝ දත්ත සමුදා සම්පූර්ණයෙන්ම මකා දමයි.</li>
          </ul>
        </div>
        <div class="p-4 border rounded-lg bg-muted/30">
          <h4 class="font-bold">දත්ත හැසිරවීමේ භාෂාව (DML - Data Manipulation Language)</h4>
          <p class="text-sm">දත්ත සමුදායේ ඇති දත්ත සමඟ වැඩ කිරීමට භාවිතා කරයි.</p>
           <ul class="list-disc pl-5 mt-2 text-sm">
            <li><b>SELECT:</b> වගු වලින් දත්ත ලබා ගනී.</li>
            <li><b>INSERT:</b> වගුවකට නව දත්ත (පේළි) ඇතුළත් කරයි.</li>
            <li><b>UPDATE:</b> පවතින දත්ත යාවත්කාලීන කරයි.</li>
            <li><b>DELETE:</b> වගුවකින් දත්ත (පේළි) මකා දමයි.</li>
          </ul>
        </div>
      </div>
      <p>DCL (Data Control Language - e.g., GRANT, REVOKE) සහ TCL (Transaction Control Language - e.g., COMMIT, ROLLBACK) ලෙස තවත් SQL උප-භාෂා ඇත.</p>
      
      <h3>ප්‍රායෝගික SQL විමසුම්</h3>
      <p>පහත දැක්වෙන්නේ සිසුන් සහ පාඨමාලා පිළිබඳ දත්ත සමුදායක් සඳහා පොදු SQL විමසුම් කිහිපයකි. ඔබට මෙම විමසුම් පහත SQL Sandbox එක තුළ ක්‍රියාත්මක කර බැලිය හැක!</p>
      
      <Activity id="tool-sql-sandbox"/>
    `,
    tags: ["dbms", "sql", "ddl", "dml"],
    relatedQuestions: [{ id: "pq-2022-p1-31", content: "", questionNumber: 0, correctAnswer: 0, options: []}, { id: "pq-2022-p2-9b-i", content: "", questionNumber: "", totalMarks: 0}, { id: "pq-2023-p1-32", content: "", questionNumber: 0, correctAnswer: 0, options: []}, { id: "pq-2023-p1-33", content: "", questionNumber: 0, correctAnswer: 0, options: []}, {id: "pq-2020-p1-26"}, {id: "pq-2020-p1-29"}, {id: "pq-2011-p1-26"}],
};

    