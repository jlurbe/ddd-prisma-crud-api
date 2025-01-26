import { BaseError, HttpStatusCode } from './base.error'

export class ValidationError extends BaseError {
  constructor(
    className: string,
    method: string,
    data: string,
    validationMessage: string,
  ) {
    super(
      HttpStatusCode.BAD_REQUEST,
      `<${className}> had a validation error when performing the <${method}> and the following data <${data}>\n${validationMessage}`,
    )
  }
}
