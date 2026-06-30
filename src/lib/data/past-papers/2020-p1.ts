
import type { Paper } from "../../types";

export const paper2020_p1: Paper = {
    id: "past-paper-2020-p1",
    title: "A/L ICT Paper I - 2020",
    examName: {
      sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
      tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
      english: "General Certificate of Education (Adv. Level) Examination",
    },
    year: 2020,
    issuer: {
      sinhala: "ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුව",
      tamil: "இலங்கைப் பரீட்சைத் திணைக்களம்",
      english: "Department of Examinations, Sri Lanka"
    },
    subject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය",
    subjectCode: 70,
    time: {
        sinhala: "පැය දෙකයි",
        tamil: "இரண்டு மணித்தியாலம்",
        english: "Two hours"
    },
    content: {
      title: "Paper I",
      instructions: "* මෙම ප්‍රශ්න පත්‍රයේ සියලුම ප්‍රශ්නවලට පිළිතුරු සපයන්න.\n* පිළිතුරු පත්‍රයෙහි නියමිත ස්ථානයේ ඔබගේ විභාග අංකය ලියන්න.\n* පිළිතුරු පත්‍රයේ පිටුපස ඇති උපදෙස් ද කියවා බලන්න. එම උපදෙස් ප්‍රවේශමෙන් පිළිපදින්න.\n* 1 සිට 50 දක්වා එක් එක් ප්‍රශ්නය සඳහා, (1), (2), (3), (4), (5) යන විකල්ප අතුරින් නිවැරදි හෝ වඩාත් සුදුසු පිළිතුර තෝරා පිළිතුරු පත්‍රයේ පිටුපස ඇති උපදෙස් අනුව, ඔබේ පිළිතුර (x) ලකුණකින් සලකුණු කරන්න.\n* ගණක යන්ත්‍ර භාවිතය තහනම්.",
      questions: [
        {
          "id": "pq-2020-p1-1",
          "questionNumber": 1,
          "content": "<p>පරිගණකයක මතක ධූරාවලියක් සම්බන්ධයෙන් පහත කවරක් නිවැරදි ද?</p><p>A - මතක පද්ධතියේ ඉහළ ස්තරයේ සිට පහළ ස්තරය දක්වා ගමන් කිරීමේදී ප්‍රවේශ කාලය (access time) වැඩි වේ.</p><p>B - මතක පද්ධතියේ ඉහළ ස්තරයේ සිට පහළ ස්තරය දක්වා ගමන් කිරීමේදී එක් බිටුවක පිරිවැය (cost per bit) වැඩි වේ.</p><p>C - ප්‍රධාන මතකය (main memory) සහ L1 නිහිත මතකය (L1 Cache) අතර දත්ත හුවමාරු වේ.</p>",
          "options": ["A පමණි", "A සහ B පමණි", "A සහ C පමණි", "B සහ C පමණි", "A, B සහ C යන සියල්ල ම"],
          "correctAnswer": 3,
          "relatedNoteId": "note-2-4-0"
        },
        {
          "id": "pq-2020-p1-2",
          "questionNumber": 2,
          "content": "<p>පරිගණක මතක වර්ග සම්බන්ධයෙන් පහත කවරක් නිවැරදි ද?</p><p>A - සසම්භාවී ප්‍රවේශ මතකය (RAM), නෂ්‍ය නොවන (non-volatile) මතකයකි.</p><p>B - රෙජිස්තර යනු සකසනය (processor) තුළ ඇති කුඩා මතක ඒකක වේ.</p><p>C - නිහිත මතකය (cache memory), ප්‍රධාන මතකයට වඩා වේගවත් වේ.</p>",
          "options": ["A පමණි", "B පමණි", "C පමණි", "A සහ B පමණි", "B සහ C පමණි"],
          "correctAnswer": 5,
          "relatedNoteId": "note-2-4-0"
        },
        {
          "id": "pq-2020-p1-3",
          "questionNumber": 3,
          "content": "<p>පරිගණක පරම්පරා සම්බන්ධයෙන් පහත කවරක් නිවැරදි ද?</p><p>A - පළමු පරම්පරාවේ පරිගණක රික්තක නළ (vacuum tubes) භාවිත කළ අතර, දෙවන පරම්පරාවේ පරිගණක ට්‍රාන්සිස්ටර (transistors) භාවිත කළේ ය.</p><p>B - තෙවන පරම්පරාවේ පරිගණක, දෙවන පරම්පරාවේ පරිගණකවලට වඩා වේගවත් විය.</p><p>C - සිව්වන පරම්පරාවේ පරිගණක, කෘත්‍රිම බුද්ධිය (Artificial Intelligence) භාවිත කළේ ය.</p>",
          "options": ["A පමණි", "B පමණි", "C පමණි", "A සහ B පමණි", "A, B සහ C යන සියල්ල ම"],
          "correctAnswer": 4,
          "relatedNoteId": "note-2-1-2"
        },
        {
          "id": "pq-2020-p1-4",
          "questionNumber": 4,
          "content": "<p>පරිගණක මෙහෙයුම් පද්ධතියක කාර්යයක් නොවන්නේ පහත කවරක් ද?</p>",
          "options": ["මතක කළමනාකරණය", "ක්‍රියායන (process) කළමනාකරණය", "පරිශීලක කළමනාකරණය", "ගොනු කළමනාකරණය", "උපාංග කළමනාකරණය"],
          "correctAnswer": 3,
          "relatedNoteId": "note-5-4-0"
        },
        {
          "id": "pq-2020-p1-5",
          "questionNumber": 5,
          "content": "<p>දෙකෙහි අනුපූරක (2’s complement) ක්‍රමය භාවිතයෙන් 0000 1101₂ - 0000 0110₂ හි අගය සොයන්න.</p>",
          "options": ["00000001", "00000111", "00001001", "00010011", "00010101"],
          "correctAnswer": 2,
          "relatedNoteId": "note-3-1-3"
        },
        {
          "id": "pq-2020-p1-6",
          "questionNumber": 6,
          "content": "<p>−6₁₀ ට තුල්‍ය වන ද්විමය සංඛ්‍යාව බිටු 8, 2 හි අනුපූරක ක්‍රමයෙන් නිරූපණය වන්නේ කෙසේ ද?</p>",
          "options": ["00000110", "10000110", "11111001", "11111010", "11111011"],
          "correctAnswer": 4,
          "relatedNoteId": "note-3-1-3"
        },
        {
          "id": "pq-2020-p1-7",
          "questionNumber": 7,
          "content": "<p>−17₁₀ + 12₁₀ සඳහා පිළිතුර බිටු 8, 2 හි අනුපූරක ක්‍රමයෙන් නිරූපණය කරන්නේ කෙසේ ද?</p>",
          "options": ["11111011", "11111101", "11111111", "00000101", "11100101"],
          "correctAnswer": 1,
          "relatedNoteId": "note-3-1-3"
        },
        {
          "id": "pq-2020-p1-8",
          "content": "<p>EBCDIC අනුලක්ෂණ කේතය (character code) සම්බන්ධයෙන් පහත කවරක් නිවැරදි ද?</p>",
          "options": ["7-bit කේතයකි.", "8-bit කේතයකි.", "16-bit කේතයකි.", "32-bit කේතයකි.", "64-bit කේතයකි."],
          "correctAnswer": 2,
          "relatedNoteId": "note-3-2-2"
        },
        {
          "id": "pq-2020-p1-22",
          "questionNumber": 22,
          "content": "<p>ඒකක පරීක්ෂාව (unit test), අනුකලන පරීක්ෂාව (integration test) සහ පද්ධති පරීක්ෂාව (system test) සඳහා නිවැරදි අනුපිළිවෙළ කුමක් ද?</p>",
          "options": ["ඒකක පරීක්ෂාව, අනුකලන පරීක්ෂාව, පද්ධති පරීක්ෂාව", "ඒකක පරීක්ෂාව, පද්ධති පරීක්ෂාව, අනුකලන පරීක්ෂාව", "අනුකලන පරීක්ෂාව, ඒකක පරීක්ෂාව, පද්ධති පරීක්ෂාව", "අනුකලන පරීක්ෂාව, පද්ධති පරීක්ෂාව, ඒකක පරීක්ෂාව", "පද්ධති පරීක්ෂාව, අනුකලන පරීක්ෂාව, ඒකක පරීක්ෂාව"],
          "correctAnswer": 1,
          "relatedNoteId": "note-7-8-0"
        },
        {
          "id": "pq-2020-p1-23",
          "questionNumber": 23,
          "content": "<p>දත්ත ගැලීම් සටහන් (DFD) සම්බන්ධයෙන් පහත කවරක් නිවැරදි ද?<br/>A - දත්ත ගැලීම් සටහනක සංරචක වනුයේ බාහිර භූතාර්ථ (external entities), ක්‍රියායන (processes), දත්ත ගබඩා (data stores) සහ දත්ත ගැලීම් (data flows) ය.<br/>B - සන්දර්භ සටහනක (context diagram), ක්‍රියායන කිහිපයක් තිබිය හැකි ය.<br/>C - දත්ත ගැලීම් සටහනක්, පද්ධතියක දත්ත ගලන ආකාරය නිරූපණය කරයි.</p>",
          "options": ["A පමණි", "A සහ B පමණි", "A සහ C පමණි", "B සහ C පමණි", "A, B සහ C යන සියල්ල ම"],
          "correctAnswer": 3,
          "relatedNoteId": "note-7-6-0"
        },
        {
          "id": "pq-2020-p1-24",
          "questionNumber": 24,
          "content": "<p>ව්‍යාපෘති කළමනාකරණය සඳහා දියඇලි (waterfall) ආකෘතිය භාවිතයේදී පහත කවරක් වාසි සහගත වේ ද?</p>",
          "options": ["ව්‍යාපෘතිය අදියරවලට බෙදා ඒ එක් එක් අදියර සඳහා නියමිත කාලයක් වෙන්කර දිය හැකි වීම", "අවශ්‍යතා වෙනස්වීම් සඳහා පහසුවෙන් ඉඩ ලබා දිය හැකි වීම", "සේවාලාභියාගේ අදහස් ලබාගැනීම සඳහා ඉක්මන් මූලාකෘති (prototypes) නිපදවිය හැකි වීම", "ව්‍යාපෘතියේ ආරම්භයේ දී සියලුම අවශ්‍යතා ස්ථීර නොවන විට සුදුසු වීම", "ව්‍යාපෘතියේ අවදානම කළමනාකරණය පහසුවෙන් කළ හැකි වීම"],
          "correctAnswer": 1,
          "relatedNoteId": "note-7-3-0"
        },
        {
          "id": "pq-2020-p1-25",
          "questionNumber": 25,
          "content": "<p>යෝජිත තොරතුරු පද්ධතියක් සඳහා, ශක්‍යතා අධ්‍යයනයක් (feasibility study) සිදු කිරීමේදී, සංවිධානය තුළ ව්‍යාපෘතිය කෙතරම් දුරට සාර්ථක වේද යන්න තක්සේරු කෙරෙන්නේ පහත කවරක් මගින් ද?</p>",
          "options": ["ආර්ථික ශක්‍යතාව", "නීතිමය ශක්‍යතාව", "මෙහෙයුම් ශක්‍යතාව", "කාල (schedule) ශක්‍යතාව", "තාක්ෂණික ශක්‍යතාව"],
          "correctAnswer": 3,
          "relatedNoteId": "note-7-5-0"
        },
        {
          "id": "pq-2020-p1-26",
          "questionNumber": 26,
          "content": "<p>ව්‍යුහගත විමසුම් බසෙහි (SQL) දත්ත හැසිරවීමේ භාෂාවට (DML) අයත් වන විධාන මොනවාද?</p>",
          "options": ["SELECT, INSERT, UPDATE, DELETE", "CREATE, ALTER, DROP, TRUNCATE", "GRANT, REVOKE", "COMMIT, ROLLBACK, SAVEPOINT", "SELECT, CREATE, GRANT, COMMIT"],
          "correctAnswer": 1,
          "relatedNoteId": "note-8-6-0"
        },
        {
          "id": "pq-2020-p1-27",
          "questionNumber": 27,
          "content": "<p>දත්ත සමුදා වගු ප්‍රමතකරණය (normalize) කිරීමට හේතුවක් වන්නේ පහත කවරක් ද?</p>",
          "options": ["දත්ත අනුපිටපත් වීම (redundancy) අවම කිරීමට", "දත්ත සමුදාය සුරක්ෂිත කිරීමට", "දත්ත සමුදායේ වගු ගණන වැඩි කිරීමට", "දත්ත සමුදායේ විමසුම් (queries) සරල කිරීමට", "දත්ත සමුදායේ විමසුම් වේගවත් කිරීමට"],
          "correctAnswer": 1,
          "relatedNoteId": "note-8-7-0"
        },
        {
          "id": "pq-2020-p1-28",
          "questionNumber": 28,
          "content": "<p>පහත කවරක් තුන්වන ප්‍රමත අවස්ථාවේ (3NF) ඇති වගුවක ලක්ෂණයක් වේ ද?</p>",
          options: ["සංයුක්ත යතුරක් නොමැත.", "ආංශික පරායත්තතා (partial dependencies) නොමැත.", "පුනරාවර්තන කාණ්ඩ (repeating groups) නොමැත.", "සංක්‍රාන්ති පරායත්තතා (transitive dependencies) නොමැත.", "බහු-අගය උපලක්ෂණ (multi-valued attributes) නොමැත."],
          "correctAnswer": 4,
          "relatedNoteId": "note-8-3-0"
        },
        {
          "id": "pq-2020-p1-29",
          "questionNumber": 29,
          "content": "<p>පහත SQL ප්‍රකාශය සලකන්න:<br/><code>SELECT * FROM Student;</code><br/>ඉහත ප්‍රකාශය මගින් සිදු කරන්නේ කුමක් ද?</p>",
          "options": ["Student නම් වගුව නිර්මාණය කිරීම.", "Student වගුවේ ඇති සියලුම දත්ත පෙන්වීම.", "Student වගුවේ පළමු පේළිය පෙන්වීම.", "Student වගුවේ ඇති සියලුම දත්ත මකා දැමීම.", "Student වගුව මකා දැමීම."],
          "correctAnswer": 2,
          "relatedNoteId": "note-8-6-0"
        },
        {
          "id": "pq-2020-p1-30",
          "questionNumber": 30,
          "content": "<p>පහත සඳහන් භූතාර්ථ සම්බන්ධතා (ER) රූපසටහන සලකන්න.<br/>[DIAGRAM:pq-2020-p1-30-er]<br/>මෙම ER රූපසටහන සම්බන්ධක ක්‍රමානුරූපයකට (relational schema) අනුරූපණය කළ විට, සෑදෙන වගු මොනවා ද?</p>",
          "options": ["Employee(EID, Name), Project(PID, Name)", "Employee(EID, Name, PID), Project(PID, Name)", "Employee(EID, Name), Project(PID, Name, EID)", "Employee(EID, Name), Project(PID, Name), WorksOn(EID, PID, Hours)", "Employee(EID, Name, Hours), Project(PID, Name, Hours)"],
          "correctAnswer": 4,
          "relatedNoteId": "note-8-2-0"
        },
        {
          "id": "pq-2020-p1-31",
          questionNumber: 31,
          content: "<p>ඉහත ප්‍රශ්න අංක 30 හි WorksOn වගුවේ ප්‍රාථමික යතුර කුමක් ද?</p>",
          options: ["EID", "PID", "Hours", "EID සහ PID", "EID, PID සහ Hours"],
          correctAnswer: 4,
          relatedNoteId: "note-8-4-0"
        },
        {
          "id": "pq-2020-p1-32",
          questionNumber: 32,
          content: "<p>පහත ගැලීම් සටහන සලකන්න.</p>[DIAGRAM:2020-p1-q32-flowchart]<p>මෙම ගැලීම් සටහනට අනුව, ආදානය 25 වන විට ප්‍රතිදානය කුමක් ද?</p>",
          options: ["10", "15", "25", "50", "60"],
          correctAnswer: 4,
          relatedNoteId: "note-9-3-1"
        },
        {
          "id": "pq-2020-p1-33",
          questionNumber: 33,
          content: "<p>පහත ගැලීම් සටහන සලකන්න.</p>[DIAGRAM:2020-p1-q33-flowchart]<p>මෙම ගැලීම් සටහන ක්‍රියාත්මක කිරීමෙන් පසු, x හි අගය කුමක් වේ ද?</p>",
          options: ["0", "3", "5", "6", "11"],
          correctAnswer: 4,
          relatedNoteId: "note-9-3-1"
        },
        {
          "id": "pq-2020-p1-34",
          questionNumber: 34,
          content: "<p>පහත ගැලීම් සටහන සලකන්න.</p>[DIAGRAM:2020-p1-q34-flowchart]<p>මෙම ගැලීම් සටහන ක්‍රියාත්මක කිරීමේදී, කොපමණ වාරයක් ‘Hello’ යන වචනය මුද්‍රණය වේ ද?</p>",
          options: ["1", "5", "6", "10", "11"],
          correctAnswer: 3,
          relatedNoteId: "note-9-3-1"
        },
        {
          "id": "pq-2020-p1-35",
          questionNumber: 35,
          content: "<p>පහත කවරක් පයිතන්හි වෙන් කළ වචනයක් (reserved word) නොවන්නේ ද?</p>",
          options: ["if", "for", "while", "main", "else"],
          correctAnswer: 4,
          relatedNoteId: "note-9-7-0"
        },
        {
          "id": "pq-2020-p1-36",
          questionNumber: 36,
          content: "<p>පහත පයිතන් ප්‍රකාශය සලකන්න.<br/><code>student = {\"name\":\"Kamal\", \"age\":18, \"marks\":[80,75,90]}</code><br/>student['marks'][1] හි අගය කුමක් ද?</p>",
          options: ["Kamal", "18", "80", "75", "90"],
          correctAnswer: 4,
          relatedNoteId: "note-9-10-0"
        },
        {
          "id": "pq-2020-p1-37",
          questionNumber: 37,
          content: "<p>පහත පයිතන් කේතයේ ප්‍රතිදානය කුමක් ද?</p><pre><code>list1 = [1, 2, 3]\nlist2 = list1\nlist2[1] = 5\nprint(list1)</code></pre>",
          options: ["[1, 2, 3]", "[1, 5, 3]", "[5, 2, 3]", "[1, 2, 5]", "දෝෂ පණිවුඩයක්"],
          correctAnswer: 2,
          relatedNoteId: "note-9-10-0"
        },
        {
          "id": "pq-2020-p1-38",
          questionNumber: 38,
          content: "<p>පහත පයිතන් ශ්‍රිතය සලකන්න.<br/><code>def func(a, b=5, c=10): return a+b+c</code><br/><code>func(3, 7)</code> ඇමතීමේ ප්‍රතිඵලය කුමක් ද?</p>",
          options: ["15", "18", "20", "22", "දෝෂ පණිවුඩයක්"],
          correctAnswer: 3,
          relatedNoteId: "note-9-9-0"
        },
        {
          "id": "pq-2020-p1-39",
          questionNumber: 39,
          content: "<p>පහත පයිතන් කේතයේ ප්‍රතිදානය කුමක් ද?</p><pre><code>x = 10\nif x > 5:\n  if x > 15:\n    print(\"A\")\n  else:\n    print(\"B\")\nelse:\n  print(\"C\")</code></pre>",
          options: ["A", "B", "C", "AB", "AC"],
          correctAnswer: 2,
          relatedNoteId: "note-9-8-4"
        },
        {
          "id": "pq-2020-p1-40",
          questionNumber: 40,
          content: "<p>පහත පයිතන් ශ්‍රිතය සලකන්න.<br/><code>def factorial(n): \n  if n == 0: \n    return 1 \n  else: \n    return n * factorial(n-1)</code><br/><code>factorial(4)</code> ඇමතීමේ ප්‍රතිඵලය කුමක් ද?</p>",
          options: ["4", "10", "24", "120", "දෝෂ පණිවුඩයක්"],
          correctAnswer: 3,
          relatedNoteId: "note-9-9-0"
        },
        {
          "id": "pq-2020-p1-41",
          questionNumber: 41,
          content: "<p>පහත පයිතන් කේතය සලකන්න.<br/><code>f = open(\"test.txt\", \"r\")\ncontent = f.read()\nf.close()</code><br/>මෙම කේතයෙන් සිදු කරන්නේ කුමක් ද?</p>",
          options: ["test.txt ගොනුවට ලියයි.", "test.txt ගොනුවෙන් කියවයි.", "test.txt ගොනුව මකා දමයි.", "test.txt ගොනුව නිර්මාණය කරයි.", "test.txt ගොනුවේ අවසානයට එකතු කරයි."],
          correctAnswer: 2,
          relatedNoteId: "note-9-11-0"
        },
        {
          "id": "pq-2020-p1-42",
          questionNumber: 42,
          content: "<p>HTML හි, අනුපිළිවෙළක් සහිත ලැයිස්තුවක් (ordered list) නිර්මාණය කිරීමට භාවිතා කරන ටැගය කුමක් ද?</p>",
          options: ["<ul>", "<ol>", "<li>", "<dl>", "<list>"],
          correctAnswer: 2,
          relatedNoteId: "note-10-4-0"
        },
        {
          "id": "pq-2020-p1-43",
          questionNumber: 43,
          content: "<p>HTML හි, වෙබ් පිටුවක ප්‍රධාන ශීර්ෂය (main heading) දැක්වීමට වඩාත් සුදුසු ටැගය කුමක් ද?</p>",
          options: ["<h1>", "<h6>", "<head>", "<title>", "<header>"],
          correctAnswer: 1,
          relatedNoteId: "note-10-3-0"
        },
        {
          "id": "pq-2020-p1-44",
          questionNumber: 44,
          content: "<p>PHP කේතයක් තුළ, තන්තු (strings) දෙකක් එකට සම්බන්ධ කිරීමට භාවිතා කරන කාරකය කුමක් ද?</p>",
          options: ["+", "&", ".", ",", "."],
          correctAnswer: 5,
          relatedNoteId: "note-10-7-0"
        },
        {
          "id": "pq-2020-p1-45",
          questionNumber: 45,
          content: "<p>HTML හි, POST සහ GET යනු කුමක් ද?</p>",
          options: ["ආදාන වර්ග (input types)", "පෝරමයේ attributes", "CSS ගුණ (properties)", "JavaScript ශ්‍රිත", "වෙබ් සේවාදායක වර්ග"],
          correctAnswer: 2,
          relatedNoteId: "note-10-7-0"
        },
        {
          "id": "pq-2020-p1-46",
          questionNumber: 46,
          content: "<p>වෙබ් අඩවියක සියලුම පිටු සඳහා එකම විලාසිතාවක් (style) යෙදීමට වඩාත් සුදුසු CSS ක්‍රමය කුමක් ද?</p>",
          options: ["Inline CSS", "Internal CSS", "External CSS", "JavaScript CSS", "HTML CSS"],
          correctAnswer: 3,
          relatedNoteId: "note-10-5-0"
        },
        {
          "id": "pq-2020-p1-47",
          questionNumber: 47,
          content: "<p><code>&lt;a href=\"https://www.example.com\"&gt;Click here&lt;/a&gt;</code> යන HTML කේතයෙන් සිදු වන්නේ කුමක් ද?</p>",
          options: ["පින්තූරයක් පෙන්වයි.", "වගුවක් නිර්මාණය කරයි.", "අධිසබැඳියක් (hyperlink) නිර්මාණය කරයි.", "ශීර්ෂයක් නිර්මාණය කරයි.", "ඡේදයක් නිර්මාණය කරයි."],
          correctAnswer: 3,
          relatedNoteId: "note-10-4-0"
        },
        {
          "id": "pq-2020-p1-48",
          questionNumber: 48,
          content: "<p>ව්‍යාපාරයක් සහ පාරිභෝගිකයෙකු අතර සිදුවන ඊ-වාණිජ්‍ය ගනුදෙනු හඳුන්වන්නේ කුමන නමකින් ද?</p>",
          options: ["B2B", "B2C", "C2C", "G2C", "B2G"],
          correctAnswer: 2,
          relatedNoteId: "note-12-1-0"
        },
        {
          id: "pq-2020-p1-49",
          questionNumber: 49,
          content: "<p>මිනිස් මොළයේ ව්‍යුහය ආභාෂය කරගෙන නිර්මාණය කරන ලද, යන්ත්‍ර ඉගෙනුමේ (Machine Learning) පදනම වන පරිගණන ආකෘතිය කුමක් ද?</p>",
          options: ["ජානමය ඇල්ගොරිතම", "ස්නායුක ජාල", "ක්වොන්ටම් පරිගණනය", "බහු-නියෝජිත පද්ධති", "තාර්කික ක්‍රමලේඛනය"],
          correctAnswer: 2,
          relatedNoteId: "note-13-3-0"
        },
        {
          "id": "pq-2020-p1-50",
          questionNumber: 50,
          content: "<p>එකම වේලාවක 0 සහ 1 යන තත්ත්ව දෙකම නිරූපණය කළ හැකි 'qubits' භාවිතා කරන පරිගණන මාදිලිය කුමක් ද?</p>",
          options: ["ස්වභාවධර්මයෙන් ආභාෂය ලැබූ පරිගණනය", "සමාන්තර පරිගණනය", "ක්වොන්ටම් පරිගණනය", "වලාකුළු පරිගණනය", "ජාලක පරිගණනය"],
          correctAnswer: 3,
          relatedNoteId: "note-13-3-0"
        }
      ]
    }
  };
    
