
import type { Note } from "../../types";

export const note_9_13_0: Note = {
    id: "note-9-13-0",
    title: "සෙවුම් සහ තේරීම් ඇල්ගොරිතම",
    type: "html",
    content: `
      <h2>සෙවුම් සහ තේරීම් ඇල්ගොරිතම (Searching and Sorting Algorithms)</h2>
      <p>සෙවීම සහ තේරීම යනු පරිගණක විද්‍යාවේදී දත්ත හැසිරවීමේ මූලික සහ බහුලව භාවිතා වන ඇල්ගොරිතම දෙකකි. මෙමගින් දත්ත සමූහයක් තුළින් නිශ්චිත අගයක් සොයා ගැනීම හෝ දත්ත නිශ්චිත අනුපිළිවෙලකට සැකසීම සිදු කරයි.</p>

      <h3>සෙවුම් ශිල්පීය ක්‍රම (Searching Techniques)</h3>
      <h4>අනුක්‍රමික සෙවුම (Sequential Search / Linear Search)</h4>
      <p>මෙය සරලම සෙවුම් ක්‍රමයයි. මෙහිදී, දත්ත සමූහයේ (උදා: ලැයිස්තුවක) පළමු අංගයේ සිට අනුපිළිවෙලින් එකින් එක, අප සොයන අගය හමුවන තුරු පරීක්ෂා කරනු ලැබේ. අගය හමු වූ විට සෙවීම නතර වේ. අගය දත්ත සමූහයේ නොමැති නම්, අවසානය දක්වාම පරීක්ෂා කරනු ලැබේ.</p>
      <ul>
        <li><b>වාසි:</b> ක්‍රියාත්මක කිරීමට පහසුය. දත්ත වර්ග කර (sorted) තිබීම අවශ්‍ය නොවේ.</li>
        <li><b>අවාසි:</b> විශාල දත්ත සමූහ සඳහා ඉතා මන්දගාමී වේ.</li>
      </ul>
      <Activity id="python-sandbox" code={\`def sequential_search(item_list, search_item):
    """
    Performs a sequential search on a list.
    Returns True if the item is found, False otherwise.
    """
    found = False
    position = 0
    while position < len(item_list) and not found:
        if item_list[position] == search_item:
            found = True
        else:
            position = position + 1
    return found

# Example Usage
my_numbers = [1, 5, 8, 12, 19, 25, 30]
print("List:", my_numbers)
print("Is 12 in the list?", sequential_search(my_numbers, 12))
print("Is 7 in the list?", sequential_search(my_numbers, 7))
\`} />

      <h3>තේරීම් ශිල්පීය ක්‍රම (Sorting Techniques)</h3>
      <h4>බුබුළු තේරීම (Bubble Sort)</h4>
      <p>මෙය සරල තේරීම් ඇල්ගොරිතමයකි. මෙහිදී, දත්ත ලැයිස්තුව හරහා නැවත නැවතත් ගමන් කරමින්, යාබද මූලද්‍රව්‍ය දෙකක් සංසන්දනය කර, ඒවා වැරදි අනුපිළිවෙලක ඇත්නම් මාරු කරනු ලැබේ. මෙම ක්‍රියාවලිය කිසිදු මාරු කිරීමක් සිදු නොවන තෙක් නැවත නැවත සිදු වේ. සැහැල්ලු මූලද්‍රව්‍ය "බුබුලු" මෙන් ඉහළට එන නිසා මෙම නම ලැබී ඇත.</p>
      <ul>
        <li><b>වාසි:</b> තේරුම් ගැනීමට සහ ක්‍රියාත්මක කිරීමට පහසුය.</li>
        <li><b>අවාසි:</b> විශාල දත්ත සමූහ සඳහා ඉතා අකාර්යක්ෂම සහ මන්දගාමී වේ.</li>
      </ul>
      <Activity id="python-sandbox" code={\`def bubble_sort(arr):
    n = len(arr)
    # Traverse through all array elements
    for i in range(n):
        # Last i elements are already in place, so we don't need to check them
        for j in range(0, n-i-1):
            # Traverse the array from 0 to n-i-1
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

# Example usage:
my_list = [64, 34, 25, 12, 22, 11, 90]
print("Unsorted list:", my_list)

bubble_sort(my_list)

print("Sorted list is:", my_list)\`} />
    `,
    tags: ["searching", "sorting", "sequential search", "bubble sort", "algorithms"],
    relatedQuestions: [{id: "pq-2011-p1-48"}, {id: "pq-2012-p1-48"}]
};

    

    