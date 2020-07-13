import React from 'react';
import Navbar from '../../Components/Navbar';
import { FiLogIn } from "react-icons/fi";

const Join: React.FC = () => {
  return (
  <>                                                
    <div className="content">
      <Navbar>
        <h1 className="nav-title">
          COTIL CHAT       
        </h1>
      </Navbar>
      <h2>Entre na sala:</h2>
      <form className="join-form">  
          <label htmlFor="name">Nome:</label>
          <input id="name"/>
          <label htmlFor="room">Código da sala:</label>
          <input id="room"/>
          <button type="submit" className="btn" id="btn-join">
            <FiLogIn size={24} className="btn-icon"/>Entrar
          </button>
      </form>  
      <footer>
        <p>Made with ♥ by <br className="mobile"/> Guilherme Guatura & Iuri Corrêa</p>
      </footer>
    </div>
  </>
  );
}

export default Join;