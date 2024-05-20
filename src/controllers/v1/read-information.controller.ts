import { ErrorHandler } from "../error-handler"
import type { FastifyInstance } from "fastify"
import { readInformationFactory } from "@/factories"
import z from "zod"

const schema = z.object({
  search: z.string().optional(),
})

export async function readInformation(server: FastifyInstance) {
  server.get("/", async (request, reply) => {
    try {
      const params = schema.parse(request.query)
      const response = await readInformationFactory().execute(params)
      return reply.status(200).send({ ...response })
    } catch (error) {
      console.log(error)
      const errorHandler = new ErrorHandler()
      errorHandler.send({ error, reply })
    }
  })
}
