
import type { Paper, StructuredQuestion } from "../../types";

const partA: StructuredQuestion[] = [
    {
      id: "pq-2023-p2-1",
      questionNumber: "1",
      content: "",
      totalMarks: 7,
      questionType: "structured",
      subParts: [
        {
          id: "pq-2023-p2-1a",
          label: "(a)",
          content: `<p>පහත සඳහන් HTML කේත ඛණ්ඩය වෙබ් අතරික්සුවක් (web browser) මගින් විදැහු (render) විට අපේක්ෂිත ප්‍රතිදානය අඳින්න.</p>[CODE:html]<html>
<body>
<ul style="list-style-type:none;">
    <li>Cricket</li>
    <li>Football</li>
    <li>Hockey</li>
</ul>
</body>
</html>[/CODE]<p>සටහන: පහත කඩ ඉරිවලින් දක්වා ඇති කොටුව වෙබ් අතරික්සුවේ ප්‍රදර්ශන අවකාශය (display area) ලෙස සලකන්න.</p>`,
          marks: 2,
          requiresAnswerBox: true,
          answerBoxSize: "small"
        },
        {
          id: "pq-2023-p2-1b",
          label: "(b)",
          content: `<p>කථික තරගයක් සඳහා ලියාපදිංචිවීමේ පෝරමයක් (registration form) සහ එහි ලේබල කරන ලද HTML ප්‍රභවය (source) රූපය 1.1 සහ රූපය 1.2 මගින් පිළිවෙළින් දක්වා ඇත.</p>
                  <p><b>රූපය 1.1</b></p>
                  <div class="border rounded-lg p-4 my-4"><h4 class="font-bold text-center">A web page form is shown. At the top, a heading says "Back to the nature!". Below it, a smaller heading says "Speech Competition", and an h3 heading says "Registration form". The form contains fields for Name (text input), Gender (Male and Female radio buttons), District (a dropdown with Colombo selected), and Email (text input). There is a checkbox for "Subscribe for newsletter?". A "Submit" button is at the bottom. Below the button, there is an image logo with the text "Western Province Environment" next to it.</h4></div>
                  <p><b>රූපය 1.2</b></p>[CODE:html]<html>
      <A>Back to the nature!</A>
      <B>Speech Competition</B>
      <h3>Registration form</h3>
      <form method="C" D="./action_page.php">
          <label for="name">Name:</label>
          <input type="E" name="name"><br><br>
          <label for="gender">Gender:</label>
          <input type="F" name="gender" id="male" value="male">
          <label for="male">Male</label>
          <input type="F" name="gender" id="female" value="female">
          <label for="female">Female</label> <br><br>
          <label for="G">District: </label>
          <H name="district" id="district">
              <option value="colombo">Colombo</option>
              <option value="gampaha">Gampaha</option>
              <option value="kalutara">Kalutara</option>
          </H><br><br>
          <label for="email">Email:</label>
          <input type="email" name="email"><br><br>
          <input type="I" name="newsletter" id="newsletter">
          <label for="newsletter">Subscribe for newsletter?</label><br><br>
          <input type="J" value="Submit">
      </form>
      <br>
      <K="wpeLogo.jpg" alt="L" width="50" height="60">
      <M="https://www.wpe.lk" title="N">Western Province Environment</a>
  </html>[/CODE]<p>1.2 රූපයෙන් දැක්වෙන HTML කේතයේ A සිට N තෙක් වූ එක් එක් ලේබලය සඳහා සුදුසු ආදේශකය, දී ඇති ලැයිස්තුවෙන් තෝරාගන්න. එක් එක් ලේබලයට අදාළ ආදේශකයේ අංකය පිළිතුරු වගුවේ ලියා දක්වන්න.</p>
                  <p><b>ලැයිස්තුව:</b> {1: action, 2: a href, 3: caption, 4: checkbox, 5: district, 6: font, 7: h1, 8: h2, 9: h3, 10: head, 11: img src, 12: More details, 13: name, 14: post, 15: radio, 16: select, 17: submit, 18: text, 19: th, 20: WPE logo}</p>`,
          marks: 3
        },
        {
          id: "pq-2023-p2-1c",
          label: "(c)",
          content: `<p>කේතයේ (1.2 රූපය) සඳහන් action_page.php ගොනුව පහත දක්වා ඇත...P කොටසේ අරමුණ සහ Q කොටසේ අරමුණ ලියා දක්වන්න.</p>[CODE:php]<?php
  $servername = "localhost"; $username = "root"; $password = "";
  $dbname = "environment";
  // Create a connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  
  // Section P
  $name = $_POST['name']; $gender = $_POST['gender']; $district = $_POST['district']; $email = $_POST['email']; $newsletter = $_POST['newsletter'];
  // section P end
  
  // Section Q
  $sql = "INSERT INTO applicants (name, gender, district, email, newsletter) VALUES ('$name', '$gender', '$district', '$email', '$newsletter')";
  // section Q end
  
  if ($conn->query($sql) === TRUE) {
      echo "Data inserted successfully!";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }
  // Close the connection
  mysqli_close($conn);
  ?>[/CODE]`,
          marks: 2,
          requiresAnswerBox: true,
          answerBoxSize: "medium"
        }
      ]
    },
    {
      id: "pq-2023-p2-2",
      questionNumber: "2",
      content: "",
      totalMarks: 8,
      questionType: "structured",
      subParts: [
        {
          id: "pq-2023-p2-2a",
          label: "(a)",
          content: `<p>සරල ලෙස සහ ඉහළ මට්ටමකින් දත්ත ජීවන චක්‍රය (data life cycle) බැලූ විට, එය පියවර තුනකින් සමන්විත වේ. එහි දෙවන හා තෙවන පියවර ලියා දක්වන්න.<br/>පළමු පියවර වන්නේ දත්ත නිර්මාණයයි.</p>`,
          marks: 2,
          relatedNoteId: "note-1-1-4",
          requiresAnswerBox: true,
          answerBoxSize: "small"
        },
        {
          id: "pq-2023-p2-2b-i",
          label: "(b)(i)",
          content: `<p>නවීන කෘත්‍රිම බුද්ධිය, වලාකුළු (cloud) පාදක ආචයන (storage) විසඳුම් හරහා බොහෝ විට කළමනාකරණය කෙරෙන විශාල දත්ත ප්‍රමාණයන් මත යැපේ. මෙහිදී භාවිත වන වලාකුළු පරිගණක සේවා ආකෘතිය (cloud computing service model) කුමක් ද?</p>`,
          marks: 2,
          relatedNoteId: "note-1-2-6",
          requiresAnswerBox: true,
          answerBoxSize: "small"
        },
        {
          id: "pq-2023-p2-2c",
          label: "(c)",
          content: `<p>පහත එක් එක් ප්‍රකාශයේ ඇති කොටුවට සුදුසු ආදේශකය දී ඇති ලැයිස්තුවෙන් තෝරා, එම ආදේශකයේ අංකය කොටුව තුළ ලියන්න.</p>
                  <p><b>ලැයිස්තුව:</b> {1 – B2B, 2 – C2B, 3 – G2C, 4 – ගෙවීම් ද්වාර (payment gateway), 5 – ප්‍රතිවෙන්දේසි (reverse auction), 6 – අතථ්‍ය වෙළඳ ප්‍රදර්ශනාගාර (virtual storefront), 7 – වෙබ් ද්වාර (web portal), 8 – මාර්ගගත වෙන්දේසි (online auction), 9 – මාර්ගගත වෙළඳපළ (online marketplace)}</p>
                  <ol class="list-[lower-roman] list-inside space-y-2">
                  <li>විවිධ මූලාශ්‍රවලින් සැපයෙන තොරතුරු පරාසයකට එක් තැනකින් ප්‍රවේශවීමට ඉඩ සලසන වෙබ් පාදක වේදිකාවක්, [ &nbsp; ] ක් ලෙසින් හැඳින්වේ.</li>
                  <li>යමකු තම වාහන ආදායම් බලපත්‍රය අලුත් කිරීමට නිල වෙබ් අඩවියෙන් ඉල්ලුම් කර ඒ සඳහා මාර්ගගතව මුදල් ගෙවන විට ඔහු/ඇය [ &nbsp; ] ඉ-වාණිජ්‍යය ව්‍යාපාර ගනුදෙනු වර්ගය සිදු කරයි.</li>
                  <li>ABC ඉ-වාණිජ්‍යය සමාගම, වෙනත් විකුණුම්කරුවන්ගේ නිෂ්පාදන තම වෙබ් අඩවිය හරහා සෝදිසි කිරීමට තම ගැනුම්කරුවන්ට ඉඩ නොදෙයි. ABC වෙබ් අඩවිය [ &nbsp; ] ක් ලෙස ක්‍රියාකරයි.</li>
                  <li>[ &nbsp; ] යකදී ගැනුම්කරුවෝ යම් භාණ්ඩයක් හෝ සේවාවක් හෝ මිලදී ගැනීමට තමන් කැමති මිල සඳහා ලංසු ලබාදෙති.</li>
                  <li>මාර්ගගත සාප්පු වෙබ් අඩවියක්, [ &nbsp; ] ක් සමග සම්බන්ධ වීම යෝග්‍ය වේ.</li>
                  </ol>`,
          marks: 5,
          relatedNoteId: "note-12-1-0"
        },
        {
          id: "pq-2023-p2-2d-i",
          label: "(d)(i)",
          content: `<p>E- අපද්‍රව්‍ය (e-waste) යනු කුමක් දැයි පැහැදිලි කරන්න.</p>`,
          marks: 1,
          relatedNoteId: "note-1-7-2",
          requiresAnswerBox: true,
          answerBoxSize: "small"
        }
      ]
    },
    {
        id: "pq-2023-p2-3",
        questionNumber: "3",
        content: "",
        totalMarks: 12,
        subParts: [
             {
                id: "pq-2023-p2-3a",
                label: "(a)",
                content: "<p>පළමු ඉරට්ටේ සංඛ්‍යා දහයේ එකතුව ගණනය කර ප්‍රදර්ශනය කිරීම සඳහා ඇඳ ඇති පහත දැක්වෙන ගැලීම් සටහනේ A සිට G තෙක් ලේබල සඳහා වඩාත් සුදුසු ආදේශක ලියා දක්වන්න.</p><div class='my-4 p-4 border rounded-lg flex justify-center'><p class='text-sm text-muted-foreground'>A Flowchart for calculating the sum of the first 10 even numbers is depicted here. It contains labels A through G pointing to specific parts of the diagram that need to be filled in.</p></div>",
                marks: 3,
                relatedNoteId: "note-9-3-0"
              },
              {
                id: "pq-2023-p2-3b",
                label: "(b)",
                content: `<ol class="list-[lower-roman] list-inside space-y-4">
                        <li><p>පහත පයිතන් කේතයේ ප්‍රතිදානය කුමක් ද?</p><pre><code>def func(n):
    MyNumber=[]
    for i in range(4,n+1):
        if i%2==0:
            MyNumber.append(i)
    print(MyNumber)
func(30)</code></pre></li>
                        <li><p>ඉහත පයිතන් කේතයේ if i%2==0: කොන්දේසිය if i%2 != 0: ලෙස වෙනස් කළ විට ප්‍රතිදානය ලියා දක්වන්න.</p></li>
                        </ol>`,
                marks: 4,
                requiresAnswerBox: true,
                answerBoxSize: "medium"
              },
              {
                id: "pq-2023-p2-3c",
                label: "(c)",
                content: `<p>නිඛිල සමූහයක විශාලතම නිඛිලය සෙවීමට ලියා ඇති පහත පයිතන් කේතයේ ලේබල සඳහා ආදේශක ලියා දක්වන්න.</p>[CODE:python]def findlargest(myList):
    largest = A
    for i in B:
        if i > C:
            largest = D
    print("largest value is", E)
list1=[4,6,24,12,8,94,22]
findlargest(F)[/CODE]`,
                marks: 3,
                requiresAnswerBox: true,
                answerBoxSize: "medium"
              }
        ]
    },
    {
        id: "pq-2023-p2-4",
        questionNumber: "4",
        content: "",
        totalMarks: 8,
        subParts: [
            {
                id: "pq-2023-p2-4a",
                label: "(a)",
                content: `<p>පාසල් විද්‍යාගාරයේ පරිගණක වෙන් කර ගැනීමට සිසුන්ට උදව්වන මෘදුකාංගයක් සංවර්ධනය කරන ලෙස පාසල් IT සංගමයේ කණ්ඩායමකින් ඉල්ලීමක් කර ඇත. එහිදී තම තොරතුරු යාවත්කාලීන කිරීමේ පහසුකම සිසුන්ට ලබාදිය යුතු ය. පද්ධතියට සිසුන් ඇතුළත් කිරීමට සහ ඉන් සිසුන් ඉවත් කිරීමට පහසුකම පරිපාලකට දිය යුතු ය.<br/>ඉහත පද්ධතිය සඳහා සංවර්ධන කණ්ඩායම විසින් සකස් කරන ලද දත්ත ගැලීම් සටහන පහත දැක්වේ.</p>[DIAGRAM:2023-p2-q4a]<p>ලේබල P - W සඳහා සුදුසු ආදේශක පහත අංක දමන ලද ලැයිස්තුවේ දැක්වේ. ඉහත එක් එක් ලේබලය සඳහා වඩාත් සුදුසු ආදේශකයේ අංකය අදාළ කොටුවේ ලියන්න.</p>
                        <p><b>ලැයිස්තුව:</b> {1 – පරිපාලක, 2 – ඉල්ලීම හැසිරවීම, 3 – වෙන් කිරීම්, 4 – ඉල්ලීම් විස්තර, 5 – සිසුවා, 6 – සිසුන්, 7 – සිසුවාගේ විස්තර, 8 – සිසු විස්තර යාවත්කාලීන කිරීම}</p>`,
                marks: 3,
                relatedNoteId: "note-7-6-0"
            },
            {
                id: "pq-2023-p2-4b",
                label: "(b)",
                content: `<p>සතිඅන්ත දිනවල පෙ.ව. 8 සහ ප.ව. 5 අතර පමණක්, මිනිත්තු 30 ක කාලච්ඡේදවලට සිසුන්ට පරිගණක ලබා දෙනු ඇත. එක් සති අන්තයකට, උපරිම වශයෙන් මිනිත්තු 30 කාලච්ඡේද දෙකක් එක් සිසුවෙකුට වෙන් කළ හැකි ය.<br/>පරිගණක වෙන් කිරීමට අදාළ එක් කාර්යබද්ධ අවශ්‍යතාවක් (functional requirement) ලියා දක්වන්න.</p>`,
                marks: 1,
                requiresAnswerBox: true,
                answerBoxSize: "small"
            },
            {
                id: "pq-2023-p2-4c",
                label: "(c)",
                content: `<p>මෙම ව්‍යාපෘතියේ තාක්ෂණික ශක්‍යතා (technical feasibility) අධ්‍යයනය සිදු කරන විට, සංවර්ධන කණ්ඩායම විසින් පරීක්ෂා කළ යුතු එක් තාක්ෂණික අංගයක් ලියා දක්වන්න.</p>`,
                marks: 1,
                requiresAnswerBox: true,
                answerBoxSize: "small"
            },
            {
                id: "pq-2023-p2-4d",
                label: "(d)",
                content: `<p>ඉහත සංවර්ධනය සඳහා දියඇලි ආකෘතිය (waterfall model) යෝජිත ය. මෙම ව්‍යාපෘතිය නියමිත දිනට නිම කිරීම සඳහා, නිරවද්‍ය අවශ්‍යතා විශ්ලේෂණයක් ඉතා වැදගත් වන්නේ ඇයි?</p>`,
                marks: 1,
                requiresAnswerBox: true,
                answerBoxSize: "small"
            },
            {
                id: "pq-2023-p2-4e",
                label: "(e)",
                content: `<p>වෙන් කිරීමේ මොඩියුලය, සිසු විස්තර යාවත්කාලීන කිරීමේ මොඩියුලය සහ සිසුන් කළමනාකරණ මොඩියුලය සිසුන් තිදෙනෙකු විසින් වෙන වෙනම සංවර්ධනය කෙරේ. IT ගුරුතුමිය විසින් විවිධ මෘදුකාංග පරීක්ෂා කිරීම් (testing) වර්ග උගන්වා ඇත. මෙම පද්ධතියේ අනුකලන පරීක්ෂාව (integration testing) යන්නෙන් කුමක් අදහස් වේ ද?</p>`,
                marks: 1,
                requiresAnswerBox: true,
                answerBoxSize: "small"
            },
            {
                id: "pq-2023-p2-4f",
                label: "(f)",
                content: `<p>IT ගුරුතුමිය මෙම මෘදුකාංගය සෘජු ස්ථාපනය (direct deployment) කිරීමට කණ්ඩායමට යෝජනා කරයි. ඇය සමාන්තර ස්ථාපනය (parallel deployment) යෝජනා නොකිරීමට එක් හේතුවක් දක්වන්න.</p>`,
                marks: 1,
                requiresAnswerBox: true,
                answerBoxSize: "small"
            },
            {
                id: "pq-2023-p2-4g",
                label: "(g)",
                content: `<p>මෙම පද්ධතිය සංවර්ධනය නොකර, ඒ වෙනුවට වාණිජ පෙර නිමි පැකේජයක (COTS) භාවිතය සලකා බැලීමට IT සංගමයේ එක් සාමාජිකයෙක් යෝජනා කරයි. එම යෝජනාව සංවර්ධන කණ්ඩායම විසින් පිළිනොගැනීමට එක් හේතුවක් ලියා දක්වන්න.</p>`,
                marks: 1,
                requiresAnswerBox: true,
                answerBoxSize: "small"
            }
        ]
    }
];

