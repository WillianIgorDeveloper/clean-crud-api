import { DataError, UnauthorizedError } from "@/core/errors"
import type { FastifyReply } from "fastify"
import { ZodError } from "zod"

type ErrorHandlerProps = {
  error: unknown
  reply: FastifyReply
}

export class ErrorHandler {
  send({ error, reply }: ErrorHandlerProps) {
    switch (true) {
      case error instanceof DataError:
        return reply.status(400).send({
          error: error.name,
          message: error.message,
        })
      case error instanceof ZodError:
        return reply.status(400).send({
          error: error.errors,
          message: error.format(),
        })
      case error instanceof UnauthorizedError:
        return reply.status(404).send({
          error: error.name,
          message: error.message,
        })
      default:
        reply.status(500).send({
          error: "InternalServerError",
          message: "Internal Server Error",
        })
    }
  }
}
