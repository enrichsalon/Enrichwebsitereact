import styled from '@emotion/styled'
import { KeyboardArrowDown } from '@mui/icons-material'
import React from 'react'
import svgIcons from '../../../asset/svg'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  margin: 20px;
  position: relative;
`

const TitleWrap = styled.div`
  width: 300px;
  background-color: #2b2a29;
  color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
`

const Title = styled.div`
  color: white;
  padding: 20px;
  position: relative;
`

const Subtitle = styled.div`
  background-color: #f2f2f2;
  border: 1px solid;
  color: white;
  margin: 1px 0;
  padding: 10px;
  display: flex;
  position: relative;
`

const Text = styled.div`
  color: black;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 75px;
`

const Logo = styled.img`
  margin-left: 15px;
`

const ServiceDropDown = () => {
  return (
    <Container>
      <Wrapper>
        <TitleWrap>
          <Title>What Are You In The Mood For? </Title>
          <KeyboardArrowDown
            style={{
              color: 'red',
              position: 'absolute',
              right: '20px',
              top: '10px',
              fontSize: '40px',
            }}
          />
        </TitleWrap>
        <Subtitle>
          <Logo src={svgIcons.serviceLanding.hairColor} />
          <Text>Hair Color</Text>
        </Subtitle>
        <Subtitle>
          <Logo src={svgIcons.serviceLanding.hairCut} />
          <Text>Hair Cut</Text>
        </Subtitle>
        <Subtitle>
          <Logo src={svgIcons.serviceLanding.facial} />
          <Text>Hair Cut</Text>
        </Subtitle>
        <Subtitle>
          <Logo src={svgIcons.serviceLanding.more} />
          <Text>Facial</Text>
        </Subtitle>
        <Subtitle>
          <Logo src={svgIcons.serviceLanding.manicure} />
          <Text>More</Text>
        </Subtitle>
      </Wrapper>
      <Wrapper>
        <TitleWrap>
          <Title>Book An Appointment</Title>
          <KeyboardArrowDown
            style={{
              color: 'red',
              position: 'absolute',
              right: '20px',
              top: '10px',
              fontSize: '40px',
            }}
          />
        </TitleWrap>
        <Subtitle>
          <Logo src={svgIcons.serviceLanding.salonservice} />
          <Text>Salon Service</Text>
        </Subtitle>
        <Subtitle>
          <Logo src={svgIcons.serviceLanding.homeservice} />
          <Text>Home Service</Text>
        </Subtitle>
      </Wrapper>
    </Container>
  )
}

export default ServiceDropDown;
