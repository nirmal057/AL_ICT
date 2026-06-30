
import type { Paper, StructuredQuestion } from "../../types";

const partA: StructuredQuestion[] = [
    {
      id: "al-2011-p2-1a",
      questionNumber: "1(a)",
      content: `<p>ප්‍රථම පරිගණක පරම්පරා හතර සඳහා භාවිත කර ඇති ප්‍රධාන තාක්ෂණ සඳහන් කරන්න.</p>`,
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-2-1-2",
      requiresAnswerBox: true,
      answerBoxSize: "medium"
    },
    {
      id: "al-2011-p2-1b",
      questionNumber: "1(b)",
      content: `<p>ක්‍රමලේඛ ක්‍රියාත්මක වීමේදී භාවිත වන ආහරණ - ක්‍රියාකරවුම් චක්‍රය (Fetch-execute cycle) නිරූපණය කිරීමට රූපසටහනක් අඳින්න.</p>`,
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-2-2-5",
      requiresAnswerBox: true,
      answerBoxSize: "large"
    },
    {
      id: "al-2011-p2-1c",
      questionNumber: "1(c)",
      content: `<p>බිටු අටේ (8-bit) දෙකෙහි අනුපූරක (Two's complement) අංක ගණිතය මගින් 5+(−3) ආගණනය කරන අයුරු පෙන්වන්න. වැඩිම වෙසෙසි බිටුව (Most significant bit) මගින් උත්පාදනය වූ ආනීතය (Carry) සමග ඔබ කටයුතු කරන ආකාරය පැහැදිලි කරන්න.</p>`,
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-3-1-3",
      requiresAnswerBox: true,
      answerBoxSize: "medium"
    },
    {
      id: "al-2011-p2-2a",
      questionNumber: "2(a)",
      content: `<p>FAT32 හා NTFS ගොනු පද්ධතිවලට අනුකූලව, පහත දක්වා ඇති වගුවෙහි පළමුවන තීරයෙහි දක්වා ඇති ලක්ෂණවලට අනුරූප වන දෙවැනි හා තෙවැනි තීරුවල අඩංගු දැ අතුරෙන් වඩාත් සුදුසු දෙය රවුම් කර දක්වන්න.</p><div class="my-4"><table class="w-full border text-center"><thead><tr class="bg-muted"><th class="p-2 border">ලක්ෂණය</th><th class="p-2 border" colspan="2">ගොනු පද්ධතිය</th></tr></thead><tbody><tr><td class="p-2 border"></td><td class="p-2 border"><b>FAT32</b></td><td class="p-2 border"><b>NTFS</b></td></tr><tr><td class="p-2 border text-left">ගොනු හා ෆෝල්ඩර සඳහා ආරක්ෂාව</td><td class="p-2 border">සපයයි / නොසපයයි</td><td class="p-2 border">සපයයි / නොසපයයි</td></tr><tr><td class="p-2 border text-left">ගොනු හා ෆෝල්ඩර සඳහා සම්පීඩනය</td><td class="p-2 border">සපයයි / නොසපයයි</td><td class="p-2 border">සපයයි / නොසපයයි</td></tr><tr><td class="p-2 border text-left"> උපරිම ගොනු විශාලත්වය</td><td class="p-2 border">2GB / 4GB</td><td class="p-2 border">1TB / 16TB</td></tr><tr><td class="p-2 border text-left">උපරිම ධාවක විශාලත්වය</td><td class="p-2 border">2TB / 8TB</td><td class="p-2 border">128TB / 256TB</td></tr></tbody></table></div>`,
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-5-2-0",
      requiresAnswerBox: true,
      answerBoxSize: "large"
    },
    {
      id: "al-2011-p2-2b",
      questionNumber: "2(b)",
      content: `<p>පරිගණකයට බිටු-18 (18-bit) අතථ්‍යරූපී මතක යොමු අවකාශයක් (Virtual memory address space) ඇති අතර බිටු හයක් පිටු යොමුව (Page address) සඳහා භාවිත කර ඇත.</p><p>(i) ඉහත යොමු කිරීමේ ක්‍රමය මගින් නිර්වචනය කරන ලද මුළු පිටු සංඛ්‍යාව ගණනය කරන්න.</p><p>(ii) පහත දක්වා ඇති අතථ්‍යරූපී මතක යොමුව සලකන්න.<br>010111000000111100<br>මෙම යොමුවේ (Address), පිටුව (Page) හා විස්ථාපනය (අනුලම්බය) [Displacement (Offset)] කුමක් ද?</p>`,
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-5-4-0",
      requiresAnswerBox: true,
      answerBoxSize: "medium"
    },
    {
      id: "al-2011-p2-2c",
      questionNumber: "2(c)",
      content: "<p>ක්‍රියායන නිර්මාණයේ සිට අවසන් වීම දක්වා මෙහෙයුම් පද්ධති ක්‍රියායන තත්ව රූප සටහන (Operating system process transition diagram) අඳින්න.</p>",
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-5-3-1",
      requiresAnswerBox: true,
      answerBoxSize: "large"
    },
    {
      id: "al-2011-p2-3a",
      questionNumber: "3(a)",
      content: "<p>පහත දැක්වෙන සංසිද්ධිය සලකා බලන්න.<br>පාසලක සිසුහු වොලිබෝල්, ජවන හා පිටිය මලල ක්‍රීඩා, මේස පන්දු ආදී විවිධ ක්‍රීඩා සඳහා සහභාගි වෙති. ක්‍රීඩා සඳහා සහභාගි වන සිසු සිසුවියන්ගේ ඇතුළත්වීමේ අංකය, ශිෂ්‍ය නාමය, නිවසේ ලිපිනය, පන්තිය හා සහභාගි වන ක්‍රීඩා ඇතුළත් නාම ලේඛනයක් පවත්වාගෙන යාමට විදුහල්පතිවරයාට අවශ්‍යව ඇත. එක් සිසුවකුට එක් එක් ක්‍රීඩාවකට වඩා සහභාගි විය හැකිය. එක් නිශ්චිත ක්‍රීඩාවක් සඳහා එක් සිසුවකුට වඩා වැඩි සංඛ්‍යාවක් සිටිය හැකිය. එක් එක් ශිෂ්‍යයාට කලින් නියම කරන ලද පැය ගණනක් ක්‍රීඩාවක් සඳහා සහභාගී විය හැකිය.</p><p>ඉහත සංසිද්ධිය සඳහා ER සටහනක් අඳින්න.</p>",
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-8-2-0",
      requiresAnswerBox: true,
      answerBoxSize: "large"
    },
    {
      id: "al-2011-p2-3b",
      questionNumber: "3(b)",
      content: `<p>ඉහත (a) කොටසේදී හඳුනාගත් සම්බන්ධතාවෙහි/සම්බන්ධතා වල ගණනීයතාව එකට-එකක් (one-to-one) එකට-බොහෝමයක් (one-to-many) හෝ බොහෝමයකට-බොහෝමයක් (many-to-many) වන්නේ දැයි හේතු දක්වමින් වර්ගීකරණය කරන්න.</p><div class="my-4"><table class="w-full border text-center"><thead><tr class="bg-muted"><th class="p-2 border">සම්බන්ධතාව</th><th class="p-2 border">ගණනීයතාව</th><th class="p-2 border">හේතුව</th></tr></thead><tbody><tr><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr><tr><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr></tbody></table></div>`,
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-8-2-0",
      requiresAnswerBox: true,
      answerBoxSize: "medium"
    },
    {
      id: "al-2011-p2-3c",
      questionNumber: "3(c)",
      content: "<p>“ER සටහන් තුළ, සම්බන්ධතා (Relationships) මත උපලක්ෂණ (Attributes) පැවරීමට ඉඩ නොදේ.”<br>මෙම කියමන සත්‍ය හෝ අසත්‍ය දැයි ප්‍රකාශ කරන්න. දී ඇති සංසිද්ධිය භාවිත කරමින් ඔබේ පිළිතුර පැහැදිලි කරන්න.</p>",
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-8-2-0",
      requiresAnswerBox: true,
      answerBoxSize: "medium"
    },
    {
      id: "al-2011-p2-3d",
      questionNumber: "3(d)",
      content: `<p>දත්ත සමුදාය සැලසුම්කරුවෙක් ඉහත පද්ධතිය සඳහා පහත දැක්වෙන සම්බන්ධය (Relation) යෝජනා කළේය. මෙම සම්බන්ධයේ ඇති දුර්වලතා දෙකක් දක්වා, ඒ සඳහා අවශ්‍ය වෙනස් කිරීම් යෝජනා කරන්න.</p><p class="font-mono my-2 p-2 bg-muted rounded">Student (admissionNo, studentName, address, class, sports, duration)</p>`,
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-8-3-0",
      requiresAnswerBox: true,
      answerBoxSize: "medium"
    },
    {
      id: "al-2011-p2-4a",
      questionNumber: "4(a)",
      content: `<p>පහත දක්වා ඇති මෘදුකාංග “පද්ධති මෘදුකාංග” (System software) හෝ “යෙදුම් මෘදුකාංග” (Application software) ලෙස වර්ගීකරණය කරන්න.</p><div class="my-4"><table class="w-full border"><thead><tr class="bg-muted"><th class="p-2 border">මෘදුකාංගය</th><th class="p-2 border">වර්ගය</th></tr></thead><tbody><tr><td class="p-2 border">සම්පාදකය (Compiler)</td><td class="p-2 border"></td></tr><tr><td class="p-2 border">වෙබ් බ්‍රව්සරය (Web Browser)</td><td class="p-2 border"></td></tr><tr><td class="p-2 border">සන්ධාරකය (Linker)</td><td class="p-2 border"></td></tr><tr><td class="p-2 border">මාධ්‍ය වාදකය (Media Player)</td><td class="p-2 border"></td></tr><tr><td class="p-2 border">පෙළ සංස්කාරකය (Text Editor)</td><td class="p-2 border"></td></tr></tbody></table></div>`,
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-1-3-2",
      requiresAnswerBox: true,
      answerBoxSize: "medium"
    },
    {
      id: "al-2011-p2-4b",
      questionNumber: "4(b)",
      content: "<p>දත්ත ගබඩා කිරීම/සමුද්ධරණය (Retrieve) සඳහා භාවිත වන මාධ්‍යය (Medium) පාදක කරගෙන පරිගණක ආචයන (Storage) පද්ධති ආකාර තුනකට වර්ග කළ හැකිය. මෙම ආකාර තුන සඳහන් කර, එක් එක් ආකාරයට උදාහරණය බැගින් ලබා දෙන්න.</p>",
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-2-4-0",
      requiresAnswerBox: true,
      answerBoxSize: "medium"
    },
    {
      id: "al-2011-p2-4c",
      questionNumber: "4(c)",
      content: `<p>සමාගමක වැටුප් ලැයිස්තු පද්ධතියෙහි ගනුදෙනු ගොනුවේ (Transaction file) සේවක අංකය, වැඩකළ පැය ගණන, දෙපාර්තමේන්තු කේතය හා සති අංකය අඩංගු වේ. පද්ධතියෙහි “Employee master” හා “Department master” යන වගු පවතී යැයි උපකල්පනය කරන්න. පහත වගුවේ එක් එක් දත්ත අයිතමය සඳහා වඩාත් ම සුදුසු සප්‍රමාණතා පිරික්සුම (Validation check) රවුම් කර දක්වන්න.</p><div class="my-4"><table class="w-full border text-center"><thead><tr class="bg-muted"><th class="p-2 border">දත්ත අයිතමය</th><th class="p-2 border" colspan="3">සප්‍රමාණතා පිරික්සුම</th></tr></thead><tbody><tr><td class="p-2 border text-left">සේවක අංකය</td><td class="p-2 border">ප්‍රත්‍යක්ෂතා (Presence)</td><td class="p-2 border">පරාස (Range)</td><td class="p-2 border">ප්‍රරූප (Type)</td></tr><tr><td class="p-2 border text-left">වැඩකළ පැය ගණන</td><td class="p-2 border">ප්‍රත්‍යක්ෂතා</td><td class="p-2 border">පරාස</td><td class="p-2 border">ප්‍රරූප</td></tr><tr><td class="p-2 border text-left">දෙපාර්තමේන්තු කේතය</td><td class="p-2 border">ප්‍රත්‍යක්ෂතා</td><td class="p-2 border">පරාස</td><td class="p-2 border">ප්‍රරූප</td></tr><tr><td class="p-2 border text-left">සති අංකය</td><td class="p-2 border">ප්‍රත්‍යක්ෂතා</td><td class="p-2 border">පරාස</td><td class="p-2 border">ප්‍රරූප</td></tr></tbody></table></div>`,
      totalMarks: 0,
      questionType: "structured",
      relatedNoteId: "note-1-5-2-2",
      requiresAnswerBox: true,
      answerBoxSize: "large"
    },
    {
      id: "al-2011-p2-4d",
      questionNumber: "4(d)",
      content: "<p>“වීඩියෝ සම්මන්ත්‍රණ පැවැත්වීම” (Video conferencing) සහ “කර්තෘ හිමිකම” (Copyright) යන පද විස්තර කරන්න.</p>",
      totalMarks: 0,
      questionType: "structured",
      requiresAnswerBox: true,
      answerBoxSize: "medium"
    }
];

