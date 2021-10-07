import * as React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';


import { makeStyles } from '@mui/styles';
import Images from '../../../asset/images';

const useStyle = makeStyles(theme => ({
  image: {
    height: "100%",
    width: "100%"
  }
}))
const ValuePackages = () => {
  const classes = useStyle();
  return (
    <Box
      sx={{
        paddingTop: "1rem",
        paddingBottom: "4rem"
      }}
      fullwidth>
      <Grid container spacing={3} sx={{
        width: "100%"

      }}>
        <Grid item xs={12}>
          <img src={Images.OffersPage.salon_Image} className={classes.image} />
        </Grid>

        <Grid item xs={6}>
          <img src={Images.OffersPage.hair_Image} className={classes.image} />
        </Grid>

        <Grid item xs={6}>
          <img src={Images.OffersPage.care_Image} className={classes.image} />
        </Grid>

      </Grid>
    </Box>
  )
}

export default ValuePackages;