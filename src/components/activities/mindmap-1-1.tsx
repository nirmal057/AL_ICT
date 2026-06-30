
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MermaidDiagram } from "../ui/mermaid-diagram";

const mindmapDefinition = `
mindmap
  root((දත්ත සහ තොරතුරු))
    (දත්ත යනු කුමක්ද?)
      ::icon(fa fa-database)
      අමු කරුණු
      සංඛ්‍යා
      සංකේත
      ශබ්ද
      දෘශ්‍ය
    (දත්ත vs තොරතුරු)
      ::icon(fa fa-handshake)
      දත්ත (අමු කරුණු)
      --> ක්‍රියාවලිය
      --> තොරතුරු (අර්ථවත්)
      දත්ත වර්ග
        ගුණාත්මක (Qualitative)
        ප්‍රමාණාත්මක (Quantitative)
          විවික්ත (Discrete)
          සන්තතික (Continuous)
    (දත්ත ජීවන චක්‍රය)
      ::icon(fa fa-git-branch)
      දත්ත නිර්මාණය/එකතු කිරීම
        සෘජු ආදානය
        ස්වයංක්‍රීය ජනනය
      දත්ත කළමනාකරණය
        ගබඩා කිරීම
        සැකසීම
        භාවිතය
        ලේඛනාගාරගත කිරීම
      දත්ත ඉවත් කිරීම
        ආරක්ෂාව
        පිරිවැය අඩු කිරීම
    (වටිනා තොරතුරු)
      ::icon(fa fa-box)
      අදාලත්වය
      කාලීන බව
      නිරවද්‍යතාව
      පූර්ණත්වය
      තේරුම් ගැනීමේ හැකියාව
      අවිනිශ්චිතතාව අඩු වීම
    (මහා දත්ත - Big Data)
      ::icon(fa fa-bolt)
      පරිමාව (Volume)
      වේගය (Velocity)
      විවිධත්වය (Variety)
      සත්‍යතාව (Veracity)
      වටිනාකම (Value)
`;

export const Mindmap1_1 = () => {
  return (
    <Card className="not-prose my-6 w-full">
        <CardHeader>
            <CardTitle>Mindmap: දත්ත සහ තොරතුරු මූලික සංකල්ප</CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
            <div className="flex justify-center overflow-x-auto py-8">
                 <MermaidDiagram chart={mindmapDefinition} />
            </div>
        </CardContent>
    </Card>
  );
};
