import type { FastifyInstance } from "fastify"
import { ErrorHandler } from "../error-handler"
import { deleteInformationFactory } from "@/factories"
import z from "zod"

const schema = z.object({
  informationID: z.string().uuid(),
})

export async function deleteInformation(server: FastifyInstance) {
  server.delete("/:informationID", async (request, reply) => {
    try {
      const params = schema.parse(request.params)
      await deleteInformationFactory().execute(params)
      return reply.status(200).send({})
    } catch (error) {
      const errorHandler = new ErrorHandler()
      errorHandler.send({ error, reply })
    }
  })
}
