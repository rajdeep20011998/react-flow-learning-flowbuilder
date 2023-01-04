import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Divider from "@mui/material/Divider";
import ScheduleIcon from "@mui/icons-material/Schedule";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { ReactComponent as Tool1 } from "../assets/tool1.svg";
import useUndoable from "use-undoable";

const dots = ["	Details", "	Activity log", "Export ", "Duplicate", "Delete"];

export default function IconLabelButtons() {
  const [ { undo, canUndo, redo, canRedo }] = useUndoable(
    []
  );

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div className="toolbar">
        <Stack direction="row" spacing={1}>
          <div className="undo_redo">
            <Button
              onClick={() => undo()}
              disabled={!canUndo}
              startIcon={<UndoOutlinedIcon style={{ color: "#AEBDCB" }} />}
            ></Button>
            <Button
              onClick={() => redo()}
              disabled={!canRedo}
              startIcon={<RedoOutlinedIcon style={{ color: "#AEBDCB" }} />}
            ></Button>
          </div>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button
            startIcon={
              <ScheduleIcon style={{ color: "#345B7C", height: 28, m: 2 }} />
            }
          >
            <div className="scheduler">scheduler</div>
          </Button>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button
            startIcon={<HighlightOffIcon style={{ color: "#E0182D" }} />}
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
  );
}
