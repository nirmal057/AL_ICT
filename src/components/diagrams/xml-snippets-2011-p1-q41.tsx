
"use client";

import { CodeBlock } from "../ui/code-block";

const snippets = [
    { id: "A", code: `<?xml version = "1.0"?>\n<country></country>` },
    { id: "B", code: `<?xml version = "1.0"?>\n<country name="Sri Lanka"></country>` },
    { id: "C", code: `<?xml version = "1.0"?>\n<name>Sri Lanka</name>\n<country></country>` },
    { id: "D", code: `<?xml version = "1.0"?>\n<name><country>Sri Lanka</country></name>` }
];

export const XmlSnippets2011P1Q41 = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose">
        {snippets.map(snippet => (
            <div key={snippet.id} className="border rounded-lg">
                <div className="px-4 py-1.5 border-b bg-muted/50 rounded-t-lg">
                    <span className="font-bold">Snippet {snippet.id}</span>
                </div>
                <CodeBlock language="xml" code={snippet.code} />
            </div>
        ))}
    </div>
);
