import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';

import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountCircle from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {Alert, Collapse} from "@mui/material";
import Button from "@mui/material/Button";

export default function HeaderMenuOfNotification() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [alertOpen, setAlertOpen] = React.useState(true);

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="알림">
                    <IconButton
                        onClick={handleClick}
                        size="large"
                        color="inherit"
                    >
                        <Badge badgeContent={3} color="error">
                            <NotificationsIcon/>
                        </Badge>
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
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Alert severity="info"  sx={{minWidth:'100%'}}>
                        업무 종료시간이 10분 남았습니다. 업무일지를 작성하세요.
                    </Alert>
                </MenuItem>
                <MenuItem>
                    <Alert severity="warning"  sx={{minWidth:'100%'}}>
                        10월 16일 업무일지를 아직 작성하지 않았습니다.
                    </Alert>
                </MenuItem>
                <MenuItem>
                    <Alert severity="error"  sx={{minWidth:'100%'}}>
                        이거 구현하기 까다로울 것 같은데 그냥 없앨까요?
                    </Alert>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
