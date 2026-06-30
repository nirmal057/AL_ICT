
import type { Paper } from "../../types";

export const paper2019_p1: Paper = {
    id: "past-paper-2019-p1",
    title: "A/L ICT Paper I - 2019",
    examName: {
      sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
      tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
      english: "General Certificate of Education (Adv. Level) Examination",
    },
    year: 2019,
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
          "id": "pq-2019-p1-1",
          "questionNumber": 1,
          "content": "<p>පරිගණකයක සකසනය වඩාත්ම වේගයෙන් මෙහෙයවනු ලබන්නේ එයට අවශ්‍ය දත්ත පහත කවරක ඇති විට ද?</p>",
          "options": [
            "නිහිත මතකය (cache memory)",
            "දෘඪ තැටියෙහි",
            "චුම්බක පටියෙහි",
            "ප්‍රධාන මතකයෙහි",
            "ප්‍රකාශ තැටියෙහි"
          ],
          "correctAnswer": 1,
          "relatedNoteId": "note-2-4-0"
        },
        {
          "id": "pq-2019-p1-2",
          "questionNumber": 2,
          "content": "<p>පරිගණකයකට ලබා දී ඇති විදුලි බලය විසන්ධි කළ විට පහත කුමන දෘඪාංග සංරචකවල ඇති දත්ත අහිමි වේ ද?</p><p>A - රෙජිස්තර</p><p>B - නිහිත මතක</p><p>C - ප්‍රධාන මතකය</p>",
          "options": [
            "A පමණි",
            "A සහ B පමණි",
            "A සහ C පමණි",
            "B සහ C පමණි",
            "A, B සහ C සියල්ලෙහි ම"
          ],
          "correctAnswer": 5,
          "relatedNoteId": "note-2-4-1"
        },
        {
          "id": "pq-2019-p1-3",
          "questionNumber": 3,
          "content": "<p>අතීතයේ භාවිත වූ විශාල ප්‍රමාණයේ (main frame) පරිගණකවල සිට වර්තමානයේ භාවිත වන ඉහළ පරිගණන හැකියාව ඇති ප්‍රමාණයෙන් කුඩා සුහුරු (smart) උපක්‍රම දක්වා පරිගණකය පරිණාමනය වී ඇත. පහත කුමන නිපැයුමක් (invention) පරිගණකවල භෞතික ප්‍රමාණය අඩු කිරීමට දායක වූයේ ද?</p>",
          "options": [
            "බසය",
            "අනුකලිත පරිපථ",
            "රෙජිස්තර",
            "ඝන තත්ත්ව මතක (solid state memory)",
            "රික්ත නළ"
          ],
          "correctAnswer": 2,
          "relatedNoteId": "note-2-1-2"
        },
        {
          "id": "pq-2019-p1-4",
          "questionNumber": 4,
          "content": "<p>පරිගණක පද්ධතියක ඇතැම් දෘඪාංග සංරචකවල සම්බන්ධතා පෙන්වන පහත රූපසටහන සලකා බලන්න.</p><p>ඉහත රූපසටහනෙහි මධ්‍යම සැකසුම් ඒකකය (CPU) තුළ A මගින් දක්වා ඇති දෘඪාංග කොටසෙහි දැනට ධාවනය වෙමින් පවතින ක්‍රියායනයෙහි මතක සංක‍්‍රාන්ති අනුරූපණ සහිත රෙජිස්තර එකතුවක් ඇත. දැනට පවතින ක්‍රියායනයේ අතථ්‍ය යොමුවක් (virtual address) ආදානය කළ විට එමගින් අදාළ භෞතික යොමුව (physical address) (එවැන්නක් පවතී නම්) ප්‍රතිදානය කරයි. ඉහත සටහනෙහි A මගින්</p>",
          "options": [
            "අංකගණිත හා තාර්කික ඒකකය (ALU) දැක්වේ.",
            "පාලන ඒකකය (control unit) දැක්වේ.",
            "පළමු මට්ටමේ (L1) නිහිත මතකය දැක්වේ.",
            "මතක කළමනාකරණ ඒකකය දැක්වේ.",
            "පිටු වගුව දැක්වේ."
          ],
          "correctAnswer": 4,
          "relatedNoteId": "note-5-4-0"
        },
        {
          "id": "pq-2019-p1-5",
          "questionNumber": 5,
          "content": "<p>P = 10110001 සහ Q = 01001110 වන ද්විමය සංඛ්‍යා දෙක සලකන්න. X = P OR Q සහ Y = P AND Q නම් X සහ Y හි අගයයන් වන්නේ පිළිවෙළින් පහත කවරක් ද?</p>",
          "options": [
            "01001110, 10110001",
            "10110001, 00000000",
            "10110001, 11111111",
            "11111111, 00000000",
            "11111111, 01000000"
          ],
          "correctAnswer": 5,
          "relatedNoteId": "note-3-3-0"
        },
        {
          "id": "pq-2019-p1-6",
          "questionNumber": 6,
          "content": "<p>දශමය -12 හි 2 හි අනුපූරකය කුමක් ද?</p>",
          "options": [
            "00001100",
            "10001100",
            "11110011",
            "11110100",
            "11110101"
          ],
          "correctAnswer": 4,
          "relatedNoteId": "note-3-1-3"
        },
        {
          "id": "pq-2019-p1-7",
          "questionNumber": 7,
          "content": "<p>2 හි අනුපූරකය සම්බන්ධයෙන් පහත කවරක් සත්‍ය වේ ද?</p>",
          "options": [
            "ලකුණ (sign) නිරූපණය කිරීමට අමතර බිටුවක් භාවිත කෙරේ.",
            "අංක ගණිත මෙහෙයුම් ඉටු කිරීම සඳහා වඩා වේගවත් මිල අඩු දෘඪාංග නිපදවීමට ඉවහල් වේ.",
            "එකතු කිරීම සහ අඩු කිරීම එකිනෙකට වෙනස් මෙහෙයුම් දෙකක් ලෙස සිදු කෙරේ.",
            "සාමාන්‍යයෙන් ෂඩ් දශම සංඛ්‍යා පද්ධතිය මගින් නිරූපණය කෙරේ.",
            "තාර්කික මෙහෙයුම් සිදු කිරීම සඳහා පළමු පරම්පරාවෙහි පරිගණකවල භාවිත විය."
          ],
          "correctAnswer": 2,
          "relatedNoteId": "note-3-1-3"
        },
        {
          "id": "pq-2019-p1-8",
          "content": "<p>පහත වගුව 1 හා වගුව 2 හි ඇති අක්ෂර දැක්වීම් සලකන්න.</p><p>ඉහත වගුව 1 හා වගුව 2 හි අක්ෂර ඉදිරිපත් කරනු ලැබ ඇත්තේ පහත කුමන අක්ෂර කේතන පද්ධතිවලින් ද (character encoding systems)?</p>",
          "questionNumber": 8,
          "options": [
            "වගු 1 හා 2 යන දෙකම ASCII කේතයෙනි",
            "වගු 1 හා 2 යන දෙකම UNICODE කේතයෙනි",
            "වගුව 1 : ASCII කේතයෙනි, වගුව 2 : UNICODE කේතයෙනි",
            "වගුව 1: EBCDIC කේතයෙනි, වගුව 2 : ASCII කේතයෙනි",
            "වගුව 1: UNICODE කේතයෙනි, වගුව 2 : ASCII කේතයෙනි"
          ],
          "correctAnswer": 4,
          "relatedNoteId": "note-3-2-0"
        },
        {
          "id": "pq-2019-p1-9",
          "questionNumber": 9,
          "content": "<p>පහත කවරක් A̅B̅C + B̅C + AB̅C + BC යන ප්‍රකාශනයට තුල්‍ය වන වඩාත්ම සුළු කරන ලද ප්‍රකාශනය ද?</p>",
          "options": [
            "AB̅C + A̅B̅C + B",
            "B(AC̅+A̅C) + B",
            "C̅(AB̅+B) + C(A̅B̅ + B)",
            "AC̅ + A̅C + B",
            "ĀC + B"
          ],
          "correctAnswer": 5,
          "relatedNoteId": "note-4-2-1"
        },
        {
          "id": "pq-2019-p1-10",
          "questionNumber": 10,
          "content": "<p>එක් කොටසක් A ලෙස ද අනෙක් කොටස B ලෙස ද නම් කර ඇති අනුක‍්‍රමික තාර්කික පරිපථයක කොටු සටහනක් (block diagram) පහත දැක්වේ.</p><Component id=\"2019-p1-q10\" /><p>ඉහත කොටු සටහන පිළිබඳව පහත කවර ප්‍රකාශ/ය සත්‍ය වේ ද?</p><p>I - A කොටස සංයෝජන (combinational) තාර්කික පරිපථයකි.</p><p>II - B කොටස මතක මූලාංගයකි (memory element).</p><p>III - A කොටස පමණක් තාර්කික ද්වාර භාවිතයෙන් ක්‍රියාවට නැංවිය හැක.</p>",
          "options": [
            "I පමණි",
            "II පමණි",
            "I සහ II පමණි",
            "I සහ III පමණි",
            "I, II සහ III සියල්ලම"
          ],
          "correctAnswer": 3,
          "relatedNoteId": "note-4-4-0"
        },
        {
          "id": "pq-2019-p1-11",
          "questionNumber": 11,
          "content": "<p>NAND ද්වාරවලින් සමන්විත පහත දැක්වෙන තාර්කික පරිපථය සලකන්න.</p><Component id=\"2019-p1-q11\" /><p>ඉහත පරිපථයෙහි අපේක්ෂිත ප්‍රතිදානය AB + A̅B̅ + C වන්නේ නම්, X සහ Y ආදාන කවරක් විය යුතු ද?</p>",
          "options": [
            "X = B̅ සහ Y = C",
            "X = B සහ Y = C̅",
            "X = B̅ සහ Y = C̅",
            "X = B සහ Y = C",
            "X = C සහ Y = B"
          ],
          "correctAnswer": 1,
          "relatedNoteId": "note-4-1-0"
        },
        {
          "id": "pq-2019-p1-12",
          "questionNumber": 12,
          "content": "<p>මෙහෙයුම් පද්ධතිය (operating system) යනු විශේෂ වූ වගකීම් සහිතව, පරිගණකයක ධාවනය වන තවත් ක්‍රමලේඛයකි. මතක කළමනාකරණය, ගොනු කළමනාකරණය සහ ආදාන/ප්‍රතිදාන කළමනාකරණය එම වගකීම්වලින් සමහරකි. මෙහෙයුම් පද්ධතියේ තවත් වැදගත් වගකීමක් වන්නේ කුමක්ද?</p>",
          "options": [
            "උපස්ථ (backup) කළමනාකරණය",
            "නිහිත මතක (cache memory) කළමනාකරණය",
            "සම්පාදක (compiler) කළමනාකරණය",
            "ක්‍රියායන (process) කළමනාකරණය",
            "පද්ධති ස්පන්දකය (system clock) කළමනාකරණය"
          ],
          "correctAnswer": 4,
          "relatedNoteId": "note-5-1-0"
        },
        {
          "id": "pq-2019-p1-13",
          "questionNumber": 13,
          "content": "<p>පරිශීලකයකු විසින් තනි සකසනයක් සහිත පරිගණකයක (single processor computer) ආරම්භ කර ඇති ක්‍රියායන (processes) සංඛ්‍යාව වැඩි වන විට, ඒ එක් එක් ක්‍රියායනය එම පරිශීලක වෙත ප්‍රතිචාර දැක්වීමේ කාලයට (response time) සහ මෙහෙයුම් පද්ධතියේ මතක කළමනාකරණ ආශ්‍රිත කාර්යවලට පිළිවෙළින් කුමක් සිදු වේ ද?</p>",
          "options": [
            "ප්‍රතිචාර දැක්වීමේ කාලය සහ මතක කළමනාකරණය ආශ්‍රිත කාර්යයන් යන දෙකම වැඩිවේ.",
            "ප්‍රතිචාර දැක්වීමේ කාලය අඩු වන අතර මතක කළමනාකරණය ආශ්‍රිත කාර්යයන් වැඩිවේ.",
            "ප්‍රතිචාර දැක්වීමේ කාලය වැඩි වන අතර මතක කළමනාකරණය ආශ්‍රිත කාර්යයන් අඩුවේ.",
            "ප්‍රතිචාර දැක්වීමේ කාලය හා මතක කළමනාකරණය ආශ්‍රිත කාර්යයන් යන දෙකම අඩුවේ.",
            "ඒ දෙකෙහිම වෙනසක් සිදු නොවේ."
          ],
          "correctAnswer": 1,
          "relatedNoteId": "note-5-3-2"
        },
        {
          "id": "pq-2019-p1-14",
          "questionNumber": 14,
          "content": "<p>පහත කවරක් මෙහෙයුම් පද්ධතියේ වගකීමක් නොවන්නේ ද?</p>",
          "options": [
            "ක්‍රියායන සඳහා භෞතික මතකයේ ඉඩ ලබාදීම",
            "කුමන ක්‍රියායනය ධාවනය කළ යුතු දැයි තීරණය කිරීම",
            "දෘඪ තැටියක ඇති සම්පාදනය වූ (compiled) ක්‍රමලේඛ ගොනුවල භාවිතය ගැන සටහන් තබා ගැනීම",
            "භෞතික මතකයේ කුමන කොටස් භාවිත වෙමින් පවතී ද, කුමන කොටස් නිදහස්ව පවතීද යන්න සම්බන්ධව සටහන් තබා ගැනීම",
            "භෞතික මතකය හා දෘඪ තැටිය අතර ක්‍රියායන ප්‍රතිහරණය (swapping)"
          ],
          "correctAnswer": 3,
          "relatedNoteId": "note-5-1-0"
        },
        {
          "id": "pq-2019-p1-15",
          "questionNumber": 15,
          "content": "<p>පරිගණකයක, පරිශීලක ක්‍රමලේඛයක ප්‍රමාණය (size) භෞතික මතකයෙහි ප්‍රමාණය ඉක්මවා යා හැක. තවද, ක්‍රමලේඛවල අවශ්‍ය කොටස් පමණක් භෞතික මතකයෙහි රඳවා ගැනීම සිදු වේ. ඉහත දෑ පහත කවරක ප්‍රතිඵල ද?</p>",
          "options": [
            "නිහිත මතකය (cache memory) භාවිතය",
            "යාබද ගොනු විභජනය (contiguous file allocation) භාවිතය",
            "ගොනු විභජන වගුව (FAT) භාවිතය",
            "මතක කළමනාකරණ ඒකකය (MMU) භාවිතය",
            "පිටු (pages), රාමු (frames) හා පිටු වගු (page tables) භාවිතය"
          ],
          "correctAnswer": 5,
          "relatedNoteId": "note-5-4-0"
        },
        {
          "id": "pq-2019-p1-16",
          "questionNumber": 16,
          "content": "<p>සම්පාදක (compiler) සහ පරිවර්තක (interpreter) පිළිබඳව පහත කවර ප්‍රකාශ සත්‍ය වේ ද?</p><p>A – සම්පාදකයක්, ඉහළ මට්ටමේ (high level) භාෂාවකින් ලියැවුනු මුළු ක්‍රමලේඛයම යන්ත්‍ර කේතයට හරවයි.</p><p>B - පරිවර්තකයක්, ක්‍රමලේඛයක් ක්‍රියාත්මක කිරීමේ දී (execute/run) ඉහළ මට්ටමේ ක්‍රමලේඛයෙහි එක් එක් වගන්තිය (statement) බැගින් ගෙන, එය අදාළ යන්ත්‍ර කේතයට හරවයි.</p><p>C - සාමාන්‍යයෙන් සම්පාදනය වූ කේත, පරිවර්තනය වූ කේතවලට වඩා වැඩි වේගයකින් ධාවනය වේ.</p>",
          "options": [
            "A පමණි",
            "A සහ B පමණි",
            "A සහ C පමණි",
            "B සහ C පමණි",
            "A, B සහ C යන සියල්ලම"
          ],
          "correctAnswer": 5,
          "relatedNoteId": "note-9-5-0"
        },
        {
          "id": "pq-2019-p1-17",
          "questionNumber": 17,
          "content": "<p>නියමු (guided) මාධ්‍ය සහ නියමු නොවන (unguided) මාධ්‍ය සම්බන්ධයෙන් පහත කවර වගන්ති සත්‍ය වේ ද?</p><p>A – නියමු මාධ්‍යවල සම්ප්‍රේෂණය, නියමු නොවන මාධ්‍යවල සම්ප්‍රේෂණයට වඩා ඉහළ දත්ත වේග (data speeds) ලබාගැනීමට ඉවහල් වේ.</p><p>B – නියමු මාධ්‍ය, නියමු නොවන මාධ්‍යවලට වඩා අඩු නිරෝධනයට (interference) බඳුන් වේ.</p><p>C – නියමු නොවන මාධ්‍යවල සම්ප්‍රේෂණය, නියමු මාධ්‍යවල සම්ප්‍රේෂණයට වඩා ආරක්ෂාකාරී වේ.</p><p>D – නියමු නොවන මාධ්‍යවල සම්ප්‍රේෂණය, නියමු මාධ්‍යවල සම්ප්‍රේෂණයට වඩා අඩු කලාප පළලක් (bandwidth) භාවිත කරයි.</p>",
          "options": [
            "A, B සහ C පමණි",
            "A, B සහ D පමණි",
            "A, C සහ D පමණි",
            "B, C සහ D පමණි",
            "A, B, C සහ D යන සියල්ලම"
          ],
          "correctAnswer": 2,
          "relatedNoteId": "note-6-2-0"
        },
        {
          "id": "pq-2019-p1-18",
          "questionNumber": 18,
          "content": "<p>දත්ත හැසුරුම් භාෂාවෙහි (DML) නොවන SQL විධානයක් වන්නේ පහත කුමක් ද?</p>",
          "options": [
            "CREATE",
            "DELETE",
            "INSERT",
            "SELECT",
            "UPDATE"
          ],
          "correctAnswer": 1,
          "relatedNoteId": "note-8-6-0"
        },
        {
          "id": "pq-2019-p1-19",
          "questionNumber": 19,
          "content": "<p>බස් ස්ඵලකය (bus topology) පිළිබඳව පහත කවර වගන්ති සාවද්‍ය වේ ද?</p><p>A - පරිගණක සහ ජාල උපක්‍රම තනි රැහැනකට (cable) සම්බන්ධ කර ඇත.</p><p>B - සියලුම ගමනාගමන (traffic) දක්ෂිණාවර්තව හෝ වාමාවර්තව හෝ සිදු වේ.</p><p>C - කලාප පළල නෝඩු (nodes) අතර හවුලේ බෙදා ගැනේ.</p><p>D - සෑම නෝඩුවක්ම තමන්ගේ අසල්වැසියන් දෙදෙනාට සම්බන්ධ කර ඇත.</p>",
          "options": [
            "A සහ B පමණි",
            "A සහ D පමණි",
            "B සහ C පමණි",
            "B සහ D පමණි",
            "C සහ D පමණි"
          ],
          "correctAnswer": 4,
          "relatedNoteId": "note-6-5-0"
        },
        {
          "id": "pq-2019-p1-20",
          "questionNumber": 20,
          "content": "<p>මාධ්‍ය ප්‍රවේශ පාලන (Media Access Control-MAC) යොමු සාමාන්‍යයෙන් ............................ අංකවලින් ඉදිරිපත් කෙරේ.</p><p>හිස්තැන පිරවීමට සුදුසු වන්නේ පහත කවරක් ද?</p>",
          "options": [
            "ද්විමය",
            "දශම",
            "ෂඩ් දශම",
            "ස්වභාවික",
            "අෂ්ටක"
          ],
          "correctAnswer": 3,
          "relatedNoteId": "note-6-6-0"
        },
        {
          "id": "pq-2019-p1-21",
          "questionNumber": 21,
          "content": "<p>ඔබ විසින් C පන්තියෙහි අන්තර්ජාල නියමාවලියක් (IP) සහිත උපජාල 16 ක් නිර්මාණය කළ යුතු ය. මෙම උපජාල නිර්මාණය කිරීම සඳහා පහත දැක්වෙන කුමන උපජාල ආවරණය (subnet mask) සුදුසු වන්නේද?</p>",
          "options": [
            "255.255.255.240",
            "255.255.255.248",
            "255.255.255.250",
            "255.255.255.252",
            "255.255.255.224"
          ],
          "correctAnswer": 1,
          "relatedNoteId": "note-6-7-0"
        },
        {
          "id": "pq-2019-p1-22",
          "questionNumber": 22,
          "content": "<p>පද්ධතියක හරි වැරදි බැලීම (පරීක්ෂා කිරීම) (testing) සම්බන්ධයෙන් පහත කවර වගන්ති/ය නිවැරදි වේ ද?</p><p>A - කාල මංජුසා පරීක්ෂාවට (black box testing) කේතයෙහි සෑම පේළියක්ම විස්තරාත්මකව පරීක්ෂා කිරීම අඩංගු වේ.</p><p>B - ඒකක පරීක්ෂාව (unit testing) කේතවල දෝෂ අනාවරණය කිරීමට උපකාරී වේ.</p><p>C - ඒකක පරීක්ෂාවට පෙර පද්ධති පරීක්ෂාව සිදු නොකළ යුතු ය.</p>",
          "options": [
            "A පමණි",
            "B පමණි",
            "C පමණි",
            "A සහ C පමණි",
            "B සහ C පමණි"
          ],
          "correctAnswer": 5,
          "relatedNoteId": "note-7-8-0"
        },
        {
          "id": "pq-2019-p1-23",
          "questionNumber": 23,
          "content": "<p>පහත කවරක් කාර්යබද්ධ අවශ්‍යතා (functional requirements) දක්වයි ද?</p><p>A - පරිශීලකයන්ට තමන්ගේ ලිපින හා දුරකතන අංක යාවත්කාලීන කිරීමට අවස්ථාව ලබා දිය යුතු ය.</p><p>B - ඕනෑම පරිශීලක ඉල්ලීමකටම 2 ms ක කාලයක් තුළ ප්‍රතිචාර දැක්විය යුතු ය.</p><p>C - පද්ධතිය පහසුවෙන් වෙනස් කිරීමට හැකි විය යුතු ය.</p>",
          "options": [
            "A පමණි",
            "B පමණි",
            "C පමණි",
            "A සහ C පමණි",
            "A, B සහ C යන සියල්ල ම"
          ],
          "correctAnswer": 1,
          "relatedNoteId": "note-7-6-0"
        },
        {
          "id": "pq-2019-p1-24",
          "questionNumber": 24,
          "content": "<p>මෘදුකාංග ව්‍යාපෘතියකට අදාළ පහත විස්තර ලබා දී ඇත.</p><p>A - අවශ්‍යතාවයන් ස්ථීර වේ (මුළු ව්‍යාපෘතිය පුරාවට වෙනස්කම් සඳහා ඉඩ නොලැබේ).</p><p>B - සම්පූර්ණ මෘදුකාංග නිපැයුම එක්වරම ලබා දිය යුතු ය.</p><p>C - එක් එක් ක්‍රියාකාරකම (activity) සඳහා සියලු විස්තර සහ පිරිවිතර ව්‍යාපෘතිය අතරතුර සූදානම් කළ යුතු ය.</p><p>මෙම ව්‍යාපෘතිය සඳහා වඩාත්ම සුදුසු මෘදුකාංග සංවර්ධන ක්‍රියාවලි ආකෘතිය (software development process model) කුමක් ද?</p>",
          "options": [
            "සුචල්‍ය (agile)",
            "මූලාකෘතිකරණය (prototyping)",
            "ශීඝ්‍ර යෙදුම් සංවර්ධනය (RAD)",
            "සර්පිල (spiral)",
            "දියඇලි (waterfall)"
          ],
          "correctAnswer": 5,
          "relatedNoteId": "note-7-3-0"
        },
        {
          "id": "pq-2019-p1-25",
          "questionNumber": 25,
          "content": "<p>දත්ත ගැලීම් සටහන් (Data Flow Diagram–DFD) පිළිබඳ පහත කවර වගන්තිය සාවද්‍ය වේ ද?</p>",
          "options": [
            "සන්දර්භ (context) සටහන යනු ඉහළම මට්ටමේ වියුක්තකරණය (abstraction) ඇති දත්ත ගැලීම් සටහනකි.",
            "පද්ධතියෙහි ඇති සියලුම දත්ත ගබඩා (data stores) සන්දර්භ සටහනෙහි නිරූපණය කළ යුතු ය.",
            "DFD හි අනෙකුත් සංරචක සම්බන්ධ කිරීම සඳහා දත්ත ගැලීම් භාවිත කෙරේ.",
            "මූලික ක්‍රියායන (elementary processes) තවදුරටත් විඛණ්ඩනය (decompose) නොකෙරේ.",
            "DFD හි බාහිර භූතාර්ථ (external entities), දත්ත ප්‍රභව (sources) හෝ දත්ත ලබාගන්නා (recepients) අංග ලෙස හෝ ක්‍රියා කෙරේ."
          ],
          "correctAnswer": 2,
          "relatedNoteId": "note-7-6-0"
        },
        {
          "id": "pq-2019-p1-26",
          "questionNumber": 26,
          "content": "<p>පහත කවරක් විවෘත පද්ධති හා සම්බන්ධ ව නිවැරදි වන්නේ ද?</p>",
          "options": [
            "විවෘත පද්ධතියකට අවශ්‍ය සියලු ආදාන එම පද්ධතිය තුළ ම පවතී.",
            "විවෘත පද්ධතිවලට අනෙකුත් පද්ධති සමග අන්තර් ක්‍රියා කළ නොහැකි ය.",
            "විවෘත පද්ධතිවලට එහි ක්‍රියාකාරිත්වය සඳහා අන් පද්ධති අවශ්‍ය නොවේ.",
            "මිනිසුන්ට විවෘත පද්ධති නිර්මාණය කළ හැකි ය.",
            "සියලු ස්වාභාවික පද්ධති විවෘත පද්ධති වේ."
          ],
          "correctAnswer": 5,
          "relatedNoteId": "note-7-1-0"
        },
        {
          "id": "pq-2019-p1-27",
          "questionNumber": 27,
          "content": "<p>විශේෂඥ පද්ධතියක් (Expert System) ලෙස සැලකිය හැක්කේ පහත සඳහන් කවරක් ද?</p>",
          "options": [
            "බැංකු ටෙලර් යන්ත්‍රයක්",
            "පූර්ණ ස්වයංක්‍රීය රෙදි සෝදන යන්ත්‍රයක්",
            "මයික්‍රොවේව් උදුනක්",
            "සුව සේවාවක රෝග විනිශ්චය කිරීමේ පද්ධතියක්",
            "ඉලෙක්ට්‍රොනික රුධිර පීඩන මාපකයක්"
          ],
          "correctAnswer": 4,
          "relatedNoteId": "note-7-2-0"
        },
        {
          "id": "pq-2019-p1-28",
          "questionNumber": 28,
          "content": "<p>පද්ධතියක ක්‍රියාත්මක වීම පිළිබඳව සලකා බැලීමේදී, පවතින පද්ධතිය වසා දමා නව පද්ධතිය ආරම්භ කිරීම පහත කවරක් මගින් විස්තර කෙරේ ද?</p>",
          "options": [
            "සෘජු ස්ථාපනය",
            "සමාන්තර ස්ථාපනය",
            "අවධි ස්ථාපනය",
            "නියාමක ස්ථාපනය",
            "අනුක්‍රමික ස්ථාපනය"
          ],
          "correctAnswer": 1,
          "relatedNoteId": "note-7-9-0"
        },
        {
          "id": "pq-2019-p1-29",
          "questionNumber": 29,
          "content": "<p>පහත දැක්වෙන SQL විමසුම් ප්‍රකාශය සලකා බලන්න.<br/><code>SELECT * FROM Student, Course WHERE Student.course_Id = Course.course_Id;</code><br/>ඉහත SQL ප්‍රකාශය සම්බන්ධයෙන් පහත දැක්වෙන කුමක් නිවැරදි වේ ද?</p>",
          "options": [
            "එය ශිෂ්‍ය සහ පාඨමාලා වගු දෙකෙහිම ඇති සියලු ම තීරු හා පේළි ප්‍රතිදානය කරයි.",
            "එය ශිෂ්‍ය සහ පාඨමාලා වගු දෙකෙහිම ගැලපෙන සියලු ම තීරු හා පේළි ප්‍රතිදානය කරයි.",
            "එය ශිෂ්‍ය සහ පාඨමාලා වගු දෙකෙහිම ගැලපෙන සියලු ම පේළි සහ Student වගුවෙහි ඇති සියලු තීරු ප්‍රතිදානය කරයි.",
            "එය ශිෂ්‍ය සහ පාඨමාලා වගු දෙකෙහිම ගැලපෙන සියලු ම පේළි සහ Course වගුවෙහි ඇති සියලු තීරු ප්‍රතිදානය කරයි.",
            "SQL ප්‍රකාශයේ වාක්‍ය රීති (syntax) වැරදි ය."
          ],
          "correctAnswer": 2,
          "relatedNoteId": "note-8-6-0"
        },
        {
          "id": "pq-2019-p1-30",
          "questionNumber": 30,
          "content": "<p>පහත දැක්වෙන භූතාර්ථ සම්බන්ධතා (ER) රූපසටහන සලකන්න.</p>[DIAGRAM:pq-2019-p1-30-er]<p>මෙම ER රූපසටහන සම්බන්ධක ක්‍රමානුරූපයකට (relational schema) අනුරූපණය කළ විට, සෑදෙන වගු මොනවා ද?</p>",
          "options": [
            "Lecturer(LecID, Name), Course(CourseID, Title), Teaches(LecID, CourseID)",
            "Lecturer(LecID, Name, CourseID), Course(CourseID, Title)",
            "Lecturer(LecID, Name), Course(CourseID, Title, LecID)",
            "Lecturer(LecID, Name, CourseID, Title)",
            "Lecturer_Course(LecID, Name, CourseID, Title)"
          ],
          "correctAnswer": 1,
          "relatedNoteId": "note-8-2-0"
        },
        {
          "id": "pq-2019-p1-31",
          "questionNumber": 31,
          "content": "<p>පහත කවරක් සම්බන්ධක දත්ත සමුදා කළමනාකරණ පද්ධති (Relational Database Management Systems - RDBMS) සඳහා උදාහරණයක් නොවන්නේ ද?</p>",
          "options": [
            "MySQL",
            "Microsoft SQL Server",
            "Oracle",
            "MongoDB",
            "PostgreSQL"
          ],
          "correctAnswer": 4,
          "relatedNoteId": "note-8-1-0"
        },
        {
          "id": "pq-2019-p1-32",
          "questionNumber": 32,
          "content": "<p>ප්‍රශ්න අංක 32, 33, සහ 34 සඳහා පිළිතුරු දීමට පහත ගැලීම් සටහන සලකා බලන්න.</p>[DIAGRAM:2019-p1-q32]<p>ඉහත ගැලීම් සටහනෙහි දැක්වෙන ඇල්ගොරිතමය කුමන අරමුණක් සඳහා දැයි පහත දැක්වෙන දෑ අතුරින් තෝරන්න.</p>",
          "options": [
            "ලැයිස්තුවෙහි (L) ඇති සියලු ම මූලිකාංග (elements) ගණන් කිරීම",
            "ලැයිස්තුවෙහි, K ට සමාන මූලිකාංග ගණන් කිරීම",
            "ලැයිස්තුවෙහි, K ට වඩා කුඩා මූලිකාංග ගණන් කිරීම",
            "ලැයිස්තුවෙහි, K ට වඩා විශාල මූලිකාංග ගණන් කිරීම",
            "ලැයිස්තුවෙහි, K ට වඩා කුඩා සහ K ට වඩා විශාල මූලිකාංග ගණන් කිරීම"
          ],
          "correctAnswer": 2,
          "relatedNoteId": "note-9-3-1"
        },
        {
          "id": "pq-2019-p1-33",
          "questionNumber": 33,
          "content": "<p>Q සහ P සඳහා පහත සඳහන් දැ අතුරින් නිවැරදි ආදේශක වනුයේ කුමක් ද?</p>",
          "options": [
            "Q: i < n ද?, P: if (L[i] == K) then count = count + 1; i = i + 1",
            "Q: i > n ද?, P: count = count + 1; i = i + 1",
            "Q: i == n ද?, P: if (L[i] == K) then count = count + 1;",
            "Q: i < n ද?, P: i = i + 1",
            "Q: i < n ද?, P: if (L[i] == K) then count = count + 1"
          ],
          "correctAnswer": 1,
          "relatedNoteId": "note-9-3-1"
        },
        {
          "id": "pq-2019-p1-34",
          "questionNumber": 34,
          "content": "<p>පහත I, II සහ III මගින් දැක්වෙන පයිතන් ක්‍රමලේඛ සලකන්න.</p><p>I.</p>[CODE:python]def count_item(L, K):\n  n = len(L)\n  count = 0\n  for i in range(n):\n    if L[i] == K:\n      count = count + 1\n  return count[/CODE]<p>II.</p>[CODE:python]def count_item(L, K):\n  n = len(L)\n  count = 0\n  i = 0\n  while i < n:\n    if L[i] == K:\n      count = count + 1\n    i = i + 1\n  return count[/CODE]<p>III.</p>[CODE:python]def count_item(L, K):\n  return L.count(K)[/CODE]<p>ඉහත කුමන ක්‍රමලේඛය/ක්‍රමලේඛ මගින් දී ඇති ඇල්ගොරිතමය ක්‍රියාත්මක වන්නේ ද?</p>",
          "options": ["I පමණි", "II පමණි", "III පමණි", "I සහ II පමණි", "I, II සහ III සියල්ලම"],
          "correctAnswer": 5,
          "relatedNoteId": "note-9-3-1"
        },
        {
          "id": "pq-2019-p1-35",
          "questionNumber": 35,
          "content": "<p>පහත දැක්වෙන පයිතන් ප්‍රකාශයෙහි අගය කුමක් ද?</p><p>`(100 // 3) % 4 | 8`</p>",
          "options": ["0", "0.125", "3", "8", "9"],
          "correctAnswer": 5,
          "relatedNoteId": "note-9-7-0"
        },
        {
          "id": "pq-2019-p1-36",
          "questionNumber": 36,
          "content": "<p>පහත කවර වගන්තියක් කාරක රීති අනුව වැරදි වේ ද?</p>",
          "options": ["d1 = [1, 'apple', 2.3]", "d2 = (1, 'apple', 2.3)", "d3 = [1, (1, 'apple'), 'orange']", "d4 = {'name' : 'Kamal', 'age' : 18}", "d5 = {(1, 'apple'), (1, 2)}"],
          "correctAnswer": 5,
          "relatedNoteId": "note-9-10-0"
        },
        {
          "id": "pq-2019-p1-37",
          "questionNumber": 37,
          "content": "<p>පහත දක්වා ඇති පයිතන් කේතය ක්‍රියාත්මක කළ විට එහි ප්‍රතිදානය කුමක් වේ ද?</p><pre><code>S = \"ABCDE\"\\nL = len(S)\\nS1 = S[L::-1]\\nprint(S1)</code></pre>",
          "options": ["A", "E", "ABCDE", "EDCBA", ""],
          "correctAnswer": 5,
          "relatedNoteId": "note-9-10-0"
        },
        {
          "id": "pq-2019-p1-38",
          "questionNumber": 38,
          "content": "<p>පහත පයිතන් ශ්‍රිතය සලකන්න.<br/><code>def f(x):\\n  y = x % 10\\n  x = x // 10\\n  while x > 0:\\n    y = y * 10 + x % 10\\n    x = x // 10\\n  return y\\nprint(f(123))</code><br/>මෙම කේතයේ ප්‍රතිදානය කුමක් ද?</p>",
          "options": ["0", "1", "3", "6", "321"],
          "correctAnswer": 5,
          "relatedNoteId": "note-9-9-0"
        },
        {
          "id": "pq-2019-p1-39",
          "questionNumber": 39,
          "content": "<p>පහත පයිතන් කේතයේ ප්‍රතිදානය කුමක් ද?</p><pre><code>n = 20\\nm = 10\\nif (n < 10):\\n  result = n + m\\nelif (n < 20):\\n  result = n - m\\nelse:\\n  result = n * m\\nprint(result)</code></pre>",
          "options": ["10", "20", "30", "200", "දෝෂ පණිවුඩයක්"],
          "correctAnswer": 4,
          "relatedNoteId": "note-9-8-4"
        },
        {
          "id": "pq-2019-p1-40",
          "questionNumber": 40,
          "content": "<p>පහත පයිතන් කේතයෙහි ප්‍රතිදානය කුමක් ද?</p><pre><code>s = 0\\ni = 1\\nwhile (i < 10):\\n  s = s + i\\n  i = i + 2\\nprint(s)</code></pre>",
          "options": ["16", "25", "45", "55", "දෝෂ පණිවුඩයක්"],
          "correctAnswer": 2,
          "relatedNoteId": "note-9-8-5"
        },
        {
          "id": "pq-2019-p1-41",
          "questionNumber": 41,
          "content": "<p>පහත කවරක් නිවැරදි ද?</p><p>A - open('file.txt', 'w') මගින් ගොනුව පවතී නම් එය මත නැවත ලියයි (overwrite).</p><p>B - open('file.txt', 'r') මගින් ගොනුව නොපවතී නම් නව ගොනුවක් සාදයි.</p><p>C - open('file.txt', 'a') මගින් ගොනුවේ අවසානයට නව දත්ත එක් කරයි.</p>",
          "options": ["A පමණි", "B පමණි", "A සහ C පමණි", "B සහ C පමණි", "A, B සහ C සියල්ලම"],
          "correctAnswer": 3,
          "relatedNoteId": "note-9-11-0"
        },
        {
          "id": "pq-2019-p1-42",
          "questionNumber": 42,
          "content": "<p>වෙබ් පිටුවක පසුබිම් රූපයක් (background image) යෙදීම සඳහා පහත කවර CSS ගුණය භාවිත වේ ද?</p>",
          "options": ["background-color", "background-image", "background-position", "color", "image"],
          "correctAnswer": 2,
          "relatedNoteId": "note-10-5-0"
        },
        {
          "id": "pq-2019-p1-43",
          "questionNumber": 43,
          "content": "<p>PHP හි විවරණයක් (comment) දැක්වීම සඳහා පහත කවරක් භාවිත නොවේ ද?</p>",
          "options": ["#", "//", "/** ... */", "/* ... */", "<!-- ... -->"],
          "correctAnswer": 5,
          "relatedNoteId": "note-10-7-0"
        },
        {
          "id": "pq-2019-p1-44",
          "questionNumber": 44,
          "content": "<p>පහත PHP කේතය සලකන්න.<br/><code>&lt;?php $x = 5; $y = \"5\"; ?&gt;</code><br/>පහත කවරක් සත්‍ය වේ ද?</p>",
          "options": ["$x == $y", "$x === $y", "$x != $y", "$x !== $y සහ $x == $y", "$x !== $y සහ $x != $y"],
          "correctAnswer": 4,
          "relatedNoteId": "note-10-7-0"
        },
        {
          "id": "pq-2019-p1-45",
          "questionNumber": 45,
          "content": "<p>වෙබ් සේවාදායකයක් සම්බන්ධයෙන් පහත කවර ප්‍රකාශයක් සත්‍ය වේ ද?</p>",
          "options": ["වෙබ් සේවාදායකයක් සැමවිටම මෘදුකාංගයකි.", "වෙබ් සේවාදායකයක් සැමවිටම දෘඪාංගයකි.", "වෙබ් සේවාදායකයක් සැමවිටම මෘදුකාංග සහ දෘඪාංග යන දෙකම වේ.", "වෙබ් සේවාදායකයක් HTML කේත පමණක් සැකසයි.", "වෙබ් සේවාදායකයක් PHP කේත පමණක් සැකසයි."],
          "correctAnswer": 3,
          "relatedNoteId": "note-10-7-0"
        },
        {
          "id": "pq-2019-p1-46",
          "questionNumber": 46,
          "content": "<p>පහත දැක්වෙන CSS වරකය (selector) කුමක් සඳහා භාවිත වේ ද?</p><code>#firstname { background-color: yellow; }</code>",
          "options": ["සියලුම h1 මූලාංග සඳහා", "Id='firstname' වන මූලාංගය සඳහා", "Class='firstname' වන සියලුම මූලාංග සඳහා", "සියලුම ආදාන (input) මූලාංග සඳහා", "සියලුම පෝරම (form) මූලාංග සඳහා"],
          "correctAnswer": 2,
          "relatedNoteId": "note-10-5-0"
        },
        {
          "id": "pq-2019-p1-47",
          "questionNumber": 47,
          "content": "<p>HTML හි, වෙබ් පිටුවක රූපයක් (image) දැක්වීමට භාවිතා කරන උසුලනය කුමක් ද?</p>",
          "options": ["<pic>", "<img>", "<image>", "<graphic>", "<picture>"],
          "correctAnswer": 2,
          "relatedNoteId": "note-10-3-0"
        },
        {
          "id": "pq-2019-p1-48",
          "questionNumber": 48,
          "content": "<p>C2B e-වාණිජ්‍ය ආකෘතියක් සඳහා උදාහරණයක් වන්නේ පහත කවරක් ද?</p>",
          "options": ["www.ebay.com", "www.amazon.com", "www.ikman.lk", "ඡායාරූප ශිල්පියකු තම ඡායාරූප ඡායාරූප ගබඩා වෙබ් අඩවියකට විකිණීම", "රජයක් තම සේවාවන් මාර්ගගතව ලබා දීම"],
          "correctAnswer": 4,
          "relatedNoteId": "note-12-1-0"
        },
        {
          "id": "pq-2019-p1-49",
          "questionNumber": 49,
          "content": "<p>පරිගණක විද්‍යාවේදී, විද්‍යාත්මක පර්යේෂණවලදී සහ ඉංජිනේරු ශිල්පයේදී දත්ත දෘශ්‍යකරණය (Data Visualization) සඳහා බහුලව භාවිත වන උසස් ක්‍රමලේඛන භාෂාව කුමක් ද?</p>",
          "options": ["Java", "C++", "Python", "PHP", "JavaScript"],
          "correctAnswer": 3,
          "relatedNoteId": "note-9-7-0"
        },
        {
          "id": "pq-2019-p1-50",
          "questionNumber": 50,
          "content": "<p>පහත කවරක් කෘත්‍රිම බුද්ධිය (AI) හා සම්බන්ධ නොවේ ද?</p>",
          "options": ["ස්නායුක ජාල (Neural Networks)", "ජානමය ඇල්ගොරිතම (Genetic Algorithms)", "විශේෂඥ පද්ධති (Expert Systems)", "ස්වභාව ධර්මයෙන් ආභාෂය ලත් පරිගණනය (Nature-Inspired Computing)", "බ්ලොක්චේන් (Blockchain)"],
          "correctAnswer": 5,
          "relatedNoteId": "note-13-1-0"
        }
    ]
  }
}
