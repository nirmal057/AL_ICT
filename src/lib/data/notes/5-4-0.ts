
import type { Note } from "../../types";

export const note_5_4_0: Note = {
    id: "note-5-4-0",
    title: "මතක කළමනාකරණය",
    type: "html",
    content: `
      <h2>මතක කළමනාකරණය (Memory Management)</h2>
      <p>මෙහෙයුම් පද්ධතියේ ප්‍රධානතම කාර්යයක් වන්නේ, සීමිත ප්‍රධාන මතකය (RAM) විවිධ ක්‍රියායන අතර කාර්යක්ෂමව සහ ආරක්ෂිතව බෙදා දීමයි. මෙමගින් එක් ක්‍රියායනයකට තවත් ක්‍රියායනයක මතකයට අනවසරයෙන් ප්‍රවේශ වීම වළක්වන අතර, පවතින RAM ප්‍රමාණය උපරිමයෙන් ප්‍රයෝජනයට ගනී.</p>

      <h3>මතක කළමනාකරණ ඒකකය (Memory Management Unit - MMU)</h3>
      <p>MMU යනු CPU චිපය තුළ ඇති, දෘඪාංග උපාංගයකි. එහි ප්‍රධාන කාර්යය වන්නේ ක්‍රියායනයක් විසින් ජනනය කරන <b>අතථ්‍ය මතක ලිපින (virtual memory addresses)</b>, භෞතික මතකයේ (RAM) සැබෑ <b>භෞතික ලිපින (physical addresses)</b> බවට පරිවර්තනය කිරීමයි. මෙමගින්, එක් එක් ක්‍රියායනයට තමන්ටම වෙන්වූ, විශාල මතක අවකාශයක් ඇති බවට මිත්‍යාවක් ලබා දෙන අතර, එක් ක්‍රියායනයකට තවත් ක්‍රියායනයක මතකයට අනවසරයෙන් ප්‍රවේශ වීම වළක්වයි.</p>
      
      <div class="my-6 p-4 border rounded-lg bg-background flex justify-center">
        <div class="text-center">
            <h4 class="font-semibold mb-2">MMU හි කාර්යභාරය</h4>
            <div class="flex flex-col md:flex-row items-center gap-4">
                <div class="p-3 border-2 border-dashed rounded-lg">
                    <p class="font-bold">CPU</p>
                    <p class="text-sm mt-2">Virtual Address<br/><code class="text-primary">0x1A2B</code></p>
                </div>
                <div class="text-2xl font-bold mx-2">→</div>
                <div class="p-4 border-2 border-primary rounded-lg bg-primary/10">
                    <p class="font-bold">MMU</p>
                    <p class="text-sm mt-1">(Page Table භාවිතයෙන්<br/>පරිවර්තනය කරයි)</p>
                </div>
                 <div class="text-2xl font-bold mx-2">→</div>
                 <div class="p-3 border-2 border-dashed rounded-lg">
                    <p class="font-bold">RAM</p>
                    <p class="text-sm mt-2">Physical Address<br/><code class="text-primary">0x8C4B</code></p>
                </div>
            </div>
        </div>
      </div>

      <h3>මතක කළමනාකරණ ශිල්පීය ක්‍රම</h3>
      <ul>
        <li><b>පිටුකරණය (Paging):</b> ක්‍රියායනයක අතථ්‍ය ලිපින අවකාශය "පිටු" (pages) නමින් හැඳින්වෙන ස්ථාවර ප්‍රමාණයේ කුට්ටි වලට බෙදනු ලැබේ. භෞතික මතකය (RAM) එම ප්‍රමාණයේම "රාමු" (frames) වලට බෙදනු ලැබේ. මෙහෙයුම් පද්ධතිය, අවශ්‍ය පිටු නිදහස් රාමු වලට පූරණය (load) කරයි. මෙම ක්‍රියාවලිය, ක්‍රියායනයක කොටස් මතකයේ එක ළඟ නොවන ස්ථානවල ගබඩා කිරීමට ඉඩ සලසයි.</li>
        <li><b>ඛණ්ඩනය (Segmentation):</b> ක්‍රියායනයක්, එහි තාර්කික කොටස් (උදා: කේත කොටස, දත්ත කොටස, අට්ටි කොටස) අනුව විචල්‍ය ප්‍රමාණයේ "ඛණ්ඩ" (segments) වලට බෙදනු ලැබේ.</li>
      </ul>

      <h3>අතථ්‍ය මතකය (Virtual Memory)</h3>
      <p>අතථ්‍ය මතකය යනු, පරිගණකයේ භෞතික RAM ප්‍රමාණයට වඩා විශාල වැඩසටහන් ක්‍රියාත්මක කිරීමට ඉඩ සලසන තාක්ෂණයකි. මෙහිදී, දෘඪ තැටියේ කොටසක්, RAM එකේ දිගුවක් ලෙස භාවිතා කරයි. ක්‍රියායනයක දැනට අවශ්‍ය නොවන කොටස් (පිටු) දෘඪ තැටියට යවා (swap-out), අවශ්‍ය වූ විට නැවත RAM එකට ගෙන එනු ලැබේ (swap-in). මෙමගින් RAM එක කාර්යක්ෂමව භාවිතා කිරීමට හැකි වේ.</p>
      <ul>
        <li><b>පිටු වගුව (Page Table):</b> එක් එක් ක්‍රියායනය සඳහා, මෙහෙයුම් පද්ධතිය පිටු වගුවක් පවත්වාගෙන යයි. මෙම වගුව, ක්‍රියායනයේ අතථ්‍ය පිටු සහ ඒවා භෞතික මතකයේ ගබඩා කර ඇති රාමු අතර අනුරූපණය (mapping) සටහන් කර තබයි. MMU එක මගින් මෙම වගුව භාවිතා කර ලිපින පරිවර්තනය සිදු කරයි.</li>
      </ul>
    `,
    tags: ["memory management", "paging", "segmentation", "virtual memory", "mmu", "page table"],
    relatedQuestions: ["pq-2022-p2-10c", "pq-2019-p1-4", "pq-2019-p1-15", "pq-2020-p1-4", { id: "pq-2015-p1-6" }],
};
