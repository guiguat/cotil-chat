import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { MdSend } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import './style.css';

const Chat: React.FC = () => {
  return (
    <>
      <div className="content">      
        <Navbar>
          <div className="nav-links">
            <Link to="/" id="arrow-back">
              <FiArrowLeft size={24} />
            </Link>
            <h1 className="nav-title">
              Sala: 291290xf      
            </h1>
          </div>
        </Navbar>
        <div id="interface">
          <div id="interface-content">
            <div id="chat">
              <div className="msg-body">
                <span className="msg-name">Iurir</span>
                <p className="msg-content">
                  Eae gostosa
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
    </>
  );
}

export default Chat;