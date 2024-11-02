import { Condition, InputOutput, Process, StartEnd } from "@/assets/shapes";
import { ReactNode } from "react";
import { Shape } from "./types";

// ----------------------------------------------------------------------

export const fills = [
  "#f24822",
  "#ffa629",
  "#14ae5c",
  "#0d99ff",
  "#9747ff",
  "#fff",
];
export const strokes = ["#fff", "#000"];

// ----------------------------------------------------------------------

type ElementConfig = {
  type: Shape;
  icon: ReactNode;
  fill: string;
  stroke: string;
};

export type ElementConfigData = Pick<ElementConfig, "fill" | "stroke" | "type">;

export const elementsConfig: ElementConfig[] = [
  {
    type: Shape.START_END,
    icon: <StartEnd stroke={fills[0]} fill={fills[0]} fillOpacity={0.1} />,
    fill: fills[0],
    stroke: strokes[1],
  },
  {
    type: Shape.CONDITION,
    icon: <Condition stroke={fills[1]} fill={fills[1]} fillOpacity={0.1} />,
    fill: fills[1],
    stroke: strokes[1],
  },
  {
    type: Shape.INPUT_OUTPUT,
    icon: <InputOutput stroke={fills[2]} fill={fills[2]} fillOpacity={0.1} />,
    fill: fills[2],
    stroke: strokes[1],
  },
  {
    type: Shape.PROCESS,
    icon: <Process stroke={fills[4]} fill={fills[4]} fillOpacity={0.1} />,
    fill: fills[4],
    stroke: strokes[1],
  },
];
