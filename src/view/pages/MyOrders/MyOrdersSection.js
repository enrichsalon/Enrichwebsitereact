import React from "react";
import { Box, colors, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MyOrdersTabPanel from "./MyOrdersTabPanel";
import MyOrderItem from "./MyOrderItem";

const useStyle = makeStyles(() => ({
    myOrdersSection: {
        width: '100%',
        textAlign: 'left'
    },
    sectionHeader: {
        backgroundColor: colors.common.white,
        padding: '15px',
        paddingLeft: '30px',
        paddingBottom: 0,
    },
    tabs: {
        "& .MuiButtonBase-root": {
            paddingLeft: 5,
            paddingRight: 5,
            marginRight: 30,
            fontWeight: 700,
            textTransform: 'capitalize'
        }
    },
    sectionHeaderActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    sectionHeaderActionsLabel: {
        color: '#707070',
        fontWeight: 500
    },
    orderPlacedDateFilter: {
        marginLeft: 10,
        "& .MuiSelect-select": {
            padding: '5px 15px',
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: 0,
            border: '1px solid #F1F1F1'
        }
    },
    b: {
        fontWeight: 500
    },
}));

const MyOrdersSection = () => {
    const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
    const handleSelectedTabChange = (_event, newValue) => {
        setSelectedTabIndex(newValue);
    };
    const [orderPlacedDateFilter, setOrderPlacedDateFilter] = React.useState(30);
    const handleOrderPlacedDateFilterChange = (event) => {
        setOrderPlacedDateFilter(event.target.value);
    };
    const classes = useStyle();
    return (
        <Box className={classes.myOrdersSection}>
            <div className={classes.sectionHeader}>
                <h3>My Orders</h3>
                <Box className={classes.sectionHeaderActions}>
                    <Tabs className={classes.tabs} value={selectedTabIndex} onChange={handleSelectedTabChange} aria-label="my orders">
                        <Tab label="Products" id="myorders-tab-0" aria-controls="myorders-tabpanel-0" />
                        <Tab label="Salon Services" id="myorders-tab-0" aria-controls="myorders-tabpanel-0" />
                    </Tabs>
                    <div>
                        <span className={classes.sectionHeaderActionsLabel}>
                            Orders Placed In
                        </span>
                        <Select
                            value={orderPlacedDateFilter}
                            onChange={handleOrderPlacedDateFilterChange}
                            className={classes.orderPlacedDateFilter}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Order Placed Date Filter' }}
                            IconComponent={KeyboardArrowDownIcon}
                        >
                            <MenuItem value={30}><b className={classes.b}>Past 30 Days</b></MenuItem>
                            <MenuItem value={7}><b className={classes.b}>Past 7 Days</b></MenuItem>
                        </Select>
                    </div>
                </Box>
            </div>
            <MyOrdersTabPanel value={selectedTabIndex} index={0}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => <MyOrderItem type="PRODUCT" item={item} key={index} />)
                }
            </MyOrdersTabPanel>
            <MyOrdersTabPanel value={selectedTabIndex} index={1}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => <MyOrderItem type="SERVICES" item={item} key={index} />)
                }
            </MyOrdersTabPanel>
        </Box>
    )
}

export default MyOrdersSection;