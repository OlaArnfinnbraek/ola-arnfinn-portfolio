import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import "./Navbar.css"
import Nav from 'react-bootstrap/Nav'
import { NavigationLinks } from './NavigationLinks';
import { Container } from 'react-bootstrap'

function createLinks(){
    return NavigationLinks.map((e, idx) => (
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

function NavBar() {
    return (
        <div id='home'>
            <Navbar className="nav_container" expand="md">
             <Container>
             <Navbar.Brand style={{ marginLeft : 'lrem'}} href="#home">Ola Arnfinn Brækken</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse style={{ justifyContent : 'flex-end', marginRight: 'lrem', borderColor: 'nome' }}>
                 <Nav className="links" style={{ margin : "0 lrem" }}>
                 {createLinks()}
                 </Nav>
             </Navbar.Collapse>
             </Container>
         </Navbar>
        </div>
    )
}

export default NavBar
