import { BaseError, HttpStatusCode } from './base.error'

export class InvalidArgumentError extends BaseError {
  constructor(className: string, fieldValue: unknown) {
    super(
      HttpStatusCode.BAD_REQUEST,
      `<${className}> doesn't allow the the value <${fieldValue}>}`,
    )
  }
}
