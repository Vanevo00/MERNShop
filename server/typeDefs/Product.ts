import { gql } from 'apollo-server-express'

export default gql`
    type Product {
        _id: ID!
        name: String!
        slug: String!
        price: Int!
        mainImage: String!
        updated: Date!
        created: Date!
    }

    extend type Query {
        getProducts: [Product]
    }
    
    extend type Mutation {
        addProduct(
            name: String!
            price: Int!
            mainImage: String!
        ): Product
    }
`
