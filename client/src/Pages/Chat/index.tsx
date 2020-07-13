import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

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