import React from "react"
import styled from "styled-components"
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp"
import Images from "../../../asset/images";
import * as R from "ramda";
import { Grid } from "@mui/material";

const Container = styled.div`
  background-color: "white";
  display: flex;
  align-items: center;
  padding-left: 200px;
  padding-right: 200px;
  width: fit-content;
  padding-bottom: 2rem;
`

const Text = styled.div`
  color: #2b2a29;
  font-weight: bold;
  padding: 10px 0;
  font-size: 22px;
  margin-top:2rem;
  margin-bottom: 2rem;
  text-align:left;
`
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

`

const Image = styled.img`
  align-items: center;
  display: flex;
  height:100%;
  width:100%;
`

const Cover = styled.div`
  position: relative;
  display: flex;
`
const ServiceTitle = styled.span`
  position: absolute;
  bottom: 70px;
  left: 20px;
  color: white;
  font-weight: bold;
  font-size: 30px;
`
const ServiceNumber = styled.span`
  position: absolute;
  bottom: 40px;
  left: 20px;
  color: white;
  font-size: 25px;
`

const BeautyServicesItems = [{
  img: Images.BeautyServices.Hair,
  titile: "HAIR",
  number: "100+"
}, {
  img: Images.BeautyServices.Skin,
  titile: "SKIN",
  number: "150+"
}, {
  img: Images.BeautyServices.Makeup,
  titile: "MAKEUP",
  number: "10+"
}, {
  img: Images.BeautyServices.HandFeet,
  titile: "HANDS & FEET",
  number: "35+"
}, {
  img: Images.BeautyServices.Spa,
  titile: "SPA",
  number: "25+"
}, {
  img: Images.BeautyServices.Cosmetology,
  titile: "COSMETOLOGY",
  number: "150+"
}, {
  img: Images.BeautyServices.HandFeet,
  titile: "HANDS & FEET",
  number: "35+"
}, {
  img: Images.BeautyServices.Spa,
  titile: "SPA",
  number: "25+"
}]

const BeautyServices = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Beauty Services</Text>
        <Grid container spacing={3}>
          {
            R.map(service => (
              <Grid item xs={3}>
                <Cover>
                  <Image src={service.img} />
                  <ServiceTitle>{service.titile}</ServiceTitle>
                  <ServiceNumber>{service.number} Services</ServiceNumber>
                  <ChevronRightSharpIcon
                    style={{
                      color: 'black',
                      bottom: '30px',
                      right: '30px',
                      position: 'absolute',
                      fontSize: '30px',
                      border: '1px solid white',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                    }}
                  />
                </Cover>
              </Grid>
            ))(BeautyServicesItems)
          }

        </Grid>
      </Wrapper>
    </Container>
  )
}

export default BeautyServices
