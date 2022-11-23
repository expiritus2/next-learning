import React, { FC } from 'react';
import Box from '@mui/material/Box';

type ComponentProps = {};

const CommonHeader: FC<ComponentProps> = (props) => {
    const {} = props;
    return (
        <Box>
            <h1>CommonHeader</h1>
        </Box>
    );
};

export default CommonHeader;
