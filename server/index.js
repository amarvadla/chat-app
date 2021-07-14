const express = require('express')
const http = require('http');
var cors = require('cors')
const app = express()
const dataBaseConnection = require('./databaseConnection');
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/', require('./apis/userAPI'))


app.set('port', 5000);
const server = http.createServer(app);

const io = require('socket.io')(server)

server.listen(5000)

server.on('error', (error) => {
    console.log(error);
})
server.on('listening', (listenData) => {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
})

io.on('connection', socket => {

    socket.on('chat', (payload) => {
        console.log(payload)
        // socket.emit('messageChannel', message);
        socket.broadcast.emit('messageChannel', payload);
    })
})