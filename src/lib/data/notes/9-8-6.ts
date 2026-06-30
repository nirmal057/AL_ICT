
import type { Note } from "../../types";

export const note_9_8_6: Note = {
    id: "note-9-8-6",
    title: "for ලූපය (ගණන-පාලිත පුනරාවර්තනය)",
    type: "html",
    content: `
      <h2><code>for</code> ලූපය (Count-controlled Loop)</h2>
      <p><code>for</code> ලූපය, අනුක්‍රමයක් (sequence) - එනම් ලැයිස්තුවක් (list), ටියුපලයක් (tuple), ශබ්දකෝෂයක් (dictionary), කට්ටලයක් (set), හෝ තන්තුවක් (string) - හරහා පුනරාවර්තනය වීමට (iterate) භාවිතා කරයි. මෙය බොහෝ විට "නිශ්චිත පුනරාවර්තනයක්" (definite iteration) ලෙස හැඳින්වේ, මන්ද ලූපය ක්‍රියාත්මක වන වාර ගණන අනුක්‍රමයේ දිග මත තීරණය වන බැවිනි.</p>

      <h4 class="mt-4">Syntax</h4>
      <pre class="p-3 rounded-md mt-2"><code>for item in sequence:
    # block of code to be executed for each item
</code></pre>
      
      <h3 class="mt-6 font-semibold">උදාහරණ</h3>

      <h4 class="mt-4">උදාහරණය 1: ලැයිස්තුවක් හරහා පුනරාවර්තනය</h4>
      <p>මෙම ලූපය 'fruits' ලැයිස්තුවේ ඇති සෑම අයිතමයක් සඳහාම වරක් ක්‍රියාත්මක වේ. එක් එක් වාරයේදී, <code>fruit</code> විචල්‍යයට ලැයිස්තුවේ ඊළඟ අයිතමයේ අගය ලැබේ.</p>
      <Activity id="python-sandbox" code={\`fruits = ["apple", "banana", "cherry"]

print("List of fruits:")
for fruit in fruits:
    print(f"- {fruit}")\`}/>

      <h4 class="mt-4">උදාහරණය 2: <code>range()</code> ශ්‍රිතය භාවිතය</h4>
      <p>නිශ්චිත වාර ගණනක් ලූපය ක්‍රියාත්මක කිරීමට <code>range()</code> ශ්‍රිතය බහුලව භාවිතා වේ. <code>range(5)</code> මගින් 0 සිට 4 දක්වා (5 ඇතුළත් නොවේ) සංඛ්‍යා අනුක්‍රමයක් ජනනය කරයි.</p>
      <Activity id="python-sandbox" code={\`# Prints numbers from 0 to 4
print("Numbers from 0 to 4:")
for i in range(5):
    print(i)

# You can also specify a start, stop, and step value
# range(start, stop, step)
print("\\nEven numbers from 2 to 10:")
for i in range(2, 11, 2):
    print(i)
\`}/>

    <h4 class="mt-4">උදාහරණය 3: String එකක් හරහා පුනරාවර්තනය</h4>
    <p>String එකක් යනු අක්ෂර අනුක්‍රමයක් බැවින්, for ලූපයක් භාවිතයෙන් එහි එක් එක් අකුරට ප්‍රවේශ විය හැක.</p>
    <Activity id="python-sandbox" code={\`message = "ICT"

for character in message:
    print(f"Letter: {character}")
\`}/>
    `,
    tags: ["control structures", "repetition", "looping", "for", "python", "range"],
    relatedQuestions: [{id:"pq-2012-p1-47"}],
};

    