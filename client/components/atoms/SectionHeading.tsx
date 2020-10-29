import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import sizes from '../../common/constants/sizes'

const SectionContainer = styled.div`
  width: 98%;
  height: 25px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.mainFontColor};
  position: absolute;
  top: 14px;
  
  @media screen and (max-width: ${sizes.medium}px) {
    top: 12px;
  }
`

const WhiteBackground = styled.div`
  height: 100%;
  width: 40rem;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  z-index: 2;
  
  @media screen and (max-width: ${sizes.large}px) {
    width: 30rem;
  }
  
  @media screen and (max-width: ${sizes.medium}px) {
    width: 20rem;
  }
`

const Heading = styled.h2`
  font-size: ${props => props.theme.fontSizes.medium};
  
  @media screen and (max-width: ${sizes.medium}px) {
    font-size: ${props => props.theme.fontSizes.small};
  }
`

const SectionHeading: FunctionComponent = ({ children }) => {
  return (
    <SectionContainer>
      <Line/>
      <WhiteBackground>
        <Heading>{children}</Heading>
      </WhiteBackground>
    </SectionContainer>
  )
}

export default SectionHeading
