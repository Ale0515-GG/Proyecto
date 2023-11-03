const express = require('espress');
const app = express();

//creamos un servidor http a partir de la libreria de express
const http = require('http').Server(app);
//para generar una comunicación vamos a trabajar con socket.iio
const io = require('socket.io')(http);

//routes
app.use(require('./routes/littlezoom'));

//donde vamos a cargar los html con los que vamos a trabajar
app.use(express.static(__dirname + "/public"));

io.on('connection', (socket) => {
    socket.on('stream', (image) =>{
        //emitir el evento a todos los cocket conectados
        socket.broadcast.emit('stream',image);
    })
})
module.exports = http;
