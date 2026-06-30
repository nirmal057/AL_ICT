
import type { Note } from "../../types";

export const note_1_1_3: Note = {
    id: "note-1-1-3",
    title: "දත්ත වර්ග (Qualitative vs. Quantitative)",
    type: "html",
    content: `
      <h2>දත්ත වර්ග (Types of Data)</h2>
      <p>එකතු කරනු ලබන දත්ත ඒවායේ ස්වභාවය අනුව ප්‍රධාන වර්ග දෙකකට බෙදිය හැක. මෙම වර්ගීකරණය, දත්ත විශ්ලේෂණය සහ අර්ථ නිරූපණය සඳහා නිවැරදි ක්‍රමවේද තෝරා ගැනීමට අත්‍යවශ්‍ය වේ.</p>

      <div class="my-6 p-4 border rounded-lg bg-muted/30 text-center not-prose flex flex-col items-center">
        <h3 class="font-bold text-lg mb-4">දත්ත වර්ගීකරණ ධූරාවලිය</h3>
        <div class="text-center">
            <div class="p-2 bg-card border-2 border-primary rounded-lg shadow-md inline-block">දත්ත (Data)</div>
            <div class="flex justify-around mt-4">
                <div class="w-full h-px bg-foreground -translate-y-2"></div>
            </div>
             <div class="flex justify-around">
                <div class="w-px h-6 bg-foreground"></div>
                <div class="w-px h-6 bg-foreground"></div>
            </div>
            <div class="grid grid-cols-2 gap-4 text-center text-sm">
                <!-- Branch 1: Qualitative -->
                <div class="px-2">
                    <div class="p-2 bg-card border rounded-md shadow-sm font-semibold">ගුණාත්මක (Qualitative)</div>
                </div>
                <!-- Branch 2: Quantitative -->
                <div class="px-2">
                    <div class="p-2 bg-card border rounded-md shadow-sm font-semibold">ප්‍රමාණාත්මක (Quantitative)</div>
                    <div class="w-px h-4 bg-foreground mx-auto"></div>
                    <div class="flex justify-around mt-1">
                        <div class="w-full border-b-2 border-foreground"></div>
                    </div>
                    <div class="flex justify-around">
                        <div class="w-px h-4 bg-foreground -translate-x-1/2"></div>
                        <div class="w-px h-4 bg-foreground translate-x-1/2"></div>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                         <div class="p-1 bg-background border rounded text-xs">විවික්ත (Discrete)</div>
                         <div class="p-1 bg-background border rounded text-xs">සන්තතික (Continuous)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

      <h3>1. ගුණාත්මක දත්ත (Qualitative Data)</h3>
      <p>මෙම දත්ත සංඛ්‍යාත්මකව මැනිය නොහැකි අතර, ඒවායේ ගුණාංග, ලක්ෂණ, හෝ වර්ගය අනුව විස්තර කෙරේ. මේවා බොහෝ විට නිරීක්ෂණ, විස්තර, සහ මත පදනම් වේ. "ඇයි?" සහ "කෙසේද?" යන ප්‍රශ්න වලට පිළිතුරු සපයයි.</p>
      <ul>
          <li><b>උදාහරණ:</b>
            <ul class="list-disc pl-5">
              <li>පුද්ගලයෙකුගේ ඇස් වල වර්ණය (උදා: නිල්, දුඹුරු, කළු)</li>
              <li>යම් සේවාවක් පිළිබඳව පාරිභෝගිකයාගේ අදහස (උදා: හොඳයි, නරකයි, මධ්‍යස්ථ)</li>
              <li>මෝටර් රථයක වෙළඳ නාමය (උදා: Toyota, Honda)</li>
            </ul>
          </li>
      </ul>

      <h3>2. ප්‍රමාණාත්මක දත්ත (Quantitative Data)</h3>
      <p>මෙම දත්ත සංඛ්‍යාත්මකව නිරූපණය කළ හැකි අතර, ගණිතමය ක්‍රියාවලීන්ට භාජනය කළ හැක. මේවා මැනිය හැකි, ගණන් කළ හැකි දේවල් හා සම්බන්ධ වේ. "කොපමණද?" (how much/how many) යන ප්‍රශ්නයට පිළිතුරු සපයයි. මෙය තවදුරටත් කොටස් දෙකකට බෙදිය හැක:</p>
      
      <h4>a) විවික්ත දත්ත (Discrete Data)</h4>
      <p>ගණන් කළ හැකි, පූර්ණ සංඛ්‍යාත්මක අගයන් පමණක් ගන්නා දත්ත වේ. මෙම අගයන් අතර භාගික හෝ දශම අගයන් පැවතිය නොහැක.</p>
       <ul>
          <li><b>උදාහරණ:</b>
            <ul class="list-disc pl-5">
              <li>පන්තියක සිටින සිසුන් ගණන (උදා: 35)</li>
              <li>පවුලක සිටින දරුවන් ගණන (උදා: 3)</li>
              <li>විභාගයකදී ලබාගත් නිවැරදි පිළිතුරු ගණන.</li>
            </ul>
          </li>
      </ul>

      <h4>b) සන්තතික දත්ත (Continuous Data)</h4>
      <p>ඕනෑම පරාසයක් තුළ ඕනෑම අගයක් ගත හැකි, මැනිය හැකි දත්ත වේ. මෙම අගයන් භාගික හෝ දශම විය හැක.</p>
      <ul>
          <li><b>උදාහරණ:</b>
            <ul class="list-disc pl-5">
              <li>පුද්ගලයෙකුගේ උස (උදා: 175.5 cm)</li>
              <li>කාමරයක උෂ්ණත්වය (උදා: 25.8 °C)</li>
              <li>මෝටර් රථයක වේගය (උදා: 60.5 km/h)</li>
            </ul>
          </li>
      </ul>

      <Activity id="activity-qual-vs-quan-quiz" />
    `,
    tags: ["data types", "quantitative", "qualitative", "discrete", "continuous"],
    relatedQuestions: [{ id: "model-paper-1-2-1", content: "", questionNumber: 2, totalMarks: 3 }]
};

