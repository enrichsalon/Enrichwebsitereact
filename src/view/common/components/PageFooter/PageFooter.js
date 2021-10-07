import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import svgIcons from '../../../../asset/svg';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles(theme => ({
    footerContainer: {
        // height: "250px",
        backgroundColor: "#2b2a29",
        paddingRight: "200px",
        paddingLeft: "200px",
        textAlign: "left",
        opacity: "0.8"
    },
    gridContainer: {
        height: "80%",
        paddingTop: "3rem"
    },
    icons: {
    
    },
    footerTitles: {
        marginBottom: "2rem",
        fontSize: "14px",
        color: "#FFFFFF"
    },
    appstoreImage:{
        marginTop: "13px"
    },
    socialHandlesContainer:{
        paddingTop: "1rem"
    }
}));

const PageFooter = () => {
    const classes = useStyle();
    return (
        <Box className={classes.footerContainer} fullwidth>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={12} md={3} lg={3}>
                    <Typography className={classes.footerTitles}>
                        Show Us Some Love
                    </Typography>
                    <Grid container spacing={4} className={classes.socialHandlesContainer}>
                        <Grid item xs={2}>
                            <img className={classes.icons} src={svgIcons.InstaLogo} />
                        </Grid>

                        <Grid item xs={2}>
                            <img className={classes.icons} src={svgIcons.Fb_logo} />
                        </Grid>

                        <Grid item xs={2}>
                            <img className={classes.icons} src={svgIcons.YoutubeLogo} />
                        </Grid>

                        <Grid item xs={2}>
                            <img className={classes.icons} src={svgIcons.TwitterLogo} />
                        </Grid>

                        <Grid item xs={2}>
                            <img className={classes.icons} src={svgIcons.PinterestLogo} />
                        </Grid>
                    </Grid>
                    <br />
                </Grid>
                <Grid item xs={12} md={1} lg={1}></Grid>

                <Grid item xs={12} md={5} lg={5}>
                    <Typography className={classes.footerTitles}>
                        Download The Enrich App
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4} lg={4}>
                            <img src={svgIcons.AppStoreLogo} className={classes.appstoreImage}/>
                        </Grid>

                        <Grid item xs={12} md={4} lg={4}>
                            <img src={svgIcons.GooglePlay} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={3} lg={3}>
                    <Typography className={classes.footerTitles}>
                        Payment Method
                    </Typography>
                </Grid>
            </Grid>
            <Typography sx={{ fontSize: 12 }} color="#FFFFFF" gutterBottom>
                © 2021 Enrich, All Rights Reserved.
            </Typography>
        </Box>
    )
}

export default PageFooter;