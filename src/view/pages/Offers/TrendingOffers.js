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
const TrendingOffers = () => {
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
        <Grid item xs={6}>
          <img src={Images.OffersPage.Groupone_Image} className={classes.image} />
        </Grid>

        <Grid item xs={6}>
          <img src={Images.OffersPage.Grouptwo_Image} className={classes.image} />
        </Grid>

        <Grid item xs={6}>
          <img src={Images.OffersPage.Groupthree_Image} className={classes.image} />
        </Grid>
        <Grid item xs={6}>
          <img src={Images.OffersPage.Groupfour_Image} className={classes.image} />
        </Grid>
        <Grid item xs={6}>
          <img src={Images.OffersPage.Groupfive_Image} className={classes.image} />
        </Grid>
        <Grid item xs={6}>
          <img src={Images.OffersPage.Groupsix_Image} className={classes.image} />
        </Grid>
        <Grid item xs={12}>
          <img src={Images.OffersPage.NoPath_Image} className={classes.image} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default TrendingOffers;