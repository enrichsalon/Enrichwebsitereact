import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import * as R from "ramda";
import ServiceCard from "../../common/components/ServiceCard/ServiceCard";
import { Box } from "@mui/system";

const ServiceCardList = ({ serviceList, title }) => {
    return (
        <Box sx={{paddingLeft:"200px", paddingRight:"200px", marginTop:"2rem", marginBottom:"2rem"}}>
            <Grid container spacing={3}>
                <Grid item xs={10} sx={{textAlign:"left"}}>
                <Typography>{title}</Typography>

                </Grid>
                <Grid item xs={2} sx={{textAlign:"right"}}>
                    <Button variant="text">View All</Button>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                {
                    R.map(service => {
                        return (
                            <Grid item xs={3}>
                                <ServiceCard service={service} />
                            </Grid>
                        )
                    })(serviceList)
                }
            </Grid>
        </Box>
    )
}

export default ServiceCardList;