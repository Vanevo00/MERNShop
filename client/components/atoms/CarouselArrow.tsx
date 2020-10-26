import React, { MouseEvent } from 'react'

interface Props {
  style?: any
  pointingLeft?: boolean
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

const arrowStyle = {
  color: 'lightGrey',
  right: '100px',
  position: 'absolute',
  fontSize: '30px',
  top: '105px',
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
      { pointingLeft ? <i className="fas fa-arrow-circle-left"/> : <i className="fas fa-arrow-circle-right"/> }
    </div>
  )
}

export default CarouselArrow
