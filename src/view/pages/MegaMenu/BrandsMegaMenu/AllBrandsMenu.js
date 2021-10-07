import { Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import * as R from "ramda";
import { makeStyles } from "@mui/styles";
import { All_Brand_Data } from "./TempData";
import { filterAlphaBetically } from "../utils";

const TABS = ["#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const useStyles = makeStyles(theme => ({
    letterTab: {
        "&.MuiButtonBase-root": {
            minWidth: "auto",
            maxWidth: "auto",
            padding:"0.5rem",
        }
    }
}))

const AllBrandsMenu = () => {
    const [value, setValue] = React.useState('#');
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
            >
                {
                    R.map(letter => {

                        return <Tab className={classes.letterTab} value={letter} label={letter} />;

                    })(TABS)

                }
            </Tabs>
            <Box sx={{
                marginTop: "2rem",
            }}>
                <Grid container spacing={1}>
                    {
                        R.map(allBrand => {
                            return (
                                <Grid item xs={3} key={allBrand.id}>

                                    <Typography>
                                        {
                                            allBrand.label
                                        }
                                    </Typography>

                                </Grid>
                            )
                        })(filterAlphaBetically(All_Brand_Data, value))
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default AllBrandsMenu;