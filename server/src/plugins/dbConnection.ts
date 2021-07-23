import fastifyPlugin from 'fastify-plugin'
import { Client } from 'pg'
require('dotenv').config()
const client = new Client({
  user: 'postgres',
  password: '0000',
  host: 'localhost',
  port: 5432,
  database: 'mapclone',
})
async function dbconnector(fastify: any, options: any) {
  try {
    await client.connect()
    console.log('db connected succesfully')
    fastify.decorate('db', { client })
  } catch (err) {
    console.error(err)
  }
}
export default fastifyPlugin(dbconnector)
