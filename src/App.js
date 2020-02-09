import React from 'react';
import './App.css';
import UserChatBubble from './components/userChatBubble';
import ChatText from './components/chatText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatText />
        <UserChatBubble />
       
      </header>
    </div>
  );
}

export default App;
