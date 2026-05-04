import express, { Router, type Request, type Response } from 'express'

const app = express()
app.use(express.json())

const api = Router()

api.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' })
})

app.use('/api', api)

const port = Number(process.env.PORT ?? 3001)

app.listen(port, () => {
  console.log(`backend listening on http://localhost:${port}`)
})
