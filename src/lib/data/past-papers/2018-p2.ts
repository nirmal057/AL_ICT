
import type { Paper, StructuredQuestion } from "../../types";

const partA: StructuredQuestion[] = [
  {
    id: "pq-2018-p2-1",
    questionNumber: "1",
    content: "",
    questionType: "structured",
    totalMarks: 0,
    subParts: [
      {
        id: "pq-2018-p2-1a-i",
        label: "(a) (i)",
        content: "<p>ප්‍රගමන රටා පත්‍රිකා [Cascading Style Sheets (CSS)] භාවිත කිරිමේ ප්‍රයෝජන දෙකක් සඳහන් කරන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "medium",
        relatedNoteId: "note-10-5-0"
      },
      {
        id: "pq-2018-p2-1a-ii",
        label: "(ii)",
        content: "<p>පහත දැක්වෙන HTML කේත ඛණ්ඩය වෙබ් අතරික්සුවක් මගින් විදහා දක්වන විට ලැඛෙන ප්‍රතිදානය ලියා දක්වන්න.</p><code><html>\\n<body>\\n<u> Important Sites </u>\\n<ul>\\n<li><a href=\"www.nie.lk/index.html\"> National Institute of Education </a></li>\\n<li><a href=\"www.doenets.lk/exam/index.html\"> Department of Examinations </a></li>\\n</ul>\\n</body>\\n</html></code>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-10-4-0"
      },
      {
        id: "pq-2018-p2-1a-iii",
        label: "(iii)",
        content: "<p>පහත දැක්වෙන HTML කේත ඛණ්ඩය වෙබ් අතරික්සුවක් මගින් විදහා දක්වන විට ලැඛෙන ප්‍රතිදානය ලියා දක්වන්න.</p><code><html>\\n<body>\\n<p>\\n<center> Department of Examinations <br> Pelawatta\\n<br> Battaramulla </center></p><hr>\\n</body>\\n</html></code>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-10-3-0"
      },
      {
        id: "pq-2018-p2-1b",
        label: "(b)",
        content: "<p>පහත දැක්වෙන HTML කේත ඛණ්ඩය සලකන්න:</p><code><body>\\n<h1> Introduction to Web Technologies </h1>\\n<h3> HTML </h3>\\n<p> HTML is the standard markup language for creating web pages </p>\\n</body></code><p>ඉහත කේත ඛණ්ඩයෙහි ඇති h1 සහ p මූලාංග සඳහා, පහත වගුවේ සඳහන් රටා යෙදීමට අවශ්‍ය අභ්‍යන්තර රටා (internal styles) ලියා දක්වන්න.</p>[DIAGRAM: A table showing CSS properties and values for h1 and p tags. h1: color blue, text-align center, font-family Arial. p: background-color Yellow, font-size 12px.]",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-10-5-0"
      },
      {
        id: "pq-2018-p2-1c",
        label: "(c)",
        content: "<p>වෙබ් අතිරික්සුවක් මගින් විදහා දක්වන පහත දැක්වෙන HTML පෝරමය සලකන්න.</p><p>මෙහි දැක්වෙන්නේ සිසුන් ලියාපදිංචි කිරීම සඳහා භාවිත වන ලියාපදිංචි කිරීමේ ආකෘති පත්‍රයකි. සිසුවාගේ නම, පාඨ ආදානයක් ලෙස ඇතුළත් කර, ගැහැනු පිරිමි බව තෝරා, දිස්ත්‍රික්කය තෝරා ඉන් පසුව Submit බොත්තම එබීම අවශ්‍ය වේ.</p><p>ආකෘති පත්‍රය ප්‍රදර්ශනය කිරීම සඳහා පහත දැක්වෙන කේත ඛණ්ඩයෙහි ඇති හිස්තැන් පුරවන්න.</p>[DIAGRAM: An image of a student registration web form with fields for Student Name (text input), Gender (radio buttons for Male/Female), and Selected District (a dropdown with Colombo, Jaffna, Matara). There is a Submit button at the end.]<br/><code><html>\\n<body>\\n<h3>Student Registration </h3>\\n<... action=\"register.php\" method=\"post\">\\n<div>\\nStudent Name <input ... = \"name\">\\n</div>\\n<br>\\n<div>\\nGender\\n<input ... =\"gtype\" ... =\"male\" checked> Male\\n<input ... = \"gtype\" ... =\"female\">\\nFemale\\n</div>\\n<br>\\n<div>\\nSelected District :\\n<... .= \"city\">\\n<option ... =\"Colombo\">...</option>\\n<option ... =\"Jaffna\">...</option>\\n<option ... =\"Matara\">...</option>\\n</...>\n</div>\\n<br>\\n<input ... name=\"submit\" ... =\"Submit\">\\n</...>\n</body>\\n</html>\\n</code>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-10-3-0"
      }
    ]
  },
  {
    id: "pq-2018-p2-2",
    questionNumber: "2",
    content: "",
    questionType: "structured",
    totalMarks: 0,
    subParts: [
      {
        id: "pq-2018-p2-2a",
        label: "(a)",
        content: "<p>පහත දැක්වෙන (i) - (viii) තෙක්, e-වාණිජ්‍යයට සම්බන්ධ එක් එක් ප්‍රකාශ ඛණ්ඩය සමග දී ඇති පද ලැයිස්තුවෙහි වඩාත් ම සුදුසු පදය ගළපන්න.</p><p><b>ලැයිස්තුව</b> = {බ්‍රික් සහ ක්ලික් (brick-and-click), අන්තර්ගතය ලබා දෙන්නා (content provider), e-වාණජ්‍යය (e-commerce), කාණ්ඩ ලෙස මිලදී ගැනීම (group purchasing), තොරතුරු තැරැව්කරු (information broker), මාර්ගගත වෙළෙඳපොළ (online marketplace), පියෝ බ්‍රික් (pure-brick), පියෝ ක්ලික් (pure-click), ප්‍රති වෙන්දේසිය (reverse auction), අතථ්‍ය ප්‍රජාව (virtual community), අතථ්‍ය වෙළෙඳ ප්‍රදර්ශනාගාරය (virtual storefront)}</p><p><b>ප්‍රකාශ ඛණ්ඩ:</b></p><p>(i) වෙබ් අඩවිය හරහා තෙවන පාර්ශ්වයක ව්‍යාපාරවලට (වෙනත් ව්‍යාපාර) භාණ්ඩ සහ සේවා විකිණීමට අවස්ථාව ලබා දී අලෙවියෙහි ප්‍රතිශතයක් ගාස්තුව ලෙස අයකර ගැනීම</p><p>(ii) මාර්ගගතව ලබා ගත හැකි නිතර අලුත් කෙරෙනු ලබන ප්‍රවෘත්ති, බ්ලොග් (blogs), වීඩියෝ වැනි දෑ සැපයිම</p><p>(iii) පොදු රුචිකත්වය සහ අදහස් හුවමාරු කර ගැනීමට අන්තර්ජාලය ඔස්සේ ඉඩ සැලසීම</p><p>(iv) පාරිභෝගික ඇණවුම් භාරගෙන සැකසීම, ව්‍යාපාර මෙහෙයවන්නාගේ වෙබ් ද්වාරය (web portal) හරහා සිදු කෙරෙන අතර, මුදල් ගෙවීමෙන් පසු භාණ්ඩ භාර දීම සිල්ලර වෙළෙඳුන් හා තොග වෙළදුන් මගින් සිදු කිරීම</p><p>(v) මාර්ගගත සාප්පුවක් මෙන්ම භෞතික සාප්පුවක් ද පැවතීම</p><p>(vi) ඕනෑම කෙනෙකුට ලබා ගත හැකි, අන්තර්ජාලයේ ඇති පාරිභෝගිකයන්ට අදාළ දත්ත එක්රැස් කොට විශ්ලේෂණය කර සාරාංශ ගත කිරීමෙන් පසු එම තොරතුරු අනෙකුත් පාර්ශ්වවලට අලෙවි කිරීමේ ව්‍යාපාරයකි</p><p>(vii) ගැනුම්කරුවන්ට භාණ්ඩ හා සේවා අලෙවි කිරීම සඳහා විකුණුම්කරුවන් එකිනෙකා අන්තර්ජාලය භාවිතයෙන් තරග කිරීම හා ඔවුන් එකිනෙකා අතර අඩු ලංසු තැබීම නිසා මිල ගණන් සාමාන්‍යයෙන් අඩු වීම</p><p>(viii) සාමාජිකයන්ගේ සාමුහික මිලදී ගැනීමේ ශක්තිය පදනම් කරගෙන අන්තර්ජාලයේ සිටින වෙළෙඳුන්ගෙන් වට්ටම් ලබා ගැනීම</p><p><b>සටහන:</b> ප්‍රකාශ ඛණ්ඩයෙහි අංකය ඉදිරියෙන් ගැළපෙන පදය පමණක් ලියන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-12-1-0"
      },
      {
        id: "pq-2018-p2-2b",
        label: "(b)",
        content: "<p>(i) 12₁₀ සංඛ්‍යාවෙහි දෙකෙහි අනුපූරකය (two's complement) බිටු 8ක් භාවිතයෙන් නිරූපණය වන ආකාරය ලියා දක්වන්න.</p><p>(ii) – 68₁₀ සංඛ්‍යාවෙහි දෙකෙහි අනුපූරකය බිටු 8ක් භාවිතයෙන් නිරූපණය වන ආකාරය ලියා දක්වන්න.</p><p>(iii) ඉහත (i) හා (ii) හි නිරූපණය භාවිතයෙන් – 68₁₀ + 12₁₀ ගණනය කරන්න.</p><p>(iv) පරිගණකයක අභ්‍යන්තර මෙහෙයුම් සඳහා දත්ත, දෙකෙහි අනුපූරකය ලෙස නිරූපණය කිරීමෙන් ලැඛෙන එක් වාසියක් සඳහන් කරන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-3-1-3"
      }
    ]
  },
  {
    id: "pq-2018-p2-3",
    questionNumber: "3",
    content: "",
    questionType: "structured",
    totalMarks: 0,
    subParts: [
      {
        id: "pq-2018-p2-3a",
        label: "(a)",
        content: "<p>පහත දක්වා ඇති භූතාර්ථ සම්බන්ධතා (ER) සටහන සලකන්න.</p>[DIAGRAM: An ER diagram with three entities: COMPANY (strong), STAFF (strong), and DEPENDANT (weak). COMPANY has attributes CompanyRegNo, Name, Address. STAFF has attributes StaffID, DateOfBirth, Name, Address, and Phone (a multi-valued attribute). DEPENDANT has attributes Relationship, Gender, Name, DateOfBirth. Relationships are: COMPANY 'Work' STAFF (1 to M), STAFF 'DEPENDANT_OF' DEPENDANT (1 to N).]<p>(i) අනෙකුත් උපලක්ෂණ (attributes) සමග සැසඳීමේ දී ‘Phone’ උපලක්ෂණය, වෙනස් සංකේතයකින් දක්වා ඇත්තේ ඇයි දැයි කෙටියෙන් පැහැදිලි කරන්න.</p><p>(ii) COMPANY සමග සැසඳීමේ දී DEPENDANT භූතාර්ථය (entity) වෙනස් සංකේතයකින් දක්වා ඇත්තේ ඇයි දැයි කෙටියෙන් පැහැදිලි කරන්න.</p><p>(iii) ඉහත දැක්වෙන භූතාර්ථ සම්බන්ධතා සටහන භාවිත කර පහත සම්බන්ධතා වගු ගොඩනගනු ලැබේ. එක් එක් වගුවෙහි ක්ෂේත්‍ර නාම දක්වා නොමැත.<br>COMPANY ( P .....)<br>STAFF ( Q .....)<br>STAFF_PHONE ( R .....)<br>DEPENDANT ( S .....)<br>එක් එක් වගුවෙහි දක්වා නොමැති ක්ෂේත්‍ර නාම හඳුනාගෙන P සිට S ඉදිරියෙහි ලියා දක්වන්න.</p><p>(iv) කාර්යමණ්ඩලයෙහි (STAFF) සියල්ලන්ගේම නම් සහ ලිපින ප්‍රදර්ශනය කිරීම සඳහා SQL ප්‍රකාශයක් ලියන්න.</p><p>(v) StaffID = 'E001124' වන කාර්යමණ්ඩල සාමාජිකයාගේ යැපෙන්නන් (DEPENDANT) ගේ නම් ප්‍රදර්ශනය කිරීම සඳහා SQL ප්‍රකාශයක් ලියන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-8-2-0"
      },
      {
        id: "pq-2018-p2-3b",
        label: "(b)",
        content: "<p>(i) පහත දැක්වෙන දත්ත ගැලීම් සටහනෙහි (DFD) ඇති මූලික දෝෂයක් හඳුනාගෙන පැහැදිලි කරන්න.</p>[DIAGRAM: A Data Flow Diagram showing two processes. Process 1.0 'compute net pay' takes 'gross pay' as input and produces 'net pay'. Process 2.0 'process pay cheque' takes 'net pay' as input and produces 'pay cheque' which goes to the 'employee' external entity. Data stores 'allowances and deductions' and 'salary' have arrows pointing out but not into any process.]<p>(ii) මෘදුකාංග ඒජන්නවරුන්ට සම්බන්ධ පහත දැක්වෙන එක් එක් ප්‍රකාශය සත්‍ය ද අසත්‍ය ද යන වග ලියා දක්වන්න.<br> (1) මෘදුකාංග ඒජන්තවරයකුට (software agent) තම අරමුණු කරා යාමේ දී අවම අධීක්ෂණය යටතේ හෝ සෘජු අධීක්ෂණයකින් තොරව හෝ කාර්ය සිදු කළ හැක.<br>(2) පරිශීලකයකුගේ සෘජු අධීක්ෂණයකින් තොරව මෘදුකාංග යෙදුම්වලට ඒජන්තවරයකු සමග අන්තර්ක්‍රියාවේ යෙදිය හැක.<br>(3) පරිශීලකයකුට ඒජන්තවරුන්ගෙන් සෘජුවම යම් ගැටලුවකට පිළිතුරු ලබා ගත හැක.<br>(4) බහු-ඒජන්ත පද්ධතියක් යනු එක් එක් භූතාර්ථයෙහි තනි හැකියා අභිබවා යන ගැටළුවලට පිළිතුරු ලබා ගැනීම සඳහා එක්ව කටයුතු කරනු ලබන ඒජන්තවරු ලෙස හැඳින්වෙන ගැටළු විසඳීමේ භූතාර්ථ ජාලයකි.<br>(5) බහු-ඒජන්ත පද්ධතියකදී, පද්ධතියෙහි අරමුණු ඉටු කර ගැනීම සඳහා තනි ඒජන්තවරු එකිනෙකා තරග කිරීම හෝ සහයෝගීව කටයුතු කිරීම හෝ සිදු වේ.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-7-6-0"
      }
    ]
  },
  {
    id: "pq-2018-p2-4",
    questionNumber: "4",
    content: "",
    questionType: "structured",
    totalMarks: 0,
    subParts: [
      {
        id: "pq-2018-p2-4a",
        label: "(a)",
        content: "<p>පරිගණක පද්ධතියක අමුර්ථ ස්තර (abstract layers) එකිනෙකට සම්බන්ධ වන ආකාරය පෙන්වන පහත දැක්වෙන රූපසටහන සලකන්න.</p>[DIAGRAM: A layered architecture diagram. Top layer has 'User 1', 'User 2', 'User 3'...'User n'. Below that is a layer labeled A. Below A are 'Assembler', 'Word Processor', 'Database System'. This entire group points down to a layer labeled B. Layer B points to a layer labeled C. Layer C points to the bottom layer labeled D.]<p>A, B, C සහ D යන ලේඛලවලට අදාළ නිවැරදි පද පහත ලැයිස්තුවෙන් තෝරා ලියන්න.</p><p><b>ලැයිස්තුව :</b> {සම්පාදකය (compiler), පරිගණක දෘඪාංග, ජීවාංග, මෙහෙයුම් පද්ධතිය, පද්ධති/යෙදුම් ක්‍රමලේඛ}</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-5-1-0"
      },
      {
        id: "pq-2018-p2-4b",
        label: "(b)",
        content: "<p>පරිගණකයක් පණගැන්වූ විට (switched on) සිදුවන මෙහෙයුම් විස්තර කිරීමට පහත ප්‍රකාශවලින් හතරක් නිවැරදිව පෙළ ගස්වන්න.</p><p>(සැ.යු.: පහත ප්‍රකාශ අතුරෙන් දෙකක් අවශ්‍ය නොවේ.)</p><p>A – මූලික ආදාන ප්‍රතිදාන පද්ධතිය (BIOS) විසින් මෙහෙයුම් පද්ධතියේ ගොනු ප්‍රධාන මතකයට පිටපත් කිරීමෙන් පසු මෙහෙයුම් පද්ධතිය ක්‍රියාත්මක වීම ඇරඹේ.</p><p>B – මූලික ආදාන ප්‍රතිදාන පද්ධතිය CMOS චිපයෙන්, මෙහෙයුම් පද්ධතිය සොයා ගත හැකි ස්ථානය ලබා ගනියි.</p><p>C - සම්පාදකය (compiler) වැඩ අරඹයි.</p><p>D – මතකයේ ඇති දෑ දෘඪ ඩිස්කයට ප්‍රතිහරණය (swap) වේ.</p><p>E – මෙහෙයුම් පද්ධතිය විසින් උපාංග ක්‍රියාකරවීමට අවශ්‍ය උපක්‍රම ධාවක (device drivers) ප්‍රවේශනය (load) කරනු ලබන අතර ඉන්පසු පරිශීලකයාට පරිගණකයට පිවිසිය හැකි පිරුම් අතුරු මුහුණත (login interface) ලබාදේ.</p><p>F – හෝරා ස්පන්ද (clock ticks) කිහිපයකින් ක්‍රියාරම්භක වූ මධ්‍ය සැකසුම් ඒකකය (CPU), මූලික ආදාන ප්‍රතිදාන පද්ධතියෙහි (BIOS) බල ගැන්වුම් ස්වයං පරික්ෂා (Power On Self Test) ඇතුළත් ආරම්භක ක්‍රමලේඛයෙහි උපදෙස් ක්‍රියාත්මක කරයි.</p><p>මෙහෙයුම සිදුවන අනුපිළිවෙළ වන්නේ: (අදාළ අකුරුවලින් කොටු පුරවන්න.)</p>[DIAGRAM: Four empty boxes in a row connected by arrows, for the user to fill in the sequence.]",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-2-4-2"
      },
      {
        id: "pq-2018-p2-4c",
        label: "(c)",
        content: "<p>බහුකාර්ය මෙහෙයුම් පද්ධතියක් (multi-tasking operating system) සහිත පරිගණකයක ධාවනය වන්නාවූ ක්‍රියාවලියකට (process) සිදු විය හැකි අවස්ථා සංක්‍රාන්ති (state transitions) පහත රූප සටහනෙහි පෙන්වා ඇත.</p>[DIAGRAM: A process state transition diagram. States are New, Ready, Running, Waiting, Terminated. Transitions are shown with arrows. Admitted (New to Ready), Exit (Running to Terminated), and labeled transitions A (Ready to Running), B (Running to Ready), C (Running to Waiting), D (Waiting to Ready).]<p>(i) A, B, C සහ D ලේබලවලින් දක්වන සංක්‍රාන්ති ක්‍රියාරම්භක (transition triggers) දී ඇති ලැයිස්තුවෙන් තෝරා ලියන්න.</p><p><b>ලැයිස්තුව</b> = {අතුරු බිඳුම (interrupt), ආදාන/ප්‍රතිදාන හා සිද්ධි (event) නිම කිරීම, ආදාන/ප්‍රතිදාන සඳහා හෝ සිද්ධියක් සඳහා හෝ බලා සිටීම, නියමකාරනිය මගින් තෝරා යැවීම (scheduler dispatch)}</p><p>(ii) ඉහත ක්‍රියාවලියට අදාළව පහත සංක්‍රාන්ති ක්‍රියාරම්භකයට තුඩු දිය හැකි එක් හේතුවක් දෙන්න.</p><p><b>අතුරු බිඳුම:</b></p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-5-3-1"
      },
      {
        id: "pq-2018-p2-4d",
        label: "(d)",
        content: "<p>(i) එක්තරා පරිගණකයක භෞතික මතකයේ (physical memory) මුළු ධාරිතාව 4GB වේ. එම මතකයේ රාමුවක (frame) විශාලත්වය 4KB වේ. භෞතික මතකයේ ඇති මුළු රාමු සංඛ්‍යාව ගණනය කර දක්වන්න.</p><p>(ii) මෙහෙයුම් පද්ධතිය, පරිගණකයේ ධාවනය වන එක් එක් ක්‍රියාවලියක් (process) සඳහා පිටු වගුව (page table) නම් වූ දත්ත ව්‍යුහයක් (data structure) භාවිත කරයි. එම දත්ත ව්‍යුහය භාවිත වන්නේ කුමක් සඳහා ද?</p><p>(iii) භෞතික මතකයේ ධාරිතාව සලකන විට, ඉහත පරිගණකයේ අතථ්‍යරූපී මතක (virtual memory) තාක්ෂණය භාවිත කිරීමෙන් ලැඛෙන වාසිය කුමක් ද?</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-5-4-0"
      }
    ]
  }
];

