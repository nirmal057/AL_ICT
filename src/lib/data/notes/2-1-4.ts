import type { Note } from "../../types";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const note_2_1_4: Note = {
    id: "note-2-1-4",
    title: "වර්ගීකරණය 1: තාක්ෂණය අනුව",
    type: "html",
    content: `
      <h2>වර්ගීකරණය 1: තාක්ෂණය අනුව (By Technology)</h2>
      <p>පරිගණක, ඒවායේ මූලික ක්‍රියාකාරීත්වය සඳහා යොදාගන්නා දත්ත නිරූපණ තාක්ෂණය මත පදනම්ව ප්‍රධාන වර්ග තුනකට බෙදිය හැක.</p>
      
      <div class="my-6 p-4 border rounded-lg bg-background">
        <h3 class="font-bold text-lg mb-2">1. ප්‍රතිසම පරිගණක (Analog Computers)</h3>
        <p>මෙම පරිගණක, දත්ත නිරූපණය කරන්නේ අංකිත අගයන් ලෙස නොව, උෂ්ණත්වය, පීඩනය, වේගය, වෝල්ටීයතාව වැනි අඛණ්ඩව වෙනස් වන භෞතික රාශීන් (continuous physical quantities) මැනීමෙනි. ඒවායේ ප්‍රතිදානය ද බොහෝ විට ඩයලයක් හෝ මීටරයක් වැනි ප්‍රතිසම දර්ශකයක් මගින් පෙන්වයි.</p>
        <ul class="list-disc pl-5 mt-2 text-sm">
            <li><b>ප්‍රධාන ලක්ෂණය:</b> මැනීම මත පදනම් වේ, ගණන් කිරීම මත නොවේ.</li>
            <li><b>නිරවද්‍යතාව:</b> අංකිත පරිගණක වලට වඩා නිරවද්‍යතාව අඩුය.</li>
            <li><b>උදාහරණ:</b>
                <ul>
                    <li>පැරණි වාහනවල වේග මාපකය (Speedometer)</li>
                    <li>සාම්ප්‍රදායික රසදිය උෂ්ණත්වමානය (Thermometer)</li>
                    <li>භූකම්පන මානය (Seismograph)</li>
                </ul>
            </li>
        </ul>
        <div class="mt-4 flex justify-center">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c6/PACE-TR-10_analog_computer_-_National_Cryptologic_Museum_-_DSC07908.JPG" alt="Analog device example" width="400" height="200" class="rounded-md border" data-ai-hint="analog gauge" />
        </div>
      </div>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h3 class="font-bold text-lg mb-2">2. අංකිත පරිගණක (Digital Computers)</h3>
        <p>වර්තමානයේ අප භාවිතා කරන සියලුම නවීන පරිගණක මෙම වර්ගයට අයත් වේ. මෙම පරිගණක දත්ත නිරූපණය කරන්නේ සහ සකසන්නේ විවික්ත (discrete) අගයන්, විශේෂයෙන්ම ද්විමය ක්‍රමය (0 සහ 1) භාවිතා කරමිනි. ඒවා ඉතා නිරවද්‍ය වන අතර, පුළුල් පරාසයක කාර්යයන් සඳහා යොදා ගත හැක.</p>
        <ul class="list-disc pl-5 mt-2 text-sm">
            <li><b>ප්‍රධාන ලක්ෂණය:</b> ගණන් කිරීම (counting digits) මත පදනම් වේ.</li>
            <li><b>නිරවද්‍යතාව:</b> ඉතා ඉහළ නිරවද්‍යතාවයක් ඇත.</li>
            <li><b>උදාහරණ:</b>
                <ul>
                    <li>පුද්ගලික පරිගණක (PCs) සහ ලැප්ටොප්</li>
                    <li>ස්මාර්ට් ෆෝන්</li>
                    <li>ඩිජිටල් කැල්කියුලේටර්</li>
                </ul>
            </li>
        </ul>
        <div class="mt-4 flex justify-center">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a3/ThinkCentre_S50.jpg" alt="Digital device example" width="400" height="200" class="rounded-md border" data-ai-hint="modern laptop" />
        </div>
      </div>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h3 class="font-bold text-lg mb-2">3. දෙමුහුන් පරිගණක (Hybrid Computers)</h3>
        <p>දෙමුහුන් පරිගණක යනු ප්‍රතිසම සහ අංකිත පරිගණක දෙකෙහිම හොඳම ලක්ෂණ ඒකාබද්ධ කර නිර්මාණය කරන ලද පද්ධති වේ. ඒවාට ප්‍රතිසම දත්ත ආදානය ලෙස ලබාගෙන, ඒවා අංකිත දත්ත බවට පරිවර්තනය කර, සැකසීමෙන් පසු ප්‍රතිඵලය ප්‍රතිසම හෝ අංකිත ආකාරයෙන් ලබා දිය හැක. මෙමගින් ප්‍රතිසම දත්තවල වේගවත් සැකසුම සහ අංකිත දත්තවල නිරවද්‍යතාව යන දෙකෙහිම වාසි ලබා ගනී.</p>
         <ul class="list-disc pl-5 mt-2 text-sm">
            <li><b>ප්‍රධාන ලක්ෂණය:</b> මැනීම සහ ගණන් කිරීම යන ක්‍රම දෙකම භාවිතා කරයි.</li>
            <li><b>භාවිතය:</b> විද්‍යාත්මක පර්යේෂණ, රෝහල්වල රෝගීන් නිරීක්ෂණ පද්ධති, සහ කාර්මික පාලන ක්‍රියාවලි සඳහා බහුලව යොදා ගැනේ.</li>
            <li><b>උදාහරණ:</b>
                <ul>
                    <li>දැඩි සත්කාර ඒකකයක (ICU) රෝගියාගේ හෘද ස්පන්දනය (ප්‍රතිසම) මැන, එය අංකිත අගයක් ලෙස තිරයක පෙන්වන යන්ත්‍රයක්.</li>
                    <li>ගුවන් යානයක නියමු කුටියේ (cockpit) ඇති පාලන පද්ධති.</li>
                </ul>
            </li>
        </ul>
        <div class="mt-4 flex justify-center">
            <Image src="https://www.thewindowsclub.com/wp-content/uploads/2020/02/Hybrid-Computer.jpg" alt="Hybrid device example" width="400" height="200" class="rounded-md border" data-ai-hint="medical monitor" />
        </div>
      </div>
    `,
    tags: ["classification", "technology", "analog", "digital", "hybrid"],
    relatedQuestions: [],
};
