
import type { Note } from "../../types";

export const note_10_3_0: Note = {
    id: "note-10-3-0",
    title: "මූලික HTML ටැග්",
    type: "html",
    content: `
      <h2>මූලික HTML ටැග් (Basic HTML Tags)</h2>
      <p>HTML (HyperText Markup Language) යනු වෙබ් පිටු වල ව්‍යුහය නිර්මාණය කිරීමට භාවිතා කරන සම්මත භාෂාවයි. එය "ටැග්" (tags) ලෙස හඳුන්වන මූල පද භාවිතා කරයි. බොහෝ ටැග් වලට ආරම්භක ටැගයක් (<code>&lt;tag&gt;</code>) සහ අවසන් ටැගයක් (<code>&lt;/tag&gt;</code>) ඇත.</p>

      <h3>මූලික ලේඛන ව්‍යුහය</h3>
      <ul>
        <li><code>&lt;html&gt;</code>: සම්පූර්ණ HTML ලේඛනයම ආවරණය කරයි.</li>
        <li><code>&lt;head&gt;</code>: ලේඛනය පිළිබඳ තොරතුරු (metadata) අඩංගු වේ (උදා: මාතෘකාව, style sheets).</li>
        <li><code>&lt;title&gt;</code>: වෙබ් බ්‍රව්සරයේ ටැබ් එකේ පෙන්වන මාතෘකාව නියම කරයි.</li>
        <li><code>&lt;body&gt;</code>: වෙබ් පිටුවේ පෙනෙන සියලුම අන්තර්ගතය (පාඨ, රූප, සබැඳි) මෙහි අඩංගු වේ.</li>
      </ul>

      <h3>පාඨ හැඩතල ගැන්වීම (Text Formatting)</h3>
      <ul>
        <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: ශීර්ෂ (Headings) සඳහා භාවිතා කරයි. <code>&lt;h1&gt;</code> යනු වැදගත්ම ශීර්ෂයයි.</li>
        <li><code>&lt;p&gt;</code>: ඡේදයක් (Paragraph) නිර්වචනය කරයි.</li>
        <li><code>&lt;br&gt;</code>: පේළි බිඳීමක් (Line Break) ඇතුල් කරයි.</li>
        <li><code>&lt;b&gt;</code> සහ <code>&lt;strong&gt;</code>: අකුරු තද (Bold) කරයි.</li>
        <li><code>&lt;i&gt;</code> සහ <code>&lt;em&gt;</code>: අකුරු ඇල (Italic/Emphasis) කරයි.</li>
        <li><code>&lt;u&gt;</code>: යටින් ඉරක් අඳියි (Underline).</li>
      </ul>
      <p><b>පෝරම (Forms) සහ පාලක (Controls)</b></p>
      <ul>
        <li><code>&lt;form&gt;</code>: පරිශීලක ආදාන සඳහා පෝරමයක් නිර්මාණය කරයි.</li>
        <li><code>&lt;input&gt;</code>: විවිධ ආදාන ක්ෂේත්‍ර නිර්මාණය කරයි (e.g., <code>type="text"</code>, <code>type="radio"</code>, <code>type="checkbox"</code>, <code>type="submit"</code>).</li>
        <li><code>&lt;fieldset&gt;</code>: පෝරමයේ අදාළ මූලද්‍රව්‍ය කාණ්ඩ කරයි.</li>
        <li><code>&lt;legend&gt;</code>: <code>&lt;fieldset&gt;</code> එකක් සඳහා මාතෘකාවක් සපයයි.</li>
      </ul>
      <Activity id="html-sandbox" code={\`<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>

<h1>This is a Heading 1</h1>
<p>This is a paragraph. You can write your content here.</p>
<p>This is another paragraph.<br>It has a line break.</p>
<p><b>Bold text</b>, <i>italic text</i>, and <u>underlined text</u>.</p>

</body>
</html>
\`} />
    `,
    tags: ["html", "tags", "structure", "formatting"],
    relatedQuestions: [{ id: "pq-2022-p1-43", content: "", questionNumber: 0, correctAnswer: 0, options: []}, { id: "pq-2022-p1-44", content: "", questionNumber: 0, correctAnswer: 0, options: []}, { id: "pq-2022-p2-1a", content: "", questionNumber: "", totalMarks: 0}, { id: "pq-2023-p1-47", content: "", questionNumber: 0, correctAnswer: 0, options: []}, {id: "pq-2020-p1-43"}, {id:"pq-2012-p1-13"}, {id:"pq-2012-p1-37"}, {id:"pq-2012-p1-40"}, {id:"pq-2013-p1-36"}, {id:"pq-2013-p1-39"}],
};
    






    
