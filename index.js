const fp = require('fastify-plugin')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

function fastifyWebpackDevMiddleware (fastify, opts, next) {
  const { config, options } = opts
  const compiler = webpack(config)
  const middleware = webpackDevMiddleware(compiler, options)

  function onRequest (request, response, next) {
    middleware(request, response, (err) => {
      if (err) {
        return next(err)
      }

      return next()
    })
  }

  fastify.addHook('onRequest', onRequest)

  next()
}

module.exports = fp(fastifyWebpackDevMiddleware)
