import React, { MouseEvent } from 'react'
import styled from 'styled-components'

interface Props {
  style?: any
  pointingLeft?: boolean
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

const ArrowImage = styled.img`
  height: 30px;
`

const LeftArrowImage = styled(ArrowImage)`
 transform: rotate(180deg);
`

const arrowStyle = {
  position: 'absolute',
  top: '80px',
  zIndex: '1'
}

const leftArrowStyle = {
  ...arrowStyle,
  left: '-30px',
}

const rightArrowStyle = {
  ...arrowStyle,
  right: '-30px',
}

const CarouselArrow = ({ style, pointingLeft, onClick }: Props) => {
  return (
    <div
      className='slick-arrow'
      style={pointingLeft ? {...style, ...leftArrowStyle} : {...style, ...rightArrowStyle}}
      onClick={onClick}
    >
      { pointingLeft ? <LeftArrowImage src='/static/icons/right-arrow.svg' alt='right arrow'/> : <ArrowImage src='/static/icons/right-arrow.svg' alt='right arrow'/> }
    </div>
  )
}

export default CarouselArrow
