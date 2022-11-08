import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  CalendarMonth,
  SignalCellularAlt,
  Newspaper,
} from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ themeDirection, drawerWidth, handleDrawerClose, open }) => {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {themeDirection === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem disablePadding>
          <Link
            to="/monthlyCalendar"
            style={{ width: "100%", textDecoration: "none", color: "#000000" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonth />
              </ListItemIcon>
              <ListItemText
                primary="캘린더"
                disableTypography={true}
                sx={{ fontFamily: "Kakao" }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            to="/work-log"
            style={{ width: "100%", textDecoration: "none", color: "#000000" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Newspaper />
              </ListItemIcon>
              <ListItemText
                primary="업무일지"
                disableTypography={true}
                sx={{ fontFamily: "Kakao" }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            to="/dashboard"
            style={{ width: "100%", textDecoration: "none", color: "#000000" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <SignalCellularAlt />
              </ListItemIcon>
              <ListItemText
                primary="통계"
                disableTypography={true}
                sx={{ fontFamily: "Kakao" }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
