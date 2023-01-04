import React from "react";
import { ReactComponent as Gmail } from "../assets/gmail.svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ReactComponent as GoogleDocs } from "../assets/google-document.svg";
import { ReactComponent as GoogleDrive } from "../assets/google-drive.svg";
import { ReactComponent as Salesforce } from "../assets/salesforce.svg";
import { ReactComponent as Whatsapp } from "../assets/whatsapp.svg";
import { ReactComponent as MicrosoftEws } from "../assets/MicrosoftEws.svg";
import { ReactComponent as MsgraphApi } from "../assets/MsgraphApi.svg";
import { ReactComponent as Emailbot } from "../assets/emailbot.svg";
import { ReactComponent as Chatbot } from "../assets/chatbot.svg";
import { ReactComponent as Documentbot } from "../assets/documentbot.svg";
import { ReactComponent as Crm } from "../assets/crm.svg";
import { ReactComponent as Connector1 } from "../assets/connector1.svg";
import { ReactComponent as Connector2 } from "../assets/connector2.svg";
import { ReactComponent as Connector3 } from "../assets/connector3.svg";
import { ReactComponent as Connector4 } from "../assets/connector4.svg";

export const Sidebar = () => {
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
              <Gmail />
              <div className="text">Gmail sx</div>
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
              <GoogleDocs />
              <div className="text">GoogleDocs</div>
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
              <GoogleDrive />
              <div className="text">GoogleDrive</div>
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
              <Salesforce />
              <div className="text">Salesforce</div>
            </CardContent>
          </Card>
        </div>
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "whatsapp")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <Whatsapp />
              <div className="text">Whatsapp</div>
            </CardContent>
          </Card>
        </div>
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "MicrosoftEws")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <MicrosoftEws />
              <div className="text">MicrosoftEWS</div>
            </CardContent>
          </Card>
        </div>
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "MsgraphApi")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <MsgraphApi />
              <div className="text">Microsoft Graph Api</div>
            </CardContent>
          </Card>
        </div>
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "chatbot")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <Chatbot />
              <div className="text">CHATBOT</div>
            </CardContent>
          </Card>
        </div>

        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "emailbot")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <Emailbot />
              <div className="text">EMAILBOT</div>
            </CardContent>
          </Card>
        </div>
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "documentbot")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <Documentbot />
              <div className="text">DocumentBot</div>
            </CardContent>
          </Card>
        </div>
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "crm")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <Crm />
              <div className="text">CRM</div>
            </CardContent>
          </Card>
        </div>
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "connector1")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <Connector1 />
              <div className="text">CONNECTOR1</div>
            </CardContent>
          </Card>
        </div>
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "connector2")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <Connector2 />
              <div className="text">CONNECTOR2</div>
            </CardContent>
          </Card>
        </div>
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "connector3")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <Connector3 />
              <div className="text">CONNECTOR3</div>
            </CardContent>
          </Card>
        </div>
        <div
          className="dragCard"
          onDragStart={(event) => onDragStart(event, "connector4")}
          draggable
        >
          <Card className="card">
            <CardContent>
              <Connector4 />
              <div className="text">CONNECTOR4</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </aside>
  );
};
