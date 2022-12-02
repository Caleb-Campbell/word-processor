const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const userRouter = require('./routers/userRouter')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/users', userRouter)


server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message:  err.message,
        stack: err.stack
    })
})

// server.use('/', (req, res) => {
//     res.status(200)
//     res.json({message: 'working!'})
// })

module.exports = server