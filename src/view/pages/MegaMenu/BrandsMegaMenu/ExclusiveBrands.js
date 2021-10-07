import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
        paddingBottom: "36px",
        height: "80%",
        width: "250px",
        "&.MuiPaper-root.MuiCard-root": {
            boxShadow: "none"
        }
    }
}));
const Exclusive_Data = [
    {
        "label": "Amazon Series",
        "code": "5766",
        "value": "5766",
        "swatch_image_url": "https://stage.enrichbeauty.com/media/catalog/tmp/category/BE_3x_3x_2.png",
        "concern": "5766_concern",
        "use_for_custom_brand_landing": false
    },
    {
        "label": "Cheryl's",
        "code": "cheryls",
        "value": "cheryls",
        "swatch_image_url": "https://stage.enrichbeauty.com/media/catalog/tmp/category/Cheryls_3x_3x_1.png",
        "concern": "cheryls_concern",
        "use_for_custom_brand_landing": true
    },
    {
        "label": "Decleor",
        "code": "5740",
        "value": "5740",
        "swatch_image_url": "https://stage.enrichbeauty.com/media/catalog/tmp/category/Declore_3x_3x.png",
        "concern": "5740_concern",
        "use_for_custom_brand_landing": false
    },
    {
        "label": "Human + Kind",
        "code": "5776",
        "value": "5776",
        "swatch_image_url": "https://stage.enrichbeauty.com/media/catalog/tmp/category/Group_10101_3x_3x.png",
        "concern": "5776_concern",
        "use_for_custom_brand_landing": false
    },
    {
        "label": "Kerastase",
        "code": "kerastase",
        "value": "kerastase",
        "swatch_image_url": "https://stage.enrichbeauty.com/media/catalog/tmp/category/TopBrands_Kerastase_3x.png",
        "concern": "kerastase_concern",
        "use_for_custom_brand_landing": true
    },
    {
        "label": "L'Oreal Professionnel",
        "code": "loreal",
        "value": "loreal",
        "swatch_image_url": "https://stage.enrichbeauty.com/media/catalog/tmp/category/TopBrands_Loreal_3x.png",
        "concern": "loreal_concern",
        "use_for_custom_brand_landing": true
    },
    {
        "label": "L'Oreal Professionnel",
        "code": "loreal",
        "value": "loreal",
        "swatch_image_url": "https://stage.enrichbeauty.com/media/catalog/tmp/category/Kerastase_3x_3x_4.png",
        "concern": "loreal_concern",
        "use_for_custom_brand_landing": true
    },
    {
        "label": "Naturica",
        "code": "5758",
        "value": "5758",
        "swatch_image_url": "https://stage.enrichbeauty.com/media/catalog/tmp/category/Naturica_2x.png",
        "concern": "5758_concern",
        "use_for_custom_brand_landing": false
    },
    {
        "label": "Thalgo",
        "code": "5762",
        "value": "5762",
        "swatch_image_url": "https://stage.enrichbeauty.com/media/catalog/tmp/category/TopBrands_Thalgo_3x.png",
        "concern": "5762_concern",
        "use_for_custom_brand_landing": false
    }
]

const ExclusiveBrands = () => {
    const classes = useStyle();


    return (
        <Box sx={{
            marginTop: "2rem",
        }}>

            <Grid container spacing={3}>
                {
                    R.map(offerItem => {
                        return (
                            <Grid item xs={3} key={offerItem.code}>
                                {/* <Typography>
                                    {offerItem.label}
                                </Typography> */}
                                <Card >
                                    <CardMedia className={classes.cardWrapper}
                                        component="img"
                                        height="150px"
                                        image={offerItem.swatch_image_url}
                                    />
                                </Card>
                            </Grid>
                        )
                    })(Exclusive_Data)
                }
            </Grid>
        </Box>

    );
};
export default ExclusiveBrands;