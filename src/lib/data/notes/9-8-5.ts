
import type { Note } from "../../types";

export const note_9_8_5: Note = {
    id: "note-9-8-5",
    title: "while ලූපය (කොන්දේසි-පාලිත පුනරාවර්තනය)",
    type: "html",
    content: `
      <h2><code>while</code> ලූපය (Condition-controlled Loop)</h2>
      <p><code>while</code> ලූපය, ලබා දී ඇති කොන්දේසියක් සත්‍ය (True) ව පවතින තාක් කල්, ඊට අදාළ කේත කුට්ටිය නැවත නැවත ක්‍රියාත්මක කරයි. කොන්දේසිය ආරම්භයේදීම අසත්‍ය නම්, ලූපය කිසිසේත්ම ක්‍රියාත්මක නොවේ. ලූපය අනන්ත වාරයක් ක්‍රියාත්මක වීම වැළැක්වීමට (infinite loop), ලූපය තුළ කොන්දේසියට බලපාන විචල්‍යය යාවත්කාලීන කිරීම අත්‍යවශ්‍ය වේ.</p>
      
      <h4 class="mt-4">Syntax</h4>
      <pre><code>while condition:
    # block of code to be executed
    # ...
    # update the variable in the condition
</code></pre>

    <h3 class="mt-6 font-semibold">උදාහරණ</h3>

      <h4 class="mt-4">උදාහරණය 1: 1 සිට 5 දක්වා සංඛ්‍යා මුද්‍රණය කිරීම</h4>
      <Activity id="python-sandbox" code={\`# Initialize a counter variable
count = 1
print("Starting the while loop...")

# The loop will continue as long as 'count' is less than or equal to 5
while count <= 5:
    print(f"Current count is: {count}")
    # IMPORTANT: Update the counter to avoid an infinite loop
    count = count + 1 # or count += 1

print("Loop finished!")\`}/>

      <h4 class="mt-4">උදාහරණය 2: 10 සිට 0 දක්වා ආපසු ගණන් කිරීම</h4>
       <Activity id="python-sandbox" code={\`# Countdown from 10
countdown = 10
print("Starting countdown...")

while countdown >= 0:
    print(countdown)
    countdown = countdown - 1

print("Blast off!")\`}/>

    <h4 class="mt-4">උදාහරණය 3: පරිශීලක ආදානයක් මත පදනම් වූ ලූපය</h4>
    <p>පරිශීලකයා 'quit' ලෙස යතුරුලියනය කරන තුරු ඔවුන්ගෙන් ආදාන ලබා ගන්නා වැඩසටහනකි.</p>
       <Activity id="python-sandbox" code={\`# This example uses a simulated input. 
# In a real program, you would use input()
simulated_inputs = ["hello", "world", "test", "quit"]
input_index = 0

command = ""
while command != "quit":
    print("Enter a command (or 'quit' to exit):")
    
    # Simulate user input
    command = simulated_inputs[input_index]
    print(f"> {command}") # Show what the user "typed"
    input_index += 1

    if command != "quit":
        print(f"You entered: {command}")

print("Goodbye!")
\`}/>
    `,
    tags: ["control structures", "repetition", "looping", "while", "python"],
    relatedQuestions: [{id: "pq-2020-p1-40"}, {id: "pq-2011-p1-49"}, {id: "pq-2012-p1-49"}]
};

    

    