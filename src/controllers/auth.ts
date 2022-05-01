import { ResponseObject, ResponseToolkit } from "@hapi/hapi"

interface Request { payload: { username: any; password: any }; cookiAuth: { set: (arg0: { id: number }) => void } }

export const authLogin = async (request: Request, h : ResponseToolkit) : Promise<ResponseObject> => 
{
      const { username, password } = request.payload
      const account = {id: 1, name: 'john doe'} // await prisma.users.findUnique(...)

      if (!account) return h.response('Invalid credentials provided')

      request.cookiAuth.set({ id: account.id })

      return h.response('Login successful')
}

export const authLogout = async (request : Request, h : ResponseToolkit) : Promise<ResponseObject> => 
{
      return h.response('All bookings')
}