import { ServerRoute } from "@hapi/hapi"
import { authLogin, authLogout } from "../controllers/auth"

export const authRoutes: ServerRoute[] = 
[
      {
            method: 'POST',
            path: '/login',
            handler: authLogin
      },
      {
            method: 'POST',
            path: '/logout',
            handler: authLogout
      }
]