import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import { Sidebar } from "./Sidebar";
import { Sidebar2 } from "./Sidebar2";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="scroll"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    props.setHideTab(true);
  };

  return (
    <Box sx={{ width: "20%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <div className="blockbackarrow">
          <div className="block">
            <p>Blocks </p>
          </div>
          <div className="backarrow" onClick={handleClick}>
            <ArrowBackIosIcon />
          </div>
        </div>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Apps" {...a11yProps(0)} />
          <Tab label="Logic" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Sidebar />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Sidebar2 />
      </TabPanel>
    </Box>
  );
}
