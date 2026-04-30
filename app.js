const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

// --- ADD THESE TWO ROUTES ---
app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('2') // Changed from '1' to '2'
})

app.listen(PORT, () => {
  // console.log(`server started on port ${PORT}`)
})