import React from 'react'
import styled from 'styled-components'
import numberWithSpaces from '../../utils/numberWithSpaces'
import sizes from '../../common/constants/sizes'

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
    font-size: ${props => props.theme.fontSizes.small};
    opacity: 0;
    transition: .3s;
    text-align: center;
    
    @media screen and (max-width: ${sizes.medium}px) {
        font-size: ${props => props.theme.fontSizes.smaller};
    }
  }
  
  &:hover {
    background-color: rgba(0, 33, 85, 0.9);
    
    @media screen and (max-width: ${sizes.small}px) {
        background-color: rgba(0, 0, 0, 0);
    }
    
    p {
      opacity: 1;
      
      @media screen and (max-width: ${sizes.small}px) {
        opacity: 0;
      }
    }
  }
`

const ProductItem = ({ mainImage, name, price }: Props) => {
  return (
    <div>
      <ImageContainer>
        <ProductImage src={mainImage} alt={name}/>
        <ProductInfo>
          <p>{name}</p>
          <p>{numberWithSpaces(price)} Kč</p>
        </ProductInfo>
      </ImageContainer>
    </div>
  )
}

export default ProductItem
