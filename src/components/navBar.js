import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="lg" className="top-nav" >
                    <Navbar.Brand href="#home">Experimental Technologies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#link">unread: {this.props.unread}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Nav defaultActiveKey="/home" className="flex-column side-nav">
                    <h6>Threads:</h6>
                    <Nav.Link href="/home">ITChannel</Nav.Link>
                </Nav>
            </div>
        );
    }
}
  
  export default Navigation;