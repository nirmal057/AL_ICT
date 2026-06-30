
import type { Note } from "../../types";

export const note_2_1_1: Note = {
    id: "note-2-1-1",
    title: "මුල් කාලීන ගණනය කිරීමේ උපාංග",
    type: "html",
    content: `
      <h2>මුල් කාලීන ගණනය කිරීමේ උපාංග (Early Calculating Devices)</h2>
      <p>ඉලෙක්ට්‍රොනික පරිගණකය බිහිවීමට වසර දහස් ගණනකට පෙර සිටම, මිනිසා ගණනය කිරීම් පහසු කර ගැනීම සඳහා විවිධ උපකරණ නිර්මාණය කළේය. මෙම මුල් කාලීන උපාංග, නූතන පරිගණකයේ සංකල්පීය පදනම දැමූ පුරෝගාමීන් විය.</p>

      <h3>පෙර-යාන්ත්‍රික යුගය (Pre-Mechanical Era)</h3>
      <div class="p-4 border-l-4 my-4 bg-muted">
        <h4 class="font-bold">ඇබකසය (Abacus) - ක්‍රි.පූ. 2400 පමණ</h4>
        <p>ලොව පළමු ගණක යන්ත්‍රය ලෙස සැලකේ. පබළු හෝ ගල් කැට කම්බි මත එහා මෙහා කිරීමෙන් එකතු කිරීම, අඩු කිරීම, ගුණ කිරීම, සහ බෙදීම වැනි මූලික ගණිත කර්ම සිදු කිරීමට මෙය භාවිතා කරන ලදී. එය අදටත් ලෝකයේ සමහර ප්‍රදේශවල භාවිතා වේ.</p>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/a/af/Abacus_%28PSF%29.png" alt="Abacus" width="300" height="200" class="mt-2 rounded-md border" data-ai-hint="ancient abacus" />
      </div>

      <h3>යාන්ත්‍රික යුගය (Mechanical Era: 1450-1840)</h3>
      <p>මෙම යුගයේදී, දත් රෝද (gears) සහ ලීවර (levers) වැනි යාන්ත්‍රික කොටස් භාවිතයෙන් ගණනය කිරීම් සිදු කරන උපකරණ නිර්මාණය විය.</p>
      <div class="p-4 border-l-4 my-4 bg-muted">
        <h4 class="font-bold">පැස්කලයින් (Pascaline) - 1642</h4>
        <p>ප්‍රංශ ගණිතඥයෙකු වූ බ්ලේස් පැස්කල් (Blaise Pascal) විසින් නිර්මාණය කරන ලදී. මෙය එකතු කිරීම සහ අඩු කිරීම සිදු කළ හැකි පළමු යාන්ත්‍රික ගණක යන්ත්‍ර වලින් එකකි.</p>
         <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Pascaline-CnAM_823-1-IMG_1506-black.jpg" alt="Pascaline" width="300" height="200" class="mt-2 rounded-md border" data-ai-hint="pascaline calculator" />
      </div>
      <div class="p-4 border-l-4 my-4 bg-muted">
        <h4 class="font-bold">Stepped Reckoner - 1694</h4>
        <p>ජර්මානු ගණිතඥ ගොට්ෆ්‍රයිඩ් ලයිබ්නිස් (Gottfried Leibniz) විසින් නිර්මාණය කරන ලද අතර, එකතු කිරීම, අඩු කිරීම, ගුණ කිරීම, සහ බෙදීම යන ගණිත කර්ම හතරම සිදු කිරීමට හැකියාව තිබුණි.</p>
      </div>
       <div class="p-4 border-l-4 my-4 bg-muted">
        <h4 class="font-bold">චාල්ස් බැබේජ් සහ ඔහුගේ යන්ත්‍ර</h4>
        <p>"පරිගණකයේ පියා" ලෙස හඳුන්වන චාල්ස් බැබේජ්, නූතන පරිගණකයේ මූලික සංකල්ප අඩංගු යන්ත්‍ර දෙකක් සැලසුම් කළේය.</p>
        <ul class="list-disc pl-6 mt-2">
            <li><b>Difference Engine (1822):</b> බහුපද ශ්‍රිත (polynomial functions) වගුගත කිරීම සඳහා නිර්මාණය කරන ලද ස්වයංක්‍රීය යාන්ත්‍රික ගණක යන්ත්‍රයකි.</li>
            <li><b>Analytical Engine (1837):</b> මෙය ලොව පළමු සාමාන්‍ය කාර්ය (general-purpose) පරිගණකය සඳහා වූ සැලසුමයි. එයට ආදාන (Input), සැකසීම (Processing - the 'Mill'), මතකය (Memory - the 'Store'), සහ ප්‍රතිදාන (Output) යන නූතන පරිගණකයක සියලුම මූලික කොටස් අඩංගු විය. එය ක්‍රමලේඛනය කිරීම සඳහා සිදුරුපත් (punch cards) භාවිතා කිරීමට යෝජනා විය. මෙම සංකල්ප සඳහා සහාය දුන් ඒඩා ලව්ලේස් (Ada Lovelace) ලොව පළමු පරිගණක ක්‍රමලේඛකයා ලෙස සැලකේ.</li>
        </ul>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Charles_Babbage_-_1860.jpg" alt="Babbage's Engine" width="300" height="200" class="mt-2 rounded-md border" data-ai-hint="analytical engine" />
      </div>

      <h3>විද්‍යුත්-යාන්ත්‍රික යුගය (Electro-Mechanical Era: 1840–1940)</h3>
      <p>මෙම යුගයේදී, විද්‍යුත් ස්විච (relays) වැනි විද්‍යුත් සංරචක සහ යාන්ත්‍රික කොටස් දෙකම භාවිතා කරමින් ගණනය කිරීම් සිදු කරන ලදී.</p>
        <div class="p-4 border-l-4 my-4 bg-muted">
        <h4 class="font-bold">Mark I - 1944</h4>
        <p>හාවර්ඩ් විශ්ව විද්‍යාලයේ හොවාර්ඩ් ඒකන් (Howard Aiken) විසින් IBM සමාගමේ සහාය ඇතිව නිර්මාණය කරන ලදී. මෙය විශාල විද්‍යුත්-යාන්ත්‍රික පරිගණකයක් වූ අතර, සංකීර්ණ ගණනය කිරීම් ස්වයංක්‍රීයව සිදු කිරීමට භාවිතා කරන ලදී.</p>
      </div>

      <h3 class="mt-6">සාරාංශ වගුව</h3>
      <div class="overflow-x-auto">
        <table class="w-full my-4 border">
          <thead>
            <tr class="bg-muted">
              <th class="p-2 border">උපාංගය</th>
              <th class="p-2 border">නිර්මාපකයා</th>
              <th class="p-2 border">වර්ෂය (ආසන්න)</th>
              <th class="p-2 border">ප්‍රධාන කාර්යය</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border">ඇබකසය</td>
              <td class="p-2 border">නොදනී (පුරාණ)</td>
              <td class="p-2 border">ක්‍රි.පූ. 2400</td>
              <td class="p-2 border">මූලික ගණිත කර්ම</td>
            </tr>
            <tr>
              <td class="p-2 border">පැස්කලයින්</td>
              <td class="p-2 border">බ්ලේස් පැස්කල්</td>
              <td class="p-2 border">1642</td>
              <td class="p-2 border">එකතු කිරීම සහ අඩු කිරීම</td>
            </tr>
            <tr>
              <td class="p-2 border">Difference Engine</td>
              <td class="p-2 border">චාල්ස් බැබේජ්</td>
              <td class="p-2 border">1822</td>
              <td class="p-2 border">බහුපද වගු ගණනය</td>
            </tr>
             <tr>
              <td class="p-2 border">Analytical Engine</td>
              <td class="p-2 border">චාල්ස් බැබේජ්</td>
              <td class="p-2 border">1837</td>
              <td class="p-2 border">පළමු සාමාන්‍ය-කාර්ය පරිගණක සංකල්පය</td>
            </tr>
            <tr>
              <td class="p-2 border">Mark I</td>
              <td class="p-2 border">හොවාර්ඩ් ඒකන්</td>
              <td class="p-2 border">1944</td>
              <td class="p-2 border">විද්‍යුත්-යාන්ත්‍රික ගණනය කිරීම්</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    tags: ["history", "evolution", "abacus", "pascaline", "babbage"],
    relatedQuestions: [{ id: "pq-2011-p1-1" }, {id: "pq-2012-p1-1"}, {id: "pq-2013-p1-7"}]
};

    

    
