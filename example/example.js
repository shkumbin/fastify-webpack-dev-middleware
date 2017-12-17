const fastify = require('fastify')()
const fastifyWebpackDevMiddleware = require('../')

fastify.register(fastifyWebpackDevMiddleware, {
  config: require('./webpack.config.js'),
  options: {
    noInfo: false,
    publicPath: '/static'
  }
})

fastify.get('/', (req, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
