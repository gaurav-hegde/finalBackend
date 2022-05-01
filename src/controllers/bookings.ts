import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi"

export const getAllBookings = async (request : Request, h : ResponseToolkit) : Promise<ResponseObject> => 
{
      return h.response('Hello World')
}