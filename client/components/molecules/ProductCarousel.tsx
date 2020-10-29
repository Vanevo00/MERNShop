import React, { FunctionComponent } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CarouselArrow from '../atoms/CarouselArrow'
import sizes from '../../common/constants/sizes'

const ProductCarousel: FunctionComponent = ({ children }) => {
  const settings = {
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CarouselArrow/>,
    prevArrow: <CarouselArrow pointingLeft={true} />,
    responsive: [
      {
        breakpoint: sizes.large,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: sizes.medium,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      },
    ]
  }

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}

export default ProductCarousel
