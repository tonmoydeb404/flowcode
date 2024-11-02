import { StartEnd } from "@/assets/shapes";
import { ShapeData } from "@/editor/types";
import { Handle, Node, NodeProps, NodeResizer, Position } from "@xyflow/react";
import { ReactSVG } from "react-svg";

type ComponentNode = Node<ShapeData>;
type Props = NodeProps<ComponentNode>;

const StartEndShape = (props: Props) => {
  const { data, selected } = props;
  const { label } = data;

  return (
    <>
      <div className="relative w-full h-full">
        <ReactSVG src={StartEnd} />

        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {label}
        </span>
      </div>
      <NodeResizer
        color="#ff0071"
        isVisible={!!selected}
        minWidth={100}
        minHeight={30}
        keepAspectRatio
      />
      <Handle type="source" position={Position.Bottom} id={"bottom"} />
      <Handle type="target" position={Position.Top} id={"top"} />
    </>
  );
};

export default StartEndShape;
