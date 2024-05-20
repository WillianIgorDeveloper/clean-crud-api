import type { FastifyInstance } from "fastify"
import {
  createInformation,
  readInformation,
  updateInformation,
  deleteInformation,
} from "@/controllers/v1"

export async function v1Routes(server: FastifyInstance) {
  server.register(createInformation, { prefix: "/createInformation" })
  server.register(readInformation, { prefix: "/readInformation" })
  server.register(updateInformation, { prefix: "/updateInformation" })
  server.register(deleteInformation, { prefix: "/deleteInformation" })
}
