import { NextFunction, Request, Response } from 'express'
import config from '../../config/config'
import { IgenericErrorMessage } from '../../Interfaces/error'

const globarErrorHandlers = (
  err,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500
  let message = 'Something went werong !'
  let errorMessages: IgenericErrorMessage[] = []

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })
  next()
}

export default globarErrorHandlers
