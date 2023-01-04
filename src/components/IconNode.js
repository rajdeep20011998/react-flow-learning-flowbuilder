import { Handle, Position } from "reactflow";
import { ReactComponent as Gmail } from "../assets/gmail.svg";
import { ReactComponent as GoogleDocs } from "../assets/google-document.svg";
import { ReactComponent as GoogleDrive } from "../assets/google-drive.svg";
import { ReactComponent as Salesforce } from "../assets/salesforce.svg";
import { ReactComponent as Whatsapp } from "../assets/whatsapp.svg";
import { ReactComponent as Plusesign } from "../assets/icon-buttons7.svg";
import { ReactComponent as MicrosoftEwS } from "../assets/MicrosoftEws.svg";
import { ReactComponent as MsgraphApi } from "../assets/MsgraphApi.svg";
import { ReactComponent as Emailbot } from "../assets/emailbot.svg";
import { ReactComponent as Chatbot } from "../assets/chatbot.svg";
import { ReactComponent as Documentbot } from "../assets/documentbot.svg";
import { ReactComponent as Crm } from "../assets/crm.svg";
import { ReactComponent as Connector1 } from "../assets/connector1.svg";
import { ReactComponent as Connector2 } from "../assets/connector2.svg";
import { ReactComponent as Connector3 } from "../assets/connector3.svg";
import { ReactComponent as Connector4 } from "../assets/connector4.svg";
import React from "react";

function IconNode({ type }) {
  const getNode = (type) => {
    switch (type) {
      case "gmail":
        return <Gmail />;
      case "googleDocs":
        return <GoogleDocs />;
      case "googleDrive":
        return <GoogleDrive />;
      case "salesforce":
        return <Salesforce />;
      case "whatsapp":
        return <Whatsapp />;
      case "MicosoftEws":
        return <MicrosoftEwS />;
      case "MsgraphApi":
        return <MsgraphApi />;
      case "emailbot":
        return <Emailbot />;
      case "chatbot":
        return <Chatbot />;
      case "documentbot":
        return <Documentbot />;
      case "crm":
        return <Crm />;
      case "connector1":
        return <Connector1 />;
      case "connector2":
        return <Connector2 />;
      case "connector3":
        return <Connector3 />;
      case "connector4":
        return <Connector4 />;
      case "Plusesign":
        return <Plusesign />;
      default:
        return <Plusesign />;
    }
  };
  return (
    <>
      <div
        className={type === "Plusesign" ? "empty-node" : "text-updater-node"}
      >
        <div className="IconNode" onDrop={() => getNode(type)}></div>
        <Handle type="target" position={Position.Top} />
        {getNode(type)}
        <Handle type="source" position={Position.Bottom} id="b" />
      </div>
    </>
  );
}

export default IconNode;
