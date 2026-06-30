
import type { Note } from "../../types";

export const note_2_4_0: Note = {
    id: "note-2-4-0",
    title: "පරිගණක මතක ධූරාවලිය",
    type: "html",
    content: `
      <h2>පරිගණක මතක ධූරාවලිය (Computer Memory Hierarchy)</h2>
      <p>පරිගණක පද්ධතියක් කාර්යක්ෂමව ක්‍රියා කිරීමට දත්ත ගබඩා කිරීම අත්‍යවශ්‍ය වේ. නමුත්, සියලුම මතක වර්ග එක සමාන නොවේ. සමහර මතක වර්ග ඉතා වේගවත් නමුත් මිල අධික වන අතර, අනෙක්වා මන්දගාමී නමුත් විශාල දත්ත ප්‍රමාණයක් අඩු වියදමකින් ගබඩා කළ හැක. මෙම වේගය, ධාරිතාව, සහ පිරිවැය අතර ඇති සම්මුතිය (trade-off) කළමනාකරණය කිරීම සඳහා, පරිගණක මතකය ධූරාවලියක් හෙවත් පිරමීඩයක ආකාරයට සකසා ඇත.</p>

      <div class="my-8 flex justify-center p-4">
        <svg viewBox="0 0 400 280" class="w-full max-w-lg h-auto">
            <defs>
                <marker id="arrow-up" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6">
                    <path d="M 0 5 L 5 0 L 10 5 Z" class="fill-foreground" />
                </marker>
                 <marker id="arrow-down" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6">
                    <path d="M 0 5 L 5 10 L 10 5 Z" class="fill-foreground" />
                </marker>
            </defs>

            <!-- Pyramid structure -->
            <g transform="translate(100, 0)">
              <polygon points="125,20 250,220 0,220" class="fill-none stroke-foreground" stroke-width="1.5"/>

              <!-- Level 1: Registers -->
              <text x="125" y="45" text-anchor="middle" font-size="12" font-weight="bold" class="fill-foreground">රෙජිස්තර</text>
              <line x1="50" y1="60" x2="200" y2="60" class="stroke-border" stroke-dasharray="3,3"/>

              <!-- Level 2: Cache -->
              <text x="125" y="85" text-anchor="middle" font-size="12" font-weight="bold" class="fill-foreground">නිහිත මතකය (Cache)</text>
              <line x1="40" y1="100" x2="210" y2="100" class="stroke-border" stroke-dasharray="3,3"/>
              
              <!-- Level 3: Main Memory -->
              <text x="125" y="135" text-anchor="middle" font-size="12" font-weight="bold" class="fill-foreground">ප්‍රධාන මතකය (RAM)</text>
              <line x1="20" y1="160" x2="230" y2="160" class="stroke-border" stroke-dasharray="3,3"/>

              <!-- Level 4: Secondary Storage -->
              <text x="125" y="195" text-anchor="middle" font-size="12" font-weight="bold" class="fill-foreground">ද්විතීයික ආචයනය</text>
            </g>
            
            <!-- Left Arrow and Text -->
            <line x1="40" y1="180" x2="40" y2="60" class="stroke-foreground" stroke-width="1.5" marker-end="url(#arrow-up)"/>
            <text x="30" y="120" writing-mode="vertical-rl" text-anchor="middle" font-size="10" class="fill-muted-foreground">වේගය සහ පිරිවැය ↑</text>
            
             <!-- Right Arrow and Text -->
            <line x1="360" y1="60" x2="360" y2="180" class="stroke-foreground" stroke-width="1.5" marker-end="url(#arrow-down)"/>
            <text x="370" y="120" writing-mode="vertical-rl" text-anchor="middle" font-size="10" class="fill-muted-foreground">ධාරිතාව ↑</text>
        </svg>
      </div>

       <div class="p-4 my-4 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md text-sm">
          <h4 class="font-bold">සරල උදාහරණයක්:</h4>
          <p>මෙය, කාර්මිකයෙකුගේ වැඩ බංකුවක් (workbench) මෙන් සිතන්න. නිතරම අවශ්‍ය වන ඉස්කුරුප්පු නියන වැනි මෙවලම් ඔහු අතේම (රෙජිස්තර) තබා ගනී. නිතර දෙවේලේ අවශ්‍ය නමුත් හැමවිටම අතේ තබාගත නොහැකි මෙවලම් (ස්පැනර් සෙට් එක) වැඩ බංකුව මත (නිහිත මතකය) තබා ගනී. අනෙක් මෙවලම්, වැඩ බංකුව අසල ඇති කබඩ් එකක (ප්‍රධාන මතකය) තබා ගන්නා අතර, ඉතා කලාතුරකින් අවශ්‍ය වන විශාල මෙවලම්, වෙනම කාමරයක ඇති ස්ටෝරුවක (ද්විතීයික ආචයනය) තබා ගනී.</p>
      </div>

      <h3>ධූරාවලියේ එක් එක් මට්ටම</h3>
      <ol class="space-y-4">
        <li><b>රෙජිස්තර (Registers):</b>
          <ul class="list-disc pl-5">
            <li><b>ස්ථානය:</b> CPU චිපය තුළම පිහිටා ඇත.</li>
            <li><b>වේගය:</b> වේගවත්ම මතක වර්ගයයි. CPU එකට එකම clock cycle එකක් තුළ ප්‍රවේශ විය හැක.</li>
            <li><b>ධාරිතාව:</b> ඉතා කුඩායි (බයිට කිහිපයක්).</li>
            <li><b>කාර්යය:</b> CPU එක දැනට ක්‍රියාත්මක කරන උපදෙස, දත්ත, සහ ගණනය කිරීමක අතරමැදි ප්‍රතිඵල තාවකාලිකව රඳවා තබා ගැනීම.</li>
          </ul>
        </li>
        <li><b>නිහිත මතකය (Cache Memory):</b>
          <ul class="list-disc pl-5">
            <li><b>ස්ථානය:</b> CPU සහ RAM අතර පිහිටා ඇත (බොහෝ විට CPU චිපය තුළම).</li>
            <li><b>වේගය:</b> රෙජිස්තර වලට වඩා මන්දගාමී නමුත් RAM එකට වඩා බෙහෙවින් වේගවත්ය.</li>
            <li><b>ධාරිතාව:</b> කුඩායි (කිලෝබයිට් (KB) සිට මෙගාබයිට් (MB) කිහිපයක් දක්වා).</li>
            <li><b>කාර්යය:</b> ප්‍රධාන මතකයෙන් (RAM) නිතර ඉල්ලා සිටින දත්ත සහ උපදෙස් වල පිටපතක් තාවකාලිකව ගබඩා කර තබා ගැනීම. මෙමගින් CPU එකට RAM වෙත යාමට ගතවන කාලය අඩු කර, කාර්යසාධනය වැඩි කරයි. L1, L2, L3 ලෙස මට්ටම් කිහිපයක් ඇත.</li>
          </ul>
        </li>
        <li><b>ප්‍රධාන මතකය (Main Memory / RAM):</b>
          <ul class="list-disc pl-5">
            <li><b>ස්ථානය:</b> මවු පුවරුව මත පිහිටා ඇත.</li>
            <li><b>වේගය:</b> නිහිත මතකයට වඩා මන්දගාමී නමුත් ද්විතීයික ආචයනයට වඩා ඉතා වේගවත්ය.</li>
            <li><b>ධාරිතාව:</b> විශාලයි (ගිගාබයිට් (GB) වලින් මනිනු ලැබේ).</li>
            <li><b>කාර්යය:</b> දැනට ක්‍රියාත්මක වන මෙහෙයුම් පද්ධතිය, යෙදුම් වැඩසටහන්, සහ ඒවාට අවශ්‍ය දත්ත තාවකාලිකව ගබඩා කර තබා ගැනීම. මෙය නශ්‍ය (volatile) මතකයකි.</li>
          </ul>
        </li>
        <li><b>ද්විතීයික ආචයනය (Secondary Storage):</b>
          <ul class="list-disc pl-5">
            <li><b>ස්ථානය:</b> වෙනම උපාංග ලෙස පවතී.</li>
            <li><b>වේගය:</b> මතක ධූරාවලියේ මන්දගාමීම කොටසයි.</li>
            <li><b>ධාරිතාව:</b> ඉතා විශාලයි (ගිගාබයිට් (GB) සිට ටෙරාබයිට් (TB) දක්වා).</li>
            <li><b>කාර්යය:</b> දත්ත සහ වැඩසටහන් ස්ථිරව ගබඩා කර තබා ගැනීම. මෙය නශ්‍ය නොවන (non-volatile) මතකයකි. උදා: දෘඪ තැටි (HDD), ඝන-තත්ත්ව ධාවක (SSD), USB ධාවක.</li>
          </ul>
        </li>
      </ol>
      
      <h3>ධූරාවලියේ අවශ්‍යතාවය</h3>
      <p>මධ්‍ය සැකසුම් ඒකකයේ (CPU) වේගය ඉතා ඉහළය. එයට අවශ්‍ය දත්ත සෑම විටම මන්දගාමී මතකයකින් (උදා: HDD) ලබා ගැනීමට සිදුවුවහොත්, CPU එකට බොහෝ වේලාවක් නිකරුනේ බලා සිටීමට (idle) සිදුවේ. මෙය පද්ධතියේ සමස්ත කාර්යසාධනය අඩු කරයි. මතක ධූරාවලිය මගින්, CPU එකට නිතරම අවශ්‍ය වන දත්ත, වේගවත්ම මතක ස්ථරවල (රෙජිස්තර, නිහිත මතකය) තබා ගැනීමෙන් මෙම ගැටලුව විසඳයි.</p>

      <h3>සැසඳීමේ නිර්ණායක</h3>
      <div class="overflow-x-auto"><table class="w-full my-4 border">
          <thead><tr class="bg-muted"><th class="p-2 border">නිර්ණායකය</th><th class="p-2 border">ඉහළ ස්ථර (e.g., Registers)</th><th class="p-2 border">පහළ ස්ථර (e.g., HDD)</th></tr></thead>
          <tbody>
              <tr><td class="p-2 border font-semibold">ප්‍රවේශ කාලය (Access Time)</td><td class="p-2 border">ඉතා අඩුයි (වේගවත්)</td><td class="p-2 border">ඉතා වැඩියි (මන්දගාමී)</td></tr>
              <tr><td class="p-2 border font-semibold">ධාරිතාව (Capacity)</td><td class="p-2 border">ඉතා කුඩායි (KB)</td><td class="p-2 border">ඉතා විශාලයි (TB)</td></tr>
              <tr><td class="p-2 border font-semibold">එක් බිටුවක පිරිවැය (Cost per bit)</td><td class="p-2 border">ඉතා අධිකයි</td><td class="p-2 border">ඉතා අඩුයි</td></tr>
              <tr><td class="p-2 border font-semibold">CPU වෙත සමීපත්වය</td><td class="p-2 border">CPU චිපය තුළම පිහිටයි</td><td class="p-2 border">CPU එකෙන් දුරස්ථව පිහිටයි</td></tr>
          </tbody>
      </table></div>
    `,
    tags: ["memory system", "hierarchy", "cache", "registers", "storage"],
    relatedQuestions: ["pq-2022-p1-3", "pq-2020-p1-1", "pq-2020-p1-2", "pq-2018-p1-12", "pq-2018-p1-13", "pq-2019-p1-1"],
};

    