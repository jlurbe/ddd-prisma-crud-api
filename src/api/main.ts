import express from 'express'
import morgan from 'morgan'
import config from './config/config'
import { userRouter } from './routes'
import { errorHandler } from './middlewares/errorHandler'
import logger from './logger'
import { Request, Response, NextFunction } from 'express'

const app = express()
const port = config.port || 3000

// Enabling getting information from body
app.use(express.json())
// Request logging
app.use(
  morgan('combined', {
    stream: { write: (message) => logger.info(message.trim()) },
  }),
)
// Users router
app.use('/users', userRouter)
// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.stack)
  errorHandler(err, req, res, next)
})

app.listen(port, () => {
  logger.info(`CRUD API listening on port ${port}`)
})
