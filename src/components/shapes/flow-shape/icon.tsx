import { Condition, InputOutput, Process, StartEnd } from "@/assets/shapes";
import { Shape, ShapeData } from "@/editor/types";

type Props = {
  type: Shape;
  data: ShapeData;
};

const Icon = (props: Props) => {
  const { type, data } = props;

  if (type === Shape.CONDITION) {
    return (
      <>
        <Condition fill={data.fill} stroke={data.stroke} />
      </>
    );
  }

  if (type === Shape.INPUT_OUTPUT) {
    return (
      <>
        <InputOutput fill={data.fill} stroke={data.stroke} />
      </>
    );
  }

  if (type === Shape.PROCESS) {
    return (
      <>
        <Process fill={data.fill} stroke={data.stroke} />
      </>
    );
  }

  if (type === Shape.START_END) {
    return (
      <>
        <StartEnd fill={data.fill} stroke={data.stroke} />
      </>
    );
  }

  return null;
};

export default Icon;
