import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  Node,
  OnSelectionChangeFunc,
  Panel,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";

import ConditionShape from "@/components/shapes/condition-shape copy";
import InputOutputShape from "@/components/shapes/input-output-shape";
import ProcessShape from "@/components/shapes/process-shape";
import StartEndShape from "@/components/shapes/start-end-shape";
import "@xyflow/react/dist/style.css";
import { nanoid } from "nanoid";
import {
  DragEventHandler,
  KeyboardEventHandler,
  useCallback,
  useState,
} from "react";
import DetailsSection from "./sections/details";
import ElementsSection from "./sections/elements";
import { Shape } from "./types";

const nodeTypes = {
  [Shape.CONDITION]: ConditionShape,
  [Shape.INPUT_OUTPUT]: InputOutputShape,
  [Shape.PROCESS]: ProcessShape,
  [Shape.START_END]: StartEndShape,
};

const Editor = () => {
  const { screenToFlowPosition } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const onSelectionChange: OnSelectionChangeFunc = ({ nodes }) => {
    if ((nodes.length = 1)) {
      setSelectedNode(nodes[0]?.id || null);
    } else {
      setSelectedNode(null);
    }
  };

  const onConnect = useCallback(
    (params: any) => setEdges((els) => addEdge(params, els)),
    []
  );

  const onDragOver: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
  };

  const onDrop: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("text/plain") as Shape;

    if (!Shape[type]) return;

    const position = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });
    const item: Node = {
      id: nanoid(),
      data: { label: "Untitled" },
      type,
      position,
    };

    setNodes((prev) => [...prev, item]);
  };

  const handleDelete = (id: string) => {
    setNodes((prev) => {
      return prev.filter((n) => n.id !== id);
    });
    setEdges((prev) => {
      return prev.filter((e) => {
        return ![e.source, e.target].includes(id);
      });
    });
  };

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const target = event.target as HTMLDivElement;
    if (event && event.key === "Delete") {
      if (target?.dataset?.id) handleDelete(target.dataset.id);
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        onDragOver={onDragOver}
        onDrop={onDrop}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        defaultEdgeOptions={{ animated: true }}
        nodeTypes={nodeTypes}
        onSelectionChange={onSelectionChange}
        onKeyDown={onKeyDown}
      >
        <Controls></Controls>
        <Panel position="bottom-center">
          <ElementsSection />
        </Panel>
        <Panel position="top-right">
          {selectedNode && <DetailsSection nodeId={selectedNode} />}
        </Panel>
        <Background variant={BackgroundVariant.Lines} />
      </ReactFlow>
    </div>
  );
};

export default Editor;
