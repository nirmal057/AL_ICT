
import type { Paper, StructuredQuestion } from "../../types";

const partA: StructuredQuestion[] = [
    {
      id: "al-2014-p2-1",
      questionNumber: "1",
      content: "",
      totalMarks: 0,
      questionType: "structured",
      subParts: [
        {
          id: "al-2014-p2-1a",
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
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-1b",
          label: "(b)",
          content: "වෙබ් අතරික්සුවක් මගින් පහත දක්වා ඇති HTML කේත ඛණ්ඩ විදැහු (render) කරන ආකාරය ලියා දක්වන්න.<br/>(i) `&lt;abc&gt;Greetings!&lt;/abc&gt;`<br/>(ii) `&lt;/u&gt;Greetings!&lt;u&gt;`",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-1c",
          label: "(c)",
          content: "වෙබ් අතරික්සුවක් මගින් විදැහු කරන ලද පහත පෙන්වා ඇති ආවේක්ෂණ කොටු (check boxes) සහිත ප්‍රතිදානය සලකා බලන්න:<br/><b>Programming Languages Used:</b><br/>C☐ Java☐ Python☐<br/><br/>ඉහත දක්වා ඇති ප්‍රතිදානය විදැහු කිරීම සඳහා පහත දක්වා ඇති HTML කේත ඛණ්ඩය සම්පූර්ණ කරන්න.<br/>`&lt;form method = \\\"get\\\" action = \\\"\\\"&gt;<br/><br/><br/>&lt;/form&gt;`",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large",
          relatedNoteId: ""
        }
      ]
    },
    {
      id: "al-2014-p2-2",
      questionNumber: "2",
      content: "",
      questionType: "structured",
      totalMarks: 0,
      subParts: [
        {
          id: "al-2014-p2-2a",
          label: "(a)",
          content: "<p>(i) වෙබ් අතරික්සුවක (browser) පෙන්වන, දී ඇති HTML කේතයේ ප්‍රතිදානය පහත කොටුවේ අඳින්න.</p>[CODE:html]<html>\n<body>\n<table border=1>\n<tr> <th>Designation</th> <th> Contact Telephone Numbers </th> </tr>\n<tr> <td rowspan=2> Principal</td> <td> 061-2223211 </td> </tr>\n<tr> <td> 067-5557772</td> </tr>\n<tr> <td> Vice Principal</td> <td> 061-5557771 </td> </tr>\n<tr> <td colspan=2> Common Phone Number: 019-2233445</td> </tr>\n</table>\n</body>\n</html>[/CODE]<p>(ii) ඉහත (i) හි HTML කේතයේ, වගුවේ මායිම් (borders) නොපෙන්වීමට අවශ්‍ය වෙනස්කම ලියන්න.</p>",
          marks: 2,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-2b",
          label: "(b)",
          content: "වෙබ් අතරික්සුවක් මගින් පහත දක්වා ඇති HTML කේත ඛණ්ඩ විදැහු (render) කරන ආකාරය ලියා දක්වන්න.<br/>(i) `&lt;abc&gt;Greetings!&lt;/abc&gt;`<br/>(ii) `&lt;/u&gt;Greetings!&lt;u&gt;`",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-2c",
          label: "(c)",
          content: "වෙබ් අතරික්සුවක් මගින් විදැහු කරන ලද පහත පෙන්වා ඇති ආවේක්ෂණ කොටු (check boxes) සහිත ප්‍රතිදානය සලකා බලන්න:<br/><b>Programming Languages Used:</b><br/>C☐ Java☐ Python☐<br/><br/>ඉහත දක්වා ඇති ප්‍රතිදානය විදැහු කිරීම සඳහා පහත දක්වා ඇති HTML කේත ඛණ්ඩය සම්පූර්ණ කරන්න.<br/>`&lt;form method = \\\"get\\\" action = \\\"\\\"&gt;<br/><br/><br/>&lt;/form&gt;`",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large",
          relatedNoteId: ""
        }
      ]
    },
    {
      id: "al-2014-p2-3",
      questionNumber: "3",
      content: "සම්බන්ධක දත්ත සමුදායකට අයත් පහත දැක්වෙන වගු දෙක ඔබට දී ඇතැයි සලකන්න.<br/>[TABLE:2014-p2-q3]<br/>[devnote] Two tables are shown. `house` (houseID, name) and `student` (studentID, name, grade, houseID). Sample data is provided. [/devnote]",
      questionType: "structured",
      totalMarks: 0,
      subParts: [
        {
          id: "al-2014-p2-3a",
          label: "(a)",
          content: "<p>පහත පෙන්වා ඇති භූතාර්ථ සම්බන්ධක ප්‍රස්තාරය (ER diagram) පරිවර්තනය කිරීමෙන් ඉහත වගු තනා ඇත.<br/>[DIAGRAM:2014-p2-q3a]<br/>[devnote] An ER diagram is shown with entities `house` and `student` and a relationship `has`. Attributes are represented by ovals labeled houseID, A, studentID, D, E. The relationship is labeled B, C. [/devnote]<br/>භූතාර්ථ සම්බන්ධක රූපයේ A, B, C, D හා E සඳහා සුදුසු ලේඛල හෝ අවශ්‍ය තොරතුරු යොදා පහත දැක්වෙන හිස්තැන් පුරවන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-3b",
          label: "(b)",
          content: "student හා house යන වගු දෙක අතර සම්බන්ධතාවය එක-එක, එක-බහු හෝ බහු-බහු දැයි ප්‍රකාශ කරන්න. ඉහත වගුවල ඇති සුදුසු දත්ත භාවිත කර ඔබේ පිළිතුර තහවුරු කරන්න.",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-3c",
          label: "(c)",
          content: "ඉහත (c) හි යෝජනා කරන ලද ඕනෑම වගුවක් සඳහා ප්‍රාථමික යතුර (primary key) ලියා දක්වන්න.",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "small",
          relatedNoteId: ""
        }
      ]
    },
    {
      id: "al-2014-p2-4",
      questionNumber: "4",
      content: "",
      questionType: "structured",
      totalMarks: 0,
      subParts: [
        {
          id: "al-2014-p2-4a",
          label: "(a)",
          content: "<p>පරිගණක පද්ධතියක මතකය බයිට යොමුගත අතර (byte addressable) එයට ඇත්තේ 4GB උපරිම භාවිත කළ හැකි මතක ප්‍රමාණයකි. එහි යොමු බසයේ (address bus) අවම පළල බිටුවලින් කොපමණ ද? ඔබේ ගණනය කිරීම් සියල්ල ම පැහැදිලි ව පෙන්වන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-4b",
          label: "(b)",
          content: "<p>මෙහෙයුම් පද්ධතියක් තුළ ක්‍රමලේඛයක් (program) හා ක්‍රියාවලියක් (process) අතර සම්බන්ධතාවය (relationship) කුමක් ද?</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "al-2014-p2-4c",
          label: "(c)",
          content: "<p>මෙහෙයුම් පද්ධතියක, සත් ක්‍රියාවලි තත්ත්ව ආකෘතියේ (seven state process model) \"ප්‍රතිහරණය කළ සහ රැඳී සිටින (swapped out and waiting)\" සහ \"ප්‍රතිහරණය කළ සහ අවහිර කළ (swapped out and blocked)\" යන තත්ත්ව පැවතීමේ අවශ්‍යතාව කුමක් ද?</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        }
      ]
    }
  ];

const partB: StructuredQuestion[] = [
    {
      id: "al-2014-p2-b1",
      questionNumber: "1",
      content: "සංවේදක තුනක් භාවිත කර බලහත්කාරයෙන් ඇතුළුවීම් හඳුනා ගැනීම සඳහා සංඥා පද්ධතියක් සැලසුම් කර ඇත. මෙම සංවේදක චලන ‌සංවේදකයක්, වීදුරු බිඳුම් සංවේදකයක් හා අන්ධකාර සංවේදකයක් වේ. සංවේදකයක් එස්කෝ සක්‍රීය (තාර්කික අගය 1 ලබා දීම) හෝ අක්‍රීය (තාර්කික අගය 0 ලබාදීම) හෝ වේ.<br/>මෙම පද්ධතිය බලහත්කාර ඇතුළු වීමක් (Break-in) ස්වයංක්‍රීයව හඳුනාගෙන සංඥා පද්ධතිය ක්‍රියාත්මක (තාර්කික අගය 1 ලබාදීම) කරනුයේ, එක ම අවස්ථාවේ දී සංවේදක තුනම සක්‍රීය වන්නේ නම් හෝ අන්ධකාර සංවේදකය හා ඉතිරි සංවේදක දෙකෙන් ඕනෑම සංවේදකයක් සක්‍රීය වන්නේ නම් පමණකි.",
      questionType: "essay",
      totalMarks: 0,
      subParts: [
        {
          id: "al-2014-p2-b1a",
          label: "(a)",
          content: "<p>(i) ඉහත සංඥා පද්ධතියේ කාර්යබද්ධතාවය නිරූපණය කිරීමට සත්‍යතා වගුවක් ගොඩනගන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-b1b",
          label: "(b)",
          content: "<p>(i) ඉහත (a) කොටසේ ලබාගත් සත්‍යතා වගුව නිරූපණය කිරීම සඳහා බූලීය ප්‍රකාශනයක් ලබා දෙන්න.<br/>(ii) ඉහත b (i) කොටසෙන්ද ලබාගත් බූලියානු ප්‍රකාශනය බූලියානු වීජ ‌ගණිතය භාවිත කර සරල ‌කොට දක්වන්න. මෙම සරල කිරීම සඳහා භාවිත කළ ගණනය කිරීම් හා බූලියානු වීජ ගණිත නීති පැහැදිලි ව ලියා දක්වන්න.<br/>(iii) ඉහත b (ii) කොටසෙන් ලබාගත් සරල කළ බූලියානු ප්‍රකාශනය සඳහා තාර්කික පරිපථයක් ගොඩනගන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "xlarge",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-b1c",
          label: "(c)",
          content: "<p>මෙම සංඥා පද්ධතිය සක්‍රීය වීම් සම්බන්ධව පසුගිය සිදුවීම් විශ්ලේෂණය කිරීමේ දී අනාවරණය වන්නේ බලහත්කාරයෙන් ඇතුළුවීමේ උත්සාහයන් සිදු වී ඇත්තේ අන්ධකාර අවස්ථාවල දී පමණක් බව ය. ඔබ ඉහත ප්‍රකාශය හා එකඟ වන්නේ ද? ඔබේ පිළිතුර තහවුරු කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        }
      ]
    },
    {
      id: "al-2014-p2-b2",
      questionNumber: "2",
      content: "",
      questionType: "essay",
      totalMarks: 0,
      subParts: [
        {
          id: "al-2014-p2-b2a",
          label: "(a)",
          content: "OSI සමුද්දේශ ආකෘතියේ ස්ථර නිරූපණය කරන රූපසටහනක් අඳින්න.",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-b2b",
          label: "(b)",
          content: "ඔබේ විද්‍යුත් තැපැල් පද්ධති පාලකගෙන් (adminstrator) යැයි දැක්වෙන විද්‍යුත් තැපැල් ලිපියක් ඔබට ලැබී ඇති අතර එහි ඔබේ විද්‍යුත් තැපැල් ගිණුම වසා දැමීමට ආසන්න බව දැක්වේ. ඔබේ විද්‍යුත් තැපැල් ගිණුම තව දුරටත් පවත්වාගෙන ‌යාමට අවශ්‍ය නම් එම විද්‍යුත් තැපැල් ලිපියෙහි දැක්වෙන සන්ධානයක් (link) මත ක්ලික් කර ඔබේ වර්තමාන ‌පරිශීලක නාමය සහ මුරපදය ඇතුළත් කරන ලෙස ඉල්ලා ඇත. මෙම ඉල්ලීමට අවනත වීම නිසා ආරක්ෂාවට ඇති විය හැකි ප්‍රධාන තර්ජනය කුමක් ද?",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-b2c",
          label: "(c)",
          content: "පහත දක්වා ඇති ස්ථානීය ‌පෙදෙස් ජාල (LAN) ස්ථල විද්‍යාවන් (topology) නිරූපණය ‌කෙරෙන රූපසටහන් අඳින්න.\n(i) බසය (Bus)\n(ii) තරුව (Star)\n(iii) වලය (Ring)",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-b2d",
          label: "(d)",
          content: "අන්තර්ජාලය හා සම්බන්ධ වූ පරිගණක යන්ත්‍ර දෙකක් අතර දත්ත පැකැට්ටුවල ‌වට චාරිකා කාලය (round trip time) මැනීම සඳහා MRIT නම් නව මෙවලමක් භාවිත කරන ලදී. එක් යන්ත්‍රයක් X නම් ස්ථානයක පවතින අතර අනෙක Y හි පවතී. MRIT නම් මෙවලම මගින් X හා Y අතර වට චාරිකා කාලය 8 ms ලෙස ලබා දෙන ලදී. X හා Y ලක්ෂ්‍ය අතර සරල රේඛිය දුර 3 000 km ක් සහ ආලෝකයේ උපරිම වේගය 300 000 km/s වේ.\nමෙම තොරතුරු මත පදනම් ව MRIT මෙවලම පිළිබඳ ව විශ්වාසය තැබිය හැකි ද? ඔබේ පිළිතුර තහවුරු කරන්න.",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large",
          relatedNoteId: ""
        }
      ]
    },
    {
      id: "al-2014-p2-b3",
      questionNumber: "3",
      content: "පහත දැක්වෙන මෘදුකාංග නිෂ්පාදන සමාගමක සේවකයින් ඇගයීම් ක්‍රියාවලිය සලකා බලා දී ඇති ප්‍රශ්නවලට පිළිතුරු සපයන්න.\n\nඑක්තරා මෘදුකාංග නිෂ්පාදන සමාගමක සේවකයින් 600 ක් සිටී. එම සමාගම සෑම සේවකයකුගේ ම කාර්ය සාධනය සෑම වසරක ම අවසානයේ දී අතින් (manually) ක්‍රමයට සිදුකරයි. මෙම කාර්ය සාධනයේ ප්‍රතිඵල සේවකයින්ගේ ඊලඟ වසරේ වැටුප් වර්ධකය තීරණය කිරීමට යොදා ගනී. එම ක්‍රියාවලියේ දී සෑම සේවකයකු ම ඇගයීම් පෝරමයක දක්වා ඇති කාර්ය සාධන දර්ශක කිහිපයක් මත ඇගයීමට ලක් කරනු ලබන අතර එම දර්ශකවලට ලකුණු දීම සිදු කරනු ලබන්නේ ඔහුගේ/ඇයගේ ඉහළ නිලධාරීන් විසිනි. මෙම ඇගයීමේ ක්‍රියාවලිය සඳහා සෑම සේවකයකුගේ ම වැඩ කරන කාලයෙන් සැලකිය යුතු ප්‍රමාණයක් වැය වේ. ලකුණු එකතු කර ගත් පසු මානව සම්පත් කළමනාකරුට එම ලකුණු සකස් කොට වාර්තාවක් පිළියෙල කිරීම සඳහා මාස දෙකක පමණ කාලයක් ගත වේ. සෑම සේවකයකුගේ ම වැටුප් වර්ධකය තීරණය කිරීම සඳහා මානව සම්පත් දෙපාර්තමේන්තුවේ විධායක නිලධාරීන් දෙදෙනෙකුගෙන් සහ මුදල් දෙපාර්තමේන්තුවේ මූල්‍ය විශේෂඥයකුගෙන් සමන්විත කමිටුවක් පත් කරනු ලබයි. එම කමිටුව මානව සම්පත් කළමනාකරුගේ වාර්තාව සහ මූල්‍ය විශේෂඥයාගේ විශේෂ වාර්තාවක් මත පදනම්ව තීරණ ගනු ලබයි. මූල්‍ය විශේෂඥයා ඔහුගේ විශේෂ වාර්තාව පිළියෙල කිරීම සඳහා ආයතනයේ උපදෙස්මාලාවට අමතර ව ඔහුගේ පෙර ඇගයීම් කටයුතුවලින් ලබාගත් පළපුරුද්ද භාවිත කරයි. මෙම මුල්‍ය විශේෂඥයාට ඔහුගේ නිර්දේශයන් කමිටුවට ඉදිරිපත් කිරීමට සාමාන්‍යයෙන් මාස තුනක පමණ කාලයක් ගත වේ. මෙම ක්‍රියාවලිය සේවකයින්ගේ වැටුප් වර්ධක පමා කරන අතර ඔවුන්ව අසතුටට ද පත් කරයි. මෙම ක්‍රියාවලිය කඩිනම් කර නියමිත ‌කාලයට තමන්ගේ වැටුප් වර්ධක ලබාදෙන ලෙස සේවකයින් විසින් කළමනාකාරීත්වයෙන් ඉල්ලා ඇත.\n\nමෙම වසර අවසාන ඇගයීම් ක්‍රියාවලිය මාර්ගගත පද්ධතියක් (online system) ලෙස පරිගණකගත කිරීමට එම සමාගම තීරණය කර ඇත. ‌යෝජිත පද්ධතිය පහත සඳහන් පරිදි ක්‍රියාත්මක වේ. ඇගයීම් කටයුතු සිදුවන කාලය තුළ දී පමණක් සේවකයින්ට මාර්ගගත ඇගයීම් පද්ධතියට පිවිසීමට අවසර ‌දෙනු ලැබේ. සෑම සේවකයකුම පද්ධතියට පිවිසිය යුතු අතර ඇගයීම සඳහා පහළ මට්ටමේ සේවකයකු ‌තෝරාගත යුතු ය. එවිට පද්ධතිය විසින් තෝරාගත් ‌සේවකයාට අදාළ ඇගයීම් ‌පෝරමයට ලකුණු ලබා දී භාර දෙන ලෙස ඉල්ලා සිටී. ඇගයීමේ කාලය අවසානයේ දී පද්ධතිය මගින් ස්වයංක්‍රීය ව දත්ත සම්පාදනය කර ජනනය කරන වාර්තාවක් පත්කරන ලද කමිටුවට ඉදිරිපත් කරනු ලබයි.",
      questionType: "essay",
      totalMarks: 0,
      subParts: [
        {
          id: "al-2014-p2-b3a",
          label: "(a)",
          content: "<p>සමාගමට මාර්ගගත කළ පරිගණක පද්ධතියක් හඳුන්වා දීමට සිදුවීම සඳහා ‌හේතු වූ ප්‍රධාන කාරණා දෙකක් ප්‍රකාශ කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-b3b",
          label: "(b)",
          content: "<p>කෘත්‍රිම බුද්ධිය (Artificial Intelligence) පදනම් වූ පද්ධතියක් මගින් මෙම ක්‍රියාවලියට ගත වන කාලය අඩු කරතැයි සමාගම සිතයි. ඔබ මේ සඳහා එකඟ වන්නේ ද? ඔබේ පිළිතුර සනාථ කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-b3c",
          label: "(c)",
          content: "<p>මෙම පද්ධතිය මගින් සමාගම එහි සේවකයින්ට ලබාදෙනු ලබන සේවාව B2E ලෙස ඔබ සලකන්නේ ද? ඔබේ පිළිතුර සනාථ කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "small",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-b3d",
          label: "(d)",
          content: "<p>මෙම කමිටුවට පිටස්තර විශේෂඥයෙකුට ආරාධනය කිරීමට සමාගම තීරණය ‌කරයි. මෙම තීරණයෙහි එක් සෘණ බලපෑමක් ප්‍රකාශ කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "small",
          relatedNoteId: ""
        }
      ]
    },
    {
      id: "al-2014-p2-b4",
      questionNumber: "4",
      content: "",
      questionType: "essay",
      totalMarks: 0,
      subParts: [
        {
          id: "al-2014-p2-b4a",
          label: "(a)",
          content: "<p>පහත සඳහන් ක්‍රමලේඛනය ක්‍රියාත්මක වන විට පයිතන් අර්ථවින්‍යාසකයක් (interpreter) මගින් කරනු ලබන කාර්යය පැහැදිලි කරන්න. විචල්‍ය (variables) සඳහා පවරනු ලැබූ ප්‍රරූප (types) හා ප්‍රරූප පරිවර්තනයන් ඔබේ පැහැදිලි කිරීම තුළ අඩංගු විය යුතු ය.</p>[CODE:python]a = 4\nb = 4.7\nc = a + b[/CODE]",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-b4b",
          label: "(b)",
          content: "<p>පහත සඳහන් ක්‍රමලේඛනයේ ඇති වගන්ති ක්‍රියාත්මක කිරීමේ දී කුමක් සිදුවේ දැයි විස්තර කරන්න.</p>[CODE:python]total = 0.0\nx = float(input(\"Enter a number:\"))\nwhile x > 0:\n  total = total + x\n  x = float(input(\"Enter a number:\"))\nprint(total)[/CODE]",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-b4c",
          label: "(c)",
          content: "<p>දෙන ලද නිඛිල (integers) සංඛ්‍යා දහයක උපරිම අගය සොයා එය ප්‍රදර්ශනය කිරීම සඳහා පයිතන් ක්‍රමලේඛනයක් ලිවීමට ඔඛෙන් ඉල්ලීමක් කරනු ලැබේ. ක්‍රමලේඛනය මගින් වරකට එක බැගින් නිඛිලයන් කියවිය යුතු වේ.</p><p>(i) ඉහත ගැටළුව විසඳීම සඳහා ඇල්ගොරිතමයක් ගැලීම් සටහනක් ඇසුරෙන් යෝජනා කරන්න.</p><p>(ii) ඉහත c (i) මගින් යෝජනා කරනු ලැබූ ඔබගේ ගැලීම් සටහන ස්ථාපිත කිරීම සඳහා පයිතන් ක්‍රමලේඛනයක් ලියන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "xlarge",
          relatedNoteId: ""
        }
      ]
    },
    {
      id: "al-2014-p2-b5",
      questionNumber: "5",
      content: "පහත පෙන්වා ඇති සංසිද්ධිය නිරූපණය කිරීමට භූතාර්ථ සම්බන්ධතා (ER) රූපසටහනක් අඳින්න. ඔබගේ රූපසටහනේ උපලක්ෂණ (attributes) හා ප්‍රාථමික යතුරු (primary keys) පැහැදිලි ව දැක්විය යුතු ය. ඔබගේ උපකල්පන වෙතොත් පැහැදිලි ව ප්‍රකාශ කරන්න.\n\nABC කැබ් සේවා සමාගම සතුව එකදු කාර් රථයක්වත් නොමැත. පෞද්ගලික කාර් රථ හිමියන්ට මෙම සමාගම හා ලියාපදිංචි විය හැකි අතර ඔවුන්ගේ කාර් රථ කුලියට දීමට ද හැකිය. සමහර රථ හිමියන් එක රථයකට වඩා සමාගමට ලබා දේ. සමාගම විසින් මෙම කාර් රථ සඳහා රියදුරන් කුලී පදනම මත බඳවා ගනු ලබන අතර මෙම කාර් රථ විවිධ දිනවල දී විවිධ රියදුරන් විසින් පැදවිය හැකිය. පාරිභෝගිකයන්ට විශ්වාසවන්ත සේවාවක් ලබා දීම සඳහා වාහන නඩත්තු කිරීම රථ හිමියන්ගේ වගකීමකි. සෑම කුලී ගමනක ම අවසානයේ දී රියදුරා විසින් තමා ඉන්නා ස්ථානය මෙම සමාගමට දන්වයි. පාරිභෝගිකයකු කාර් රථයක් ඉල්ලා සිටි විටක දී සමාගම විසින් පාරිභෝගිකයා කථා කළ ස්ථානය සමීපයේ ඇති කාර් රථ පිළිබඳව සොයා බලයි. කාර් රථයක් පවතින්නේ නම්, එය පාරිභෝගිකයාට අනුයුක්ත කර, ඒ බව පාරිභෝගිකයාට හා කාර් රථයේ රියදුරු යන දෙපළට ම දන්වනු ලබයි. තම සේවාව වඩා කාර්යක්ෂමව ලබා දීම සඳහා පාරිභෝගිකයාට සමීපතම ස්ථානයේ ඇති කාර් රථයට ඔහුව අනුයුක්ත කිරීම සඳහා සමාගමට හැකි උපරිම උත්සාහය ගනු ලබයි. මෙම සමාගම ඔවුන්ගේ සේවය නිරන්තරයෙන් ලබා ගන්නා මගීනට වඩා හොඳ සේවයක් ලබා දීම සඳහා නම, ලිපිනය හා දුරකථන අංකය වැනි පාරිභෝගික තොරතුරු ආයතනය සතුව තබා ගනී. පාරිභෝගිකයාට ද රියදුරු විසින් ලබා දුන් සේවය සම්බන්ධව තමන් සතුටු වන්නේ ද යන වග ආයතනයට දැන්විය හැකිය. පාරිභෝගිකයින්ට රියදුරන් අනුයුක්ත කිරීමේ දී මෙම තොරතුරු භාවිත කරනු ලැබේ. සැම කාර් රථ හිමිකරුවෙක් ම, කාර් රථයක් ම, රියදුරෙක් ම හා පාරිභෝගිකයකු ම අනන්‍යව හඳුන්වා දීම සඳහා පිළිවෙළින් \"ownerId\", \"carId\", \"driverId\" හා \"custId\" භාවිත කරනු ලැබේ.",
      questionType: "essay",
      totalMarks: 0,
      subParts: [
        {
          id: "al-2014-p2-b5a",
          label: "",
          content: "",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "xlarge",
          relatedNoteId: ""
        }
      ]
    },
    {
      id: "al-2014-p2-b6",
      questionNumber: "6",
      content: "ශ්‍රී ලංකාවේ එක්තරා විශ්වවිද්‍යාලයක සිසුන් 8 000ක් පමණ ඇත. එයට ඇත්තේ එක් පුස්තකාලයක් පමණකි. බැහැරදීම, ආපසු ‌ලබා ගැනීම හා සිසු විමසුම්වලට පිළිතුරු දීම යන සියලු පුස්තකාල පහසුකම් සේවාවන් දැනට ලබාදෙනුයේ පුස්තකාල සහායකයින් තිදෙනකු මගිනි. 90% ක් පමණ වූ සිසුන් පුස්තකාලය පරිහරණය කරනු ‌ලබන්නේ පෙ.ව. 7.00 සිට පෙ.ව. 9.00, මධ්‍යහන 12.00 සිට ප.ව. 1.00 හා ප.ව. 6.00 සිට ප.ව. 7.00 යන කාල පරාසවල දී බව නිරීක්ෂණය කර ඇත. මෙම කාල ‌පරාසවල දී ඉතා දිගු වූ සිසු පෝලිම් පුස්තකාල සහායකවරුන් තිදෙනා ‌ගේ කවුන්ටර ඉදිරියේ දැකගත හැකි වේ. දිගු පෝලිම්වල කාලය නාස්තිවීම සිසුන්ගේ දැඩි නොසන්සුන්තාවයට තුඩු දී ඇත. අධික කාර්යභාරය නිසා පුස්තකාල සහායකවරුන් ද සතුටින් නොවන අතර මෙය සමහර අවස්ථාවල දී ඔවුන් අතින් ‌වැරදි සිදු වීමට ද බලපා ඇත.",
      questionType: "essay",
      totalMarks: 0,
      subParts: [
        {
          id: "al-2014-p2-b6a",
          label: "(a)",
          content: "<p>ඉහත විශ්වවිද්‍යාල පුස්තකාල පද්ධතිය හා බැඳුනු කාර්යබද්ධ අවශ්‍යතා (functional requirements) තුනක් හඳුනාගෙන ලියා දක්වන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-b6b",
          label: "(b)",
          content: "<p>ඉහත පද්ධතිය හා සම්බන්ධ කාර්යබද්ධ නොවන අවශ්‍යතා (non-functional requirements) දෙකක් හඳුනාගෙන හේතු ඉදිරිපත් කරමින් ලියා දක්වන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: ""
        },
        {
          id: "al-2014-p2-b6c",
          label: "(c)",
          content: "<p>විශ්වවිද්‍යාල පුස්තකාල පද්ධතියේ ඇති ගැටලු විසඳීම සඳහා එකිනෙකට වෙනස් වූ පරිගණකගත විසඳුම් දෙකක් සහ පරිගණක මත පදනම් නොවූ එක් විසඳුමක් යෝජනා කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large",
          relatedNoteId: ""
        }
      ]
    }
  ];

export const paper2014_p2: Paper = {
  id: "al-ict-paper-2014-p2",
  title: "A/L ICT Paper II - 2014",
  examName: {
    sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
    tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
    english: "General Certificate of Education (Adv. Level) Examination",
  },
  year: 2014,
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

    