export class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message ?? "User unauthorized.")
    this.name = "UnauthorizedError"
  }
}
