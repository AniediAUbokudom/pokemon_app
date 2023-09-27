const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res. send('Welcome to the Pokemon App!')
})











app. listen(port, () => {
  console.log(`Listening port on ${port}`)
})
