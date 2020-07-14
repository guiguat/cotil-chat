export interface User{
    id: string;
    name: string;
    room: string;
}

const users: User[] = [];

export const addUser = ({ id, name, room }:User):any => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const existingUser = users.find((user:User) => user.room === room && user.name === name);

  if(!name || !room) return { error: 'Nome e Sala são obrigatórios' };
  if(existingUser) return { error: 'Este nome ja está em uso' };

  const user:User = { id, name, room };

  users.push(user);

  return {user};
}

export const removeUser = (id:string) => {
  const index = users.findIndex((user) => user.id === id);
  if(index !== -1) return users.splice(index, 1)[0];
}

export const getUser = (id:string) => users.find((user) => user.id === id);

export const getUsersInRoom = (room:string) => users.filter((user) => user.room === room);