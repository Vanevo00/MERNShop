import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

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
  top: 17px;
`

const WhiteBackground = styled.div`
  height: 100%;
  width: 400px;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  z-index: 2;
`

const Heading = styled.h2`
  font-size: ${props => props.theme.fontSizes.medium};
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
