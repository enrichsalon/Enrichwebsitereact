import * as React from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import Images from '../../../asset/images';
import * as R from "ramda";

const MoreOffersHeader = styled("div")({
  display: "flex",
  paddingTop: "36px",
  paddingBottom: "36px",
});

const useStyle = makeStyles(theme => ({
  image: {
    height: "100%",
    width: "100%"
  },
  offersContainer: {
    width: "86%",
    marginTop: "1rem",
    // paddingLeft: "100px",
    // alignSelf:"center",
    display:"inline-block",
    marginBottom: "2rem",
  },
  imageContainer: {
    "&.MuiGrid-root":{
      width: "86%",
    }
  }
}))

const TopCategoryData = [
  {
    id: "First_Img",
    img: Images.bath_body_offer,

  },
  {
    id: "Second_Img",
    img: Images.hair_care_offer,

  },
  {
    id: "Third_Img",
    img: Images.mens_grooming_offer,

  },
];
const TopCategoryOffers = ({ title = "Top Category Offers" }) => {
  const classes = useStyle();
  return (
    <Box className={classes.offersContainer}>
      {
        title && (
          <MoreOffersHeader>
            <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>{title}</Typography>
          </MoreOffersHeader>
        )
      }

      <Grid container spacing={3} className={classes.imageContainer}>
        {
          R.map(item => {
            return (
              <Grid item xs={12} md={4} lg={4} key={item.id}>
                <img src={item.img} className={classes.image} />
              </Grid>
            )
          })(TopCategoryData)
        }
      </Grid>
    </Box>
  )
}

export default TopCategoryOffers;