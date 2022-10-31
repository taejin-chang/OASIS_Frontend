import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Person, Logout, Password } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function HeaderMenuOfAccount() {
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
        <Tooltip title="계정">
          <IconButton onClick={handleClick} color="inherit" size="large">
            <AccountCircle />
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
          to="/my-page"
          style={{ width: "100%", textDecoration: "none", color: "#000000" }}
        >
          <MenuItem sx={{ fontFamily: "Kakao" }}>
            <ListItemIcon>
              <IconButton color="inherit" aria-label="open drawer" edge="start">
                <Person />
              </IconButton>
            </ListItemIcon>
            내 정보
          </MenuItem>
        </Link>
        <Link
          to="/change-password"
          style={{ width: "100%", textDecoration: "none", color: "#000000" }}
        >
          <MenuItem sx={{ fontFamily: "Kakao" }}>
            <ListItemIcon>
              <IconButton color="inherit" aria-label="open drawer" edge="start">
                <Password />
              </IconButton>
            </ListItemIcon>
            비밀번호 변경
          </MenuItem>
        </Link>
        <Link
          to="/"
          style={{ width: "100%", textDecoration: "none", color: "#000000" }}
        >
          <MenuItem sx={{ fontFamily: "Kakao" }}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            로그아웃
          </MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
}
