import type { Paper } from "../../types";

export const paper2023_p1: Paper = {
    id: "past-paper-2023-p1",
    title: "A/L ICT Paper I - 2023",
    examName: {
      sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
      tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
      english: "General Certificate of Education (Adv. Level) Examination",
    },
    year: 2023,
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
      instructions: "* මෙම ප්‍රශ්න පත්‍රයේ සියලුම ප්‍රශ්නවලට පිළිතුරු සපයන්න.\\n* පිළිතුරු පත්‍රයෙහි නියමිත ස්ථානයේ ඔබගේ විභාග අංකය ලියන්න.\\n* පිළිතුරු පත්‍රයේ පිටුපස ඇති උපදෙස් ද කියවා බලන්න. එම උපදෙස් ප්‍රවේශමෙන් පිළිපදින්න.\\n* 1 සිට 50 දක්වා එක් එක් ප්‍රශ්නය සඳහා, (1), (2), (3), (4), (5) යන විකල්ප අතුරින් නිවැරදි හෝ වඩාත් සුදුසු පිළිතුර තෝරා පිළිතුරු පත්‍රයේ පිටුපස ඇති උපදෙස් අනුව, ඔබේ පිළිතුර (x) ලකුණකින් සලකුණු කරන්න.\\n* ගණක යන්ත්‍ර භාවිතය තහනම්.",
      questions: [
        {
          id: "pq-2023-p1-1",
          questionNumber: 1,
          content: "<p>පහත කවර ප්‍රකාශ නිවැරදි වේ ද?</p><p>A – වදන් සැකසුම් සහ පැතුරුම්පත් මෘදුකාංග, උපයෝගිතා (utility) මෘදුකාංග ප්‍රවර්ගයට අයත් වේ.</p><p>B – සම්පාදකයක් (compiler), ක්‍රමලේඛ පරිවර්තකයකට උදාහරණයකි.</p><p>C – හිමිකම් සහිත (proprietary) මෘදුකාංගයක් එහි බලපත්‍රය රහිතව භාවිත කිරීම නීති විරෝධී වේ.</p>",
          options: ["A පමණි", "B පමණි", "C පමණි", "A සහ B පමණි", "B සහ C පමණි"],
          correctAnswer: 5,
          relatedNoteId: "note-1-3-3",
        },
        {
          id: "pq-2023-p1-2",
          questionNumber: 2,
          content: "<p>ශිෂ්‍ය තොරතුරු පද්ධතියකට සිසුන්ගේ පෞද්ගලික තොරතුරු සහ ඔවුන්ගේ විභාග ලකුණු ආදානය කෙරේ. විෂයක ලකුණු පරාසය 0 සිට 100 තෙක් වේ. සිසුවකු අනිවාර්ය සහ වෛකල්පිත (තෝරාගත හැකි) විෂයන් එකතුවක් හදාරා අදාළ විභාගයන්ට පෙනී සිටිය යුතු ය. පහත කවරක් ඉහත පද්ධතියට සුදුසු දත්ත වලංගු කිරීම් (validations) වේද?</p><p>A – සිසුවකු පෙනී සිටි/නොසිටි සෑම විෂයකම ලකුණු සඳහා තථ්‍යතා පරීක්ෂාවක් (Presence Check)</p><p>B – ආදානය කළ විභාග ලකුණක් 0 සිට 100 තෙක් දැයි සෙවීමට පරාස පරීක්ෂාවක් (Range Check)</p><p>C – සිසුවාගේ දුරකථන අංකය සඳහා කළ ආදානයේ ඉලක්කම් පමණක් ඇති බව සහතික කිරීමට දත්ත වර්ගය පරීක්ෂාවක් (Data Type Check)</p>",
          options: ["A පමණි", "B පමණි", "A සහ B පමණි", "A සහ C පමණි", "B සහ C පමණි"],
          correctAnswer: 5,
          relatedNoteId: "note-1-2-4",
        },
        {
          id: "pq-2023-p1-3",
          questionNumber: 3,
          content: "<p>පාසල් පුස්තකාලයක දැනට පවතින ග්‍රන්ථ කළමනාකරණ පද්ධතිය පරිගණකයක්, මොනිටරයක්, යතුරු පුවරුවක් සහ මූසිකයක් යොදා ගෙන භාවිත වේ. පොත් බැහැරදීමට/ආපසු භාර ගැනීමට දැනට ගතවන කාලය අවම කිරීමට පාසල් කළමනාකාරීත්වයට අවශ්‍ය වේ. මෙම අවශ්‍යතාව සඳහා පහත කවරක් වඩාත් උචිත වේද?</p>",
          options: ["සංඛ්‍යාංකකයක් (digitizer)", "බාහිර (external) දෘඪ තැටියක් භාවිත කිරීම", "ස්පර්ශක (touch) තිරයක් භාවිත කිරීම", "චුම්භක තීරු (magnetic stripe) කියවනයක් භාවිත කිරීම", "තීරු කේත (bar code) තාක්ෂණය භාවිත කිරීම"],
          correctAnswer: 5,
          relatedNoteId: "note-1-3-1"
        },
            {
            id: "pq-2023-p1-24",
            questionNumber: 24,
            content: "<p>යෝජිත තොරතුරු පද්ධතියක් සඳහා, සෘජු ක්‍රියාවට නැංවීම (Direct implementation) වෙනුවට සමාන්තර ක්‍රියාවට නැංවීම (Parallel implementation) තෝරා ගැනීමට හේතුවක් විය හැක්කේ පහත කවරක් ද?</p>",
            options: ["සෘජු ක්‍රියාවට නැංවීමට වඩා සමාන්තර ක්‍රියාවට නැංවීම ලාභදායී වීම.", "සමාන්තර ක්‍රියාවට නැංවීමේදී පද්ධති දෙකක් එකවර ක්‍රියාත්මක කිරීමේ පිරිවැය වැඩි වීම.", "පැරණි සහ නව පද්ධති දෙකෙහි ප්‍රතිදාන සංසන්දනය කිරීමෙන් නව පද්ධතියේ දෝෂ හඳුනාගත හැකි වීම.", "සමාන්තර ක්‍රියාවට නැංවීම සෘජු ක්‍රියාවට නැංවීමට වඩා වේගවත් වීම.", "සමාන්තර ක්‍රියාවට නැංවීමේදී පරිශීලකයින්ට එකවර පද්ධති දෙකක් සමඟ වැඩ කිරීමට සිදු වීම."],
            correctAnswer: 3,
            relatedNoteId: "note-7-9-0"
        },
        {
            id: "pq-2023-p1-25",
            questionNumber: 25,
            content: "<p>පහත දැක්වෙන දත්ත ගැලීම් සටහන (DFD) සලකන්න.</p>[DIAGRAM:2023-p1-q25]<p>ඉහත DFD හි ඇති දෝෂය කුමක් ද?</p>",
            options: ["D1 දත්ත ගබඩාව, ක්‍රියාවලියකට දත්ත ලබා දිය නොහැක.", "P2 ක්‍රියාවලියෙන් දත්ත ප්‍රවාහයක් ආරම්භ විය නොහැක.", "P1 ක්‍රියාවලියට ආදානයක් නොමැත.", "E1 භූතාර්ථයට ප්‍රතිදානයක් නොමැත.", "P1 ක්‍රියාවලියෙන් P2 ක්‍රියාවලියට දත්ත ගැලිය නොහැක."],
            correctAnswer: 3,
            relatedNoteId: "note-7-6-0"
        },
        {
            id: "pq-2023-p1-26",
            questionNumber: 26,
            content: "<p>පද්ධති විශ්ලේෂණයකදී කරුණු සෙවීමේ තාක්ෂණික ක්‍රමයක් (fact finding technique) ලෙස ප්‍රශ්නාවලියක් (questionnaire) භාවිත කිරීමේ එක් වාසියක් වන්නේ පහත කවරක් ද?</p>",
            options: ["එය නම් රහිතව සම්පූර්ණ කළ හැකි නිසා ප්‍රතිචාර දක්වන්නන් වඩාත් අවංක පිළිතුරු ලබා දීමට ඉඩ ඇත.", "ප්‍රශ්නාවලියක් නිර්මාණය කිරීම පහසු සහ වේගවත් වේ.", "ප්‍රශ්නාවලියක් මගින් ලබාගත් තොරතුරු මත පදනම්ව, පද්ධතිය පිළිබඳව වඩාත් ගැඹුරු අවබෝධයක් ලබාගත හැක.", "ප්‍රශ්නාවලියකින් අඩු ප්‍රතිචාර අනුපාතයක් ලැබේ.", "පද්ධති විශ්ලේෂකයාට (system analyst) සහභාගිවන්නන්ගේ ශරීර භාෂාව (body language) නිරීක්ෂණය කළ හැක."],
            correctAnswer: 1,
            relatedNoteId: "note-7-6-0"
        },
        {
            id: "pq-2023-p1-27",
            questionNumber: 27,
            content: "<p>යෝජිත තොරතුරු පද්ධතියක් සඳහා, ශක්‍යතා අධ්‍යයනයකදී (feasibility study) සලකා බලනු ලබන මෙහෙයුම් ශක්‍යතාවට (Operational feasibility) පහත කවරක් අයත් වේ ද?</p>",
            options: ["පද්ධතිය සඳහා වන පිරිවැය සහ ප්‍රතිලාභ විශ්ලේෂණය.", "සේවකයන්ට නව පද්ධතියට හැඩගැසීමට ඇති හැකියාව සහ කැමැත්ත.", "පද්ධතිය නිර්මාණය කිරීමට අවශ්‍ය දෘඪාංග සහ මෘදුකාංග ලබා ගැනීමේ හැකියාව.", "පද්ධතිය, පවතින රාජ්‍ය නීති සහ රෙගුලාසිවලට අනුකූල වීම.", "පද්ධතිය නියමිත කාල රාමුව තුළ නිම කිරීමට ඇති හැකියාව."],
            correctAnswer: 2,
            relatedNoteId: "note-7-5-0"
        },
        {
            id: "pq-2023-p1-28",
            questionNumber: 28,
            content: "<p>පහත දැක්වෙන්නේ, මගියකු සහ දුම්රිය දෙපාර්තමේන්තුවේ ටිකට්පත් වෙන්කිරීමේ පද්ධතිය අතර ඇති අන්තර්ක්‍රියාවන් පෙන්වන සන්දර්භ සටහනකි (context diagram).</p>[DIAGRAM:2023-p1-q28]<p>ඉහත P, Q සහ R සඳහා වඩාත් සුදුසු ආදේශක පිළිවෙළින් දැක්වෙන්නේ පහත කවරක ද?</p>",
            options: ["P - ගමනාන්තය සහ වේලාව, Q - ටිකට්පත, R - ගෙවීම", "P - ගමනාන්තය සහ වේලාව, Q - ගෙවීම, R - ටිකට්පත", "P - ටිකට්පත, Q - ගමනාන්තය සහ වේලාව, R - ගෙවීම", "P - ගෙවීම, Q - ටිකට්පත, R - ගමනාන්තය සහ වේලාව", "P - ගෙවීම, Q - ගමනාන්තය සහ වේලාව, R - ටිකට්පත"],
            correctAnswer: 1,
            relatedNoteId: "note-7-6-0"
        },
        {
            id: "pq-2023-p1-29",
            questionNumber: 29,
            content: "<p>පහත දැක්වෙන භූතාර්ථ සම්බන්ධතා (ER) රූපසටහන සලකන්න. Student, Module සහ Programme යනු භූතාර්ථ වන අතර අනෙක් ඒවා උපලක්ෂණ වේ.</p>[DIAGRAM:2023-p1-q29]<p>ඉහත රූපසටහන සම්බන්ධයෙන් පහත කවර වගන්තියක් අසත්‍ය වේ ද?</p>",
            options: ["එක් ශිෂ්‍යයෙකුට (student) ඇත්තේ එක් ලියාපදිංචි අංකයක් (S_regNo) පමණි.", "එක් වැඩසටහනක (programme) බොහෝ මොඩියුල (modules) ඇත.", "එක් මොඩියුලයක් බොහෝ වැඩසටහන්වලට අයත් විය හැක.", "එක් මොඩියුලයක් බොහෝ සිසුන් විසින් හදාරනු ලැබේ.", "එක් ශිෂ්‍යයෙකුට බොහෝ දුරකථන අංක තිබිය හැක."],
            correctAnswer: 3,
            relatedNoteId: "note-8-2-0"
        },
        {
            id: "pq-2023-p1-30",
            questionNumber: 30,
            content: "<p>පහත සඳහන් කුමන අවස්ථාවකදී සමාන්තර (parallel) පද්ධති ස්ථාපනයක් වඩාත් සුදුසු වේ ද?</p>",
            options: ["පැරණි පද්ධතිය අලුත් පද්ධතියක් මගින් ඉක්මනින් ප්‍රතිස්ථාපනය කළ යුතු විට.", "පිරිවැය ප්‍රධාන සාධකයක් නොවන අතර ඉහළ විශ්වාසනීයත්වයක් අවශ්‍ය වන විට.", "පරිශීලකයන් නව පද්ධතියට ක්‍රමයෙන් හුරු කරවීමට අවශ්‍ය විට.", "පද්ධතියේ කොටස් ස්වාධීනව ක්‍රියාත්මක කළ හැකි විට.", "නව පද්ධතිය තෝරාගත් ස්ථානයක මුලින්ම පරීක්ෂා කිරීමට අවශ්‍ය විට."],
            correctAnswer: 2,
            relatedNoteId: "note-7-9-0"
        },
        {
            id: "pq-2023-p1-31",
            questionNumber: 31,
            content: "<p>ප්‍රාථමික යතුරක් (primary key) සම්බන්ධයෙන් පහත කවරක් නිවැරදි වේ ද?</p>",
            options: ["එයට අභිශුන්‍ය (null) අගයන් තිබිය හැකි ය.", "එය වගුවක එක් එක් පේළිය අනන්‍යව හඳුනා ගැනීම සඳහා භාවිත වේ.", "එය වෙනත් වගුවක ප්‍රාථමික යතුරකට සම්බන්ධයක් දක්වයි.", "වගුවකට ප්‍රාථමික යතුරු එකකට වඩා තිබිය හැකි ය.", "ප්‍රාථමික යතුර සහ ආගන්තුක යතුර (foreign key) එකම දේ වේ."],
            correctAnswer: 2,
            relatedNoteId: "note-8-2-0"
        },
        {
            id: "pq-2023-p1-32",
            questionNumber: 32,
            content: "<p>වගුවක (table) දත්ත අලුතින් ඇතුළත් කිරීමට (insert) සහ පවතින දත්ත යාවත්කාලීන කිරීමට (update) භාවිත වන SQL විධාන මොනවා ද?</p>",
            options: ["INSERT, ALTER", "INSERT, UPDATE", "ADD, MODIFY", "ADD, UPDATE", "CREATE, UPDATE"],
            correctAnswer: 2,
            relatedNoteId: "note-8-6-0"
        },
        {
            id: "pq-2023-p1-33",
            content: "<p>Customer නම් වූ වගුවේ ඇති તમામ දත්ත පෙන්වීමට සුදුසු SQL විමසුම කුමක් ද?</p>",
            questionNumber: 33,
            options: ["SELECT ALL FROM Customer;", "DISPLAY * FROM Customer;", "SELECT * FROM Customer;", "SHOW ALL FROM Customer;", "DISPLAY ALL FROM Customer;"],
            correctAnswer: 3,
            relatedNoteId: "note-8-6-0"
        },
        {
            id: "pq-2023-p1-34",
            content: "<p>භූතාර්ථ සම්බන්ධතා (ER) රූපසටහනක් සහ එහි සංරචක සලකන්න.</p>[DIAGRAM:2023-p1-q34]<p>P, Q, R සහ S මගින් පිළිවෙළින් දැක්වෙන්නේ පහත කවරක් ද?</p>",
            questionNumber: 34,
            options: ["භූතාර්ථය, ප්‍රාථමික යතුර, බහු-අගය උපලක්ෂණය, ව්‍යුත්පන්න උපලක්ෂණය", "භූතාර්ථය, බහු-අගය උපලක්ෂණය, ව්‍යුත්පන්න උපලක්ෂණය, ප්‍රාථමික යතුර", "ව්‍යුත්පන්න උපලක්ෂණය, බහු-අගය උපලක්ෂණය, භූතාර්ථය, ප්‍රාථමික යතුර", "ප්‍රාථමික යතුර, ව්‍යුත්පන්න උපලක්ෂණය, බහු-අගය උපලක්ෂණය, භූතාර්ථය", "ප්‍රාථමික යතුර, භූතාර්ථය, ව්‍යුත්පන්න උපලක්ෂණය, බහු-අගය උපලක්ෂණය"],
            correctAnswer: 1,
            relatedNoteId: "note-8-2-0"
        },
        {
            id: "pq-2023-p1-35",
            content: "<p>පහත දැක්වෙන භූතාර්ථ සම්බන්ධතා (ER) රූපසටහන, ශිෂ්‍යයකුට එක වරකට එක් පොතක් පමණක් ණයට ගත හැකි පුස්තකාල පද්ධතියක් නිරූපණය කරයි. ණයට ගත් දිනය සහ ආපසු දිය යුතු දිනය ද පද්ධතිය සටහන් කර ගනී.<br/>[DIAGRAM:2023-p1-q35]<br/>ඉහත ER රූපසටහන සම්බන්ධක දත්ත සමුදායකට අනුරූපණය (map) කිරීමේදී සෑදෙන නිවැරදි වගු සහ ඒවායේ ප්‍රාථමික යතුරු පහත කවරක දැක්වේ ද?</p>",
            questionNumber: 35,
            options: ["Student(RegNo, Name), Book(BookId, Title)", "Student(RegNo, Name), Book(BookId, Title), Student_Book(RegNo, BookId, BorrowDate, ReturnDate)", "Student(RegNo, Name, BookId, BorrowDate, ReturnDate), Book(BookId, Title)", "Student(RegNo, Name), Book(BookId, Title, RegNo, BorrowDate, ReturnDate)", "Student(RegNo, Name, BorrowDate, ReturnDate), Book(BookId, Title)"],
            correctAnswer: 4,
            relatedNoteId: "note-8-4-0"
        },
        {
            id: "pq-2023-p1-39",
            questionNumber: 39,
            content: "<p>පහත දැක්වෙන පයිතන් කේතයේ ප්‍රතිදානය කුමක් ද?</p><pre><code>x = ['P', 'Q']\\ny = x\\ny.append('R')\\nprint(str(x[-1]) + str(y[1]))</code></pre>",
            options: ["PR", "QQ", "QR", "RQ", "RR"],
            correctAnswer: 5,
            relatedNoteId: "note-9-7-0",
        },
        {
            id: "pq-2023-p1-40",
            questionNumber: 40,
            content: "<p>පහත දැක්වෙන පයිතන් කේතයේ ප්‍රතිදානය කුමක් ද?</p><pre><code>def func(a, b):\\n  a = a + 2\\n  b = b * 2\\n  return a, b\\nx = 1\\ny = 2\\nx, y = func(y, x)\\nprint(x, y)</code></pre>",
            options: ["1 2", "3 4", "4 2", "4 3", "2 4"],
            correctAnswer: 3,
            relatedNoteId: "note-9-9-0",
        },
        {
            id: "pq-2023-p1-41",
            questionNumber: 41,
            content: "<p>පහත දැක්වෙන පයිතන් කේත ඛණ්ඩය සලකන්න.<br/><code>for i in range(1, 10, 3): print(i, end = ' ')</code><br/>ඉහත කේතයේ ප්‍රතිදානය කුමක් ද?</p>",
            options: ["1 2 3", "1 4 7", "1 4 7 10", "1 3 5 7 9", "3 6 9"],
            correctAnswer: 2,
            relatedNoteId: "note-9-8-6",
        },
        {
            id: "pq-2023-p1-42",
            content: `[CODE:python]def myfunc(text):
  x = text.split()
  return x[0], x[-1]

mytext = "An apple a day keeps the doctor away"
y, z = myfunc(mytext)
print(y, "-", z)[/CODE]`,
            questionNumber: 42,
            options: ["An - away", "An - day", "away - An", "apple - doctor", "day - An"],
            correctAnswer: 1,
            relatedNoteId: "note-9-10-0",
        },
        {
            id: "pq-2023-p1-43",
            content: `[CODE:python]list1 = [5, 1, 8, 9, 2]
i = 0
while True:
  if list1[i] % 2 == 0:
    break
  print(list1[i], end = ' ')
  i += 1[/CODE]`,
            questionNumber: 43,
            options: ["5 1", "5 1 8", "5 1 9", "5 1 8 9 2", "No output"],
            correctAnswer: 1,
            relatedNoteId: "note-9-8-7",
        },
        {
            id: "pq-2023-p1-44",
            content: `[CODE:python]data = {1:"A", 2:"B", 3:"C"}
value = data.pop(2)
print(value, len(data))[/CODE]`,
            questionNumber: 44,
            options: ["A 2", "A 3", "B 2", "B 3", "C 2"],
            correctAnswer: 3,
            relatedNoteId: "note-9-10-0",
        },
        {
            id: "pq-2023-p1-45",
            questionNumber: 45,
            content: `[CODE:python]count = 1
for i in range(1, 4):
  for j in range(1, 4):
    if i == j:
      continue
    count += 1
print(count)[/CODE]`,
            options: ["1", "4", "6", "7", "10"],
            correctAnswer: 4,
            relatedNoteId: "note-9-8-7",
        },
        {
            id: "pq-2023-p1-46",
            questionNumber: 46,
            content: `<p>පහත දැක්වෙන CSS කේත ඛණ්ඩය සලකන්න.<br/><code>h1 {color: red;}</code><br/>ඉහත කේතයේ h1, color සහ red පිළිවෙළින් හඳුන්වන්නේ කෙසේ ද?</p>`,
            options: ["වරකය, අගය, ගුණය (selector, value, property)", "වරකය, ගුණය, අගය", "ගුණය, වරකය, අගය", "ගුණය, අගය, වරකය", "අගය, ගුණය, වරකය"],
            correctAnswer: 2,
            relatedNoteId: "note-10-5-0",
        },
        {
            id: "pq-2023-p1-47",
            questionNumber: 47,
            content: `<p>වෙබ් පිටුවක පසුබිම් වර්ණය වෙනස් කිරීමට සුදුසු HTML කේතය කුමක් ද?</p>`,
            options: ["<body bgcolor='yellow'>", "<body color='yellow'>", "<background>yellow</background>", "<body style='background-color:yellow;'>", "<body style='color:yellow;'>"],
            correctAnswer: 4,
            relatedNoteId: "note-10-3-0",
        },
        {
            id: "pq-2023-p1-48",
            content: `<p>පහත කවරක් PHP කේත ඛණ්ඩයක් වෙබ් සේවාදායකයක (web server) ක්‍රියාත්මක කළ විට එහි ප්‍රතිදානය වේ ද?</p>[CODE:php]<?php
  $a = 5;
  $b = '5';
  if ($a==$b) {
    echo "Yes";
  } else {
    echo "No";
  }
  if ($a===$b) {
    echo "Yes";
  } else {
    echo "No";
  }
?>[/CODE]`,
            questionNumber: 48,
            options: ["YesYes", "YesNo", "NoYes", "NoNo", "දෝෂ පණිවුඩයක්"],
            correctAnswer: 2,
            relatedNoteId: "note-10-7-0",
        },
        {
            id: "pq-2023-p1-50",
            questionNumber: 50,
            content: `<p>IoT (Internet of Things) පද්ධතියක ඇති ක්ෂුද්‍ර-පාලකයක (micro-controller) කාර්යය කුමක් ද?</p>`,
            options: ["සංවේදක (sensors) මගින් දත්ත රැස් කිරීම", "රැස්කරන ලද දත්ත වලාකුළු (cloud) ආචයනය වෙත යැවීම", "විධාන ක්‍රියාත්මක කිරීම සඳහා ක්‍රියාකරුවන් (actuators) පාලනය කිරීම", "පරිශීලකයාට දත්ත ප්‍රදර්ශනය කිරීම", "සම්පූර්ණ පද්ධතිය සඳහා බලය සැපයීම"],
            correctAnswer: 3,
            relatedNoteId: "note-11-2-0"
        }
      ]
    }
  };
