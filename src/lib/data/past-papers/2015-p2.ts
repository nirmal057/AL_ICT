
import type { Paper, StructuredQuestion } from "../../types";

const partA: StructuredQuestion[] = [
    {
      id: "pq-2015-p2-A1",
      questionNumber: "1",
      content: "",
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-10-3-0",
      subParts: [
        {
          id: "pq-2015-p2-A1a",
          label: "(a)",
          content: "<p>වෙබ් යෙදුමක් මගින් පාඨ පණිවුඩ (text messages) යැවීම සඳහා සංවර්ධනය කරන ලද, පහත රූපයෙන් පෙන්වා ඇති වෙබ් පෝරමය (web form) සලකා බලන්න:</p><p>[DIAGRAM:A web form titled 'Send Text Message' is shown. It has a paragraph 'Fill in all the fields and click Send Message'. Below this are two input fields: a text box for 'Phone No.:' and a larger text area for 'Message:'. At the bottom is a button labeled 'Send your message'.]</p><p>පහත දක්වා ඇති අර්ධ HTML කේත ඛණ්ඩය (partial code) ඉහත වෙබ් පෝරමය ජනනය කිරීම සඳහා සකසා ඇත. ඉහත පෝරමය විදැහු කිරීමට එම කේත ඛණ්ඩය සම්පූර්ණ කරන්න.</p><code>&lt;h2&gt;Send Text Message&lt;/h2&gt;\\n&lt;p&gt;Fill in all the fields and click Send Message&lt;/p&gt;\\n&lt;form action=\"\" method=\"POST\"&gt;\\n  &lt;div class = \"a\"&gt;\\n    &lt;div class = \"l\"&gt; Phone No.: &lt;/div&gt;\\n    &lt;div class = \"r\"&gt;&lt;input type=................... name=\"phone\" size=\"20\"&gt;&lt;/div&gt;\\n  &lt;/div&gt;\\n  &lt;div class = \"a\"&gt;\\n    &lt;div class = \"l\"&gt;Message:&lt;/div&gt;\\n    &lt;div class = \"r\"&gt;&lt;................... name=\"message\" rows=\"7\" cols=\"30\"&gt;\\n    &lt;/...................&gt;&lt;/div&gt;\\n  &lt;/div&gt;\\n  &lt;div class = \"a\"&gt;\\n    &lt;div class = \"r\"&gt;&lt;input type=\"submit\" value=...................&gt;&lt;/div&gt;\\n  &lt;/div&gt;\\n&lt;/form&gt;</code>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        },
        {
          id: "pq-2015-p2-A1b",
          label: "(b)",
          content: "<p>පාසලක ඡායාරූපයක් අඩංගු වෙබ් පිටුවක් විදැහු කිරීම සඳහා නිවැරදි කාරක රීති භාවිත කරමින් සුනිෂ්පන්න (well formed) HTML කේතයක් සංවර්ධනය කර ඇත. එහෙත් වෙබ් අතරික්සුව (web browser) මගින් පාසලේ පිංතූරය විදැහු නොවන අතර alt උපලක්ෂණය සඳහා පාඨ (text) ලෙස ලබා දී තිබූ “School” පමණක් ප්‍රදර්ශනය විය. මෙම චර්යාව පැවතීම සඳහා හේතු දෙකක් දක්වන්න.</p><p>(i) ....................................</p><p>(ii) ....................................</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "pq-2015-p2-A1c",
          label: "(c)",
          content: "<p>පහත දක්වා ඇති නීති, කාරක රීතිවලට අනුකූලව නිවැරදි ද නැතහොත් වැරදි ද යන්න දක්වන්න. යම් නීතියක් වැරදි නම් එහි නිවැරදි ආකාරය ද ලියා දක්වන්න.</p><p>(i) p {color: red}</p><p>p {font-type: Arial;}</p><p>(ii) body{color: red;}<br/>{background-color: yellow;}</p><p>(iii) h1, h3{color: blue;}</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        }
      ]
    },
    {
      id: "pq-2015-p2-A2",
      questionNumber: "2",
      content: "",
      questionType: "structured",
      totalMarks: 0,
      relatedNoteId: "note-3-1-3",
      subParts: [
        {
          id: "pq-2015-p2-A2a",
          label: "(a)",
          content: "<p>(i) එක්තරා සංඛ්‍යාංක උපක්‍රමයක (digital device) නිඛිල නිරූපණය කරනු ලබන්නේ බිටු 8 හි දෙකෙහි අනුපූරක ආකාරයට යැයි උපකල්පනය කරන්න. කෙසේ වෙතත් ආගණනයන්හි ප්‍රතිඵල දශමය ආකාරයෙන් මුද්‍රණය කරනු ලැබේ.</p><p>(ii) ඉහත උපක්‍රමයෙහි 10₁₀ නිරූපණය (representation) කරන ආකාරය දක්වන්න.</p><p>(iii) ඉහත උපක්‍රමයෙහි -25₁₀ නිරූපණය කරන ආකාරය දක්වන්න.</p><p>(iv) ඉහත (i) හා (ii) හි ඔබ විසින් ලබා දෙන ලද නිරූපණ භාවිතයෙන් ඉහත උපක්‍රමය මගින් 10₁₀ - 25₁₀ ගණනය කරන අයුරු පහදා දෙන්න.</p><p>(v) ඉහත (iii) කොටසින් ලබාගත් ප්‍රතිඵලය මුද්‍රණය කර ගැනීම සඳහා දශමය ආකාරයට පරිවර්තනය කර ගැනීමට අවශ්‍ය පියවර ලියා දක්වන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        },
        {
          id: "pq-2015-p2-A2b",
          label: "(b)",
          content: "<p>බැංකුවක් තම ගනුදෙනුකරුවන්ට ඉතිරි කිරීම් හා ජංගම ගිණුම් පවත්වා ගැනීම, ස්වයංක්‍රීය ටෙලර් යන්ත්‍ර (ATM) සේවා, ණය ලබා දීම්, දේපල කල්බදු ගැනීම්, විදේශ මුදල් හුවමාරුව වැනි සේවා ලබාදේ. බැංකුව විසින් තම ගනුදෙනුකරුවන්ට ඔවුන්ගේ ගිණුම් පාලනය කර ගැනීමේ බලතල වැඩි වශයෙන් ලබා දීම සඳහා අන්තර්ජාල බැංකු සේවා හඳුන්වා දීමට තීරණය කර ඇත. මෙමගින් ගනුදෙනුකරුවන්ට තම ගිණුම්වල ශේෂය තහවුරු කර ගැනීම, බිල්පත් ගෙවීම්, වෙනත් ගිණුම් සඳහා අරමුදල් හුවමාරුව හා බැංකුව සමග සන්නිවේදනය යන පහසුකම් මාර්ගගතව ලබා ගැනීමට අවශ්‍ය පහසුකම් සැපයේ.</p><p>(i) බැංකු ගනුදෙනුකරුවන් අන්තර්ජාල බැංකු සේවා භාවිත කිරීමට පසුබට විය හැකි හේතු දෙකක් ලියන්න.</p><p>(ii) මෙම යෝජිත අන්තර්ජාල බැංකු සේවා සැපයීම B2C නම් ව්‍යාපාරික වර්ගයක් බව ඔබ පිළිගන්නේ ද? ඔබේ පිළිතුර සනාථ කරන්න.</p><p>(iii) සිය ගනුදෙනුකරුවන්ගෙන් ලැබෙන ණය ඉල්ලුම්පත්වලින් සැලකිය යුතු සංඛ්‍යාවක් මූලික විමර්ශනයේ දී ම ප්‍රතික්ෂේප වන බව බැංකුවට පෙනීගොස් ඇත. එම නිසා විශේෂඥ පද්ධතියක් (Expert system) මත පදනම්වූ ණය පෙර සැකසුම් මෙවලමක් ගනුදෙනුකරුවන්ට ලබා දීමෙන් බැංකු සේවකයින්ගේ කාලය ඉතිරි කර ගන්නා අතර ම ගනුදෙනුකරුවන්ගේ කලකිරීම් අවම කර ගත හැකි බව ද කළමනාකාරිත්වය සිතයි. මෙම අදහසට ඔබ එකඟ වන්නේ ද? ඔබේ පිළිතුර සනාථ කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        }
      ]
    },
    {
      id: "pq-2015-p2-A3",
      questionNumber: "3",
      content: "",
      totalMarks: 0,
      relatedNoteId: "note-7-1-0",
      questionType: "structured",
      subParts: [
        {
          id: "pq-2015-p2-A3a",
          label: "(a)",
          content: "<p>(i) ශක්තිය මැවිය හැකි හෝ විනාශ කළ හැකි දෙයක් නොවේ. එය එක් ආකාරයක සිට තවත් ආකාරයකට මාරු කිරීම පමණක් කළ හැකි වේ.” යැයි ඇල්බට් අයින්ස්ටයින් විසින් ගෙන හැර දක්වා ඇත. ශක්තිය එක් ආකාරයක සිට තවත් ආකාරයකට වෙනස් වීමේ ක්‍රියාවලිය සංවෘත පද්ධතියක් වන්නේ දැයි ලියා දක්වන්න.</p><p>(ii) ඉහත (a) (i) හි ලබා දුන් ඔබේ පිළිතුර සනාථ කිරීම සඳහා එක් කරුණක් ගෙන හැර දක්වන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "pq-2015-p2-A3b",
          label: "(b)",
          content: "<p>b (i) හා b (ii) ප්‍රශ්නවලට පිළිතුරු සැපයීම සඳහා පහත දක්වා ඇති දත්ත අර්ථ දැක්වීමේ භාෂා (DDL) වගන්තිය සලකා බලන්න:</p><code>CREATE TABLE unit (\\n  instituteCode varchar(10) NOT NULL,\\n  unitCode varchar(10) NOT NULL,\\n  unitTitle varchar(50) DEFAULT NULL,\\n  PRIMARY KEY (instituteCode, unitCode),\\n  FOREIGN KEY (instituteCode) REFERENCES institute(instituteCode)\\n)</code><p>(i) මෙහි සඳහන් වගුවේ ප්‍රාථමික යතුර කුමක් ද?</p><p>(ii) ඉහත DDL හි භාවිත කර ඇති ඒකාබද්ධ සංරෝධක (integrity constraints) මොනවා ද?</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "pq-2015-p2-A3c",
          label: "(c)",
          content: "<p>පහත වගුව සලකා බලන්න:</p><p>[DIAGRAM:A table is shown with 4 columns: index, name, address, class. It contains 3 rows of student data.]</p><table><thead><tr><th>index</th><th>name</th><th>address</th><th>class</th></tr></thead><tbody><tr><td>1022</td><td>S.M.G.D. Dayasiri</td><td>No. 15, Peradeniya Road, Kandy</td><td>8 B</td></tr><tr><td>566</td><td>G.M.D. Priyangani</td><td>No. 147/7, Katugasthota Road, Kandy</td><td>11 C</td></tr><tr><td>923</td><td>F.D.C. Jayasingha</td><td>\"Sadasiri\", Colombo Road, Mawanella</td><td>10 B</td></tr></tbody></table><p>(i) ඉහත වගුවේ ගණනීයතාව (cardinality) කුමක් ද?</p><p>(ii) ඉහත වගුවේ තත්ත්වය (degree) කුමක් ද?</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "small"
        }
      ]
    },
    {
      id: "pq-2015-p2-A4",
      questionNumber: "4",
      content: "",
      totalMarks: 0,
      relatedNoteId: "note-5-4-0",
      questionType: "structured",
      subParts: [
        {
          id: "pq-2015-p2-A4a",
          label: "(a)",
          content: "<p>පරිගණක පද්ධතියක මතකය බයිට යොමුගත අතර (byte addressable) එයට ඇත්තේ 4GB උපරිම භාවිත කළ හැකි මතක ප්‍රමාණයකි. එහි යොමු බසයේ (address bus) අවම පළල බිටුවලින් කොපමණ ද? ඔබේ ගණනය කිරීම් සියල්ල ම පැහැදිලි ව පෙන්වන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "pq-2015-p2-A4b",
          label: "(b)",
          content: "<p>මෙහෙයුම් පද්ධතියක් තුළ ක්‍රමලේඛයක් (program) හා ක්‍රියාවලියක් (process) අතර සම්බන්ධතාවය (relationship) කුමක් ද?</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "pq-2015-p2-A4c",
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
    id: "pq-2015-p2-B1",
    questionNumber: "1",
    content: "",
    questionType: "essay",
    totalMarks: 0,
    relatedNoteId: "note-4-3-0",
    subParts: [
      {
        id: "pq-2015-p2-B1a",
        label: "(a)",
        content: "<p>දී ඇති සත්‍යතා වගුවක් සඳහා බූලියානු ප්‍රකාශනයක් ව්‍යුත්පන්න කරන අයුරු පැහැදිලි කරන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "medium",
        relatedNoteId: "note-4-2-1"
      },
      {
        id: "pq-2015-p2-B1b",
        label: "(b)",
        content: "<p>ගෘහස්ථ විදුලි රැහැන් ඇදීමේ දී පඩිපෙළක සවි කරනු ලබන විදුලි පහනක් ක්‍රියාත්මක කිරීම සඳහා පහත දැක්වෙන පරිපථය යොදා ගන්නා ලදී.</p><p>[DIAGRAM:A circuit diagram for a two-way switch. An AC power source 'P' is connected to two switches, S1 and S2. Both switches can connect to one of two terminals, X or Y. The light bulb 'L' is connected between the Y terminal of S1 and the X terminal of S2. The circuit is arranged such that the bulb lights up when both switches are in the same position (both X or both Y).]</p><p>ඉහත පරිපථයේ දැක්වෙන ලෙසට L විදුලි පහන ක්‍රියාත්මක කිරීම සඳහා පඩිපෙළෙහි පහළ සහ ඉහළ S1 සහ S2 ස්විච දෙකක් ස්ථාපිත කර ඇත. පඩිපෙළ පහළ දී S1 ස්විචය මගින් දල්වන ලද විදුලි පහන පඩිපෙළ ඉහළ දී S2 ස්විචය මගින් නිවා දැමීමට ද පඩිපෙළ ඉහළ දී S2 ස්විචය මගින් දල්වන ලද විදුලි පහන පඩිපෙළ පහළ දී S1 ස්විචය මගින් නිවා දැමීමට ද හැකි වේ. තව ද යම් ස්විචයක් මගින් දල්වන ලද L විදුලි පහන එම ස්විචය මගින් ම නිවා දැමීමට ද හැකි වේ. ඉහත පරිපථයේ ස්විචයක් X ස්ථානයට සහ Y ස්ථානයට සම්බන්ධ වී ඇති අවස්ථා සත්‍යතා අගයන් 1 සහ 0 මගින් පිළිවෙළින් නිරූපණය වන බව ද, L විදුලි පහන දැල්වී සහ නිවී ඇති අවස්ථා සත්‍යතා අගයන් 1 සහ 0 මගින් පිළිවෙළින් නිරූපණය වන බව ද උපකල්පනය කරන්න.</p><p>(i) ඉහත පරිපථයේ ක්‍රියාකාරිත්වය නිරූපණය කිරීම සඳහා සත්‍යතා වගුවක් ගොඩනගන්න.</p><p>(ii) ඉහත (i) කොටසේ දී ඔබ ලබාගත් සත්‍යතා වගුව නිරූපණය කිරීම සඳහා බූලියානු ප්‍රකාශනයක් ව්‍යුත්පන්න කරන්න.</p><p>(iii) ඉහත (ii) දී ලබා ගත් බූලියානු ප්‍රකාශනයේ කාර්යයට සමතුල්‍ය වන තාර්කික ද්වාරය කුමක් ද?</p><p>(iv) ඉහත (ii) කොටසේ දී ලබා ගත් බූලියානු ප්‍රකාශනය සඳහා NOT, AND සහ OR ද්වාර පමණක් භාවිත කරමින් තාර්කික පරිපථයක් ගොඩනගන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large"
      }
    ]
  },
  {
    id: "pq-2015-p2-B2",
    questionNumber: "2",
    content: "",
    questionType: "essay",
    totalMarks: 0,
    relatedNoteId: "note-6-9-0",
    subParts: [
      {
        id: "pq-2015-p2-B2a",
        label: "(a)",
        content: "<p>125.214.169.218 යන IP ලිපිනය www.doenets.lk සේවාදායකය (server) සඳහා පවරා ඇත. ping 125.214.169.218 විධානය A නම් යන්ත්‍රයක සිට නිකුත් කළ විට 20ms වට චාරිකා කාලයක් (round trip time (RTT)) වාර්තා විය. කෙසේ වෙතත් මද වෙලාවකට පසු ping www.doenets.lk විධානය A නම් යන්ත්‍රයේ සිට ම ලබා දුන් විට දෝෂයක් ඇති බව වාර්තා විය.</p><p>(i) ඉහත සංසිද්ධිය විස්තර කිරීමට සේවාදායකය, A යන්ත්‍රය හා අවශ්‍ය වන අනෙකුත් උපකරණ ඇතුළත් ව ජාල සටහනක් අඳින්න.</p><p>(ii) ඉහත චර්යාව පැවැතීම සඳහා හේතු දෙකක් හඳුනාගෙන මේවා ඉහත (a) (i) කොටස සඳහා අඳින ලද ජාල සටහන භාවිත කරමින් පැහැදිලි කරන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large"
      },
      {
        id: "pq-2015-p2-B2b",
        label: "(b)",
        content: "<p>කිසියම් සංවිධානයකට වෙන් කරන ලද එක් පොදු (public) ලිපිනයක් පමණක් පවතින අතර එය 192.248.17.1 වේ. මෙම සංවිධානය සතු පරිගණක 100 කින් සමන්විත වූ ස්ථානීය පෙදෙස් ජාලයක (LAN) ඇති පරිගණක මගින් වෙබ් අතරික්සීමට (web browsing) ඉඩ ලබාදීමට මෙම සංවිධානය තීරණය කර තිබේ. තව ද මෙම සංවිධානය එහි අන්තර්ජාල සම්බන්ධතාවයේ භාවිතාව ප්‍රශස්ත මට්ටමකට ගෙන ඒමට අදහස් කර ඇත්තේ හැකිතාක් දුරට සම්බන්ධතාව (link) මත පවතින තදබදය අඩු කිරීමෙනි. ඉහත අවශ්‍යතා තෘප්ත කිරීම පිණිස ජාල සටහනක් අඳින්න. ඔබ විසින් ගන්නා ලද ප්‍රධාන තීරණ පැහැදිලි කරන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-6-12-0"
      }
    ]
  },
  {
    id: "pq-2015-p2-B3",
    questionNumber: "3",
    content: "<p>තොරතුරු තාක්ෂණය පිලිබඳ ජාතික සරසවිය, පිළිගත් විශ්වවිද්‍යාලයකි. මෙම ආයතනය මගින් ප්‍රථම හා පශ්චාත් උපාධි වැඩසටහන්, ඩිප්ලෝමා, තොරතුරු තාක්ෂණය සහ ව්‍යාපාර කළමනාකරණය පිළිබඳ කෙටි පාඨමාලා පවත්වනු ලබයි. ශිෂ්‍ය කේන්ද්‍රීය අන්තර් ක්‍රියාකාරී ඉගෙනුම් පරිසරයක් ලබාදෙන ලෙස සැලසුම් කරන ලද නවින පරිගණක විද්‍යාගාර සහ නවීන පන්තිකාමර ඉහත පාඨමාලා පැවැත්වීම සඳහා යොදා ගනු ලබයි. ඈත පළාත්වලින් ලැබෙන විමසීමේ ප්‍රමාණය වැඩිවීම මගින් මෙම ආයතනයේ නාමය, රටපුරා ජනප්‍රිය වී ඇති බව මෙම විශ්වවිද්‍යාලයේ කළමනාකාරිත්වය වටහා ගෙන ඇත. තවදුරටත් මෑතක දී කරන ලද අධ්‍යයනයකින් හෙළිදරව් වී ඇත්තේ කාර්යබහුල කාර්ය සටහනකට (busy work schedule) අනුව වැඩ කරන අධ්‍යාපනයට වැය කළ හැකි කාලය සීමාසහිත වූ වෘත්තිකයන් අතර ද ඩිප්ලෝමා හා කෙටි පාඨමාලා ඉතා ජනප්‍රිය බව ය. එම නිසා නව අගයන් එකතු කරන ලද සේවා සැපසීම සහ නව වෙළෙඳපොළ ඇඳා ගැනීම යන අරමුණු සහිත ව දුරස්ථ අධ්‍යාපන වැඩසටහන් යෝජනා කර ඇත.</p>",
    questionType: "essay",
    totalMarks: 0,
    relatedNoteId: "note-1-6-0",
    subParts: [
      {
        id: "pq-2015-p2-B3a",
        label: "(a)",
        content: "<p>ඉහත දුරස්ථ අධ්‍යාපන වැඩසටහන ක්‍රියාත්මක කිරීම සඳහා තොරතුරු හා සන්නිවේදන තාක්ෂණය මත පදනම් වූ පද්ධතියක් යෝජනා කරන්න. සරල සටහනක් මගින් එහි ප්‍රධාන කොටස් විස්තර කරන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large"
      },
      {
        id: "pq-2015-p2-B3b",
        label: "(b)",
        content: "<p>යෝජිත පද්ධතියේ වාසි තුනක් පැහැදිලි කරන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "medium",
        relatedNoteId: "note-1-7-1"
      },
      {
        id: "pq-2015-p2-B3c",
        label: "(c)",
        content: "<p>යෝජිත පද්ධතියේ අභියෝග තුනක් සාකච්ඡා කරන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "medium",
        relatedNoteId: "note-1-7-2"
      },
      {
        id: "pq-2015-p2-B3d",
        label: "(d)",
        content: "<p>ඉහත දක්වා ඇති සමහර අභියෝග නියෝජිත තාක්ෂණය පාදක වූ ක්‍රමෝපාය මගින් ජයගත හැකි බව විශ්වවිද්‍යාලීය කළමනාකාරිත්වය සිතයි. මෙම වගන්තිය සමග ඔබ එකඟ වන්නේ ද? ඔබේ පිළිතුර සනාථ කරන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "medium",
        relatedNoteId: "note-13-2-0"
      }
    ]
  },
  {
    id: "pq-2015-p2-B4",
    questionNumber: "4",
    content: "",
    questionType: "essay",
    totalMarks: 0,
    relatedNoteId: "note-9-5-0",
    subParts: [
      {
        id: "pq-2015-p2-B4a",
        label: "(a)",
        content: "<p>ඉහළ මට්ටමේ ක්‍රමලේඛන භාෂා භාවිතයේ දී සම්පාදකයන් (interpreters) හෝ අර්ථව්‍යාഖ්‍යාකයන් (compilers) අවශ්‍ය වන්නේ ඇයි දැයි පැහැදිලි කරන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "small"
      },
      {
        id: "pq-2015-p2-B4b",
        label: "(b)",
        content: "<p>වාර විභාගයක දී ළමුන් ලබාගන්නා ලද ලකුණු වාර්තා කිරීම සඳහා පයිතන් ක්‍රමලේඛයක් ලියන ලෙස ඔබගේ ගුරුතුමා විසින් ඔබගෙන් ඉල්ලීමක් කර තිබේ. සෑම සිසුවෙක් ම එකම ප්‍රශ්න පත්‍ර තුනකට පෙනී සිට ඇති අතර සෑම ලකුණක්ම දී ඇත්තේ 100 න් වන අතර එය නිඛිල අගයක් (integer value) වේ. සෑම සිසුවකුම අනන්‍ය සුචි අංකයක් (index number) මගින් හඳුනා ගන්නා අතර සුචි අංකය ද නිඛිලයක් වේ. ඔබ විසින් පහත පෙන්වා දී ඇති ආකාරයට සිසුන්ගේ ලකුණු ‘marks.txt’ නමැති පාඨ ගොනුවේ (text file) වාර්තා කළ යුතු වේ.<br/>Index_no_1,mark_11,mark_12,mark_13<br/>Index_no_2,mark_21,mark_22,mark_23<br/>මෙහි<br/>Index_no_X : X වැනි සිසුවාගේ සුචි අංකය X = 1, ........., n<br/>mark_XY : X වැනි සිසුවා Y ප්‍රශ්න පත්‍රයට ගත් ලකුණු සංඛ්‍යාව Y = 1, 2, 3<br/>වරකට එක අයිතමය බැගින් යතුරු පුවරුව තුළින් සිසුන්ගේ සුචි අංක සහ ලකුණු ඇතුළත් කළ යුතු වේ. සුචි අංකය –1 ලෙස ඇතුළත් කළ විට ක්‍රමලේඛය නැවතිය යුතු වේ.</p><p>(i) ගැලීම් සටහනක් භාවිතයෙන් මෙම ක්‍රමලේඛය සඳහා ඇල්ගොරිතමයක් යෝජනා කරන්න.</p><p>(ii) ඔබගේ ගැලීම් සටහන ක්‍රියාත්මක කිරීම සඳහා පයිතන් ක්‍රමලේඛනයක් ලියන්න.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large",
        relatedNoteId: "note-9-3-1"
      }
    ]
  },
  {
    id: "pq-2015-p2-B5",
    questionNumber: "5",
    content: "",
    questionType: "essay",
    totalMarks: 0,
    relatedNoteId: "note-8-2-0",
    subParts: [
      {
        id: "pq-2015-p2-B5a",
        label: "(a)",
        content: "<p>පහත පෙන්වා ඇති සංසිද්ධිය නිරූපණය කිරීමට භූතාර්ථ සම්බන්ධක ER සටහනක් අඳින්න. ඔබගේ රූපසටහනේ උපලක්ෂණ (attributes) හා ප්‍රාථමික යතුරු (primary keys) පැහැදිලි ව දැක්විය යුතු ය. ඔබගේ උපකල්පන වෙතොත් පැහැදිලි ව ප්‍රකාශ කරන්න.</p><p>ABC කැබ් සේවා සමාගම සතුව එකදු කාර් රථයක්වත් නොමැත. පෞද්ගලික කාර් රථ හිමියන්ට මෙම සමාගම හා ලියාපදිංචි විය හැකි අතර ඔවුන්ගේ කාර් රථ කුලියට දීමට ද හැකිය. සමහර රථ හිමියන් එක රථයකට වඩා සමාගමට ලබා දේ. සමාගම විසින් මෙම කාර් රථ සඳහා රියදුරන් කුලී පදනම මත බඳවා ගනු ලබන අතර මෙම කාර් රථ විවිධ දිනවල දී විවිධ රියදුරන් විසින් පැදවිය හැකිය. පාරිභෝගිකයන්ට විශ්වාසවන්ත සේවාවක් ලබා දීම සඳහා වාහන නඩත්තු කිරීම රථ හිමියන්ගේ වගකීමකි. සෑම කුලී ගමනක ම අවසානයේ දී රියදුරා විසින් තමා ඉන්නා ස්ථානය මෙම සමාගමට දන්වයි. පාරිභෝගිකයකු කාර් රථයක් ඉල්ලා සිටි විටක දී සමාගම විසින් පාරිභෝගිකයා කථා කළ ස්ථානය සමීපයේ ඇති කාර් රථ පිළිබඳව සොයා බලයි. කාර් රථයක් පවතින්නේ නම්, එය පාරිභෝගිකයාට අනුයුක්ත කර, ඒ බව පාරිභෝගිකයාට හා කාර් රථයේ රියදුරු යන දෙපළට ම දන්වනු ලබයි. තම සේවාව වඩා කාර්යක්ෂමව ලබා දීම සඳහා පාරිභෝගිකයාට සමීපතම ස්ථානයේ ඇති කාර් රථයට ඔහුව අනුයුක්ත කිරීම සඳහා සමාගමට හැකි උපරිම උත්සාහය ගනු ලබයි. මෙම සමාගම ඔවුන්ගේ සේවය නිරන්තරයෙන් ලබා ගන්නා මගීනට වඩා හොඳ සේවයක් ලබා දීම සඳහා නම, ලිපිනය හා දුරකථන අංකය වැනි පාරිභෝගික තොරතුරු ආයතනය සතුව තබා ගනී. පාරිභෝගිකයාට ද රියදුරු විසින් ලබා දුන් සේවය සම්බන්ධව තමන් සතුටු වන්නේ ද යන වග ආයතනයට දැන්විය හැකිය. පාරිභෝගිකයින්ට රියදුරන් අනුයුක්ත කිරීමේ දී මෙම තොරතුරු භාවිත කරනු ලැබේ. සැම කාර් රථ හිමිකරුවෙක් ම, කාර් රථයක් ම, රියදුරෙක් ම හා පාරිභෝගිකයකු ම අනන්‍යව හඳුන්වා දීම සඳහා පිළිවෙළින් \"ownerId\", \"carId\", \"driverId\" හා \"custId\" භාවිත කරනු ලැබේ.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large"
      }
    ]
  },
  {
    id: "pq-2015-p2-B6",
    questionNumber: "6",
    content: "",
    questionType: "essay",
    totalMarks: 0,
    relatedNoteId: "note-7-6-0",
    subParts: [
      {
        id: "pq-2015-p2-B6a",
        label: "(a)",
        content: "<p>පහත විස්තර කෙරෙන පුස්තකාල පද්ධතියේ දළ විශ්ලේෂණයක් පෙන්වීමට සන්දර්භ රූප සටහනක් (context diagram) අඳින්න. ඔබගේ රූප සටහනේ පවතින බාහිර භූතාර්ථ (external entities) සහ දත්ත ගැලීම් (data flows) පැහැදිලිව පෙන්වන්න. ඔබ විසින් ගන්නා ලද පිළිගත හැකි උපකල්පන වෙතොත් ප්‍රකාශ කරන්න.</p><p>ජාතික තොරතුරු තාක්ෂණ පුස්තකාලය (NITL) එහි පරිශීලකයන්ට මාර්ගගතව (online) “පුස්තකාල තොරතුරු සැකසීමේ පද්ධතිය (LIPS)” මගින් විද්‍යුත් පොත් (e-books) ලබා දෙයි.</p><p>LIPS හි සාමාජිකයකු වීමට පුද්ගලයකු අයදුම්පතක් NITL වෙත ඉදිරිපත් කළ යුතු වේ. NITL මගින් මෙම අයදුම්පත ඇගයීමට ලක්කරනු ලබන අතර එය අනුමත වුවහොත් LIPS වෙත ඇතුළත් කරනු ලැබේ. අයදුම්පත ඇතුළත් කිරීමෙන් අනතුරුව LIPS මගින් NITL වෙත ක්‍රියාත්මක වීමේ කේතයක් (activation code) නිකුත් කරනු ලබන අතර NITL එය අදාළ පුද්ගලයා වෙත ලබාදෙයි. මෙම කේතය ලද පසු ඕනෑම පුද්ගලයකු LIPS හි සාමාජිකයකු බවට පත්වේ. මෙම ක්‍රියාත්මක වීමේ කේතය LIPS වෙත ඇතුළත් කිරීමෙන් සාමාජිකයකුට තමාගේ පරිශීලක නාමය (username) සහ මුර පදය (password) ලබා ගත හැකි වේ. ඉන් පසු මෙම පරිශීලක නාමය හා මුර පදය LIPS වෙත ලබා දීමෙන් සාමාජිකයකුට විද්‍යුත් පොත් (e-books) සඳහා ප්‍රවේශ විය හැකි ය.</p>",
        marks: 0,
        requiresAnswerBox: true,
        answerBoxSize: "large"
      }
    ]
  }
];

export const paper2015_p2: Paper = {
  id: "al-ict-paper-2015-p2",
  title: "A/L ICT Paper II - 2015",
  examName: {
    sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
    tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
    english: "General Certificate of Education (Adv. Level) Examination"
  },
  year: 2015,
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

    