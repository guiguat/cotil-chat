import React, {useState, useContext} from 'react';

interface IMsgContext{
    name:string;
    room:string;
    setName(name:string):void;
    setRoom(room:string):void;
    messages:IMessage[];
    setMessages(messages:IMessage[]):void
}
export interface IMessage{
    user:string,
    text:string
}

export const MsgContext = React.createContext<IMsgContext>({} as IMsgContext);

export const MsgProvider: React.FC = ({children}) => {
    const[name, setName] = useState("");
    const[room, setRoom] = useState("");
    const[messages, setMessages] = useState<IMessage[]>([])
    return (
        <MsgContext.Provider value={ { name, room, setName, setRoom, messages, setMessages } }>
        {children}
        </MsgContext.Provider>
    );
}

export const useMsg = () => useContext(MsgContext);