import express, { NextFunction, Request, Response, response } from 'express'
import cors from 'cors'
import usersRoutes from './App/modules/users/users.route'
import ApiError from './errors/ApiError'
import globarErrorHandlers from './App/middiewares/globalErrorHandler'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users/', usersRoutes)

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, 'Ora baba error!')
// })

//global error handler
app.use(globarErrorHandlers)

export default app
