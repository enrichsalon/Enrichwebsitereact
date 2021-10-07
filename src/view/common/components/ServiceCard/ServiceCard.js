import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { colors } from '../../../../theme/colors';

const useStyle = makeStyles(() => ({
    cardTitle: {
        "&.MuiTypography-root": {
            fontSize: "18px",
            fontWeight: "bold"
        }
    },
    cardDescription: {
        "&.MuiTypography-root": {
            fontSize: "16px",
            color: colors.gray2,
            fontStyle: "italic",
        }
    },
    cardPrice: {
        "&.MuiTypography-root": {
            fontSize: "16px",
            color: colors.red1,
        }
    },
    cardContent:{
        "&.MuiCardContent-root ":{
            height: "100px"
        }
    }
}))
const ServiceCard = ({ service }) => {
    const { img, title, description, price, type } = service;
    const classes = useStyle();
    return (
        <Card sx={{ maxWidth: "250px" }} >
            <CardMedia
                component="img"
                height="100%"
                image={img}
                alt="green iguana"
            />
            <CardContent sx={{ textAlign: "left" }} className={classes.cardContent} >
                <Typography className={classes.cardTitle}>{title}</Typography>
                <Typography className={classes.cardDescription}>{description}</Typography>
                <Typography className={classes.cardPrice}>Starting from Rs.{price}</Typography>
            </CardContent>
        </Card>
    )
}

export default ServiceCard;