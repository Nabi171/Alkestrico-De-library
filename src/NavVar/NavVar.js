import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../NavVar/NavVar.css'
const NavVar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Container >
                    <Navbar.Brand href="#home"><span className='fw-bold ' style={{ color: "#e7a69a" }}
                    >ALKESTRICO DE LIBRARY</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto" >
                            <Nav.Link href="#home"><span className='fw-bold' style={{ color: "#e7a69a" }}>Home</span></Nav.Link>
                            <Nav.Link href="#home"><span className='fw-bold' style={{ color: "#e7a69a" }}>About</span></Nav.Link>
                            <Nav.Link href="#home"><span className='fw-bold' style={{ color: "#e7a69a" }}>More</span></Nav.Link>
                            <Nav.Link href="#home"><span className='fw-bold' style={{ color: "#e7a69a" }}>Connect Us</span></Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavVar;