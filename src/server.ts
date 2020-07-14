import express, { Request, Response } from "express";
import http from "http";
import socketio from "socket.io";
import { addUser, removeUser, getUser, getUsersInRoom, User } from "./users"; 
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = socketio(server)
app.use(cors())
app.use('/', (req:Request, res:Response)=>{
    res.send("Server working properly")
});

io.on('connect', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
        if(error) return callback(error);
        socket.join(user.room);
        console.log("Entraste?????"+user.name)
        socket.emit('message', { user: 'admin', text: `${user.name}, bem-vindo a sala ${user.room}.`});

        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} entrou!` });

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user?user.room : "" ).emit('message', { user: user?.name, text: message });
        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        if(user) {
            io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} saiu.` });
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
        }
    })
});


server.listen(3333);