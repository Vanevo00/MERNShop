import { routes } from '../common/constants/routes'
const express = require('express')

class Router {
  constructor (next) {
    this.next = next
    this.router = express.Router()
  }

  createRoutes () {
    Object.values(routes).forEach(route => {
      this.createRoute(route)
    })
  }

  createRoute ({ page, path }) {
    this.router.get(path, async (req, res, next) => {
      try {
        const query = { ...req.query, ...req.params }

        const html = await this.next.renderToHTML(req, res, page, query)
        res.send(html)
      } catch (error) {
        next(error)
      }
    })
  }

  route () {
    this.createRoutes()

    this.router.get('/_error', async (req, res) => {
      const html = await this.renderErrorPage(req, res)
      this.addNoCacheHeader(res)
      res.status(500).send(html)
    })

    this.router.use(async (error, req, res, next) => {
      if (error) throw new Error(error)
      const html = await this.renderErrorPage(req, res)
      this.addNoCacheHeader(res)
      res.status(500).send(html)
    })

    return this.router
  }

  renderErrorPage (req, res) {
    return this.next.renderToHTML(req, res, '/_error')
  }
}

module.exports = Router
