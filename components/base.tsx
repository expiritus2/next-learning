import React, { FC } from 'react';
import Box from '@mui/material/Box';

type ComponentProps = {};

const Base: FC<ComponentProps> = (props) => {
    const {} = props;

    return (
        <Box>
            <p>Base</p>
        </Box>
    );
};

export default Base;
