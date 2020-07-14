"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = __importDefault(require("socket.io"));
var users_1 = require("./users");
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var server = http_1.default.createServer(app);
var io = socket_io_1.default(server);
app.use(cors_1.default());
app.use('/', function (req, res) {
    res.send("Server working properly");
});
io.on('connect', function (socket) {
    socket.on('join', function (_a, callback) {
        var name = _a.name, room = _a.room;
        var _b = users_1.addUser({ id: socket.id, name: name, room: room }), error = _b.error, user = _b.user;
        if (error)
            return callback(error);
        socket.join(user.room);
        console.log("Entraste?????" + user.name);
        socket.emit('message', { user: 'admin', text: user.name + ", bem-vindo a sala " + user.room + "." });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: user.name + " entrou!" });
        io.to(user.room).emit('roomData', { room: user.room, users: users_1.getUsersInRoom(user.room) });
        callback();
    });
    socket.on('sendMessage', function (message, callback) {
        var user = users_1.getUser(socket.id);
        io.to(user ? user.room : "").emit('message', { user: user === null || user === void 0 ? void 0 : user.name, text: message });
        callback();
    });
    socket.on('disconnect', function () {
        var user = users_1.removeUser(socket.id);
        if (user) {
            io.to(user.room).emit('message', { user: 'Admin', text: user.name + " saiu." });
            io.to(user.room).emit('roomData', { room: user.room, users: users_1.getUsersInRoom(user.room) });
        }
    });
});
server.listen(process.env.PORT || 3333);
