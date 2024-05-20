import fastify from "fastify"
import cors from "@fastify/cors"

export const server = fastify()
server.register(cors)
