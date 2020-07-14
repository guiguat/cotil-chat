import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { MdSend } from 'react-icons/md';
import { Link, Redirect, RouteProps } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import { IMessage, useMsg } from '../../Contexts/msg';
import io from "socket.io-client";
import './style.css';
import Message from './Message';
let socket:any;
const Chat: React.FC<RouteProps> = ({location}) => {
  const { name, room, setMessages, messages } = useMsg();
  const [message, setMessage] = useState('');
  const ENDPOINT = 'http://localhost:3333';
  
  useEffect(()=>{
    if(!name && !room) return;
    socket = io(ENDPOINT);
    socket.emit('join', { name, room }, (error:any) => {
      if(error) {
        alert(error);
      }
    });
    // eslint-disable-next-line
  },[ENDPOINT, location?.search])

  useEffect(()=>{
    socket?.on('message', (message: IMessage) => {
      console.log(message)
      setMessages([...messages, message]);
    });
    // eslint-disable-next-line
  },[message])

  const sendMessage = (event:any) => {
    event.preventDefault();
    if(message) {
      socket?.emit('sendMessage', message, () => { setMessage('') });
    }
  }
  
  if(!name && !room) return <Redirect to="/"/>

  return (
    <>
      <div className="content">      
        <Navbar>
          <div className="nav-links">
            <Link to="/" id="arrow-back">
              <FiArrowLeft size={24} />
            </Link>
            <h1 className="nav-title">
              Sala: {room}      
            </h1>
          </div>
        </Navbar>
        <div id="interface">
          <div id="interface-content">
            <div id="chat">
              {
                messages.map((message, i) =>(
                  <Message key={i} message={message}/>
                ))
              }
            </div>
            <form id="msg-form" onSubmit={sendMessage}>
              <input type="text" value={message} onChange={e=>setMessage(e.target.value)} className="input"/>
              <button id="btn-send" type="submit">
                <MdSend size={24} color="#DEDEDE"/>
              </button>
            </form> 
          </div>
          <footer>
            <p>
              <a href="https://github.com/guiguat/simple-chat" target="_blank" rel="noopener noreferrer"> 
                Made with ♥ by <br className="mobile"/> 
                Guilherme Guatura
                & Iuri Corrêa
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Chat;