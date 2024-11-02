export enum Shape {
  "PROCESS" = "PROCESS",
  "CONDITION" = "CONDITION",
  "START_END" = "START_END",
  "INPUT_OUTPUT" = "INPUT_OUTPUT",
}

export type ShapeData = {
  label: string;
  fill: string;
  stroke: string;
  type: Shape;
};
