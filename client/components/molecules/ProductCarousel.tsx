import React, { FunctionComponent } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CarouselArrow from '../atoms/CarouselArrow'
import sizes from '../../common/constants/sizes'

const ProductCarousel: FunctionComponent = ({ children }) => {
  const settings = {
    variableWidth: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <CarouselArrow/>,
    prevArrow: <CarouselArrow pointingLeft={true} />,
    responsive: [
      {
        breakpoint: sizes.large,
        settings: {
          arrows: false
        }
      }
    ]
  }

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}

export default ProductCarousel
