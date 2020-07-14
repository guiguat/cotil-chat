import React from 'react';
import { IMessage, useMsg } from '../../../Contexts/msg';

const Message: React.FC<{message:IMessage}> = ({message}) => {
    const { name } = useMsg();
    let isSentByUser = message.user === name.trim().toLowerCase()? true : false;

    return (
        <div className={`msg-body ${isSentByUser?"user":""}`}>
            <span className="msg-name">{message.user}</span>
            <p className="msg-content">
            { message.text }
            </p>
        </div>
    );
}

export default Message;