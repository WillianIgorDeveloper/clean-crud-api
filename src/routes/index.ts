import type { FastifyInstance } from "fastify"
import { v1Routes } from "./v1.route"

export async function routes(server: FastifyInstance) {
  server.register(v1Routes, { prefix: "/v1" })
}
