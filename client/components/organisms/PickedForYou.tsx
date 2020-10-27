import React from 'react'
import { MaxWidthContainer } from '../atoms/MaxWidthContainer'
import SectionHeading from '../atoms/SectionHeading'
import styled from 'styled-components'
import ProductCarousel from '../molecules/ProductCarousel'
import ProductItem from '../molecules/ProductItem'
import { mockedJewelry } from '../../common/constants/mocks'
import sizes from '../../common/constants/sizes'

const HeadingContainer = styled(MaxWidthContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CarouselContainer = styled(MaxWidthContainer)`
  margin-top: 2rem;
  cursor: pointer;
  padding: 0 40px;
  
  @media screen and (max-width: ${sizes.large}px) {
    padding: 0 10px;
  }
`

const PickedForYou = () => {
  return (
    <>
      <HeadingContainer>
        <SectionHeading>Vybráno pro vás</SectionHeading>
        <CarouselContainer>
          <ProductCarousel>
            {mockedJewelry.map((item) => <ProductItem name={item.name} mainImage={item.mainImage}/>)}
          </ProductCarousel>
        </CarouselContainer>
      </HeadingContainer>
    </>
  )
}

export default PickedForYou
