
import type { Note } from "../../types";

export const note_7_3_0: Note = {
    id: "note-7-3-0",
    title: "SDLC ආකෘති සහ ක්‍රමවේද",
    type: "html",
    content: `
      <h2>පද්ධති සංවර්ධන ජීවන චක්‍රය (SDLC)</h2>
      <p>SDLC යනු තොරතුරු පද්ධතියක් සැලසුම් කිරීම, නිර්මාණය කිරීම, පරීක්ෂා කිරීම, සහ ක්‍රියාවට නැංවීම සඳහා අනුගමනය කරන ක්‍රමානුකූල ක්‍රියාවලියකි. මෙම ක්‍රියාවලිය විවිධ ආකෘති (models) සහ ක්‍රමවේද (methodologies) හරහා ක්‍රියාත්මක කළ හැක.</p>

      <h3>SDLC ආකෘති (SDLC Models)</h3>
      <div class="overflow-x-auto"><table class="w-full my-4 border">
        <thead>
          <tr class="bg-muted">
            <th class="p-2 border">ආකෘතිය</th>
            <th class="p-2 border">විස්තරය</th>
            <th class="p-2 border">වාසි</th>
            <th class="p-2 border">අවාසි</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2 border font-semibold">දියඇලි ආකෘතිය (Waterfall)</td>
            <td class="p-2 border">එක් අදියරක් සම්පූර්ණයෙන්ම අවසන් වූ පසුව පමණක් ඊළඟ අදියර ආරම්භ කරන, දැඩි අනුක්‍රමික ක්‍රියාවලියකි.</td>
            <td class="p-2 border">සරලයි, කළමනාකරණයට පහසුයි, අවශ්‍යතා පැහැදිලි ව්‍යාපෘති සඳහා සුදුසුයි.</td>
            <td class="p-2 border">නම්‍යශීලී නැත, පසු අදියරකදී අවශ්‍යතා වෙනස් කිරීමට අපහසුයි.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">සර්පිල ආකෘතිය (Spiral)</td>
            <td class="p-2 border">සැලසුම් කිරීම, අවදානම් විශ්ලේෂණය, ඉංජිනේරුකරණය, සහ ඇගයීම යන අදියර හතරකින් යුත් චක්‍රයක් නැවත නැවත ක්‍රියාත්මක කරයි.</td>
            <td class="p-2 border">විශාල සහ අවදානම් සහිත ව්‍යාපෘති සඳහා සුදුසුයි.</td>
            <td class="p-2 border">සංකීර්ණයි, කුඩා ව්‍යාපෘති සඳහා නුසුදුසුයි.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">සුචල්‍ය ආකෘතිය (Agile)</td>
            <td class="p-2 border">ව්‍යාපෘතිය, "sprints" නමින් හැඳින්වෙන කෙටි පුනරාවර්තන (iterations) වලට බෙදා සංවර්ධනය කරයි.</td>
            <td class="p-2 border">ඉතා නම්‍යශීලීයි, වෙනස්වන අවශ්‍යතා වලට ඉක්මනින් හැඩගැසිය හැක.</td>
            <td class="p-2 border">පැහැදිලි අවසානයක් නොමැති වීමේ අවදානමක් ඇත.</td>
          </tr>
          <tr>
            <td class="p-2 border font-semibold">මූලාකෘතිකරණය (Prototyping)</td>
            <td class="p-2 border">පරිශීලකයාට පද්ධතියේ ක්‍රියාකාරීත්වය පිළිබඳ අදහසක් ලබා දීම සඳහා ඉක්මනින් මූලික ආකෘතියක් (prototype) නිර්මාණය කරයි.</td>
            <td class="p-2 border">පරිශීලක අවශ්‍යතා පැහැදිලි නැති විට ඉතා ප්‍රයෝජනවත් වේ.</td>
            <td class="p-2 border">පරිශීලකයා මූලාකෘතිය, අවසාන පද්ධතිය ලෙස වරදවා වටහා ගත හැක.</td>
          </tr>
        </tbody>
      </table></div>

      <h3>පද්ධති සංවර්ධන ක්‍රමවේද (Methodologies)</h3>
      <ul>
          <li><b>ව්‍යුහගත ක්‍රමවේදය (Structured Methodology):</b> දියඇලි ආකෘතිය වැනි ක්‍රමවේද සමඟ සම්බන්ධ වේ. ක්‍රියාවලිය පදනම් කරගත් (process-oriented) ප්‍රවේශයකි.</li>
          <li><b>වස්තු-නැඹුරු ක්‍රමවේදය (Object-Oriented Methodology):</b> පද්ධතිය, දත්ත සහ හැසිරීම් දෙකම අඩංගු "වස්තූන්" (objects) එකතුවක් ලෙස සලකයි.</li>
      </ul>
    `,
    tags: ["sdlc", "waterfall", "agile", "spiral", "prototyping"],
    relatedQuestions: [{ id: "pq-2022-p1-25", content: "", questionNumber: 0, correctAnswer: 0, options: []}, {id: "pq-2020-p1-24"}],
};
