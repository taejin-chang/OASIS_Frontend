import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {
  Settings,
  ManageAccounts,
  AdminPanelSettings,
} from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";

export default function HeaderMenuOfSettings() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="설정">
          <IconButton onClick={handleClick} size="large" color="inherit">
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link
          to="/config/environment/admin"
          style={{ width: "100%", textDecoration: "none", color: "#000000" }}
        >
          <MenuItem sx={{ fontFamily: "Kakao" }}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            환경설정
          </MenuItem>
        </Link>
        <Link
          to="/config/user-management"
          style={{ width: "100%", textDecoration: "none", color: "#000000" }}
        >
          <MenuItem sx={{ fontFamily: "Kakao" }}>
            <ListItemIcon>
              <ManageAccounts fontSize="small" />
            </ListItemIcon>
            사용자관리
          </MenuItem>
        </Link>
        <Link
          to="/config/environment/operation"
          style={{ width: "100%", textDecoration: "none", color: "#000000" }}
        >
          <MenuItem sx={{ fontFamily: "Kakao" }}>
            <ListItemIcon>
              <AdminPanelSettings fontSize="small" />
            </ListItemIcon>
            운영관리
          </MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
}
