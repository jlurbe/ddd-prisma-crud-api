import express from 'express'
import config from './config/config'
import { userRouter } from './routes'
import { errorHandler } from './middlewares/errorHandler'

const app = express()
const port = config.port || 3000

// Enabling getting information from body
app.use(express.json())
// Users router
app.use('/user', userRouter)
// Error handling
app.use(errorHandler)

app.listen(port, () => {
  console.log(`CRUD API listening on port ${port}`)
})
