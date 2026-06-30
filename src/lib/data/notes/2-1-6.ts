import type { Note } from "../../types";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const note_2_1_6: Note = {
    id: "note-2-1-6",
    title: "වර්ගීකරණය 3: ප්‍රමාණය, බලය සහ පිරිවැය අනුව",
    type: "html",
    content: `
      <h2>වර්ගීකරණය 3: ප්‍රමාණය, බලය සහ පිරිවැය අනුව (By Size, Power, and Cost)</h2>
      <p>පරිගණක ඒවායේ භෞතික ප්‍රමාණය, සැකසුම් බලය (processing power), සහ පිරිවැය මත පදනම්ව ධූරාවලියක් ලෙස වර්ගීකරණය කළ හැක.</p>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h3 class="font-bold text-lg mb-2">1. සුපිරි පරිගණක (Supercomputers)</h3>
        <p>මේවා ලෝකයේ ඇති වේගවත්ම, බලවත්ම, සහ මිල අධිකම පරිගණක වේ. ඒවා තත්පරයකට ගණනය කිරීම් ට්‍රිලියන ගණනක් (PETAFLOPS) සිදු කළ හැකි අතර, ඉතා සංකීර්ණ විද්‍යාත්මක සහ ඉංජිනේරු ගැටලු විසඳීම සඳහා යොදා ගැනේ.</p>
        <ul class="list-disc pl-5 mt-2 text-sm">
            <li><b>ප්‍රධාන ලක්ෂණය:</b> අතිශය අධික සැකසුම් වේගය. සමාන්තර සැකසුම (Parallel Processing) සඳහා ප්‍රශස්ත කර ඇත.</li>
            <li><b>භාවිතය:</b>
                <ul>
                    <li>කාලගුණ අනාවැකි සහ දේශගුණික ආකෘති නිර්මාණය.</li>
                    <li>න්‍යෂ්ටික පර්යේෂණ සහ සිමියුලේෂන්.</li>
                    <li>තාරකා විද්‍යාව සහ විශ්වයේ සම්භවය පිළිබඳ පර්යේෂණ.</li>
                    <li>නව ඖෂධ නිර්මාණය සහ ජානමය විශ්ලේෂණය.</li>
                </ul>
            </li>
        </ul>
        <div class="mt-4 flex justify-center">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d3/IBM_Blue_Gene_P_supercomputer.jpg" alt="Supercomputer example" width="400" height="200" class="rounded-md border" data-ai-hint="server room" />
        </div>
      </div>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h3 class="font-bold text-lg mb-2">2. මහා පරිගණක (Mainframe Computers)</h3>
        <p>මහා පරිගණක යනු එකවර පරිශීලකයින් දහස් ගණනකට සහාය දැක්විය හැකි, විශාල, බලවත් පරිගණක වේ. ඒවායේ ප්‍රධාන ලක්ෂණය වන්නේ අධික වේගය පමණක් නොව, ඉහළ විශ්වසනීයත්වය (reliability) සහ අති විශාල ආදාන/ප්‍රතිදාන (I/O) මෙහෙයුම් ප්‍රමාණයක් එකවර හැසිරවීමේ හැකියාවයි.</p>
        <ul class="list-disc pl-5 mt-2 text-sm">
            <li><b>ප්‍රධාන ලක්ෂණය:</b> ඉහළ විශ්වසනීයත්වය සහ එකවර විශාල ගනුදෙනු ප්‍රමාණයක් සැකසීමේ හැකියාව.</li>
            <li><b>භාවිතය:</b>
                <ul>
                    <li>බැංකු සහ මූල්‍ය ආයතනවල මධ්‍යගත ගනුදෙනු සැකසීම.</li>
                    <li>ගුවන් සේවා ආසන වෙන්කිරීමේ පද්ධති.</li>
                    <li>විශාල සමාගම්වල පාරිභෝගික සහ නිෂ්පාදන දත්ත සමුදායන්.</li>
                </ul>
            </li>
        </ul>
         <div class="mt-4 flex justify-center">
            <Image src="https://microcontrollerslab.com/wp-content/uploads/2019/06/Mainframe-and-Mini-Computer.jpg" alt="Mainframe computer example" width="400" height="200" class="rounded-md border" data-ai-hint="data center" />
        </div>
      </div>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h3 class="font-bold text-lg mb-2">3. ක්ෂුද්‍ර පරිගණක (Microcomputers) / පුද්ගලික පරිගණක (PCs)</h3>
        <p>තනි පුද්ගලයෙකුගේ භාවිතය සඳහා නිර්මාණය කර ඇති, ක්ෂුද්‍ර සකසනයක් (microprocessor) මත පදනම් වූ පරිගණක වේ. වර්තමානයේ අප බහුලවම දකින පරිගණක වර්ගය මෙයයි.</p>
        <ul class="list-disc pl-5 mt-2 text-sm">
            <li><b>මේස පරිගණක (Desktop Computers):</b> මේසයක් මත තබා භාවිතා කරන පරිගණක.</li>
            <li><b>සැවුළ පරිගණක (Laptop Computers):</b> පහසුවෙන් ගෙන යා හැකි, බැටරියකින් ක්‍රියා කරන පරිගණක.</li>
        </ul>
      </div>

      <div class="my-6 p-4 border rounded-lg bg-background">
        <h3 class="font-bold text-lg mb-2">4. ජංගම උපාංග (Mobile Devices)</h3>
        <p>මෙය ක්ෂුද්‍ර පරිගණකවලම උප-වර්ගයකි. රැහැන් රහිතව ක්‍රියා කරන, ඉතා කුඩා සහ පහසුවෙන් ගෙන යා හැකි උපාංග වේ.</p>
         <ul class="list-disc pl-5 mt-2 text-sm">
            <li><b>සුහුරු දුරකථන (Smartphones):</b> දුරකථන ඇමතුම් වලට අමතරව පරිගණකයක බොහෝ කාර්යයන් ඉටු කළ හැකි උපාංග.</li>
            <li><b>ටැබ්ලට් පරිගණක (Tablets):</b> ස්මාර්ට් ෆෝන් වලට වඩා විශාල තිරයක් ඇති, ස්පර්ශක අතුරුමුහුණතක් සහිත උපාංග (උදා: iPad, Samsung Tab).</li>
            <li><b>ෆැබ්ලට් (Phablet):</b> ස්මාර්ට් ෆෝනයක සහ ටැබ්ලටයක ලක්ෂණ දෙකම ඇති, විශාල තිර සහිත ස්මාර්ට් ෆෝන්.</li>
        </ul>
         <div class="mt-4 flex justify-center">
            <Image src="https://www.essay.ws/wp-content/uploads/2015/11/mobile-devices.jpg" alt="Mobile devices example" width="400" height="200" class="rounded-md border" data-ai-hint="smartphone tablet" />
        </div>
      </div>
    `,
    tags: ["classification", "size", "supercomputer", "mainframe", "microcomputer", "mobile"],
    relatedQuestions: ["pq-2024-p1-3"],
};
