import { Shape } from "@/editor/types";
import { Handle, Position } from "@xyflow/react";

type Props = {
  type: Shape;
};

const Handlers = (props: Props) => {
  const { type } = props;

  if (type === Shape.CONDITION) {
    return (
      <>
        <Handle type="target" position={Position.Top} id={"top"} />
        <Handle type="source" position={Position.Left} id={"left"} />
        <Handle type="source" position={Position.Right} id={"Right"} />
      </>
    );
  }

  if (type === Shape.INPUT_OUTPUT) {
    return (
      <>
        <Handle type="target" position={Position.Top} id={"top"} />
        <Handle type="source" position={Position.Bottom} id={"bottom"} />
      </>
    );
  }

  if (type === Shape.PROCESS) {
    return (
      <>
        <Handle type="target" position={Position.Top} id={"top"} />
        <Handle type="source" position={Position.Bottom} id={"bottom"} />
      </>
    );
  }

  if (type === Shape.START_END) {
    return (
      <>
        <Handle type="target" position={Position.Top} id={"top"} />
        <Handle type="source" position={Position.Bottom} id={"bottom"} />
      </>
    );
  }

  return null;
};

export default Handlers;
