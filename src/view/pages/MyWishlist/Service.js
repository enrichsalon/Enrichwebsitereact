import { Button, Card, CardActions, CardContent, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from './Rating';
import Price from './Price';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colors } from "../../../theme/colors";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(theme => ({
    clockBtn: {
        marginTop: "1rem",
        "&.MuiButton-root":{
            fontSize: "12px",
            color: colors.gray1,  
            padding: "0px", 
            "&:hover":{
                backgroundColor:"transparent"
            } 
        }
    },
    closeBtn:{
        "&.MuiButtonBase-root":{
            padding: "0px"

        }
    }
}))
const Service = (props) => {
    const { data } = props;
    console.log("test", data);
    const classes = useStyle();
    return (
        <Box

            fullWidth >
            <Card sx={{
                maxWidth: "100%",
                marginTop: "2rem",
                marginLeft: "10px",
                paddingTop: "10px",
                paddingLeft: "10px",
                paddingRight: "10px",
                marginRight: "10px",

            }} fullWidth>

                <Box sx={{ textAlign: "end" }}>
                    <IconButton>
                        <HighlightOffIcon />
                    </IconButton>
                </Box>

                <Stack direction="row" spacing={1} marginLeft="15px">
                    {
                        data.isTrending && <Chip label="Trending" variant="text" sx={{ color: "#FF004E", bgcolor: "pink", Width: "99" }} />
                    }
                    {
                        data.isNew && <Chip label="New" variant="text" sx={{ color: "#6C63FF", bgcolor: "lightblue", Width: "57" }} />
                    }

                </Stack>
                <CardContent sx={{textAlign: "left"}}>
                    <Typography sx={{ fontSize: 22 }} color="#000000" align={"left"} gutterBottom>
                        <b>{data.serviceName}</b>
                    </Typography>

                    <Rating />
                    <Button className={classes.clockBtn} variant="text" startIcon={<AccessAlarmsIcon />}>
                        {data.serviceTime}
                    </Button>
                    <Grid container spacing={0}>
                        <Grid item xs={7}>
                            <Price price={3500} offer={10} />
                        </Grid>

                        <Grid item xs={5}>
                            <Typography sx={{ fontSize: 12 }} color="#EB6165" align={"right"} gutterBottom>
                                <b>More Details</b>
                                <ArrowForwardIosIcon sx={{ height: "11px", paddingTop: "7px" }} />
                            </Typography>

                        </Grid>
                    </Grid>
                    <Divider sx={{ marginTop: "1rem", marginBottom: "1rem", borderColor: colors.primary }} />

                    <Typography sx={{ fontSize: 14 }} color="#000000" align={"left"} gutterBottom>
                        {data.serviceDescription}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button variant="outlined" sx={{ color: "#EB6165", borderColor: "#EB6165" }} fullWidth><b>Move To Bag</b></Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Service;