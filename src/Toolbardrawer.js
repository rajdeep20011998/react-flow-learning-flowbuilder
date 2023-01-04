import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tab from "@mui/material/Tab";
import { Sidebar2 } from "./Sidebar2";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ScheduleIcon from "@mui/icons-material/Schedule";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { ReactComponent as Tool1 } from "../src/assets/tool1.svg";
import PropTypes from "prop-types";

import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import useUndoable from "use-undoable";

const drawerWidth = 300;
const dots = ["	Details", "	Activity log", "Export ", "Duplicate", "Delete"];
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(1)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(1)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
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
        <Box sx={{ p: 3 }}>
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
export default function MiniDrawer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [elements, setElements, { undo, canUndo, redo, canRedo }] = useUndoable(
    []
  );

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ width: "20%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <div className="blockbackarrow">
            <div className="block">
              <p>Blocks </p>
            </div>
            <div className="backarrow"></div>
          </div>
          {/* <div className='search'> */}
          {/* <Search> */}
          {/* <SearchIconWrapper> */}
          {/* <SearchIcon /> */}
          {/* </SearchIconWrapper> */}
          {/* <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
    /> */}
          {/* </Search> */}
          {/* </div>  */}
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
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 2,
                ...(open && { display: "none" }),
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
            <>
              <div className="toolbar">
                <Stack direction="row" spacing={1}>
                  <div className="undo_redo">
                    <Button
                      onClick={() => undo()}
                      disabled={!canUndo}
                      startIcon={
                        <UndoOutlinedIcon style={{ color: "#AEBDCB" }} />
                      }
                    ></Button>
                    <Button
                      onClick={() => redo()}
                      disabled={!canRedo}
                      startIcon={
                        <RedoOutlinedIcon style={{ color: "#AEBDCB" }} />
                      }
                    ></Button>
                  </div>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <Button
                    startIcon={
                      <ScheduleIcon
                        style={{ color: "#345B7C", height: 28, m: 2 }}
                      />
                    }
                  >
                    <div className="scheduler">scheduler</div>
                  </Button>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <Button
                    startIcon={
                      <HighlightOffIcon style={{ color: "#E0182D" }} />
                    }
                  ></Button>
                  <div className="zero">0</div>
                  <div className="tool">
                    <Tool1 />
                  </div>

                  <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />
                  <Button
                    variant="outlined"
                    style={{ background: "#D6DEE5" }}
                    startIcon={<PlayArrowRoundedIcon />}
                  >
                    Test
                  </Button>

                  <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />
                  <Button
                    variant="outlined"
                    style={{ background: "#345B7C" }}
                    endIcon={<SendIcon style={{ color: "#FEFEFE" }} />}
                  >
                    <div className="publish">Publish</div>
                  </Button>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <Tooltip title="Click Here">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <MoreVertIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </div>
              <Box sx={{ flexGrow: 0 }}>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {dots.map((dots) => (
                    <MenuItem key={dots} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{dots}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>

            <Typography variant="h6" noWrap component="div">
              Toolbar test
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <div className="block">
            <p>Blocks </p>
          </div>

          <Divider />

          <Divider />

          {/* <Sidebar/> */}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <DrawerHeader />
        </Box>
      </Box>
    </>
  );
}
