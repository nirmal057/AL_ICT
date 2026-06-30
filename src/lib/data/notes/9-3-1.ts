
import type { Note } from "../../types";

export const note_9_3_1: Note = {
    id: "note-9-3-1",
    title: "ගැලීම් සටහන් (Flowcharts)",
    type: "html",
    content: `
        <h2>ගැලීම් සටහන් (Flowcharts)</h2>
        <p>ගැලීම් සටහනක් යනු ඇල්ගොරිතමයක් හෝ ක්‍රියාවලියක් නිරූපණය කිරීමට භාවිතා කරන ප්‍රස්තාරික ක්‍රමයකි. මෙහිදී සම්මත සංකේත භාවිතා කරමින්, ක්‍රියාවලියේ එක් එක් පියවර සහ ඒවා අතර පවතින පාලන ප්‍රවාහය (control flow) දෘශ්‍යමය වශයෙන් පැහැදිලිව දක්වනු ලැබේ. සංකීර්ණ තර්කනයන් සහ තීරණ ගැනීමේ අවස්ථා පහසුවෙන් තේරුම් ගැනීමට මෙය ඉතා ප්‍රයෝජනවත් වේ.</p>

        <h3>ගැලීම් සටහන් වල භාවිතා වන මූලික සංකේත</h3>
        <div class="overflow-x-auto my-4">
            <table class="w-full border">
                <thead class="bg-muted"><tr class="text-left"><th class="p-2 border">සංකේතය</th><th class="p-2 border">නම (සිංහල / English)</th><th class="p-2 border">කාර්යය</th></tr></thead>
                <tbody>
                    <tr><td class="p-2 border text-center"><div class="w-32 h-16 border-2 border-foreground rounded-full mx-auto flex items-center justify-center">ඕවලාකාරය</div></td><td class="p-2 border font-semibold">ආරම්භය / අවසානය (Start / Stop / Terminal)</td><td class="p-2 border">ගැලීම් සටහනක ආරම්භය හෝ අවසානය දැක්වීමට.</td></tr>
                    <tr><td class="p-2 border text-center"><div class="w-32 h-16 border-2 border-foreground -skew-x-12 mx-auto flex items-center justify-center skew-x-12">සමාන්තරාස්‍රය</div></td><td class="p-2 border font-semibold">ආදානය / ප්‍රතිදානය (Input / Output)</td><td class="p-2 border">වැඩසටහනට දත්ත ඇතුළත් කිරීම (උදා: Read, Input) හෝ ප්‍රතිඵල පෙන්වීම (උදා: Print, Display) සඳහා යොදා ගනී.</td></tr>
                    <tr><td class="p-2 border text-center"><div class="w-32 h-16 border-2 border-foreground mx-auto flex items-center justify-center">සෘජුකෝණාස්‍රය</div></td><td class="p-2 border font-semibold">සැකසීම / ක්‍රියාවලිය (Process)</td><td class="p-2 border">ගණනය කිරීමක්, අගයක් පැවරීමක්, හෝ දත්ත සැකසීමක් වැනි ඕනෑම ක්‍රියාවලියක් නිරූපණය කරයි.</td></tr>
                    <tr><td class="p-2 border text-center"><div class="w-24 h-24 border-2 border-foreground rotate-45 mx-auto flex items-center justify-center"><div class="-rotate-45">දියමන්තිය</div></div></td><td class="p-2 border font-semibold">තීරණය (Decision)</td><td class="p-2 border">යම් කොන්දේසියක් මත පදනම්ව තීරණයක් ගනී. ප්‍රතිඵලය සත්‍ය (Yes/True) හෝ අසත්‍ය (No/False) වන මාර්ග දෙකකට බෙදේ.</td></tr>
                    <tr><td class="p-2 border text-center"><div class="text-4xl font-bold">→</div></td><td class="p-2 border font-semibold">ගැලීම් රේඛාව (Flow Line)</td><td class="p-2 border">පාලනයේ ගැලීම, එනම් පියවර අනුගමනය කළ යුතු දිශාව පෙන්වයි.</td></tr>
                    <tr><td class="p-2 border text-center"><div class="w-16 h-16 border-2 border-foreground rounded-full mx-auto flex items-center justify-center">වෘත්තය</div></td><td class="p-2 border font-semibold">සම්බන්ධකය (Connector)</td><td class="p-2 border">එකම පිටුවක ඇති සංකීර්ණ ගැලීම් සටහනක කොටස් සම්බන්ධ කිරීමට යොදා ගනී.</td></tr>
                    <tr><td class="p-2 border text-center"><div class="p-2 border-2 border-foreground"><div class="w-24 h-12 border-l-2 border-r-2 border-foreground mx-auto flex items-center justify-center"></div></div></td><td class="p-2 border font-semibold">පූර්ව-නිර්වචිත ක්‍රියාවලිය (Pre-defined Process / Sub-routine)</td><td class="p-2 border">වෙනත් තැනක නිර්වචනය කරන ලද උප-ක්‍රියාවලියක් හෝ ශ්‍රිතයක් කැඳවීම නිරූපණය කරයි.</td></tr>
                </tbody>
            </table>
        </div>
        
        <h3>ගැලීම් සටහන් සඳහා විශේෂ සටහන්</h3>
        <ul class="list-disc pl-5 mt-2">
            <li><b>පැහැදිලි බව:</b> ගැලීම් සටහන සෑම විටම පැහැදිලි සහ තේරුම් ගැනීමට පහසු විය යුතුය. සංකේත එකිනෙක මත ගොඩගැසීමෙන් වළකින්න.</li>
            <li><b>ගැලීමේ දිශාව:</b> සාමාන්‍යයෙන් ගැලීම් රේඛා ඉහළ සිට පහළට හෝ වමේ සිට දකුණට යොමු විය යුතුය. ඊතල මගින් දිශාව පැහැදිලිව දැක්විය යුතුය.</li>
            <li><b>සම්මත සංකේත:</b> සෑම විටම සම්මත ගැලීම් සටහන් සංකේත භාවිතා කරන්න. මෙය ඕනෑම කෙනෙකුට ඔබගේ සටහන තේරුම් ගැනීමට උපකාරී වේ.</li>
            <li><b>ආරම්භය සහ අවසානය:</b> සෑම ගැලීම් සටහනකටම එක් Start සංකේතයක් සහ එක් Stop සංකේතයක් පමණක් තිබිය යුතුය.</li>
            <li><b>සම්බන්ධක:</b> ඉතා සංකීර්ණ හෝ විශාල ගැලීම් සටහන් වලදී, රේඛා එකිනෙක කැපී යාම වැළැක්වීමට Connector (වෘත්තාකාර සංකේතය) භාවිතා කළ හැක.</li>
        </ul>

        <h2 class="mt-8">ගැලීම් සටහන් සඳහා උදාහරණ</h2>

        <div class="my-4 p-4 border rounded-lg bg-background">
            <h4 class="font-bold">උදාහරණය 1: සංඛ්‍යා දෙකක් එකතු කිරීම</h4>
            <div class="grid md:grid-cols-2 gap-4 items-start">
                <div class="flex justify-center my-2 p-2 border rounded-md">
                    <svg viewBox="0 0 200 400" class="w-full max-w-xs h-auto">
                        <defs><marker id="arrow-flow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" class="fill-foreground"></path></marker></defs>
                        <g class="font-sans text-sm">
                            <ellipse cx="100" cy="40" rx="50" ry="20" class="fill-card stroke-foreground" stroke-width="1.5"></ellipse><text x="100" y="42" text-anchor="middle">Start</text>
                            <line x1="100" y1="60" x2="100" y2="90" marker-end="url(#arrow-flow)" class="stroke-foreground"></line>
                            <path d="M 30 110 l 140 0 l -20 30 l -140 0 l 20 -30 z" class="fill-card stroke-foreground" stroke-width="1.5"></path><text x="100" y="127" text-anchor="middle">Input N1, N2</text>
                            <line x1="100" y1="140" x2="100" y2="170" marker-end="url(#arrow-flow)" class="stroke-foreground"></line>
                            <rect x="30" y="190" width="140" height="40" class="fill-card stroke-foreground" stroke-width="1.5" transform="translate(0,-20)"></rect><text x="100" y="197" text-anchor="middle">Total = N1 + N2</text>
                            <line x1="100" y1="210" x2="100" y2="240" marker-end="url(#arrow-flow)" class="stroke-foreground"></line>
                            <path d="M 30 260 l 140 0 l -20 30 l -140 0 l 20 -30 z" class="fill-card stroke-foreground" stroke-width="1.5"></path><text x="100" y="277" text-anchor="middle">Print Total</text>
                            <line x1="100" y1="290" x2="100" y2="320" marker-end="url(#arrow-flow)" class="stroke-foreground"></line>
                            <ellipse cx="100" cy="340" rx="50" ry="20" class="fill-card stroke-foreground" stroke-width="1.5"></ellipse><text x="100" y="342" text-anchor="middle">Stop</text>
                        </g>
                    </svg>
                </div>
                <div>
                    <h5 class="font-semibold">Hand Trace (N1=10, N2=20)</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full my-2 border text-center text-sm">
                            <thead class="bg-muted"><tr><th class="p-2 border">N1</th><th class="p-2 border">N2</th><th class="p-2 border">Total</th><th class="p-2 border">Output</th></tr></thead>
                            <tbody>
                                <tr><td class="p-1 border">10</td><td class="p-1 border">20</td><td class="p-1 border">?</td><td class="p-1 border">?</td></tr>
                                <tr><td class="p-1 border">10</td><td class="p-1 border">20</td><td class="p-1 border">30</td><td class="p-1 border">?</td></tr>
                                <tr><td class="p-1 border">10</td><td class="p-1 border">20</td><td class="p-1 border">30</td><td class="p-1 border">30</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <p class="text-sm mt-2"><b>පැහැදිලි කිරීම:</b></p>
            <ul class="text-sm list-disc pl-5">
                <li><b>Start:</b> ගැලීම් සටහනේ ක්‍රියාවලිය මෙතැනින් ආරම්භ වේ.</li>
                <li><b>Input N1, N2:</b> පරිශීලකයාගෙන් සංඛ්‍යා දෙකක් ලබාගෙන N1 සහ N2 විචල්‍යයන් තුළ ගබඩා කරයි.</li>
                <li><b>Total = N1 + N2:</b> N1 සහ N2 හි අගයන් එකතු කර, ලැබෙන පිළිතුර Total විචල්‍යයේ ගබඩා කරයි.</li>
                <li><b>Print Total:</b> Total විචල්‍යයේ ඇති අවසාන පිළිතුර පරිශීලකයාට පෙන්වයි.</li>
                <li><b>Stop:</b> ක්‍රියාවලිය මෙතැනින් අවසන් වේ.</li>
            </ul>
        </div>

        <div class="my-4 p-4 border rounded-lg bg-background">
            <h4 class="font-bold">උදාහරණය 2: සෘජුකෝණාස්‍රයක වර්ගඵලය සෙවීම</h4>
            <div class="grid md:grid-cols-2 gap-4 items-start">
                 <div class="flex justify-center my-2 p-2 border rounded-md">
                    <svg viewBox="0 0 200 400" class="w-full max-w-xs h-auto">
                        <defs><marker id="arrow-flow-2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" class="fill-foreground"></path></marker></defs>
                        <g class="font-sans text-sm">
                            <ellipse cx="100" cy="40" rx="50" ry="20" class="fill-card stroke-foreground" stroke-width="1.5"></ellipse><text x="100" y="42" text-anchor="middle">Start</text>
                            <line x1="100" y1="60" x2="100" y2="90" marker-end="url(#arrow-flow-2)" class="stroke-foreground"></line>
                            <path d="M 10 110 l 180 0 l -20 30 l -180 0 l 20 -30 z" class="fill-card stroke-foreground" stroke-width="1.5"></path><text x="100" y="127" text-anchor="middle">Input Length, Breadth</text>
                            <line x1="100" y1="140" x2="100" y2="170" marker-end="url(#arrow-flow-2)" class="stroke-foreground"></line>
                            <rect x="10" y="190" width="180" height="40" class="fill-card stroke-foreground" stroke-width="1.5" transform="translate(0,-20)"></rect><text x="100" y="197" text-anchor="middle">Area = Length * Breadth</text>
                            <line x1="100" y1="210" x2="100" y2="240" marker-end="url(#arrow-flow-2)" class="stroke-foreground"></line>
                            <path d="M 10 260 l 180 0 l -20 30 l -180 0 l 20 -30 z" class="fill-card stroke-foreground" stroke-width="1.5"></path><text x="100" y="277" text-anchor="middle">Print Area</text>
                            <line x1="100" y1="290" x2="100" y2="320" marker-end="url(#arrow-flow-2)" class="stroke-foreground"></line>
                            <ellipse cx="100" cy="340" rx="50" ry="20" class="fill-card stroke-foreground" stroke-width="1.5"></ellipse><text x="100" y="342" text-anchor="middle">Stop</text>
                        </g>
                    </svg>
                </div>
                 <div>
                    <h5 class="font-semibold">Hand Trace (Length=10, Breadth=5)</h5>
                    <div class="overflow-x-auto">
                         <table class="w-full my-2 border text-center text-sm">
                            <thead class="bg-muted"><tr><th class="p-2 border">Length</th><th class="p-2 border">Breadth</th><th class="p-2 border">Area</th><th class="p-2 border">Output</th></tr></thead>
                            <tbody>
                                <tr><td class="p-1 border">10</td><td class="p-1 border">5</td><td class="p-1 border">?</td><td class="p-1 border">?</td></tr>
                                <tr><td class="p-1 border">10</td><td class="p-1 border">5</td><td class="p-1 border">50</td><td class="p-1 border">?</td></tr>
                                <tr><td class="p-1 border">10</td><td class="p-1 border">5</td><td class="p-1 border">50</td><td class="p-1 border">50</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <p class="text-sm mt-2"><b>පැහැදිලි කිරීම:</b> පළමු උදාහරණයට සමානව, මෙයද අනුක්‍රමික ප්‍රවාහයකි. දිග සහ පළල ආදානය ලෙස ලබාගෙන, ඒවා ගුණ කර වර්ගඵලය ගණනය කර, ප්‍රතිඵලය ප්‍රතිදානය කරයි.</p>
        </div>

        <div class="my-4 p-4 border rounded-lg bg-background">
            <h4 class="font-bold">උදාහරණය 3: සංඛ්‍යා දෙකකින් විශාලතම සංඛ්‍යාව සෙවීම</h4>
            <div class="grid md:grid-cols-2 gap-4 items-start">
                 <div class="flex justify-center my-2 p-2 border rounded-md">
                     <svg viewBox="0 0 300 400" class="w-full max-w-xs h-auto">
                        <defs><marker id="arrow-flow-3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" class="fill-foreground"></path></marker></defs>
                        <g class="font-sans text-sm">
                            <ellipse cx="150" cy="40" rx="50" ry="20" class="fill-card stroke-foreground" stroke-width="1.5"></ellipse><text x="150" y="42" text-anchor="middle">Start</text>
                            <line x1="150" y1="60" x2="150" y2="90" marker-end="url(#arrow-flow-3)" class="stroke-foreground"></line>
                            <path d="M 80 110 l 140 0 l -20 30 l -140 0 l 20 -30 z" class="fill-card stroke-foreground" stroke-width="1.5"></path><text x="150" y="127" text-anchor="middle">Input n1, n2</text>
                            <line x1="150" y1="140" x2="150" y2="170" marker-end="url(#arrow-flow-3)" class="stroke-foreground"></line>
                            <path d="M 150 170 l 60 25 l -60 25 l -60 -25 z" class="fill-card stroke-foreground" stroke-width="1.5"></path><text x="150" y="197" text-anchor="middle">n1 > n2?</text>
                            <line x1="150" y1="220" x2="150" y2="250" marker-end="url(#arrow-flow-3)" class="stroke-foreground"></line><text x="160" y="240" text-anchor="middle">Yes</text>
                            <rect x="100" y="250" width="100" height="30" class="fill-card stroke-foreground" stroke-width="1.5"></rect><text x="150" y="270" text-anchor="middle">Max = n1</text>
                            <line x1="210" y1="195" x2="260" y2="195" marker-end="url(#arrow-flow-3)" class="stroke-foreground"></line><text x="230" y="190" text-anchor="middle">No</text>
                            <rect x="230" y="210" width="100" height="30" class="fill-card stroke-foreground" stroke-width="1.5" transform="translate(-30,-55)"></rect><text x="250" y="175" text-anchor="middle">Max = n2</text>
                            <line x1="150" y1="280" x2="150" y2="300" class="stroke-foreground"></line><line x1="250" y1="185" x2="250" y2="300" class="stroke-foreground"></line><line x1="150" y1="300" x2="250" y2="300" class="stroke-foreground"></line>
                            <line x1="200" y1="300" x2="200" y2="320" marker-end="url(#arrow-flow-3)" class="stroke-foreground"></line>
                            <path d="M 130 340 l 140 0 l -20 30 l -140 0 l 20 -30 z" class="fill-card stroke-foreground" stroke-width="1.5" transform="translate(-50,0)"></path><text x="150" y="357" text-anchor="middle">Print max</text>
                            <line x1="150" y1="370" x2="150" y2="390" marker-end="url(#arrow-flow-3)" class="stroke-foreground"></line>
                            <ellipse cx="150" cy="410" rx="50" ry="20" class="fill-card stroke-foreground" stroke-width="1.5"></ellipse><text x="150" y="412" text-anchor="middle">Stop</text>
                        </g>
                    </svg>
                 </div>
                 <div>
                    <h5 class="font-semibold">Hand Trace (n1=10, n2=15)</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full my-2 border text-center text-sm">
                            <thead class="bg-muted"><tr><th class="p-1 border">Step</th><th class="p-1 border">Location</th><th class="p-1 border">n1</th><th class="p-1 border">n2</th><th class="p-1 border">Max</th><th class="p-1 border">Output</th></tr></thead>
                            <tbody>
                                <tr><td class="p-1 border">1</td><td class="p-1 border">Start</td><td class="p-1 border">-</td><td class="p-1 border">-</td><td class="p-1 border">-</td><td class="p-1 border"></td></tr>
                                <tr><td class="p-1 border">2</td><td class="p-1 border">Input</td><td class="p-1 border">10</td><td class="p-1 border">15</td><td class="p-1 border">-</td><td class="p-1 border"></td></tr>
                                <tr><td class="p-1 border">3</td><td class="p-1 border">Decision (10 > 15?)</td><td class="p-1 border">10</td><td class="p-1 border">15</td><td class="p-1 border">-</td><td class="p-1 border">False. Go to 'No' path.</td></tr>
                                <tr><td class="p-1 border">4</td><td class="p-1 border">Process: Max = n2</td><td class="p-1 border">10</td><td class="p-1 border">15</td><td class="p-1 border">15</td><td class="p-1 border"></td></tr>
                                <tr><td class="p-1 border">5</td><td class="p-1 border">Output: Print Max</td><td class="p-1 border">10</td><td class="p-1 border">15</td><td class="p-1 border">15</td><td class="p-1 border">15</td></tr>
                                <tr><td class="p-1 border">6</td><td class="p-1 border">Stop</td><td class="p-1 border">10</td><td class="p-1 border">15</td><td class="p-1 border">15</td><td class="p-1 border"></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
             <p class="text-sm mt-2"><b>පැහැදිලි කිරීම:</b> "n1 > n2?" යන තීරණය මත පදනම්ව ගැලීම මාර්ග දෙකකට බෙදේ. කොන්දේසිය සත්‍ය නම් 'Yes' මාර්ගය ඔස්සේත්, අසත්‍ය නම් 'No' මාර්ගය ඔස්සේත් ගමන් කරයි. අවසානයේදී, මාර්ග දෙකම එකතු වී, 'Max' විචල්‍යයේ ඇති අගය ප්‍රතිදානය කරයි.</p>
        </div>

        <div class="my-4 p-4 border rounded-lg bg-background">
            <h4 class="font-bold">උදාහරණය 4: 1 සිට 5 දක්වා සංඛ්‍යා මුද්‍රණය කිරීම (Looping)</h4>
             <div class="grid md:grid-cols-2 gap-4 items-start">
                 <div class="flex justify-center my-2 p-2 border rounded-md">
                    <svg viewBox="0 0 250 450" class="w-full max-w-xs h-auto">
                        <defs><marker id="arrow-flow-4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" class="fill-foreground"></path></marker></defs>
                        <g class="font-sans text-sm">
                            <ellipse cx="125" cy="40" rx="50" ry="20" class="fill-card stroke-foreground" stroke-width="1.5"></ellipse><text x="125" y="42" text-anchor="middle">Start</text>
                            <line x1="125" y1="60" x2="125" y2="90" marker-end="url(#arrow-flow-4)" class="stroke-foreground"></line>
                            <rect x="75" y="90" width="100" height="30" class="fill-card stroke-foreground" stroke-width="1.5"></rect><text x="125" y="110" text-anchor="middle">X = 1</text>
                            <line x1="125" y1="120" x2="125" y2="150" marker-end="url(#arrow-flow-4)" class="stroke-foreground"></line>
                            <path d="M 125 150 l 60 25 l -60 25 l -60 -25 z" class="fill-card stroke-foreground" stroke-width="1.5"></path><text x="125" y="177" text-anchor="middle">X <= 5?</text>
                            <line x1="185" y1="175" x2="230" y2="175" marker-end="url(#arrow-flow-4)" class="stroke-foreground"></line><text x="200" y="170" text-anchor="middle">No</text>
                            <ellipse cx="230" cy="215" rx="50" ry="20" class="fill-card stroke-foreground" transform="translate(-10,-40)" stroke-width="1.5"></ellipse><text x="220" y="177" text-anchor="middle">Stop</text>
                            <line x1="125" y1="200" x2="125" y2="230" marker-end="url(#arrow-flow-4)" class="stroke-foreground"></line><text x="135" y="220" text-anchor="middle">Yes</text>
                            <path d="M 55 250 l 140 0 l -20 30 l -140 0 l 20 -30 z" class="fill-card stroke-foreground" stroke-width="1.5"></path><text x="125" y="267" text-anchor="middle">Print X</text>
                            <line x1="125" y1="280" x2="125" y2="310" marker-end="url(#arrow-flow-4)" class="stroke-foreground"></line>
                            <rect x="75" y="310" width="100" height="30" class="fill-card stroke-foreground" stroke-width="1.5"></rect><text x="125" y="330" text-anchor="middle">X = X + 1</text>
                            <line x1="125" y1="340" x2="50" y2="340" class="stroke-foreground"></line><line x1="50" y1="340" x2="50" y2="175" class="stroke-foreground"></line><line x1="50" y1="175" x2="65" y2="175" marker-end="url(#arrow-flow-4)" class="stroke-foreground"></line>
                        </g>
                    </svg>
                 </div>
                 <div>
                    <h5 class="font-semibold">Hand Trace</h5>
                    <div class="overflow-x-auto">
                         <table class="w-full my-2 border text-center text-sm">
                            <thead class="bg-muted"><tr><th class="p-2 border">X</th><th class="p-2 border">X <= 5?</th><th class="p-2 border">Output</th></tr></thead>
                            <tbody>
                                <tr><td class="p-1 border">1</td><td class="p-1 border">True</td><td class="p-1 border">1</td></tr>
                                <tr><td class="p-1 border">2</td><td class="p-1 border">True</td><td class="p-1 border">2</td></tr>
                                <tr><td class="p-1 border">3</td><td class="p-1 border">True</td><td class="p-1 border">3</td></tr>
                                <tr><td class="p-1 border">4</td><td class="p-1 border">True</td><td class="p-1 border">4</td></tr>
                                <tr><td class="p-1 border">5</td><td class="p-1 border">True</td><td class="p-1 border">5</td></tr>
                                <tr><td class="p-1 border">6</td><td class="p-1 border">False</td><td class="p-1 border">-</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
             <p class="text-sm mt-2"><b>පැහැදිලි කිරීම:</b> X හි අගය 1න් ආරම්භ වේ. "X <= 5?" කොන්දේසිය සත්‍ය වන තාක්, ලූපය ක්‍රියාත්මක වේ. සෑම වටයකදීම X මුද්‍රණය කර, එහි අගය 1කින් වැඩි කරයි. X හි අගය 6 වූ විට, කොන්දේසිය අසත්‍ය වී, ගැලීම "No" මාර්ගය ඔස්සේ ගොස් ක්‍රියාවලිය අවසන් කරයි.</p>
        </div>
    `,
    tags: ["algorithms", "flowcharts", "symbols", "problem solving"],
    relatedQuestions: [{id: "pq-2020-p1-32"}, {id: "pq-2020-p1-33"}, {id: "pq-2020-p1-34"}, {id: "pq-2011-p1-21"}, {id:"pq-2012-p1-43"}, {id:"pq-2012-p1-44"}],
};
    

    

    

    