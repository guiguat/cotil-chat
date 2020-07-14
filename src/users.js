"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersInRoom = exports.getUser = exports.removeUser = exports.addUser = void 0;
var users = [];
exports.addUser = function (_a) {
    var id = _a.id, name = _a.name, room = _a.room;
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    var existingUser = users.find(function (user) { return user.room === room && user.name === name; });
    if (!name || !room)
        return { error: 'Nome e Sala são obrigatórios' };
    if (existingUser)
        return { error: 'Este nome ja está em uso' };
    var user = { id: id, name: name, room: room };
    users.push(user);
    return { user: user };
};
exports.removeUser = function (id) {
    var index = users.findIndex(function (user) { return user.id === id; });
    if (index !== -1)
        return users.splice(index, 1)[0];
};
exports.getUser = function (id) { return users.find(function (user) { return user.id === id; }); };
exports.getUsersInRoom = function (room) { return users.filter(function (user) { return user.room === room; }); };
