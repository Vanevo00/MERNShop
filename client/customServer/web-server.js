const next = require('next')
const Router = require('./Router')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const nextServer = next({ dev })
const port = 3000

const runServer = async () => {
  try {
    await nextServer.prepare()

    const router = new Router(nextServer)
    const server = express()

    server.use(router.route())
    server
      .use(nextServer.getRequestHandler())
      .listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
      })

  } catch(err) {
    console.log(err)
    process.exit(1)
  }
}

runServer()
