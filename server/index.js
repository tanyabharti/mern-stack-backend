import express from 'express'
import notes from './data/notes.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import noteRoutes from './routes/noteRoutes.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js'

const app = express()
dotenv.config()
connectDB()
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('API running')
// })

// app.get('/api/notes', (req, res) => {
//   res.json(notes)
// })

app.use('/api/users', userRoutes)
app.use('/api/notes', noteRoutes)

app.use(notFound)
app.use(errorHandler)

app.get('/api/notes/:id', (req, res) => {
  const note = notes.find((index) => index._id === req.params.id)
  console.log(req.params)
  res.send(note)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on PORT ${PORT}`))
