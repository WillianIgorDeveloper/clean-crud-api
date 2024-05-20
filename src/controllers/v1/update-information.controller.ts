import { ErrorHandler } from "../error-handler"
import { updateInformationFactory } from "@/factories"
import type { FastifyInstance } from "fastify"
import z from "zod"

const schema = z.object({
  information: z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
})

export async function updateInformation(server: FastifyInstance) {
  server.put("/", async (request, reply) => {
    try {
      const params = schema.parse(request.body)
      const response = await updateInformationFactory().execute(params)
      return reply.status(200).send({ ...response })
    } catch (error) {
      console.log(error)
      const errorHandler = new ErrorHandler()
      errorHandler.send({ error, reply })
    }
  })
}
