let mongoose = require('mongoose')
const connectionStr
let connection = mongoose.connection

mongoose.connect(connectionStr, {
    useNewUrlParser: true
})
connection.on('error', err=>{
    console.log('DB ERROR:', err)
})

connection.once('open', ()=>{
    console.lof('connected to db')
})