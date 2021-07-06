var { moment } = require('../lib/moment') // require
const testSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'id',
          'place_name',
          'owner_id',
          'latitude',
          'logitude',
          'favorite_id',
          'created_time',
        ],
        properties: {
          id: { type: 'number' },
          place_name: { type: 'string' },
          owner_id: { type: 'number' },
          latitude: { type: 'number' },
          logitude: { type: 'number' },
          favorite_id: { type: 'string' },
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
    `/place`,
    { schema: testSchema },
    async function (request: any, reply: any) {
      try {
        const { owner_id, favorite_id } = request.query
        const { rows } = await client.query(
          `SELECT * FROM place WHERE owner_id=${owner_id} AND favorite_id=${favorite_id} ORDER BY created_time DESC`
        )
        console.log(rows)
        reply.send(rows)
      } catch (err) {
        throw new Error(err)
      }
    }
  )

  fastify.post(
    `/place`,
    { schema: testSchema },
    async function (request: any, reply: any) {
      try {
        const { latitude, logitude, owner_id, place_name, favorite_id } =
          request.body
        const now = moment().format()
        console.log(now, moment().tz())
        await client.query(
          `INSERT INTO place
          (owner_id, latitude, logitude, place_name, favorite_id, created_time)
          VALUES(${owner_id}, ${latitude}, ${logitude}, '${place_name}', ${favorite_id}, '${now}');
          `
        )
        const { rows } = await client.query(
          `SELECT * FROM place WHERE owner_id=${owner_id} AND favorite_id=${favorite_id} ORDER BY created_time DESC`
        )
        console.log(rows)
        reply.send(rows)
      } catch (err) {
        throw new Error(err)
      }
    }
  )

  fastify.delete(
    `/place`,
    { schema: testSchema },
    async function (request: any, reply: any) {
      try {
        const { id, owner_id, favorite_id } = request.query
        await client.query(
          `DELETE FROM place WHERE id=${id} AND owner_id=${owner_id} AND favorite_id=${favorite_id}`
        )
        const { rows } = await client.query(
          `SELECT * FROM place WHERE owner_id=${owner_id} AND favorite_id=${favorite_id} ORDER BY created_time DESC`
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
