import { Button, Card, CardActions, CardContent, CardMedia, Typography, Box, IconButton } from "@mui/material";
import Rating from "./Rating";
import Price from "./Price";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import React from "react";
import { FavoriteBorderOutlined } from "@mui/icons-material";

const Product = (props) => {
    const { data,page, showClose = true, showLike = false, showMoveToBag = true } = props;
    console.log("test", data);

    function isCherries(fruit) {
        return fruit.attribute_code === 'special_price'
    }

    return (
        <Card sx={{ textAlign: "left" }}>
            <Box sx={{ textAlign: "end" }}>
                <IconButton>
                    {page === "1" ?
                        <FavoriteBorder />
                        :
                        page === "2" && <HighlightOffIcon />
                    }
                </IconButton>

            </Box>
            {page == "1" ?
                data.media_gallery_entries.length > 0 ?
                    <CardMedia
                        component="img"
                        height="100%"
                        width="100%"

                        image={data.extension_attributes.media_url + data.media_gallery_entries[0].file}
                        alt={data.id}
                    />
                    :
                    <CardMedia
                        component="img"
                        height="100%"
                        width="100%"

                        image={"https://stagecdn.azureedge.net/media/catalog/product/placeholder/default/image_2019_11_15T10_01_23_655Z_1.png"}
                        alt={data.id}
                    />
                :
                <CardMedia
                    component="img"
                    height="100%"
                    width="100%"

                    image={data.img}
                    alt={data.id}
                />
            }
            <CardContent>
                <Rating />
                <Typography sx={{ maxWidth: 276 }}><b>{data.name}</b> {data.subtitle}</Typography>
                {page === "1" ?
                    <Price
                        price={data.price}
                        offer={Math.round(((data.price - (data.custom_attributes.find(isCherries).value)) / data.price) * 100)}
                        specialPrice={data.custom_attributes.find(isCherries).value} />
                    :
                    <Price
                        price={1000}
                        offer={10}
                        specialPrice={900} />
                }
            </CardContent>
            {
                !showMoveToBag && <br />
            }
            {
                showMoveToBag && (
                    <CardActions>
                        <Button variant="outlined" fullWidth>Move To Bag</Button>
                    </CardActions>
                )
            }

        </Card>
    )
}

export default Product;