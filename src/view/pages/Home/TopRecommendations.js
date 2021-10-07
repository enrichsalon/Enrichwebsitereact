import * as React from 'react';
import { Box, Typography, Card } from '@mui/material';
import * as R from "ramda";
import Images from '../../../asset/images';
import Product from '../MyWishlist/Product';
import svgIcons from '../../../asset/svg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { colors } from '../../../theme/colors';
import { makeStyles } from '@mui/styles';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const useStyle = makeStyles(theme => ({
    container:{
        paddingRight: "200px", paddingLeft: "200px", textAlign: "left", paddingBottom: "4rem",
        paddingTop:"2rem",
        backgroundColor: colors.gray5
    }
}))
export default function TopRecommendations({title}) {
    const classes = useStyle();
    return (
        <Box className={classes.container}>
            <Typography sx={{ fontSize: "22px", fontWeight: "bold", marginBottom:"2rem" }}>{title}</Typography>
            <Carousel NextIcon={<img src={svgIcons.ForwardIcon} />}
                PrevIcon={<img src={svgIcons.BackwardIcon} />}
                responsive={responsive}
            >
                {
                    R.map(data => {
                        return (
                            <Card>
                                <Product data={data} showLike={true} showClose={false} showMoveToBag={false} />

                            </Card>
                        )
                    })(itemData)
                }
            </Carousel>


        </Box>
    );
}

const itemData = [
    {
        id: "top1",
        img: Images.Wishlist.Product1,
        title: "Born Ethical",
        subtitle: "Skin Comforting Cleanser",
        cost: "",
        offer: "",

    },
    {
        id: "top2",
        img: Images.Products.OrderProduct1,
        title: "Mon Amour",
        subtitle: "Splash Nail Enamel",
        cost: "",
        offer: "",
    },
    {
        id: "top3",
        img: Images.Wishlist.Product1,
        title: "Born Ethical",
        subtitle: "Skin Comforting Cleanser",
        cost: "",
        offer: "",
    },
    {
        id: "top4",
        img: Images.Products.OrderProduct1,
        title: "Mon Amour",
        subtitle: "Splash Nail Enamel",
        cost: "",
        offer: "",
    },
    {
        id: "top1",
        img: Images.Wishlist.Product1,
        title: "Born Ethical",
        subtitle: "Skin Comforting Cleanser",
        cost: "",
        offer: "",

    },
    {
        id: "top2",
        img: Images.Products.OrderProduct1,
        title: "Mon Amour",
        subtitle: "Splash Nail Enamel",
        cost: "",
        offer: "",
    },
    {
        id: "top3",
        img: Images.Wishlist.Product1,
        title: "Born Ethical",
        subtitle: "Skin Comforting Cleanser",
        cost: "",
        offer: "",
    },
    {
        id: "top4",
        img: Images.Products.OrderProduct1,
        title: "Mon Amour",
        subtitle: "Splash Nail Enamel",
        cost: "",
        offer: "",
    },

];
