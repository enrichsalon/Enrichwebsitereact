import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper, Box, Typography } from '@material-ui/core';
import { Grid } from '@mui/material';
import Images from '../../../asset/images';
import svgIcons from '../../../asset/svg';
import styled from "styled-components"

const Text = styled.div`
  color: #2b2a29;
  font-weight: bold;
  padding: 10px 0;
  font-size: 22px;
  margin-top:2rem;
  margin-bottom: 2rem;
  text-align:left;
`

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

const BringTheSalonHome = () => {
    var items = [
        {
            id: "First_Image",
            img: Images.Image_First,
        },
        {
            id: "Second_Image",
            img: Images.Image_Second,
        },
        {
            id: "Third_Image",
            img: Images.Image_Third,
        },
        {
            id: "Forth_Image",
            img: Images.Image_Forth,
        },
        {
            id: "Forth_Image",
            img: Images.Image_Forth,
        },
        {
            id: "First_Image",
            img: Images.Image_First,
        },
        {
            id: "Second_Image",
            img: Images.Image_Second,
        },
        {
            id: "Third_Image",
            img: Images.Image_Third,
        },
        {
            id: "Forth_Image",
            img: Images.Image_Forth,
        },
        {
            id: "Forth_Image",
            img: Images.Image_Forth,
        },
    ]



    return (
        <Box sx={{
            paddingLeft: "200px",
            paddingRight: "200px",
            marginBottom:"3rem"
        }}>
            <Text>Bring The Salon Home</Text>
            
            <Carousel NextIcon={<img src={svgIcons.ForwardIcon} />}
                PrevIcon={<img src={svgIcons.BackwardIcon} />}
                responsive={responsive}
            >
                {
                    items.map((item, i) => <Item key={i} width={"100%"} item={item} />)
                }

            </Carousel>
        </Box>

    )
}

function Item(props) {
    return (
        <Paper>
            <img src={props.item.img} />
        </Paper >
    )
}

export default BringTheSalonHome;