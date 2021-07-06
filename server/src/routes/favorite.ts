var moment = require('moment') // require

const testSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'favorite_name', 'owner_id', 'created_time'],
        properties: {
          id: { type: 'number' },
          favorite_name: { type: 'string' },
          owner_id: { type: 'number' },
          created_time: { type: 'string' },
        },
      },
    },
  },
}

async function routes(fastify: any, options: any) {
  //Access our client instance value from our decorator
  const client = fastify.db.client
  fastify.get(
    `/favorite`,
    { schema: testSchema },
    async function (request: any, reply: any) {
      try {
        const { owner_id } = request.query
        const { rows } = await client.query(
          `SELECT * FROM favorite WHERE owner_id=${owner_id} ORDER BY created_time DESC`
        )
        console.log(rows)
        reply.send(rows)
      } catch (err) {
        throw new Error(err)
      }
    }
  )

  fastify.post(
    `/favorite`,
    { schema: testSchema },
    async function (request: any, reply: any) {
      try {
        const { favorite_name, owner_id } = request.body
        const now = moment().format()
        await client.query(
          `INSERT INTO public.favorite
          (favorite_name, owner_id, created_time)
          VALUES('${favorite_name}', ${owner_id}, '${now}');`
        )
        const { rows } = await client.query(
          `SELECT * FROM favorite WHERE owner_id=${owner_id} ORDER BY created_time DESC`
        )
        console.log(rows)
        reply.send(rows)
      } catch (err) {
        throw new Error(err)
      }
    }
  )

  fastify.delete(
    `/favorite`,
    { schema: testSchema },
    async function (request: any, reply: any) {
      try {
        const { id, owner_id } = request.query
        await client.query(`DELETE FROM public.favorite WHERE id=${id}`)
        const { rows } = await client.query(
          `SELECT * FROM favorite WHERE owner_id=${owner_id} ORDER BY created_time DESC`
        )
        console.log(rows)
        reply.send(rows)
      } catch (err) {
        throw new Error(err)
      }
    }
  )
}

export default routes
