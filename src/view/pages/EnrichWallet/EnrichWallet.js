import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
import InstantCheckout_Icon from '../../asset/svg/EnrichWallet/InstantCheckout.svg';
import FasterRefunds_Icon from '../../asset/svg/EnrichWallet/FasterRefunds.svg';
import SuperConvenient_Icon from '../../asset/svg/EnrichWallet/SuperConvenient.svg';
import EnrichWallet_Icon from '../../asset/svg/EnrichWallet/EnrichWallet.svg';
import Divider from '@mui/material/Divider';



const EnrichWallet = () => {


    return (

        <Card sx={{ maxWidth: 380, marginLeft: "40%", marginTop: "5%" }}>

            <CardContent sx={{ textAlign: "center" }}>
                <div >
                    <img src={EnrichWallet_Icon} /></div>
                <Typography variant="body1">
                    <b>Enrich Wallet</b>
                </Typography>

                <Typography variant="body2" sx={{ fontSize: 12 }}>
                    A quick and convenient way to pay and get refunds
                </Typography>
                <br />
                <Divider />
                <br />
                <Grid container spacing={12}>
                    <Grid item xs={3} >
                        <img src={InstantCheckout_Icon} />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="body1" sx={{ fontSize: 14, textAlign: "left" }} >
                            <b>Instant Checkout</b>
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: 11, textAlign: "left" }}>
                            Use your Reward Points to pay instantly
                        </Typography>
                    </Grid>
                </Grid>
                <br />

                <Grid container spacing={12}>
                    <Grid item xs={3} >
                        <img src={FasterRefunds_Icon} />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="body1" sx={{ fontSize: 14, textAlign: "left" }} >
                            <b>Faster Refunds</b>
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: 11, textAlign: "left" }}>
                            Get immediate refunds as credits in your Wallet
                        </Typography>
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={12}>
                    <Grid item xs={3} sx={{ marginLeft: "0px" }}>
                        <img src={SuperConvenient_Icon} />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="body1" sx={{ fontSize: 14, textAlign: "left" }} >
                            <b>Super Convenient</b>
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: 11, textAlign: "left" }}>
                            Review your Reward Points and Enrich Cash in one place
                        </Typography>
                    </Grid>
                </Grid>
                <br />
            </CardContent>
        </Card>
    )
};
export default EnrichWallet;