import express, { Request, Response } from "express";
import path from "path";
import http from "http";
import socketio from "socket.io";
import ejs from 'ejs';

interface Message{
    author:string,
    message:string,
    timestamp:string
}

const app = express();
const server = http.createServer(app);
const io = socketio(server)

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use('/', (req:Request, res:Response)=>{
    res.render("index.html")
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