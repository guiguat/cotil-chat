import React from 'react';
import { MsgProvider } from './Contexts/msg';
import Routes from './Routes/routes';

const App: React.FC = () => {
  return (
    <MsgProvider>
      <Routes />
    </MsgProvider>
  );
}

export default App;
