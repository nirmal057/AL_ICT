
import type { Paper, StructuredQuestion } from "../../types";

const partA: StructuredQuestion[] = [
    {
        id: "pq-2013-p2-1",
        questionNumber: "1",
        content: "රූපයේ දී ඇති ශ්‍රී ලංකා ටෙස්ට් ක්‍රිකට් කණ්ඩායමේ වෙබ් පිටුවක කොටස සලකන්න:\n<Component id=\"2013-p2-q1\" />\n<p>ඉහත වේබ් පිටුව ජනනය කරන “cricket.html” ගොනුවේ ආංශික HTML ලේඛනයක් පහත දී ඇත. වෙබ් පිටුව විදැහු කිරීමට අදාළ ඇමුණුම් (tags) යොදා ගනිමින් HTML ලේඛනයේ හිස්තැන් පුරවන්න.</p><p>සටහන් :</p><ol><li>\"Sri Lankan national cricket team” යන වාක්‍ය ඛණ්ඩය මත පරිශීලකයා ක්ලික් (click) කළ විට \"team.html” නම් වූ ලේඛනය දර්ශනය විය යුතුය.</li><li>ඉහත වෙබ් පිටුවේ ඇති රූපයෙහි ප්‍රභව ගොනුවෙහි නම “cricket.jpg” වේ.</li><li>“cricket.jpg” යන රූපයේ සන්ධානය (link) සඳහා “cricket” නම් වූ විකල්ප විස්තරයක් තිබිය යුතුය.</li></ol>",
        questionType: "structured",
        totalMarks: 0,
        relatedNoteId: "note-10-3-0",
        subParts: [
          {
            id: "pq-2013-p2-1a",
            label: "",
            content: "[CODE:html]<html>\n<head>\n  <title> Test Cricket</title>\n</head>\n<body>\n  <h1>Sri Lankan Test cricket records</h1>\n  <a>\n  <p>The<a href=\"team.html\">\n    Sri Lankan national cricket team </a>\n    played their first Test match on 17 February 1982 against England.\n  </p>\n  <p><h2>Record Groups</h2></p>\n  <ul>\n    <li>Team records</li>\n    <li>Individual records</li>\n    <li>Partnership records</li>\n  </ul>\n  <h3>Partnership records</h3>\n  <p><img>\n    <a href=\"cricket.jpg\" alt=\"cricket\">\n    Sri Lanka holds the most number of partnership records in Test cricket, with the records for the second, third, fourth, and sixth wickets. South Africa and Pakistan are ranked second with two records each.\n  </p>\n  <h4>Highest wicket partnerships</h4>\n  <table border=\"1\">\n    <tr>\n      <th>Runs</th>\n      <th>Wicket</th>\n      <th colspan = \"2\">Partners</th>\n    </tr>\n    <tr>\n      <td>335</td>\n      <td>1st wicket</td>\n      <td>Marvan Atapattu</td>\n      <td>Sanath Jayasuriya</td>\n    </tr>\n    <tr>\n      <td>576</td>\n      <td>2nd wicket</td>\n      <td>Sanath Jayasuriya</td>\n      <td>Roshan Mahanama</td>\n    </tr>\n  </table>\n</body>\n</html>[/CODE]",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "large"
          }
        ]
    },
    {
      id: "pq-2013-p2-2",
      questionNumber: "2",
      content: "",
      totalMarks: 0,
      relatedNoteId: "note-5-4-0",
      questionType: "structured",
      subParts: [
        {
          id: "pq-2013-p2-2a",
          label: "(a)",
          content: "<p>පරිගණකයක් බයිට යොමුගත නම් (byte addressable) සහ එහි මතකයේ පවතින ඕනෑම බයිටයකට ප්‍රවේශ වීමට බිටු 32 හි යොමු (address) භාවිත කරන්නේ නම් එහි මතකයේ භාවිත කළ හැකි උපරිම ප්‍රමාණය ගිගා බයිට් (GB) වලින් කුමක් ද? ඔබේ ගණනයන් සියල්ල ම පැහැදිලිව පෙන්වන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "pq-2013-p2-2b",
          label: "(b)",
          content: "<p>මෙහෙයුම් පද්ධතියක් තුළ ක්‍රමලේඛයක් (program) හා ක්‍රියාවලියක් (process) අතර සම්බන්ධතාවය (relationship) කුමක් ද?</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "pq-2013-p2-2c",
          label: "(c)",
          content: "<p>මෙහෙයුම් පද්ධතියක, සත් ක්‍රියාවලි තත්ත්ව ආකෘතියේ (seven state process model) \"ප්‍රතිහරණය කළ සහ රැඳී සිටින (swapped out and waiting)\" සහ \"ප්‍රතිහරණය කළ සහ අවහිර කළ (swapped out and blocked)\" යන තත්ත්ව පැවතීමේ අවශ්‍යතාව කුමක් ද?</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        }
      ]
    },
    {
      id: "pq-2013-p2-3",
      questionNumber: "3",
      content: "",
      totalMarks: 0,
      relatedNoteId: "note-3-1-3",
      questionType: "structured",
      subParts: [
        {
          id: "pq-2013-p2-3a",
          label: "(a)",
          content: "<p>(i) 13₁₀ සහ – 19₁₀ සහ දෙකෙහි අනුපූරක (two’s complement) සංඛ්‍යාවන්ට පරිවර්තනය කරන්න. සංඛ්‍යාවක් නිරූපණය කිරීම සඳහා බිටු 8 ක් භාවිත කරන්න.</p><p>(ii) ඉහත (i) කොටසේ දී ලබා ගත් දෙකෙහි අනුපූරක සංඛ්‍යා භාවිත කරමින් 13₁₀ – 19₁₀ ගණනය කර පිළිතුර දෙකෙහි අනුපුරකයක ආකාරයෙන් ලබා දෙන්න.</p><p>(iii) දෙකෙහි අනුපූරක ආකාරයට පවතින ධන සහ සෘණ සංඛ්‍යා දශමය (decimal) සංඛ්‍යා බවට පරිවර්තනය කරන ආකාරය පැහැදිලි කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        },
        {
          id: "pq-2013-p2-3b",
          label: "(b)",
          content: "<p>පහත දැක්වෙන ඉලෙක්ට්‍රොනික ව්‍යාපාර වර්ග සඳහා එකිනෙකට වෙනස් උදාහරණ හතරක් ලියන්න.</p><Component id=\"2013-p2-q3b\" />",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: "note-12-1-0"
        }
      ]
    },
    {
      id: "pq-2013-p2-4",
      questionNumber: "4",
      content: "",
      totalMarks: 0,
      relatedNoteId: "note-8-4-0",
      questionType: "structured",
      subParts: [
        {
          id: "pq-2013-p2-4a",
          label: "(a)",
          content: "<p>සම්බන්ධක දත්ත සමුදායයන්ගේ ප්‍රාථමික යතුර හා ආගන්තුක යතුර අතර සම්බන්ධය විස්තර කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "pq-2013-p2-4b",
          label: "(b)",
          content: "<p>පහත පෙන්වා ඇති ER සටහන සම්බන්ධක දත්ත සමුදාය වගු ආකෘතිවලට පරිවර්තනය කරන්න. capacity උපලක්ෂණය සඳහා captain, vice captain, member ආදී වශයෙන් වූ අගයයන් පැවතිය හැකි ය.</p><Component id=\"2013-p2-q4b\" />",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "pq-2013-p2-4c",
          label: "(c)",
          content: "<p>ඉහත 4 (b) කොටසෙහි දී ලබා ගත් වගු ආකෘතීන් පදනම් කර ගෙන පහත සඳහන් ප්‍රශ්න සඳහා පිළිතුරු දෙන්න.</p><p>(i) නායකයින් නොමැති ක්‍රීඩාවන්ගේ ලැයිස්තුවක් ලබා ගැනීමට SQL වගන්තියක් ලියන්න.</p><p>(ii) නායකයකු ලෙස ඕනෑම ක්‍රීඩාවකට සහභාගී වන ශිෂ්‍යයන්ගේ ලැයිස්තුවක් (studentId and name) ලබා ගැනීමට SQL වගන්තියක් ලියන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        }
      ]
    }
  ];

const partB: StructuredQuestion[] = [
  {
    "id": "pq-2013-p2-b2",
    "questionNumber": "2",
    "content": "",
    "questionType": "essay",
    "totalMarks": 0,
    "subParts": [
      {
        "id": "pq-2013-p2-b2a",
        "label": "(a)",
        "content": "<p>පහත දක්වා ඇති සන්නිවේදන තාක්ෂණයන්ගේ සංසන්දනය (compare) හා අසමතාවය (contrast) දක්වන්න.</p><p>(i) ISDN එරෙහිව ADSL</p><p>(ii) CDMA එරෙහිව GSM</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": "note-6-12-0"
      },
      {
        "id": "pq-2013-p2-b2b",
        "label": "(b)",
        "content": "<p>පහත දක්වා ඇති සේවාදායකයන්ගේ ප්‍රධාන කාර්යය ලබා දෙන්න.</p><p>(i) වෙබ් සේවාදායකය (Web server)</p><p>(ii) තැපැල් සේවාදායකය (Mail server)</p><p>(iii) නියෝජන සේවාදායකය (Proxy server)</p><p>(iv) DHCP සේවාදායකය (DHCP server)</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": "note-6-9-0"
      },
      {
        "id": "pq-2013-p2-b2c",
        "label": "(c)",
        "content": "<p>ආයතනයක් එහි සේවකයන්ට අන්තර්ජාල පාදක සේවා ලබා දීම සඳහා වෙබ් සේවාදායකයක්, තැපැල් සේවාදායකයක්, නියෝජන සේවාදායකයක් සහ DHCP සේවාදායකයක් ස්ථාපනය කරනු ලැබ ඇත. මෙම ආයතනය තුළ ස්ථානීය පෙදෙස් ජාලයකට සම්බන්ධ කළ පරිගණක දහයක් (10) පවතී. මෙම පරිගණක දහය සඳහා IP ලිපින වෙන්කර දී ඇත්තේ ගතික ලෙස ය.</p><p>ජාලයට පරිගණක සම්බන්ධ කිරීමට ප්‍රමාණවත් ජාල රැහැන් හා ජාල ස්විච් දෙකක් සපයා ඇතැයි උපකල්පනය කරන්න. එක් ස්විචයකට උපරිම වශයෙන් පරිගණක දහසයක් (16) සම්බන්ධ කළ හැක.</p><p>(i) මෙම පරිගණක දහය (10), ස්ථානීය පෙදෙස් ජාලයට සම්බන්ධ කර ඇති ආකාරය දැක්වෙන ජාල රූපසටහනක් අඳින්න.</p><p>(ii) වෙබ් සේවාදායකය හා තැපැල් සේවාදායකය අන්තර්ජාලය සමග සම්බන්ධ කර ඇති ආකාරය දැක්වීමට වෙනත් රූපසටහනක් අඳින්න.</p><p>(iii) නියෝජන සේවාදායකයක් භාවිත කරමින් ස්ථානීය ජාලයට සම්බන්ධ කර ඇති පරිගණකවලට අන්තර්ජාල සම්බන්ධය ලබා දීමට ඉහත c (i) හා c (ii) දී අඳින ලද ජාල සටහන් දෙක සම්බන්ධ කර ඇති අයුරු දැක්වීමට තවත් රූපසටහනක් අඳින්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "large",
        "relatedNoteId": "note-6-7-0"
      }
    ]
  },
  {
    "id": "pq-2013-p2-b3",
    "questionNumber": "3",
    "content": "රෝහලට පැමිණි සියලු රෝගීන්ගේ සායනික ඉතිහාසය හා ජනගහන දත්ත (demographic data) දත්ත සමුදායක් මගින් නඩත්තු කිරීමට රෝහල් අධ්‍යක්ෂවරයා තීරණය කරනු ලැබ ඇත. රෝගියකුගේ පළමු පැමිණීමෙන් පසු ඔහුගේ / ඇයගේ සායනික ඉතිහාසය රෝගියා පරීක්ෂා කරන වෛද්‍යවරයාට ලබා ගත හැකිය.",
    "questionType": "essay",
    "totalMarks": 0,
    "subParts": [
      {
        "id": "pq-2013-p2-b3a",
        "label": "(a)",
        "content": "<p>අත්‍යුරු රෙකෝඩ පවත්වාගෙන යන පද්ධතියක් (Manual Record Keeping System), ඉලෙක්ට්‍රොනික දත්ත සමුදාය පද්ධතියක් මගින් ප්‍රතිස්ථාපනය කිරීම සඳහා හේතුවන ප්‍රධාන කරුණු දෙකක් දක්වන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "small",
        "relatedNoteId": "note-1-2-1"
      },
      {
        "id": "pq-2013-p2-b3b",
        "label": "(b)",
        "content": "<p>දත්ත සමුදාය තුළ රෝගීන්ගේ සායනික ඉතිහාසය නඩත්තු කිරීමේ අවාසි දෙකක් සාකච්ඡා කරන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "small",
        "relatedNoteId": "note-1-7-2"
      },
      {
        "id": "pq-2013-p2-b3c",
        "label": "(c)",
        "content": "<p>රෝගීන්ගේ සායනික ඉතිහාසය දත්ත සමුදායක් තුළ නඩත්තු කිරීම e-රාජ්‍යයක කොටසක් සේ සැලකිය හැකි ද? ඔබගේ පිළිතුර ට හේතු දක්වන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": "note-12-1-0"
      },
      {
        "id": "pq-2013-p2-b3d",
        "label": "(d)",
        "content": "<p>රක්ෂණ සමාගම් වැනි බාහිර පාර්ශ්වයන්ට මෙම දත්ත සමුදායට ප්‍රවේශ වී තොරතුරු ලබා ගැනීම සඳහා අවසර දීමට රෝහල් අධ්‍යක්ෂවරයා තීරණය කරයි. අධ්‍යක්ෂවරයා විසින් ගත් මෙම තීරණය සම්බන්ධයෙන් තොරතුරු හා සන්නිවේදන තාක්ෂණය හදාරන සිසුවකු ලෙස ඔබගේ අදහස කුමක් ද?</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": "note-1-7-2"
      }
    ]
  },
  {
    "id": "pq-2013-p2-b4",
    "questionNumber": "4",
    "content": "",
    "questionType": "essay",
    "totalMarks": 0,
    "subParts": [
      {
        "id": "pq-2013-p2-b4a",
        "label": "(a)",
        "content": "<p>පහත සඳහන් ක්‍රමලේඛනය ක්‍රියාත්මක වන විට පයිතන් අර්ථ වින්‍යාසකය (interpreter) මගින් කරනු ලබන කාර්යය පැහැදිලි කරන්න. විචල්‍ය (variables) සඳහා පවරනු ලැබූ ප්‍රරූප (types) හා ප්‍රරූප පරිවර්තනයන් ඔබේ පැහැදිලි කිරීම තුළ අඩංගු විය යුතුය.</p>[CODE:python]a = 4\nb = 4.7\nc = a + b[/CODE]",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": "note-9-7-0"
      },
      {
        "id": "pq-2013-p2-b4b",
        "label": "(b)",
        "content": "<p>පහත සඳහන් ක්‍රමලේඛනයේ ඇති වගන්ති ක්‍රියාත්මක කිරීමේ දී කුමක් සිදුවේ දැයි විස්තර කරන්න.</p>[CODE:python]total = 0.0\nx = float(input(\"Enter a number:\"))\nwhile x > 0:\n  total = total + x\n  x = float(input(\"Enter a number:\"))\nprint(total)[/CODE]",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": "note-9-8-5"
      },
      {
        "id": "pq-2013-p2-b4c",
        "label": "(c)",
        "content": "<p>දෙන ලද නිඛිල (integers) සංඛ්‍යා දහයක උපරිම අගය සොයා එය ප්‍රදර්ශනය කිරීම සඳහා පයිතන් ක්‍රමලේඛනයක් ලිවීමට ඔඛෙන් ඉල්ලීමක් කරනු ලැබේ. ක්‍රමලේඛනය මගින් වරකට එක බැගින් නිඛිලයන් කියවිය යුතු වේ.</p><p>(i) ඉහත ගැටළුව විසඳීම සඳහා ඇල්ගොරිතමයක් ගැලීම් සටහන් භාවිත කරමින් යෝජනා කරන්න.</p><p>(ii) ඉහත c (i) මගින් යෝජනා කරනු ලැබූ ඔබගේ ගැලීම් සටහන ස්ථාපිත කිරීම සඳහා පයිතන් ක්‍රමලේඛනයක් ලියන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "large",
        "relatedNoteId": "note-9-3-1"
      }
    ]
  },
  {
    "id": "pq-2013-p2-b5",
    "questionNumber": "5",
    "content": "පහත සංසිද්ධිය නිරූපණය කිරීමට භූතාර්ථ සම්බන්ධික ER සටහනක් අඳින්න. භූතාර්ථ (entity) වල උප ලක්ෂණ (attributes) සහ ප්‍රාථමික යතුරු (primary keys) පැහැදිලිව දක්වන්න. ඔබගේ උපකල්පන ඇත්නම්, පැහැදිලිව ලියා දක්වන්න.\n\nABC කැබ් සේවා සමාගම සතුව එකදු කාර් රථයක්වත් නොමැත. පෞද්ගලික කාර් රථ හිමියන්ට මෙම සමාගම හා ලියාපදිංචි විය හැකි අතර ඔවුන්ගේ කාර් රථ කුලියට දීමට ද හැකිය. සමහර රථ හිමියන් එක රථයකට වඩා සමාගමට ලබා දේ. සමාගම විසින් මෙම කාර් රථ සඳහා රියදුරන් කුලී පදනම මත බඳවා ගනු ලබන අතර මෙම කාර් රථ විවිධ දිනවල දී විවිධ රියදුරන් විසින් පැදවිය හැකිය. පාරිභෝගිකයන්ට විශ්වාසවන්ත සේවාවක් ලබා දීම සඳහා වාහන නඩත්තු කිරීම රථ හිමියන්ගේ වගකීමකි. සෑම කුලී ගමනක ම අවසානයේ දී රියදුරා විසින් තමා ඉන්නා ස්ථානය මෙම සමාගමට දන්වයි. පාරිභෝගිකයකු කාර් රථයක් ඉල්ලා සිටි විටක දී සමාගම විසින් පාරිභෝගිකයා කථා කළ ස්ථානය සමීපයේ ඇති කාර් රථ පිළිබඳව සොයා බලයි. කාර් රථයක් පවතින්නේ නම්, එය පාරිභෝගිකයාට අනුයුක්ත කර, ඒ බව පාරිභෝගිකයාට හා කාර් රථයේ රියදුරු යන දෙපළට ම දන්වනු ලබයි. තම සේවාව වඩා කාර්යක්ෂමව ලබා දීම සඳහා පාරිභෝගිකයාට සමීපතම ස්ථානයේ ඇති කාර් රථයට ඔහුව අනුයුක්ත කිරීම සඳහා සමාගමට හැකි උපරිම උත්සාහය ගනු ලබයි. මෙම සමාගම ඔවුන්ගේ සේවය නිරන්තරයෙන් ලබා ගන්නා මගීනට වඩා හොඳ සේවයක් ලබා දීම සඳහා නම, ලිපිනය හා දුරකථන අංකය වැනි පාරිභෝගික තොරතුරු ආයතනය සතුව තබා ගනී. පාරිභෝගිකයාට ද රියදුරු විසින් ලබා දුන් සේවය සම්බන්ධව තමන් සතුටු වන්නේ ද යන වග ආයතනයට දැන්විය හැකිය. පාරිභෝගිකයින්ට රියදුරන් අනුයුක්ත කිරීමේ දී මෙම තොරතුරු භාවිත කරනු ලැබේ. සැම කාර් රථ හිමිකරුවෙක් ම, කාර් රථයක් ම, රියදුරෙක් ම හා පාරිභෝගිකයකු ම අනන්‍යව හඳුන්වා දීම සඳහා පිළිවෙළින් \"ownerId\", \"carId\", \"driverId\" හා \"custId\" භාවිත කරනු ලැබේ.",
    "questionType": "essay",
    "totalMarks": 0,
    "subParts": [
      {
        "id": "pq-2013-p2-b5a",
        "label": "",
        "content": "",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "large",
        "relatedNoteId": "note-8-2-0"
      }
    ]
  },
  {
    "id": "pq-2013-p2-b6",
    "questionNumber": "6",
    "content": "ශ්‍රී ලංකාවේ ස්ථාපිත කර ඇති බෙදාහැරීම් සේවා සමාගමකට බෙදාහැරීම සඳහා දිනකට මිලියන එකකට වඩා වැඩි පාර්සල් සංඛ්‍යාවක් ලැබේ. ශ්‍රී ලංකාවේ විවිධ පළාත්වලට යැවීම සඳහා මෙම පාර්සල් තෝරා වෙන් කර ඒවා අදාළ වැන් රථවලට පැටවිය යුතුය. මෙම ක්‍රියාවලිය වර්තමානයේ දී තේරීම් දෙපාර්තමේන්තුවේ පස් දෙනකු විසින් අත්‍යුරු ක්‍රමය භාවිත කරමින් සිදු කරනු ලැබේ. මෙම ක්‍රියාවලියේ දී වැරදි රථයකට පාර්සල් පැටවීමේ දුර්වලතාවයක් පවතී. දිනක් තුළ ලැබුනු පාර්සල් බෙදා හැරීම සඳහා අවම වශයෙන් දින තුනක්වත් ගතවීම මෙම ක්‍රියාවලියේ ඇති තවත් දුර්වලතාවයකි. එබැවින් මෙම පාර්සල් තේරීමේ ක්‍රියාවලිය, තීරු කේත පද්ධතියක් (bar code system) මගින් ස්වයංකරණය කිරීමට සාමාන්‍යාධිකාරිතුමා තීරණය කරයි. පාර්සලයේ අලවා ඇති තීරු කේතයෙහි, ලබන්නාගේ තැපැල් කේතය (postal code) අඩංගුව ඇත. යෝපිත පරිගණක පාදක පද්ධතිය මගින් තීරු කේතය කියවා, ස්වයංක්‍රියව පාර්සල් තෝරා වෙන් කර, වාහක පටියක ආධාරයෙන් නියමිත බෙදාහැරීමේ වැන් රථය තුළට බහාලීම මිනිස් සම්බන්ධයක් නොමැතිව සිදු කිරීමට නියමිත ය. පාර්සල් තේරීමේ ක්‍රියාවලියේ දී දැනට පවතින ගැටළු පරිගණකගත කිරීමෙන් පසු මඟහරවා ගත හැකි බව සාමාන්‍යාධිකාරිතුමා දැඩිව විශ්වාස කරයි.",
    "questionType": "essay",
    "totalMarks": 0,
    "subParts": [
      {
        "id": "pq-2013-p2-b6a",
        "label": "(a)",
        "content": "<p>යෝජිත පරිගණක පාදක පද්ධතියේ පවතින කාර්යබද්ධ අවශ්‍යතා (functional requirements) දෙකක් හඳුනා ගන්න. ඔබගේ පිළිතුර තහවුරු කරන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": "note-7-6-0"
      },
      {
        "id": "pq-2013-p2-b6b",
        "label": "(b)",
        "content": "<p>පද්ධතියේ පවතින කාර්යබද්ධ නොවන අවශ්‍යතා (non-functional requirements) දෙකක් තහවුරු කිරීම් සමගින් ප්‍රකාශ කරන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": "note-7-6-0"
      },
      {
        "id": "pq-2013-p2-b6c",
        "label": "(c)",
        "content": "<p>පාර්සල් තේරීමේ ක්‍රියාවලිය පරිගණකගත කිරීමට සාමාන්‍යාධිකාරීතුමා ගත් තීරණය හරි ද, වැරදි ද යන වග හේතු දෙකක් සමගින් සාකච්ජා කරන්න.</p>",
        "marks": 0,
        "requiresAnswerBox": true,
        "answerBoxSize": "medium",
        "relatedNoteId": "note-1-2-1"
      }
    ]
  }
];

export const paper2013_p2: Paper = {
  "id": "al-ict-paper-2013-p2",
  "title": "A/L ICT Paper II - 2013",
  "examName": {
    "sinhala": "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
    "tamil": "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
    "english": "General Certificate of Education (Adv. Level) Examination"
  },
  "year": 2013,
  "subject": "තොරතුරු හා සන්නිවේදන තාක්ෂණය",
  "subjectCode": 20,
  "time": {
      "sinhala": "පැය තුනයි",
      "tamil": "மூன்று மணித்தியாலம்",
      "english": "Three hours"
  },
  "content": {
    "title": "Paper II",
    "partA": {
      "title": "A කොටස - ව්‍යුහගත රචනා",
      "instructions": "ප්‍රශ්න හතරටම පිළිතුරු මෙම පත්‍රයේම සපයන්න.",
      "questions": partA
    },
    "partB": {
      "title": "B කොටස - රචනා",
      "instructions": "මෙම කොටසෙහි ප්‍රශ්න තුනකට පමණක් පිළිතුරු සපයන්න.",
      "questions": partB
    }
  }
};
