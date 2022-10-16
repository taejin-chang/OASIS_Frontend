import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../presentation/Header";
import Sidebar from "../presentation/Sidebar";
import Contents from "../presentation/Contents";



const Layout = () => {

    const drawerWidth = 240;

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header drawerWidth={drawerWidth} open={open} handleDrawerOpen={handleDrawerOpen}/>
            <Sidebar drawerWidth={drawerWidth} open={open} handleDrawerClose={handleDrawerClose} themeDirection={theme.direction}/>
            <Contents drawerWidth={drawerWidth} open={open}/>
        </Box>
    )

}


export default Layout;