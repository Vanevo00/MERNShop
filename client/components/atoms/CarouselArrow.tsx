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
  top: '40%',
  zIndex: '1',
  backgroundColor: '#fff',
  padding: '1rem'
}

const leftArrowStyle = {
  ...arrowStyle,
  left: '0'
}

const rightArrowStyle = {
  ...arrowStyle,
  right: '0'
}

const CarouselArrow = ({ style, pointingLeft, onClick }: Props) => {
  return (
    <div
      className='slick-arrow'
      style={pointingLeft ? { ...style, ...leftArrowStyle } : { ...style, ...rightArrowStyle }}
      onClick={onClick}
    >
      { pointingLeft ? <LeftArrowImage src='/static/icons/right-arrow.svg' alt='right arrow'/> : <ArrowImage src='/static/icons/right-arrow.svg' alt='left arrow'/> }
    </div>
  )
}

export default CarouselArrow
