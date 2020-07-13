import React, {useState, useContext} from 'react';

interface IMsgContext{
    name:string;
    room:string;
    setName(name:string):void;
    setRoom(room:string):void
}

export const MsgContext = React.createContext<IMsgContext>({} as IMsgContext);

export const MsgProvider: React.FC = ({children}) => {
    const[name, setName] = useState("");
    const[room, setRoom] = useState("");
    return (
        <MsgContext.Provider value={ { name, room, setName, setRoom } }>
        {children}
        </MsgContext.Provider>
    );
}

export const useMsg = () => useContext(MsgContext);