const partB: StructuredQuestion[] = [
    {
        id: "pq-2023-p2-5",
        questionNumber: "5",
        content: `(a) පහත පරිපථය සඳහා සම්පූර්ණ සත්‍යතා වගුව අඳින්න.<br/>[DIAGRAM:2024-p2-q5a]<br/>(ලකුණු 02යි.)<br/><br/>
(b) පහත බූලීය ප්‍රකාශය එහි සරලතම ආකාරයෙන් ලියා දක්වන්න.<br/>(A + B) • (A + B̅) + AB̅<br/>(ලකුණු 01යි.)<br/><br/>
(c) A, B සහ C නම් වූ ආදාන තුනකින් යුත් පරිපථයක ආදාන දෙකක් හෝ තුනක් හෝ, ඉන් එක එකක් 1 විට, Z ප්‍රතිදානය 1 විය යුතු ය. කිසිම ආදානයක් 1 නොවන විට සහ ආදාන එකක් පමණක් 1 විට, ප්‍රතිදානය 0 විය යුතු ය.<br/>
(i) ඉහත පරිපථය සඳහා සම්පූර්ණ සත්‍යතා වගුව අඳින්න. (ලකුණු 02යි.)<br/>
(ii) ඉහත පරිපථයට අදාල කානෝ සිතියම පහත ආකෘතිය පරිදි සම්පූර්ණ කරන්න.<br/>[DIAGRAM:2024-p2-q5c-ii]<br/>(ලකුණු 02යි.)<br/>
(iii) Z ප්‍රතිදානය සඳහා ගුණිතවල එකතුවෙහි (sum-of-products) වඩාත් සරලතම ප්‍රකාශය කානෝ සිතියම භාවිතයෙන් ව්‍යුත්පන්න කරන්න. ලූප (loops) පැහැදිලිව කානෝ සිතියමේ පෙන්වන්න. (ලකුණු 02යි.)<br/>
(iv) ඉහත (iii) හි ලබා ගත් සරලතම ප්‍රකාශය සඳහා, AND, NOT සහ OR ද්වාර පමණක් භාවිත කෙරෙන තාර්කික පරිපථයක් ඇඳ දක්වන්න. (ලකුණු 01යි.)<br/><br/>
(d) (i) අංකිත පරිපථවල අර්ධාකලකයේ (half adder) භාවිතය පහදන්න. (ලකුණු 01යි.)<br/>
(ii) අංකිත පරිපථවල මතක මූලයක් (memory element) ලෙස පිළිපොළක් (flip-flop) ක්‍රියා කරන අයුරු විස්තර කරන්න. එය සංයෝජන (combinational) තර්කන ද්වාරවලින් වෙනස් වන අයුරු පහදන්න. (ලකුණු 02යි.)<br/>
(iii) පූර්ණාකලක (full adder) පරිපථයක සත්‍යතා වගුව අඳින්න. (ලකුණු 02යි.)`,
        totalMarks: 15
    },
    {
        id: "pq-2023-p2-6",
        questionNumber: "6",
        content: `(a) ඍජු ලක්ෂ්‍ය ස්ථලකයකට (point-to-point topology) අනුව, පරිගණකයක් සහ මුද්‍රකයක් ඇඹරි යුගල ඊතරනෙට් කේබලයකින් සම්බන්ධ කළ යුතු ආකාරය දැක්වීමට දළ සටහනක් අඳින්න. (ලකුණු 01යි.)<br/><br/>
(b) A සහ B දෙපාර්තමේන්තු දෙකෙහි වෙන වෙනම ඇති ස්ථානීය ප්‍රදේශ ජාල (LAN) දෙක අඩංගු ජාලය සලකන්න. එක් එක් දෙපාර්තමේන්තුවේ ස්ථානීය ප්‍රදේශ ජාලයේ පරිගණක හතර බැගින් (පිළිවෙළින් C1,C2,C3 සහ C4 පරිගණක A හි සහ C5,C6,C7 සහ C8 පරිගණක B හි ලෙස) ඇත. ඊට අමතරව එම දෙපාර්තමේන්තු දෙකෙහි භාවිතය සඳහා SVR නම් වූ පොදු සේවාදායකයක් (server) ද ඇතුළත් කර ඇත.<br/>
(i) එම ජාලයේ රූප සටහන අඳින්න. ස්ථානීය ප්‍රදේශ ජාල දෙක ස්ථාපනය කිරීමට සහ සමස්ථ ජාලයම අන්තර්ජාලයට සම්බන්ධ කිරීමට භාවිත කරන ජාල උපාංග පැහැදිලිව එහි දක්වන්න. (ලකුණු 01යි.)<br/>
(ii) එම උපාංග ඒවාට අදාළ තැන්වල ස්ථානගත කිරීමට හේතු දක්වන්න. (ලකුණු 01යි.)<br/>
(iii) C1 සිට C6 තෙක් දත්ත ඒකකයක් යැවීම සලකන්න. එම දත්ත ගැලීම ඉහත ජාල රූපයේ කඩ ඉරි මගින් පෙන්වන්න. (ලකුණු 01යි.)<br/><br/>
(c) ආයතනයකට 192.168.100.0/24 IP යොමු කාණ්ඩය ලබාදී ඇත. මෙම යොමු කාණ්ඩයෙන් S1, S2, S3, S4, S5 සහ S6 ලෙසින් උපජාල හයක්, ඒ එක් එක් උපජාලයට IP යොමු අවම වශයෙන් 25 ක් භාවිත කළ හැකි ලෙසින් සෑදීමට ආයතනයට අවශ්‍ය වේ යැයි උපකල්පනය කරන්න.<br/>
(i) ඉහත දී ඇති IP යොමු කාණ්ඩයේ උපජාල ආවරණය (subnet mask) තිත් දශමය අංකනයෙන් ලියා දක්වන්න. (ලකුණු 01යි.)<br/>
(ii) එක් එක් උපජාලය සඳහා ජාල යොමුව (network address), භාවිත කළ හැකි පළමු IP යොමුව, භාවිත කළ හැකි අවසාන IP යොමුව සහ විකාශන ලිපිනය (broadcast address) වගුවක ලැයිස්තුගත කරන්න. (ලකුණු 03යි.)<br/><br/>
(d) (i) පරිශීලකයකු වෙබ් අතරික්සුවක URL ක්ෂේත්‍රයට වෙබ් ලිපිනයක් (උදා. http://www.gmail.com) ඇතුළත් කළ විට, වසම් නාම පද්ධතියේ (DNS හි) කාර්යභාරය කුමක් ද? (ලකුණු 01යි.)<br/>
(ii) වසම් නාම පද්ධතියේ ‘ධුරාවලි (hierarchical) සහ විස්තෘත (distributed) ව්‍යුහය’ යන්නෙන් කුමක් අදහස් වේ ද? (ලකුණු 02යි.)<br/><br/>
(e) පහත එක් එක් කාර්ය සඳහා වගකීම පැවරෙන TCP/IP ආකෘති ස්ථර නාමය ලියා දක්වන්න.<br/>
(i) යෙදුම සහ පරිශීලකයා අතර සුමට (smooth) සම්බන්ධයක් පවත්වා ගැනීම<br/>
(ii) ද්විමය ආකාරයට දත්ත යැවීම සහ ලබාගැනීම<br/>
(iii) දත්ත පැකැට්ටු සම්ප්‍රේෂණයට භාවිත කරන මඟ සඳහන් කිරීම<br/>
(iv) දත්ත, පැකැට්ටුවලට බෙදීම<br/>
(ලකුණු 02යි.)<br/><br/>
(f) රහසිගත ADD පණිවිඩය නිමල් වෙත යැවීමට කමල්ට අවශ්‍ය වේ යැයි සලකන්න. කමල් ADD නිමල් වෙත යැවීමට පෙර එය CEE බවට පරිවර්තනය කරයි.<br/>
(i) මෙම සන්නිවේදනයේ කමල් භාවිත කළ කේතන යතුර (encryption key) ලියා දක්වන්න. (ලකුණු 01යි.)<br/>
(ii) එම ආරක්ෂක ක්‍රමවේදයම භාවිත කරමින් කරන තවත් සන්නිවේදනයක දී නිමල් වෙත කමල්ගෙන් ECD පණිවිඩය ලැබුණි නම්, කමල්ගේ මුල් පණිවිඩය කුමක් ද? (ලකුණු 01යි.)`,
        totalMarks: 15
    },
    {
        id: "pq-2023-p2-7",
        questionNumber: "7",
        content: `(a) රූපය 7.1 න් පෙන්වන්නේ දොරක විවෘත වීමක් අනාවරණය කරගැනීමට සමන් සෑදූ ආඩුයිනෝ පරිපථයයි.<br/>
[DIAGRAM:2024-p2-q7a]
(i) පරිපථයේ භාවිත කරන සංවේදකයේ (sensor) හැසිරීම සහ ක්‍රියාකාරිත්වය පහදන්න. (ලකුණු 02යි.)<br/>
(ii) මෙම ඇටවුම ක්‍රියාකරවීමට සමන් රූපය 7.2 හි දැක්වෙන ස්ථීරාංග (firmware) කේතය ලිව්වේ ය. එහෙත්, කේතයේ දෝෂ නිසා ඇටවුම අපේක්ෂිත ආකාරයට ක්‍රියා කළේ නැත. ඔබ එම කේතයට කරන නිවැරදි කිරීම් ලියා දක්වන්න. (ලකුණු 02යි.)<br/>
<b>රූපය 7.2</b>
[CODE:cpp]const int SensorP = 9;
const int BuzzerP = 8;

void setup() {
  pinMode (SensorP, INPUT);
  pinMode (BuzzerP, OUTPUT);
}

void loop() {
  int senState = digitalRead(SensorP);
  if (senState == HIGH)
    tone(SensorP, 262);
  else
    noTone(BuzzerP, 0);
}[/CODE]
(iii) රාත්‍රි කාලයේ පමණක් සිදුවන දොර විවෘත වීම් දැක්වීමට මෙම පරිපථය දියුණු කිරීමට සමන් අදහස් කරයි. එම විශේෂාංගය එක් කිරීමට ඔහු පරිපථයේ කුමක් වෙනස් කළ යුතු ද? යම් අයිතම(යක්) ATmega328P ට සම්බන්ධ කළ යුතු නම්, අදාළ තුඩු(ව) දක්වන්න. (ලකුණු 02යි.)<br/><br/>
(b) SuperMobile යනු මාර්ගගත ජංගම දුරකථන අලෙවිසැලක් වන අතර එහි ඉ-වාණිජ්‍යය අඩවිය හරහා පාරිභෝගිකයන්ට ජංගම දුරකථන මිලයට ගත හැකි ය. SuperMobile තම තුන්වන පාර්ශව බෙදාහැරීම් හවුල්කරු ලෙස DeliverToday දූත සේවය (courier) භාවිත කරයි. SuperMobile වෙතින් ජංගම දුරකථන මිලදී ගන්නා පාරිභෝගිකයින් ප්‍රසාද (ලෝයලටි) වැඩසටහනේ සාමාජිකයින් බවට පත් වේ. ඔවුන්ට තම ජංගම දුරකථන භාවිතයට අදාළ විචාර, පසු විපරම් සහ නිර්මාණශීලි අන්තර්ගත මාර්ගගත අඩවියට උඩුගත කර, ඒ සඳහා ආපසු, වාසිදායක ප්‍රසාද ලකුණු ලබාගත හැක.<br/>
(i) SuperMobile සමග සිදු කළ හැකි ඉ-ව්‍යාපාර ගනුදෙනු වර්ග ලියා දක්වන්න. (ලකුණු 01යි.)<br/>
(ii) DeliverToday සේවාව භාවිත කරනවාට වඩා, පාරිභෝගික බෙදාහැරීම් සඳහා, තමන්ගේම බෙදාහැරීම් කණ්ඩායමක් ස්ථාපිත කිරීම පිරිවැය ඵලදායි සහ වඩාත් ලාභදායි බවට SuperMobile හිමිකරුවෝ අනුමාන කරති. මෙම දැක්මට පක්ෂව සහ විපක්ෂව එක් හේතුවක් බැගින් දක්වමින් එම අනුමානය විශ්ලේෂණය කරන්න. (සටහන: මූල්‍යමය පැතිකඩ පමණක් සලකන්න.) (ලකුණු 02යි.)<br/>
(iii) ජංගම දුරකථන විනාශ නොවන නිසා ඒවායේ කල් ඉකුත්වන දින දක්වන්නේ නැත. එනමුදු, ඒවාට බොහෝ විට සීමිත රාක්ක ජීවිත කාලයක් (shelf life) ඇති නිසා එයින් පසු ඒවා මිලට ගැනීමට පාරිභෝගිකයින් අකමැති වේ. මෙම නිරීක්ෂණයට එක් හේතුවක් දක්වන්න. (ලකුණු 01යි.)<br/>
(iv) ඉ-අපද්‍රව්‍ය නිසා සිදුවන පරිසර විනාශය අඩු කිරීමට සහ තම විකිණීම් ඉහළ දැමීමට යන දෙකම සඳහා SuperMobile ආයතනයට භාවිත කිරීමට සුදුසු ව්‍යාපාර උපායක් යෝජනා කරන්න. (ලකුණු 02යි.)`,
        totalMarks: 15
    },
    {
        id: "pq-2023-p2-8",
        questionNumber: "8",
        content: `(a) රූපය 8.1 හි දැක්වෙන පයිතන් කේතයේ ප්‍රතිදානය ලියා දක්වන්න.
<b>රූපය 8.1</b>
[CODE:python]def calculate(n):
  result = 0
  for i in range(1, n+1):
    for j in range(i):
      result += i * j
  return result

print(calculate(4))[/CODE](ලකුණු 02යි.)<br/><br/>
(b) රූපය 8.2 හි දැක්වෙන ලේබල සහිත පයිතන් කේතය, ආදානය කළ දශමය පූර්ණ සංඛ්‍යාවකට තුල්‍ය ද්විමය සංඛ්‍යාව මුද්‍රණය කරයි. කේතය සම්පූර්ණ කිරීම සඳහා P-U ලේබලවලට සුදුසු ආදේශක ලියා දක්වන්න.
<b>රූපය 8.2</b>
[CODE:python]reversed_binary = ''
n = float(input("Enter a whole number: "))
if (n%1 != P):
  exit("Please enter a whole number.")
n = Q(n) #convert n to an integer
if (n == P):
  print(n)
while n >= 1:
  reversed_binary = reversed_binary + R(S)
  n = T
binary = U[::-1]
print(binary)[/CODE](ලකුණු 03යි.)<br/><br/>
(c) බඩු ගබඩාවක පැකේජ ගෙන යන කාර්ය සඳහා සහයෝගයෙන් කටයුතු කිරීමට නිර්මාණය කර ඇති ඒජන්තවරුන් (ජංගම රොබෝවරු) සහිත බහු-ඒජන්ත පද්ධතියක් සලකන්න.<br/>
එක් එක් පැකේජය එහි ගබඩා ස්ථානයේ (A) සිට එයට නියම කළ බෙදාහැරීම් ස්ථානය (B) දක්වා, ගබඩා බිම් ප්‍රදේශය හරහා ගෙන යෑමට අවශ්‍ය ය. තමන්ට නියම කළ භාණ්ඩ A ස්ථානයේ සිට B ස්ථානයට වඩාත් ප්‍රශස්ත (optimum) ආකාරයට ගෙන යෑම එක් එක් ඒජන්තවරයාට පැවරී ඇති කාර්යයයි. දී ඇති පරාමිතීන්ට අදාළ ප්‍රශස්තම තීරණ ගැනීමට එක් එක් ඒජන්තවරයාට තමන්ගේම උපයෝගිතා ශ්‍රිතයක් (utility function) ඇත.<br/>
(i) මෙම බහු-ඒජන්ත පද්ධතියේ ‘ඒජන්ත’ සංකල්පය, සම්මත මෘදුකාංග ක්‍රමලේඛයකින් වෙනස් වන අයුරු මූලික ගති ලක්ෂණ උද්දීපනය කරමින් ලියා දක්වන්න. (ලකුණු 01යි.)<br/>
(ii) ඒජන්තවරුන්ගේ (රොබෝවරුන්ගේ) උපයෝගිතා ශ්‍රිතවල අර්ථදැක්වීම්වලදී (definitions) සැලකිල්ලට ගත හැකි එක් ධනාත්මක (තෑගි ලැබෙන) සහ එක් ඍණාත්මක (දඬුවම් ලැබෙන) කරුණ බැගින් ලියන්න. (ලකුණු 02යි.)`,
        totalMarks: 8
    },
    {
        id: "pq-2023-p2-9",
        questionNumber: "9",
        content: `(a) ඉන්ධන පිරවුම්හලක පාරිභෝගික ගනුදෙනු පිළිබඳ තොරතුරු කළමනාකරණය සඳහා සංවර්ධන කිරීමට බලාපොරොත්තු වන දත්ත සමුදායකට අදාළ පහත විස්තරය සලකන්න.
<p>සෑම පාරිභෝගිකයකුටම [Customer] අනන්‍ය හඳුන්වනයක් [Cid], නමක් [Cname] (මුල් නම [Cfname] සහ වාසගමෙන් [Csname] සෑදුන) සහ දුරකථන අංකයක් [Cphone] ඇත. එක් පාරිභෝගිකයකුට දුරකථන අංක කිහිපයක් තිබිය හැක. එක් පාරිභෝගිකයකුට වාහන එකක් හෝ වැඩි ගණනක් හෝ අයිති [owns] විය හැක.</p>
<p>සෑම වාහනයකටම [Vehicle] අනන්‍ය වාහන අංකයක් [Vno] සහ මාදිලියක් [Vmodel] ඇත. එක් වාහනයක් අයිති එක් පාරිභෝගිකයකුට පමණි.</p>
<p>ඉන්ධන පිරවුම්හල, පැට්රෝල් වර්ග [Petrol] කිහිපයක් විකුණයි. සෑම පැට්රෝල් වර්ගයකටම අනන්‍ය හඳුන්වනයක් [Pid] සහ ලීටරයකට මිලක් [Pprice] ඇත.</p>
<p>වාහනයක් සඳහා විවිධ පැට්රෝල් වර්ග මිලට ගත [purchases] හැකි ය. එක් එක් පැට්රෝල් වර්ගය වාහන ගණනාවකට මිලට ගත හැක.</p>
<p>සෑම පැට්රෝල් මිලට ගැනීමක් සඳහාම, වාහන අංකය [Vno], පැට්රෝල් වර්ග හඳුන්වනය [Pid], විකිණූ පැට්රෝල් ප්‍රමාණය [Sqty] සහ විකිණූ දිනය [Sdate] සටහන් කෙරේ.</p>
<p>සෑම සේවකයකුටම [Employee] අනන්‍ය අංකයක් [Eno], නමක් [Ename], තනතුරක් [Eposition] සහ වර්ගයක් [Etype] (පූර්ණ කාලීන හෝ අර්ධ කාලීන හෝ වන) ඇත. එක් සේවකයකුට පැට්රෝල් වර්ග ගණනාවක් අලෙවි කළ [sells] හැක. එක් එක් පැට්රෝල් වර්ගය අලෙවි කිරීම බොහෝ සේවකයන්ට කළ හැක.</p>
(i) මෙම යෙදුම සඳහා භූතාර්ථ (entities), උපලක්ෂණ (attributes) සහ සම්බන්ධතා (relationships) දැක්වෙන ER සටහනක් අඳින්න. යතුරු උපලක්ෂණ (key attributes) යටින් ඉරි අඳින්න.<br/>සටහන: භූතාර්ථ, උපලක්ෂණ සහ සම්බන්ධතා සඳහා ඉහත විස්තරයේ කොටු වරහන් තුළ දී ඇති පද පමණක් භාවිත කරන්න. භූතාර්ථ සහ සම්බන්ධතා සඳහා ඉංග්‍රීසි කැපිටල් අකුරු යොදන්න. (ලකුණු 04යි.)<br/><br/>
(ii) ER සටහන සඳහා සම්බන්ධතා පටිපාටික සටහන (relational schema) ලියා දක්වන්න.<br/>සටහන: වගු, ඒවායේ උපලක්ෂණ නම් සමග පමණක් ලැයිස්තුගත කරන්න. ප්‍රාථමික යතුරු (primary keys) යටින් ඉරි අඳින්න. එක් එක් ආගන්තුක යතුර (foreign key) එය යොමු කරන වගුවට ඊතලයකින් සම්බන්ධ කරන්න. ඊතලයේ හිස මගින් යොමු කරන වගුවේ ප්‍රාථමික යතුර පෙන්විය යුතු ය. (ලකුණු 04යි.)<br/><br/>
(b) සිසුන්, ඔවුන්ගේ විෂයයන්, එම විෂයවල ගුරුවරුන්, විභාග දිනයන් සහ ලකුණු දැක්වෙන පහත Result වගුව සලකන්න.<br/>
[DIAGRAM:2024-p2-q9b-table]
(i) Result වගුව කුමන ප්‍රමත අවස්ථාවෙහි පවතී ද? ඔබේ පිළිතුර සාධාරණීකරණය කරන්න. (ලකුණු 02යි.)<br/>
(ii) Result වගුව එහි ඊළඟ ප්‍රමත අවස්ථාවට හරවන අයුරු විස්තර කරන්න. (ලකුණු 02යි.)`,
        totalMarks: 12
    },
    {
        id: "pq-2023-p2-10",
        questionNumber: "10",
        content: `(a) පහත පයිතන් ප්‍රකාශය සලකන්න.<br>answer = height + width<br>ඉහත ප්‍රකාශයට අදාළව ක්‍රියාකරවීමට මධ්‍ය සැකසුම් ඒකකයට (CPU) ද්විමය උපදෙස් (instructions) ගණනාවක් තිබෙනු ඇත. ඉන් පළමුවැන්න, height විචල්‍යය රෙජිස්තරයකට ප්‍රවේශනය (load) කිරීමයි. හතරවැන්න, එකතු කිරීමේ ප්‍රතිඵලය answer විචල්‍යයට ආචය කිරීමයි.<br>දෙවැනි සහ තෙවැනි උපදෙස් කුමක් විය හැකි ද? (ලකුණු 02යි.)<br/><br/>
(b) 1100₂ – 1010₂ හි පිළිතුර, 1010₂ හි දෙකෙහි අනුපූරකය 1100₂ ට එකතු කර, ඉදිරියට ගෙන යන බිටුව (carry) නොසලකා හැරීමෙන් ලබාගත හැකි බව පෙන්වන්න. (ලකුණු 03යි.)<br/><br/>
(c) අමල් තනි සකසනයක් සහිත (single processor) පරිගණකයක් පණගන්වා වෙබ් අතරික්සුවක් (web browser) අරඹයි. මද වේලාවකට පසු එම පරිගණකයේම ඔහු පැතුරුම්පත් (spreadsheet) යෙදුමක් ද අරඹයි.<br/>
(i) සූදානම්, ක්‍රියාත්මක සහ අවහිර කළ යනු ක්‍රියායනයක තත්ත්ව තුනකි. පරිගණකයේ මෙහෙයුම් පද්ධතිය, ඉහත පැතුරුම්පත් ක්‍රියායනයට සකසනය මත ධාවනය වීමට ඉඩ සැලසීම සඳහා වෙබ් අතරික්සු ක්‍රියායනය තාවකාලිකව නතර කරයි. එවිට වෙබ් අතරික්සු ක්‍රියායනය ඉහත තත්ත්ව තුනෙන් කුමන තත්ත්වයට සංක්‍රාන්ති වේ ද? (ලකුණු 01යි.)<br/>
(ii) වෙබ් සේවාදායකයාගෙන් (web server) දත්ත සමහරක් ලැබෙන තුරු බලා සිටීමට සිදුවන විට වෙබ් අතරික්සු ක්‍රියායනයේ සිදුවන අවස්ථා සංක්‍රාන්තිය (state transition) කුමක්දැයි ලියා දක්වන්න. (ලකුණු 01යි.)<br/>
(iii) වෙබ් අතරික්සු ක්‍රියායනය → පැතුරුම්පත් ක්‍රියායනය යන සන්දර්භ ස්විචයේදී (context switch), ක්‍රියායන පාලන ඛණ්ඩවල (process control block) ‘වැඩසටහන් ගණකයේ (program counter)’ භාවිතය පැහැදිලි කරන්න. (ලකුණු 02යි.)<br/><br/>
(d) පරිගණකයක් බිටු 16 ක අතථ්‍ය යොමු භාවිත කරයි. මෙම පරිගණකයට 32 KB භෞතික මතකයක් ඇති අතර පිටුවක විශාලත්වය 4 KB වේ.<br/>
(i) භෞතික මතකයේ ඇති රාමු (frames) ගණන ලියා දක්වන්න. (ලකුණු 01යි.)<br/>
(ii) විශාලත්වය 64 KB වූ ක්‍රමලේඛයක් පරිශීලකයෙක් මෙම පරිගණකයේ ධාවනය කරයි. එක්තරා අවස්ථාවකදී එම ක්‍රියායනයේ පිටු වගුවේ (page table) මුල් පේළි කිහිපයේ තෝරාගත් ක්ෂේත්‍ර කිහිපයක් පහත පරිදි වේ.<br/>[DIAGRAM:2024-p2-q10d-table]<br/>සටහන්:<br/>පිටු අංකය, පිටු වගුවට සූචකයක් (index) ලෙස භාවිත වේ.<br/>රාමු අංකය ද්විමය ලෙස දක්වා ඇත. බිටුවේ වලංගුතාව සඳහා 1 මගින් දැක්වෙන්නේ එම පිටුව භෞතික මතකයේ ඇති බවයි.<br/>ඉහත ක්‍රියායනයේ 0010 0000 0000 0100 අතථ්‍ය යොමුව අවශ්‍ය යැයි සිතන්න. ඉහත යොමුව අනුරූපණය වන බිටු 15 කින් යුත් භෞතික යොමුව ලියා දක්වන්න. (ලකුණු 01යි.)<br/>
(iii) ඉහත (ii) හි සඳහන් ක්‍රියායනයේ 0100 0000 0000 0001 අතථ්‍ය යොමුව අවශ්‍ය යැයි සිතන්න. මෙහෙයුම් පද්ධතිය එම පිටුව සඳහා රාමුව ලෙස 011 තෝරා නොගැනීමට එක් හේතුවක් ලියා දක්වන්න. (ලකුණු 01යි.)<br/>
(iv) පිටු වගුවේ ඉහත ක්ෂේත්‍රවලට අමතරව, ‘වෙනස්වීම් (modified)’ බිටුවක් ද තිබෙනු ඇත. පිටුවේ දත්ත වෙනස් වූ විට එම බිටුව 1 බවට පත් කෙරේ. එම තොරතුර මෙහෙයුම් පද්ධතියට වැදගත් වන්නේ ඇයි? (ලකුණු 01යි.)<br/><br/>
(e) (i) සූචක විභාජනය (indexed allocation) භාවිත කරන ඩිස්කයක average.py ගොනුවේ දත්ත ආචය කිරීමට කාණ්ඩ 100, 125, 150 සහ 175 භාවිත වේ. ගොනුවේ කාණ්ඩ සොයාගැනීමට මෙහෙයුම් පද්ධතියට මෙම විභාජන ක්‍රමයේදී අවශ්‍ය වන, වැදගත් තොරතුර කුමක් ද? (ලකුණු 01යි.)<br/>
(ii) යාබද විභාජනය (contiguous allocation) සහ සූචක විභාජනය සැසඳීමේදී, ඩිස්කයක බාහිර ඛණ්ඩනීකරණය (external fragmentation) ඇති වීමට ඉඩ ඇත්තේ කුමකින් ද? (ලකුණු 01යි.)`,
        totalMarks: 15
    }
];

export const paper2023_p2: Paper = {
    id: "past-paper-2023-p2",
    title: "A/L ICT Paper II - 2023",
    examName: {
      sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
      tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
      english: "General Certificate of Education (Adv. Level) Examination",
    },
    year: 2023,
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
