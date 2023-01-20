import React from 'react'
import {Navbar,Nav,Container } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {MdLocalOffer} from 'react-icons/md'
const TopBar = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
            <h6 className='text-light'>
               <MdLocalOffer className='text-warning' /> &nbsp;
                free home delivery on order above 500/- rupess</h6>
            <Nav className='ms-auto' ></Nav>
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
                <Nav.Link>About us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
                <Nav.Link>Contact us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy">
                <Nav.Link>terms and policy</Nav.Link>
            </LinkContainer>
        </Container>
      </Navbar>
    </>
  )
}

export default TopBar;
