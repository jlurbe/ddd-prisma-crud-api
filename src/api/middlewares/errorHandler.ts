import { NextFunction, Request, Response } from 'express'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import {
  BaseError,
  HttpStatusCode,
} from '../../Contexts/shared/domain/errors/base.error'

export const errorHandler = (
  err: Error | PrismaClientKnownRequestError,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err)
  const status =
    err instanceof BaseError
      ? err.httpCode
      : HttpStatusCode.INTERNAL_SERVER_ERROR

  res.status(status).json({
    statusCode: status,
    timestamp: new Date().toISOString(),
    path: _req.url,
    message:
      err instanceof BaseError
        ? err.message
        : 'There was an unexpected internal error',
  })
  next()
}
