
import type { Paper, StructuredQuestion } from "../../types";

const partA: StructuredQuestion[] = [
    {
      id: "pq-2019-p2-1",
      questionNumber: "1",
      content: "",
      questionType: "structured",
      totalMarks: 0,
      subParts: [
        {
          id: "pq-2019-p2-1a",
          label: "(a)",
          content: "<p>(i) වෙබ් අතරික්සුවක (browser) පෙන්වන, දී ඇති HTML කේතයේ ප්‍රතිදානය පහත කොටුවේ අඳින්න.</p>[CODE:html]<html>\n<body>\n<!--Effects of Social Networking -->\n<p>Social networking has <br> <u>advantages</u> and disadvantages </p>\n</body>\n</html>[/CODE]<p>(ii) වෙබ් අතරික්සුවක් මගින් විදැහු විට පහත දැක්වෙන HTML කේත ඛණ්ඩයෙන් බලාපොරොත්තු වන ප්‍රතිදානය අඳින්න.</p>[CODE:html]<html>\n<body>\n<table border=\"1\">\n<caption>Schedule</caption>\n<tr><th>Time</th><th>Event</th></tr>\n<tr><td>8 am</td><td>Drama</td></tr>\n<tr><td>10 am</td><td>News</td></tr>\n<tr><td colspan =2> Lunch</td></tr>\n</table>\n</body>\n</html>[/CODE]",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        },
        {
          id: "pq-2019-p2-1b",
          label: "(b)",
          content: "<p>(i) වෙබ් පිටුවක් නිර්මාණය කිරීමේදී බාහිර විලාස පත් (external style sheets) භාවිත කිරීමේ වාසි දෙකක් ලියන්න.</p><p>(ii) පහත දැක්වෙන HTML මූලාංගයන්ට වගුවෙහි දී ඇති පරිදි විලාසයන් අවශ්‍ය යැයි සලකන්න.</p>[TABLE:CSS Properties|මූලාංගයේ නම|උප ලක්ෂණය|උප ලක්ෂණයේ අගය|p|color|red|p|font-family|Calibri|p|text-align|justify|h1|color|red|h1|font-family|Calibri|h2|color|red|h2|font-family|Calibri|h2|text-align|justify]<p>විලාස කාණ්ඩ (CSS group selector) සංකල්පය පමණක් යොදා ගනිමින් ඉහත අවශ්‍යතා සපුරාලීම සඳහා වඩාත්ම කාර්යක්ෂම ක්‍රමයට බාහිර විලාස පතක් ලියන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        },
        {
          id: "pq-2019-p2-1c",
          label: "(c)",
          content: "<p>පහත දී ඇති PHP කේතයෙන් 'school_db' නම් MYSQL දත්ත සමුදායෙහි 'student' නම් වගුවෙහි 'name' සහ 'class' ක්ෂේත්‍රවලට දත්ත එකතු කිරීමට බලාපොරොත්තු වේ. 'school_db' වලට පිවිසීම (login) සඳහා වන පරිශීලක නම සහ මුර පදය පිළිවෙළින් 'admin' සහ 'A!2t*' වේ. හිස්තැන් පුරවා, PHP කේත ඛණ්ඩය සම්පූර්ණ කරන්න.</p>[CODE:php]<?php\n$conn = new mysqli('locathost', ............, ..............., ....................);\nif ($conn->connect_error) {\n  die(\"Connection failed: \" . $conn->connect_error);\n}\n\n$sql = \".................... into .................... (...................., ....................)\n  values ('Piyal', '12-B')\";\n\nif ($conn->query(....................) ==true) {\n  echo \"New record created successfully\";\n} else {\n  echo \"Error: \" . $sql . \"<br>\" . $conn->error;\n}\n\n$conn->close();\n?>[/CODE]",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large",
          relatedNoteId: ""
        }
      ]
    },
    {
      id: "pq-2019-p2-2",
      questionNumber: "2",
      content: "",
      questionType: "structured",
      totalMarks: 0,
      subParts: [
        {
          id: "pq-2019-p2-2a",
          label: "(a)",
          content: "<p>වාණිජ්‍යයට සම්බන්ධ පහත (i) සිට (vi) දක්වා වන වාක්‍ය ඛණ්ඩ, පහත දී ඇති පද ලැයිස්තුවෙහි වඩාත්ම සුදුසු අයිතමය සමග ගළපන්න.</p><p><b>ලැයිස්තුව</b> = {දැන්වීම් ප්‍රචාරය ආදායම් ආකෘතියක් ලෙස (advertising as a revenue model), ණයපත් (credit cards), රාජ්‍ය e-ටෙන්ඩර් සේවාව (Government e-Tendering service), රජයෙන් පුරවැසියන්ට (G2C) සේවාව (Government to Citizen service), කණ්ඩායම් ලෙස මිල දී ගැනීම (group purchasing), හානිකර පුපුරන ද්‍රව්‍ය (harmful explosives), මාර්ගගත වෙළෙඳපොළ (online marketplace), ගෙවීම් ද්වාරය (payment gateway), පහසුවෙන් හානිවිය හැකි ද්‍රව්‍ය (perishable goods), සමාජ වාණිජ්‍යය (social commerce), ග්‍රාහකත්වය ආදායම් ආකෘතියක් ලෙස (subscription as a revenue model), සම්ප්‍රදායික වෙළඳපොළ (traditional marketplace)}</p><p><b>වාක්‍ය ඛණ්ඩ:</b></p><p>(i) මෙය මුදලට භාණ්ඩ සහ සේවාවන් හුවමාරු කෙරෙන ගැනුම්කරුවන් සහ වෙළෙන්දන් භෞතික ලෙස අන්තර් ක්‍රියාවේ යෙදෙන ස්ථානයකි.</p><p>(ii) මෙවැනි දෑ e-වාණිජ්‍ය පද්ධති ඔස්සේ විකිණීම හෝ මිල දී ගැනීම සාමාන්‍යයෙන් තහනම් ය.</p><p>(iii) ව්‍යාපාරික වෙබ් අඩවියකට පූර්ණ ප්‍රවේශය සඳහා පරිශීලකයන් විසින් නිතිපතා ගාස්තුවක් ගෙවනු ලැබේ.</p><p>(iv) මෙය මාර්ගගත භාණ්ඩ සහ සේවා මිල දී ගැනීම හා විකිණීම සඳහා සමාජ මාධ්‍ය භාවිත කෙරෙන e-වාණිජ්‍ය උපකුලකයකි.</p><p>(v) මෙය e-වාණිජ්‍ය යෙදුම සහ පසු (back-end) අන්තයෙහි මූල්‍ය සේවා ලබා දෙන අය අතර තොරතුරු හුවමාරු කිරීම මගින් ආරක්ෂාකාරී ලෙස ගෙවීම් කිරීමේ ගනුදෙනුවලට පහසුකම් සපයයි.</p><p>(vi) අදාළ රජයේ කාර්යාලය මගින් ලබා දෙන මාර්ගගත වාහන ආදායම් බලපත්‍ර සේවාව භාවිතයෙන් වාහන ආදායම් බලපත්‍රය අලුත් කිරීම.</p><p><b>සටහන :</b> වාක්‍ය ඛණ්ඩයෙහි අංකය ඉදිරියෙන් ගැළපෙන අයිතමය පමණක් ලියන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        },
        {
          id: "pq-2019-p2-2b",
          label: "(b)",
          content: "<p>පහත දැක්වෙන පයිතන් ක්‍රමලේඛය සලකන්න.</p>[CODE:python]x = 0\nn = int (input())\nwhile (n>0):\n  if n>x:\n    x = n\n  n = int (input())\nprint (x)[/CODE]<p>(i) ආදානය 4 6 3 2 8 -1 වන්නේ නම් ක්‍රමලේඛයෙහි ප්‍රතිදානය ලියා දක්වන්න.</p><p>(ii) මෙම ක්‍රමලේඛයෙහි අරමුණ කුමක් ද?</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        }
      ]
    },
    {
      id: "pq-2019-p2-3",
      questionNumber: "3",
      content: "",
      questionType: "structured",
      totalMarks: 0,
      subParts: [
        {
          id: "pq-2019-p2-3a",
          label: "(a)",
          content: "<p>මෘදුකාංග සංවර්ධන සමාගමක කාර්ය මණ්ඩලය (Staff) විසින් කරනු ලබන ව්‍යාපෘතිවලට (Project) අදාළ තොරතුරු දැක්වෙන පහත භූතාර්ථ සම්බන්ධතා සටහන (Entity Relationship Diagram) සලකන්න.</p>[DIAGRAM:2019-p2-q3a]<p>devnote: An ER Diagram is shown. The 'Staff' entity has attributes StaffID (key), Name, DateOfBirth, Designation, Address. The 'Company' entity has attributes CompanyRegNo (key), Name, Address. The 'Project' entity has attributes ProjectID (key), ProjectName, Leader, StartDate, Duration. 'Staff' and 'Company' are linked by 'Employs' (N to 1). 'Staff' and 'Project' are linked by 'Work for' (N to M). 'Company' and 'Project' are linked by 'Conduct' (1 to N). There is an empty box labeled X connected to the 'Conduct' relationship.</p><p>(i) එක් එක් කාර්ය මණ්ඩල සාමාජිකයා (staff member) එක් එක් ව්‍යාපෘතියෙහි (Project) සේවයෙහි යෙදෙන (work) පැය ගණන (NoOfHours) සටහන් කරනු ලැබේ. නිවැරදි සංකේතය සහ ලේඛලය සමග NoOfHours උපලැකිය ER සටහනෙහි අදාළ ස්ථානයෙහි අඳින්න.</p><p>(ii) භාරගන්නා වූ සෑම ව්‍යාපෘතියක් සඳහාම ව්‍යාපෘතියෙහි කාල වකවානුවට කාර්ය මණ්ඩලය වෙනුවෙන් තාවකාලික ස්ථානයක් (Location) කුලියට ගනු ලැබේ. සෑම ස්ථානයක් සඳහාම අයිතිකරුගේ නම (Owner Name), දුරකථන අංකය (PhoneNo), ලිපිනය (Address), කුලිය (Rent), කුලියට ගත් දිනය (RentedDate) සහ කුලියට ගත් කාල පරිච්ඡේදය (RentedPeriod) සටහන් කරනු ලැබේ. එක් ව්‍යාපෘතියක් සඳහා එක් ස්ථානයක් පවතී. කුලියට ගත් එක් ස්ථානයක් එක් ව්‍යාපෘතියක් සඳහා පමණක් භාවිත කෙරේ. කිසියම් ව්‍යාපෘතියක් නිම වූ විට, එම ව්‍යාපෘතිය සඳහා කුලියට ගත් ස්ථානය නිදහස් කර, අයිතිකරු වෙත භාරදෙනු ලැබේ.</p><p>Location නම් භූතාර්ථය අදාළ උපලැකි සහිතව රූපසටහනෙහි X නම් ප්‍රදේශය තුළ ඇඳ, පවතින ER සටහන සමග ගණනීයතාව දක්වමින් සම්බන්ධ කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "xlarge"
        },
        {
          id: "pq-2019-p2-3b",
          label: "(b)",
          content: "<p>පහත දැක්වෙන එක් එක් වගන්තියෙහි හිස්තැන පිරවීමට වඩාත්ම සුදුසු අයිතමය දී ඇති ලැයිස්තුවෙන් තෝරා ලියන්න. (වරහන් තුළ ඇති ඉංග්‍රීසි තේරුම ලිවීම අවශ්‍ය නොවේ.)</p><p><b>ලැයිස්තුව</b> = {ALOHA, යෙදුම් ස්ථරය (Application Layer), CIDR, DHCP, වසම් නාම පද්ධතිය (Domain Name System), ජාල ස්ථරය (Network Layer), පොද හුවමාරුව (Packet Switching), සමතා බිටුව (Parity Bit), සමතා බයිටය (Parity Byte), නියෝජන සේවාදායකය (Proxy Server)}</p><p>(i) ............................... දෙන ලද URL හා වෙබ් ලිපිනවලට අනුරූප IP ලිපින ලබා දෙයි.</p><p>(ii) ගොනු හුවමාරු නියමාවලිය (FTP), සරල තැපැල් හුවමාරු නියමාවලිය (SMTP), සහ Telnet සේවාව ............................... හි ක්‍රියාත්මක වේ.</p><p>(iii) ............................... මගින්, යම් උපක්‍රමයකට, එය ජාලයකට සම්බන්ධ වන සැම අවස්ථාවකදී ම වෙනස් IP ලිපිනයක් ලැබීමට ඉඩ ඇත.</p><p>(iv) ............................... තිබෙන IP ලිපින අවකාශය, කාර්යක්ෂමව කළමනාකරණය කිරීමට ඉවහල් වේ.</p><p>(v) දත්ත සම්ප්‍රේෂණයේදී දෝෂ අනාවරණය කිරීම සඳහා ද්විමය අනුලක්ෂණ පෙළක (binary string) ඇති මුළු 1-බිටු ගණන ඔත්තේ හෝ ඉරට්ටේ බව නිශ්චය කර ගැනීමට එම අනුලක්ෂණ පෙළට ............................... ක් එකතු කරනු ලැබේ.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        }
      ]
    },
    {
      id: "pq-2019-p2-4",
      questionNumber: "4",
      content: "",
      questionType: "structured",
      totalMarks: 0,
      subParts: [
        {
          id: "pq-2019-p2-4a",
          label: "(a)",
          content: "<p>මෙහෙයුම් පද්ධතියක් එක් එක් ක්‍රියාවලියට (process) අදාළ වැදගත් තොරතුරු පවත්වා ගෙන යෑමට ක්‍රියායන පාලන ඛණ්ඩ (Process Control Blocks [PCB]) භාවිත කරයි. පහත විස්තරය කියවා අසා ඇති ප්‍රශ්නවලට පිළිතුරු සපයන්න.</p><p>රාණි විසින් තනි සකසනයක් (single processor) සහිත පරිගණකයක ගණනය කිරීම් යෙදුමක් (computational application) ආරම්භ කරනු ලබයි. අදාළ ගණනය කිරීම් සිදුවන අතරතුර ඇය තොරතුරක් සොයා ගැනීම සඳහා වෙබ් අතරික්සුවක් ද අරඹයි.</p><p>“ගණනය කිරීමේ ක්‍රියායනය → වෙබ් අතරික්සු ක්‍රියායනය” යන සන්දර්භ ස්විචනය (context switch) සිදුවූ විට ගණනය කිරීමේ ක්‍රියායනයේ පහත දැක්වෙන PCB ක්ෂේත්‍රවල අඩංගු වන්නේ මොනවාදැයි ලියා දක්වන්න.</p><p>(i) ක්‍රමලේඛ ගණකය (Program counter)</p><p>(ii) ක්‍රියායන අවස්ථාව (Process state)[සූදානම් (Ready), ධාවනය වන (Running) හෝ අවහිර කරනු ලැබූ (Blocked)?]</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "pq-2019-p2-4b",
          label: "(b)",
          content: "<p>(i) යාබද ගොනු අවකාශ විභාජනය (contiguous file space allocation) යන්නෙන් අදහස් වන්නේ කුමක් ද?</p><p>(ii) යාබද ගොනු අවකාශ විභාජනයෙහි එක් දුර්වලතාවයක් ලියා දක්වන්න.</p><p>(iii) එහෙත් ගොනු කිහිපයක් CD ROM හි ගබඩා කිරීමට යාබද විභාජනය යෝග්‍ය වේ. ඒ ඇයි?</p><p>(iv) සබැඳි ගොනු අවකාශ විභාජනයේ දී (linked file space allocation), ගොනුවේ සාමාන්‍ය දත්ත අයිතමවලට අමතරව එක් ගොනු කට්ටියක (file block) තිබෙන වෙනත් තොරතුරක් ලියා දක්වන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        },
        {
          id: "pq-2019-p2-4c",
          label: "(c)",
          content: "<p>විශාලත්වය 32 KB වූ ක්‍රමලේඛයක්, 32 KB භෞතික මතකයක් (physical memory) ඇති පරිගණකයක ධාවනය වීම සලකන්න. පද්ධතියේ පිටු විශාලත්වය (page size) 4 KB වේ. එක්තරා අවස්ථාවකදී ක්‍රියායනයේ පිටු වගුව (page table) පහත පරිදි වේ.</p><p><b>සැ.යු:</b></p><ul><li>පිටු වගුවේ එක් එක් පේළියට අදාළ තෝරාගත් ක්ෂේත්‍ර කිහිපයක් පමණක් දක්වා ඇත.</li><li>රාමු අංකය ද්විමය ලෙස දක්වා ඇත.</li><li>0 පිටුවේ අතථ්‍ය යොමු (virtual addresses) 0 සිට 4095 දක්වා වන අතර, 1 පිටුවේ අතථ්‍ය යොමු 4096 සිට 8191 තෙක් ආදි වශයෙන් වේ.</li><li>ඇත/නැත බිටුව එම පේළියේ වලංගු බව දක්වයි. බිටුව 1 නම් ඇතුළත් කරන ලද දෑ වලංගු වන අතර භාවිතයට ගත හැක. බිටුව 0 නම් අදාළ අතථ්‍ය පිටුව භෞතික මතකයේ නැත.</li></ul>[TABLE:Page Table|පිටු අංකය|රාමු අංකය|ඇත/නැත|0|110|1|1|001|1|2|010|1|3|100|1|4|011|1|5|000|0|6|000|0|7|101|1]<p>(i) මෙම ක්‍රමලේඛයට අතථ්‍ය යොමු (virtual address) 8200 වන යොමුවට පිවිසීමට (access) අවශ්‍ය යැයි සිතන්න. එය කුමන භෞතික යොමුවකට (physical address) පරිණාමනය (transform) වේ ද?</p><p>(ii) ක්‍රමලේඛ විශාලත්වයන්ට සාපේක්ෂව භෞතික මතක (physical memory) විශාලත්වයන් සැසඳීමේ දී, පිටු වගු (page tables) භාවිතය නිසා ලැබෙන එක් වාසියක් ලියා දක්වන්න.</p><p>(iii) ක්‍රියාවලියකට අයත් යම් පිටුවක් භෞතික මතකයේ නොතිබීමට ඇති එක් හේතුවක් ලියා දක්වන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "xlarge"
        }
      ]
    }
];

const partB: StructuredQuestion[] = [
    {
        id: "pq-2019-p2-b-1",
        questionNumber: "1",
        content: "<p>බහුතර ශ්‍රිතය (majority function) ලෙස හැඳින්වෙන බුලියානු ශ්‍රිතය ද්විමය ආදාන n ලබාගෙන, ආදානයෙන් බහුතරයක් (අඩු තරමින් අඩක්වත්) 1 වේ නම්, 1 ප්‍රතිදානය කරයි, නැතහොත් 0 ප්‍රතිදානය කරයි.</p><p>ආදාන A, B හා C ද ප්‍රතිදානය Z ද වන n = 3 අවස්ථාව එනම් ආදාන 3 හි බහුතර ශ්‍රිතය සලකමු.</p>",
        questionType: "essay",
        totalMarks: 0,
        subParts: [
          {
            id: "pq-2019-p2-b-1a",
            label: "(a)",
            content: "<p>ආදාන 3 හි බහුතර ශ්‍රිතය සඳහා සත්‍යතා වගුව ඉදිරිපත් කරන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "medium",
            relatedNoteId: ""
          },
          {
            id: "pq-2019-p2-b-1b",
            label: "(b)",
            content: "<p>ආදාන 3 හි බහුතර ශ්‍රිතයෙහි Z ප්‍රතිදානය සඳහා සුළු කරන ලද බුලියානු ප්‍රකාශනයක්, කානෝ සිතියම් (karnaugh maps) භාවිත කරමින් ව්‍යුත්පන්න කරන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "medium",
            relatedNoteId: ""
          },
          {
            id: "pq-2019-p2-b-1c",
            label: "(c)",
            content: "<p>ආදාන 3 හි බහුතර ශ්‍රිතය සඳහා NAND ද්වාර පමණක් භාවිත කරමින් තර්කන පරිපථයක් ගොඩනගන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "medium",
            relatedNoteId: ""
          }
        ]
    },
    {
        id: "pq-2019-p2-b-2",
        questionNumber: "2",
        content: "<p>පහත දැක්වෙන සංසිද්ධිය සලකන්න:</p><p>පාසලක් තම පරිපාලන (Admin), විද්‍යාගාර (Lab) හා පුස්තකාල (Lib) ගොඩනැගිලි සඳහා පහත දැක්වෙන සම්පත් ලබා ගෙන ඇත.</p>[TABLE:School Resources|ගොඩනැගිල්ල|සම්පත්|Admin|පරිගණක 5 යි, මුද්‍රක 1 යි.|Lab|පරිගණක 40 යි, මුද්‍රක 1 යි.|Lib|පරිගණක 10 යි, මුද්‍රක 1 යි.]<p>පහත අවශ්‍යතා සපුරා ගැනීම සඳහා පාසල් පරිගණක ජාලයක් නිර්මාණය කළ යුතුව ඇත.</p><ul><li>මුද්‍රකය හවුලේ භාවිත කිරීමට, එක් එක් ගොඩනැගිල්ල සඳහා ස්ථානීය ප්‍රදේශ ජාලයක් (LAN) බැගින් අවශ්‍ය වේ.</li><li>සෑම පරිගණකයකටම, Admin ගොඩනැගිල්ලෙහි එක් පරිගණකයක ධාවනය වන පාසල් තොරතුරු පද්ධතියට ද (SIS), Lib ගොඩනැගිල්ලෙහි එක් පරිගණකයක ධාවනය වන පුස්තකාල තොරතුරු පද්ධතියට ද (LIS) ප්‍රවේශවීම සඳහා ඉහත ජාල තුන එකිනෙක ජාලගත කිරීමට ද අවශ්‍ය ය.</li><li>සෑම පරිගණකයකටම කාර්යක්ෂම අන්තර්ජාල සම්බන්ධතාවයක් ලබා දීමට ද අවශ්‍ය ය. මේ සඳහා පාසල අන්තර්ජාල සේවා සැපයුම්කරුවකුගේ (ISP) සේවාවකට දායක වී ඇති අතර, එම සැපයුම්කරු අන්තර්ජාල සම්බන්ධතාවය Lab ගොඩනැගිල්ලට ලබාදීමට නියමිත ය. Lab ගොඩනැගිල්ල අනෙකුත් ගොඩනැගිලි දෙකෙන් ආසන්න වශයෙන් 500m ක් දුරස්ථව පවතී. Lab ගොඩනැගිල්ලෙහි එක් පරිගණකයක් DNS සේවාදායකය ලෙස භාවිත කිරීමට යෝජිත ය. එම ගොඩනැගිල්ලේ තවත් පරිගණකයක් නියෝජන සේවාදායකය (proxy server) ලෙස භාවිත කිරීමට යෝජිත ය.</li><li>සම්පූර්ණ ජාලයම ගිනි පවුරකින් (firewall) ආරක්ෂා කිරීමට ද යෝජිත ය.</li></ul>",
        questionType: "essay",
        totalMarks: 0,
        subParts: [
          {
            id: "pq-2019-p2-b-2a",
            label: "(a)",
            content: "<p>විදුහල්පතිට පාසල සඳහා 192.248.16.0/24 IP ලිපින කාණ්ඩය ලැබී ඇත. ගොඩනැගිලි තුන සඳහා මෙම ලිපින කාණ්ඩය මගින් වෙනම උපජාල (subnet) තුනක් නිර්මාණය කිරීමෙන් අනතුරුව පරිගණකවලට IP ලිපින පැවරීමට අදහස් කෙරේ.</p><p>එවැනි උපජාලනය කිරීමක් සිදුකර ඇතැයි උපකල්පනය කර, එක් එක් ගොඩනැගිල්ල සඳහා අදාළ ජාල ලිපිනය (network address), උපජාල ආවරණය (subnet mask) හා පවරන ලද IP ලිපින පරාසය පහත දැක්වෙන වගු ආකෘතිය පිටපත් කර එහි ලියා දක්වන්න.</p>[TABLE:Subnetting|ගොඩනැගිල්ල|ජාල ලිපිනය|උපජාල ආවරණය|IP ලිපින පරාසය|Admin||||Lab||||Lib|||]",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "large"
          },
          {
            id: "pq-2019-p2-b-2b",
            label: "(b)",
            content: "<p>මෙම පාසල් පරිගණක ජාලය සඳහා සම්පූර්ණයෙන්ම සම්බන්ධිත (all-to-all) ජාල සම්බන්ධතා ස්ථලකයක් යෝග්‍ය නොවීමට එක් හේතුවක් ලියා දක්වන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "small"
          },
          {
            id: "pq-2019-p2-b-2c",
            label: "(c)",
            content: "<p>පාසල් පරිගණක ජාලය පිහිටුවීමේ වගකීම දරන Lab පරිපාලක විසින් ස්විච (switches) හා මාර්ගකාරකයක් (router) ඉල්ලා ඇත.</p><p>ජාල සම්බන්ධතා ස්ථලකය (network connection topology) හා උපක්‍රම (devices) පැහැදිලිව දක්වමින්, පාසලේ අවශ්‍යතා ඉටුකර ගැනීම සඳහා Lab පරිපාලක විසින් ගොඩනගාගත හැකි පාසල් පරිගණක ජාලයයෙහි තර්කන සැකැස්ම නිරූපණය කිරීමට ජාල රූපසටහනක් අඳින්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "large"
          },
          {
            id: "pq-2019-p2-b-2d",
            label: "(d)",
            content: "<p>පාසල් පරිගණක ජාලයේ ප්‍රවාහන නියමාවලිය (transport protocol) සඳහා UDP වෙනුවට TCP භාවිතය වඩා යෝග්‍යවීමට එක් හේතුවක් දෙන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "small"
          }
        ]
    },
    {
        id: "pq-2019-p2-b-3",
        questionNumber: "3",
        questionType: "essay",
        totalMarks: 0,
        content: "",
        subParts: [
          {
            id: "pq-2019-p2-b-3a",
            label: "(a)",
            content: "<p>ABC Books පුද්ගලික සමාගම, පාවිච්චි කරන ලද පොත් මිල දී ගැනීම හා විකිණීම සඳහා විශේෂත්වයක් දරයි. වර්තමානයේදී ව්‍යාපාරික මෙහෙයුම් මුළුමනින්ම අත්‍යුරු ක්‍රමයට (පියෝ බ්‍රික් - pure brick) සිදු වේ.</p><p>(i) ABC Books පුද්ගලික සමාගම වෙබ් අඩවියක් ආරම්භ කර සිය පාරිභෝගිකයන්ට මාර්ගගතව පොත් මිල දී ගැනීමට ඉඩ සලසයි. මෙම සංසිද්ධියට යෙදෙන්නා වූ ආදායම් ආකෘතිය (ආදායම් ලබන ක්‍රමය) කුමක් ද?</p><p>(ii) පියෝ බ්‍රික් (pure brick) වර්ගයේ සිට බ්‍රික් සහ ක්ලික් ව්‍යාපාර ආකෘතිය කරා යාමේදී ABC Books ව්‍යාපාරයට අනන්‍ය වූ වඩාත්ම සැලකිය යුතු අභියෝගය කුමක් ද? ඔබේ පිළිතුර පැහැදිලි කරන්න. <b>ඉඟිය:</b> මාර්ගගතව අලුත් පොත් විකිණීම සමග සසඳන්න.</p><p>(iii) ABC Books පුද්ගලික සමාගම තම වෙබ් අඩවිය, පාවිච්චි කරන ලද පොත් සඳහා e-වාණිජ්‍ය වෙළඳපොළක් දක්වා දීර්ඝ කිරීමට යෝජිත ය. මෙම වෙළඳපොළ B2C, B2B සහ C2C ව්‍යාපාර වර්ගවලට උපකාර වන අතර වෙනත් ව්‍යාපාරවලට සහභාගීවීමට ද ඉඩ සලසයි. යෝජිත වෙළඳපොළෙහි B2C, B2B සහ C2C යන එක් එක් ව්‍යාපාර වර්ගයෙහි ගනුදෙනු කවුරුන් අතර සිදුවන්නේ දැයි කෙටියෙන් පැහැදිලි කරන්න.</p><p>(iv) ABC Books පුද්ගලික සමාගමට ඔවුන්ගේ යෝජිත e-වාණිජ්‍ය වෙළඳපොළ තුළ අනුගමනය කළ හැකි ඉහත (i) හි ඔබ විසින් සඳහන් කරන ලද ආදායම් ආකෘතිය හැර වෙනත් සුදුසු ආදායම් ආකෘතියක් හදුනාගෙන ලියා දක්වන්න.</p><p>(v) මෙම e-වාණිජ්‍ය වෙළඳපොළ තුළ ගෙවීම් සිදු කළ හැකි ආකාරයක් හඳුනාගෙන ලියා දක්වන්න.</p><p>(vi) යෝජිත e-වාණිජ්‍ය වෙළඳපොළෙහි දත්ත, පොත් ප්‍රකාශන සමාගම්වලට තම ව්‍යාපාර සඳහා භාවිත කළ හැකි වන්නේ කෙසේදැයි කෙටියෙන් පැහැදිලි කරන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "xlarge"
          },
          {
            id: "pq-2019-p2-b-3b",
            label: "(b)",
            content: "<p>සංකීර්ණ පද්ධති අන්තර් ක්‍රියා ක්‍රියාත්මක කිරීමේදී බහු ඒජන්ත (multi-agent) පද්ධති ප්‍රයෝජනවත් විය හැකි ය. දත්ත කේන්ද්‍රයක (data-center) සේවාදායක කාමරයට (server room) ප්‍රවේශවීම බහු ඒජන්ත පද්ධතියක් මගින් කළමනාකරණය කිරීමේ සරල ආකාරයක් පහත රූපසටහනෙන් දැක්වේ.</p>[DIAGRAM:2019-p2-q3b]<p>devnote: A diagram of a multi-agent system controlling access to a server room. A 'Systems Engineer' is outside. The 'Server Room Door' has a 'Keypad'. Interaction 'A' is from the Keypad to 'Agent 1'. Interaction 'B' is from the door to 'Agent 1'. 'Agent 1' has interaction 'C' with a 'Database'. 'Agent 1' also has interaction 'P' with 'Agent 2'. A CCTV camera is shown with interaction 'R' pointing to 'Agent 2'. 'Agent 2' has interaction 'Q' with the 'Database'.</p><p><b>භාවිතයේ කෙටි සංසිද්ධිය පහත දැක්වේ.</b></p><p>සියලු ම බලයලත් පද්ධති ඉංජිනේරුවරුන් (system engineer) ප්‍රවේශය සීමිත සේවාදායක කාමරයට ඇතුළුවීම සහ තම ප්‍රවේශ කේතය වන සංඛ්‍යා හයකින් සමන්විත අංකය ඇතුළත් කළ යුතු ය.</p><p>සේවාදායක කාමරය වෙත ප්‍රවේශවීමට අවසර ලැබුණු පසු එහාමෙහා චලනය කළ හැකි CCTV කැමරා මගින් සේවාදායකය අවට ප්‍රදේශය වීඩියෝ කිරීම ආරම්භ කෙරේ.</p><p>CCTV ආදානයෙහි සකසන ලද දත්ත, දත්ත සමුදායෙහි (database) සුරකිනු ලැබේ. අන්තර් ක්‍රියාවන් A, B, C, P, Q සහ R ඊතල මගින් පෙන්වා ඇත.</p><p>(i) මෙම පිහිටුමෙහි පරිශීලක සමග අන්තර් ක්‍රියා නොමැති (ස්වීය ස්වයංකරණය self-autonomous) ඒජන්ත හඳුනාගන්න.</p><p>(ii) සංවේදනය-පරිගණනය-පාලනය (Sense-Compute-Control) යනු ඒජන්ත පාදක කරගත් පද්ධති ක්‍රියාත්මක කිරීමේදී බහුලව භාවිත වන පියවර තුනක සැලසුම් විලාසයකි. A, B සහ C අන්තර් ක්‍රියාවලින් සංවේදනය, පරිගණනය හා පාලනය යන එක් එක් පියවර නිරූපණය කිරීමට වඩාත්ම සුදුසු අන්තර් ක්‍රියා ඊතල වෙන වෙන ම හඳුනාගෙන ලියා දක්වන්න.</p><p>(iii) C සහ R යන අන්තර් ක්‍රියා ඇඳුම් (links) දිශා දෙකකට පෙන්වා ඇත. C සහ R අන්තර් ක්‍රියා දෙක සඳහා ද්විපථ ඈඳුම් (duplex links) වලට හේතු වෙන වෙන ම පැහැදිලි කරන්න.</p><p>(iv) A අන්තර් ක්‍රියාව පරිශීලකගෙන් ඒජන්තට අන්තර් ක්‍රියාවක් ලෙස දැකිය හැකි ය. ඒජන්තගෙන් ඒජන්තට අන්තර් ක්‍රියාවක් හඳුනාගෙන එම අන්තර් ක්‍රියාවෙහි මෙහෙයුම් භාවිත වන ආකාරය පැහැදිලි කරන්න.</p><p>(v) CCTV ආදාන, දත්ත සමුදාය වෙත සෘජුවම යැවීම වෙනුවට 2 වන ඒජන්ත මගින් යැවීමට එක් හේතුවක් දෙන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "xlarge"
          }
        ]
    },
    {
        id: "pq-2019-p2-b-4",
        questionNumber: "4",
        content: "",
        questionType: "essay",
        totalMarks: 0,
        subParts: [
          {
            id: "pq-2019-p2-b-4a",
            label: "(a)",
            content: "<p>පාසලක තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT) භාර ආචාර්යවරයාට පංතියෙහි සියලු ම සිසුන් ICT විෂයය සඳහා ලබාගත් ලකුණු සැකසීමට අවශ්‍යව ඇති අතර පංතියෙහි සාමාන්‍ය ලකුණු ගණනය කළ යුතුව ඇත. මෙම කාර්යයට අදාළ ඇල්ගොරිතමයක් ප්‍රකාශ වන ගැලීම් සටහනක් ගොඩනගන්න. පළමු ආදානය පංතියෙහි සිටින මුළු සිසුන් සංඛ්‍යාව n යැයි උපකල්පනය කරන්න. ඉන්පසු n සිසුන්ගේ ලකුණු එකින් එක ආදානය කරනු ලැබේ.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "large"
          },
          {
            id: "pq-2019-p2-b-4b",
            label: "(b)",
            content: "<p>පහත දක්වා ඇති ගැලීම් සටහන සලකන්න. එහි x % 2 මගින් x mod 2 නිරූපණය කෙරේ.</p>[FLOWCHART:2019-p2-q4b]<p>devnote: A flowchart. Start -> Input n -> a = 0 -> Diamond: n <= 0? Yes branch goes to Output a -> End. No branch from n<=0? goes to Input x -> Diamond: x % 2 == 0? Yes branch goes to a = a + 1 -> n = n - 1 -> loop back to the n<=0? diamond. No branch from x%2==0? goes directly to n = n - 1.</p><p>(i) පළමු ආදානය (n) 6 නම් සහ ඉන්පසු ආදාන 3, 6, 4, 12, 11, 9 නම් ප්‍රතිදානය කුමක් වන්නේ ද?</p><p>(ii) මෙම ඇල්ගොරිතමයෙහි අරමුණ කුමක් ද?</p><p>(iii) ගැලීම් සටහන මගින් ප්‍රකාශවන ඇල්ගොරිතමය ක්‍රියාත්මක කිරීම සඳහා පයිතන් ක්‍රමලේඛයක් ගොඩනගන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "large"
          }
        ]
    },
    {
        id: "pq-2019-p2-b-5",
        questionNumber: "5",
        content: "<p>එක්තරා වාහන කුලියට සැපයීමේ සමාගමකට ලියාපදිංචි වාහන හිමිකරුවන් ඇත. හිමිකරුවන්ගෙන් වාහන ලබාගෙන පාරිභෝගිකයන් වෙත කුලියට ලබා දේ. වාහන කුලියට සැපයීමේ සමාගමට අදාළ පහත දැක්වෙන සම්බන්ධතා (relations) සලකන්න.</p><p>I. Customer (<u>Customer_NIC</u>, Customer_Name, City, Postal_Code)</p><p>II. Vehicle_Owner (<u>Owner_Id</u>, Owner_Name, Contact_No)</p><p>III. Vehicle(<u>Vehicle_Reg_No</u>, Description, Owner_Id)</p><ul><li>Customer (පාරිභෝගිකයා) සම්බන්ධතාවයෙහි අනන්‍යවන Customer_NIC (පාරිභෝගිකයාගේ ජාතික හැඳුනුම්පත් අංකය), Customer_Name (නම), ඔහු/ඇය ජිවත්වන City (නගරය) සහ එම නගරයෙහි Postal_Code (තැපැල් කේතය) අඩංගු වේ. එක් පාරිභෝගිකයකු එක් නගරයක ජීවත්වන අතර එක් නගරයක් තුළ පාරිභෝගිකයන් රාශියක් ජීවත් විය හැක. තැපැල් කේතය, නගරය මත රඳා පවතී (depends).</li><li>Vehicle_Owner (වාහනය - හිමිකරු) සම්බන්ධතාවයෙහි අනන්‍ය වූ Owner_Id (හිමිකරු හැඳුනුම් අංකය), Owner_Name (හිමිකරුගේ නම) සහ Contact_No (ඇමතුම් අංකය) අඩංගු වේ.</li><li>Vehicle (වාහනය) සම්බන්ධතාවයෙහි අනන්‍ය වූ වාහනයේ Vehicle_Reg_No (ලියාපදිංචි අංකය), Description (වාහනය පිළිබඳ විස්තරය) සහ Owner_Id (හිමිකරු හැඳුනුම් අංකය) අඩංගු වේ.</li></ul><p>පාරිභෝගිකයකුට වාහන එකකට වඩා කුලියට ගත හැකි ය. තවද කිසියම් වාහනයක් පාරිභෝගිකයන් කිහිපදෙනකුට වෙනස් අවස්ථාවල දී කුලියට දිය හැකි ය. සෑම වාහනයකටම තනි හිමිකරුවකු සිටින අතර, එක් හිමිකරුවකුට වාහන එකකට වඩා තිබිය හැකි ය.</p>",
        questionType: "essay",
        totalMarks: 0,
        subParts: [
          {
            id: "pq-2019-p2-b-5a",
            label: "(a)",
            content: "<p>ඉහත I, II හා III හි ඇති සම්බන්ධතා පවතින්නේ කුමන ප්‍රමතකරණයෙහි ද? ඔබේ පිළිතුර සාධාරණීකරණය කරන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "medium"
          },
          {
            id: "pq-2019-p2-b-5b",
            label: "(b)",
            content: "<p>ඉහත සම්බන්ධතා, ඔබ විසින් 5 (a) කොටසෙහි සඳහන් කරන ලද දැනට පවතින ප්‍රමතකරණයෙන්, මීළඟ ප්‍රමතකරණයට හරවන්න. (පහත වගුවෙහි P සිට T දක්වා වන ලේඛලවලට අදාළ දෑ ඔබේ පිළිතුර ලෙස ඉදිරිපත් කරන්න.)</p>[TABLE:Normalization|සම්බන්ධතා අංකය|මීළඟ ප්‍රමතකරණය|මීළඟ ප්‍රමතකරණයෙහි ඇති සම්බන්ධතා(ව)|I|P|S|II|Q|T|III|R|U]",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "large"
          },
          {
            id: "pq-2019-p2-b-5c",
            label: "(c)",
            content: "<p>සම්බන්ධතාවයන් (relationships), යතුරු උපලැකි (key attributes), වෙනත් උපලැකි සහ ගණනීයතා (cardinality) හඳුනාගනිමින් ඉහත සම්බන්ධතා නිරූපණය කිරීම සඳහා භූතාර්ථ-සම්බන්ධතා (ER) සටහනක් අඳින්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "large"
          },
          {
            id: "pq-2019-p2-b-5d",
            label: "(d)",
            content: "<p>පාරිභෝගිකයන් විසින් වාහන කුලියට ගැනීම පිළිබඳ විස්තර සමාගම විසින් තබා ගැනීම අවශ්‍ය වේ. Rent_Date (කුලියට ගත් දිනය), Start_Time (ආරම්භ වූ වේලාව) හා End_Time (අවසන් වූ වේලාව) යන විස්තර ද ඇතුළත් වන Rent (කුලියට ගැනීම) ලෙස හැඳින්වෙන සම්බන්ධතාවයක් (relation) නිර්මාණය කරන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "medium"
          },
          {
            id: "pq-2019-p2-b-5e",
            label: "(e)",
            content: "<p>එක් එක් වාහන හිමිකරුට අයිති සියලු ම වාහනවල Owner_Id (හිමිකරු හැඳුනුම් අංකය) සහ Vehicle_Reg_No (වාහනයේ ලියාපදිංචි අංකය) Select (තෝරා ගැනීම) සඳහා SQL වගන්තියක් ලියා දක්වන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "medium"
          }
        ]
    },
    {
        id: "pq-2019-p2-b-6",
        questionNumber: "6",
        content: "",
        questionType: "essay",
        totalMarks: 0,
        subParts: [
          {
            id: "pq-2019-p2-b-6a",
            label: "(a)",
            content: "<p>ලේ පරීක්ෂා කිරීමේ මධ්‍යස්ථානයක පහත ක්‍රියාකාරකම් ඇත.</p><p>පරීක්ෂාව සිදු කරන ලෙස නියම කළ තුණ්ඩුව රෝගියා විසින් භාර ගැනීමේ කවුන්ටරයට භාර දෙනු ලැබේ. භාර ගැනීමේ කවුන්ටරය විසින් රෝගියා වෙත ඉන්වොයිසියක් (invoice) නිකුත් කර එහි පිටපතක් අයකැමි වෙත යවනු ලැබේ. රෝගියා විසින් ඉන්වොයිසිය පරීක්ෂා කර (check) එය අනුමත කිරීමෙන් පසු අයකැමි වෙත ගෙවීම (payment) සමග භාර දෙනු ලැබේ. අයකැමි විසින් රිසිට්පතක් රෝගියා වෙත නිකුත් කර එහි පිටපතක් පරීක්ෂණාගාරය වෙත යවනු ලැබේ. රෝගියා විසින් රිසිට්පත පරීක්ෂණාගාරය වෙත භාර දෙනු ලැබේ. පරීක්ෂණාගාරය විසින් රෝගියා තහවුරු කර, ලේ පරීක්ෂාව සිදු කිරීමෙන් පසු “සිදුකළා -(done)” ලෙස යාවත්කාලීන කරන ලද (updated) රිසිට්පත රෝගියාට දෙනු ලැබේ. පරීක්ෂණාගාරය මගින් වාර්තාව (Report) භාර ගැනීමේ කවුන්ටරය වෙත යවනු ලැබේ. පසුව රෝගියා විසින් යාවත්කාලීන කරන ලද රිසිට්පත භාර ගැනිමේ කවුන්ටරයට ලබා දෙන අතර එම කවුන්ටරය ‘‘නිකුත්කළා -(issued)” ලෙස සලකුණු කර නැවත යාවත්කාලීන කරන ලද රිසිට්පත සමග වාර්තාව රෝගියා වෙත නිකුත් කරනු ලැබේ.</p><p>(i) ඉහත ක්‍රියාකාරකම් සඳහා සංදර්භ සටහන (context diagram) P, Q, R, S සහ T යන ස්ථානවලට අදාළ දත්ත ගැලීම් (data flows) නොමැතිව 1 වන රූපයෙහි දී ඇත.</p>[DIAGRAM:2019-p2-q6a-i]<p>devnote: Context Diagram. The central process is 'ලේ පරීක්ෂා කිරීමේ පද්ධතිය' (Blood Testing System). The external entity is 'රෝගියා' (Patient). There are arrows from Patient to System: P, Q, 'අනුමත වාර්තාව + ගෙවීම'. Arrows from System to Patient: 'රිසිට් පත', 'යාවත්කාලීනවූ රිසිට්පත', S, T.</p><p>දී නොමැති දත්ත ගැලීම් පහ ඉහත විස්තරයෙන් හඳුනාගෙන ලියා දක්වන්න.</p><p>(ii) ඉහත සංදර්භ සටහන සඳහා දත්ත ගැලීම් සටහනෙහි (DFD හි) පළමු මට්ටම (Level 1) 2 රූපයෙහි පෙන්වා ඇත.</p>[DIAGRAM:2019-p2-q6a-ii]<p>devnote: Level 1 DFD. External entity 'රෝගියා' (Patient). Three processes: 1.0 'ලේ පරීක්ෂා කිරීමේ ඉල්ලීම සැකසීම', 2.0 'ගෙවීම් සැකසීම', 3.0 'වාර්තාව සැකසීම'. Data flows: P from Patient to 1.0. Q from 1.0 to 2.0. R from Patient to 2.0. 'රිසිට්පත' from 2.0 to Patient. T from Patient to 1.0. 'නැවත යාවත්කාලීනවූ රිසිට්පත' from 1.0 to Patient. S from Patient to 3.0. 'වාර්තාව' from 3.0 to Patient. X from 2.0 to 3.0. A data store W is connected to process 2.0. A data store R is connected to process 3.0.</p><p>(A) 2.0 ක්‍රියායනය සඳහා (process) ස්ථානයට W සුදුසු පදයක් ලියා දක්වන්න.</p><p>(B) X සඳහා තිබිය යුතු දත්ත ගැලීම හඳුනාගෙන ලියා දක්වන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "xlarge"
          },
          {
            id: "pq-2019-p2-b-6b",
            label: "(b)",
            content: "<p>(i) අවශ්‍යතා විශ්ලේෂණය (requirement analysis) යනු කුමක් ද?</p><p>(ii) අවශ්‍යතා විශ්ලේෂණයෙහි වාසි දෙකක් ලැයිස්තුගත කරන්න.</p><p>(iii) කිසියම් පද්ධතියක එහි කාර්යබද්ධ අවශ්‍යතාවයක් තෘප්ත වන්නේ දැයි තහවුරු කර ගැනීමට භාවිත කළ හැකි එක් ක්‍රමයක් ලබා දෙන්න.</p><p>(iv) අනෙකුත් සාමාන්‍ය කාර්යයන්ට අමතරව පරිශීලකයන්ට පොත් බැහැර ගෙන යා හැකි හා භාර දිය හැකි යෝජිත පාසල් පුස්තකාල කළමනාකරණ පද්ධතියක ඇතැම් කාර්යබද්ධ, කාර්යබද්ධ නොවන සහ වෙනත් අවශ්‍යතා පහත දැක්වෙන ප්‍රකාශවල ඇතුළත් වේ.</p><p>(A) - පද්ධතිය විසින් පරිශීලක නම සහ මුරපදය මගින් පරිශීලකයන්ගේ අනන්‍යතාවය සහතික කළ යුතු ය.</p><p>(B) - පොතක නම, වර්ගය, ISBN අංකය හෝ ප්‍රකාශක නම පාදක කර ගනිමින් පරිශීලකයන්ට පොත් සෙවීමට පද්ධතිය තුළ අවස්ථාව තිබිය යුතු ය.</p><p>(C) - පුස්තකාල පද්ධතියෙහි සම්පූර්ණ වියදම රු. 500 000.00 ට වඩා අඩු විය යුතු ය.</p><p>(D) - පද්ධතිය මුළු කාලයෙන් 99% ක්‍රියාත්මකව පැවතිය යුතු ය (available).</p><p>(E) - පද්ධති සංවර්ධනය මාස 9ක් තුළ සම්පූර්ණ කළ යුතු ය.</p><p>(F) - ක්‍රියාත්මක වෙමින් පවතින විට පද්ධතිය බිඳවැටීමක් සිදු වුව ද, පොත් බැහැර දීමේ විස්තර ආරක්ෂා විය යුතු ය.</p><p>(G) - පාසල් පුස්තකාල කළමනාකරණ පද්ධතියෙහි පොත් දත්ත සමුදාය අනවසර ප්‍රවේශයන්ගෙන් වළක්වා ආරක්ෂා කළ යුතු ය.</p><p>(H) - පාසලෙහි ආදි ශිෂ්‍ය සංගමය මෙම පද්ධතිය සංවර්ධනය කිරීමට කැමැත්ත දක්වා ඇති බැවින් එයට වැඩි මනාපයක් දිය යුතුය.</p><p>(A) සිට (H) වලින් කාර්යබද්ධ (functional) අවශ්‍යතා දෙකක ලේඛල සහ කාර්යබද්ධ නොවන (non-functional) අවශ්‍යතා දෙකක ලේඛල හඳුනාගෙන පිළිවෙළින් ලියා දක්වන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "xlarge"
          }
        ]
    }
];

export const paper2019_p2: Paper = {
  id: "past-paper-2019-p2",
  title: "A/L ICT Paper II - 2019",
  examName: {
    sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
    tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
    english: "General Certificate of Education (Adv. Level) Examination"
  },
  year: 2019,
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

    