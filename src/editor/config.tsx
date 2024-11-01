import {
  LucideCircle,
  LucideDiamond,
  LucideRectangleHorizontal,
} from "lucide-react";
import { ReactNode } from "react";
import { Shape } from "./types";

export const elementsConfig: { type: Shape; icon: ReactNode }[] = [
  {
    type: Shape.START_END,
    icon: <LucideCircle size={30} />,
  },
  {
    type: Shape.DECISION,
    icon: <LucideDiamond size={30} />,
  },
  {
    type: Shape.PROCESS,
    icon: <LucideRectangleHorizontal size={30} />,
  },
];
