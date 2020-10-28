import React from 'react'
import styled from 'styled-components'

interface Props {
  mainImage: string
  name: string
  price: number
}

const ImageContainer = styled.div`
  max-width: 94%;
  position: relative;
`

const ProductImage = styled.img`
  width: 100%;
`

const ProductInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  transition: .3s;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 1rem;
  
  p {
    opacity: 0;
    transition: .3s;
    text-align: center;
  }
  
  &:hover {
    background-color: rgba(0, 33, 85, 0.9);
    
    p {
      opacity: 1;
    }
  }
`

const ProductName = styled.p`
  font-size: 18px;
`

const numberWithSpaces = (number: number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")

const ProductItem = ({ mainImage, name, price }: Props) => {
  return (
    <div>
      <ImageContainer>
        <ProductImage src={mainImage} alt={name}/>
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductName>{numberWithSpaces(price)} Kč</ProductName>
        </ProductInfo>
      </ImageContainer>
    </div>
  )
}

export default ProductItem
