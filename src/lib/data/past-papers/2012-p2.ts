
import type { Paper, StructuredQuestion } from "../../types";

const partA: StructuredQuestion[] = [
    {
      id: "al-2012-p2-A1",
      questionNumber: "1",
      content: "",
      questionType: "structured",
      totalMarks: 0,
      subParts: [
        {
          id: "al-2012-p2-A1a",
          label: "(a)",
          content: "<p>සකසනයේ (processor) උපයෝගීකරණය (utilization) ප්‍රශස්ත කිරීම (optimize) සඳහා මෙහෙයුම් පද්ධතිවල භාවිත කෙරෙන ශිල්පීය ක්‍රම දෙකක් ලියන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "al-2012-p2-A1b",
          label: "(b)",
          content: `<p>පරිගණක ජාලයකට සම්බන්ධ කොට ඇති සත්කාරකයකට (host) ඇති ජාල සබැඳුමක් (connectivity) පරීක්ෂාකිරීම සඳහා “ping” විධානය ක්‍රියාත්මක කිරීමෙන් ලබාගන්නා ලද ප්‍රතිඵලයෙහි කොටසක් පහත දැක්වේ.</p>[CODE:cli]PING www.cam.ac.uk (131.111.8.46) 56(84) bytes of data.
64 bytes from ipv4.www.cam.ac.uk (131.111.8.46): icmp_seq=1 tt1=242 time=201 ms
64 bytes from ipv4.www.cam.ac.uk (131.111.8.46): icmp_seq=2 tt1=242 time=204 ms
64 bytes from ipv4.www.cam.ac.uk (131.111.8.46): icmp_seq=3 tt1=242 time=196 ms
64 bytes from ipv4.www.cam.ac.uk (132.411.8.46): icmp_seq=4 tt1=242 time=203 ms
64 bytes from ipv4 www.cam.ac.uk (131.111.8.46): icmp_seg=5 tt1=242 time=195 ms

--- www.cam.ac.uk ping statistics ---
5 packets transmitted, 5 received,[/CODE]<p>ඉහත තොරතුරු භාවිත කරමින් පහත දක්වෙන ප්‍රශ්නවලට පිළිතුරු සපයන්න.</p><p>(i) ඉහත ප්‍රතිඵලයෙහි time මගින් අදහස් කෙරෙනුයේ කුමක් ද?</p><p>(ii) www.cam.ac.uk වෙබ් අඩවිය ස්ථාපිත කොට ඇති සේවාදායක පරිගණකය (server) හි IP ලිපිනය කුමක් ද?</p><p>(iii) ඉහත (ii) කොටසෙහි ලබාගත් IP ලිපිනයෙහි පන්තිය හඳුනාගන්න.</p><p>(iv) පැකැට්ටු හානියෙහි (packet loss) ප්‍රතිශතය කුමක් ද?</p>`,
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        },
        {
          id: "al-2012-p2-A1c",
          label: "(c)",
          content: "<p>මෙහෙයුම් පද්ධතියක ක්‍රියාවලියක් (process), created/new, waiting, running, terminated, blocked, swapped out and waiting, හෝ swapped out and blocked. යන අවස්ථාවලින් එක් අවස්ථාවක පවතී.</p><p>ක්‍රියාවලියකට blocked අවස්ථාව වෙත සෘජුවම සංක්‍රමණය විය හැක්කේ ඉහත සඳහන් කුමන අවස්ථාවේ / අවස්ථාවල සිට ද?</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium",
          relatedNoteId: "note-5-3-1"
        }
      ]
    },
    {
      id: "al-2012-p2-A2",
      questionNumber: "2",
      content: "",
      questionType: "structured",
      totalMarks: 0,
      subParts: [
        {
          id: "al-2012-p2-A2a",
          label: "(a)",
          content: "<p>පද්ධතියක් සඳහා සුදුසු අර්ථ දැක්වීමක් ඉදිරිපත් කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "small"
        },
        {
          id: "al-2012-p2-A2b",
          label: "(b)",
          content: "<p>ඉහත (a) කොටසෙහි යෝජිත අර්ථ දැක්වීම යොදාගනිමින්, ජංගම දුරකථනයක් යනු පද්ධතියක් බව පෙන්වා දෙන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "al-2012-p2-A2c",
          label: "(c)",
          content: "<p>ජංගම දුරකථනයක් යනු සංවෘත පද්ධතියක් ද විවෘත පද්ධතියක් ද යන්න ප්‍රකාශ කරන්න. ඔබේ පිළිතුර සාධාරණීකරණය කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "al-2012-p2-A2d",
          label: "(d)",
          content: "<p>ජංගම දුරකථනයක ඇති පහත දක්වෙන අවශ්‍යතා කාර්යබද්ධ (functional) අවශ්‍යතාවක් ද කාර්යබද්ධ නොවන (non functional) අවශ්‍යතාවක් ද යන්න ප්‍රකාශ කරන්න. ඔබේ පිළිතුරු සාධාරණීකරණය කරන්න.</p><p>(i) පරිශීලකයකුට ජංගම දුරකථනය භාවිත කර දුරකථන ඇමතුමක් ලබාගැනීමට හැකිවිය යුතුය.</p><p>(ii) විකිරණ විමෝචනය මගින් පරිශීලකයාට හානි නොකළ යුතුය.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        }
      ]
    },
    {
      id: "al-2012-p2-A3",
      questionNumber: "3",
      content: "",
      questionType: "structured",
      totalMarks: 0,
      subParts: [
        {
          id: "al-2012-p2-A3a",
          label: "(a)",
          content: "<p>(i) ඔබ, දී ඇති ධන නිඛිලයක්, ඔත්තේ ද ඉරට්ට ද යන්න තීරණය කරන්නේ කෙසේදැයි විස්තර කරන්න.</p><p>(ii) ඉහත (i) කොටසෙහි යෝජිත ක්‍රමය පාදක කර, දී ඇති ධන නිඛිලයක්, ඔත්තේ ද ඉරට්ට ද යන්න තීරණය කිරීම සඳහා වන ඇල්ගොරිතමයක් නිරූපණය වන ගැලීම් සටහනක් ගොඩනගන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        },
        {
          id: "al-2012-p2-A3iii",
          label: "(iii)",
          content: "<p>ඉහත (ii) කොටසෙහි යෝජිත ගැලීම් සටහන ව්‍යාජ කේතයකට (pseudo code) හරවන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "al-2012-p2-A3b",
          label: "(b)",
          content: "<p>බිටු 8 හි (8 bit) දෙකේ අනුපූරක (two’s complement) අංක ගණිතයෙහි 15+(-5) ආගණනය (computation) කරනු ලබන්නේ කෙසේදැයි පෙන්වා දෙන්න. වඩාත්ම වෙසෙසි බිටුවෙහි (most significant bit) උත්පාදනය වන ආනීතය (carry) ඔබ හසුරුවන්නේ කෙසේදැයි පැහැදිලි කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        }
      ]
    },
    {
      id: "al-2012-p2-A4",
      questionNumber: "4",
      content: "",
      questionType: "structured",
      totalMarks: 0,
      subParts: [
        {
          id: "al-2012-p2-A4a",
          label: "(a)",
          content: "<p>“පෞද්ගලිකත්වය” (privacy) සහ “මෘදුකාංග කොල්ලය” (software piracy) යන පදවලින් ඔබ අදහස් කරන්නේ කුමක් ද?</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        },
        {
          id: "al-2012-p2-A4b",
          label: "(b)",
          content: "<p>“ජංගම ආගණනය” (mobile computing) යන පදය විස්තර කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "small"
        },
        {
          id: "al-2012-p2-A4c",
          label: "(c)",
          content: "<p>පහත දැක්වෙන සංසිද්ධිය සලකා බලන්න.</p><p>අර්ධ සන්නායක (semi conductor) නිෂ්පාදන සමාගමකට ජපානයෙහි සහ ඇමෙරිකා එක්සත් ජනපදයෙහි ශාඛා තිබේ. වර්තමානයේදී සංවර්ධන කණ්ඩායමේ නියෝජිතයන්ට ඔවුන්ගේ තාක්ෂණික ගැටලු සාකච්ඡා කිරීම සඳහා සමාගමෙහි අනෙකුත් ශාඛාවලට නිරතුරුව යාමට සිදුවී තිබේ. මෙම යාන්ත්‍රණය බොහෝ වියදම් සහිත සහ කාලය වැයවන සුළු බව වර්ෂ ගණනාවක සිට මෙම සමාගම හඳුනාගෙන ඇත.</p><p>(i) අනෙකුත් ශාඛාවලට ගමන් කිරීමෙන් තොරව ඔවුනට මෙම තාක්ෂණ විමසුම් රැස්වීම් පැවැත්වීම සඳහා තොරතුරු හා සන්නිවේදන (ICT) තාක්ෂණය පදනම් කරගත් ක්‍රමයක්, ICT විෂයය හදාරන සිසුවකු ලෙස ඔබ යෝජනා කරන්න.</p><p>(ii) ඉහත (i) කොටසෙහි යෝජිත ක්‍රමය සඳහා අත්‍යාවශ්‍ය ‘තොරතුරු හා සන්නිවේදන තාක්ෂණ’ උපක්‍රම (ICT devices) තුනක් නම් කරන්න.</p>",
          marks: 0,
          requiresAnswerBox: true,
          answerBoxSize: "large"
        }
      ]
    }
];
const partB: StructuredQuestion[] = [
    {
        id: "al-2012-p2-B1",
        questionNumber: "1",
        content: "",
        questionType: "essay",
        totalMarks: 0,
        subParts: [
        {
            id: "al-2012-p2-B1a",
            label: "(a)",
            content: "<p>(i) දත්ත සහ තොරතුරු අතර ප්‍රධාන වෙනස සුදුසු උදාහරණයක් අනුසාරයෙන් විස්තර කරන්න.</p><p>(ii) විශාල පරිමාණයෙන් දත්ත පරිහරණය කිරීමේදී අත්යුරු (manual) ක්‍රම යොදාගැනීමේ අඩුපාඩු තුනක් දක්වන්න.</p><p>(iii) නිදසුන් යොදාගනිමින් දෘඪාංග (hardware), මෘදුකාංග (software) සහ ස්ථිරාංග (firmware) යන පද විස්තර කරන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "large"
        },
        {
            id: "al-2012-p2-B1b",
            label: "(b)",
            content: "<p>කාමරයක ඇති විදුලි පංකාවක් ක්‍රියාත්මකව (on - 1) හෝ අක්‍රියව (off - 0) පැවතිය හැකිය. එම විදුලි පංකාව කාර්යක්ෂමව ක්‍රියාත්මක කිරීම සඳහා පහත දැක්වෙන තත්ත්ව/ක්‍රියාවලි සහිත පාලන පද්ධතියක් අවශ්‍යව ඇත.</p><p>1. විදුලි පංකාව අත්යුරුව (manually) ක්‍රියාත්මක හෝ අක්‍රිය හෝ කළ හැකි වීම.</p><p>2. කාලගණකය (timer) ක්‍රියාත්මකව හෝ අක්‍රියව හෝ පැවතිය හැකිය.</p><p>3. පරිසරය සිසිල් ද උණුසුම් ද යන්න සංවේදකය (sensor) අනාවරණය කරගනියි.</p><p>4. කාලගණකය (timer) ක්‍රියාත්මකව (on) ඇතිවිට සහ පරිසරය උණුසුම් යැයි සංවේදකය (sensor) පෙන්නුම් කරන අවස්ථාවකදී විදුලි පංකාව ස්වයංක්‍රීයව ක්‍රියාත්මක විය හැකි වීම.</p><p>පහත දැක්වෙන වගුව මගින් ඉහත පෙන්වා ඇති කොන්දේසිවලට/ක්‍රියාවලිවලට අදාළ බූලීය අගයන් දැක්වෙයි.</p><div class='my-4'><table class='w-full border text-center'><thead><tr class='bg-muted'><th class='p-2 border'>කොන්දේසිය/ක්‍රියාවලිය</th><th class='p-2 border'>බූලියානු අගය</th></tr></thead><tbody><tr><td class='p-2 border text-left'>පංකාව අත්යුරුව ක්‍රියාත්මක කරනු ලබයි</td><td class='p-2 border'>1</td></tr><tr><td class='p-2 border text-left'>පංකාව අත්පුරුව වසා දමනු ලබයි</td><td class='p-2 border'>0</td></tr><tr><td class='p-2 border text-left'>කාලගණකය ක්‍රියාත්මක වී ඇත</td><td class='p-2 border'>1</td></tr><tr><td class='p-2 border text-left'>කාලගණකය ක්‍රියාත්මක වී නැත</td><td class='p-2 border'>0</td></tr><tr><td class='p-2 border text-left'>පරිසරය සිසිල් බව සංවේදකය හඳුනාගනියි</td><td class='p-2 border'>1</td></tr><tr><td class='p-2 border text-left'>පරිසරය උණුසුම් බව සංවේදකය හඳුනාගනියි</td><td class='p-2 border'>0</td></tr></tbody></table></div><p>(i) ඉහත පාලන පද්ධතිය ක්‍රියාත්මක කිරීම සඳහා AND, OR සහ NOT ද්වාර සංයෝජන පමණක් අඩංගු තර්කන පරිපථයක් අඳින්න.</p><p>(ii) ඉහත පද්ධතියෙහි ක්‍රියාකාරිත්වය දැක්වෙන සත්‍යතා වගුවක් ගොඩනගන්න.</p><p>(iii) ඉහත (b) (ii) කොටසෙහි ගොඩනගන ලද සත්‍යතා වගුව නිරූපණය කෙරෙන බූලියන් ප්‍රකාශනයක් (සුළු නොකරන ලද) ලියන්න.</p>",
            marks: 0,
            requiresAnswerBox: true,
            answerBoxSize: "xlarge"
        }
        ]
    },
    {
        "id": "al-2012-p2-B2",
        "questionNumber": "2",
        "content": "",
        "questionType": "essay",
        "totalMarks": 0,
        "subParts": [
        {
            "id": "al-2012-p2-B2a",
            "label": "(a)",
            "content": "<p>HTML ලේඛනයක ඡේද උසුලනයක් (paragraph tag) සහ කැඩුම් උසුලනයක් (break tag) සඳහා අතිරික්සුවක් (browser) දක්වන ප්‍රතිචාර කුමක් ද?</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "medium"
        },
        {
            "id": "al-2012-p2-B2b",
            "label": "(b)",
            "content": "<p>පහත දැක්වෙන HTML කේතය විදැහු (render) විට, කුමක් සංදර්ශනය වනු ඇත් ද? එම සංදර්ශනයෙහි හිස් රේඛා (blank lines) ඇත්නම් ඒවා තිත් ඉරි (................) මගින් පැහැදිලිව දක්වන්න.</p>[CODE:html]<p>Our evergreen school days<br>\\nwill not come back again</p>\\n<p>From the nursery to high school\\nwe learnt the best</p>[/CODE]",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "medium"
        },
        {
            "id": "al-2012-p2-B2c",
            "label": "(c)",
            "content": "<p>“Agri Sri Lanka” නමැති සමාගමකට පහත දී ඇති ආකාරයේ වෙබ් පිටුවක් අවශ්‍ය වේ.</p><div class='my-4 p-4 border rounded-lg'><h4 class='font-bold text-center'>A web page design is shown. Main heading 'Agriculture Sri Lanka'. Below is a large image with 'AGRI SRI LANKA' text overlay. Below the image, there is a paragraph starting 'Sri Lanka is an agricultural country...'. Then a heading 'The main plantation crops are' followed by a bulleted list with 'tea', 'rubber', 'coconut'. Then a heading 'Links to agricultural firms' followed by two hyperlinks: 'Jay Agro Technologies' and 'Lanka Agri Systems Pvt Ltd.'.</h4></div><p>ඉහත වෙබ් පිටුව නිර්මාණය කරගැනීම සඳහා HTML කේතයක් ලියන්න. අනුරු ගොනුවෙහි (image file) නම “agriSL.jpg” ලෙස උපකල්පනය කරන්න. Jay Agro Technologies සහ Lanka Agri Systems Pvt Ltd යන සබැඳුම් (links) පිළිවෙළින් ''http://www.jayagrotec.com'' සහ ''http://www.lkagrisys.com'' යන අඩවිවලට සබැඳි විය යුතු ය.</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "xlarge"
        }
        ]
    },
    {
        "id": "al-2012-p2-B3",
        "questionNumber": "3",
        "content": "",
        "questionType": "essay",
        "totalMarks": 0,
        "subParts": [
        {
            "id": "al-2012-p2-B3a",
            "label": "(a)",
            "content": "<p>පරිගණකයක් තුළ ක්‍රියාත්මක වෙමින් පවතින යෙදුමක් (an application) ක්‍රියාත්මක වීමේදී 0100110100010111 අතාත්වික (virtual) මතක ලිපිනය හා සම්බන්ධ වෙයි.</p><p>(i) මෙම පරිගණකයේ උපරිම ප්‍රවේශ විය හැකි අතාත්වික මතක ලිපින අවකාශය, කිලෝබයිට්ස්වලින් ගණනය කරන්න.</p><p>(ii) ඉහත (i) හි මතක ලිපින අවකාශයෙහි පරාසය (ආරම්භක සහ අවසාන ලිපින) කුමක් ද?</p><p>(iii) පිටුවක තරම (size) කිලෝබිටු 4 ක් නම්, පිටු අංකය නිරූපණය කිරීම සඳහා බිටු කීයක් ප්‍රමාණවත් වේ ද? ඔබේ ආගණනය (computation) දක්වන්න.</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "large"
        },
        {
            "id": "al-2012-p2-B3b",
            "label": "(b)",
            "content": "<p>A සහ B යනු ජාල කොටස් දෙකකට සම්බන්ධිත පරිගණක දෙකක් යැයි උපකල්පනය කරන්න. මෙම පරිගණකවල ‘ipconfig’ ක්‍රියාත්මක කළ විට, පහත දැක්වෙන තොරතුරු ලැබේ.</p>[CODE:cli]1. In computer A\\n   IPv4 ලිපිනය ....................: 192.168.1.2\\n   අනුජාල ආවරණය (Subnet mask) .....: 255.255.255.0\\n   පුරුදු/ස්වයංපැවරූ දොරටුමග (Default gateway) : 192.168.1.254\\n\\n2. In computer B\\n   IPv4 ලිපිනය ....................: 192.168.2.3\\n   අනුජාල ආවරණය .................: 255.255.255.0\\n   පුරුදු/ස්වයංපැවරූ දොරටුමග .......: 192.168.2.254[/CODE]<p>A සහ B දෙකටම එකිනෙක සමඟ සන්නිවේදනය කළ හැකි වන පරිදි ඉහත ජාල කොටස් දෙක සඳහා ජාල රූප සටහනක් අඳින්න. රූප සටහනෙහි එක් එක් උපක්‍රමයෙහි (Device) IP ලිපින පැහැදිලිව දැක්විය යුතු ය.</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "large"
        },
        {
            "id": "al-2012-p2-B3c",
            "label": "(c)",
            "content": "<p>ජාල ආරක්ෂණය ඇසුරෙන් පහත දක්වෙන පද්ධතිවල ප්‍රධාන කර්තව්‍යය කෙටියෙන් පැහැදිලි කරන්න.</p><p>(i) ගිනිපවුරු (firewall)</p><p>(ii) නියෝජිත සේවාදායක පරිගණකය (proxy server)</p><p>(iii) හනි පොට්ස් (honey pots)</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "medium"
        }
        ]
    },
    {
        "id": "al-2012-p2-B4",
        "questionNumber": "4",
        "content": "<p>පහත දැක්වෙන ER සටහන සලකා බලන්න.</p><p>devnote: An ER diagram is shown. Entities are: Class (attributes: Class ID), Desk (attributes: Desk ID), Student (attributes: Student ID, Name, NIC), House (attributes: House ID, Name), Subject (attributes: Subject ID, Title). Relationships are: Class 'Has' (1 to n) Student, Desk 'Has' (1 to 1) Student, House 'Has' (1 to n) Student, Student 'Obtains Marks for' (m to n) Subject.</p>",
        "questionType": "essay",
        "totalMarks": 0,
        "subParts": [
        {
            "id": "al-2012-p2-B4a",
            "label": "(a)",
            "content": "<p>ශිෂ්‍යයකු විසින් විෂයයකට ලබාගත් ලකුණු නිරූපණය කිරීමට උපලක්ෂණයක් (attribute) එකතුකිරීම සඳහා ඉහත ER සටහනෙහි වඩාත් අදාළ භූතාර්ථය (entity) හෝ සම්බන්ධතාව (relationship) දක්වන්න.</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "small"
        },
        {
            "id": "al-2012-p2-B4b",
            "label": "(b)",
            "content": "<p>ඉහත ER සටහනෙහි ඇති සම්බන්ධතා ඒක-ඒක, ඒක-බහු, බහු-බහු ලෙස වර්ගීකරණය කරන්න. ඔබේ පිළිතුර සාධාරණීකරණය කරන්න.</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "medium"
        },
        {
            "id": "al-2012-p2-B4c",
            "label": "(c)",
            "content": "<p>ඉහත ER සටහන සම්බන්ධතා (relational) දත්ත සමුදායකට හැර වූ විට ලැබෙන වගු සහ ඒවායේ උපලක්ෂණ ලියා දක්වන්න.</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "medium"
        },
        {
            "id": "al-2012-p2-B4d",
            "label": "(d)",
            "content": "<p>ඉහත (c) හි යෝජනා කරන ලද ඕනෑම වගුවක් සඳහා ප්‍රාථමික යතුර (primary key) ලියා දක්වන්න.</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "small"
        },
        {
            "id": "al-2012-p2-B4e",
            "label": "(e)",
            "content": "<p>ඉහත (c) හි යෝජනා කරන ලද වගු භාවිතකරමින් Subject ID හි අගය AL001 වන විෂයය සඳහා Student ID හි අගය ST001 වන ශිෂ්‍යයා ලැබූ ලකුණු ලබාගැනීම සඳහා SQL ප්‍රකාශයක් ලියන්න.</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "medium"
        }
        ]
    },
    {
        "id": "al-2012-p2-B5",
        "questionNumber": "5",
        "content": "<p>පහත දැක්වෙන example.py පයිතන් ක්‍රමලේඛය සලකා බලන්න.</p>[CODE:python]datasummary = {}\\ndatakeys = []\\ndef readdata():\\n    global datakeys, datasummary\\n    f1 = open('input.txt','r')\\n    line = f1.readline()\\n    while (line):\\n        data = line.strip().split(\",\")\\n        for dataitem in data:\\n            if dataitem in datasummary:\\n                datasummary[dataitem] += 1\\n            else:\\n                datasummary[dataitem] = 1\\n            datakeys = datakeys + [dataitem]\\n        line = f1.readline()\\n    f1.close()\\n\\ndef processdata():\\n    global datakeys\\n    for i in range(len(datakeys) - 1):\\n        for j in range(i+1, len(datakeys)):\n            if(datakeys[i] > datakeys[j]):\\n                datakeys[i], datakeys[j] = datakeys[j], datakeys[i]\\n\\ndef printdata():\\n    global datakeys, datasummary\\n    f2 = open('output.txt', 'w')\\n    for key in datakeys:\\n        f2.write('{}-{}\\\\n'.format(key,datasummary[key]))\\n    f2.close()\\n\\nreaddata()\\nprocessdata()\\nprintdata()[/CODE]",
        "questionType": "essay",
        "totalMarks": 0,
        "subParts": [
        {
            "id": "al-2012-p2-B5a",
            "label": "(a)",
            "content": "<p>ඉහත ක්‍රමලේඛයෙහි datasummary සහ datakeys යන විචල්‍යවල දත්ත ප්‍රරූප (data types) මොනවා ද?</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "small"
        },
        {
            "id": "al-2012-p2-B5b",
            "label": "(b)",
            "content": "<p>ඉහත ක්‍රමලේඛය ආරම්භයෙහි, එහි නම, සටහනක් (comment) ලෙස ඇතුළුකිරීම සඳහා පයිතන් ප්‍රකාශයක් ලියන්න.</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "small"
        },
        {
            "id": "al-2012-p2-B5c",
            "label": "(c)",
            "content": "<p>ඉහත ක්‍රමලේඛයෙහි open('input.txt','r') යන විධානය ක්‍රියාත්මක කිරීමෙන් ඇතිවන ප්‍රතිඵලය කුමක් ද?</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "small"
        },
        {
            "id": "al-2012-p2-B5d",
            "label": "(d)",
            "content": "<p>ඉහත ක්‍රමලේඛයෙහි readdata(), printdata() සහ processdata() යන එක් එක් කාර්යයෙහි (each of the functions) ප්‍රධාන කාර්යය විස්තර කරන්න.</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "medium"
        },
        {
            "id": "al-2012-p2-B5e",
            "label": "(e)",
            "content": "<p>input.txt ගොනුවෙහි අන්තර්ගතය පහත දී ඇති පරිදි වේ නම්, මෙම ක්‍රමලේඛය ක්‍රියාත්මක වීමෙන් පසු output.txt ගොනුවෙහි අන්තර්ගතය කුමක් වේ ද?</p><p>[CODE:text]a,d,b,a,n\\nd,b,n,x,a[/CODE]</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "medium"
        }
        ]
    },
    {
        "id": "al-2012-p2-B6",
        "questionNumber": "6",
        "content": "<p>පාසලක ආදි ශිෂ්‍ය සංගමයට මුළු රට පුරාත් විදේශවලත් ආදි ශිෂ්‍යයෝ විශාල සංඛ්‍යාවක් සිටිති. පුස්තකාලයේ පොත් සංඛ්‍යාව වැඩි කිරීම සඳහා ප්‍රධාන පෙළේ දේශීය පොත් සාප්පුවක සහයෝගය ඇතිව, ආදි සිසුන්ගේ සහ අනෙකුත් දානපතියන්ගේ උපකාර ලබාගැනීමට ආදි ශිෂ්‍ය සංගමය තීරණය කළේය. මෙම කාර්යය සඳහා මාර්ගගත (online) ගෙවීම් පහසුකම් සහිත වෙබ් පාදක පද්ධතියක් සැකසීමට ආදි ශිෂ්‍ය සංගමය එකඟ විය. පුස්තකාලය සඳහා අවශ්‍ය පොත්වල නම් සහ මිල ගණන් වෙබ් අඩවියෙහි අඩංගු කරනු ඇත. වෙබ් අඩවියෙහි දැක්වෙන මෙම අවශ්‍ය පොත් තෝරාගෙන ගෙවීම් කිරීමට දානපතියන්ට හැකි වේ. ගෙවීමක් කරනු ලැබූ විට, තෝරාගනු ලැබූ පොත් පාසල් පුස්තකාලයට ලබාදීම සඳහා මෙම තොරතුරු පොත් සාප්පුව වෙත යවනු ලැබේ.</p>",
        "questionType": "essay",
        "totalMarks": 0,
        "subParts": [
        {
            "id": "al-2012-p2-B6a",
            "label": "(a)",
            "content": "<p>පොත් එකතු කිරීම සඳහා වන සාම්ප්‍රදායික ක්‍රමවලට වඩා, යෝජිත මාර්ගගත ක්‍රමයෙහි වාසි දෙකක් දක්වන්න.</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "medium"
        },
        {
            "id": "al-2012-p2-B6b",
            "label": "(b)",
            "content": "<p>යෝජිත වෙබ් අඩවිය හරහා පොත් ඇනවුම් කිරීමේ අවාසියක් ලියා දක්වන්න.</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "small"
        },
        {
            "id": "al-2012-p2-B6c",
            "label": "(c)",
            "content": "<p>ඉහත (b) හි දක්වන ලද අවාසිය ඉවත් කර ගැනීමට වෙබ් අඩවිය වැඩි දියුණු කළ හැක්කේ කෙසේදැයි පැහැදිලි කරන්න.</p>",
            "marks": 0,
            "requiresAnswerBox": true,
            "answerBoxSize": "medium"
        }
        ]
    }
];

export const paper2012_p2: Paper = {
  id: "al-ict-paper-2012-p2",
  title: "A/L Information & Communication Technology Paper II - 2012",
  examName: {
    sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
    tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
    english: "General Certificate of Education (Adv. Level) Examination"
  },
  year: 2012,
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
