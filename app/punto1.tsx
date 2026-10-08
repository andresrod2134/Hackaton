'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//se uso el que estaba en la documentacion de react navbar 
function BasicExample() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary" style={{ transform: 'rotate(180deg)' }}>
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="search">Search</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}

export default BasicExample;




