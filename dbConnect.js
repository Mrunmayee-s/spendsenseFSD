const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/expense_tracker')

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))