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
}));

const BrandOffers = () => {
  const classes = useStyle();
  return (
    <Box
      sx={{
        marginTop: "1rem ",
      }}
      fullwidth>
      <Grid container spacing={6} sx={{
        width: "100%"

      }}>
        <Grid item xs={12}>
          <img src={Images.OffersPage.be_Image} className={classes.image} />
        </Grid>

        <Grid item xs={6}>
          <img src={Images.OffersPage.cream_Image} className={classes.image} />
        </Grid>

        <Grid item xs={6}>
          <img src={Images.OffersPage.themane_Image} className={classes.image} />
        </Grid>
        <Grid item xs={6}>
          <img src={Images.OffersPage.soft_Image} className={classes.image} />
        </Grid>
        <Grid item xs={6}>
          <img src={Images.OffersPage.silky_Image} className={classes.image} />
        </Grid>
        <Grid item xs={3}>
          <img src={Images.OffersPage.cheryl_Image} className={classes.image} />
        </Grid>
        <Grid item xs={3}>
          <img src={Images.OffersPage.Root_Image} className={classes.image} />
        </Grid>
        <Grid item xs={3}>
          <img src={Images.OffersPage.deep_Image} className={classes.image} />
        </Grid>
        <Grid item xs={3}>
          <img src={Images.OffersPage.mask_Image} className={classes.image} />
        </Grid>
        <Grid item xs={12}>
          <img src={Images.OffersPage.decleor_Image} className={classes.image} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default BrandOffers;