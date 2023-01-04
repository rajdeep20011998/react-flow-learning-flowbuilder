import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ReactComponent as Rhombus } from "../assets/rhombus-2.svg";
import LoopIcon from "@mui/icons-material/Loop";

export const Sidebar2 = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="container">
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "gmail")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <Rhombus />
              <Typography gutterBottom variant="subtitle" component="div">
                And/OR
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "googleDocs")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <Rhombus />
              <Typography gutterBottom variant="subtitle" component="div">
                If/else
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "googleDrive")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <div className="loop">
                <Rhombus />
                <LoopIcon />
              </div>
              <Typography gutterBottom variant="subtitle" component="div">
                Loop
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "salesforce")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <Rhombus />
              <Typography gutterBottom variant="subtitle" component="div">
                Router
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </aside>
  );
};
