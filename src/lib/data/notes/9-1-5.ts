import type { Note } from "../../types";

export const note_9_1_5: Note = {
    id: "note-9-1-5",
    title: "පියවර 5: පරීක්ෂා කිරීම සහ නිදොස් කිරීම",
    type: "html",
    content: `
        <h2>පියවර 5: විසඳුම පරීක්ෂා කිරීම සහ නිදොස් කිරීම (Testing and Debugging)</h2>
        <p>වැඩසටහනක් ලිවීමෙන් පමණක් ක්‍රියාවලිය අවසන් නොවේ. එය බලාපොරොත්තු වූ පරිදි, විවිධ තත්ත්වයන් යටතේ නිවැරදිව ක්‍රියා කරන්නේ දැයි තහවුරු කර ගැනීම අත්‍යවශ්‍ය වේ. මෙම ක්‍රියාවලිය "පරීක්ෂා කිරීම" (Testing) ලෙස හැඳින්වේ. පරීක්ෂා කිරීමේදී හමුවන වැරදි හෝ දෝෂ (bugs) සොයා ඒවා නිවැරදි කිරීම "නිදොස් කිරීම" (Debugging) ලෙස හැඳින්වේ.</p>

        <h3>අත් අනුරේඛනය (Hand Tracing / Dry Run)</h3>
        <p>කේතය ක්‍රියාත්මක කිරීමට පෙර, ඇල්ගොරිතමයේ හෝ ව්‍යාජ කේතයේ තර්කනය නිවැරදි දැයි පරීක්ෂා කිරීමට භාවිතා කරන සරල ක්‍රමයකි. මෙහිදී, අප විසින්ම පරිගණකය ලෙස ක්‍රියා කරමින්, විවිධ ආදාන අගයන් සඳහා, එක් එක් පියවරේදී විචල්‍යයන්ගේ අගයන් වෙනස් වන ආකාරය වගුවක සටහන් කර ගනී.</p>
        
        <div class="my-6 p-4 border rounded-lg bg-background">
            <h4 class="font-bold text-lg mb-2">ප්‍රායෝගික උදාහරණය: අත් අනුරේඛන වගුව</h4>
            <p>අපගේ ශිෂ්‍ය සාමාර්ථය ගණනය කිරීමේ ඇල්ගොරිතමය සඳහා අත් අනුරේඛනයක් සිදු කරමු. අපි අවස්ථා දෙකක් සලකා බලමු: (1) සමත් වන ලකුණු, (2) අසමත් වන ලකුණු.</p>

            <h5 class="font-semibold mt-4">අවස්ථාව 1: සමත් වන ලකුණු (marks = 80, 70, 60)</h5>
            <div class="overflow-x-auto">
            <table class="w-full my-2 border text-center">
                <thead class="bg-muted"><tr><th class="p-2 border">පියවර</th><th class="p-2 border">mark1</th><th class="p-2 border">mark2</th><th class="p-2 border">mark3</th><th class="p-2 border">total</th><th class="p-2 border">average</th><th class="p-2 border">average >= 50?</th><th class="p-2 border">status</th></tr></thead>
                <tbody>
                    <tr><td class="p-2 border">Read marks</td><td class="p-2 border">80</td><td class="p-2 border">70</td><td class="p-2 border">60</td><td class="p-2 border">?</td><td class="p-2 border">?</td><td class="p-2 border">?</td><td class="p-2 border">?</td></tr>
                    <tr><td class="p-2 border">Calculate total</td><td class="p-2 border">80</td><td class="p-2 border">70</td><td class="p-2 border">60</td><td class="p-2 border">210</td><td class="p-2 border">?</td><td class="p-2 border">?</td><td class="p-2 border">?</td></tr>
                    <tr><td class="p-2 border">Calculate average</td><td class="p-2 border">80</td><td class="p-2 border">70</td><td class="p-2 border">60</td><td class="p-2 border">210</td><td class="p-2 border">70.0</td><td class="p-2 border">?</td><td class="p-2 border">?</td></tr>
                    <tr><td class="p-2 border">Check condition</td><td class="p-2 border">80</td><td class="p-2 border">70</td><td class="p-2 border">60</td><td class="p-2 border">210</td><td class="p-2 border">70.0</td><td class="p-2 border font-bold text-green-600">True</td><td class="p-2 border">?</td></tr>
                    <tr><td class="p-2 border">Set status</td><td class="p-2 border">80</td><td class="p-2 border">70</td><td class="p-2 border">60</td><td class="p-2 border">210</td><td class="p-2 border">70.0</td><td class="p-2 border">True</td><td class="p-2 border">"Pass"</td></tr>
                    <tr><td class="p-2 border">Display output</td><td colspan="7" class="p-2 border text-left">Average is: 70.0, Status is: Pass</td></tr>
                </tbody>
            </table>
            </div>

            <h5 class="font-semibold mt-6">අවස්ථාව 2: අසමත් වන ලකුණු (marks = 40, 30, 50)</h5>
            <div class="overflow-x-auto">
             <table class="w-full my-2 border text-center">
                <thead class="bg-muted"><tr><th class="p-2 border">පියවර</th><th class="p-2 border">mark1</th><th class="p-2 border">mark2</th><th class="p-2 border">mark3</th><th class="p-2 border">total</th><th class="p-2 border">average</th><th class="p-2 border">average >= 50?</th><th class="p-2 border">status</th></tr></thead>
                <tbody>
                    <tr><td class="p-2 border">Read marks</td><td class="p-2 border">40</td><td class="p-2 border">30</td><td class="p-2 border">50</td><td class="p-2 border">?</td><td class="p-2 border">?</td><td class="p-2 border">?</td><td class="p-2 border">?</td></tr>
                    <tr><td class="p-2 border">Calculate total</td><td class="p-2 border">40</td><td class="p-2 border">30</td><td class="p-2 border">50</td><td class="p-2 border">120</td><td class="p-2 border">?</td><td class="p-2 border">?</td><td class="p-2 border">?</td></tr>
                    <tr><td class="p-2 border">Calculate average</td><td class="p-2 border">40</td><td class="p-2 border">30</td><td class="p-2 border">50</td><td class="p-2 border">120</td><td class="p-2 border">40.0</td><td class="p-2 border">?</td><td class="p-2 border">?</td></tr>
                    <tr><td class="p-2 border">Check condition</td><td class="p-2 border">40</td><td class="p-2 border">30</td><td class="p-2 border">50</td><td class="p-2 border">120</td><td class="p-2 border">40.0</td><td class="p-2 border font-bold text-red-600">False</td><td class="p-2 border">?</td></tr>
                    <tr><td class="p-2 border">Set status</td><td class="p-2 border">40</td><td class="p-2 border">30</td><td class="p-2 border">50</td><td class="p-2 border">120</td><td class="p-2 border">40.0</td><td class="p-2 border">False</td><td class="p-2 border">"Fail"</td></tr>
                    <tr><td class="p-2 border">Display output</td><td colspan="7" class="p-2 border text-left">Average is: 40.0, Status is: Fail</td></tr>
                </tbody>
            </table>
            </div>
             <p class="mt-2 text-sm text-muted-foreground">මෙම වගු දෙකෙන්ම පෙනී යන්නේ අපගේ ඇල්ගොරිතමය අවස්ථා දෙකේදීම නිවැරදිව ක්‍රියා කරන බවයි. දැන් අපට විශ්වාසයෙන් යුතුව විසඳුම නඩත්තු කිරීමේ අවසන් පියවරට යා හැක.</p>
        </div>
    `,
    tags: ["problem solving", "testing", "debugging", "hand trace", "dry run"],
    relatedQuestions: [],
};

