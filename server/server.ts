import express from 'express'
import cors from 'cors'
import { ApolloServer, gql } from 'apollo-server-express'
import { connectDB } from './utils/connectDB'

const typeDefs = gql`    
    type Book {
        title: String
        author: String
    }
    
    type Query {
        books: [Book]
    }
`

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
]

const resolvers = {
  Query: {
    books: () => books,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
server.applyMiddleware({ app })
const port = 2999

connectDB()

app.use(express.json()) // to accept body data
app.options('/', cors()) // CORS pre-flight
app.use(cors()) // enable CORS

app.get('/', (req, res) => res.send('Welcome to Jewelry store API'))

app.listen(port, () => console.log(`API listening on port ${port}`))
