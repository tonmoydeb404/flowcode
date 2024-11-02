import { Condition, InputOutput, Process, StartEnd } from "@/assets/shapes";
import { ReactNode } from "react";
import { Shape } from "./types";

export const elementsConfig: { type: Shape; icon: ReactNode }[] = [
  {
    type: Shape.START_END,
    icon: <StartEnd stroke="#333" fill="none" />,
  },
  {
    type: Shape.CONDITION,
    icon: <Condition stroke="#333" fill="none" />,
  },
  {
    type: Shape.INPUT_OUTPUT,
    icon: <InputOutput stroke="#333" fill="none" />,
  },
  {
    type: Shape.PROCESS,
    icon: <Process stroke="#333" fill="none" />,
  },
];
