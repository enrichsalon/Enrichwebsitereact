import React from "react";
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BODY_BG } from "../../../constants/colors";
import MyOrdersSection from "./MyOrdersSection";

const useStyle = makeStyles(() => ({
    homeContainer: {
        backgroundColor: BODY_BG,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '30px 10vw',
    }
}));

const MyOrders = () => {
    const classes = useStyle();
    return (
        <Box className={classes.homeContainer}>
            <div style={{ width: '30vw' }}>
                LHS Menu
            </div>
            <MyOrdersSection />
        </Box>
    )
}

export default MyOrders;