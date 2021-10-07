import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import { Box } from '@mui/system';
import * as R from "ramda";
import Images from '../../../asset/images';

const MoreOffersHeader = styled("div")({
    display: "flex",
    paddingTop: "36px",
    paddingBottom: "36px",
});

const useStyle = makeStyles(theme => ({
    cardContainer: {
        maxHeight: "100px",
    },
    MoreOffersContainer: {
        backgroundColor: "#F5F6F8",
        paddingLeft: "200px",
        paddingRight: "200px",
    },
    cardWrapper: {
        paddingBottom: "36px",
    },
}));

const MORE_OFFERS_DATA = [
    {
        id: "First_Img",
        img: Images.saveMoreImage1,
        description:"Use Code APP10"
    },
    {
        id: "Second_Img",
        img: Images.saveMoreImage2,
        description:"When You Sign Up"
    },
    {
        id: "Third_Img",
        img: Images.saveMoreImage3,
        description:"When You Buy Products"
    },
]

const ShopSaveEarnMore = () => {
    const classes = useStyle();
    return (
        <Box className={classes.MoreOffersContainer}>
            <MoreOffersHeader>
                <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>Shop More. Save More. Earn More.</Typography>
            </MoreOffersHeader>
            <Grid container spacing={3} className={classes.cardWrapper} >
                {
                    R.map(offerItem => {
                        return (
                            <Grid item xs={12} md={4} lg={4} key={offerItem.id}>
                                <Card sx={{ maxWidth: "424px" }} >
                                    <CardMedia
                                        component="img"
                                        height="97px"
                                        image={offerItem.img}
                                    />
                                    <CardContent className={classes.cardContainer}>
                                        <Typography variant="body2" color="text.secondary">
                                            {
                                                offerItem.description
                                            }
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })(MORE_OFFERS_DATA)
                }
            </Grid>
        </Box>

    );
};
export default ShopSaveEarnMore;