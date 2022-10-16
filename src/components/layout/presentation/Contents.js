import {styled} from "@mui/material/styles";
import {Outlet} from "react-router-dom";

const Contents = ({drawerWidth, open}) => {

    const EmptySpace = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            flexGrow: 1,
            alignItems: 'center',
            justifyContent:"center",
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: `-${drawerWidth}px`,
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                justifyContent:"center",
                marginLeft: 0,
            }),
        }),
    );

    return (
        <Main open={open} style={{alignItems:'center'}} >
            <EmptySpace />
            <Outlet />
        </Main>
    );
}

export default Contents;