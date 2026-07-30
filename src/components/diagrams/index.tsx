


import { VonNeumannArchitectureDiagram } from '../activities/von-neumann-simulator';
import { ControlFlowStructuresDiagram } from './control-flow-structures';
import { PastPaperDiagram } from './past-paper-diagrams';
import { BigDataVisualization } from './big-data-visualization';
import { LogicGate2011P1Q28 } from './logic-gate-2011-p1-q28';
import { ListRendering2011P1Q38 } from './list-rendering-2011-p1-q38';
import { XmlSnippets2011P1Q41 } from './xml-snippets-2011-p1-q41';
import { Flowchart2012P1Q43 } from './flowchart-2012-p1-q43';
import { KMapLayout2013P1Q9 } from './k-map-layout-2013-p1-q9';

// This is a mapping from string identifiers to React components.
// It's used in NoteView.tsx to dynamically render components
// based on <Component id="..." /> tags in the note content.

export const componentMap: Record<string, React.ComponentType<any>> = {
    'diagram-von-neumann-architecture': VonNeumannArchitectureDiagram,
    'diagram-control-flow-structures': ControlFlowStructuresDiagram,
    'diagram-big-data-visualization': BigDataVisualization,
    '2011-p1-q28-logic-circuit': LogicGate2011P1Q28,
    '2011-p1-q38-options': ListRendering2011P1Q38,
    '2011-p1-q41-xml-snippets': XmlSnippets2011P1Q41,
    '2012-p1-q43-1': Flowchart2012P1Q43,
    '2013-p1-q9': KMapLayout2013P1Q9,
};

// Add specific past paper diagrams to the map
const pastPaperDiagramIds = [
    "computer-architecture-block", "2024-p1-q5", "2024-p1-q10", "2024-p1-q12", 
    "2024-p1-q14", "2024-p1-q18", "2024-p1-q29", "2024-p1-q34",
    "2023-p1-q28", "2023-p1-q29", "2023-p1-q34", "2023-p1-q35", "2023-p1-q25", "2023-p2-q4a",
    "2019-p1-q10", "2019-p1-q11", "2019-p1-q32", "pq-2019-p1-32",
    "memory-hierarchy-pyramid", "k-map-and-circuit-2024-9", "process-state-transition-2024-10", "fat-table-2024-12", "system-types-match-2024-21",
    "2024-p2-q5a", "2024-p2-q5c-ii",
    "2024-p2-q7a", "2024-p2-q9b-table", "2024-p2-q10d-table",
    "2011-p1-q21-flowchart", "2011-p2-b-5d-truthtable", "2011-p2-b-5d-logic-circuit", "2012-p2-B1b-1", "2012-p2-B2c", "2012-p2-B4", "2013-p1-q23", "2013-p1-q28", "2013-p2-q1", "2013-p2-q3b", "2013-p2-q4b",
    "2014-p1-q12", "2014-p1-q12-options", "2014-p1-q13", "2014-p1-q18"
];

pastPaperDiagramIds.forEach(id => {
    // This is a bit of a trick. The PastPaperDiagram component itself
    // looks up the correct SVG to render based on the 'id' prop.
    // So we map each ID to the same generic component.
    componentMap[id] = (props: any) => <PastPaperDiagram id={id} {...props} />;
});
