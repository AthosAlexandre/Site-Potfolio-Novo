import React from 'react'
import Contato from '../Contato'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <>
      <Contato />
      <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Row>
            <Col><Navbar.Brand href="#home">ATHOS ALEXANDRE</Navbar.Brand></Col>
          </Row>           
          
            <div className="d-flex flex-row-reverse bd-highlight">
              <Nav className="me-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#features">QUEM SOU</Nav.Link>
                <Nav.Link href="#pricing">O QUE FAÇO</Nav.Link>
                <Nav.Link href="#pricing">PORTFÓLIO</Nav.Link>
              </Nav>
            </div>
          
        </Container>
      </Navbar>
      </header>
    </>
  )
}

export default Header