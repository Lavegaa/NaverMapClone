var moment = require('moment') // require
var request = require('request')

const searchSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'title',
          'link',
          'category',
          'description',
          'telephone',
          'address',
          'roadAddress',
          'mapx',
          'mapy',
        ],
        properties: {
          title: { type: 'string' },
          link: { type: 'string' },
          category: { type: 'string' },
          description: { type: 'string' },
          telephone: { type: 'string' },
          address: { type: 'string' },
          roadAddress: { type: 'string' },
          mapx: { type: 'string' },
          mapy: { type: 'string' },
        },
      },
    },
  },
}

async function routes(fastify: any, options: any) {
  fastify.get(
    `/search`,
    { schema: searchSchema },
    async function (req: any, reply: any) {
      try {
        const { searchword } = req.query
        await request.get(
          {
            headers: {
              'content-type': 'application/json',
              'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
              'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
            },
            url: 'https://openapi.naver.com/v1/search/local.json',
            json: true,
            qs: {
              query: searchword,
              display: 5,
            },
          },
          (error: any, response: any, body: any) => {
            if (!error) {
              reply.send(body.items)
            }
          }
        )
      } catch (err) {
        throw new Error(err)
      }
    }
  )
}

export default routes
