import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const db = await mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
})

// Endpoint to update or insert search count
app.post('/api/search', async (req, res) => {
  const { searchTerm, movie } = req.body
  try {
    const [rows] = await db.execute(
      'SELECT * FROM search_counts WHERE searchTerm = ?',
      [searchTerm]
    )
    if (rows.length > 0) {
      await db.execute(
        'UPDATE search_counts SET count = count + 1 WHERE searchTerm = ?',
        [searchTerm]
      )
    } else {
      await db.execute(
        'INSERT INTO search_counts (searchTerm, count, movie_id, poster_url) VALUES (?, ?, ?, ?)',
        [searchTerm, 1, movie.id, `https://image.tmdb.org/t/p/w500/${movie.poster_path}`]
      )
    }
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ...existing code...

app.get('/api/trending', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM search_counts ORDER BY count DESC LIMIT 10'
    )
    res.json(rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ...existing code...

app.listen(3001, () => console.log('Server running on port 3001'))