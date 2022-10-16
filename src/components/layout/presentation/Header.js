import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import * as React from 'react';
import HeaderMenuOfAccount from "./HeaderMenuOfAccount";
import HeaderMenuOfSettings from "./HeaderMenuOfSettings";
import HeaderMenuOfNotification from "./HeaderMenuOfNotification";
import oasisLogo from "../../../styles/oasisLogo.png";


const Header = ({drawerWidth, open, handleDrawerOpen}) => {

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({theme, open}) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    return (
        <>
            <AppBar position="fixed" open={open} sx={{bgcolor: "white", boxShadow: 0, color: "black"}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{mr: 2, ...(open && {display: 'none'})}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <img src={oasisLogo} style={{width: "28px", height: "28px"}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}, fontFamily: 'KakaoBold'}}
                    >
                        {"\u00A0\u00A0\u00A0"}OASIS
                    </Typography>

                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <HeaderMenuOfNotification />
                        <HeaderMenuOfAccount />
                        <HeaderMenuOfSettings />
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;