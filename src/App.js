import React from 'react';
import './App.css';
import ChatPage from './components/chatPage';
import Navigation from './components/navBar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// route should be determined within chat page, chat page can control the state for all pages

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
            <Navbar bg="primary" variant="dark" expand="lg" className="top-nav" >
                <Navbar.Brand href="/home">Experimental Technologies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                <ChatPage callUnread={this.unreadCallback} />
              <new ></new>
          </header>
      </div>
    );
  }
}

export default App;