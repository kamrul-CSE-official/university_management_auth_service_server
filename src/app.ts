import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const kk = fkd
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully...')
  const po = 12
})

export default app
