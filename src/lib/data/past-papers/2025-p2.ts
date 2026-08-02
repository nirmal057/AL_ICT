import type { Paper, StructuredQuestion } from "../../types";

const partA: StructuredQuestion[] = [
  {
    id: "pq-2025-p2-1",
    questionNumber: "1",
    content: `<p>සිසුවෙකු PHP, MySQL සහ HTML භාවිතයෙන් පොත් අලෙවි වෙබ් අඩවියක් නිර්මාණය කරයි.</p>`,
    totalMarks: 10,
    relatedNoteId: "note-10-7-0",
    subParts: [
      {
        id: "pq-2025-p2-1-a",
        label: "(a)",
        content: `<p>Books_database දත්ත සමුදායේ Book වගුවට id, category, name, price, publisher සහ image ක්ෂේත්‍ර සහිත වගුවක් ගොඩනැගීමට SQL ප්‍රකාශය ලියන්න. කිසිදු ක්ෂේත්‍රයක් NULL නොවිය යුතු ය.</p>`,
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
        content: `<p>index.php ගොනුවෙන් ලබා දී ඇති කේත කොටසේ හිස්තැන් සම්පූර්ණ කරන්න.</p>[CODE:php]<?php
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
<p><b>ලැයිස්තුව:</b> {1 – SELECT * FROM Book, 2 – SELECT * FROM Books_database, 3 – shop.php, 4 – shop.css, 5 – $row['id']}</p>`,
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
    totalMarks: 6,
    relatedNoteId: "note-7-6-0",
    subParts: [
      {
        id: "pq-2025-p2-2-a",
        label: "(a)",
        content: `<p>කළමනාකාරීත්වය සලකා බලන A, B, C සහ D විකල්ප සඳහා සුදුසු පද්ධති සංවර්ධන ප්‍රවේශයන් / ශක්‍යතා අර්ථකථන ලියන්න. පසුව නව සේවාදායකයක් අවශ්‍ය ද යන්න දක්වන්න, එක් අවදානමක් සහ අවම කිරීමේ පියවරක් ලියන්න, සහ functional / non-functional requirements දෙක බැගින් ලියන්න.</p>`,
        marks: 6,
        subParts: [
          { id: "pq-2025-p2-2-a-i", label: "(i)", content: `<p>A, B, C සහ D සඳහා සුදුසු පද ලියන්න.</p>`, marks: 1 },
          { id: "pq-2025-p2-2-a-ii", label: "(ii)", content: `<p>නව සේවාදායකයක් අවශ්‍ය ද? හේතුවක් සමග පිළිතුරු දෙන්න.</p>`, marks: 2 },
          { id: "pq-2025-p2-2-a-iii", label: "(iii)", content: `<p>C විකල්පයෙන් හඳුනාගත හැකි එක් අවදානමක් සහ එය අවම කිරීමට එක් පියවරක් ලියන්න.</p>`, marks: 1 },
          { id: "pq-2025-p2-2-a-iv", label: "(iv)", content: `<p>functional requirements දෙකක් සහ non-functional requirements දෙකක් ලියන්න.</p>`, marks: 2 },
        ],
      },
    ],
  },
  {
    id: "pq-2025-p2-3",
    questionNumber: "3",
    content: `<p>ක්‍රමලේඛ දෝෂ සහ පයිතන් ප්‍රතිදානය පිළිබඳ ප්‍රශ්න දෙකකි.</p>`,
    totalMarks: 6,
    relatedNoteId: "note-9-1-5",
    subParts: [
      { id: "pq-2025-p2-3-a", label: "(a)", content: `<p>syntax errors සහ logical errors විස්තර කරන්න.</p>`, marks: 2 },
      { id: "pq-2025-p2-3-b", label: "(b)", content: `<p>පරිශීලකයා -1 ආදානය කරන තුරු පූර්ණ සංඛ්‍යා රැස්කර ඉරට්ටේ සංඛ්‍යාවල එකතුව මුද්‍රණය කරන Python ක්‍රමලේඛයක් සම්බන්ධ ප්‍රශ්න.</p>`, marks: 4 },
    ],
  },
  {
    id: "pq-2025-p2-4",
    questionNumber: "4",
    content: `<p>ක්‍රියාවලීන්, swap කිරීම, virtual memory, සහ FAT allocation පිළිබඳ ප්‍රශ්න.</p>`,
    totalMarks: 10,
    relatedNoteId: "note-5-4-0",
    subParts: [
      { id: "pq-2025-p2-4-a", label: "(a)", content: `<p>P0 සහ P1 ක්‍රියායන සම්බන්ධයෙන් state transitions සහ context switching පිළිබඳ ප්‍රශ්න.</p>`, marks: 4 },
      { id: "pq-2025-p2-4-b", label: "(b)", content: `<p>page table එකක් භාවිත කර virtual address එකකට physical address එක ගණනය කිරීම.</p>`, marks: 3 },
      { id: "pq-2025-p2-4-c", label: "(c)", content: `<p>FAT table එකක් සහ block size තේරීමේ වාසි / අවාසි.</p>`, marks: 3 },
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
      { id: "pq-2025-p2-5-a", label: "(a)", content: `<p>දෙන ලද Boolean ප්‍රකාශනය සරල කරන්න.</p>`, marks: 5 },
      { id: "pq-2025-p2-5-b", label: "(b)", content: `<p>3-bit timer / key combination එකක් භාවිත කරන vault lock එක සඳහා K-map එකක් යොදාගෙන සරල තර්කණ ප්‍රකාශනයක් ලබාගන්න.</p>`, marks: 7 },
      { id: "pq-2025-p2-5-c", label: "(c)", content: `<p>timer input නොමැති විට vault එක විවෘත කළ හැකි ද යන්න සාධාරණීකරණය කරන්න.</p>`, marks: 3 },
    ],
  },
  {
    id: "pq-2025-p2-6",
    questionNumber: "6",
    content: `<p>UDP, malware, bus topology, IP addressing, TCP/IP layers, digital signatures, සහ subnetting පිළිබඳ ප්‍රශ්නයකි.</p>`,
    totalMarks: 15,
    relatedNoteId: "note-6-7-0",
    subParts: [
      { id: "pq-2025-p2-6-a", label: "(a)", content: `<p>UDP භාවිත කරන යෙදුම් දෙකක් සහ UDP හට නොහැකි දත්ත බෙදාහැරීමේ ලක්ෂණයක් ලියන්න.</p>`, marks: 1.5 },
      { id: "pq-2025-p2-6-b", label: "(b)", content: `<p>අන්තර්ජාලයෙන් ලැබිය හැකි අනිෂ්ට මෘදුකාංග වර්ග තුනක් ලියන්න.</p>`, marks: 1.5 },
      { id: "pq-2025-p2-6-c", label: "(c)", content: `<p>පරිගණක තුනක්, සේවාදායක දෙකක් සහ ජාල මුද්‍රකයක් bus topology එකකින් සම්බන්ධ කර ඇති ආකාරය දක්වන්න.</p>`, marks: 2 },
      { id: "pq-2025-p2-6-d", label: "(d)", content: `<p>B පන්තියේ IP ලිපිනයක් සහ private IP ලිපිනයක් ලබා දෙන්න.</p>`, marks: 1 },
      { id: "pq-2025-p2-6-e", label: "(e)", content: `<p>TCP/IP layers A-D සහ විස්තර 1-4 ගළපන්න.</p>`, marks: 2 },
      { id: "pq-2025-p2-6-f", label: "(f)", content: `<p>අංකිත ලේඛනවලට digital signatures ඇමිණීමේ අරමුණ ලියන්න.</p>`, marks: 2 },
      { id: "pq-2025-p2-6-g", label: "(g)", content: `<p>192.168.50.0/24 network එකෙන් අවශ්‍ය උපජාල පිරිනැමීමේ වගුව සම්පූර්ණ කරන්න.</p>`, marks: 5 },
    ],
  },
  {
    id: "pq-2025-p2-7",
    questionNumber: "7",
    content: `<p>Ceylon Crafts නම් කුඩා සාප්පුවකට අදාළ ව්‍යාපාරික, e-commerce සහ digital divide ප්‍රශ්න.</p>`,
    totalMarks: 6,
    relatedNoteId: "note-12-1-0",
    subParts: [
      { id: "pq-2025-p2-7-a", label: "(a)", content: `<p>pure brick, e-commerce transaction type, online shop advantages / issues සහ digital divide සම්බන්ධ ප්‍රශ්නවලට පිළිතුරු දෙන්න.</p>`, marks: 6 },
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
      title: "Part A - ව්‍යුහගත රචනා",
      instructions: "ප්‍රශ්න හතරටම පිළිතුරු මෙම පත්‍රයේම සපයන්න.",
      questions: partA,
    },
    partB: {
      title: "Part B - රචනා",
      instructions: "ඕනෑම ප්‍රශ්න හතරකට පමණක් පිළිතුරු සපයන්න.",
      questions: partB,
    },
  },
};
