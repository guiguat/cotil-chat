import express, { Request, Response } from "express";
import http from "http";
import socketio from "socket.io";

interface Message{
    author:string,
    message:string,
    room:string,
    timestamp:string
}

const app = express();
const server = http.createServer(app);
const io = socketio(server)

app.use('/', (req:Request, res:Response)=>{
    res.send("hello world")
});

let messages:Message[] = [];

io.on('connection', socket => {
    console.log(`Socket connected: ${socket.id}`);

    socket.emit('previousMessages', messages);

    socket.on('sendMessage', data => {
        messages.push(data);
        socket.broadcast.emit('recievedMessage', data);
    })
});

server.listen(3000);