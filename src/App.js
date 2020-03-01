import React from 'react';
import './App.css';
import ChatPage from './components/chatPage';
import Navigation from './components/navBar'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unreadGroup: 0
    }
    this.unreadCallback = this.unreadCallback.bind(this);

  };

  unreadCallback = (unreadCount) => {
    console.log(unreadCount);
    this.setState({unreadGroup: unreadCount });
  };

  render() {
    
    return (
      <div className="App">
      <Navigation unread={this.state.unreadGroup} />
      <header className="App-header">
        <ChatPage callUnread={this.unreadCallback} />
      </header>
    </div>
    );
  }
}

export default App;