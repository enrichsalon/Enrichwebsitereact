import React, { useState } from 'react';
import Box from '@mui/material/Box';

import * as R from "ramda";
import Images from '../../../asset/images';
import svgIcons from '../../../asset/svg';
import { Grid, Tab, Tabs } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MyProfile from './MyProfile';
import MyOrders from '../MyOrders/MyOrdersSection';
import Data from './mockData';
import { MyAddress } from './Address';
import { MyWallet } from './Wallet';

const drawerWidth = 240;

const ProfileSideDrawer_Data = [

    {
        id: 0,
        img: Images.Profile.Myprofile,
        title: "My Profile",
    },
    {
        id: 1,
        img: svgIcons.profile.Myorders_Icon,
        title: "My Orders",
    },
    {
        id: 2,
        img: Images.Profile.ManageAddress,
        title: "Manage Addresses",
    },
    {
        id: 3,
        img: svgIcons.profile.Wallet_Icon,
        title: "Enrich Wallet",
    },
    {
        id: 4,
        img: svgIcons.profile.Giftcard_Icon,
        title: "Gift Card",
    },
    {
        id: 5,
        img: svgIcons.profile.Mypay_Icon,
        title: "My Payment Methods",
    },
    {
        id: 6,
        img: svgIcons.profile.Mycoupons_Icon,
        title: "My Coupons",
    },
    {
        id: 7,
        img: svgIcons.profile.ReferEarn_Icon,
        title: "Refer & Earn",
    },
    {
        id: 8,
        img: svgIcons.profile.Mypkg_Icon,
        title: "My Packagesy",
    },
]

const useStyle = makeStyles(theme => ({
    container: {
        marginLeft: "100px",
        marginRight: "100px",
        marginTop: "3rem"
    }
}))

const TAB_RENDERER = {
    0: MyProfile,
    1: MyOrders,
    2: MyAddress,
    3: MyWallet,
};

const TAB_DETAILS_RENDERER = {
    3: () => <div>Enrich Wallet</div>
}
const ProfileManager = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const handleChange = (e, newValue) => {
        setCurrentTab(newValue);
    }
    const classes = useStyle()
    const TabRenderer = TAB_RENDERER[currentTab];
    const TabDetailsRenderer = TAB_DETAILS_RENDERER[currentTab];

    console.log("Test", TabRenderer);
    return (
        <Box className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={currentTab}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        {
                            R.map(tabItem => {
                                return (
                                    <Tab label={tabItem.title} />

                                )
                            })(ProfileSideDrawer_Data)
                        }
                    </Tabs>
                </Grid>
                <Grid item xs={6}>
                    {
                        TabRenderer && <TabRenderer {...Data} />
                    }
                </Grid>
                <Grid item xs={3}>
                    {
                        TabDetailsRenderer && <TabDetailsRenderer {...Data} />
                    }
                </Grid>
            </Grid>
            <Box></Box>
        </Box>
    )
}
export default ProfileManager;