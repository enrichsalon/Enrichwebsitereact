import { Typography } from "@mui/material";
import React from "react";
import { Grid } from '@mui/material';
import { Box } from '@mui/system';


const PriceTag = ({ price, offer,specialPrice }) => {
    const offerPrice = parseInt(price) - (parseInt(price)*parseInt(offer))/100;
    // offerPrice= price - ( price*offer/100 );

    return    (
        <Box
            sx={{
                height: 10,
                marginTop: "1rem ",
                display: "flex",
                alignItems: "center",
            }}>
            <Grid container spacing={1}>
                <Grid item xs={0}>
                    <Typography sx={{ fontSize: 14 }} color="#000000" gutterBottom>
                        ₹ {`${specialPrice} `}
                    </Typography>
                </Grid>

                <Grid item xs={0}>
                    <Typography sx={{ fontSize: 14, textDecoration: "line-through" }} color="#000000"
                        gutterBottom>
                        ₹{` ${price}`}
                    </Typography>
                </Grid>
                <Grid item xs={0}>
                    <Typography sx={{ fontSize: 14, fontWeight: "bold" }} color="red" gutterBottom>
                        {` ${offer}%off`}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
};
export default PriceTag;