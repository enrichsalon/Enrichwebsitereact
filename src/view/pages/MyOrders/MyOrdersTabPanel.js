import React from "react";
import { Box } from '@mui/material';

const MyOrdersTabPanel = ({ children, value, index, ...other }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`myorders-tabpanel-${index}`}
            aria-labelledby={`myorders-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default MyOrdersTabPanel;