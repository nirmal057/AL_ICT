import type { Paper, StructuredQuestion } from "../../types";

const partA: StructuredQuestion[] = [
    {
      id: "pq-2022-p2-1",
      questionNumber: "1",
      content: "",
      totalMarks: 7,
      questionType: "structured",
      subParts: [
        {
          id: "pq-2022-p2-1a",
          label: "(a)",
          content: `<p>(i) වෙබ් අතරික්සුවක (browser) පෙන්වන, දී ඇති HTML කේතයේ ප්‍රතිදානය පහත කොටුවේ අඳින්න.</p>[CODE:html]<html>
<body>
<table border=1>
<tr> <th>Designation</th> <th> Contact Telephone Numbers </th> </tr>
<tr> <td rowspan=2> Principal</td> <td> 061-2223211 </td> </tr>
<tr> <td> 067-5557772</td> </tr>
<tr> <td> Vice Principal</td> <td> 061-5557771 </td> </tr>
<tr> <td colspan=2> Common Phone Number: 019-2233445</td> </tr>
</table>
</body>
</html>[/CODE]<p>(ii) ඉහත (i) හි HTML කේතයේ, වගුවේ මායිම් (borders) නොපෙන්වීමට අවශ්‍ය වෙනස්කම ලියන්න.</p>`,
          marks: 2,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "pq-2022-p2-1b",
          label: "(b)",
          content: `<p>අභ්‍යන්තර (internal) CSS සමග සමූහ වරක (group selectors) යොදාගනිමින් පහත සඳහන් HTML කේතය නැවත ලියන්න.</p>[CODE:html]<html>
<head> <title>Cascading Style Sheets</title> </head>
<body>
<h1 style="color:blue;text-align:center"> Introduction to Cascading Style Sheets</h1>
<h2 style="color:blue"> CSS can be applied to html documents in three different ways.</h2>
</body>
</html>[/CODE]`,
          marks: 2,
          requiresAnswerBox: true,
          answerBoxSize: "large",
          relatedNoteId: "note-10-5-0"
        },
        {
          id: "pq-2022-p2-1c",
          label: "(c)",
          content: `<p>වෙබ් අතරික්සුවක් මගින් විදැහු (render) රූපය 1 හි දැක්වෙන HTML ආකෘති පත්‍රය (form) සලකන්න... අදාළ HTML කේතය (අසම්පූර්ණ) පහත දැක්වේ. රූපය 1 හි දැක්වෙන ප්‍රතිදානය ලබාගැනීමට හැකිවන පරිදි එහි ඇති හිස්තැන් සම්පූර්ණ කරන්න.</p><div class="border rounded-lg p-4 my-4"><h4 class="font-bold text-center">A web page form is shown. At the top, a heading says "Back to the nature!". Below it, a smaller heading says "Speech Competition", and an h3 heading says "Registration form". The form contains fields for Name (text input), Gender (Male and Female radio buttons), District (a dropdown with Colombo selected), and Email (text input). There is a checkbox for "Subscribe for newsletter?". A "Submit" button is at the bottom. Below the button, there is an image logo with the text "Western Province Environment" next to it.</h4></div>[CODE:html]<html>...
<form action="process.php" method="post">
...
</form>...</html>[/CODE]`,
          marks: 4,
          requiresAnswerBox: true,
          answerBoxSize: "large",
          relatedNoteId: "note-10-3-0"
        },
        {
          id: "pq-2022-p2-1d",
          label: "(d)",
          content: `<p>ඉහත (c) කොටසේ සඳහන් ආකෘති පත්‍රය යොමු (submit) කිරීමෙන් අනතුරුව process.php උපදේශාවලිය (script) ක්‍රියාත්මක කෙරේ. ... PHP කේත ඛණ්ඩය (process.php) සම්පූර්ණ කරන්න.</p>[CODE:php]<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = $__________["__________"];
...
? >[/CODE]`,
          marks: 2,
          relatedNoteId: "note-10-7-0",
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        }
      ]
    },
    {
      id: "pq-2022-p2-2",
      questionNumber: "2",
      content: "",
      totalMarks: 8,
      questionType: "structured",
      subParts: [
        {
          id: "pq-2022-p2-2a",
          label: "(a)",
          content: `<p>දී ඇති ලැයිස්තුවෙන් වඩාත් සුදුසු අයිතම තෝරා පහත ප්‍රකාශවල හිස්තැන් පුරවන්න...<br/>(i) සිසුන් කණ්ඩායම _______________ මඟ නොහැරියේ නම් ඔවුන් දැනට පවතින පුස්තකාල පද්ධතිය පිළිබඳව ආරම්භයේදීම දැනුවත්වනවා ඇත.</p>`,
          marks: 3,
          relatedNoteId: "note-7-5-0",
          requiresAnswerBox: true,
          answerBoxSize: "small"
        },
        {
          id: "pq-2022-p2-2b",
          label: "(b)",
          content: `<p>පහත දී ඇති ලේබල කරන ලද දත්ත ගැලීමේ සටහන (DFD) ගෘහ භාණ්ඩ සාප්පුවක මිලදී ගැනීමේ ක්‍රියාකාරකම් නිරූපණය කරයි...<br/>(i) P, R සහ S සඳහා වඩාත් සුදුසු අයිතම පහත දී ඇති ලැයිස්තුවෙන් තෝරා ලියන්න. ලැයිස්තුව: {වාර්තා ජනනය කිරීම, ඉන්වෙන්ටරිය, ...}</p>`,
          marks: 5,
          relatedNoteId: "note-7-6-0",
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        }
      ]
    },
    {
        id: "pq-2022-p2-3",
        questionNumber: "3",
        content: "",
        totalMarks: 12,
        questionType: "structured",
        subParts: [
            {
                id: "pq-2022-p2-3a",
                label: "(a)",
                content: "<p>වෘත්තයක වර්ගඵලය ගණනය කිරීමට සහ ප්‍රතිදානය කිරීම සඳහා වූ ඇල්ගොරිතමයක් වෙනුවෙන් ගැලීම් සටහනක් ඇඳීමට අවශ්‍ය වේ...</p>",
                marks: 2,
                relatedNoteId: "note-9-3-0",
                requiresAnswerBox: true,
                answerBoxSize: "large"
            },
            {
                id: "pq-2022-p2-3b",
                label: "(b)",
                content: `<p>(i) පහත පයිතන් කේතයේ ප්‍රතිදානය කුමක් ද?</p><pre><code>S = "Advanced level"\\nS1 = ""\\nfor c in S:\\n  if c in ("a", "e", "i", "o", "u"):\\n    pass\\n  else:\\n    S1 = S1 + c\\nprint(S1)</code></pre><p>(ii) ඉහත (i) හි පයිතන් කේතයේ if c in ("a", "e", "i", "o", "u"): pass කොන්දේසිය if c not in ("a", "e", "i", "o", "u"): S1 = S1 + c ලෙස වෙනස් කළ විට ප්‍රතිදානය ලියා දක්වන්න.</p>`,
                marks: 4,
                requiresAnswerBox: true,
                answerBoxSize: "medium",
                relatedNoteId: "note-9-8-7"
            }
        ]
    }
];

