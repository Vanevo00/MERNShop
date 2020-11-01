import React from 'react'
import { MaxWidthContainer } from '../atoms/MaxWidthContainer'
import SectionHeading from '../atoms/SectionHeading'
import styled from 'styled-components'
import ProductCarousel from '../molecules/ProductCarousel'
import ProductItem from '../molecules/ProductItem'
import { mockedJewelry } from '../../common/constants/mocks'
import { ProductItem as ProductItemType } from '../../../types/ProductItem'

const HeadingContainer = styled(MaxWidthContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .slick-slide {
   outline: none;
  }
`

const CarouselContainer = styled(MaxWidthContainer)`
  margin-top: 2rem;
  cursor: pointer;
  padding-left: 1%;
`

const PickedForYou = () => {
  return (
    <>
      <HeadingContainer>
        <SectionHeading>Vybráno pro vás</SectionHeading>
        <CarouselContainer>
          <ProductCarousel>
            {mockedJewelry.map((item: ProductItemType) => <ProductItem item={item} key={item.slug} />)}
          </ProductCarousel>
        </CarouselContainer>
      </HeadingContainer>
    </>
  )
}

export default PickedForYou
