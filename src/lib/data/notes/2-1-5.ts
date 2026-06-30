
import type { Note } from "../../types";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const note_2_1_5: Note = {
    id: "note-2-1-5",
    title: "වර්ගීකරණය 2: අරමුණ අනුව",
    type: "html",
    content: `
      <h2>වර්ගීකරණය 2: අරමුණ අනුව (By Purpose)</h2>
      <p>පරිගණක, ඒවා නිර්මාණය කර ඇති නිශ්චිත අරමුණ මත පදනම්ව ප්‍රධාන වර්ග දෙකකට බෙදිය හැක.</p>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h3 class="font-bold text-lg mb-2">1. විශේෂ කාර්ය පරිගණක (Special Purpose Computers)</h3>
        <p>මෙම පරිගණක නිර්මාණය කර ඇත්තේ එක් නිශ්චිත කාර්යයක් හෝ ඉතා සීමිත කාර්යයන් සමූහයක් පමණක් ඉටු කිරීම සඳහාය. ඒවා එම කාර්යය සඳහා උපරිම කාර්යක්ෂමතාවයකින් ක්‍රියාත්මක වන සේ දෘඪාංග සහ මෘදුකාංග සකසා ඇත. ඒවා වෙනත් කාර්යයන් සඳහා භාවිතා කළ නොහැක.</p>
        <ul class="list-disc pl-5 mt-2 text-sm">
            <li><b>ප්‍රධාන ලක්ෂණය:</b> තනි අරමුණක් සඳහා කැපවී ඇත.</li>
            <li><b>වාසි:</b> අදාළ කාර්යය සඳහා ඉතා වේගවත් සහ කාර්යක්ෂම වේ.</li>
            <li><b>උදාහරණ:</b>
                <ul>
                    <li><b>ATM යන්ත්‍ර:</b> බැංකු ගනුදෙනු සඳහා පමණක්ම නිර්මාණය කර ඇත.</li>
                    <li><b>රථවාහන පාලන පද්ධති (Traffic Control Systems):</b> මාර්ග සංඥා පාලනය කිරීම සඳහා පමණක් ක්‍රියා කරයි.</li>
                    <li><b>ඩිජිටල් ඔරලෝසු සහ කැල්කියුලේටර්.</b></li>
                    <li><b>රෙදි සෝදන යන්ත්‍රයක හෝ මයික්‍රෝවේව් උදුනක ඇති පාලක පද්ධතිය.</b></li>
                </ul>
            </li>
        </ul>
        <div class="mt-4 flex justify-center">
            <Image src="https://greenthrottle.com/wp-content/uploads/2020/05/Examples-of-Special-Purpose-Computers.png" alt="Special purpose computer example" width="400" height="200" class="rounded-md border" data-ai-hint="atm machine" />
        </div>
      </div>
      
      <div class="my-6 p-4 border rounded-lg bg-background">
        <h3 class="font-bold text-lg mb-2">2. සාමාන්‍ය කාර්ය පරිගණක (General Purpose Computers)</h3>
        <p>මෙම පරිගණක නිර්මාණය කර ඇත්තේ විවිධාකාර, එකිනෙකට සම්බන්ධ නැති කාර්යයන් රාශියක් ඉටු කිරීමට හැකි වන පරිදිය. පරිශීලකයාට අවශ්‍ය මෘදුකාංග ස්ථාපනය කිරීමෙන්, එකම පරිගණකය වදන් සැකසීම, වෙබ් ගවේෂණය, ක්‍රීඩා කිරීම, ගිණුම්කරණය, සහ චිත්‍ර ඇඳීම වැනි බොහෝ දේ සඳහා භාවිතා කළ හැක.</p>
        <ul class="list-disc pl-5 mt-2 text-sm">
            <li><b>ප්‍රධාන ලක්ෂණය:</b> විවිධ කාර්යයන් සඳහා ක්‍රමලේඛනය කළ හැක.</li>
            <li><b>නම්‍යශීලී බව:</b> ඉතා ඉහළ නම්‍යශීලී බවක් ඇත.</li>
            <li><b>උදාහරණ:</b>
                <ul>
                    <li><b>පුද්ගලික පරිගණක (PCs) සහ ලැප්ටොප්.</b></li>
                    <li><b>ස්මාර්ට් ෆෝන් සහ ටැබ්ලට්.</b> (විවිධ යෙදුම් (apps) ස්ථාපනය කිරීමෙන් විවිධ කාර්යයන් කළ හැකි නිසා).</li>
                </ul>
            </li>
        </ul>
        <div class="mt-4 flex justify-center">
            <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqpeMzdQzE6xFx_XUplSzbOTCuq7VzAMi2yDbaPyh_xOKYFKyZeGxx_7UVlsCsUkTgjrN8Bcu6RBSaWikgP89zJWNS9Lef2EAnHoC_xnHgvxqcDmkVi91VBLUWYtv940xQ5ymD7UsOMkw/s1600/computer.jpg" alt="General purpose computer example" width="400" height="200" class="rounded-md border" data-ai-hint="person using laptop" />
        </div>
      </div>
    `,
    tags: ["classification", "purpose", "special purpose", "general purpose"],
    relatedQuestions: [{id:"pq-2012-p1-12"}],
};

    