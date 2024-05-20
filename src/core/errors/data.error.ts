export class DataError extends Error {
  constructor(message: string) {
    super(message ?? "Invalid data.")
    this.name = "DataError"
  }
}
