import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useReactFlow } from "@xyflow/react";
import { useEffect, useState } from "react";
import { ShapeData } from "../../types";
import CollorPallet from "./color-pallet";

type Props = {
  nodeId: string;
};

type Config = Pick<ShapeData, "fill" | "label" | "stroke">;

const fills = ["#F9A03F", "#DDF9C1", "#FF5154", "#7D8CC4", "#2AB7CA", "#fff"];
const strokes = ["#fff", "#000"];

const DetailsSection = (props: Props) => {
  const { nodeId } = props;
  const { getNode, updateNodeData } = useReactFlow();
  const initialData: Config = { label: "", fill: "", stroke: "" };
  const [data, setData] = useState(initialData);

  // ----------------------------------------------------------------------

  const onUpdate = (data: Partial<Config>) => {
    updateNodeData(nodeId, data);
    setData((prev) => ({ ...prev, ...data }));
  };

  // ----------------------------------------------------------------------

  useEffect(() => {
    if (nodeId) setData((getNode(nodeId)?.data || initialData) as ShapeData);
  }, [nodeId]);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardDescription>Configurations</CardDescription>
      </CardHeader>

      <CardContent>
        <Input
          name="label"
          placeholder="Element Label"
          value={data?.label}
          onChange={(e) => onUpdate({ label: e.target.value })}
        />

        <div className="mt-5">
          <CardDescription>Fill</CardDescription>
          <div className="grid grid-cols-6 gap-3">
            {fills.map((color) => (
              <CollorPallet
                key={color}
                value={color}
                onSelect={(v) => onUpdate({ fill: v })}
                isActive={data?.fill === color}
              />
            ))}
          </div>
        </div>

        <div className="mt-5">
          <CardDescription>Stroke</CardDescription>
          <div className="grid grid-cols-6 gap-3">
            {strokes.map((color) => (
              <CollorPallet
                key={color}
                value={color}
                onSelect={(v) => onUpdate({ stroke: v })}
                isActive={data?.stroke === color}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailsSection;
