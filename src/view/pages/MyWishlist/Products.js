import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { connect } from 'react-redux';
import { getProducts } from '../../../actions';

import { Grid,Pagination } from '@mui/material';
import * as R from "ramda";
import Product from './Product';
import Images from '../../../asset/images';


const rendProduct = () => { }
let Products = ({ getProducts, products, page }) => {

    let paginationPages = products ?
    Math.round(products.total_count/products.search_criteria.page_size)
    : null

    return (
        page === "1" ?
            <>
                <Grid container spacing={{ xs: 2, md: 3 }} style={{marginBottom:"50px"}}>
                    {products ?
                        products.items.map(product => {
                            console.log(product)
                            return (
                                <Grid item md={3} xs={12}>
                                    <Product data={product} page="1" />
                                </Grid>
                            )
                        })
                        : null
                    }
                </Grid>
                {/* <Pagination count={paginationPages}/> */}
                <Pagination count={paginationPages} variant="outlined" shape="rounded" />

            </>
            :
            page === "2" &&
            <Grid container spacing={4}>
                {
                    itemData.map(product => {

                        return (
                            <Grid item xs={3}>
                                <Product data={product} page="2" />
                            </Grid>
                        )
                    })

                }
            </Grid>

    );
}

const mapStateToProps = (state) => ({
    products: state.products,
})
const mapDispatchToProps = {
    getProducts: getProducts,
};

Products = connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)

const itemData = [
    {
        id: "Product1",
        img: Images.Wishlist.Product1,
        name: "Born Ethical",
        subtitle: "Skin Comforting Cleanser",
        cost: "",
        offer: "",

    },
    {
        id: "Product2",
        img: Images.Wishlist.Product2,
        name: "Born Ethical",
        subtitle: "Skin Comforting Cleanser",
        cost: "",
        offer: "",
    },
    {
        id: "Product3",
        img: Images.Wishlist.Product3,
        name: "Born Ethical",
        subtitle: "Skin Comforting Cleanser",
        cost: "",
        offer: "",
    },
    {
        id: "Product4",
        img: Images.Wishlist.Product4,
        name: "Born Ethical",
        subtitle: "Skin Comforting Cleanser",
        cost: "",
        offer: "",
    },

];

export default Products;