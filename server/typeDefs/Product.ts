import { gql } from 'apollo-server-express'

export default gql`
    type Product {
        name: String!
        price: Int!
    }

    extend type Query {
        getProducts: [Product]
    }
`
