const testSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'favorite_name', 'owner_id', 'craeted_time'],
        properties: {
          id: { type: 'number' },
          favorite_name: { type: 'string' },
          owner_id: { type: 'number' },
          craeted_time: { type: 'string' },
        },
      },
    },
  },
}

async function routes(fastify: any, options: any) {
  //Access our client instance value from our decorator
  const client = fastify.db.client
  fastify.get(
    '/test',
    { schema: testSchema },
    async function (request: any, reply: any) {
      try {
        const { rows } = await client.query('SELECT * FROM favorite')
        console.log(rows)
        reply.send(rows)
      } catch (err) {
        throw new Error(err)
      }
    }
  )
}
export default routes
