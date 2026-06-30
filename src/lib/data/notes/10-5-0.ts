import type { Note } from "../../types";

export const note_10_5_0: Note = {
    id: "note-10-5-0",
    title: "විලාස පත් (Style Sheets - CSS)",
    type: "html",
    content: `
      <h2>විලාස පත් (Cascading Style Sheets - CSS)</h2>
      <p>CSS යනු HTML මූලද්‍රව්‍ය (elements) තිරය මත පෙන්විය යුතු ආකාරය (පෙනුම සහ පිරිසැලසුම) විස්තර කරන භාෂාවකි. CSS මගින් HTML අන්තර්ගතයෙන් පෙනුම වෙන් කිරීමෙන්, කේතය පිරිසිදුව තබා ගැනීමට සහ වෙබ් අඩවියේ පෙනුම පහසුවෙන් වෙනස් කිරීමට ඉඩ සලසයි.</p>
      
      <h3>CSS යොදන ආකාර 3</h3>
      <ol>
        <li>
          <b>පේළිගත CSS (Inline CSS):</b> <code>style</code> ගුණාංගය (attribute) භාවිතා කර, එක් HTML මූලද්‍රව්‍යයකට පමණක් විලාසිතාවක් යෙදීම.
          <pre><code>&lt;h1 style="color:blue; text-align:center;"&gt;This is a blue, centered heading.&lt;/h1&gt;</code></pre>
        </li>
        <li>
          <b>අභ්‍යන්තර CSS (Internal CSS):</b> <code>&lt;head&gt;</code> කොටස තුළ <code>&lt;style&gt;</code> ටැගය භාවිතා කර, එක් HTML පිටුවකට පමණක් විලාසිතා යෙදීම.
        </li>
        <li>
          <b>බාහිර CSS (External CSS):</b> වෙනම <code>.css</code> ගොනුවක විලාසිතා නිර්වචනය කර, <code>&lt;link&gt;</code> ටැගය භාවිතයෙන් එය HTML පිටු එකකට හෝ කිහිපයකට සම්බන්ධ කිරීම. වෙබ් අඩවියක් පුරාම එකම පෙනුමක් පවත්වාගෙන යාමට මෙය හොඳම ක්‍රමයයි.</li>
      </ol>
      <h3>CSS වරක (Selectors)</h3>
      <p>විලාස යෙදිය යුතු HTML මූලද්‍රව්‍ය තෝරාගැනීමට වරක භාවිතා කරයි.</p>
      <ul>
        <li><b>Element Selector:</b> ටැග් නාමය අනුව තෝරාගැනීම (e.g., <code>p { color: blue; }</code>).</li>
        <li><b>Class Selector:</b> <code>.</code> ලකුණ සමඟ class නාමය භාවිතා කරයි (e.g., <code>.my-class { font-size: 14px; }</code>). එකම class එක මූලද්‍රව්‍ය කිහිපයකට යෙදිය හැක.</li>
        <li><b>ID Selector:</b> <code>#</code> ලකුණ සමඟ id නාමය භාවිතා කරයි (e.g., <code>#header { background-color: grey; }</code>). ID එකක් පිටුව තුළ අනන්‍ය විය යුතුය.</li>
      </ul>
      <Activity id="html-sandbox" code={\`<!DOCTYPE html>
<html>
<head>
<title>CSS Example</title>
<!-- Internal CSS -->
<style>
  body {
    background-color: lightgray;
  }
  h1 {
    color: navy;
    text-align: center;
  }
  /* This is a class selector */
  .special-paragraph {
    color: green;
    font-size: 18px;
  }
</style>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

<p class="special-paragraph">This paragraph has a special style.</p>

<!-- Inline CSS (will override the internal CSS for this element) -->
<p style="color:red;">This paragraph is red.</p>

</body>
</html>
\`} />
    `,
    tags: ["css", "stylesheets", "inline", "internal", "external"],
    relatedQuestions: [{ id: "pq-2022-p1-45", content: "", questionNumber: 0, correctAnswer: 0, options: []}, { id: "pq-2022-p2-1b", content: "", questionNumber: "", totalMarks: 0}, { id: "pq-2023-p1-46", content: "", questionNumber: 0, correctAnswer: 0, options: []}, {id: "pq-2020-p1-46"}],
};
    




