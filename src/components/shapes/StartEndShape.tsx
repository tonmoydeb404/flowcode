import { StartEnd } from "@/assets/shapes";
import { Handle, NodeProps, Position } from "@xyflow/react";

type Props = NodeProps;

const StartEndShape = (props: Props) => {
  const { id } = props;
  return (
    <>
      <Handle type="target" position={Position.Top} id={id} />
      <div>
        <img src={StartEnd} />
      </div>
      <Handle type="source" position={Position.Bottom} id={id} />
    </>
  );
};

export default StartEndShape;
