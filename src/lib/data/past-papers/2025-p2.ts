import type { Paper, StructuredQuestion } from "../../types";

const partA: StructuredQuestion[] = [
  {
    id: "pq-2025-p2-1",
    questionNumber: "1",
    content: `<p>සිසුවෙකු PHP, MySQL සහ HTML භාවිතයෙන් පොත් අලෙවි කරන වෙබ් අඩවියක් (shopping cart) නිර්මාණය කරයි.</p>`,
    totalMarks: 10,
    relatedNoteId: "note-10-7-0",
    subParts: [
      {
        id: "pq-2025-p2-1-a",
        label: "(a)",
        content: `<p>Books_database දත්ත සමුදායේ Book වගුවට id (int), category (char), name (varchar), price (int), publisher (char), image (char) යන ක්ෂේත්‍ර සහිතව, කිසිදු ක්ෂේත්‍රයක් NULL නොවන පරිදි වගුවක් ගොඩනැගීමට අවශ්‍ය SQL ප්‍රකාශය ලියන්න.</p><p>[සටහන: 'image' ක්ෂේත්‍රයෙන් රඳවා ගන්නේ ඡායාරූප ගොනුවේ නාමය පමණි.]</p>`,
        marks: 3,
      },
      {
        id: "pq-2025-p2-1-b",
        label: "(b)",
        content: `<p>පහත රෙකෝඩය Book වගුවට ඇතුළත් කිරීමට SQL ප්‍රකාශය ලියන්න.</p><table><tr><th>id</th><th>category</th><th>name</th><th>price</th><th>publisher</th><th>image</th></tr><tr><td>1</td><td>Art</td><td>Painting</td><td>800</td><td>Rose</td><td>a1</td></tr></table>`,
        marks: 1,
      },
      {
        id: "pq-2025-p2-1-c",
        label: "(c)",
        content: `<p>රූපය 1.1 හි දැක්වෙන ප්‍රතිදානය ලබාදෙන index.php ගොනුවේ කේත කොටසේ (රූපය 1.2) හිස්තැන් සම්පූර්ණ කරන්න.</p>[CODE:php]<?php
$conn = new mysqli('localhost', 'devi', 'C6a#@Q!H', 'Books_database');
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql = [__1__];
$result = $conn->query($sql);
echo "<ul>";
while ($row = mysqli_fetch_assoc($result)) { ?>
[__2__]
  <li>
    <h2><?php echo $row['category']; ?></h2>
    <h3><?php echo $row['name']; ?></h3>
    <img src='Images/<?php echo $row['image']; ?>.jpg'>
    <p><?php echo $row['publisher']; ?></p>
    <p>Rs.<?php echo $row['price']; ?></p>
    <form method="POST" action="[__3__]">
      <input type="hidden" name="product_id" id="product_id" value="<?php echo [__4__]; ?>">
      <label for="product_quantity">Quantity:</label>
      <input type="number" id="product_quantity" name="product_quantity" value="" min="0" max="10">
      <button type="submit" name="add_to_cart">Add to Cart</button>
    </form>
  </li>
<?php
}
?>
</ul>[/CODE]
<p><b>ලැයිස්තුව:</b> {1 – "SELECT * FROM Book", 2 – &lt;?php, 3 – shop.php, 4 – $row['id'], 5 – "SELECT * FROM Books_database", 6 – product_id, 7 – shop.css}</p>`,
        marks: 4,
      },
      {
        id: "pq-2025-p2-1-d",
        label: "(d)",
        content: `<p>'Architecture' යන වචනය රූපය 1.1 හි දක්නට ලැබේ. එය මුද්‍රණය කිරීමට භාවිත කළ HTML කේත පේළිය ලියන්න.</p>`,
        marks: 1,
      },
      {
        id: "pq-2025-p2-1-e",
        label: "(e)",
        content: `<p>'Lunuganga' පොතේ මිල රු. 3,500 ලෙස වෙනස් කළ යුතු ය. මෙම වෙනස සිදු කළ යුත්තේ කොතැනක ද?</p>`,
        marks: 1,
      },
    ],
  },
  {
    id: "pq-2025-p2-2",
    questionNumber: "2",
    content: `<p>Ceylon Tours යනු අත්පොත ක්‍රියාවලීන් මත රඳාපවතින සංචාරක සමාගමකි. නව පද්ධතියක් ගොඩනැගීමට නියමිත ය.</p>`,
    totalMarks: 13,
    relatedNoteId: "note-7-6-0",
    subParts: [
      {
        id: "pq-2025-p2-2-a",
        label: "(a)",
        content: `<p>කළමනාකාරීත්වය සලකා බලන A, B, C සහ D විකල්ප (feasibility study වර්ග) සඳහා සුදුසු පද ලියා, නව සේවාදායකයක් අවශ්‍ය ද යන්න හේතුව සහිතව දක්වා, එක් අවදානමක් සහ අවම කිරීමේ පියවරක් ලියා, functional / non-functional requirements දෙක බැගින් දක්වන්න.</p>`,
        marks: 6,
        subParts: [
          { id: "pq-2025-p2-2-a-i", label: "(i)", content: `<p>A, B, C සහ D සඳහා සුදුසු පද (feasibility study වර්ග) ලියන්න.</p>`, marks: 1 },
          { id: "pq-2025-p2-2-a-ii", label: "(ii)", content: `<p>නව සේවාදායකයක් අවශ්‍ය ද? හේතුවක් සමග පිළිතුරු දෙන්න.</p>`, marks: 2 },
          { id: "pq-2025-p2-2-a-iii", label: "(iii)", content: `<p>C විකල්පයෙන් හඳුනාගත හැකි එක් අවදානමක් සහ එය අවම කිරීමට එක් පියවරක් ලියන්න.</p>`, marks: 1 },
          { id: "pq-2025-p2-2-a-iv", label: "(iv)", content: `<p>functional requirement එකක් සහ non-functional requirement එකක් නාමයෙන් වශයෙන් ලියන්න.</p>`, marks: 2 },
        ],
      },
      {
        id: "pq-2025-p2-2-b",
        label: "(b)",
        content: `<p>රූපය 2.1 හි දැක්වෙන STUDENT–READS–BOOK ER රූපසටහන සලකා, එය relations set එකකට (map) පරිවර්තනය කරන්න. එක් එක් relation සඳහා නම → (attribute1, attribute2, ...) ආකෘතියෙන් ලියා, primary key ට යටින් ඉරි අඳින්න.</p>`,
        marks: 4,
      },
      {
        id: "pq-2025-p2-2-c",
        label: "(c)",
        content: `<p>මෙම සම්බන්ධතාවය සඳහා යෝග්‍යතම දත්ත ව්‍යුහය තෝරාගැනීම සඳහා සලකා බැලිය යුතු කරුණු ලියන්න.</p>`,
        marks: 3,
      },
    ],
  },
  {
    id: "pq-2025-p2-3",
    questionNumber: "3",
    content: `<p>ක්‍රමලේඛ දෝෂ සහ පූර්ණ සංඛ්‍යා එකතුවකින් ඉරට්ටේ සංඛ්‍යා එකතු කරන පයිතන් ක්‍රමලේඛයක් පිළිබඳ ප්‍රශ්නයකි.</p>`,
    totalMarks: 10,
    relatedNoteId: "note-9-1-5",
    subParts: [
      {
        id: "pq-2025-p2-3-a",
        label: "(a)",
        content: `<p>syntax errors සහ logical errors යනු කුමක්දැයි විස්තර කරන්න.</p>`,
        marks: 2,
        subParts: [
          { id: "pq-2025-p2-3-a-i", label: "(i)", content: `<p>syntax errors (කාන දෝෂ) විස්තර කරන්න.</p>`, marks: 1 },
          { id: "pq-2025-p2-3-a-ii", label: "(ii)", content: `<p>logical errors (තාර්කික දෝෂ) විස්තර කරන්න.</p>`, marks: 1 },
        ],
      },
      {
        id: "pq-2025-p2-3-b",
        label: "(b)",
        content: `<p>පරිශීලකයා -1 ආදානය කරන තුරු පූර්ණ සංඛ්‍යා (integers) එකින් එක ආදානය කරමින්, ඉන් ඉරට්ටේ සංඛ්‍යාවල එකතුව මුද්‍රණය කරන පයිතන් ක්‍රමලේඛයක් සම්බන්ධ ප්‍රශ්න.</p>`,
        marks: 8,
        subParts: [
          { id: "pq-2025-p2-3-b-i", label: "(i)", content: `<p>අවශ්‍ය ඇල්ගොරිතමය නිරූපණය කරන ගැලපුම් සටහනක් (flowchart) අඳින්න.</p>`, marks: 3 },
          { id: "pq-2025-p2-3-b-ii", label: "(ii)", content: `<p>1, 2, 3, 5 සහ -1 යන පූර්ණ සංඛ්‍යා පහ එකින් එක ආදානය කළ විට ක්‍රමලේඛයේ ප්‍රතිදානය කුමක් විය යුතු ද?</p>`, marks: 1 },
          { id: "pq-2025-p2-3-b-iii", label: "(iii)", content: `<p>මේ සඳහා අවශ්‍ය පයිතන් කේත සටහන ලියන්න.</p>`, marks: 3 },
          { id: "pq-2025-p2-3-b-iv", label: "(iv)", content: `<p>ආදාන අගය floating point අගයක් ලෙස ලබාදුන් විට කුමක් සිදු වේද?</p>`, marks: 1 },
        ],
      },
    ],
  },
  {
    id: "pq-2025-p2-4",
    questionNumber: "4",
    content: `<p>ක්‍රියාවලීන්, swap කිරීම, virtual memory, සහ FAT allocation පිළිබඳ ප්‍රශ්න.</p>`,
    totalMarks: 10,
    relatedNoteId: "note-5-4-0",
    subParts: [
      {
        id: "pq-2025-p2-4-a",
        label: "(a)",
        content: `<p>P0 සහ P1 ක්‍රියායන OS → P0 → OS → P1 → OS → P0 → OS → P1 ... අනුපිළිවෙලින් ක්‍රියාත්මක වේ. Running, Blocked, Ready යන තත්ත්ව භාවිතයෙන් state transitions සහ context switching පිළිබඳ ප්‍රශ්න.</p>`,
        marks: 4,
        subParts: [
          { id: "pq-2025-p2-4-a-i", label: "(i)", content: `<p>P0 සහ P1 අතර සම්බන්ධතාව වෙනස් වන විට, P1 ක්‍රියාවලියේ තත්ත්වය තහවුරු වන්නේ කුමක් ලෙසද?</p>`, marks: 1 },
          { id: "pq-2025-p2-4-a-ii", label: "(ii)", content: `<p>P0 ට අවශ්‍ය දෙයක් ලැබෙන තෙක් රැඳී සිටින විට, context switching සිදුවන අවස්ථාව කුමක් ද?</p>`, marks: 2 },
          { id: "pq-2025-p2-4-a-iii", label: "(iii)", content: `<p>ක්‍රියාවලියක් Blocked තත්ත්වයට යාමට හේතුව කුමක් ද?</p>`, marks: 1 },
        ],
      },
      {
        id: "pq-2025-p2-4-b",
        label: "(b)",
        content: `<p>swapping මූලික අර්ථය සහ, 16-bit virtual addresses, 64 KB physical memory, 4 KB page size ඇති පද්ධතියක P0 සහ P1 සඳහා ලබාදුන් page tables යොදාගෙන virtual address එකකට අදාළ physical address ගණනය කිරීම.</p>`,
        marks: 3,
        subParts: [
          { id: "pq-2025-p2-4-b-i", label: "(i)", content: `<p>swapping (ප්‍රතිස්ථාපනය) මූලික ලෙස අර්ථ දක්වන්න.</p>`, marks: 1 },
          { id: "pq-2025-p2-4-b-ii", label: "(ii)", content: `<p>ලබාදුන් page tables යොදාගෙන P1 ක්‍රියාවලියේ virtual address 0001 0001 0001 0001 සඳහා physical address ගණනය කරන්න.</p>`, marks: 1 },
          { id: "pq-2025-p2-4-b-iii", label: "(iii)", content: `<p>එම ගණනයේදී P0 ක්‍රියාවලියට අදාළව ඇතිවිය හැකි ගැටලුවක් දක්වන්න.</p>`, marks: 1 },
        ],
      },
      {
        id: "pq-2025-p2-4-c",
        label: "(c)",
        content: `<p>USB block size 4 KB වූ, ලබාදුන් FAT table එකක් සහ ගොනුවක ආරම්භක block එක යොදාගෙන ගොනු ප්‍රමාණය ගණනය කිරීම සහ block size තේරීමේ බලපෑම.</p>`,
        marks: 3,
        subParts: [
          { id: "pq-2025-p2-4-c-i", label: "(i)", content: `<p>ලබාදුන් FAT table එකෙන් ගොනුවක් සඳහා අදාළ blocks වල අනුපිළිවෙල (chain) දක්වන්න.</p>`, marks: 1 },
          { id: "pq-2025-p2-4-c-ii", label: "(ii)", content: `<p>file allocation block size වැඩි/අඩු කිරීමේ ප්‍රතිලාභයක් සහ අවාසියක් සසඳා දක්වන්න.</p>`, marks: 2 },
        ],
      },
    ],
  },
];

