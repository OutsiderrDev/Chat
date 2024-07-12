import React from 'react';
import Chat from './Chat';
import './Chat.css';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="header">Czat</h1>
      <Chat />
    </div>
  );
};

export default App;