
import type { Note } from "../../types";

export const note_7_4_0: Note = {
    id: "note-7-4-0",
    title: "ව්‍යුහගත පද්ධති විශ්ලේෂණය සහ නිර්මාණය (SSADM)",
    type: "html",
    content: `
      <h2>ව්‍යුහගත පද්ධති විශ්ලේෂණය සහ නිර්මාණය (SSADM)</h2>
      <p>SSADM (Structured Systems Analysis and Design Method) යනු තොරතුරු පද්ධති විශ්ලේෂණය සහ නිර්මාණය සඳහා වූ ව්‍යුහගත ප්‍රවේශයකි. එය දියඇලි ආකෘතිය මත පදනම් වූ අතර, ක්‍රියාවලිය පැහැදිලි අදියර සහ පියවර වලට බෙදා දක්වයි.</p>
      
      <h3>SSADM හි ප්‍රධාන අදියර (Stages)</h3>
      <ol class="list-decimal list-inside space-y-2">
        <li><b>ශක්‍යතා අධ්‍යයනය (Feasibility Study):</b> ව්‍යාපෘතිය තාක්ෂණිකව, ආර්ථිකව, සහ මෙහෙයුම්මය වශයෙන් කළ හැකිද යන්න තක්සේරු කිරීම.</li>
        <li><b>අවශ්‍යතා විශ්ලේෂණය (Requirements Analysis):</b> පවතින පද්ධතිය අධ්‍යයනය කර නව පද්ධතිය සඳහා අවශ්‍යතා හඳුනා ගැනීම.</li>
        <li><b>අවශ්‍යතා පිරිවිතර සැකසීම (Requirements Specification):</b> හඳුනාගත් අවශ්‍යතා විධිමත්ව ලේඛනගත කිරීම.</li>
        <li><b>තාර්කික පද්ධති පිරිවිතර සැකසීම (Logical System Specification):</b> පද්ධතිය "කුමක්" කළ යුතුද යන්න තාක්ෂණික නොවන මට්ටමින් නිර්වචනය කිරීම. මෙහිදී DFD (Data Flow Diagrams) සහ LDS (Logical Data Structures) වැනි මෙවලම් භාවිතා වේ.</li>
        <li><b>භෞතික නිර්මාණය (Physical Design):</b> තාර්කික සැලසුම, නිශ්චිත දෘඪාංග සහ මෘදුකාංග තාක්ෂණයන් භාවිතයෙන් "කෙසේ" ක්‍රියාත්මක කරන්නේද යන්න නිර්මාණය කිරීම.</li>
      </ol>
      <p>මෙම අදියරයන්ට පසුව <b>ක්‍රියාත්මක කිරීම (Implementation)</b>, <b>පරීක්ෂාව (Testing)</b>, සහ <b>යෙදවීම (Deployment)</b> වැනි SDLC හි අනෙකුත් සාමාන්‍ය අදියරයන් පැමිණේ.</p>
    `,
    tags: ["ssadm", "structured analysis", "sad"],
    relatedQuestions: ["pq-2021-p1-24"],
};
