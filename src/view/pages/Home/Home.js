import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, colors, Grid, Typography } from '@mui/material';
import svgIcons from "../../../asset/svg";
import { makeStyles } from '@mui/styles';
import Images from "../../../asset/images";
import ShopSaveEarnMore from "./ShopSaveEarnMore";
import MoreOffersForYou from "./MoreOfferForYou";
import TopCategoryOffers from "./TopCategoryOffers";
import CarouselComponent from "../../common/components/CarouselComponent/CarouselComponent";
import { useHistory } from "react-router";
import { RoutePaths } from "../../route/PageRoutesConstant";
import TrendingCategories from "./TrendingCategories";
import BringTheSalonHome from "./BringTheSalonHome";
import TopRecommendations from "./TopRecommendations";
import TrendingOffers from "../Offers/TrendingOffers";
import BeautyServices from "./BeautyServices";
import { MoreOffersData, TopOffersData } from "./MockData";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp"

const items = [
    {
        id: "First_Image",
        img: Images.carouselImg,
    },
]

const membershipOffers = [
    {
        id: "Membership",
        img: Images.EnrichMembership
    }
]

const useStyle = makeStyles(() => ({
    homeContainer: {
        backgroundColor: colors.white,
    },
    serviceHighlightImg: {
        width: "60%"
    },
    imgContainer: {
        marginTop: "2rem",
        marginBottom: "2rem"
    },
    image: {
        width: "95%",
        height: "95%"
    },
    bookAServiceText: {
        "&.MuiTypography-root": {
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            width: "100px",
        }

    },
    rightArrowCircle: {
        color: 'black',
        fontSize: '30px',
        border: '1px solid white',
        borderRadius: '50%',
        backgroundColor: 'white',
    },
}))
const Home = () => {
    const history = useHistory();
    const classes = useStyle();
    return (
        <Box className={classes.homeContainer}>
            <div className={classes.imgContainer}>
                <img src={Images.safetyInstructions} width={"100%"} />
            </div>
            <CarouselComponent itemList={items} />
            <div className={classes.imgContainer}>
                <img src={svgIcons.ServiceHighlights} className={classes.serviceHighlightImg} />
            </div>
            <ShopSaveEarnMore />
            <Box sx={{ paddingTop: "3rem", paddingBottom: "3rem", cursor: "pointer" }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
                        <Card sx={{ maxWidth: 345 }} onClick={() => history.push(RoutePaths.serviceLandingPage)}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={Images.Book_Service}
                                alt="green iguana"
                            />
                            <Box sx={{
                                position: "absolute",
                                marginTop: "-10rem",
                                textAlign: "left",
                                marginLeft: "1rem"
                            }}>
                                <Typography className={classes.bookAServiceText}>BOOK A SERVICE
                                </Typography>
                                <ChevronRightSharpIcon
                                    className={classes.rightArrowCircle}
                                />
                            </Box>
                        </Card>

                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ maxWidth: 345 }} onClick={() => history.push(RoutePaths.productLandingPage)}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={Images.Buy_Product}
                                alt="green iguana"
                            />
                            <Box sx={{
                                position: "absolute",
                                marginTop: "-10rem",
                                textAlign: "left",
                                marginLeft: "1rem"
                            }}>
                                <Typography className={classes.bookAServiceText}>BOOK A SERVICE
                                </Typography>
                                <ChevronRightSharpIcon
                                    className={classes.rightArrowCircle}
                                />
                            </Box>

                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <TrendingCategories />
            <TopCategoryOffers />
            <BringTheSalonHome />
            <TopRecommendations title={"Top Recommendations For You"} />
            <BeautyServices />
            <TopRecommendations title={"Just In. Just Now"} />
            <MoreOffersForYou title={"Top Offers For You"} offerData={TopOffersData} cols={3} />
            <Box sx={{ paddingLeft: "200px", paddingRight: "200px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <img src={Images.OffersPage.soft_Image} className={classes.image} />
                    </Grid>
                    <Grid item xs={6}>
                        <img src={Images.OffersPage.BeautyPackageHome} className={classes.image} width={"50%"} />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ backgroundColor: "#F5F6F8" }}>
                <MoreOffersForYou title={"More Offers For You"} offerData={MoreOffersData} cols={2} />
            </Box>
            <Box sx={{ paddingLeft: "185px", paddingRight: "185px", marginTop: "2rem", marginBottom: "2rem" }}>
                <Grid container sx={3}>
                    <Grid item xs={6}>
                        <img src={Images.OffersPage.Groupone_Image} className={classes.image} />
                    </Grid>

                    <Grid item xs={6}>
                        <img src={Images.OffersPage.Grouptwo_Image} className={classes.image} />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ paddingLeft: "200px", paddingRight: "200px" }}>
                <CarouselComponent itemList={membershipOffers} />
            </Box>
        </Box>
    )
}

export default Home;