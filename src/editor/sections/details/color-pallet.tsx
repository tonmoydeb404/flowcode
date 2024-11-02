import { getTextColor } from "@/lib/utils";
import { LucideCheck } from "lucide-react";

type Props = {
  value: string;
  isActive: boolean;
  onSelect: (value: string) => void;
};

const CollorPallet = (props: Props) => {
  const { isActive, value, onSelect } = props;
  return (
    <button
      className="aspect-square rounded cursor-pointer flex flex-col items-center justify-center border"
      style={{ background: value }}
      onClick={() => onSelect(value)}
    >
      {isActive && <LucideCheck color={getTextColor(value)} />}
    </button>
  );
};

export default CollorPallet;
