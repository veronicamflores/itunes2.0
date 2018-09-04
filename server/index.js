let express = require('express')
let port = 3000
let server = express()
let cors = requires('cors')
let bp = require('body-parser')

require('./db/db-config')

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

let playlistRoutes = require('./routes/playlist-route')

server.use('api/songs/', playlistRoutes)

server.listen(port, () => {
  console.log('Running on Port:', port)
})