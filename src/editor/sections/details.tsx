import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useReactFlow } from "@xyflow/react";
import { useEffect, useState } from "react";
import { ShapeData } from "../types";

type Props = {
  nodeId: string;
};

const DetailsSection = (props: Props) => {
  const { nodeId } = props;
  const { getNode, updateNodeData } = useReactFlow();
  const initialData: ShapeData = { label: "" };
  const [data, setData] = useState(initialData);

  // ----------------------------------------------------------------------

  const onUpdate = (data: Partial<Record<string, any>>) => {
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
      </CardContent>
    </Card>
  );
};

export default DetailsSection;
