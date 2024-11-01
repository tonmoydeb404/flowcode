import { Condition, InputOutput, Process, StartEnd } from "@/assets/shapes";
import { ReactNode } from "react";
import { ReactSVG } from "react-svg";
import { Shape } from "./types";

export const elementsConfig: { type: Shape; icon: ReactNode }[] = [
  {
    type: Shape.START_END,
    icon: <ReactSVG src={StartEnd} />,
  },
  {
    type: Shape.CONDITION,
    icon: <ReactSVG src={Condition} />,
  },
  {
    type: Shape.INPUT_OUTPUT,
    icon: <ReactSVG src={InputOutput} />,
  },
  {
    type: Shape.PROCESS,
    icon: <ReactSVG src={Process} />,
  },
];
