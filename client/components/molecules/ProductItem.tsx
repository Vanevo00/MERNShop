import React from 'react'
import styled from 'styled-components'

interface Props {
  mainImage: string
  name: string
}

const ProductImage = styled.img`
  max-width: 94%;
  margin-right: 1rem;
`

const ProductItem = ({ mainImage, name }: Props) => {
  return (
    <div>
      <ProductImage src={mainImage} alt={name}/>
    </div>
  )
}

export default ProductItem
