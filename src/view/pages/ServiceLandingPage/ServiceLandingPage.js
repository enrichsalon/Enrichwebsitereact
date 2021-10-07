import { ColorLensOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import Images from "../../../asset/images";
import CarouselComponent from "../../common/components/CarouselComponent/CarouselComponent";
import ServiceCard from "../../common/components/ServiceCard/ServiceCard";
import ServiceCardList from "../ServiceCardList/ServiceCardList";
import ServiceDropDown from "./ServiceDropDown";
import { HairServices } from "./ServiceLandingMockData";
import { SkinServices } from "./ServiceLandingMockData";
import { colors } from "../../../theme/colors";

const items = [
    {
        id: "First_Image",
        img: Images.ServiceLanding.ServiceLandingImg1,
    },
]

const useStyle = makeStyles(() => ({
    image: {
        width: "100%",
        height: "100%"
    },
}))
const ServiceLandingPage = () => {
    const classes = useStyle();
    return (
        <Box>
            <CarouselComponent itemList={items} />
            <ServiceDropDown />
            <Box sx={{ paddingLeft: "200px", paddingRight: "200px" }}>
                <img src={Images.OffersPage.salon_Image} className={classes.image} />
            </Box>
            <ServiceCardList serviceList={HairServices} title={"Popular Hair Services"} />
            <Box sx={{ paddingLeft: "200px", paddingRight: "200px" }}>
                <img className={classes.image} src={Images.ServiceLanding.ServiceLandingImg2} />
            </Box>
            <ServiceCardList serviceList={SkinServices} title={"Popular Skin Services"} />
            <Box sx={{ paddingLeft: "200px", paddingRight: "200px" }}>
                <img className={classes.image} src={Images.ServiceLanding.ServiceLandingImg2} />
            </Box>

        </Box>
    )
}

export default ServiceLandingPage;