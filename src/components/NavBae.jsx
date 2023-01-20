import React from 'react'
import {Navbar,Nav,Container,Image} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const NavBae = () => {
  return (
    <>
       <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
            <Image src='images/logo.png' alt='logo' style={{height:'80px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">

            <LinkContainer to="/login" >
            <Nav.Link >login</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cart" >
            <Nav.Link>cart</Nav.Link>
            </LinkContainer>
        
            
            
          
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default NavBae
