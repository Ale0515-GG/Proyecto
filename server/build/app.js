const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server,{
    options:{
        cors:'*'
    }
});

const port = 3000;

//les decimos si se conecto alguien o se desconecto
io.on('connection',(socket) =>{
    socket.on('join',(data)=>{
        const roomName = data.roomName;
        socket.join(roomName);
        socket.to(roomName).broadcast.emit('new-user',data) //difundir los datos de que se conecto alguien
        console.log('Usuario conectado ',data)

        socket.on('disconncet',() =>{
            socket.to(roomName).broadcast.emit('bye-user', data)
        })
    })
})

server.listen(port,() =>{
    console.log(`Server running port ${port}`)
});