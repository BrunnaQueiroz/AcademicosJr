/*facilitates the applications's create*/
const koa  =require('koa')
const http = require('http')
const socket = require('socket.io')

const app = new koa()
/*callback() is a koa's function that send us a function
that know work with requires*/
const server = http.createServer(app.callback())
const io = socket(server)

const SERVER_HOST = 'localhost'
const SERVER_PORT = 8080

io.on('connection', socket => {
    console.log('[IO] Connection => new conection')
    socket.on('chat.message', data => {
        console.log('[SOCKET] chat.message => ', data)
    })
    socket.on('disconnect', () => {
        console.log('[SOCKET] Disconnect')
    })
})

/*PORT, HOST AND CALLBACK FUNCTION*/
server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`[HTTP] Listen => Server is running at http://${SERVER_HOST}:${SERVER_PORT}`)     
})
