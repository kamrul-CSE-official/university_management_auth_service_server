import express, { Request, Response } from 'express'
import cors from 'cors'
import usersRoutes from './App/modules/users/users.route'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
// console.log(app.get('env'))
app.use('/api/v1/users/', usersRoutes)

app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully....')
})

export default app
