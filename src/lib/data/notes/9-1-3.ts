import type { Note } from "../../types";

export const note_9_1_3: Note = {
    id: "note-9-1-3",
    title: "පියවර 3: විසඳුම සැලසුම් කිරීම (ඇල්ගොරිතම)",
    type: "html",
    content: `
        <h2>පියවර 3: විසඳුම සැලසුම් කිරීම (Planning the Solution - Algorithm)</h2>
        <p>ගැටලුව පැහැදිලිව නිර්වචනය කළ පසු, එය විසඳීම සඳහා අවශ්‍ය පියවර මාලාව පිළිවෙලට සැලසුම් කළ යුතුය. මෙම පියවරෙන්-පියවර උපදෙස් මාලාව <b>ඇල්ගොරිතමයක් (Algorithm)</b> ලෙස හැඳින්වේ. ඇල්ගොරිතමයක් යනු පරිගණක කේතයක් ලිවීමට පෙර නිර්මාණය කරන "නිල් පිරිසැලසුම" (blueprint) වේ. එය නිරූපණය කිරීමට ගැලීම් සටහන් (Flowcharts) සහ ව්‍යාජ කේත (Pseudocode) යන ක්‍රම දෙකම බහුලව භාවිතා වේ.</p>

        <div class="my-6 p-4 border rounded-lg bg-background">
            <h4 class="font-bold text-lg mb-2">ප්‍රායෝගික උදාහරණය: ශිෂ්‍ය සාමාර්ථය ගණනය කිරීම</h4>
            <p>අපගේ උදාහරණය සඳහා ඇල්ගොරිතමය සැලසුම් කරමු.</p>
            
            <h5 class="font-semibold mt-4">1. ව්‍යාජ කේතය (Pseudocode)</h5>
            <p>මෙය මිනිස් භාෂාව (ඉංග්‍රීසි) සහ ක්‍රමලේඛන ව්‍යුහයන් මිශ්‍ර කර, විසඳුමේ තර්කනය ලිවීමේ ක්‍රමයකි.</p>
            <pre><code>Begin
    // ආදාන ලබාගැනීම
    Read mark1, mark2, mark3

    // ක්‍රියාවලිය
    total = mark1 + mark2 + mark3
    average = total / 3

    // තීරණය ගැනීම
    If average >= 50 then
        status = "Pass"
    Else
        status = "Fail"
    Endif

    // ප්‍රතිදානය පෙන්වීම
    Display "Average is:", average
    Display "Status is:", status
End
            </code></pre>

            <h5 class="font-semibold mt-4">2. ගැලීම් සටහන (Flowchart)</h5>
            <p>මෙය සම්මත සංකේත භාවිතා කර විසඳුමේ ප්‍රවාහය දෘශ්‍යමය වශයෙන් නිරූපණය කිරීමේ ක්‍රමයකි.</p>
            <div class="flex justify-center items-center my-4 p-4 border rounded-md">
                <img src="https://firebasestorage.googleapis.com/v0/b/firebase-studio-app-pro-p2.appspot.com/o/asset-mirror%2Ff64a7ccb-14c1-424a-9b4e-e11559868735?alt=media&token=c81dd001-c8a7-47b2-bd77-0c7ed004e0de" alt="Flowchart for calculating student pass/fail status" class="max-w-xs md:max-w-sm" />
            </div>
             <p class="mt-2 text-sm text-muted-foreground">මෙම සැලැස්ම අතැතිව, අපට දැන් විසඳුම ක්‍රියාත්මක කිරීමේ (implementation) ඊළඟ පියවරට යා හැක.</p>
        </div>
    `,
    tags: ["problem solving", "planning", "algorithm", "flowchart", "pseudocode"],
    relatedQuestions: [],
};

