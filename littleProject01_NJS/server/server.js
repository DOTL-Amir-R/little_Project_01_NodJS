const express = require('express')
const server = express()
const cors = require('cors')
const mongoose = require('mongoose')
const routesObject = require('./routes')

mongoose.connect('mongodb://127.0.0.1:27017/littleNodeProject').then(
  console.log('server is running')
)
server.use(cors())
server.use(express.json({expanded:false}))
server.use('/api',routesObject.saveUserInfo)

server.listen(3000, ()=>{console.log('server is runing')})