const partB: StructuredQuestion[] = [
    {
        id: "pq-2022-p2-5",
        questionNumber: "5",
        content: `(a) පහත පරිපථය සඳහා සම්පූර්ණ සත්‍යතා වගුව අඳින්න.<br/>[DIAGRAM:2024-p2-q5a]<br/>(ලකුණු 02යි.)<br/><br/>
(b) පහත බූලීය ප්‍රකාශය එහි සරලතම ආකාරයෙන් ලියා දක්වන්න.<br/>(A + B) • (A + B̅) + AB̅<br/>(ලකුණු 01යි.)<br/><br/>
(c) A, B සහ C නම් වූ ආදාන තුනකින් යුත් පරිපථයක ආදාන දෙකක් හෝ තුනක් හෝ, ඉන් එක එකක් 1 විට, Z ප්‍රතිදානය 1 විය යුතු ය. කිසිම ආදානයක් 1 නොවන විට සහ ආදාන එකක් පමණක් 1 විට, ප්‍රතිදානය 0 විය යුතු ය.<br/>
(i) ඉහත පරිපථය සඳහා සම්පූර්ණ සත්‍යතා වගුව අඳින්න. (ලකුණු 02යි.)<br/>
(ii) ඉහත පරිපථයට අදාල කානෝ සිතියම පහත ආකෘතිය පරිදි සම්පූර්ණ කරන්න.<br/>[DIAGRAM:2024-p2-q5c-ii]<br/>(ලකුණු 02යි.)<br/>
(iii) Z ප්‍රතිදානය සඳහා ගුණිතවල එකතුවෙහි (sum-of-products) වඩාත් සරලතම ප්‍රකාශය කානෝ සිතියම භාවිතයෙන් ව්‍යුත්පන්න කරන්න. ලූප (loops) පැහැදිලිව කානෝ සිතියමේ පෙන්වන්න. (ලකුණු 02යි.)<br/>
(iv) ඉහත (iii) හි ලබා ගත් සරලතම ප්‍රකාශය සඳහා, AND, NOT සහ OR ද්වාර පමණක් භාවිත කෙරෙන තාර්කික පරිපථයක් ඇඳ දක්වන්න. (ලකුණු 01යි.)<br/><br/>
(d) (i) අංකිත පරිපථවල අර්ධාකලකයේ (half adder) භාවිතය පහදන්න. (ලකුණු 01යි.)<br/>
(ii) අංකිත පරිපථවල මතක මූලයක් (memory element) ලෙස පිළිපොළක් (flip-flop) ක්‍රියා කරන අයුරු විස්තර කරන්න. එය සංයෝජන (combinational) තර්කන ද්වාරවලින් වෙනස් වන අයුරු පහදන්න. (ලකුණු 02යි.)<br/>
(iii) පූර්ණාකලක (full adder) පරිපථයක සත්‍යතා වගුව අඳින්න. (ලකුණු 02යි.)`,
        totalMarks: 15,
        questionType: "essay"
    },
    {
        id: "pq-2022-p2-6a",
        questionNumber: "6(a)",
        content: "<p>පහත සඳහන් ජාල උපාංග සහ තාක්ෂණයන්හි කාර්යයන් කෙටියෙන් විස්තර කරන්න.</p>(i) Router (ii) Repeater (iii) Firewall",
        totalMarks: 15,
        questionType: "essay",
        relatedNoteId: "note-6-11-0"
    },
    {
        id: "pq-2022-p2-6b",
        questionNumber: "6(b)",
        content: "<p>පහත දැක්වෙන IP ලිපිනය සහ උපජාල ආවරණය සලකා බලන්න...</p>",
        totalMarks: 15,
        questionType: "calculation",
        relatedNoteId: "note-6-7-0"
    },
    {
        id: "pq-2022-p2-7a",
        questionNumber: "7(a)",
        content: "<p>IoT (Internet of Things) පද්ධතියක් යනු කුමක්දැයි කෙටියෙන් විස්තර කර, එහි මූලික සංරචක තුනක් නම් කරන්න.</p>",
        totalMarks: 15,
        questionType: "essay",
        relatedNoteId: "note-11-2-0"
    },
    {
        id: "pq-2022-p2-8a-i",
        questionNumber: "8(a)(i)",
        content: "<p>පහත දැක්වෙන Python කේතයේ ප්‍රතිදානය කුමක්ද?</p>[CODE:python]i=1\\nsum=0\\nwhile(i<=5):\\n  if (i%2==0):\\n    sum=sum+i\\n  i=i+1\\nprint(sum)[/CODE]",
        totalMarks: 15,
        questionType: "structured",
        relatedNoteId: "note-9-8-7"
    },
    {
        id: "pq-2022-p2-8b",
        questionNumber: "8(b)",
        content: "<p>Python හි ශ්‍රිතයක් යනු කුමක්ද? පරිශීලක-නිර්වචිත ශ්‍රිතයක් සහ තුළැති ශ්‍රිතයක් අතර වෙනස කුමක්දැයි උදාහරණ දෙන්න.</p>",
        totalMarks: 15,
        questionType: "essay",
        relatedNoteId: "note-9-9-0"
    },
    {
        id: "pq-2022-p2-9a",
        questionNumber: "9(a)",
        content: "<p>භූතාර්ථ-සම්බන්ධතා (ER) රූප සටහනක භූතාර්ථයක්, උපලක්ෂණයක්, සහ සම්බන්ධතාවයක් යනු කුමක්දැයි උදාහරණ සමඟ පැහැදිලි කරන්න.</p>",
        totalMarks: 15,
        questionType: "essay",
        relatedNoteId: "note-8-2-0"
    },
    {
        id: "pq-2022-p2-9b-i",
        questionNumber: "9(b)(i)",
        content: "<p>පහත දැක්වෙන වගු සඳහා, 'SELECT * FROM Employee WHERE Salary > 50000' යන SQL විමසුමේ ප්‍රතිදානය කුමක්ද?</p>",
        totalMarks: 15,
        questionType: "structured",
        relatedNoteId: "note-8-6-0"
    },
    {
        id: "pq-2022-p2-10a",
        questionNumber: "10(a)",
        content: "<p>ක්‍රියායනයක (process) 'සූදානම්' (Ready) සහ 'අවහිර කළ' (Blocked) යන අවස්ථා දෙක අතර වෙනස කුමක්ද?</p>",
        totalMarks: 15,
        questionType: "essay",
        relatedNoteId: "note-5-3-2"
    },
    {
        id: "pq-2022-p2-10c",
        questionNumber: "10(c)",
        content: "<p>අතථ්‍ය මතකය (Virtual Memory) යනු කුමක්ද සහ එය මතක කළමනාකරණයේදී වැදගත් වන්නේ ඇයි දැයි පැහැදිලි කරන්න.</p>",
        totalMarks: 15,
        questionType: "essay",
        relatedNoteId: "note-5-4-0"
    }
];

export const paper2022_p2: Paper = {
    id: "past-paper-2022-p2",
    title: "A/L ICT Paper II - 2022",
    examName: {
      sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
      tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
      english: "General Certificate of Education (Adv. Level) Examination",
    },
    year: 2022,
    subject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය",
    subjectCode: 20,
    time: {
        sinhala: "පැය තුනයි",
        tamil: "மூன்று மணித்தியாலம்",
        english: "Three hours"
    },
    content: {
      title: "Paper II",
      partA: {
        title: "Part A - ව්‍යුහගත රචනා",
        instructions: "ප්‍රශ්න හතරටම පිළිතුරු මෙම පත්‍රයේම සපයන්න.",
        questions: partA
      },
      partB: {
        title: "Part B - රචනා",
        instructions: "ඕනෑම ප්‍රශ්න හතරකට පමණක් පිළිතුරු සපයන්න.",
        questions: partB
      }
    }
  };
