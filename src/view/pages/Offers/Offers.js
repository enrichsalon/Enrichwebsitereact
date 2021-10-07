import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ValuePackages from './ValuePackages';
import BrandOffers from './BrandOffers';
import TrendingOffers from './TrendingOffers';
import Images from '../../../asset/images';
import { makeStyles } from '@mui/styles';
import * as R from "ramda";

const TopCategoryData = [
    {
        id: "First_Img",
        img: Images.bath_body_offer,

    },
    {
        id: "Second_Img",
        img: Images.hair_care_offer,

    },
    {
        id: "Third_Img",
        img: Images.mens_grooming_offer,

    },
];

const useStyle = makeStyles(theme => ({
    image: {
        height: "100%",
        width: "100%"
    },
    content: {
        paddingLeft: "200px",
        paddingRight: "200px",
    },
    tabContainer: {
        backgroundColor: "white",
        margin: "2rem 0rem 2rem 0rem",
        marginRight: "3rem",
    },
    sectionHeader: {
        "&.MuiTypography-root": {
            marginTop: "2rem",
            marginBottom: "2rem",
            textAlign: "initial",
            fontSize: "26px",
            fontWeight: "600"
        }

    }
}));
const Offers = () => {
    const classes = useStyle();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            bgcolor: '#F5F6F8'
        }}>
            <Box>
                <img src={Images.OffersPage.Beauty_Image} className={classes.image} />
            </Box>
            <Box className={classes.content}>
                <Tabs value={value} onChange={handleChange} centered className={classes.tabContainer}>
                    <Tab label="Trending Offers" />
                    <Tab label="Brand Offers" />
                    <Tab label="Top Category Offers" />
                    <Tab label="Value Packages" />
                </Tabs>
                <div>
                    <TrendingOffers />
                </div>
                <div>
                    <Typography className={classes.sectionHeader}>BRAND OFFERS</Typography>
                    <BrandOffers />
                </div>
                <div>
                    <Typography className={classes.sectionHeader}>CATEGORY OFFERS</Typography>
                    <Grid container spacing={4} className={classes.imageContainer}>
                        {
                            R.map(item => {
                                return (
                                    <Grid item xs={4} key={item.id}>
                                        <img src={item.img} className={classes.image} />
                                    </Grid>
                                )
                            })(TopCategoryData)
                        }
                    </Grid>
                </div>
                <div>
                    <Typography className={classes.sectionHeader}>VALUE PACKAGES</Typography>
                    <ValuePackages />
                </div>
            </Box>
        </Box>
    );
}
export default Offers;