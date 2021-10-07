import React, { useEffect } from "react";
import { Box, colors, Grid } from '@mui/material';
import svgIcons from "../../../asset/svg";
import { makeStyles } from '@mui/styles';
import Images from "../../../asset/images";
import CarouselComponent from "../../common/components/CarouselComponent/CarouselComponent";
import { connect } from 'react-redux';
import { getProducts } from '../../../actions';
import Products from '../MyWishlist/Products';

const items = [
    {
        id: "First_Image",
        img: Images.carouselImg,
    },
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
    }
}))
let ProductListingPage = ({ getProducts, products }) => {

    useEffect(() => {
        // props.getProducts
        getProducts();
    }, [])

    const classes = useStyle();

    return (
        <Grid container spacing={0} style={{marginTop:"100px", marginBottom:"100px"}}>
            <Grid xs={0} md={1}></Grid>
            <Grid xs={12} md={2}>

            </Grid>
            <Grid xs={12} md={8}>
                <Products page="1" />
            </Grid>
            <Grid xs={0} md={1}></Grid>
        </Grid>
    )

}

const mapStateToProps = (state) => ({
    products: state.products,
})
const mapDispatchToProps = {
    getProducts: getProducts,
};

ProductListingPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListingPage)

export default ProductListingPage;