const partB: StructuredQuestion[] = [
  {
    id: "pq-2025-p2-5",
    questionNumber: "5",
    content: `<p>Boolean algebra, K-map, සහ logical circuit design පිළිබඳ රචනා ප්‍රශ්නයකි.</p>`,
    totalMarks: 15,
    relatedNoteId: "note-4-2-2",
    subParts: [
      { id: "pq-2025-p2-5-a", label: "(a)", content: `<p>දෙන ලද Boolean ප්‍රකාශනය (ābcd + ābcd̄ + ābc̄d + abc̄d + abcd + ābd̄ + abd̄ + bc ආකෘතියේ) සරල කරන්න.</p>`, marks: 5 },
      { id: "pq-2025-p2-5-b", label: "(b)", content: `<p>3-bit key (k2, k1, k0) සහ timer input (t) එකකින් යුත් vault lock එකක් විවෘත වන සංයෝජන (3, 6, 9, 12, 15 ආදී) ලබාදී ඇති truth table එකකින් K-map එකක් යොදාගෙන සරල තර්කණ ප්‍රකාශනයක් ලබාගන්න.</p>`, marks: 7 },
      { id: "pq-2025-p2-5-c", label: "(c)", content: `<p>timer input නොමැති විට vault එක විවෘත කළ හැකි ද යන්න ලබාගත් ප්‍රකාශනය ඇසුරින් සාධාරණීකරණය කරන්න.</p>`, marks: 3 },
    ],
  },
  {
    id: "pq-2025-p2-6",
    questionNumber: "6",
    content: `<p>UDP, malware, bus topology, IP addressing, TCP/IP layers, digital signatures, සහ subnetting පිළිබඳ ප්‍රශ්නයකි.</p>`,
    totalMarks: 15,
    relatedNoteId: "note-6-7-0",
    subParts: [
      { id: "pq-2025-p2-6-a", label: "(a)", content: `<p>UDP භාවිත කරන යෙදුම් දෙකක් සහ UDP හට සිදුකළ නොහැකි (reliable delivery වැනි) ලක්ෂණයක් ලියන්න.</p>`, marks: 1.5 },
      { id: "pq-2025-p2-6-b", label: "(b)", content: `<p>අන්තර්ජාලයෙන් ලැබිය හැකි අනිෂ්ට මෘදුකාංග (malware) වර්ග තුනක් ලියන්න.</p>`, marks: 1.5 },
      { id: "pq-2025-p2-6-c", label: "(c)", content: `<p>පරිගණක තුනක්, සේවාදායක (servers) දෙකක් සහ ජාල මුද්‍රකයක් (network printer) bus topology එකකින් සම්බන්ධ කර ඇති ආකාරය රූප සටහනකින් දක්වන්න.</p>`, marks: 2 },
      { id: "pq-2025-p2-6-d", label: "(d)", content: `<p>B පන්තියේ IP ලිපිනයක් සහ private IP ලිපිනයක් ලබා දෙන්න.</p>`, marks: 1 },
      { id: "pq-2025-p2-6-e", label: "(e)", content: `<p>TCP/IP layers A–D (application, transport, internet, network access) සහ ඒවායේ විස්තර 1–4 නිවැරදිව ගළපන්න.</p>`, marks: 2 },
      { id: "pq-2025-p2-6-f", label: "(f)", content: `<p>අංකිත ලේඛනවලට (digital documents) digital signatures ඇමිණීමේ අරමුණ ලියන්න.</p>`, marks: 2 },
      { id: "pq-2025-p2-6-g", label: "(g)", content: `<p>192.168.50.0/24 network එකෙන් 28, 12, 60 සහ 6 යන host ගණන් සහිත උපජාල (subnets) 4ක් සකසා, network address, broadcast address සහ valid host range දක්වන subnetting වගුව සම්පූර්ණ කරන්න.</p>`, marks: 5 },
    ],
  },
  {
    id: "pq-2025-p2-7",
    questionNumber: "7",
    content: `<p>Ceylon Crafts නම් කුඩා සාප්පුවකට අදාළ e-commerce ව්‍යාපාරික මාදිලි, ඉන්ටර්නෙට් වෙළඳාම සහ digital divide පිළිබඳ ප්‍රශ්නයකි.</p>`,
    totalMarks: 6,
    relatedNoteId: "note-12-1-0",
    subParts: [
      { id: "pq-2025-p2-7-a", label: "(a)", content: `<p>pure brick-and-mortar ව්‍යාපාරයක් යනු කුමක්දැයි විස්තර කර, e-commerce transaction වර්ගයක් (B2B, B2C, C2C, B2C ආදී) හඳුනාගෙන, ඔන්ලයින් සාප්පුවකින් ලැබෙන වාසි සහ ඇතිවිය හැකි ගැටලු දක්වා, digital divide සම්බන්ධ ප්‍රශ්නවලට පිළිතුරු දෙන්න.</p>`, marks: 6 },
    ],
  },
  {
    id: "pq-2025-p2-8",
    questionNumber: "8",
    content: `<p>සිසුන්ගේ index number එකෙන් ලියාපදිංචි කර, ICT, Physics, Chemistry යන විෂයයන්ට ලකුණු ඇතුළත් කිරීම / පෙන්වීම / ඉවත්වීම යන විකල්ප සහිත menu-based පද්ධතියක් පිළිබඳ ප්‍රශ්නයකි.</p>`,
    totalMarks: 15,
    relatedNoteId: "note-9-1-5",
    subParts: [
      { id: "pq-2025-p2-8-a", label: "(a)", content: `<p>මෙනුවේ එක් එක් ක්‍රියාවලිය (ලකුණු ඇතුළත් කිරීම/යාවත්කාලීන කිරීම, ලකුණු පෙන්වීම, ඉවත්වීම) ක්‍රියාත්මක කිරීමට යොදාගත හැකි සුදුසුම දත්ත ව්‍යුහ ලියන්න.</p>`, marks: 3 },
      { id: "pq-2025-p2-8-b", label: "(b)", content: `<p>සිසුවෙකුගේ index number සහ විෂයයන් තුනකට අදාළ ලකුණු (getMarks(indexNumber, mark1, mark2, mark3) ලෙස) tuple එකක ගබඩා කිරීමේ වාසි සහ අවාසි ඇතුළත් ප්‍රශ්න.</p>`, marks: 4 },
      { id: "pq-2025-p2-8-c", label: "(c)", content: `<p>සිසුන් නාමලේඛනයේ එක් එක් සිසුවෙකුට classMarks නමැති ලකුණු ලැයිස්තුවක් ඇති අතර, -1 අගය දෙන ලද විට සිසුවා ලේඛනයෙන් ඉවත් කිරීම වැනි ක්‍රියාවලීන් සම්බන්ධ ප්‍රශ්න.</p>`, marks: 4 },
      { id: "pq-2025-p2-8-d", label: "(d)", content: `<p>විෂයමාලාවේ එක් එක් සිසුවෙකුගේ සාමාන්‍ය ලකුණු ගණනය කර, ඉහළම සාමාන්‍ය ලකුණු ඇති සිසුවා හඳුනාගැනීම වැනි ප්‍රශ්න.</p>`, marks: 4 },
    ],
  },
  {
    id: "pq-2025-p2-9",
    questionNumber: "9",
    content: `<p>පාසැලේ විවිධ සංගම්වල events කළමනාකරණය කිරීමේ දත්ත සමුදායක් සඳහා ER රූපසටහන, relational schema සහ normalization පිළිබඳ ප්‍රශ්නයකි.</p>`,
    totalMarks: 15,
    relatedNoteId: "note-10-7-0",
    subParts: [
      {
        id: "pq-2025-p2-9-a",
        label: "(a)",
        content: `<p>සිසුවෙකු [StuID, StuName, Class, Email], සංගමයක් [ClubID, ClubName, Location, TeacherID], event එකක් [EventID, EName, ClubID, MaxParticipants, StartDate, EndDate] සහ සහභාගීත්වය [Role] යන දත්ත සලකා ER රූපසටහනක් සහ relational schema එකක් සකසන ප්‍රශ්න.</p>`,
        marks: 9,
        subParts: [
          { id: "pq-2025-p2-9-a-i", label: "(i)", content: `<p>ලබාදුන් තොරතුරු අනුව entities, attributes, relationships සහ cardinality දක්වන ER රූපසටහනක් අඳින්න. primary key attributes ට යටින් ඉරි අඳින්න.</p>`, marks: 5 },
          { id: "pq-2025-p2-9-a-ii", label: "(ii)", content: `<p>ලබාගත් ER රූපසටහන අනුව relational schema එකක් ලියන්න.</p>`, marks: 4 },
        ],
      },
      {
        id: "pq-2025-p2-9-b",
        label: "(b)",
        content: `<p>StuID, StuName, Phone, EventID, EventType, EventFee, Services, StartDate, EndDate යන තීරු සහිත denormalized දත්ත වගුවක් ලබාදී ඇත.</p>`,
        marks: 6,
        subParts: [
          { id: "pq-2025-p2-9-b-i", label: "(i)", content: `<p>ලබාදුන් වගුව පවතින්නේ කුමන normal form එකේ ද? හේතුව සමග පැහැදිලි කරන්න.</p>`, marks: 2 },
          { id: "pq-2025-p2-9-b-ii", label: "(ii)", content: `<p>ලබාදුන් වගුව 1NF, 2NF සහ 3NF දක්වා normalize කර, එක් එක් අවස්ථාවේ ලැබෙන වගු ලියන්න.</p>`, marks: 4 },
        ],
      },
    ],
  },
  {
    id: "pq-2025-p2-10",
    questionNumber: "10",
    content: `<p>Village Hospital හි වෛද්‍ය හමුවීම් 0800 සිට 1700 දක්වා පැයකට වරක් (0800, 0815, 0830, 0845 ලෙස) වෙන්කරගැනීමට ඉඩ දෙන BOOKING(Date, Time, Name, Phone) දත්ත සමුදායක් සහිත වෙබ් අඩවියක් සම්බන්ධ ප්‍රශ්නයකි.</p>`,
    totalMarks: 15,
    relatedNoteId: "note-10-7-0",
    subParts: [
      { id: "pq-2025-p2-10-a", label: "(a)", content: `<p>රූපය 10.1 හි දැක්වෙන අන්තරාසර්ග ආකෘතිය අනුව, BOOKING වගුවට තෝරාගත් දිනය සහ වේලාව ඇතුළත් කිරීමට අවශ්‍ය SQL ප්‍රකාශය ලියන්න.</p>`, marks: 1 },
      {
        id: "pq-2025-p2-10-b",
        label: "(b)",
        content: `<p>list.php ගොනුවෙන් තෝරාගත් දිනයට ඇති නිදහස් වේලාවන් ලබාදී, එම දත්ත මත පදනම්ව book.php ගොනුව වෙන්කරගැනීම සකසන කේත කොටස (රූපය 10.3) සම්බන්ධ ප්‍රශ්න.</p>`,
        marks: 7,
        subParts: [
          { id: "pq-2025-p2-10-b-i", label: "(i)", content: `<p>රූපය 10.3 හි A කොටසින් දැක්වෙන කේත කොටසේ අර්ථය කුමක් ද?</p>`, marks: 1 },
          { id: "pq-2025-p2-10-b-ii", label: "(ii)", content: `<p>රූපය 10.3 හි A කොටසේ පේළියේ ඊළඟට ඇතුළත් විය යුතු පේළිය ලියන්න.</p>`, marks: 1 },
          { id: "pq-2025-p2-10-b-iii", label: "(iii)", content: `<p>රූපය 10.3 හි B කොටසින් ගැලපෙන පණිවිඩය කුමක් විය යුතුද යන්න යුක්තිගත කරන්න.</p>`, marks: 1 },
          { id: "pq-2025-p2-10-b-iv", label: "(iv)", content: `<p>රූපය 10.3 හි C, D, E සහ F ලෙස දැක්වෙන කොටස් සඳහා ලබාදුන් ලැයිස්තුවෙන් (avail[0]==0, &lt;td style='background-color:green'&gt;08:00&lt;/td&gt;, &lt;td style='background-color:red'&gt;08:00&lt;/td&gt;, &lt;hr&gt;, &lt;table&gt;, &lt;tr&gt;) නිවැරදි කේත තෝරා ලියන්න.</p>`, marks: 4 },
        ],
      },
      { id: "pq-2025-p2-10-c", label: "(c)", content: `<p>නෝරාගත් දිනය සහ රූපය 10.2 හි දැක්වෙන මුඛාමිතියෙන් නෝරාගත් වේලාවක් සඳහා book.php ගොනුව තුළ සිදුවිය යුතු අනුපිළිවෙල ලියන්න.</p>`, marks: 2 },
      { id: "pq-2025-p2-10-d", label: "(d)", content: `<p>BOOKING වගුව SQL injection වැනි ආරක්ෂක තර්ජනවලින් ආරක්ෂා කර ගැනීම සඳහා ගත යුතු පියවරක් ලියන්න.</p>`, marks: 2 },
      { id: "pq-2025-p2-10-e", label: "(e)", content: `<p>සංවර්ධිත වෙබ් අඩවිය පොදුවේ ප්‍රකාශයට පත් කිරීම (publish) සඳහා web hosting සේවාවක් තෝරාගැනීමේදී සලකා බැලිය යුතු කරුණක් ලියන්න.</p>`, marks: 1 },
      { id: "pq-2025-p2-10-f", label: "(f)", content: `<p>වාර්ෂික මිල රු. 7,500 ක් වන hosting සේවාවක් තෝරාගැනීම යුක්තිසහගත ද යන්න වියදම හා ප්‍රතිලාභ සලකා විචාරාත්මකව සාකච්ඡා කරන්න.</p>`, marks: 2 },
    ],
  },
];

export const paper2025_p2: Paper = {
  id: "past-paper-2025-p2",
  title: "A/L ICT Paper II - 2025",
  examName: {
    sinhala: "අධ්‍යයන පොදු සහතික පත්‍ර (උසස් පෙළ) විභාගය",
    tamil: "கல்விப் பொதுத் தராதரப் பத்திர (உயர் தர)ப் பரீட்சை",
    english: "General Certificate of Education (Adv. Level) Examination",
  },
  year: 2025,
  subject: "තොරතුරු හා සන්නිවේදන තාක්ෂණය",
  subjectCode: 20,
  time: {
    sinhala: "පැය තුනයි",
    tamil: "மூன்று மணித்தியாலம்",
    english: "Three hours",
  },
  content: {
    title: "Paper II",
    partA: {
      title: "A කොටස - ව්‍යුහගත රචනා",
      instructions: "ප්‍රශ්න හතරටම පිළිතුරු මෙම පත්‍රයේම සපයන්න.",
      questions: partA,
    },
    partB: {
      title: "B කොටස - රචනා",
      instructions: "ඕනෑම ප්‍රශ්න හතරකට පමණක් පිළිතුරු සපයන්න.",
      questions: partB,
    },
  },
};
