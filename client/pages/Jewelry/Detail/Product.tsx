import React from 'react'

interface InitialProps {
  query: {
    slug: string
  }
}

interface Props {
  slug: string
}

const Product = ({ slug }: Props) => {
  return (
    <div>
      {slug}
    </div>
  )
}

Product.getInitialProps = ({ query }: InitialProps) => {
  const { slug } = query

  return {
    slug
  }
}

export default Product
