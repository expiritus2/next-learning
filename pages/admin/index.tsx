import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { GetStaticPropsResult } from 'next';
import { AdminDrawer } from 'components';

type ComponentProps = {
    isAdminPage: boolean;
};

const AdminPage: FC<ComponentProps> = (props) => {
    const {} = props;

    return (
        <Box>
            <h1>AdminPage</h1>
            <AdminDrawer />
        </Box>
    );
};

export const getStaticProps = (): GetStaticPropsResult<ComponentProps> => {
    return {
        props: {
            isAdminPage: true,
        },
    };
};

export default AdminPage;
