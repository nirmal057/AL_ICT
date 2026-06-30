
// CORRECT HIERARCHY - DO NOT FLATTEN OR CHANGE THIS STRUCTURE UNLESS EXPLICITLY TOLD TO.
// This structure is intentional. Sub-topics should be nested under their main competency.
import type { Topic } from "../types";

export const topics_structure: Topic[] = [
  {
    id: "topic-1",
    title: "තොරතුරු හා සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප",
    subTopics: [
      {
        id: "topic-1-1",
        title: "දත්ත සහ තොරතුරුවල මූලික තැනුම් ඒකක හා ඒවායේ ගතිලක්ෂණ පිළිබඳ විමර්ශනය කරයි",
        notes: [],
        subTopics: [
          {
            id: "topic-1-1-1",
            title: "දත්ත ජීවන චක්‍රය (Life Cycle of Data)",
            notes: [
              { id: "note-1-1-0" },
              { id: "note-1-1-4" },
              { id: "note-1-1-4-1" },
              { id: "note-1-1-4-2" },
              { id: "note-1-1-4-3" },
            ]
          },
          {
            id: "topic-1-1-2",
            title: "දත්ත සහ තොරතුරු (Data vs. Information)",
            notes: [
              { id: "note-1-1-1" }, 
              { id: "note-1-1-3" },
            ]
          },
          {
            id: "topic-1-1-3",
            title: "තොරතුරු පිළිබඳ අර්ථ දැක්වීම",
            notes: [{ id: "note-1-1-2" }]
          },
          {
            id: "topic-1-1-4",
            title: "වටිනා තොරතුරුවල ගතිලක්ෂණ",
            notes: [{ id: "note-1-1-5" }],
          },
          {
            id: "topic-1-1-5",
            title: "මහා දත්ත (Big Data) හැසිරවීමේ අවශ්‍යතාව",
            notes: [{ id: "note-1-1-6" }],
          }
        ]
      },
      {
        id: "topic-1-2",
        title: "තොරතුරු හා සන්නිවේදන තාක්ෂණයේ (ICT) භූමිකාව",
        notes: [
          { id: "note-1-2-1" },
          { id: "note-1-2-2" },
          { id: "note-1-2-3" },
          { id: "note-1-2-6" },
          { id: "note-1-2-4" },
          { id: "note-1-2-5" },
        ],
      },
      {
        id: "topic-1-3",
        title: "පරිගණක පද්ධතියක සංරචක",
        notes: [
          { id: "note-1-3-0" },
          { id: "note-1-3-1" },
          { id: "note-1-3-2" },
          { id: "note-1-3-3" },
          { id: "note-1-3-4" },
        ],
      },
       {
        id: "topic-1-5",
        title: "දත්ත සැකසීමේ ක්‍රියාකාරකම්",
        notes: [{id: "note-1-5-0"}],
        subTopics: [
            {
                id: "topic-1-5-1",
                title: "දත්ත රැස් කිරීම (Data Gathering)",
                notes: [
                    {id: "note-1-5-1"},
                    {id: "note-1-5-1-1"},
                    {id: "note-1-5-1-2"}
                ]
            },
            {
                id: "topic-1-5-2",
                title: "දත්ත වලංගු කිරීම (Data Validation)",
                notes: [
                    {id: "note-1-5-2"},
                    {id: "note-1-5-2-1"},
                    {id: "note-1-5-2-2"},
                ]
            },
            {
                id: "topic-1-5-3",
                title: "දත්ත සැකසීම (Data Processing)",
                notes: [
                    {id: "note-1-5-3"},
                    {id: "note-1-5-3-1"},
                    {id: "note-1-5-3-2"}
                ]
            },
            {
                id: "topic-1-5-4",
                title: "දත්ත ප්‍රතිදානය (Data Output)",
                notes: [
                    {id: "note-1-5-4"},
                    {id: "note-1-5-4-1"}
                ]
            },
             {
                id: "topic-1-5-5",
                title: "දත්ත ගබඩා කිරීම (Data Storage)",
                notes: [
                    {id: "note-1-5-5"},
                    {id: "note-1-5-5-1"}
                ]
            }
        ]
      },
      {
        id: "topic-1-6",
        title: "විවිධ වසම් තුළ ICT යෙදවුම්",
        notes: [{id: "note-1-6-0"}]
      },
      {
        id: "topic-1-7",
        title: "සමාජය කෙරෙහි ICT හි බලපෑම",
        notes: [
          { id: "note-1-7-1" },
          { id: "note-1-7-2" },
          { id: "note-1-7-3" },
        ],
      },
    ],
  },
  {
    id: "topic-2",
    title: "පරිගණක නිර්මිතය සහ පරිණාමය",
    subTopics: [
      {
        id: "topic-2-1",
        title: "පරිගණකයේ පරිණාමය",
        notes: [
          { id: "note-2-1-1" },
          { id: "note-2-1-2" },
          { id: "note-2-1-3" },
          { id: "note-2-1-4" },
          { id: "note-2-1-5" },
          { id: "note-2-1-6" },
        ],
      },
       {
        id: "topic-2-2",
        title: "වොන් නියුමාන් නිර්මිතය",
        notes: [
            { id: "note-2-2-0" },
            { id: "note-2-2-1" },
            { id: "note-2-2-2" },
            { id: "note-2-2-3" },
            { id: "note-2-2-4" },
            { id: "note-2-2-5" },
        ]
      },
      {
        id: "topic-2-4",
        title: "පරිගණක මතක පද්ධතිය",
        notes: [
            { id: "note-2-4-0" },
            { id: "note-2-4-1" },
            { id: "note-2-4-2" },
            { id: "note-2-4-3" },
            { id: "note-2-4-4" },
            { id: "note-2-4-5" },
            { id: "note-2-4-6" },
        ],
      },
    ],
  },
  {
    id: "topic-3",
    title: "පරිගණකයේ දත්ත නිරූපණය",
    subTopics: [
      {
        id: "topic-3-1",
        title: "සංඛ්‍යා නිරූපණය",
        notes: [
          { id: "note-3-1-1" },
          { id: "note-3-1-2" },
          { id: "note-3-1-3" },
        ],
      },
      {
        id: "topic-3-2",
        title: "අනුලක්ෂණ නිරූපණය",
        notes: [
            {id: "note-3-2-0"},
            {id: "note-3-2-1"},
            {id: "note-3-2-2"},
            {id: "note-3-2-3"},
            {id: "note-3-2-4"}
        ]
      },
      {
        id: "topic-3-3",
        title: "ද්විමය අංක ගණිතය සහ තාර්කික මෙහෙයුම්",
        notes: [
            {id: "note-3-3-0"},
            {id: "note-3-3-1"},
            {id: "note-3-3-2"},
            {id: "note-3-3-3"},
            {id: "note-3-3-4"},
            {id: "note-3-3-5"},
            {id: "note-3-3-6"}
        ]
      },
    ],
  },
  {
    id: "topic-4",
    title: "සංඛ්‍යාංක පරිපථ සහ තාර්කික ද්වාර",
    subTopics: [
      {
        id: "topic-4-1",
        title: "තාර්කික ද්වාර",
        notes: [{ id: "note-4-1-0" }],
      },
      {
        id: "topic-4-2",
        title: "බූලීය වීජ ගණිතය සහ ප්‍රකාශන සුළු කිරීම",
        notes: [],
        subTopics: [
            {
                id: "topic-4-2-1",
                title: "බූලීය වීජ ගණිත නීති",
                notes: [{id: "note-4-2-1"}]
            },
            {
                id: "topic-4-2-2",
                title: "කානෝ සිතියම් (Karnaugh Maps)",
                notes: [
                    { id: "note-4-2-2" },
                    { id: "note-4-2-3" },
                    { id: "note-4-2-4" },
                    { id: "note-4-2-5" },
                    { id: "note-4-2-6" },
                ]
            }
        ]
      },
      {
        id: "topic-4-3",
        title: "සරල අංකිත පරිපථ නිර්මාණය",
        notes: [{ id: "note-4-3-0" }],
      },
       {
        id: "topic-4-4",
        title: "ඒකාබද්ධ සහ අනුක්‍රමික පරිපථ",
        notes: [{ id: "note-4-4-0" }],
      }
    ],
  },
  {
    id: "topic-5",
    title: "පරිගණක මෙහෙයුම් පද්ධති",
    subTopics: [
      { 
        id: "topic-5-1", 
        title: "මෙහෙයුම් පද්ධතිය (OS) සහ එහි අවශ්‍යතාවය",
        subTopics: [
          { 
            id: "topic-5-1-1",
            title: "මෙහෙයුම් පද්ධතිය හැඳින්වීම",
            notes: [
              { id: "note-5-1-0" },
              { id: "note-5-1-1" },
              { id: "note-5-1-1-1" }
            ] 
          },
          { 
            id: "topic-5-1-2", 
            title: "මෙහෙයුම් පද්ධතිවල පරිණාමය", 
            notes: [
              { id: "note-5-1-2" },
              { id: "note-5-1-2-1" },
              { id: "note-5-1-2-2" },
              { id: "note-5-1-2-3" },
              { id: "note-5-1-2-4" },
              { id: "note-5-1-2-5" }
            ] 
          },
          { id: "topic-5-1-3", title: "මෙහෙයුම් පද්ධතියක ප්‍රධාන කාර්යයන්", notes: [{ id: "note-5-1-3" }] },
          { id: "topic-5-1-5", title: "මෙහෙයුම් පද්ධති වර්ගීකරණය", notes: [{ id: "note-5-1-5" }] },
        ]
      },
      { 
        id: "topic-5-2", 
        title: "ගොනු කළමනාකරණය", 
        notes: [{ id: "note-5-2-0" }],
        subTopics: [
          { id: "topic-5-2-1", title: "ගබඩා වෙන් කිරීමේ ක්‍රම", notes: [{ id: "note-5-2-1" }]},
        ]
      },
      {
        id: "topic-5-3",
        title: "ක්‍රියායන කළමනාකරණය",
        notes: [{ id: "note-5-3-0" }],
         subTopics: [
          { id: "topic-5-3-1", title: "ක්‍රියායන අවස්ථා සහ සංක්‍රාන්ති", notes: [{ id: "note-5-3-1" }]},
          { id: "topic-5-3-2", title: "ක්‍රියායන පාලන ඛණ්ඩකය සහ සන්දර්භ ස්විචය", notes: [{ id: "note-5-3-2" }]},
        ]
      },
      {
        id: "topic-5-4",
        title: "මතක කළමනාකරණය",
        notes: [{ id: "note-5-4-0" }],
      },
    ],
  },
  {
    id: "topic-6",
    title: "දත්ත සන්නිවේදනය සහ ජාලකරණය",
    subTopics: [
      {
          id: "topic-6-1",
          title: "දත්ත සන්නිවේදන මූලධර්ම",
          notes: [{id: "note-6-1-1"}]
      },
      { id: "topic-6-2", title: "සම්ප්‍රේෂණ මාධ්‍ය", notes: [{ id: "note-6-2-0" }] },
      { id: "topic-6-3", title: "අංකිත දත්ත ආකේතනය", notes: [{ id: "note-6-3-0" }] },
      { id: "topic-6-4", title: "PSTN භාවිතය", notes: [{ id: "note-6-4-0" }] },
      { id: "topic-6-5", title: "ජාල ස්ථලකය", notes: [{ id: "note-6-5-0" }] },
      { id: "topic-6-6", title: "මාධ්‍ය ප්‍රවේශ පාලනය (MAC)", notes: [{ id: "note-6-6-0" }] },
      { 
        id: "topic-6-7", 
        title: "ජාල අන්තර්සම්බන්ධ කිරීම", 
        notes: [{ id: "note-6-7-0" }],
        subTopics: [
          { id: "topic-6-7-1", title: "උපජාලකරණය", notes: [{ id: "note-6-7-1" }] }
        ]
      },
      { id: "topic-6-8", title: "ප්‍රවාහන නියමාවලි", notes: [{ id: "note-6-8-0" }] },
      { id: "topic-6-9", title: "යෙදුම් ස්තරය", notes: [{ id: "note-6-9-0" }] },
      { id: "topic-6-10", title: "ජාල නිර්මිත යොමු ආකෘති", notes: [{ id: "note-6-10-0" }] },
      { id: "topic-6-11", title: "ජාල ආරක්ෂණය", notes: [{ id: "note-6-11-0" }] },
      { id: "topic-6-12", title: "ISP සහ ගෘහස්ථ ජාල", notes: [{ id: "note-6-12-0" }] },
    ],
  },
  {
    id: "topic-7",
    title: "පද්ධති විශ්ලේෂණය සහ නිර්මාණය (SAD)",
    subTopics: [
      { id: "topic-7-1", title: "පද්ධති සංකල්ප", notes: [{ id: "note-7-1-0" }] },
      { id: "topic-7-2", title: "විවිධ වර්ගයේ තොරතුරු පද්ධති", notes: [{ id: "note-7-2-0" }] },
      { id: "topic-7-3", title: "SDLC ආකෘති", notes: [{ id: "note-7-3-0" }] },
      { id: "topic-7-4", title: "ව්‍යුහගත පද්ධති විශ්ලේෂණය සහ නිර්මාණය", notes: [{ id: "note-7-4-0" }] },
      { id: "topic-7-5", title: "ශක්‍යතා අධ්‍යයනය", notes: [{ id: "note-7-5-0" }] },
      { id: "topic-7-6", title: "පද්ධති විශ්ලේෂණය", notes: [{ id: "note-7-6-0" }] },
      { id: "topic-7-7", title: "පද්ධති සැලසුම් කිරීම", notes: [{ id: "note-7-7-0" }] },
      { id: "topic-7-8", title: "පද්ධති පරීක්ෂාව", notes: [{ id: "note-7-8-0" }] },
      { id: "topic-7-9", title: "පද්ධතිය ක්‍රියාවට නැංවීම", notes: [{ id: "note-7-9-0" }] },
    ],
  },
  {
    id: "topic-8",
    title: "දත්ත සමුදා කළමනාකරණ පද්ධති (DBMS)",
    subTopics: [
      { id: "topic-8-1", title: "දත්ත සමුදා මූලධර්ම", notes: [{ id: "note-8-1-0" }] },
      { id: "topic-8-2", title: "සංකල්පීය Schema සැලසුම (ER)", notes: [{ id: "note-8-2-0" }] },
      { id: "topic-8-3", title: "තාර්කික Schema සැලසුම", notes: [{ id: "note-8-3-0" }] },
      { id: "topic-8-4", title: "Schema පරිවර්තනය", notes: [{ id: "note-8-4-0" }] },
      { id: "topic-8-6", title: "SQL සහ දත්ත සමුදා සංරචක", notes: [{ id: "note-8-6-0" }] },
      { id: "topic-8-7", title: "දත්ත සමුදා ප්‍රමතකරණය", notes: [{ id: "note-8-7-0" }] },
    ],
  },
  {
    id: "topic-9",
    title: "ක්‍රමලේඛනය",
    subTopics: [
      {
        id: "topic-9-1",
        title: "ගැටළු විසඳීමේ ක්‍රියාවලිය",
        notes: [
          { id: "note-9-1-0" },
          { id: "note-9-1-1" },
          { id: "note-9-1-2" },
          { id: "note-9-1-3" },
          { id: "note-9-1-4" },
          { id: "note-9-1-5" },
          { id: "note-9-1-6" },
        ]
      },
      {
        id: "topic-9-2",
        title: "මුදුන් සිට පහළට සැලසුම් කිරීම",
        notes: [
            { id: "note-9-2-1" },
            { id: "note-9-2-2" },
            { id: "note-9-2-3" },
        ]
      },
      { 
        id: "topic-9-3", 
        title: "ඇල්ගොරිතමික ප්‍රවේශය", 
        notes: [
          { id: "note-9-3-0" },
          { id: "note-9-3-1" },
          { id: "note-9-3-2" }
        ] 
      },
      { id: "topic-9-4", title: "ක්‍රමලේඛන සුසමාදර්ශ", notes: [{ id: "note-9-4-0" }] },
      { id: "topic-9-5", title: "ක්‍රමලේඛන පරිවර්තනය", notes: [{ id: "note-9-5-0" }] },
      { id: "topic-9-6", title: "සමෝධානික සංවර්ධන පරිසරය (IDE)", notes: [{ id: "note-9-6-0" }] },
      { id: "topic-9-7", title: "Python මූලිකාංග", notes: [{ id: "note-9-7-0" }] },
      {
        id: "topic-9-8",
        title: "පාලන ව්‍යුහ",
        notes: [{ id: "note-9-8-0" }],
        subTopics: [
           { id: "topic-9-8-1", title: "අනුක්‍රමය සහ ඉන්ඩෙන්ටේෂන්", notes: [{ id: "note-9-8-1" }] },
          {
            id: "topic-9-8-2",
            title: "තේරීම් ව්‍යුහ (Selection)",
            notes: [
                {id: "note-9-8-2"},
                {id: "note-9-8-3"},
                {id: "note-9-8-4"},
            ]
          },
          {
            id: "topic-9-8-3",
            title: "පුනරාවර්තන ව්‍යුහ (Repetition)",
            notes: [
                 {id: "note-9-8-5"},
                 {id: "note-9-8-6"},
            ]
          },
          {
            id: "topic-9-8-4",
            title: "නීඩිත ව්‍යුහ සහ ලූප පාලනය",
            notes: [{ id: "note-9-8-7" }],
          },
        ],
      },
      { id: "topic-9-9", title: "උප-ක්‍රමලේඛ (ශ්‍රිත)", notes: [{ id: "note-9-9-0" }] },
      { id: "topic-9-10", title: "දත්ත ව්‍යුහ", notes: [{ id: "note-9-10-0" }] },
      { id: "topic-9-11", title: "ගොනු හැසිරවීම", notes: [{ id: "note-9-11-0" }] },
      { id: "topic-9-12", title: "දත්ත සමුදා කළමනාකරණය", notes: [{id: "note-9-12-0"}] },
      { id: "topic-9-13", title: "සෙවුම් සහ තේරීම් ඇල්ගොරිතම", notes: [{ id: "note-9-13-0" }] }
    ],
  },
  {
    id: "topic-10",
    title: "වෙබ් සංවර්ධනය",
    subTopics: [
        { id: "topic-10-3", title: "HTML Tags", notes: [{ id: "note-10-3-0" }] },
        { id: "topic-10-4", title: "Linked Web Pages", notes: [{ id: "note-10-4-0" }] },
        { id: "topic-10-5", title: "Style Sheets", notes: [{ id: "note-10-5-0" }] },
        { id: "topic-10-7", title: "Dynamic Web Pages", notes: [{ id: "note-10-7-0" }] },
    ]
  },
  {
    id: "topic-11",
    title: "Internet of Things (IoT)",
    subTopics: [
      { id: "topic-11-2", title: "IoT සහ සරල යෙදුම්", notes: [{ id: "note-11-2-0" }] },
    ]
  },
  {
    id: "topic-12",
    title: "ICT in Business",
    subTopics: [
      { id: "topic-12-1", title: "වෙළඳ ලෝකය තුළ ICT", notes: [{ id: "note-12-1-0" }] },
    ]
  },
  {
    id: "topic-13",
    title: "New Trends and Future Directions of ICT",
    subTopics: [
        { id: "topic-13-1", title: "නව පරිගණන නැඹුරුතා", notes: [{ id: "note-13-1-0" }] },
        { id: "topic-13-2", title: "නියෝජිත තාක්ෂණය", notes: [{ id: "note-13-2-0" }] },
        { id: "topic-13-3", title: "නව පරිගණන මාදිලි", notes: [{ id: "note-13-3-0" }] },
    ]
  }
];
    
