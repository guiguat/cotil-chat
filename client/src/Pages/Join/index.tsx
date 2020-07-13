import React from 'react';
import Navbar from '../../Components/Navbar';

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
          <button type="submit" id="btn-join">Entrar</button>
      </form>  
    </div>
  </>
  );
}

export default Join;