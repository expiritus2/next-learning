import React, { FC } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../../store';

type ComponentProps = {};

const AdminDrawer: FC<ComponentProps> = (props) => {
    const {} = props;
    const { appState } = useStore();

    const onClose = () => {
        appState.openAdminDrawer(false);
    };

    const onOpen = () => {
        appState.openAdminDrawer(true);
    };

    return (
        <Box>
            <SwipeableDrawer anchor="left" open={appState.adminDrawerIsOpen} onClose={onClose} onOpen={onOpen}>
                <ul>
                    <li>Item</li>
                </ul>
            </SwipeableDrawer>
        </Box>
    );
};

export default observer(AdminDrawer);
