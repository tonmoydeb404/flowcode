import { ElementConfigData, elementsConfig } from "../config";

type Props = {};

const ElementsSection = (_props: Props) => {
  const onDragStart = (
    event: React.DragEvent<HTMLButtonElement>,
    data: ElementConfigData
  ) => {
    event.dataTransfer?.setData("application/json", JSON.stringify(data));
  };

  return (
    <div className="flex items-center gap-5 bg-background px-6 py-3 rounded-2xl border">
      {elementsConfig.map((item) => (
        <button
          key={item.type}
          draggable
          onDragStart={(e) =>
            onDragStart(e, {
              fill: item.fill,
              stroke: item.stroke,
              type: item.type,
            })
          }
          className="w-20"
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default ElementsSection;
