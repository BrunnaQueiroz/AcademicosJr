/*facilitates the applications's create*/
const express = require('express')
const app = express()
const server = require('http').Server(app)
const { ExpressPeerServer } = require('peer') /**/
const peerServer = ExpressPeerServer(server, {
    debug:false
}); /**/
const { response } = require('express');/**/
const io = require('socket.io')(server)
const { v4 : uuidV4 } = require('uuid')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    /*socket.broadcast.to(roomId).emit('user-connected',userId)*/
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
        /*socket.broadcast.to(roomId).emit('user-disconnected',userId)*/
        socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })

    socket.on('changevideo', (videoId) => {
      io.emit('changevideo', videoId)
    })

    socket.on('play', () => {
      io.sockets.in(roomId).emit("play")
    })

    socket.on('pause', () => {
      io.sockets.in(roomId).emit("pause")
    })
  })
})


io.on('connection', socket => {    
    socket.on('chat.message', data => {
        console.log('[SOCKET] chat.message => ', data)
    })
    socket.on('disconnect', () => {
        console.log('[SOCKET] Disconnect')
    })
})

server.listen(3000)
