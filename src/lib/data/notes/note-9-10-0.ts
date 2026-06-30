
import type { Note } from "../../types";

export const note_9_10_0: Note = {
    id: "note-9-10-0",
    title: "දත්ත ව්‍යුහ",
    type: "html",
    content: `
      <h2>දත්ත ව්‍යුහ (Data Structures)</h2>
      <p>දත්ත ව්‍යුහයක් යනු දත්ත කාර්යක්ෂමව ගබඩා කිරීමට, සංවිධානය කිරීමට සහ කළමනාකරණය කිරීමට භාවිතා කරන ක්‍රමයකි. Python වල බහුලව භාවිතා වන මූලික දත්ත ව්‍යුහ කිහිපයක් ඇත.</p>

      <h3>Strings (තන්තු)</h3>
      <p>අක්ෂර අනුක්‍රමයකි. Python වල තනි උද්ධෘත (' ') හෝ ද්විත්ව උද්ධෘත (" ") භාවිතයෙන් තන්තු නිර්මාණය කරයි. මේවා <b>වෙනස් කළ නොහැකි (immutable)</b> දත්ත වර්ගයකි. එනම්, තන්තුවක් නිර්මාණය කළ පසු, එහි එක් අක්ෂරයක් දර්ශකය (index) මගින් වෙනස් කළ නොහැක. (උදා: <code>my_string[0] = 'H'</code> දෝෂයක් ඇති කරයි).</p>
      <Activity id="python-sandbox" code={\`my_string = "Hello, ICT!"
print(my_string)
# Accessing a single character
print("First character:", my_string[0]) 
# Slicing the string
print("Slice:", my_string[7:10])\`} />

      <h3>Lists (ලැයිස්තු)</h3>
      <p><b>වෙනස් කළ හැකි (mutable)</b>, ඇණවුම් කළ (ordered) අයිතම එකතුවකි. හතරැස් වරහන් ([ ]) භාවිතයෙන් ලැයිස්තු නිර්මාණය කෙරේ. විවිධ දත්ත වර්ගවල අයිතම අඩංගු විය හැක. නිර්මාණය කළ පසු අංග එකතු කිරීමට, ඉවත් කිරීමට, සහ වෙනස් කිරීමට හැකිය.</p>
      <Activity id="python-sandbox" code={\`# Creating a list
my_list = [10, "Python", 3.14, True]
print("Original list:", my_list)

# Adding an item to the list
my_list.append("new item")
print("After append:", my_list)

# Changing an item
my_list[1] = "Java"
print("After change:", my_list)\`} />

      <h3>Tuples (ටියුපල්)</h3>
      <p><b>වෙනස් කළ නොහැකි (immutable)</b>, ඇණවුම් කළ (ordered) අයිතම එකතුවකි. සාමාන්‍ය වරහන් (( )) භාවිතයෙන් නිර්මාණය කෙරේ. ලැයිස්තුවක් මෙන් වුවද, නිර්මාණය කළ පසු එහි අංග වෙනස් කළ නොහැක. මෙය දත්තවල ආරක්ෂාව සහතික කරයි.</p>
      <Activity id="python-sandbox" code={\`# Creating a tuple
my_tuple = (10, "Python", 3.14, True)
print(my_tuple)

# Accessing an item
print("Second item:", my_tuple[1])

# The following line will cause an error because tuples are immutable.
# Try uncommenting it to see!
# my_tuple[1] = "Java"\`} />

      <h3>Dictionaries (ශබ්දකෝෂ)</h3>
      <p>යතුරු-අගය (key-value) යුගල වලින් සමන්විත, <b>වෙනස් කළ හැකි (mutable)</b>, ඇණවුම් නොකළ (unordered - Python 3.7+ වල ඇණවුම් කර ඇත) එකතුවකි. සෑම යතුරක්ම අනන්‍ය විය යුතුය. වක් වරහන් ({ }) භාවිතයෙන් නිර්මාණය කෙරේ.</p>
      <Activity id="python-sandbox" code={\`# Creating a dictionary
my_dict = {"name": "Nimal", "age": 25, "city": "Kandy"}
print("Original dictionary:", my_dict)

# Accessing a value by its key
print("Name:", my_dict["name"])

# Adding a new key-value pair
my_dict["subject"] = "ICT"
print("After adding subject:", my_dict)\`} />
    `,
    tags: ["data structures", "python", "lists", "tuples", "dictionaries", "strings"],
    relatedQuestions: ["pq-2022-p1-40", "pq-2023-p1-42", "pq-2023-p1-44", "pq-2020-p1-36", "pq-2020-p1-37", {id: "pq-2012-p1-46"}, {id: "pq-2013-p1-10"}, {id: "pq-2013-p1-12"}, {id: "pq-2013-p1-15"}],
};

    
