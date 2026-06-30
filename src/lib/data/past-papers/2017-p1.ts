
import type { Paper } from "../../types";

export const paper2017_p1: Paper = {
    id: "past-paper-2017-p1",
    title: "A/L ICT Paper I - 2017",
    examName: {
        sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
        tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
        english: "General Certificate of Education (Adv. Level) Examination",
    },
    year: 2017,
    issuer: {
      sinhala: "ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුව",
      tamil: "இலங்கைப் பரீட்சைத் திணைக்களம்",
      english: "Department of Examinations, Sri Lanka"
    },
    subject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය",
    subjectCode: 20,
    time: {
        sinhala: "පැය දෙකයි",
        tamil: "இரண்டு மணித்தியாலம்",
        english: "Two hours"
    },
    content: {
        title: "Paper I",
        instructions: "* සියලුම ප්‍රශ්නවලට පිළිතුරු සපයන්න.\n* පිළිතුරු පත්‍රයේ නියමිත ස්ථානයේ ඔබේ විභාග අංකය ලියන්න.\n* පිළිතුරු පත්‍රයේ පිටුපස දී ඇති උපදෙස් ද සැලකිල්ලෙන් කියවා පිළිපදින්න.\n* 1 සිට 50 තෙක් එක් එක් ප්‍රශ්නයට (1),(2),(3),(4),(5) යන පිළිතුරුවලින් නිවැරදි හෝ ඉතාමත් ගැළපෙන හෝ පිළිතුර තෝරාගෙන, එය, පිළිතුරු පත්‍රයේ පිටුපස දැක්වෙන උපදෙස් පරිදි කතිරයක් (x) යොදා දක්වන්න.\n* ගණක යන්ත්‍ර භාවිතයට ඉඩ දෙනු නොලැබේ.",
        questions: [
            {
                id: "pq-2017-p1-1",
                questionNumber: 1,
                content: "<p>ආචිත ක්‍රම ලේඛ (stored program) සංකල්පය මුලින් ම යෝජනා කළේ කවුරුන් විසින් ද?</p>",
                options: ["Ada Augusta", "Charles Babbage", "Howard Aiken", "Blaise Pascal", "Von Neumann"],
                correctAnswer: 5,
                relatedNoteId: "note-2-2-1"
            },
            {
                id: "pq-2017-p1-2",
                questionNumber: 2,
                content: "<p>පහත දැක්වෙන උපාංග අතුරෙන් පරිගණකයක මධ්‍යම සැකසුම් ඒකකයට (CPU) පිටතින් සාමාන්‍යයෙන් දැකිය හැක්කේ කුමක් ද?</p>",
                options: ["RAM", "පාලන ඒකකය (Control Unit)", "ALU", "පොදුකාර්ය රෙජිස්තර", "L1 නිහිත මතකය (Cache memory)"],
                correctAnswer: 1,
                relatedNoteId: "note-2-2-2"
            },
            {
                id: "pq-2017-p1-3",
                questionNumber: 3,
                content: "<p>නිඛිලයක්, බිටු 8කින් නිරූපණය කරන්නේ නම්, -45 නිරූපණය කරන 2 හි අනුපූරකය කුමක් ද?</p>",
                options: ["11010011", "10110011", "11001101", "00101111", "00101101"],
                correctAnswer: 4,
                relatedNoteId: "note-3-1-3"
            },
            {
                id: "pq-2017-p1-4",
                questionNumber: 4,
                content: "<p>වෙබ් ප්‍රකාශනය සඳහා තවත් නමක් වන්නේ පහත දැක්වෙන දැ අතුරෙන් කුමක් ද?</p>",
                options: ["මාර්ග අපගත ප්‍රකාශනය", "පරිගණක ප්‍රකාශනය", "මාධ්‍ය ප්‍රකාශනය", "මාර්ගගත ප්‍රකාශනය", "ස්ව ප්‍රකාශනය"],
                correctAnswer: 4,
                relatedNoteId: "note-10-7-0"
            },
            {
                id: "pq-2017-p1-5",
                questionNumber: 5,
                content: "<p>පහත සඳහන් ද්විතීයික ආචයන උපක්‍රම ඇතුරෙන් වේගවත් ම දත්ත ප්‍රවේශය ලබා දෙන උපක්‍රමය ලෙස සාමාන්‍යයෙන් සලකනු ලබන්නේ කුමක් ද?</p>",
                options: ["සුසංහිත තැටිය (Compact Disc)", "අංකිත බහු නිපුන තැටිය (Digital Versatile Disc)", "අභ්‍යන්තර දෘඪ ඩිස්කය (Internal hard disk)", "චුම්බකිත පටිය (Magnetic tape)", "නම්‍ය ඩිස්කය (Floppy disk)"],
                correctAnswer: 3,
                relatedNoteId: "note-2-4-0"
            },
            {
                id: "pq-2017-p1-6",
                questionNumber: 6,
                content: "<p>පුද්ගල පරිගණක බලගැන්වීම (boot-up) සඳහා සාමාන්‍යයෙන් භාවිත කරනුයේ පහත දැක්වෙන දැ අතුරෙන් කවරක් ද?</p>",
                options: ["ස්ථිරාංග (Firmware)", "අනිෂ්ට මෘදුකාංග (Malware)", "වෙළඳ මෘදුකාංග (Adware)", "කප්පම් මෘදුකාංග (Ransomware)", "ජීවාංග (Liveware)"],
                correctAnswer: 1,
                relatedNoteId: "note-1-3-2"
            },
            {
                id: "pq-2017-p1-7",
                questionNumber: 7,
                content: "<p>පුද්ගල පරිගණකයක අනුපූරක ලෝහ ඔක්සයිඩ අර්ධ සන්නායක මතකයේ (CMOS) ප්‍රධාන භාවිතයක් වන්නේ පහත දැක්වෙන දෑ අතුරෙන් කුමක් ද?</p>",
                options: [
                    "සැකසීම සඳහා ආදාන තබා ගැනීම",
                    "මෙහෙයුම් සඳහා උපදෙස් රඳවා ගැනීම",
                    "මෙහෙයුම් පද්ධතිය ප්‍රවේශනය (loading) සඳහා අවකාශ ලබා දීම",
                    "ප්‍රතිදානය සඳහා තොරතුරු තබා ගැනීම",
                    "බල ගැන්වීමේ ක්‍රියාවලිය සඳහා මූලික ආදාන ප්‍රතිදාන පද්ධතියේ (Basic Input Output System) කට්ටල් අංග (settings) තබා ගැනීම"
                ],
                correctAnswer: 5,
                relatedNoteId: "note-2-4-2"
            },
            {
                id: "pq-2017-p1-8",
                questionNumber: 8,
                content: "<p>පුද්ගල පරිගණකයක් තුළ අන්තර් ක්‍රියාකාරී නොවන කාර්ය (non-interactive jobs) අනුක්‍රමයක් පරිශීලකයාට සාපේක්ෂව ක්‍රියාත්මක කිරීම හඳුන්වනු ලබනුයේ,</p>",
                options: ["බහුකාර්ය (multitasking) ලෙස ය.", "බහු පරිශීලක සැකසීම (multiuser processing) ලෙස ය.", "බහු සැකසීම (multiprocessing) ලෙස ය.", "කාණ්ඩ සැකසීම (batch processing) ලෙස ය.", "මාර්ගගත සැකසීම (online processing) ලෙස ය."],
                correctAnswer: 4,
                relatedNoteId: "note-1-5-3-1"
            },
            {
                id: "pq-2017-p1-9",
                questionNumber: 9,
                content: "<p>101111<sub>2</sub> ද්විමය සංඛ්‍යාවට තුල්‍ය වන්නේ පහත දැක්වෙන සංඛ්‍යා අතුරෙන් කවරක් ද?</p>",
                options: ["57<sub>8</sub>", "57<sub>16</sub>", "57<sub>10</sub>", "59<sub>16</sub>", "5F<sub>16</sub>"],
                correctAnswer: 2,
                relatedNoteId: "note-3-1-2"
            },
            {
                id: "pq-2017-p1-10",
                questionNumber: 10,
                content: "<p>5D<sub>16</sub> + 10111<sub>2</sub> =</p>",
                options: ["73<sub>8</sub>", "75<sub>16</sub>", "116<sub>8</sub>", "163<sub>8</sub>", "164<sub>8</sub>"],
                correctAnswer: 2,
                relatedNoteId: "note-3-1-2"
            },
            {
                id: "pq-2017-p1-11",
                questionNumber: 11,
                content: "<p>9.25<sub>10</sub> හි ද්විමය නිරූපණය කුමක් ද?</p>",
                options: ["1110011101", "00001001.01", "0000100101", "1000100101", "10001001.01"],
                correctAnswer: 5,
                relatedNoteId: "note-3-1-2"
            },
            {
                id: "pq-2017-p1-12",
                questionNumber: 12,
                content: "<p>මව් පුවරුව මත ඇති ................... පරිගණකයක ක්‍රියාකාරිත්වය විදැහීම (expand) සඳහා භාවිත කරයි. ඉහත වගන්තියේ හිස්තැන පිරවීම සඳහා වඩාත් සුදුසු වන්නේ පහත සඳහන් කවරක් ද?</p>",
                options: ["බසය (Bus)", "ඔරලෝසුව (Clock)", "RAM", "විවරය (Slot)", "ROM"],
                correctAnswer: 4,
                relatedNoteId: "note-2-2-2"
            },
            {
                id: "pq-2017-p1-13",
                questionNumber: 13,
                content: "<p>පහත දැක්වෙන HTML කේතය සලකන්න:</p>[CODE:html]<html>\n<head>\n  <title>Countries</title>\n</head>\n<body>\n  <p><!-- <h1> Sri Lanka </h1> --></p>\n</body>\n</html>[/CODE]<p>ඉහත කේතය විදැහු කිරීමෙන් ලැඛෙන සංදර්ශනය නිවැරදිව විස්තර කෙරෙනුයේ පහත සඳහන් කවරකින් ද?</p>",
                options: [
                    "“Country” පාඨය මාතෘකා තීරයේ (title bar) හා “Sri Lanka” පාඨය ශීර්ෂයක් (header) ලෙස දිස් වේ.",
                    "“Sri Lanka” පාඨය මාතෘකා තීරයේ හා “Country” පාඨය ශීර්ෂයක් ලෙස දිස් වේ.",
                    "“Country” පාඨය මාතෘකා තීරයෙහි දිස් වේ.",
                    "\"<!--<h1> Sri Lanka </h1>-->” පාඨය මාතෘකා තීරයෙහි දිස් වේ.",
                    "“<!--<h1> Sri Lanka </h1>-->” පාඨය වෙබ් පිටුවේ කයේ (body) දිස් වේ."
                ],
                correctAnswer: 3,
                relatedNoteId: "note-10-3-0"
            },
            {
                id: "pq-2017-p1-14",
                questionNumber: 14,
                content: "<p>පහත දැක්වෙන HTML පෝරමයක ඇති “Submit” බොත්තම සලකා බලන්න:</p><pre>Submit</pre><p>පහත දැක්වෙන කුමන උසුලනය/මූලාංගය ඉහත දැක්වෙන “Submit” ඛොත්තමෙන් බලාපොරොත්තු වන කාර්යය නිවැරදිව ක්‍රියාවට නංවයි ද?</p>",
                options: [
                    "<input type = \"submit\" value = \"Submit\">",
                    "<input type = \"button\" value = \"Submit\">",
                    "<button type = \"button\" >Submit</button>",
                    "<button type = \"submit\"></button>",
                    "<button type = \"submit\" value = \"Submit\"></button>"
                ],
                correctAnswer: 1,
                relatedNoteId: "note-10-3-0"
            },
            {
                id: "pq-2017-p1-15",
                questionNumber: 15,
                content: "<p>පහත දැක්වෙන CSS නීති අතුරෙන් කුමක් “school.png” නම් ගොනුවේ ඇති අනුරුව වෙබ් පිටුවක පසුතලය ලෙස විදැහු කරයි ද?</p>",
                options: [
                    "body { background = \"school.png\"; }",
                    "body { background: url (\"school.png\"): }",
                    "body { background-image = \"school.png\"; }",
                    "body { background-image: \"school.png\"; }",
                    "body { background-image: url (\"school.png\"); }"
                ],
                correctAnswer: 5,
                relatedNoteId: "note-10-5-0"
            },
            {
                id: "pq-2017-p1-16",
                questionNumber: 16,
                content: "<p>විද්‍යුත් තැපැල් පද්ධතිවල තැපැල් සේවාදායකගෙන් පණිවිඩ ලබා ‌ගැනීම සඳහා තැපැල් සේවාග්‍රාහක භාවිත කරන නියමාවලිය වනුයේ,</p>",
                options: ["Simple Mail Transfer Protocol (SMTP).", "File Transfer Protocol (FTP).", "Internet Control Message Protocol (ICMP).", "Internet Message Access Protocol (IMAP).", "Telnet."],
                correctAnswer: 4,
                relatedNoteId: "note-6-9-0"
            },
            {
                id: "pq-2017-p1-17",
                questionNumber: 17,
                content: "<p>User Datagram Protocol (UDP) ජාල ප්‍රොටෝකෝලය ................... සඳහා භාවිත කළ හැකිය. ඉහත වගන්තියේ හිස්තැන පිරවීම සඳහා වඩාත් සුදුසු වන්නේ පහත සඳහන් කවරක් ද?</p>",
                options: [
                    "විශ්වසනීය සන්නිවේදනය (reliable communication)",
                    "සහතික කරන ලද ඛෙදා හැරීම",
                    "සම්බන්ධනාභිමුඛ සන්නිවේදනය (connection oriented communication)",
                    "ක්‍රමානුකූල ඛෙදා හැරීම (ordered delivery)",
                    "මංහසුරු අතර තත්ත්ව තොරතුරු හුවමාරු කිරීම"
                ],
                correctAnswer: 2,
                relatedNoteId: "note-6-8-0"
            },
            {
                id: "pq-2017-p1-18",
                questionNumber: 18,
                content: "<p>MAC ලිපින සම්බන්ධයෙන් පහත දැක්වෙන වගන්ති අතුරෙන් කවරක් නිවැරදි වේ ද?</p>",
                options: [
                    "සෑම ජාල උපාංගයකට ම අනන්‍ය MAC ලිපිනයක් ඇත.",
                    "සෑම ජාල සංග්‍රාහයකට ම (host) අනන්‍ය MAC ලිපිනයක් ඇත.",
                    "සෑම ජාල අතුරුමුහුණතකට ම (interface) අනන්‍ය MAC ලිපිනයක් ඇත.",
                    "එය උපාංගයක් ස්ථාපනය කරන අවස්ථාවේ දී පවරනු ලබයි.",
                    "එය මං හැසිරවීම සඳහා භාවිත කරයි."
                ],
                correctAnswer: 3,
                relatedNoteId: "note-6-6-0"
            },
            {
                id: "pq-2017-p1-19",
                questionNumber: 19,
                content: "<p>උපජාලයක පළමු සහ අවසාන IP ලිපින පිළිවෙළින් 192.192.48.0 සහ 192.192.63.255 වේ. මෙම උපජාලයේ උපජාල ආවරණය වන්නේ පහත දැක්වෙන දැ අතුරෙන් කුමක් ද?</p>",
                options: ["255.255.255.0", "255.255.192.0", "255.255.255.192", "255.255.240.0", "255.240.0.0"],
                correctAnswer: 2,
                relatedNoteId: "note-6-7-1"
            },
            {
                id: "pq-2017-p1-20",
                questionNumber: 20,
                content: "<p>172.16.48.200/24 යනු</p>",
                options: [
                    "B පන්තියේ ජාලයක සංග්‍රාහක ලිපිනයක් වේ.",
                    "C පන්තියේ ජාලයක ජාල ලිපිනයක් වේ.",
                    "172.16.48.0/24 උපජාලය තුළ සංග්‍රාහක ලිපිනයක් වේ.",
                    "සංග්‍රාහක 255 කින් යුත් උපජාලයක ජාල ලිපිනයක් වේ.",
                    "ජාල බිටු 8 කින් යුත් සංග්‍රාහක ලිපිනයක් වේ."
                ],
                correctAnswer: 3,
                relatedNoteId: "note-6-7-1"
            },
            {
                id: "pq-2017-p1-21",
                questionNumber: 21,
                content: "<p>TCP/IP පරිගණක ජාලය තුළ Transport Protocol Data Unit (TPDU) ලෙස සඳහන් වනුයේ,</p>",
                options: ["පැකට්ටුවක් ය.", "රාමුවක් (Frame) ය.", "කොටසක් (Segment) ය.", "කවුළුවක් (Window) ය.", "පණිවිඩයක් (Message) ය."],
                correctAnswer: 3,
                relatedNoteId: "note-6-8-0"
            },
            {
                id: "pq-2017-p1-22",
                questionNumber: 22,
                content: "<p>ස්වයංක්‍රීය ටෙලර් යන්ත්‍රයක ඇත්නම් කදිම (nice to have) කාර්යබද්ධ නොවන අවශ්‍යතාවයක් වඩාත් ම හොඳින් විස්තර කරනුයේ පහත දැක්වෙන කුමන වගන්තියෙන් ද?</p>",
                options: [
                    "පද්ධතිය පරිශීලකයින්ට මුදල් ආපසු ගැනීමේ පහසුකම ලබා දිය යුතුම ය.",
                    "පද්ධතිය පරිශීලකයින්ට මුදල් තැන්පත් කිරීමට ඉඩ දිය යුතු ය.",
                    "පද්ධතිය සියලු ම සන්නිවේදන සඳහා බිටු 256ක ගුප්ත කේතනය භාවිත කළ යුතුම ය.",
                    "පද්ධතිය ස්පර්ශ තිර (touch screen) අතුරුමුහුණතක් පරිශීලකයින්ට ලබා දිය යුතු ය.",
                    "පද්ධතිය තත්පර 5ක් තුළ දී මුදල් මුදාහැරිය යුතුම ය."
                ],
                correctAnswer: 4,
                relatedNoteId: "note-7-6-0"
            },
            {
                id: "pq-2017-p1-23",
                questionNumber: 23,
                content: "<p>අලෙවි තොරතුරු පද්ධතියක දත්ත ගැලීම් සටහනක දක්වා ඇති පහත සංකේතය ................... අඩංගු වූ ගෙවීම් තොරතුරු නිරූපණය කරයි.</p><pre>T1(M)    Payment</pre><p>ඉහත වගන්තියේ හිස්තැන පිරවීමට වඩාත් ම යෝග්‍ය වන්නේ පහත සඳහන් කවරක් ද?</p>",
                options: [
                    "ගොනු බන්දේසියක (file tray)",
                    "ඝන කඩදාසි ගොනුවක (cardboard file)",
                    "ගොනු කැබිනෙට්ටුවක (file cabinet)",
                    "දෘඪ ඩිස්කයක් තුළ ඇති දත්ත ගොනුවක",
                    "දෘඪ ඩිස්කයක් තුළ ඇති තාවකාලික දත්ත ගොනුවක"
                ],
                correctAnswer: 5,
                relatedNoteId: "note-1-5-5-1"
            },
            {
                id: "pq-2017-p1-24",
                questionNumber: 24,
                content: "<p>පහත දැක්වෙන දත්ත ගැලීම් සටහන් අතුරින් දත්ත ගැලීම් ආකෘතිකරණයෙහි නීතිවලට අනුකූලව නිවැරදි වන්නේ කුමක් ද?</p>[DIAGRAM:2017-p1-q24]<p>devnote: This question shows five different small Data Flow Diagrams (DFDs), each labeled from (1) to (5). The user must select the one that correctly follows DFD modeling rules. Each diagram shows entities (A, B, C) and data stores (M1), connected by data flow arrows. The differences are in the types of connections (e.g., entity to entity, entity to data store, etc.).</p>",
                options: ["(1)", "(2)", "(3)", "(4)", "(5)"],
                correctAnswer: 5,
                relatedNoteId: "note-7-6-0"
            },
            {
                id: "pq-2017-p1-25",
                questionNumber: 25,
                content: "<p>පහත ගැලීම් සටහන සලකන්න:</p>[DIAGRAM:2017-p1-q25]<p>devnote: A flowchart is shown. It starts, reads a value for 'x', then a decision block checks 'x = 0?'. If 'Yes', it prints 'Good' and ends. If 'No', it prints 'Bad' and then goes to a separate 'end' block.</p><p>ඉහත ගැලීම් සටහනේ ඇති දෝෂය කුමක් ද?</p>",
                options: [
                    "එහි ‘end’ සංකේත දෙකක් තිබීම",
                    "‘Print’ යනු වලංගු ඉඟි පදයක් (keyword) නොවීම",
                    "එහි ‘process’ කොටුවක් නොමැති වීම",
                    "එහි ‘Print’ සංකේත දෙකක් තිබීම",
                    "ගැලීම් දිශාවක් නිවැරදි නොවීම"
                ],
                correctAnswer: 1,
                relatedNoteId: "note-9-3-1"
            },
            {
                id: "pq-2017-p1-26",
                questionNumber: 26,
                content: "<p>විද්‍යුත් ව්‍යාපාර (e-business) සම්බන්ධයෙන් පහත දැක්වෙන කුමන වගන්තිය සත්‍ය වේ ද?</p>",
                options: [
                    "එය අර්ධ වශයෙන් මාර්ගගතව පවත්වාගෙන යන ව්‍යාපාර ක්‍රියාවලියකි.",
                    "එය පෙර අන්ත (front-end) සහ පසු අන්ත (back-end) මාර්ගගත ක්‍රියාවලිවලින් සමන්විත වේ.",
                    "සියලු ‘brick’ ව්‍යාපාරිකයින් ඔවුන්ගේ ව්‍යාපාර මාර්ගගතව පවත්වයි.",
                    "ඕනෑම විද්‍යුත් වාණිජ්‍ය යෙදුමක් විද්‍යුත් ව්‍යාපාර යෙදුමකි.",
                    "ඕනෑම විද්‍යුත් ව්‍යාපාර යෙදුමක් විද්‍යුත් වාණිජ්‍ය යෙදුමකි."
                ],
                correctAnswer: 4,
                relatedNoteId: "note-12-1-0"
            },
            {
                id: "pq-2017-p1-27",
                questionNumber: 27,
                content: "<p>එක්තරා පාසලක සිසුන්ගේ අධ්‍යාපන කටයුතු වැඩි දියුණු කිරීම සඳහා ඔවුන්ට tablet පරිගණක ලබා දෙන ලදී. මෙම අරමුණ සාක්ෂාත් කර ගැනීම සඳහා වඩාත් ම සුදුසු වන්නේ පහත ක්‍රියාකාරකම්වලින් කුමක් ද?</p>",
                options: [
                    "පරිගණකගත අධ්‍යාපනික ද්‍රව්‍ය බාගත කිරීම",
                    "විනෝදාශ්වාදාත්මක වීඩියෝ නැරඹීම",
                    "මිතුරන් අතර ක්ෂණිකව පණිවිඩ යැවීම",
                    "බ්ලොග් ලිවීම",
                    "පරිගණක ක්‍රීඩාවල යෙදීම"
                ],
                correctAnswer: 1,
                relatedNoteId: "note-1-6-0"
            },
            {
                id: "pq-2017-p1-28",
                questionNumber: 28,
                content: "<p>කෘත්‍රිම බුද්ධිය සම්බන්ධයෙන් පහත දැක්වෙන කුමන වගන්තිය සත්‍ය වේ ද?</p>",
                options: [
                    "විශේෂඥ පද්ධතියක අනුමාන යන්ත්‍රය (Inference Engine) මානව තීරණ ගැනීමේ ක්‍රියාවලිය මුළුමනින් ම අනුකරණය කරයි.",
                    "විශේෂඥ පද්ධතියක දැනුම් සමුදායක් තුළ (Knowledge Base) විශේෂඥයකුගේ ප්‍රාථමික දැනුම පමණක් අඩංගු වේ.",
                    "විශේෂඥ පද්ධති සැමවිට ම ජානමය ඇල්ගොරිතම (Genetic Algorithms) මගින් ක්‍රියාත්මක කෙරේ.",
                    "ජානමය ඇල්ගොරිතම මගින් දී ඇති ගැටලුවක් සඳහා එක් පිළිතුරක් පමණක් ලබා දේ.",
                    "ජානමය ඇල්ගොරිතම දී ඇති ප්‍රශ්නයක විසඳුම පුනර්කරණ (iterations) කිහිපයක දී පරිණාමනය කරයි."
                ],
                correctAnswer: 5,
                relatedNoteId: "note-13-1-0"
            },
            {
                id: "pq-2017-p1-29",
                questionNumber: 29,
                content: "<p>ඇල්ගොරිතම සම්බන්ධයෙන් පහත දැක්වෙන කුමන වගන්තිය සත්‍ය වේ ද?</p>",
                options: [
                    "ගැටලුවක් විසඳීමට යොදා ගන්නා පියවරවල සමූහයක් ඇල්ගොරිතමයක් ලෙස හැඳින්වේ.",
                    "ගැටලුවක් විසඳීමට යොදා ගන්නා කාර්යවල අනුක්‍රමයක් ඇල්ගොරිතමයක් ලෙස හැඳින්වේ.",
                    "ඕනෑම ගැටලුවක් විසඳීම සඳහා වැඩිමනක් ම තිබිය හැක්කේ එක් ඇල්ගොරිතමයක් පමණි.",
                    "ඇල්ගොරිතමයකට අපරිමිත පියවර සංඛ්‍යාවක් තිබිය හැකි ය.",
                    "ඇල්ගොරිතමයක් පරිමිත කාලයක් තුළ දී අවසන් වීමට අවශ්‍ය නොවේ."
                ],
                correctAnswer: 1,
                relatedNoteId: "note-9-3-0"
            },
            {
                id: "pq-2017-p1-30",
                questionNumber: 30,
                content: "<p>බැංකුවක ස්වයංක්‍රීය ටෙලර් යන්ත්‍රයක (ATM) අවශ්‍යතා සම්බන්ධයෙන් පහත පෙන්වා ඇති වගන්තිය සලකා බලන්න: “පද්ධතිය මගින් මුදල් ලබා දීම තත්පර 10 කට වඩා අඩු කාලයක දී කළ යුතුම ය.”</p><p>ඉහත සඳහන් අවශ්‍යතාව නිවැරදිව වර්ගීකරණය කරන්නේ පහත සඳහන් කුමකින් ද?</p>",
                options: [
                    "අත්‍යාවශ්‍ය, කාර්යබද්ධ",
                    "අත්‍යාවශ්‍ය, කාර්යබද්ධ නොවන",
                    "අත්‍යාවශ්‍ය නොවන, කාර්යබද්ධ",
                    "අත්‍යාවශ්‍ය නොවන, කාර්යබද්ධ නොවන",
                    "අත්‍යවශ්‍ය හෝ අත්‍යාවශ්‍ය නොවන, කාර්යබද්ධ"
                ],
                correctAnswer: 1,
                relatedNoteId: "note-7-6-0"
            },
            {
                id: "pq-2017-p1-31",
                questionNumber: 31,
                content: "<p>ආයතනයක වැඩසටහනකට ලියාපදිංචි වී ඇති සිසුවකුට අදාළ පහත සම්බන්ධය සලකන්න.</p><p>STUDENT(Sno, Snic, Sname, Sphone, Prog_number)</p><p>සටහන:<br/>Sno - සිසුවාගේ අනන්‍ය ලියාපදිංචි අංකය<br/>Snic - සිසුවාගේ ජාතික හැඳුනුම්පත් අංකය<br/>Sname - සිසුවාගේ නම<br/>Sphone - සිසුවාගේ දුරකථන අංකය<br/>Prog_number - සිසුවා ලියාපදිංචි වී ඇති වැඩසටහනේ අනන්‍ය අංකය</p><p>පහත කවරක් නිවැරදි ද?<br/>A - Sno ප්‍රාථමික (primary) යතුරක් විය හැකි ය.<br/>B - Snic නිරූප්‍ය (candidate) යතුරක් විය හැකි ය.<br/>C - Prog_number ආගන්තුක (foreign) යතුරක් විය හැකි ය.</p>",
                options: ["A පමණි", "A සහ B පමණි", "A සහ C පමණි", "B සහ C පමණි", "A, B සහ C යන සියල්ල ම"],
                correctAnswer: 5,
                relatedNoteId: "note-8-2-0"
            },
            {
                id: "pq-2017-p1-32",
                questionNumber: 32,
                content: "<p>පහත කවරක් නිවැරදි ද?</p><p>A - වගුවකට බොහෝ නිරූප්‍ය යතුරු (candidate keys) තිබිය හැකි ය.</p><p>B - ප්‍රාථමික යතුර (primary key) සැමවිටම නිරූප්‍ය යතුරකි.</p><p>C - එක් වගුවක නිරූප්‍ය යතුර, වෙනත් වගුවක ආගන්තුක යතුරක් (foreign key) ලෙස භාවිත කළ හැකි ය.</p>",
                options: ["A පමණි", "A සහ B පමණි", "A සහ C පමණි", "B සහ C පමණි", "A, B සහ C යන සියල්ල ම"],
                correctAnswer: 5,
                relatedNoteId: "note-8-2-0"
            },
            {
                id: "pq-2017-p1-33",
                questionNumber: 33,
                content: "<p>ඒක-බහු සම්බන්ධතාවලට පහත කවරක් උදාහරණ වේද?</p><p>A - පාරිභෝගිකයකුට ඇනවුම් කිහිපයක් කළ හැකි නමුත් එක ඇනවුමකට ඇත්තේ එක පාරිභෝගිකයකු පමණි.</p><p>B - එක් සේවකයකු ව්‍යාපෘති ගණනාවකට පත් කළ හැකි ය. එක් ව්‍යාපෘතියකට බොහෝ සේවකයන් සිටිය හැකි ය.</p><p>C - එක් දෙපාර්තමේන්තුවකට සිටින්නේ එක් කළමනාකරුවෙකි. සෑම කළමනාකරුවෙකුම බොහෝ දෙපාර්තමේන්තු කළමනාකරණය කරයි.</p><p>D - සැපයුම්කරුවකුට එක් අයිතමයක් පමණක් සැපයිය හැකි ය. එක් අයිතමයක් සැපයෙන්නේ එක් සැපයුම්කරුවකුගෙන් පමණි.</p>",
                options: ["A සහ B පමණි", "A සහ C පමණි", "A සහ D පමණි", "B සහ C පමණි", "C සහ D පමණි"],
                correctAnswer: 1,
                relatedNoteId: "note-8-2-0"
            },
            {
                id: "pq-2017-p1-34",
                questionNumber: 34,
                content: "<p>ඉහත සම්බන්ධතා මගින් නිරූපණය කෙරෙන භූතාර්ථ අතර සම්බන්ධය නිවැරදි ව නිරූපණය කෙරෙන්නේ පහත කුමන භූතාර්ථ සම්බන්ධතා (ER) රූප සටහනින් ද?</p>[DIAGRAM:2017-p1-q34]<p>devnote: Five ER diagrams are shown, labeled (1) to (5). Each shows 'book' and 'author' entities connected by a 'write' relationship. The diagrams differ by their cardinality ratios: (1) 1 to m, (2) 1 to 1, (3) m to 1, (4) m to n, (5) m to m.</p>",
                options: ["(1)", "(2)", "(3)", "(4)", "(5)"],
                correctAnswer: 4,
                relatedNoteId: "note-8-2-0"
            },
            {
                id: "pq-2017-p1-35",
                questionNumber: 35,
                content: "<p>ඉහත සම්බන්ධ, සම්බන්ධක දත්ත සමුදායක වගු බවට පත් කළේ යැයි උපකල්පනය කරන්න. පහත SQL විමසුම (query) එම දත්ත සමුදාය තුළ ක්‍රියාත්මක කරන ලදී:</p><pre>SELECT * FROM bookAuthor</pre><p>ඉහත SQL විමසුමෙහි ප්‍රතිදානය සම්බන්ධයෙන් පහත වගන්ති අතුරෙන් කවරක් නිවැරදි වේ ද?</p>",
                options: [
                    "එය ශුන්‍ය වගුවක් (empty table) විය නොහැකි ය.",
                    "එහි title තීරය (column) ඇතුළත් වේ.",
                    "එහි name තීරය ඇතුළත් වේ.",
                    "ප්‍රතිදානය ලබා දීම සඳහා book, author සහ bookAuthor යන වගු සියල්ල භාවිත කරයි.",
                    "bookAuthor වගුවෙහි ඇති සියලු ම උපලැකි (records) ප්‍රතිදානයෙහි ඇතුළත් වේ."
                ],
                correctAnswer: 5,
                relatedNoteId: "note-8-6-0"
            },
            {
                id: "pq-2017-p1-36",
                questionNumber: 36,
                content: "<p>දත්ත ආර්ජවය (data integrity) පවත්වා ගනිමින් bookAuthor වගුව නිර්මාණය කිරීමට යොදා ගත් දත්ත නිර්වචන වගන්තිය (DDL) සම්බන්ධයෙන් පහත දැක්වෙන ප්‍රකාශ සලකන්න:<br>A - එහි ප්‍රාථමික යතුරු සංරෝධකයක් (constraint) ඇත.<br>B - එහි ආගන්තුක යතුරු සංරෝධකයක් ඇත.<br>C - එහි වසම් සංරෝධකයක් ඇත.</p><p>ඉහත වගන්ති අතුරෙන් නිවැරදි වන්නේ,</p>",
                options: ["A පමණි", "A සහ B පමණි", "A සහ C පමණි", "B සහ C පමණි", "A, B සහ C යන සියල්ල ම ය."],
                correctAnswer: 5,
                relatedNoteId: "note-8-6-0"
            },
            {
                id: "pq-2017-p1-37",
                questionNumber: 37,
                content: "<p>පහත සඳහන් කුමන ඉන්ද්‍රිය මිනිස් ශරීරයේ සංවෘත පද්ධතියක කොටසක් වේ ද?</p>",
                options: ["ඇස", "කන", "හෘදය", "වකුගඩුව", "පෙනහැල්ල"],
                correctAnswer: 3,
                relatedNoteId: "note-7-1-0"
            },
            {
                id: "pq-2017-p1-38",
                questionNumber: 38,
                content: "<p>පහත දැක්වෙන කුමන වගන්තිය නිවැරදි වේ ද?</p>",
                options: [
                    "යෙදුම් මෘදුකාංග ප්‍රධාන මතකයට යෙදුම් ප්‍රවේශනය (load) කරයි.",
                    "ROM හි ගබඩා කර ඇති ක්‍රමලේඛ, පද්ධති මෘදුකාංග ලෙස හැඳින්වේ.",
                    "පර්යන්ත උපාංග අතර දත්ත සන්නිවේදනය සඳහා පද්ධති මෘදුකාංග සහය දක්වයි.",
                    "උපයෝගිතා මෘදුකාංග සාමාන්‍යයෙන් ROM හි ගබඩා කරයි.",
                    "රෙදි සෝදන යන්ත්‍ර තුළ උපයෝගිතා මෘදුකාංග සංස්ථාපනය කර ඇත."
                ],
                correctAnswer: 3,
                relatedNoteId: "note-1-3-2"
            },
            {
                id: "pq-2017-p1-39",
                questionNumber: 39,
                content: "<p>පහත දැක්වෙන දත්ත ආදාන උපාංග සලකන්න:<br>A - තිරය මත දැක්වෙන යතුරු පුවරුව (virtual keyboard)<br>B - තීරු කේත කියවනය (Bar code reader)<br>C - චුම්බක කාඩ් පත් කියවනය (Magnetic card reader)</p><p>වඩාත් කාර්යක්ෂමව දත්ත ආදාන කිරීම සඳහා ඉහත කවර උපාංග භාවිත කළ හැකි ද?</p>",
                options: ["A පමණි", "B පමණි", "C පමණි", "A සහ B පමණි", "B සහ C පමණි"],
                correctAnswer: 5,
                relatedNoteId: "note-1-3-1"
            },
            {
                id: "pq-2017-p1-40",
                questionNumber: 40,
                content: "<p>HTML හි භාවිත කරන CSS හා සම්බන්ධ පහත දැක්වෙන වගන්ති සලකා බලන්න:<br>A - ගොනු කිහිපයක ඇති HTML මූලාංග විදැහු කිරීම එක් රටා පත්‍රයකින් (style sheet) නිර්වචනය කළ හැකි ය.<br>B - රටා පත්‍ර ආයාත (import) කිරීම සඳහා කිසිදු අතිරේක බාගත කිරීමක් අවශ්‍ය නොවේ.<br>C - HTML ලේඛනයේ <link> උසුලනය අනිවාර්යයෙන් ම ඇතුළත් කළ යුතු ය.<br>D - අදාළ මූලාංගය තුළ රටා (style) උපලක්ෂණය අවශ්‍ය වේ.</p><p>බාහිර රටා පත්‍ර භාවිතය සම්බන්ධයෙන් ඉහත කුමන වගන්ති නිවැරදි වේ ද?</p>",
                options: ["A සහ B පමණි", "A සහ C පමණි", "B සහ D පමණි", "A, C සහ D පමණි", "B, C සහ D පමණි"],
                correctAnswer: 2,
                relatedNoteId: "note-10-5-0"
            },
            {
                id: "pq-2017-p1-41",
                questionNumber: 41,
                content: "<p>පහත සඳහන් කුමන වගන්තිය නිවැරදි වේ ද?</p>",
                options: [
                    "‘String’, යනු mutable දත්ත ප්‍රරූපයකි.",
                    "‘List’ යනු immutable දත්ත ප්‍රරූපයකි.",
                    "[1, 2, 3] යනු tuple යකි.",
                    "[1, 2, 3] [1] ප්‍රකාශනය ක්‍රියාත්මක කළ විට [2] ලබා දේ.",
                    "{'a':1, 1:(1, 2)} ප්‍රරූපය Dictionary යකි."
                ],
                correctAnswer: 5,
                relatedNoteId: "note-9-10-0"
            },
            {
                id: "pq-2017-p1-42",
                questionNumber: 42,
                content: "<p>පහත දැක්වෙන අගයන් සලකන්න:<br>A - 2.3e2<br>B - TRUE<br>C - \"This isn't a string\"<br>D - \"</p><p>ඉහත දැක්වෙන අගයන් අතුරෙන් කුමක් Python හි වලංගු වේ ද?</p>",
                options: ["A සහ B පමණි", "A සහ C පමණි", "B සහ C පමණි", "A, B සහ C පමණි", "A, C සහ D පමණි"],
                correctAnswer: 2,
                relatedNoteId: "note-9-7-0"
            },
            {
                id: "pq-2017-p1-43",
                questionNumber: 43,
                content: "<p>පහත දැක්වෙන Python වගන්තිය සලකා බලන්න:</p><pre>temp = [1, 2, 3, 4, 5, 6] [2::2]</pre><p>ඉහත ප්‍රකාශය ක්‍රියාත්මක කිරීමෙන් පසු temp විචල්‍යයේ අගය පහත දැක්වෙන ඒවායින් කුමක් ද?</p>",
                options: ["2, 4, 6", "3, 5", "[2, 3]", "[3, 5]", "[2, 4, 6]"],
                correctAnswer: 4,
                relatedNoteId: "note-9-10-0"
            },
            {
                id: "pq-2017-p1-44",
                questionNumber: 44,
                content: "<p>පහත දැක්වෙන වගන්ති සලකන්න:<br>A - a=b=2+3<br>B - a, b = 2, 3<br>C - a, b = (2, 3)<br>D - a = (2, 3)</p><p>ඉහත ඒවායින් කුමක් Python හි වලංගු පැවරුම් ප්‍රකාශ වන්නේ ද?</p>",
                options: ["A සහ B පමණි", "B සහ C පමණි", "C සහ D පමණි", "A, B සහ C පමණි", "A, B, C සහ D යන සියල්ල ම ය."],
                correctAnswer: 5,
                relatedNoteId: "note-9-7-0"
            },
            {
                id: "pq-2017-p1-45",
                questionNumber: 45,
                content: "<p>පහත දැක්වෙන ප්‍රකාශ සලකන්න:<br>A - True or False and True<br>B - 3 > 2 and False<br>C - {2, 3} == {3, 2}<br>D - (2, 3) == (3, 2)</p><p>ඉහත කවර ප්‍රකාශ බූලියානු True අගය ප්‍රතිඵලය ලෙස ලබා දේ ද?</p>",
                options: ["A සහ B පමණි", "A සහ C පමණි", "B සහ C පමණි", "B සහ D පමණි", "C සහ D පමණි"],
                correctAnswer: 2,
                relatedNoteId: "note-9-7-0"
            },
            {
                id: "pq-2017-p1-46",
                questionNumber: 46,
                content: "<p>“in.csv” සහ “out.csv” යනුවෙන් නම් කරන ලද ගොනුවල අන්තර්ගතයන් “Fig.1” හා “Fig.2” රූප සටහන් මගින් පිළිවෙළින් දැක්වේ.</p>[DIAGRAM:2017-p1-q46]<p>devnote: Two figures are shown. Fig 1 shows the content of 'in.csv' with three lines: 'Ruvan,20,50', 'Ramesh,0,5', 'Raj,10,10'. Fig 2 shows the content of 'out.csv' with three lines: 'Ruvan 20 50 70', 'Ramesh 0 5 5', 'Raj 10 10 20'.</p><p>පහත දැක්වෙන කුමන Python ක්‍රමලේඛය “in.csv” තුළ ඇති දත්ත “out.csv” හි අන්තර්ගතය බවට පරිණාමනය කිරීමට භාවිත කළ හැකි ද?</p>",
                options: [
                    "[CODE:python]f1=open(\"in.csv\",\"r\")\nf2=open(\"out.csv\",\"r\")\nfor line in f1:\n  items=line.strip().split(\",\")\n  tot=int(items[1])+int(items[2])\n  print(items[0], items [1], items [2], tot, file = f2)\nf1.close()\nf2.close()[/CODE]",
                    "[CODE:python]f1=open(\"in.csv\",\"r\")\nf2=open(\"out.csv\",\"w\")\nfor line in f1:\n  items=line.strip()\n  tot=int(items[1])+int(items[2])\n  print(items[0], items [1], items [2], tot)\nf1.close()\nf2.close()[/CODE]",
                    "[CODE:python]f1=open(\"in.csv\", \"r\")\nf2=open(\"out.csv\",\"w\")\nfor line in f1:\n  items=line.strip().split(\",\")\n  tot=int(items[1])+int(items[2])\n  print(items[0],items[1],items[2],tot, file = f2)\nf1.close()\nf2.close()[/CODE]",
                    "[CODE:python]f1=open(\"in.csv\",\"r\")\nf2=open(\"out.csv\",\"w\")\nfor line in f1:\n  items=line.strip().split(\",\")\n  tot=items[1]+items[2]\n  print(items[0],items[1],items [2], tot, file = f2)\nf1.close()\nf2.close()[/CODE]",
                    "[CODE:python]f1=open(\"in.csv\",\"r\")\nf2=open(\"out.csv\",\"w\")\nfor line in f1:\n  items=line.strip().split(\",\")\n  tot=int(items[1])+int(items([2])\n  print(items[0],items[1],items[2],tot, file = f1)\nf1.close()\nf2.close()[/CODE]"
                ],
                correctAnswer: 3,
                relatedNoteId: "note-9-11-0"
            },
            {
                id: "pq-2017-p1-47",
                questionNumber: 47,
                content: "<p>තාර්කික පරිපථ ගොඩනැගීමේ දී NOT, AND හා OR ද්වාර වෙනුවට NAND හා NOR ද්වාර භාවිත කිරීම පිළිබඳ පහත දැක්වෙන වගන්ති සලකන්න:<br>A - ඒවා තාර්කික පරිපථ නිර්මාණකරණය සරල කරයි.<br>B - ඒවා අඩු විදුලි පරිභෝජනයක් කරන තාර්කික පරිපථ ගොඩනැගීම සඳහා උපකාර කරයි.<br>C - ඒවා තාර්කික පරිපථ ගොඩනැංවීම වඩාත් ලාභදායි කරයි.</p><p>ඉහත දැක්වෙන වගන්ති අතුරෙන් නිවැරදි වන්නේ,</p>",
                options: ["A පමණි", "B පමණි", "A සහ B පමණි", "A සහ C පමණි", "B සහ C පමණි"],
                correctAnswer: 4,
                relatedNoteId: "note-4-1-0"
            },
            {
                id: "pq-2017-p1-48",
                questionNumber: 48,
                content: "<p>ඕනෑම නිඛිල ලැයිස්තුවක (list) ඇති සියලු ම අවයවවල එකතුව ලබා දෙන්නේ පහත සඳහන් කුමන ශ්‍රිතය ද?</p>",
                options: [
                    "[CODE:python]def f(x):\n  s=x[0]\n  for i in range (0,len(x)):\n    s=s+i\n  return s[/CODE]",
                    "[CODE:python]def f(x):\n  s=x[0]\n  for i in range (1,len(x)):\n    s=s+i\n  return s[/CODE]",
                    "[CODE:python]def f(x):\n  s=0\n  for i in x:\n    s=s+1\n  return s[/CODE]",
                    "[CODE:python]def f(x):\n  s=0\n  for i in x:\n    s=s+i\n  return s[/CODE]",
                    "[CODE:python]def f(x):\n  s=0\n  i=0\n  while i < len(x):\n    s=s+x[i]\n  return s[/CODE]"
                ],
                correctAnswer: 4,
                relatedNoteId: "note-9-9-0"
            },
            {
                id: "pq-2017-p1-49",
                questionNumber: 49,
                content: "<p>පහත සඳහන් පද්ධති ක්‍රියාත්මක කිරීමේ ක්‍රම සලකන්න:<br>A - රේඛීය (Direct)<br>B - නියාමක (Pilot)<br>C - සමාන්තර (Parallel)</p><p>ඉහත සඳහන් කුමන ක්‍රමය/ක්‍රම සාමාන්‍යයෙන් ගෘහස්ථ ආරක්ෂක පද්ධතියක් ක්‍රියාත්මක කිරීමට භාවිත කරනු ලබන්නේ ද?</p>",
                options: ["A පමණි", "B පමණි", "C පමණි", "A සහ B පමණි", "A සහ C පමණි"],
                correctAnswer: 1,
                relatedNoteId: "note-7-9-0"
            },
            {
                id: "pq-2017-p1-50",
                questionNumber: 50,
                content: "<p>පහත දැක්වෙන වගන්ති සලකන්න:<br>A - අදාළ පාරිසරික වෙනස්කම්වලට ප්‍රතිචාර දැක්විය හැකි ය.<br>B - හොඳින් අර්ථ දක්වා (well-defined) ඇති පරිශීලක උපදෙස් අනුව සෑම විට ම ක්‍රියා කරයි.<br>C - පූර්ව අර්ථ දැක්වූ කාර්ය සමූහයක් පමණක් ඉටු කරයි.<br>D - අසම්පූර්ණ තොරතුරු මත තීරණ ගැනීමට හැකියාවක් ඇත.</p><p>ඉහත සඳහන් ඒවායින් මෘදුකාංග ඒජන්ත පද්ධතියක ගුණාංග ලෙස සැලකිය හැක්කේ මොනවා ද?</p>",
                options: ["A සහ B පමණි", "A සහ C පමණි", "A සහ D පමණි", "B සහ C පමණි", "C සහ D පමණි"],
                correctAnswer: 3,
                relatedNoteId: "note-13-2-0"
            }
        ]
    }
}