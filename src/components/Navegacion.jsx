import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, NavLink } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
/* import { NavLink } from 'react-router-dom';
 */
import { LinkContainer } from 'react-router-bootstrap'


const Navegacion = () => {
  return (
    <>
      <Navbar className="barra-navegacion" sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">

        <Navbar.Brand /* href="#home" */><Link className="nav-pedalmania" to="/"><Image className="nav-stompbox" src="/stompbox3.png" fluid rounded /><Image className="nav-pedalmania" src="/pedal9.png" fluid rounded /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/*  <Nav.Link href="#inicio">Inicio</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Productos</Nav.Link> */}
            {/* <Nav.Link href="#compras">Compras</Nav.Link> */}
            {/* <Nav.Link href="#contacto">Contacto</Nav.Link> */}
            {/* <Nav.Link href="#login">Login</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          
          <Nav className="barra-navegacion-enlaces">
            <LinkContainer to="/">
              <Nav.Link >Inicio</Nav.Link>
            </LinkContainer>
            {/* <Nav.Link href="#deets">Productos</Nav.Link> */}
            <LinkContainer to="/contacto">
              <Nav.Link >Contacto</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/compras">
              <Nav.Link >Compras<Image className="nav-cart" src="/cart-4-svgrepo-com.svg" fluid rounded /></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link >Mi Perfil<Image className="nav-user" src="/user-1-svgrepo-com.svg" fluid rounded /></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/registro">
              <Nav.Link >Registro<Image className="nav-user" src="/user-1-svgrepo-com.svg" fluid rounded /></Nav.Link>
              </LinkContainer>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </>
  )
}

export default Navegacion