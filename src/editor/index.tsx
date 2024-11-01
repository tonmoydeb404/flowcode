import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  Node,
  Panel,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { nanoid } from "nanoid";
import { DragEventHandler, useCallback } from "react";
import Elements from "./sections/elements";
import { Shape } from "./types";

const Editor = () => {
  const { screenToFlowPosition } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

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

    if (
      ![
        Shape.CONNECTOR,
        Shape.DECISION,
        Shape.PROCESS,
        Shape.START_END,
      ].includes(type)
    )
      return;

    const position = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });
    const item: Node = { id: nanoid(), data: { label: "Untitled" }, position };

    setNodes((prev) => {
      console.log({ prev });

      return [...prev, item];
    });
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
      >
        <Controls />
        <Panel position="bottom-center">
          <Elements />
        </Panel>
        <Background variant={BackgroundVariant.Lines} />
      </ReactFlow>
    </div>
  );
};

export default Editor;
