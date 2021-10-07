import * as React from 'react';
import { Grid } from '@mui/material';
import * as R from "ramda";
import Service from './Service';

export default function Services() {
    return (
        <Grid container spacing={4}>
            {
                R.map(service => {
                    return (
                        <Grid item xs={6}>
                            <Service data={service} />
                        </Grid>
                    )
                })(itemData)
            }
        </Grid>
    );
}
const itemData = [
    {
                id: "FringeCut",
                isTrending: false,
                isNew: true,
                serviceName: "Fringe Cut",
                ratings: "4.3",
                reviewCount: 218,
                serviceTime: "30 mins",
                serviceCost: "$3500",
                offer: "10% Off",
                serviceDescription: "Massaging your scalp with hot oil stimulates blood circulation in that area, leading to a better distribution of nutrients to your hair follicles."
            },
            {
                id: "FringeCut",
                isTrending: true,
                isNew: false,
                serviceName: "Fringe Cut",
                ratings: "4.3",
                reviewCount: 218,
                serviceTime: "30 mins",
                serviceCost: "$3500",
                offer: "10% Off",
                serviceDescription: "Massaging your scalp with hot oil stimulates blood circulation in that area, leading to a better distribution of nutrients to your hair follicles."
            },
    
];