
import type { Note } from "../../types";

export const note_2_1_3: Note = {
    id: "note-2-1-3",
    title: "පරිගණක වර්ගීකරණය",
    type: "html",
    content: `
      <h2>පරිගණක වර්ගීකරණය (Classification of Computers)</h2>
      <p>පරිගණක ඒවායේ තාක්ෂණය, අරමුණ, සහ ප්‍රමාණය වැනි විවිධ නිර්ණායක මත වර්ගීකරණය කළ හැක.</p>
      
      <div class="my-8 p-4 border rounded-lg bg-muted/30 not-prose">
        <h3 class="text-center font-bold mb-4 text-lg font-headline">පරිගණක වර්ගීකරණ සටහන</h3>
        <div class="flex justify-center">
            <div class="text-center">
                <div class="p-2 bg-card border-2 border-primary rounded-lg shadow-md inline-block">පරිගණක (Computers)</div>
                <div class="flex justify-around mt-4">
                    <div class="w-full h-px bg-foreground -translate-y-2"></div>
                </div>
                 <div class="flex justify-around">
                    <div class="w-px h-6 bg-foreground"></div>
                    <div class="w-px h-6 bg-foreground"></div>
                    <div class="w-px h-6 bg-foreground"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
                    <!-- Branch 1: Technology -->
                    <div class="px-2">
                        <div class="p-2 bg-card border rounded-md shadow-sm font-semibold">තාක්ෂණය අනුව</div>
                        <div class="w-px h-4 bg-foreground mx-auto"></div>
                        <div class="space-y-2">
                            <div class="p-1 bg-background border rounded text-xs">ප්‍රතිසම (Analog)</div>
                            <div class="p-1 bg-background border rounded text-xs">අංකිත (Digital)</div>
                            <div class="p-1 bg-background border rounded text-xs">දෙමුහුන් (Hybrid)</div>
                        </div>
                    </div>
                    <!-- Branch 2: Purpose -->
                    <div class="px-2">
                        <div class="p-2 bg-card border rounded-md shadow-sm font-semibold">අරමුණ අනුව</div>
                        <div class="w-px h-4 bg-foreground mx-auto"></div>
                        <div class="space-y-2">
                            <div class="p-1 bg-background border rounded text-xs">විශේෂ කාර්ය (Special Purpose)</div>
                            <div class="p-1 bg-background border rounded text-xs">සාමාන්‍ය කාර්ය (General Purpose)</div>
                        </div>
                    </div>
                    <!-- Branch 3: Size -->
                    <div class="px-2">
                        <div class="p-2 bg-card border rounded-md shadow-sm font-semibold">ප්‍රමාණය අනුව</div>
                         <div class="w-px h-4 bg-foreground mx-auto"></div>
                        <div class="space-y-2">
                            <div class="p-1 bg-background border rounded text-xs">සුපිරි පරිගණක (Supercomputer)</div>
                            <div class="p-1 bg-background border rounded text-xs">මහා පරිගණක (Mainframe)</div>
                            <div class="p-1 bg-background border rounded text-xs">ක්ෂුද්‍ර පරිගණක (Microcomputer)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <p>මෙම වර්ගීකරණයන් පිළිබඳව වැඩිදුර විස්තර ඊළඟ සටහන් වලින් එකිනෙක අධ්‍යයනය කරමු.</p>
    `,
    tags: ["classification", "computer types"],
    relatedQuestions: [],
};
    
