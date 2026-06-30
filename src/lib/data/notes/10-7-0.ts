
import type { Note } from "../../types";

export const note_10_7_0: Note = {
    id: "note-10-7-0",
    title: "ගතික වෙබ් පිටු සහ වෙබ් අඩවි ප්‍රසිද්ධ කිරීම",
    type: "html",
    content: `
      <h2>ගතික වෙබ් පිටු (Dynamic Web Pages)</h2>
      <p>ස්ථිතික (static) වෙබ් පිටුවක් සෑම විටම එකම අන්තර්ගතය පෙන්වන අතර, ගතික (dynamic) වෙබ් පිටුවක අන්තර්ගතය, පරිශීලකයා, වේලාව, හෝ වෙනත් සාධක මත වෙනස් විය හැක. PHP වැනි සේවාදායක-පාර්ශ්ව (server-side) භාෂා සහ MySQL වැනි දත්ත සමුදායන් (databases) භාවිතයෙන් ගතික වෙබ් පිටු නිර්මාණය කරයි.</p>

      <h3>PHP යනු කුමක්ද?</h3>
      <p>PHP (Hypertext Preprocessor) යනු වෙබ් සංවර්ධනය සඳහා විශේෂයෙන් නිර්මාණය කරන ලද ජනප්‍රිය සේවාදායක-පාර්ශ්ව ස්ක්‍රිප්ටින් භාෂාවකි. PHP කේතය වෙබ් සේවාදායකයේ (web server) ක්‍රියාත්මක වී, ප්‍රතිඵලය ලෙස සාමාන්‍ය HTML කේතයක් ජනනය කර, එය පරිශීලකයාගේ බ්‍රව්සරයට යවයි. PHP වලදී, තන්තු (strings) එකට සම්බන්ධ කිරීමට <code>.</code> කාරකය භාවිතා කරයි.</p>

      <h3>PHP සහ HTML එකට භාවිතය</h3>
      <p>PHP කේත, <code>&lt;?php ... ?&gt;</code> ටැග් තුළ HTML කේතය සමඟ මිශ්‍ර කර ලිවිය හැක.</p>

      <h3>දත්ත සමුදා සම්බන්ධතාවය (MySQL)</h3>
      <p>PHP, MySQL වැනි දත්ත සමුදායන් සමඟ පහසුවෙන් සම්බන්ධ විය හැක. මෙමගින් පරිශීලක තොරතුරු ගබඩා කිරීම, නිෂ්පාදන ලැයිස්තු පෙන්වීම, සහ සෙවුම් ප්‍රතිඵල ජනනය කිරීම වැනි සංකීර්ණ කාර්යයන් කළ හැක.</p>
      
      <Activity id="html-sandbox" code={\`<!DOCTYPE html>
<html>
<head>
<title>Dynamic Page with PHP</title>
</head>
<body>

<h1>
  <?php
    // This is a PHP code block. 
    // It runs on the server to generate HTML content.
    $user_name = "Nimal";
    echo "Welcome, " . $user_name . "!";
  ?>
</h1>
<p>
  The current time on the server is: 
  <?php
    date_default_timezone_set("Asia/Colombo");
    echo date("h:i:sa");
  ?>
</p>
<p><strong>Note:</strong> This sandbox only shows the final HTML output. The PHP code is processed on the server before you see the page.</p>

</body>
</html>
\`} />
    <h2>වෙබ් අඩවියක් ප්‍රසිද්ධ කිරීම (Web Publishing)</h2>
      <p>වෙබ් අඩවියක් නිර්මාණය කළ පසු, එය ලෝකයටම දැකගත හැකි වන පරිදි අන්තර්ජාලයේ ස්ථානගත කිරීමේ ක්‍රියාවලියයි.</p>
      <ol>
          <li><b>වසම් නාමයක් (Domain Name) ලබාගැනීම:</b> මෙය ඔබගේ වෙබ් අඩවියේ ලිපිනයයි (උදා: www.mysite.com). මෙය වසම් නාම රෙජිස්ට්‍රාර් කෙනෙකුගෙන් මිලදී ගත යුතුය.</li>
          <li><b>වෙබ් සත්කාරකත්වයක් (Web Hosting) ලබාගැනීම:</b> ඔබගේ වෙබ් අඩවියේ ගොනු (HTML, CSS, images) ගබඩා කර තැබීම සඳහා අන්තර්ජාලයට නිරන්තරයෙන් සම්බන්ධ වූ සේවාදායකයක (server) ඉඩක් ලබා ගැනීමයි.
            <ul>
                <li><b>හවුල් සත්කාරකත්වය (Shared Hosting):</b> අඩු පිරිවැය, එක් සේවාදායකයක් වෙබ් අඩවි කිහිපයක් අතර බෙදා ගනී. කුඩා වෙබ් අඩවි සඳහා සුදුසුයි.</li>
                <li><b>අතථ්‍ය පෞද්ගලික සේවාදායකය (VPS):</b> එක් සේවාදායකයක් අතථ්‍ය කොටස් වලට බෙදා, එක් එක් පරිශීලකයාට වෙන්වූ සම්පත් ලබා දෙයි. හවුල් සත්කාරකත්වයට වඩා වේගවත් සහ නම්‍යශීලී වේ.</li>
                <li><b>වෙන්වූ සේවාදායකය (Dedicated Server):</b> සම්පූර්ණ සේවාදායකයක්ම එක් වෙබ් අඩවියක් සඳහා පමණක් වෙන් කිරීම. අධික තදබදයක් (traffic) ඇති විශාල වෙබ් අඩවි සඳහා සුදුසුයි.</li>
                <li><b>තමාගේම පරිගණකය සත්කාරකයක් ලෙස භාවිත කිරීම:</b> මෙය කළ හැකි වුවද, 24/7 විදුලිය, අධිවේගී අන්තර්ජාලය, සහ ආරක්ෂාව පිළිබඳව තමා විසින්ම වගබලාගත යුතු නිසා නිර්දේශ නොකෙරේ.</li>
            </ul>
          </li>
          <li><b>ගොනු උඩුගත කිරීම (Uploading Files):</b> FTP (File Transfer Protocol) වැනි ක්‍රමයක් භාවිතයෙන් ඔබගේ පරිගණකයේ ඇති වෙබ් අඩවි ගොනු, වෙබ් සේවාදායකයට උඩුගත කිරීම.</li>
      </ol>
    `,
    tags: ["php", "mysql", "dynamic web", "server-side", "web hosting", "domain name"],
    relatedQuestions: ["pq-2022-p1-47", "pq-2022-p1-48", "pq-2022-p2-1c", "pq-2022-p2-1d", "pq-2023-p1-48", "pq-2020-p1-44", "pq-2020-p1-45", "pq-2024-p1-47", "pq-2024-p1-46", {id:"pq-2013-p1-35"}],
};
