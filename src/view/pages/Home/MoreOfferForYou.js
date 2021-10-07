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
    moreOffersContainer: {
        backgroundColor: "transparent",
        paddingLeft: "200px",
        paddingRight: "200px",
    },
    cardWrapper: {
        paddingBottom: "36px",
    }
}));

const MoreOffersForYou = ({offerData,title, cols}) => {
    const classes = useStyle();

    return (
        <Box className={classes.moreOffersContainer}>
            <MoreOffersHeader>
                <Typography sx={{ fontSize: "22px", fontWeight: "bold"}}>{title}</Typography>
            </MoreOffersHeader>
            <Grid container spacing={3} className={classes.cardWrapper} >
                {
                    R.map(offerItem => {
                        return (
                            <Grid item xs={12} lg={2} md={2} key={offerItem.id}>
                                <Card sx={{ maxWidth: "200px" }} >
                                    <CardMedia
                                        component="img"
                                        height="282px"
                                        image={offerItem.img}
                                    />
                                    <CardContent className={classes.cardContainer}>
                                        <Typography variant="body2" color="text.secondary">
                                            {
                                                offerItem.title
                                            }
                                        </Typography>
                                        <Typography variant="subtitle2">{offerItem.subTitle}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })(offerData)
                }
            </Grid>
        </Box>

    );
};
export default MoreOffersForYou;