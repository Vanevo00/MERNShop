import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import { MaxWidthContainer } from '../atoms/MaxWidthContainer'

const ProductContainer = styled.div`
  width: 250px;
  height: 250px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <Slider {...settings}>
      <div>
        <ProductContainer>
          <h3>1</h3>
        </ProductContainer>
      </div>
      <div>
        <ProductContainer>
          <h3>2</h3>
        </ProductContainer>
      </div>
      <div>
        <ProductContainer>
          <h3>3</h3>
        </ProductContainer>
      </div>
      <div>
        <ProductContainer>
          <h3>4</h3>
        </ProductContainer>
      </div>
      <div>
        <ProductContainer>
          <h3>5</h3>
        </ProductContainer>
      </div>
      <div>
        <ProductContainer>
          <h3>6</h3>
        </ProductContainer>
      </div>
    </Slider>
  )
}

export default ProductSlider
