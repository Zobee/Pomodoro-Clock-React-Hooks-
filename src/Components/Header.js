import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'

function Header() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className='text-light'>Pomodoro Clock</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
  }
  
  export default Header