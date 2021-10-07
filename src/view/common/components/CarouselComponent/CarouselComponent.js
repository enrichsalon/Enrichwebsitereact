import React from 'react';
import * as R from "ramda";
import svgIcons from '../../../../asset/svg';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles(theme=>({
    carouselContainer: {
        boxShadow: "none"
    }
}))
const CarouselComponent = (props) => {
    const classes = useStyle();
    const { itemList } = props;
    return (
        <Carousel NextIcon={<img src={svgIcons.Forward}/>}
            PrevIcon={<img src={svgIcons.Backward} />} className={classes.carouselContainer}>
            {
                R.map((item, i) => <ImageItem key={`${i}-${item.id}`} item={item} />)(itemList)
            }
        </Carousel>
    )
}

const ImageItem = (props) => {
    return (
        <Paper>
            <img src={props.item.img} width={"100%"} height={"100%"} marginTop={"50px"} />
        </Paper>
    )
}

export default CarouselComponent;