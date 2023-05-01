import express from 'express'
import cors from 'cors'
import routes from './routes/dalle.routes.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use('/api/v1/dalle', routes)
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from Server' })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
