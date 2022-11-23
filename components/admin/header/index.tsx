import React, { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store';

type ComponentProps = {};

const AdminHeader: FC<ComponentProps> = (props) => {
    const {} = props;
    const { appState } = useStore();

    const onOpenDrawer = () => {
        appState.openAdminDrawer(!appState.adminDrawerIsOpen);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={onOpenDrawer}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button color="inherit" sx={{ ml: 'auto' }}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default observer(AdminHeader);
