import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import { Box } from '@mui/system';
import * as R from "ramda";
import Images from '../../../../asset/images';

const ExclusiveHeader = styled("div")({
    display: "flex",
    paddingTop: "36px",
    paddingBottom: "36px",
});

const useStyle = makeStyles(theme => ({
    cardContainer: {
        maxHeight: "100px",

    },

    cardWrapper: {
        "&.MuiPaper-root.MuiCard-root": {
            boxShadow: "none",
            border: "1px solid"
        }
    }
}));
const Top_Brands_Data = [
    {
        id: "Murad_logo",
        img: Images.Brands.Murad_logo,
    },
    {
        id: "Prada_logo",
        img: Images.Brands.Prada_logo,
    },
    {
        id: "Rimmel_logo",
        img: Images.Brands.Rimmel_logo,
    },
    {
        id: "Tresemme_logo",
        img: Images.Brands.Tresemme_logo,
    },
    {
        id: "Benefit_logo",
        img: Images.Brands.Benefit_logo,
    },

    {
        id: "Huda_logo",
        img: Images.Brands.Huda_logo,
    },
    {
        id: "Lorealparis_logo",
        img: Images.Brands.Lorealparis_logo,
    },
    {
        id: "Maybelline_logo",
        img: Images.Brands.Maybelline_logo,
    },
    {
        id: "Murad_logo",
        img: Images.Brands.Murad_logo,
    },
    {
        id: "Benefit_logo",
        img: Images.Brands.Benefit_logo,
    },
    {
        id: "Rimmel_logo",
        img: Images.Brands.Rimmel_logo,
    },
    {
        id: "Benefit_logo",
        img: Images.Brands.Benefit_logo,
    },

    {
        id: "Huda_logo",
        img: Images.Brands.Huda_logo,
    },
    {
        id: "Lorealparis_logo",
        img: Images.Brands.Lorealparis_logo,
    },
]

const TopBrands = () => {
    const classes = useStyle();

    return (
        <Box sx={{
            marginTop: "2rem",
        }}>

            <Grid container spacing={3}>
                {
                    R.map(topBrand => {
                        return (
                            <Grid item xs={3} key={topBrand.id}>

                                <Card className={classes.cardWrapper}
                                >
                                    <CardMedia
                                        component="img"
                                        image={topBrand.img}
                                        sx={{ height: "80%", width: "80%" }}
                                    />
                                </Card>
                            </Grid>
                        )
                    })(Top_Brands_Data)
                }
            </Grid>
        </Box>

    );
};
export default TopBrands;