const partB: StructuredQuestion[] = [
    {
        id: "al-2011-p2-b-5",
        questionNumber: "5",
        content: "",
        questionType: "essay",
        totalMarks: 15,
        subParts: [
          {
            id: "al-2011-p2-b-5a",
            label: "(a)",
            marks: 0,
            content: "<p>ආකෘතික පරිගණකයක (Typical computer) මධ්‍ය සැකසුම් ඒකකයේ (CPU) ප්‍රධාන සංරචක තුන මොනවා ද? මෙම සංරචක තුනෙහි ප්‍රධාන කාර්යයන් ලැයිස්තුගත කරන්න.</p>",
            relatedNoteId: "note-2-2-2"
          },
          {
            id: "al-2011-p2-b-5b",
            label: "(b)",
            marks: 0,
            content: "<p>මතකය කළමනාකරණයේදී ආචයනය සුසංහිතකරණය (Storage compaction) අවශ්‍ය වන්නේ මන්දැයි කෙටියෙන් පැහැදිලි කරන්න.</p>"
          },
          {
            id: "al-2011-p2-b-5c",
            label: "(c)",
            marks: 0,
            content: "<p>අවසාන පොකුර (Cluster) අසම්පූර්ණ ලෙසින් පිරවුමකදී ප්‍රමාණය බිටු 10400 ක් වූ ගොනුවක ගොනු අවකාශයෙහි (File space) සිදුවන නාස්තිය ගණනය කරන්න. (පොකුරක ප්‍රමාණය බයිට් 512 ක් ලෙස උපකල්පනය කරන්න.)</p>"
          },
          {
            id: "al-2011-p2-b-5d",
            label: "(d)",
            marks: 0,
            content: `<p>අංකිත පරිපථයක (Digital circuit) ආදානය ලෙස ද්විමය සංඛ්‍යාංක හතරක් ගෙන, එම ද්විමය සංඛ්‍යාංක හතරෙන් නිරූපිත දශමය අගය ප්‍රථමක සංඛ්‍යාවක් (Prime number) නම් (1න් සහ එම සංඛ්‍යාවෙන් පමණක් බෙදෙන සංඛ්‍යා) ප්‍රතිදානය ලෙස 1 ලබා දෙන අතර, අන් සෑම විටම 0 ලබා දේ. සෑම ද්විමය සංඛ්‍යාංක හතරකින්ම ධන දශමය අගයක් නිරූපණය වන බව උපකල්පනය කරන්න. (ලකුණ සඳහා කිසිදු බිටුවක් වෙන්කර නොමැත.)</p><p>(i) ඉහත පරිපථය විස්තර කිරීම සඳහා පහත දක්වා ඇති සත්‍යතා වගුව (Truth table) නිර්මාණය කර ඇත; මෙහි A, B, C හා D මගින් ද්විමය ආදාන හතර වැඩිම වෙසෙසි බිටුවේ සිට අඩුම වෙසෙසි බිටුව තෙක් නිරූපණය වන අතර, F(A, B, C, D) මගින් පරිපථයේ ප්‍රතිදානය නිරූපණය කෙරෙයි. පහත දක්වා ඇති සත්‍යතා වගුව, එම ආකාරයටම පිටපත් කරගෙන ප්‍රතිදාන තීරුව සම්පූර්ණ කරන්න.</p><Component id="2011-p2-b-5d-truthtable" /><p>(ii) ඉහත පරිපථයේ බූලීය ප්‍රකාශනය, ගුණිතවල එකතුවක් (Sum of products) ලෙස නිරූපණය කිරීමට බූලීය ප්‍රකාශනයක් ලියන්න.</p><p>(iii) ඉහත (ii) කොටස සඳහා ඔබ ලබා ගත් බූලීය ප්‍රකාශනය සඳහා තාර්කික පරිපථයක් (Logic gate) අඳින්න.</p>`
          }
        ]
    },
    {
        id: "al-2011-p2-b-6",
        questionNumber: "6",
        content: "",
        questionType: "essay",
        totalMarks: 15,
        subParts: [
          {
            id: "al-2011-p2-b-6a",
            label: "(a)",
            marks: 0,
            content: "<p>HTML ලේඛනයක් සම්බන්ධයෙන් “මූලාංග” (Elements) සහ “උපලක්ෂණ” (Attributes) යන පද විස්තර කරන්න.</p>",
            relatedNoteId: "note-10-3-0"
          },
          {
            id: "al-2011-p2-b-6b",
            label: "(b)",
            marks: 0,
            content: "<p>පහත දැක්වෙන එක එකක් මූලාංගයක් හෝ උපලක්ෂණයක් හෝ ලෙස හඳුනාගෙන ඒවායේ කාර්යයන් විස්තර කරන්න.</p><p>(i) br</p><p>(ii) href</p><p>(iii) src</p><p>(iv) html</p>",
            relatedNoteId: "note-10-3-0"
          },
          {
            id: "al-2011-p2-b-6c",
            label: "(c)",
            marks: 0,
            content: `<p>පහත දැක්වෙන රූප සටහනෙන් දැක්වෙන, ශ්‍රී ලංකාවේ ඇති සංචාර මෙහෙයුම් සමාගමක වෙබ් පිටුවක කොටස සලකන්න.</p><div class="my-4 p-4 border rounded-lg"><h4 class="font-bold text-center">A web page snippet is shown. The main heading is 'Wildlife Tours to Sri Lanka' in a large, stylized font. Below it is a paragraph of text: 'Sri Lanka is famous for its wildlife. There are many National parks and Sanctuaries where one can see animals in their natural habit.' Below this, there is a smaller heading 'Highlights'. To the left of the highlights section is a thumbnail image of elephants. To the right of the image is the text 'Why visit Sri Lanka?' followed by three radio buttons labeled 'Blue Whale', 'Leopard', and 'Elephant'.</h4></div><p>ඉහත රූප සටහන භාවිත කරමින් පහත දක්වා ඇති ප්‍රශ්නවලට පිළිතුරු සපයන්න.</p><p>(i) ඉහත HTML ලේඛනයේ සියලුම ජේද ඒරියල් අකුරු වර්ගය (Arial font), අකුරු ප්‍රමාණය 14 සහ නිල් පැහැයෙන් හැඩහුරු (Format) ගැන්වීමට අවශ්‍යව තිබේ. ඡේදය සඳහා අවශ්‍ය CSS කේත ඛණ්ඩය ලියා දක්වන්න.</p><p>(ii) ඉහත දැක්වෙන HTML ලේඛනය තුළ පහත දැක්වෙන ලේබලය (Tag) මගින් ඇති කෙරෙන බලපෑම විස්තර කරන්න.<br>[CODE:html]<a href = "elephants.jpg"><img src = "elephants_tnl.jpg" ALT = "Tour to Yala" width = "288cm" height = "156cm" style = "border:none" /></a>[/CODE]</p><p>(iii) 'Blue Whale', 'Leopard' සහ 'Elephant' ලෙස ලේබල් කර ඇති රේඩියෝ බොත්තම් තුනෙහි එකතුව ඉහත HTML ලේඛනයේ නිර්මාණය කිරීම සඳහා අවශ්‍ය HTML කේත ඛණ්ඩය ලියන්න.</p><p>(iv) 'Wild Sri Lanka' යන ශීර්ෂය (Caption) සහිතව පහත පෙන්වා ඇති ආකාරයේ මිල ගණන් දැක්වෙන වගුවක් ඉහත HTML ලේඛනයට ඇතුළත් කිරීමට සමාගමට අවශ්‍ය ව ඇත.</p><div class="my-4 p-4 border rounded-lg"><h4 class="font-bold text-center">A simple table is shown with a caption 'Wild Sri Lanka'. It has two columns, 'Days' and 'Price'. The first row has '7' and 'US$910'. The second row has '10' and 'US$1220'.</h4></div><p>මෙම වගුව නිර්මාණය කිරීමට අවශ්‍ය HTML කේත ඛණ්ඩය ලියන්න.</p>`,
             "relatedNoteId": "note-10-5-0"
          }
        ]
    },
    {
        id: "al-2011-p2-b-7",
        questionNumber: "7",
        content: "",
        questionType: "essay",
        totalMarks: 15,
        subParts: [
          {
            id: "al-2011-p2-b-7a",
            label: "(a)",
            marks: 0,
            content: "<p>A සහ B නමින් එකකට පරිගණක 10 බැගින් ඇතුළත් වන පරිදි භෞතික ව වෙන්වූ ජාල 2ක් නිර්මාණය කරන ලෙස ඔබට පවසනු ලැබේ. A හා B ජාල සඳහා IP ලිපින පිළිවෙළින් 10.32.5.0 සහ 10.32.6.0 වේ. ජාල 2 හි අන්තර්ගත පරිගණක එකක් අනෙක හා සන්නිවේදනය කර ගැනීම අවශ්‍යව පවතී.</p><p>(i) ඉහත ජාලය සඳහා යෝග්‍ය උපජාල වසනයක් (Subnet mask) යෝජනා කරන්න.</p><p>(ii) මෙම භෞතික ජාල දෙක එකිනෙක සන්නිවේදනය සඳහා සම්බන්ධ කිරීමට අවශ්‍ය ආම්පන්නය (Device) නම් කරන්න.</p><p>(iii) ඉහත ජාලය සඳහා ජාල රූප සටහනක් ඇඳ මෙම ජාල දෙකෙහි පවතින ආම්පන්න (Device) සඳහා පැවරීමට යෝග්‍ය IP ලිපින ලියා දක්වන්න.</p>",
            "relatedNoteId": "note-6-7-1"
          },
          {
            id: "al-2011-p2-b-7b",
            label: "(b)",
            marks: 0,
            content: "<p>(i) විශ්වසනීයතාව (Reliability) පදනම් කරගෙන TCP හා UDP නියමාවලි (Protocols) සසඳන්න.</p><p>(ii) සම - සම [Peer-to-peer (P2P)] සහ අනුග්‍රහ - සේවා දායකය (Client-server) යන ආකෘති, විසිරුණු යෙදුම් නිර්මිත (Distributed application architectures) වේ. මේවා අතර වෙනස දක්වන්න.</p><p>(iii) ජාලයක පවතින නාභි (Hubs) සහ ස්විච (Switches) අතර වෙනස්කම් ලැයිස්තුගත කරන්න.</p>",
            "relatedNoteId": "note-6-8-0"
          }
        ]
    },
    {
        id: "al-2011-p2-b-8",
        questionNumber: "8",
        content: "",
        questionType: "essay",
        totalMarks: 15,
        subParts: [
          {
            id: "al-2011-p2-b-8a",
            label: "(a)",
            marks: 0,
            content: "<p>දියඇලි (Waterfall) මෘදුකාංග ක්‍රියාවලි සංවර්ධන ආකෘතියෙහි අවස්ථා හඳුනාගෙන විස්තර කරන්න.</p>",
            "relatedNoteId": "note-7-3-0"
          },
          {
            id: "al-2011-p2-b-8b",
            label: "(b)",
            marks: 0,
            content: "<p>පද්ධතියක කාර්යබද්ධ (Functional) සහ කාර්යබද්ධ නොවන (Non-functional) අවශ්‍යතා (Requirements) විස්තර කරන්න. ජංගම දුරකථනයක කාර්යබද්ධ අවශ්‍යතා දෙකක් සහ කාර්යබද්ධ නොවන අවශ්‍යතා තුනක් හඳුන්වන්න.</p>",
            "relatedNoteId": "note-7-6-0"
          },
          {
            id: "al-2011-p2-b-8c",
            label: "(c)",
            marks: 0,
            content: "<p>ඒකක (Unit), අනුකලිත (Integrated) සහ පිළිගැනුම් (Acceptance) පිරික්සුම්වල අරමුණු විස්තර කරන්න. එක් එක් පිරික්සුම් ක්‍රියාවලියෙහි වගකීම දරන අය කවුරු ද?</p>",
            "relatedNoteId": "note-7-8-0"
          },
          {
            id: "al-2011-p2-b-8d",
            label: "(d)",
            marks: 0,
            content: "<p>ඔබ නව ජංගම දුරකථනයක් මිලට ගැනීමට සැලසුම් කරන්නේ යැයි ද එහි ක්‍රියාකාරිත්වය පරීක්ෂා කිරීමට කැමැත්තෙන් සිටින්නේ යැයි ද සිතන්න. මෙම ක්‍රියාවලියේදී කාල මංජුසා පිරික්සුම (Black Box testing) යොදාගත හැකිවන්නේ කෙසේදැයි විස්තර කරන්න.</p>",
            "relatedNoteId": "note-7-8-0"
          }
        ]
    },
    {
        id: "al-2011-p2-b-9",
        questionNumber: "9",
        content: "",
        questionType: "essay",
        totalMarks: 15,
        subParts: [
          {
            id: "al-2011-p2-b-9a",
            label: "(a)",
            marks: 0,
            content: "<p>පරිගණක ක්‍රමලේඛයේදී ක්‍රමලේඛ පරිවර්තකවල (Translators) අවශ්‍යතාව පැහැදිලි කරන්න.</p>",
            "relatedNoteId": "note-9-5-0"
          },
          {
            id: "al-2011-p2-b-9b",
            label: "(b)",
            marks: 0,
            content: "<p>පළමුවන පරම්පරාවේ (First-Generation) සහ දෙවන පරම්පරාවේ (Second-Generation) ක්‍රමලේඛන භාෂා එක එකක් සඳහා ප්‍රධාන ලක්ෂණ දෙකක් බැගින් දක්වන්න.</p>",
            "relatedNoteId": "note-9-4-0"
          },
          {
            id: "al-2011-p2-b-9c",
            label: "(c)",
            marks: 0,
            content: "<p>ව්‍යූහගත ක්‍රමලේඛ භාෂාවක භාවිත වන ප්‍රධාන ගැලීම් පාලක ව්‍යුහ (Flow control structures) තුනක් දක්වන්න. මෙම ගැලීම් පාලක ව්‍යුහ, ගැලීම් සටහනක නිරූපණය කරනු ලබන්නේ කෙසේදැයි දක්වන්න.</p>",
            "relatedNoteId": "note-9-8-0"
          },
          {
            id: "al-2011-p2-b-9d",
            label: "(d)",
            marks: 0,
            content: `<p>පහත දැක්වෙන පයිතන් ක්‍රමලේඛය (Python program) පරිශීලක විසින් දෙනු ලබන ධන නිඛිල, ඒවාට තුල්‍ය ද්විමය නියෝජනවලට හැරවීම සඳහා නිර්මාණය කර ඇත. පරිශීලක විසින් 0 අගය ඇතුළුකළ විට ක්‍රමලේඛය නැවතිය යුතුය. ක්‍රමලේඛයෙහි වාක්‍යරීති දෝෂ (Syntax errors) සහ තාර්කික දෝෂ (Logical errors) යන දෝෂවර්ග දෙකම ඇත. පේළි අංක, ක්‍රමලේඛයෙහි කොටසක් නොවන අතර ඒවා අදාළ පේළි යොමුව දක්වයි.</p>[CODE:python]1   x = int (input ("Enter an integer ->"))
2   while x!=0:
3     bn = "" 
4     while x > 1:
5       quotient = int(x/2)
6       remainder == x % 2
7       bn = bn + str(remainder);
8       x = quotient
9     bn = str(x) + bn
10    print ("Binary Number", bn)
11    x = int (input("Enter an integer ->"))[/CODE]<p>(i) වාක්‍යරීති දෝෂ සහිත පේළි නම් කර, ඒ එක එකෙහි දෝෂ ද දක්වන්න.</p><p>(ii) අපේක්ෂිත ප්‍රතිඵලය ලබාගැනීම සඳහා, ක්‍රමලේඛයෙහි වෙනස් කළ යුතු පේළි සහ ඒවා වෙනස් කළ යුත්තේ කෙසේදැයි දක්වන්න. (ක්‍රමලේඛයට අලුතින් පේළි එකතුකිරීමට හෝ එහි පේළි ඉවත් කිරීමට හෝ ඔබට අවසර නැත.)</p>`,
            "relatedNoteId": "note-9-1-5"
          }
        ]
    },
    {
        id: "al-2011-p2-b-10",
        questionNumber: "10",
        questionType: "essay",
        content: "",
        totalMarks: 15,
        subParts: [
          {
            id: "al-2011-p2-b-10a",
            label: "(a)",
            marks: 0,
            content: "<p>(i) එක් එක් වර්ගය සඳහා නිදසුන බැගින් යොදාගනිමින්, ඊ-වානිජ්‍යයෙහි (e-commerce) ඇති, ව්‍යාපාරයෙන් ව්‍යාපාරයට [Business to Business (B2B)] ව්‍යාපාරයෙන් පාරිභෝගිකයාට [Business to Consumer (B2C)] සහ පාරිභෝගිකයාගෙන් පාරිභෝගිකයාට [Consumer to Consumer (C2C)] යන ව්‍යාපාර වර්ග තුන පැහැදිලි කරන්න.</p><p>(ii) සමාගමක සභාපතිවරයකු ව්‍යාපාරයෙන් සේවකයාට [B2E (Business to Employee)] යෙදුමක් සඳහා සන්නිවේදන මෙවලම් ලෙස ෆැක්ස් (fax), විද්‍යුත් තැපැල (e-mail) සහ වෙබ් (web) සලකනු ලබයි. ඔබ ICT ශිෂ්‍යයකු ලෙස, වඩාත්ම ගැළපෙන මෙවලම හේතු සහිතව නිර්දේශ කරන්න.</p>",
            "relatedNoteId": "note-12-1-0"
          },
          {
            id: "al-2011-p2-b-10b",
            label: "(b)",
            marks: 0,
            content: "<p>(i) කාරක තාක්ෂණවේද (Agent technology) වසම තුළ ‘කාරකය’ (Agent) යන පදය පැහැදිලි කරන්න.</p><p>(ii) කාරකයක ප්‍රධාන ලක්ෂණ දෙකක් දෙන්න.</p><p>(iii) කාරක තාක්ෂණවේදය ඵලදායි ලෙස යොදාගත හැකි අවස්ථාවක් සඳහා නිදසුනක් කෙටියෙන් පැහැදිලි කරන්න.</p>",
            "relatedNoteId": "note-13-2-0"
          }
        ]
    }
];

export const paper2011_p2: Paper = {
    id: "al-ict-paper-2011-p2",
    title: "A/L ICT Paper II - 2011",
    examName: {
      sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
      tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
      english: "General Certificate of Education (Adv. Level) Examination",
    },
    year: 2011,
    issuer: {
      sinhala: "ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුව",
      tamil: "இலங்கைப் பரீட்சைத் திணைக்களம்",
      english: "Department of Examinations, Sri Lanka"
    },
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

    
