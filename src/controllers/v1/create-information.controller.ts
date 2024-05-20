import { ErrorHandler } from "../error-handler"
import { createInformationFactory } from "@/factories"
import type { FastifyInstance } from "fastify"
import z from "zod"

const schema = z.object({
  title: z.string(),
  description: z.string(),
})

export async function createInformation(server: FastifyInstance) {
  server.post("/", async (request, reply) => {
    try {
      const params = schema.parse(request.body)
      const response = await createInformationFactory().execute(params)
      return reply.status(200).send({ ...response })
    } catch (error) {
      const errorHandler = new ErrorHandler()
      errorHandler.send({ error, reply })
    }
  })
}
