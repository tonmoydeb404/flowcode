import { ShapeData } from "@/editor/types";
import { getTextColor } from "@/lib/utils";
import { Node, NodeProps, NodeResizer } from "@xyflow/react";
import Handlers from "./handlers";
import Icon from "./icon";

type ComponentNode = Node<ShapeData>;
type Props = NodeProps<ComponentNode>;

const FlowShape = (props: Props) => {
  const { data, selected } = props;
  const { label, type, fill } = data;

  return (
    <>
      <div className="relative w-full h-full">
        <Icon data={data} type={type} />
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          color={getTextColor(fill)}
        >
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
      <Handlers type={type} />
    </>
  );
};

export default FlowShape;
