import type { Note } from "../../types";

export const note_9_1_2: Note = {
    id: "note-9-1-2",
    title: "පියවර 2: ගැටලුව නිර්වචනය කිරීම",
    type: "html",
    content: `
        <h2>පියවර 2: ගැටලුව නිර්වචනය කිරීම සහ සීමා මායිම් හඳුනා ගැනීම (Defining the Problem and Boundaries)</h2>
        <p>ගැටලුව අවබෝධ කරගත් පසු, ඊළඟ පියවර වන්නේ එය විධිමත්ව නිර්වචනය කිරීමයි. මෙහිදී, විසඳුම නිර්මාණය කිරීමට අවශ්‍ය වන සියලුම "අමුද්‍රව්‍ය" (ආදාන) සහ අප විසින් නිර්මාණය කළ යුතු "අවසාන නිෂ්පාදන" (ප්‍රතිදාන) පැහැදිලිව ලැයිස්තුගත කිරීම සිදු වේ. එමෙන්ම, ගැටලුවට අදාළ වන සීමාවන් හෝ නීති (constraints) ද හඳුනා ගැනීම වැදගත් වේ.</p>

        <h3>මෙම පියවරේදී හඳුනාගත යුතු දේ:</h3>
        <ul>
            <li><b>ආදාන (Inputs):</b> විසඳුම සඳහා අවශ්‍ය වන දත්ත මොනවාද?</li>
            <li><b>ප්‍රතිදාන (Outputs):</b> විසඳුම මගින් ලබා දිය යුතු ප්‍රතිඵල මොනවාද?</li>
            <li><b>ක්‍රියාවලිය (Process):</b> ආදාන, ප්‍රතිදාන බවට පත්කිරීමට අවශ්‍ය මූලික ක්‍රියාවලිය කුමක්ද?</li>
            <li><b>සීමාවන් (Constraints):</b> විසඳුම සෑදීමේදී අප විසින් පිළිපැදිය යුතු නීති හෝ සීමාවන් මොනවාද?</li>
        </ul>

        <div class="my-6 p-4 border rounded-lg bg-background">
            <h4 class="font-bold text-lg mb-2">ප්‍රායෝගික උදාහරණය: ශිෂ්‍ය සාමාර්ථය ගණනය කිරීම</h4>
            <blockquote class="border-l-4 border-primary pl-4 italic my-2">
                "ශිෂ්‍යයෙකුගේ විෂයයන් තුනක ලකුණු සඳහා සාමාන්‍යය ගණනය කර, එම ශිෂ්‍යයා සමත් ද අසමත් ද යන්න තීරණය කරන්න. සාමාන්‍ය ලකුණු 50 හෝ ඊට වැඩි නම් ශිෂ්‍යයා සමත් වේ."
            </blockquote>
            
            <p>මෙම ගැටලුව සඳහා ආදාන, ප්‍රතිදාන සහ සීමාවන් පහත පරිදි නිර්වචනය කළ හැක:</p>
            
            <h5 class="font-semibold mt-4">ආදාන (Inputs):</h5>
            <ul class="list-disc pl-5">
                <li>විෂය 1 සඳහා ලකුණු (උදා: <code>mark1</code>)</li>
                <li>විෂය 2 සඳහා ලකුණු (උදා: <code>mark2</code>)</li>
                <li>විෂය 3 සඳහා ලකුණු (උදා: <code>mark3</code>)</li>
            </ul>

            <h5 class="font-semibold mt-4">ප්‍රතිදාන (Outputs):</h5>
            <ul class="list-disc pl-5">
                <li>ලකුණු තුනේ සාමාන්‍ය අගය (උදා: <code>average</code>)</li>
                <li>සමත්/අසමත් තත්ත්වය (උදා: <code>status</code>)</li>
            </ul>

            <h5 class="font-semibold mt-4">සීමාවන් (Constraints):</h5>
             <ul class="list-disc pl-5">
                <li>එක් එක් විෂය සඳහා ලකුණු 0ත් 100ත් අතර විය යුතුය.</li>
                <li>සාමාන්‍යය 50ට සමාන හෝ වැඩි නම් තත්ත්වය "සමත්" වේ.</li>
                 <li>සාමාන්‍යය 50ට අඩු නම් තත්ත්වය "අසමත්" වේ.</li>
            </ul>
             <p class="mt-2 text-sm text-muted-foreground">මෙම පැහැදිලි නිර්වචනය, විසඳුම සැලසුම් කිරීමේ (planning) ඊළඟ පියවර සඳහා මග පෙන්වයි.</p>
        </div>
    `,
    tags: ["problem solving", "defining", "input", "output", "constraints"],
    relatedQuestions: [],
};
