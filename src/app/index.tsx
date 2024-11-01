import Editor from "@/editor";
import { ReactFlowProvider } from "@xyflow/react";

type Props = {};

const App = (_props: Props) => {
  return (
    <ReactFlowProvider>
      <Editor />
    </ReactFlowProvider>
  );
};

export default App;
