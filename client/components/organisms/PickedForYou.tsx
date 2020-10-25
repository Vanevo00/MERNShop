import React from 'react'
import { MaxWidthContainer } from '../atoms/MaxWidthContainer'
import SectionHeading from '../atoms/SectionHeading'
import styled from 'styled-components'
import ProductSlider from '../molecules/ProductSlider'

const HeadingContainer = styled(MaxWidthContainer)`
  justify-content: center;
`

const SliderContainer = styled(MaxWidthContainer)`
  margin-top: 2rem;
`

const PickedForYou = () => {
  return (
    <>
      <HeadingContainer>
        <SectionHeading>Vybráno pro vás</SectionHeading>
      </HeadingContainer>
      <SliderContainer>
        <ProductSlider/>
      </SliderContainer>
    </>
  )
}

export default PickedForYou