const partB: StructuredQuestion[] = [
  {
    id: "pq-2018-p2-b-1",
    questionNumber: "1",
    content: "<p>A, B සහ C නම් ආදාන තුනක් සහ Z නම් එක් ප්‍රතිදානයක් සහිත සංඛ්‍යාංක පද්ධතියක් සඳහා තර්කන පරිපථයක් ස්ථාපනය කිරීමට අවශ්‍ය යැයි සිතන්න. එහි හැසිරීම පහත පරිදි වේ.</p><p>ආදානය C=1 නම් Z ප්‍රතිදානය A හි අගය ගනී.</p><p>ආදානය C=0 නම් Z ප්‍රතිදානය B හි අගය ගනී.</p>",
    questionType: "essay",
    totalMarks: 0,
    subParts: [
      {
        id: "pq-2018-p2-b-1a",
        label: "(a)",
        content: "<p>Z ප්‍රතිදානය සඳහා සත්‍යතා වගුව ලබා ගන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "medium",
        relatedNoteId: ""
      },
      {
        id: "pq-2018-p2-b-1b",
        label: "(b)",
        content: "<p>Z සඳහා ගුණිතයන්ගේ එකතුව (sum of products) හෝ එකතුවල ගුණිතය (product of sums) හෝ ආකාරයට බූලියානු ප්‍රකාශනයක් ලියන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "medium",
        relatedNoteId: ""
      },
      {
        id: "pq-2018-p2-b-1c",
        label: "(c)",
        content: "<p>ඉහත (b) හි Z සඳහා ඔබ ලබා ගත් බූලියනු ප්‍රකාශනය සුළු කරන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "medium",
        relatedNoteId: ""
      },
      {
        id: "pq-2018-p2-b-1d",
        label: "(d)",
        content: "<p>ඉහත (c) හි සුළු කරන ලද ප්‍රකාශනය භාවිත කර පද්ධතිය සඳහා ආදාන දෙකක් සහිත NAND ද්වාර පමණක් හෝ ආදාන දෙකක් සහිත NOR ද්වාර පමණක් හෝ භාවිත කර තර්කන පරිපථයක් ගොඩනගන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: ""
      }
    ]
  },
  {
    "id": "pq-2018-p2-b-2",
    "questionNumber": "2",
    "content": "<p>පහත දැක්වෙන සංසිද්ධිය සලකන්න.</p><p>XYZ සමාගමට නිෂ්පාදන, ගිණුම්, අලෙවි, පරිපාලන, නඩත්තු සහ තොරතුරු තාක්ෂණ සේවා නමින් දෙපාර්තමේන්තු හයක් ඇත. එක් එක් දෙපාර්තමේන්තුවෙහි ඇති පරිගණක සංඛ්‍යාව පහත වගුවෙහි පෙන්වා ඇත.</p>[DIAGRAM: A table showing department number, name, and number of computers. D01: නිෂ්පාදන (25), D02: ගිණුම් (30), D03: අලෙවි (18), D04: පරිපාලන (30), D05: නඩත්තු (25), D06: තොරතුරු තාක්ෂණ සේවා (28)]<p>එක් එක් දෙපාර්තමේන්තුවට තමන්ගේම ස්ථානීය ප්‍රදේශ ජාලයක් (LAN) අවශ්‍යව පවතී. ජාල පරිපාලක වෙත C පන්තියේ 192.248.154.0/24 IP ලිපින කාණ්ඩයක් ලැබී ඇත. සැම දෙපාර්තමේන්තුවකම අවශ්‍යතා සපුරාලමින් එක් එක් දෙපාර්තමේන්තුවට IP ලිපින වෙන් කෙරෙන ආකාරයට, IP ලිපින කාණ්ඩය උපජාලනය (subnet) කිරීමට අවශ්‍යව ඇත.</p>",
    "questionType": "essay",
    "totalMarks": 0,
    "subParts": [
      {
        "id": "pq-2018-p2-b-2a",
        "label": "(a)",
        "content": "<p>(i) IP ලිපින කාණ්ඩයෙහි කොපමණ ලිපින සංඛ්‍යාවක් තිබේ ද?</p><p>(ii) IP ලිපින කාණ්ඩයෙහි පළමු සහ අවසාන ලිපින මොනවා ද?</p><p>(iii) අවශ්‍ය උපජාල නිර්මාණය කිරීම සඳහා සත්කාරක (host) බිටු කොපමණ අවශ්‍ය වේ ද?</p><p>(iv) උපජාලගත කිරීමෙන් පසු එක් එක් දෙපාර්තමේන්තුව සඳහා අදාළ ජාල ලිපිනය, උපජාල ආවරණය (subnet mask) සහ පවරන ලද IP ලිපින පරාසය ලියා දක්වන්න.</p><p>සටහන: ඔබගේ පිළිතුර ඉදිරිපත් කිරීම සඳහා පහත දැක්වෙන වගු ආකෘතිය භාවිත කරන්න.</p>[DIAGRAM: An empty table with columns for Department Number, Network Address, Subnet Mask, and IP Address Range, with rows for D01 to D06.]",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "large",
        "relatedNoteId": "note-6-7-1"
      },
      {
        "id": "pq-2018-p2-b-2b",
        "label": "(b)",
        "content": "<p>XYZ සමාගම නිෂ්පාදන, ගිණුම්, අලෙවි, පරිපාලන සහ නඩත්තු යන දෙපාර්තමේන්තු පහ තොරතුරු තාක්ෂණ සේවා දෙපාර්තමේන්තුවට සම්බන්ධ කර, එම දෙපාර්තමේන්තු තොරතුරු තාක්ෂණ දෙපාර්තමේන්තුව හරහා අන්තර්ජාලයට සම්බන්ධ කරයි. රැහැන් අතුරා, සවිච හයක්, මාර්ගකාරකයක් (router) සහ ගිනි පවුරක් (firewall) ස්ථාපනය කර ජාලය සම්පූර්ණ කර ඇත. දෙපාර්තමේන්තු හය වෙන වෙනම ගොඩනැගිලි හයක ස්ථාන ගත වී ඇත. ජාල පරිපාලක විසින් සියලු ම උපජාලවලට, නියෝජන සේවාදායකයක් (proxy server) හරහා අන්තර්ජාලයට ප්‍රවේශ වීමට ඉඩ සලසා ඇත. නියෝජන සේවාදායකය සහ DNS සේවාදායකය තොරතුරු තාක්ෂණ සේවා දෙපාර්තමේන්තුවෙහි ස්ථාපනය කර ඇත.</p><p>සියලු ම ස්ථාන සඳහා සුදුසු උපක්‍රම හා අවශ්‍ය රැහැන් හඳුනා ගනිමින්, XYZ සමාගමෙහි පරිගණක ජාලයෙහි තර්කණ සැකැස්ම නිරූපණය කිරීමට, නම් කරන ලද ජාල රූපසටහන අඳින්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "large",
        "relatedNoteId": "note-6-7-0"
      },
      {
        "id": "pq-2018-p2-b-2c",
        "label": "(c)",
        "content": "<p>ජාලය සැකසීමෙන් අනතුරුව සමාගමෙහි ඕනෑම දෙපාර්තමේන්තුවක ඕනෑම සේවකයකුට තම දෙපාර්තමේන්තුවෙහි පරිගණකයක ඇති වෙබ් අතරික්සුවක් මගින් ඒකාකාරී සම්පත් නිශ්චායකය http://www.nie.lk වන වෙබ් අඩවියට සාර්ථකව පිවිසිය හැකි විය. එසේ නමුදු එක්තරා දිනයකදී එක් සේවකයෙක් තම දෙපාර්තමේන්තුවෙහි පරිගණකයකින් එම වෙබ් අඩවියට ප්‍රවේශ වීමට නොහැකි බව දැන ගනියි.</p><p>ඉහත ගැටළුවට තුඩු දිය හැකි හේතු තුනක් ලියා දක්වන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": ""
      }
    ]
  },
  {
    "id": "pq-2018-p2-b-3",
    "questionNumber": "3",
    "content": "",
    "questionType": "essay",
    "totalMarks": 0,
    "subParts": [
      {
        "id": "pq-2018-p2-b-3a",
        "label": "(a)",
        "content": "<p>ශ්‍රී ලංකාවෙහි එක්තරා නගරයක ඇති ව්‍යපාරයක් ලී වෙස් මුහුණු, අතින් සාදනු ලබන සිහිවටන, ඛතික් සහ අත්‍යන්ත්‍ර රෙදිපිළි වැනි අත්කම් භාණ්ඩ සංචාරකයන්ට අලෙවි කරයි. දැනට පාරිභෝගිකයින් විසින් සාප්පුවට පැමිණ, මුදල් ගෙවා භාණ්ඩ මිලදී ගනු ලැබේ. හිමිකරු තමන්ගේම වෙබ් ද්වාරයක් මගින් මාර්ගගතව තම භාණ්ඩ අලෙවි කිරීමට සැලසුම් කරයි.</p><p>(i) ව්‍යාපාර හිමිකරු විසින් ආරම්භ කිරීමට සැලසුම් කරනු ලඛන e-ව්‍යාපාර ආකෘති (e-business model) වර්ගය සඳහන් කරන්න.</p><p>(ii) ආසන්නයේ පිහිටා ඇති එක්තරා සංචාරක හෝටලයක් එහි වෙබ් අඩවියෙහි මෙම සැලසුම් කරන ලද මාර්ගගත සාප්පුව ප්‍රසිද්ධ කිරීමට කැමැත්ත පළකරන්නේ යැයි උපකල්පනය කරන්න.<br>(1) මෙම සංසිද්ධියට අදාළව අත්කම් භාණ්ඩ ව්‍යාපාරය සහ හෝටලය අතර කුමන e-ව්‍යාපාර ආකෘතියක් ස්ථාපනය කළ හැකි වන්නේ ද?<br>(2) හෝටලය සහ අත්කම් භාණ්ඩ ව්‍යාපාරයෙහි යෝපිත මාර්ගගත සාප්පුව යන එකිනෙක සඳහා e-ව්‍යාපාර ආදායම් ආකෘතියක් (revenue model) බැගින් කෙටියෙන් පැහැදිලි කරන්න.</p><p>(iii) සැලසුම් කරන ලද e-ව්‍යාපාරයෙහි මාර්ගගත ගෙවීම් සැකසීම සඳහා භාවිත කළ හැකි ක්‍රම දෙකක් සඳහන් කරන්න.</p><p>(iv) සැලසුම් කරන ලද e-ව්‍යාපාර වෙබ් ද්වාරය සඳහා පාරිභෝගිකයින් ආකර්ෂණය කර ගැනීමට ඔබ විසින් යෝජනා කරනු ලබන e-අලෙවි කිරීමේ (e-marketing) එක් ක්‍රමයක් කෙටියෙන් පැහැදිලි කරන්න.</p><p>(v) සැලසුම් කරන ලද e-ව්‍යාපාර වෙබ් ද්වාරයේ පරිශීලක අත්දැකීම් (user experience) වැඩි දියුණු කිරිම සඳහා බුද්ධිමත් ඒජන්ත (intelligent agent) තාක්ෂණය භාවිත කළ හැකි ආකාරය විස්තර කරන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "large",
        "relatedNoteId": "note-12-1-0"
      },
      {
        "id": "pq-2018-p2-b-3b",
        "label": "(b)",
        "content": "<p>බහු-ඒජන්ත (multi-agent) පද්ධතියක සරල කරන ලද දසුනක් දැක්වෙන පහත රූපසටහන සලකන්න.</p>[DIAGRAM: A diagram showing a 'User' interacting with an 'Application'. The application in turn interacts with 'Agent A'. 'Agent A' communicates with 'Agent B'.]<p>ඉහත රූපසටහන අධ්‍යයනය කර, පහත දැක්වෙන ප්‍රශ්නයට පිළිතුර සපයන්න.</p><p>“මෘදුකාංග ඒජන්තවරයකුට පරිශීලක අතුරු මුහුණතක් තිබීමට හෝ නොතිබීමට හෝ පිළිවන.”</p><p>ඉහත ප්‍රකාශය හා ඔබ එකඟ වන්නේ ද? රූපසටහන ආශ්‍රයෙන් හේතුවක් දක්වන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": "note-13-2-0"
      }
    ]
  },
  {
    "id": "pq-2018-p2-b-4",
    "questionNumber": "4",
    "content": "",
    "questionType": "essay",
    "totalMarks": 0,
    "subParts": [
      {
        "id": "pq-2018-p2-b-4a",
        "label": "(a)",
        "content": "<p>ධන සංඛ්‍යා අනුක්‍රමයක් ඇති ආදානයක් සලකන්න. අනුක්‍රමයට උපරිම වශයෙන් සංඛ්‍යා 100ක් තිබිය හැකි ය. n < 100 ලෙස අනුක්‍රමයට සංඛ්‍යා n තිබේ නම්, (n+1) වන සංඛ්‍යාව -1 ලෙස සලකුණු කිරීමෙන් අනුක්‍රමයේ අවසානය දැක්වේ. උදාහරණයක් ලෙස පහත දැක්වෙන ආදාන අනුක්‍රමයට ධන සංඛ්‍යා 8ක් ඇති අතර 9 වන ආදානය වන -1 මගින් අවසානය සනිටුහන් කෙරේ.</p><p>23 12 54 76 89 22 44 65 -1</p><p>ඉහත විස්තර කරන ආකාරයේ ධන සංඛ්‍යා n ඇති අනුක්‍රමයක විශාලතම සංඛ්‍යාව ප්‍රතිදානය කිරීම සඳහා ඇල්ගොරිතමයක් ගැලීම් සටහනක් මගින් නිරූපණය කරන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "large",
        "relatedNoteId": "note-9-3-1"
      },
      {
        "id": "pq-2018-p2-b-4b",
        "label": "(b)",
        "content": "<p>දී ඇති ගැලීම් සටහන සලකන්න. ගැලීම් සටහනෙහි දැක්වෙන ඇල්ගොරිතමය ආදාන දෙකක් ලබාගන්නා අතර පළමු ආදානය වන L, සංඛ්‍යා ලැයිස්තුවක් ද, දෙවන ආදානය K, දෙන ලද සංඛ්‍යාවක් ද වේ.</p>[DIAGRAM: A flowchart for a linear search algorithm. It starts, inputs a list L and a key K. It initializes `n = length of L` and `i = 0`. It enters a loop that checks if `i < n`. If not, it outputs 'False' and ends. If yes, it checks if `L[i] == K`. If yes, it outputs 'True' and ends. If no, it increments `i` by 1 and goes back to the loop condition `i < n`.]<p>(i) පළමු ආදානය (L) 23, 45, 32, 11, 67, 39, 92, 51, 74, 89 ද දෙවන ආදානය (K) 38 ද වූයේ නම්, ප්‍රතිදානය කුමක් ද?</p><p>(ii) මෙම ඇල්ගොරිතමයෙහි අරමුණ කෙටියෙන් පැහැදිලි කරන්න.</p><p>(iii) ගැලීම් සටහනේ ඇති ඇල්ගොරිතමය ක්‍රියාත්මක කිරීම සඳහා පයිතන් කේතයක් ගොඩනගන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "large",
        "relatedNoteId": "note-9-13-0"
      }
    ]
  },
  {
    "id": "pq-2018-p2-b-5",
    "questionNumber": "5",
    "content": "<p>පහත දැක්වෙන CLASS සහ STUDENT වගු දෙක, රූපයෙහි දී ඇති ER සටහන භාවිත කර නිර්මාණය කර ඇත.</p>[DIAGRAM: Two tables, CLASS and STUDENT, and an ER diagram. CLASS table has columns ClassID, ClassName, ClassTeacher, Stream, Year. STUDENT table has IndexNumber, ClassID, Initials, Surname, DateOfBirth. The ER diagram shows a relationship 'Assigned' between CLASS and STUDENT entities.]",
    "questionType": "essay",
    "totalMarks": 0,
    "subParts": [
      {
        "id": "pq-2018-p2-b-5a",
        "label": "(a)",
        "content": "<p>A සහ B ලෙස දක්වා ඇති CLASS සහ STUDENT යන භුතාර්ථ අතර සම්බන්ධතාවෙහි ගණනීයතාවය (cardinality) කුමක් ද? සටහන: A සහ B සඳහා සුදුසු ලේඛල පිළිවෙළින් ලියා දක්වන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "small",
        "relatedNoteId": "note-8-2-0"
      },
      {
        "id": "pq-2018-p2-b-5b",
        "label": "(b)",
        "content": "<p>ඉහත උදාහරණයෙහි ප්‍රාථමික යතුර/යතුරු සහ ආගන්තුක යතුර/යතුරු භාවිතයෙන් වගු දෙක අතර සම්බන්ධතාවයක් (relationship) ගොඩනැගෙන ආකාරය පැහැදිලි කරන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": "note-8-3-0"
      },
      {
        "id": "pq-2018-p2-b-5c",
        "label": "(c)",
        "content": "<p>(i) STUDENT සහ CLASS වගු දෙවන ප්‍රමත (2NF) ආකාරයෙන් පවතී ද? ඔබේ පිළිතුරට හේතුවක් වගු ආශ්‍රයෙන් පැහැදිලි කරන්න.</p><p>(ii) ප්‍රමතකරණයෙහි ප්‍රධාන වාසියක් කෙටියෙන් පැහැදිලි කරන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": "note-8-7-0"
      },
      {
        "id": "pq-2018-p2-b-5d",
        "label": "(d)",
        "content": "<p>CLASS වගුවට පහත දැක්වෙන උපලැකියානය ඇතුළත් කිරීම සඳහා SQL ප්‍රකාශයක් ලියන්න.</p><p>1115 | 13 - C | A.B. Jinasena | Technology | 2018</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": "note-8-6-0"
      }
    ]
  },
  {
    "id": "pq-2018-p2-b-6",
    "questionNumber": "6",
    "content": "",
    "questionType": "essay",
    "totalMarks": 0,
    "subParts": [
      {
        "id": "pq-2018-p2-b-6a",
        "label": "(a)",
        "content": "<p>එක්තරා රටක පාසල්වලට ළමුන් ඇතුළත් කිරීමේ ක්‍රියාදාමය, පහත දැක්වෙන විස්තරය සහ දත්ත ගැලීම් සටහන ආශ්‍රයෙන් පැහැදිලි කෙරේ.</p><p>[SCENARIO DESCRIPTION: A detailed description of a school admission process involving an applicant, the school, the election authority, and the divisional secretariat. It describes the flow of application forms, verification of eligibility, voter list confirmation, and residency confirmation.]</p>[DIAGRAM: A Level 1 DFD for the school admission system. It shows the 'Applicant' external entity sending an application. Process 1.1 'Process Application'. Process 1.2 'Verify Application'. Process 1.3 'Schedule Interview'. It interacts with data stores like 'Application Details', 'Interview Details', and other external entities like 'Election Authority' and 'Divisional Secretariat'. Data flows are labeled A through K.]<p>ඉහත සංසිද්ධිය සඳහා පළමුවන මට්ටමෙහි දත්ත ගැලීම් සටහන, ඇතැම් දත්ත ගැලීම් A සිට K දක්වා ලේබල සහිත ව ඉහත රූප සටහනෙහි දී ඇත.</p><p>අදාළ දත්ත ගැලීම් හඳුනාගෙන, A සිට K දක්වා වන ලේඛල ඉදිරියෙන් ඒවා ලියා දක්වන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "large",
        "relatedNoteId": "note-7-6-0"
      },
      {
        "id": "pq-2018-p2-b-6b",
        "label": "(b)",
        "content": "<p>(i) පද්ධති සංවර්ධන ජීවන චක්‍රයෙහි භාවිත වන කාර්යබද්ධ (functional) සහ කාර්යබද්ධ නොවන (non-functional) අවශ්‍යතා අතර ප්‍රධාන වෙනස කෙටියෙන් පැහැදිලි කරන්න.</p><p>(ii) නාමාවලියක (catalogue) ඇති භාණ්ඩ අලෙවි කිරීමට, යෝජිත e-වාණිජ්‍ය (e-commerce) වෙබ් ද්වාරයක තිබිය යුතු ඇතැම් කාර්යබද්ධ සහ කාර්යබද්ධ නොවන අවශ්‍යතා ලැයිස්තුවක් පහත දැක්වේ.</p><p>A - භාණ්ඩවල විවිධ සංලක්ෂණ (characteristics) පදනම අනුව භාණ්ඩ සෙවීම සඳහා පරිශීලකට අවස්ථාව ලබා දීම</p><p>B - පද්ධතිය ඕනෑම වෙබ් අතරික්සුවක ක්‍රියා කළ යුතු වීම</p><p>C - පද්ධතිය පහසුවෙන් භාවිත කිරීමට හැකි වීම</p><p>D - භාණ්ඩ පිළිබඳ විවරණ (comments) ඉදිරිපත් කිරීමට සහ වෙනත් පපිශීලකයන්ගේ විවරණ කියවීමට පරිශීලකට අවස්ථාව ලබා දීම</p><p>E - පද්ධතිය බිඳ වැටීමක් හමුවේ වුව ද එහි දත්ත සුරක්ෂිත විය යුතු වීම</p><p>F - තමන් කැමති භාණ්ඩ පිළිබඳ පැතුම් ලැයිස්තුවක් (wish list) සාදා එය නඩත්තු කර පවත්වාගෙන යාමට පරිශීලකට අවස්ථාව ලබා දීම</p><p>G - නාමාවලියේ ඇති භාණ්ඩ බලා ගැනීමට පරිශීලකට අවස්ථාව ලබා දීම</p><p>H - පද්ධතිය දවසෙහි පැය 24 ම, සතියෙහි දින 7 ම හා වසරෙහි දින 365 ම භාවිත කළ හැකි වීම</p><p>I - පරිශීලක නාම හා මුරපද හරහා පරිශීලකයන්ගේ තථ්‍යභාවය (authenticity) තහවුරු කිරීමට හැකි විය යුතු වීම</p><p>J - ලෝක ව්‍යාප්ත පරිශීලකයන් (උදා: ප්‍රංශ, ජපන්, ජර්මන් ආදි) සඳහා පද්ධතියේ අභිරුචි (customized) සංස්කරණ (versions) තිබිය යුතු වීම</p><p>A සිට J අකුරෙන් කාර්යබද්ධ නොවන අවශ්‍යතා හඳුනාගෙන ඒවායේ ලේඛල ලියා දක්වන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "large",
        "relatedNoteId": "note-7-6-0"
      }
    ]
  }
]


export const paper2018_p2: Paper = {
  id: "al-ict-paper-2018-p2",
  title: "A/L ICT Paper II - 2018",
  examName: {
    sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
    tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
    english: "General Certificate of Education (Adv. Level) Examination"
  },
  year: 2018,
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
      title: "A කොටස - ව්‍යුහගත රචනා",
      instructions: "ප්‍රශ්න හතරටම පිළිතුරු මෙම පත්‍රයේම සපයන්න.",
      questions: partA
    },
    partB: {
      title: "B කොටස - රචනා",
      instructions: "ඕනෑම ප්‍රශ්න හතරකට පමණක් පිළිතුරු සපයන්න.",
      questions: partB
    }
  }
};

