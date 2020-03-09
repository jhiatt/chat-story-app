import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav defaultActiveKey="/" className="flex-column side-nav">
                    <h6>Threads:</h6>
                    <Nav.Link href="/" className="thread"> 
                        <span>Team</span>
                        <span className="unread">
                            <div className="unread-count">
                                unread: {this.props.unread} 
                            </div>
                        </span>
                    </Nav.Link>
                    <Nav.Link href="/Jeremy" className="thread">
                        <span>Jeremy</span>
                        <span className="unread">
                            <div className="unread-count">
                                unread: {this.props.unread} 
                            </div>
                        </span>
                    </Nav.Link>
                </Nav>
                
            </React.Fragment>
        );
    }
}
  
  export default Navigation;