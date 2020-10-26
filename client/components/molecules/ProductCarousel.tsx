import React, { FunctionComponent } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import CarouselArrow from '../atoms/CarouselArrow'

const CarouselContainer = styled.div`
  width: 98%;
`

const ProductContainer = styled.div`
  width: 250px;
  height: 250px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`

const ProductCarousel: FunctionComponent = ({ children }) => {
  const settings = {
    variableWidth: true,
    speed: 500,
    nextArrow: <CarouselArrow/>,
    prevArrow: <CarouselArrow pointingLeft={true} />
  }

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {children}
      </Slider>
    </CarouselContainer>
  )
}

export default ProductCarousel
