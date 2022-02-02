
import React from 'react';
import {Navbar,Container,Nav,Form,FormControl,Button} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Navbarp() {
  const edit=useSelector(state=>state.productReducer.edit)

  return <div>

<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">MG</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/product">Products</Nav.Link>
        <Nav.Link as={Link} to="/add_edit">{edit?"Edit":"Add"}</Nav.Link>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </div>;
}

export default Navbarp;
