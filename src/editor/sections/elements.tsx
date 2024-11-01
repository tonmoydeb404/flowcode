import { elementsConfig } from "../config";
import { Shape } from "../types";

type Props = {};

const Elements = (_props: Props) => {
  const onDragStart = (
    event: React.DragEvent<HTMLButtonElement>,
    type: Shape
  ) => {
    event.dataTransfer?.setData("text/plain", type);
  };

  return (
    <div className="flex items-center gap-5 bg-background px-6 py-3 rounded-2xl border">
      {elementsConfig.map((item) => (
        <button
          key={item.type}
          draggable
          onDragStart={(e) => onDragStart(e, item.type)}
          className="w-20"
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default Elements;
