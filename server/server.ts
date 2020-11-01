import express from 'express'
import cors from 'cors'


const app = express()
const port = 2999

app.use(express.json()) // to accept body data
app.options('/', cors()) // CORS pre-flight
app.use(cors()) // enable CORS

app.get('/', (req, res) => res.send('Welcome to Jewelry store API'))

app.listen(port, () => console.log(`API listening on port ${port}`))
