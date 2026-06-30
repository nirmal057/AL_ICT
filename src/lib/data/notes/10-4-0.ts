
import type { Note } from "../../types";

export const note_10_4_0: Note = {
    id: "note-10-4-0",
    title: "සබැඳි සහ ලැයිස්තු",
    type: "html",
    content: `
      <h2>සබැඳි සහ ලැයිස්තු (Links and Lists)</h2>
      <p>HTML වල ප්‍රබලම ලක්ෂණයක් වන්නේ විවිධ පිටු සහ සම්පත් එකිනෙකට සම්බන්ධ කිරීමට ඇති හැකියාවයි. ලැයිස්තු මගින් තොරතුරු පිළිවෙලට සංවිධානය කිරීමට උපකාරී වේ.</p>

      <h3>අධිසබැඳි (Hyperlinks)</h3>
      <p>අධිසබැඳියක් නිර්මාණය කිරීමට <code>&lt;a&gt;</code> (anchor) ටැගය භාවිතා කරයි. <code>href</code> ගුණාංගය (attribute) මගින් සබැඳිය යොමු විය යුතු URL ලිපිනය ලබා දේ.</p>
      <ul>
        <li><b>වෙනත් වෙබ් අඩවියකට සබැඳියක්:</b> <code>&lt;a href="https://www.google.com"&gt;Go to Google&lt;/a&gt;</code></li>
        <li><b>ඔබේ වෙබ් අඩවියේම වෙනත් පිටුවකට:</b> <code>&lt;a href="about.html"&gt;About Us&lt;/a&gt;</code></li>
        <li><b>ඊමේල් ලිපිනයකට:</b> <code>&lt;a href="mailto:info@example.com"&gt;Email Us&lt;/a&gt;</code></li>
        <li><b>පිටුවේම කොටසකට සබැඳියක් (Bookmark/Anchor Link):</b> <code>&lt;a href="#section1"&gt;Go to Section 1&lt;/a&gt;</code> මගින් ID එක <code>section1</code> වන මූලද්‍රව්‍යය වෙත යොමු වේ.</li>
      </ul>

      <h3>ලැයිස්තු (Lists)</h3>
      <h4>පිළිවෙලක් නැති ලැයිස්තු (Unordered Lists)</h4>
      <p><code>&lt;ul&gt;</code> ටැගය භාවිතයෙන් නිර්මාණය කරයි. ලැයිස්තුවේ එක් එක් අයිතමය <code>&lt;li&gt;</code> (list item) ටැගයකින් දක්වයි. සාමාන්‍යයෙන් බුලට් (bullets) මගින් පෙන්වයි.</p>
      
      <h4>පිළිවෙලක් ඇති ලැයිස්තු (Ordered Lists)</h4>
      <p><code>&lt;ol&gt;</code> ටැගය භාවිතයෙන් නිර්මාණය කරයි. එක් එක් අයිතමය <code>&lt;li&gt;</code> ටැගයකින් දක්වයි. සාමාන්‍යයෙන් අංක (numbers) මගින් පෙන්වයි.</p>
      
      <h4>විස්තරාත්මක ලැයිස්තු (Description Lists)</h4>
      <p><code>&lt;dl&gt;</code> ටැගය භාවිතයෙන් නිර්මාණය කරයි. මෙහි එක් එක් පදය <code>&lt;dt&gt;</code> (description term) ටැගයකින් ද, එහි විස්තරය <code>&lt;dd&gt;</code> (description details) ටැගයකින් ද දක්වයි.</p>
      
      <Activity id="html-sandbox" code={\`<!DOCTYPE html>
<html>
<body>

<h2>Hyperlink Example</h2>
<p><a href="https://nie.lk">Visit the National Institute of Education</a></p>

<h2>Unordered List</h2>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<h2>Ordered List</h2>
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

<h2>Description List</h2>
<dl>
  <dt>HTML</dt>
  <dd>- Hyper Text Markup Language</dd>
  <dt>CSS</dt>
  <dd>- Cascading Style Sheets</dd>
</dl>

</body>
</html>
\`} />
    `,
    tags: ["html", "links", "hyperlinks", "lists", "ul", "ol", "dl"],
    relatedQuestions: [{ id: "pq-2022-p1-46", content: "", questionNumber: 0, correctAnswer: 0, options: []}, {id: "pq-2020-p1-42"}, {id: "pq-2020-p1-47"}, {id:"pq-2012-p1-39"}, {id:"pq-2013-p1-38"}],
};
    

    
