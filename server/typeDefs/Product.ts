import { gql } from 'apollo-server-express'

export default gql`
    type Product {
        name: String!
        price: Int!
    }

    extend type Query {
        getProducts: [Product]
    }
    
    extend type Mutation {
        addProduct(
            name: String!
            price: Int!
        ): Product
    }
`
