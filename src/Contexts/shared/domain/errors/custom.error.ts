export class CustomError extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    public originalError?: Error,
  ) {
    super(message)
  }
}
