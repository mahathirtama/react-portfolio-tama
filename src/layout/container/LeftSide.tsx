import { Box,Typography } from '@mui/material';
import React from 'react';

export const LeftSide = () => {
    return (
        <Box sx={{ width: '12%', display: { xs: "none", sm: "none", lg: 'flex' }, justifyContent: 'center', alignItems: 'flex-end', position: 'fixed', mt: '15%', ml: '88%' }}>
            <Typography color="white" variant="body1" sx={{ textOrientation: 'mixed', writingMode: ' vertical-rl' }}>mahathirtama.ahmad@gmail.com</Typography>
        </Box>
    )
}