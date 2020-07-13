import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { MdSend } from 'react-icons/md';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import { useMsg } from '../../Contexts/msg';
import './style.css';

const Chat: React.FC = () => {
  const { name, room } = useMsg();
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
              <div className="msg-body">
                <span className="msg-name">iuriar</span>
                <p className="msg-content">
                  lorem300
                </p>
              </div>
              <div className="msg-body user">
                <span className="msg-name">Iurir</span>
                <p className="msg-content">
                  lorem300
                </p>
              </div>
            </div>
            <form id="msg-form">
              <input type="text" className="input"/>
              <button id="btn-send">
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