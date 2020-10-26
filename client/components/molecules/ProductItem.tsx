import React from 'react'

interface Props {
  name: string
}

const ProductItem = ({ name }: Props) => {
  return (
    <div>
      {name}
    </div>
  )
}

export default ProductItem
