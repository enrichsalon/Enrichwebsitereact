import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Products from './Products';
import Services from './Services';
import { colors } from '../../../theme/colors';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Wishlist = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            paddingTop: "20px",
            backgroundColor: colors.gray5,
            paddingLeft: "100px",
            paddingRight: "100px"
        }}>
            <Box sx={{backgroundColor: colors.white, marginLeft:"23px", marginRight:"23px" , paddingTop:"20px"}}>
                <Typography sx={{ fontSize: "20px", marginLeft: "17px" }} color="#2B2A29" align={"left"} gutterBottom>
                    <b>My Wishlist</b>
                </Typography>
                <Tabs value={value} aria-label="basic tabs example">
                    <Tab label="Pruducts" {...a11yProps(0)} color="#EB6165" onClick={() => handleChange(0)} />
                    <Tab label="Salon Services" {...a11yProps(1)} color="#EB6165" onClick={() => handleChange(1)} />
                </Tabs>
            </Box>
            <TabPanel>
                {
                    value === 0 ? <Products page="2" /> : <Services />
                }
            </TabPanel>

        </Box>

    );
}
export default Wishlist;