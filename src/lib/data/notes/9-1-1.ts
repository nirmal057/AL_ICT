import type { Note } from "../../types";

export const note_9_1_1: Note = {
    id: "note-9-1-1",
    title: "පියවර 1: ගැටලුව හඳුනා ගැනීම",
    type: "html",
    content: `
        <h2>පියවර 1: ගැටලුව හඳුනා ගැනීම සහ අවබෝධ කර ගැනීම (Understanding the Problem)</h2>
        <p>ගැටළු විසඳීමේ ක්‍රියාවලියේ පළමු සහ වැදගත්ම පියවර වන්නේ විසඳිය යුතු ගැටලුව කුමක්දැයි පැහැදිලිව, සම්පූර්ණයෙන්ම සහ අපැහැදිලි තැන් නොමැතිව වටහා ගැනීමයි. මෙම පියවර මඟ හැරියහොත් හෝ වැරදියට තේරුම් ගතහොත්, ඔබ කොතරම් හොඳින් කේතය ලිව්වත් අවසාන ප්‍රතිඵලය වැරදි එකක් වනු ඇත.</p>

        <h3>මෙම පියවරේදී ඇසිය යුතු ප්‍රශ්න:</h3>
        <ul>
            <li><b>ප්‍රධාන අරමුණ කුමක්ද?</b> (What is the main goal?)</li>
            <li><b>මා විසින් විසඳිය යුත්තේ කුමන නිශ්චිත ප්‍රශ්නයද?</b> (What specific question am I trying to answer?)</li>
            <li><b>අවසානයේදී මා ලබා දිය යුතු ප්‍රතිඵලය කුමක්ද?</b> (What is the final output I need to produce?)</li>
        </ul>

        <div class="my-6 p-4 border rounded-lg bg-background">
            <h4 class="font-bold text-lg mb-2">ප්‍රායෝගික උදාහරණය: ශිෂ්‍ය සාමාර්ථය ගණනය කිරීම</h4>
            <p>අපගේ උදාහරණ ගැටලුව සලකා බලමු:</p>
            <blockquote class="border-l-4 border-primary pl-4 italic my-2">
                "ශිෂ්‍යයෙකුගේ විෂයයන් තුනක ලකුණු සඳහා සාමාන්‍යය ගණනය කර, එම ශිෂ්‍යයා සමත් ද අසමත් ද යන්න තීරණය කරන්න. සාමාන්‍ය ලකුණු 50 හෝ ඊට වැඩි නම් ශිෂ්‍යයා සමත් වේ."
            </blockquote>
            <p>මෙම ගැටලුව කියවීමෙන් පසු, අපගේ මූලික අරමුණු දෙක පැහැදිලිව හඳුනාගත හැක:</p>
            <ol class="list-decimal list-inside mt-2 font-semibold">
                <li>විෂයයන් තුනේ ලකුණු වල සාමාන්‍ය අගය සෙවීම.</li>
                <li>එම සාමාන්‍ය අගය මත පදනම්ව "සමත්" (Pass) හෝ "අසමත්" (Fail) යන තත්ත්වය තීරණය කිරීම.</li>
            </ol>
            <p class="mt-2 text-sm text-muted-foreground">මෙම මූලික අවබෝධය, ඊළඟ පියවර වන ගැටලුව නිර්වචනය කිරීම සඳහා පදනම සපයයි.</p>
        </div>
    `,
    tags: ["problem solving", "understanding", "analysis"],
    relatedQuestions: [],
};

