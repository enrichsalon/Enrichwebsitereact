import React from 'react';
import { Card, Divider, FormControl, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import svgIcons from '../../../../asset/svg';
import { colors } from '../../../../theme/colors';
import { makeStyles } from '@mui/styles';

const DividerStyle = {
    borderColor: colors.gray3,
    marginTop: "1rem",
    marginBottom: "1rem"
};

const useStyle = makeStyles(theme => ({
    icon: {
        height: "25px",
        width: "25px"
    },
    iconContainer: {
        marginBottom: "1rem"
    },
    emailInput: {
        background: colors.white,
        border: "1px solid",
    },
    signUpBtn: {
        width: "100%",
        "&.MuiButton-root": {
            color: colors.white,
            border: `1px solid ${colors.white}`
        }
    }
}))
const ContactUs = () => {
    const classes = useStyle();
    return (
        <Box
            sx={{
                // maxHeight: 300,
                bgcolor: colors.gray2,
                marginTop: "1rem ",
                paddingLeft: "200px",
                paddingRight: "200px",
                paddingTop: "2rem",
            }}
            fullwidth>
            <Grid container spacing={3} >
                <Grid item xs={12} md={6} lg={6} sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Card sx={{ maxWidth: 550, backgroundColor: "black", textAlign: "left" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 22 }} color="#FFFFFF" gutterBottom>
                                Stay In The Know.
                            </Typography>

                            <Typography sx={{ fontSize: 18 }} color="#FFFFFF" gutterBottom>
                                <h6> Sign Up For Enrich Emails</h6>
                            </Typography>
                            <FormControl sx={{ width: "100%", marginBottom: "1rem" }}>
                                <TextField id="email" label="Enter Your Email Address " variant="outlined" name="emailid" className={classes.emailInput} />
                            </FormControl>

                            <Button variant="outlined" className={classes.signUpBtn}>SIGN UP</Button>

                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4} lg={4} sx={{ paddingRight: "5rem" }}>
                    <Grid container spacing={2} className={classes.iconContainer}>
                        <Grid item xs={1.8}>
                            <img className={classes.icon} src={svgIcons.MessageLogo} />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography sx={{ fontSize: 10 }} color="#FFFFFF" gutterBottom>
                                Chat With Our Beauty Advisors
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.iconContainer}>
                        <Grid item xs={12} md={2} lg={2}>
                            <img className={classes.icon} src={svgIcons.BookServiceLogo} />
                        </Grid>
                        <Grid item xs={12} lg={6} md={6}>
                            <Typography sx={{ fontSize: 10 }} color="#FFFFFF" gutterBottom>
                                Book A Beauty Service
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={DividerStyle} />
                    <Grid item xs={12} md={7} lg={7}>
                        <Typography sx={{ fontSize: 24 }} color="#FFFFFF" gutterBottom>
                            Get In Touch
                        </Typography>
                    </Grid>
                    <Grid container spacing={2} className={classes.iconContainer}>
                        <Grid item xs={12} md={2} lg={2}>
                            <img className={classes.icon} src={svgIcons.WhatsappLogo} />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography sx={{ fontSize: 10 }} color="#FFFFFF" gutterBottom>
                                9339-777-777
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.iconContainer}>
                        <Grid item xs={12} md={2} lg={2}>
                            <img className={classes.icon} src={svgIcons.PhoneLogo} />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Typography sx={{ fontSize: 10 }} color="#FFFFFF" gutterBottom>
                                1800-266-5300
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.iconContainer}>
                        <Grid item xs={12} md={2} lg={2}>
                            <img className={classes.icon} src={svgIcons.EmailLogo} />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} >
                            <Typography sx={{ fontSize: 10 }} color="#FFFFFF" gutterBottom>
                                cusomercare@enrichsalon.com
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={2} lg={2} sx={{
                    textAlign: "initial"
                }}>
                    <Typography sx={{ fontSize: 10 }} color="#FFFFFF" gutterBottom>
                        About Enrich
                    </Typography>
                    <Divider sx={DividerStyle} />
                    <Typography sx={{ fontSize: 10 }} color="#FFFFFF" gutterBottom>
                        Returns & Cancellations
                    </Typography>
                </Grid>

            </Grid>
        </Box >
    )
}
export default ContactUs;

