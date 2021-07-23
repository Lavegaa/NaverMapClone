var { moment } = require('../lib/moment') // require
const testSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'id',
          'placename',
          'ownerid',
          'latitude',
          'longitude',
          'favoriteid',
          'createdtime',
        ],
        properties: {
          id: { type: 'number' },
          placename: { type: 'string' },
          ownerid: { type: 'number' },
          latitude: { type: 'number' },
          longitude: { type: 'number' },
          favoriteid: { type: 'string' },
          createdtime: { type: 'string' },
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
          `SELECT id, place_name as placename, owner_id as ownerid, latitude, longitude, favorite_id as favoriteid, created_time as createdtime FROM place WHERE owner_id=${owner_id} AND favorite_id=${favorite_id} ORDER BY created_time DESC`
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
        const { latitude, longitude, owner_id, place_name, favorite_id } =
          request.body
        const now = moment().format()
        console.log(now, moment().tz())
        await client.query(
          `INSERT INTO place
          (owner_id, latitude, longitude, place_name, favorite_id, created_time)
          VALUES(${owner_id}, ${latitude}, ${longitude}, '${place_name}', ${favorite_id}, '${now}');
          `
        )
        const { rows } = await client.query(
          `SELECT id, place_name as placename, owner_id as ownerid, latitude, longitude, favorite_id as favoriteid, created_time as createdtime FROM place WHERE owner_id=${owner_id} AND favorite_id=${favorite_id} ORDER BY created_time DESC`
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
          `SELECT id, place_name as placename, owner_id as ownerid, latitude, longitude, favorite_id as favoriteid, created_time as createdtime FROM place WHERE owner_id=${owner_id} AND favorite_id=${favorite_id} ORDER BY created_time DESC`
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
