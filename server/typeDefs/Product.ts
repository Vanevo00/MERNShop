import { gql } from 'apollo-server-express'

export default gql`
    type Product {
        _id: ID!
        name: String!
        slug: String!
        price: Int!
        mainImage: String!
        featured: Boolean!
        updated: Date!
        created: Date!
    }

    extend type Query {
        getProducts(
            paginator: Paginator
            sorting: Sorting
            filters: FilterProductInput
        ): [Product]
    }
    
    extend type Mutation {
        addProduct(
            name: String!
            price: Int!
            mainImage: String!
            featured: Boolean
        ): Product
    }
`
