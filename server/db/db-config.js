let mongoose = require('mongoose')
const connectionStr = 'mongodb://student:student1@ds018558.mlab.com:18558/playlist'
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