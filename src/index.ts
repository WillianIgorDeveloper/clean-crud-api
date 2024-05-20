import { server, env } from "@/lib"
import { routes } from "@/routes"

server.register(routes, { prefix: "/api" })

server
  .listen({
    host: "0.0.0.0",
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server is running on port ${env.PORT}`)
  })
  .catch((error) => {
    console.error(`Error starting server: ${error}`)
  })
