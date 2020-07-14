import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import { FiLogIn } from "react-icons/fi";
import { Redirect } from 'react-router';
import { useMsg } from '../../Contexts/msg';

const Join: React.FC = () => {
  const { name, setName, room, setRoom } = useMsg();
  const[shouldRedirect, setShouldRedirect] = useState(false);

  function handleJoinSubmit(e:any){
    e.preventDefault()
    setShouldRedirect(true);
  }
  
  if(shouldRedirect) return <Redirect from="/join" to="/chat"/>

  return (
    <>                                                
      <div className="content">
        <Navbar>
          <h1 className="nav-title">
            COTIL CHAT       
          </h1>
        </Navbar>
        <h2>Entre na sala:</h2>
        <form onSubmit={handleJoinSubmit} className="join-form">  
            <label htmlFor="name">Nome:</label>
            <input className="input"
             required value={name}
             maxLength={20}
             onChange={e=>setName(e.target.value)}/>
            <label htmlFor="room">Código da sala:</label>
            <input className="input" required value={room} onChange={e=>setRoom(e.target.value)}/>
            <button type="submit" className="btn" id="btn-join">
              <FiLogIn size={24} className="btn-icon"/>Entrar
            </button>
        </form>  
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

export default Join;