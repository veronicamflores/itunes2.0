let express = require('express')
let port = 3000
let server = express()
let cors = requires('cors')
let bp = require('body-parser')
require('./db/db-config')
