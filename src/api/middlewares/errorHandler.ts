import { NextFunction, Request, Response } from 'express'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export const errorHandler = (
  err: Error | PrismaClientKnownRequestError,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof PrismaClientKnownRequestError) {
    // The .code property can be accessed in a type-safe manner
    if (err.code === 'P2002') {
      console.error(JSON.stringify(err, null, 2))
      res.status(500).json({
        error:
          'There is a unique constraint violation, a new user cannot be created with this email',
      })
    }
    if (err.code === 'P2025') {
      console.error(JSON.stringify(err, null, 2))
      res.status(404).json({ error: 'Record not found' })
    }
  } else {
    console.error(JSON.stringify(err, null, 2))
    res.status(500).json({
      error: err.message,
    })
  }
  next()
}
