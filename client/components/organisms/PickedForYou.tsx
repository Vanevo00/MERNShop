import React from 'react'
import { MaxWidthContainer } from '../atoms/MaxWidthContainer'
import SectionHeading from '../atoms/SectionHeading'
import styled from 'styled-components'
import ProductCarousel from '../molecules/ProductCarousel'

const HeadingContainer = styled(MaxWidthContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CarouselContainer = styled(MaxWidthContainer)`
  margin-top: 2rem;
  padding-left: 40px;
  padding-right: 15px;
`

const PickedForYou = () => {
  return (
    <>
      <HeadingContainer>
        <SectionHeading>Vybráno pro vás</SectionHeading>
        <CarouselContainer>
          <ProductCarousel/>
        </CarouselContainer>
      </HeadingContainer>

    </>
  )
}

export default PickedForYou
