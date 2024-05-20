import { EnvironmentError } from "@/core/errors"
import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
  ENVIRONMENT: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(2000),
  PGHOST: z.string(),
  PGDATABASE: z.string(),
  PGUSER: z.string(),
  PGPASSWORD: z.string(),
  ENDPOINT_ID: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error(`Invalid environment variables ${_env.error.format()}`)
  throw new EnvironmentError()
}

export const env = _env.data
