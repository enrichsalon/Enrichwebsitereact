import { Button, colors, Grid, Paper, Stack, TextField } from "@mui/material";
import { styled, makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import * as R from "ramda";
import AllBrandsMenu from "./AllBrandsMenu";
import ExclusiveBrands from "./ExclusiveBrands";
import TopBrands from "./TopBrands";
import NewBrands from "./NewBrands";

const BRANDS_TABS = [
    {
        id: "allBrands",
        title: "All Brands"
    },
    {
        id: "exclusive",
        title: "Exclusive"
    },
    {
        id: "topBrands",
        title: "Top Brands"
    },
    {
        id: "newIn",
        title: "New In"
    }
]

const BrandTab = styled(Button)(theme => ({
    width: "100%",

    "&.MuiButton-root": {
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        color: "black",
        border: "1px solid",
        "&:hover": {
            backgroundColor: "black",
            color: "#FFF",
            border: "1px solid"
        }
    }
}))

const useStyles = makeStyles(theme => ({
    brandTab: {
        width: "100%",

        "&.MuiButton-root": {
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            color: "black",
            border: "1px solid"
        }
    },
    tabContainer: {
    },
    serachBarContainer: {
        marginBottom: "2rem",
        marginRight:"1rem"
    },
    tabStack: {
        marginLeft: "2rem",
        marginRight: "3rem",
        overflow: "scroll"
    },
    activeTab: {
        "&.MuiButton-root": {
            backgroundColor: "black",
            color: "#FFF",
            border: "1px solid"
        }
    }
}));

const TAB_RENDERER = {
    allBrands: AllBrandsMenu,
    exclusive: ExclusiveBrands,
    topBrands: TopBrands,
    newIn: NewBrands,
}
const BrandsMegaMenu = () => {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState("allBrands");

    const Renderer = TAB_RENDERER[currentTab];
    return (
        <Box sx={{
            width: "1000px",
            height: "450px",
            padding: "1rem",
        }}>
            <Grid container fullWidth>
                <Grid item xs={12} md={3} lg={3} className={classes.tabContainer}>
                    <Box className={classes.serachBarContainer}>
                        <TextField placeholder="search" variant="standard" fullWidth />
                    </Box>
                    <Stack spacing={2} className={classes.tabStack}>
                        {
                            R.map(item => (<BrandTab
                                key={item.id}
                                variant="outlined"
                                className={item.id === currentTab ? classes.activeTab : ""}
                                onClick={() => setCurrentTab(item.id)}
                            >{item.title}</BrandTab>))(BRANDS_TABS)
                        }
                    </Stack>
                </Grid>
                <Grid item xs={12} md={9} lg={9}>
                        <Renderer />
                </Grid>
            </Grid>
        </Box>
    )
};

export default BrandsMegaMenu;