import React from 'react';
import './App.css';
import UserChatBubble from './components/userChatBubble';
import Navigation from './components/navBar'


function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
       
        <UserChatBubble />
      </header>
    </div>
  );
}

export default App;


// app.js
//  chattext
//  chat bubble
//    chattext