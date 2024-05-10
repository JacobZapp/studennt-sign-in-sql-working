// importing express
const express = require('express')

// importing api
const apiRoutes = require('./routes/api.js')

// creating server
const app  = express()

// using json and api routes
app.use(express.json())
app.use('/api', apiRoutes)

// running server
const server = app.listen(process.env.PORT || 3000, function() {
    console.log("Express Server Running on PORT ", server.address().port)
})