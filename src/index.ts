import Hapi from '@hapi/hapi'
import { bookingRoutes } from './routes/bookings'
import { authRoutes } from './routes/auth'

export const init = async () => 
{
      const server = Hapi.server({
            port: process.env.PORT || 3000,
            host: '0.0.0.0'
      })

      await server.register(require('@hapi/cookie'))

      server.auth.strategy('session', 'cookie',
      {
            cookie:
            {
                  name: 'htlcookie',
                  password: 'abc',
                  isSecure: false
            },

            //@ts-ignore
            validateFunc: async (request, session) =>
            {
                  const account = 'abc' // await prisma.users.findUnique(...)

                  if (!account) return { valid: false }
                  return { valid: true, credentials: account }
            }
      })

      server.auth.default('session')

      server.route({
            method: 'GET',
            path: '/',
            handler: (request, h) => 'Hello World!'
      })

      server.route(bookingRoutes)
      server.route(authRoutes)
      
      await server.start()
      console.log(`Server running on: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => 
{
      console.error(err)
      process.exit(1)
})

init()