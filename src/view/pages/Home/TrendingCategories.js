import * as React from 'react';
import Images from '../../../asset/images';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import * as R from "ramda";

const useStyle = makeStyles(theme => ({
    imageListItemBarContainer: {
        "&.MuiImageListItemBar-root": {
            height: "100%",
        },

        "&.MuiImageListItemBar-titleWrap": {
            color: "black"
        }
    }
}))
const TrendingCategories = () => {
    const classes = useStyle();
    return (
        <Box sx={{ paddingLeft: "200px", paddingRight: "200px", textAlign:"left", paddingBottom:"3rem" }}>
            <Typography sx={{ fontSize: "22px", fontWeight: "bold", marginBottom:"2rem" }}>Trending Categories</Typography>
            <Grid container spacing={3}>
                {
                    R.map(item => {
                        return (
                            <Grid item xs={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        image={item.img}
                                        alt={item.title}
                                    />
                                    <Typography sx={{
                                        position: "absolute",
                                        marginTop: "-4rem",
                                        width: "125px",
                                        marginLeft:"1rem"
                                    }}>{item.title}</Typography>
                                </Card>
                            </Grid>
                        )
                    })(itemData)
                }
            </Grid>
        </Box>
    );
}

const itemData = [
    {
        img: Images.trendingCategories.SulphateFreeShampoo,
        title: 'Sulphate Free Shampoos',
    },
    {
        img: Images.trendingCategories.AntiHairFall,
        title: 'Anti-Hairfall Superstars',
    },
    {
        img: Images.trendingCategories.SkinBrightening,
        title: 'Skin Brightening Creams',
    },
    {
        img: Images.trendingCategories.HairRemoval,
        title: 'Hair Removal Services',
    },
    {
        img: Images.trendingCategories.OilySkin,
        title: 'Oily Skin Formulas',
    },
    {
        img: Images.trendingCategories.ManicurePedicure,
        title: 'Manicure & Pedicure',
    },

];

export default TrendingCategories;