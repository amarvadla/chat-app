const express = require('express')
const http = require('http');
const app = express()
const dataBaseConnection = require('./databaseConnection');

app.use('/', require('./apis/userAPI'))

app.set('port', 5000);
const server = http.createServer(app);
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