var moment = require('moment') // require

const favoriteSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'favorite_name', 'owner_id', 'created_time', 'length'],
        properties: {
          id: { type: 'number' },
          favorite_name: { type: 'string' },
          owner_id: { type: 'number' },
          created_time: { type: 'string' },
          length: { type: 'number' },
        },
      },
    },
  },
}

interface favoriteType {
  id: number
  favorite_name: string
  owner_id: number
  created_time: string
}

async function routes(fastify: any, options: any) {
  //Access our client instance value from our decorator
  const client = fastify.db.client
  fastify.get(
    `/favorite`,
    { schema: favoriteSchema },
    async function (request: any, reply: any) {
      try {
        const { owner_id } = request.query
        let { rows } = await client.query(
          `SELECT * FROM favorite WHERE owner_id=${owner_id} ORDER BY created_time DESC;`
        )

        const result = await Promise.all(
          rows.map(async (elem: favoriteType) => {
            try {
              let place = await client.query(
                `SELECT count(*) FROM place WHERE owner_id=${owner_id} AND favorite_id=${elem.id}`
              )
              return {
                ...elem,
                length: place.rows[0].count,
              }
            } catch (err) {
              throw err
            }
          })
        )

        console.log(result)
        reply.send(result)
      } catch (err) {
        throw new Error(err)
      }
    }
  )

  fastify.post(
    `/favorite`,
    { schema: favoriteSchema },
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
    { schema: favoriteSchema },
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
