import fastify, { FastifyInstance } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import dbConnection from './plugins/dbConnection'
import routes from './routes/routes'
import favorite from './routes/favorite'
const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify()

server.register(dbConnection)
server.register(favorite)

server.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'GATEWAY SERVICE',
      description: 'All micro-services',
      version: '1.0.0',
    },
    host: '3.16.131.32:3001',
    schemes: '',
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [{ name: 'Auth', description: 'Auth related endpoints' }],
    securityDefinitions: {
      Authorization: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
  },
})

server.register(require('fastify-cors'), {
  // put your options here
})

server.get('/', async (request, reply) => {
  return { hello: 'world hello' }
})

server.listen(3001, '0.0.0.0', function (err) {
  if (err) throw err
  server.log.info(`server listening on`)
})
