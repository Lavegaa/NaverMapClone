import fastifyPlugin from 'fastify-plugin'
import { Client } from 'pg'
require('dotenv').config()
const client = new Client({
  user: 'postgres',
  password: process.env.PASSWORD,
  host: '3.34.133.164',
  port: 5432,
  database: process.env.DATABASE,
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
