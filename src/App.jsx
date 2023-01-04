import "reactflow/dist/style.css";
import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  applyEdgeChanges,
  applyNodeChanges,
  Controls,
  Background,
  useReactFlow,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import IconNode from "./components/IconNode.js";
import Tabs from "./components/Tabs";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import { ArrowForwardIos } from "@mui/icons-material";

const initialNodes = [
  {
    id: "node-1",
    type: "Plusesign",
    position: { x: 100, y: 50 },
    style: {},
    data: { label: "Drop here" },
  },
];

const nodeTypes = {
  gmail: IconNode,
  googleDocs: IconNode,
  googleDrive: IconNode,
  salesforce: IconNode,
  whatsapp: IconNode,
  MicrosoftEwS: IconNode,
  MsgraphApi: IconNode,
  documentbot: IconNode,
  emailbot: IconNode,
  chatbot: IconNode,
  crm: IconNode,
  connector1: IconNode,
  connector2: IconNode,
  connector3: IconNode,
  connector4: IconNode,
  Plusesign: IconNode,
  rhombus: IconNode,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodes, setNodes] = useNodesState(initialNodes);

  const { getIntersectingNodes } = useReactFlow();

  const onDragOver = useCallback((event, node) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onNodeDrag = useCallback(
    (event, node) => {
      event.preventDefault();

      setNodes((ns) =>
        ns.map((n) => ({
          ...n,
          className: node.position.x > 30 ? "highlight" : "",
        }))
      );

      event.dataTransfer.dropEffect = "move";
    },
    [ getIntersectingNodes, setNodes]
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const [hideTab, setHideTab] = useState(false);

  return (
    <>
      <div className="abc">
        <React.StrictMode>
          <StyledEngineProvider injectFirst>
            <Header sx={{ background: "#68459B" }} />
            <Toolbar />
          </StyledEngineProvider>
        </React.StrictMode>
      </div>
      <div className="dndflow">
        {!hideTab && <Tabs setHideTab={setHideTab} />}
        {hideTab && (
          <div className="backarrow" onClick={() => setHideTab(false)}>
            <ArrowForwardIos />
          </div>
        )}
        <div
          className="reactflow-wrapper"
          style={{ height: "800px", width: "100%" }}
          ref={reactFlowWrapper}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            className="intersection-flow"
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            nodeTypes={nodeTypes}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragEnter={ondragenter}
            onNodeDrag={onNodeDrag}
            selectNodesOnDrag={false}
            fitView
          >
            <MiniMap nodeStrokeWidth={3} zoomable pannable />
            <Controls></Controls>
            <Background />
          </ReactFlow>
        </div>
      </div>
    </>
  );
};

function FlowWithProvider(props) {
  return (
    <ReactFlowProvider>
      <DnDFlow {...props} />
    </ReactFlowProvider>
  );
}

export default FlowWithProvider;
