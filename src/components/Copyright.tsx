import React from "react";
import {Box, Typography, Link} from '@material-ui/core'

export const Copyright = () => (
    <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </Box>
)