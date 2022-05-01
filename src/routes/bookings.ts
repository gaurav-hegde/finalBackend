import { ServerRoute } from "@hapi/hapi"
import { getAllBookings } from "../controllers/bookings"

export const bookingRoutes: ServerRoute[] = 
[
      {
            method: 'GET',
            path: '/bookings/all',
            handler: getAllBookings
      }
]