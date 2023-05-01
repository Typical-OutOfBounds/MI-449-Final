import { useNavigate, useLocation } from 'react-router-dom'
import "./Navbar.css"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'
import { useContext } from 'react'
import NavContext from '../contexts/NavContext'
import React from 'react'
import { useEffect } from 'react'

const Navbar2 = () => {
    const { activePage, onNavClick} = useContext(NavContext);
    const location = useLocation();

    const handleClick2 = (newPage) => {
        console.log(newPage);
        console.log("hi");
        onNavClick(newPage);
        console.log(activePage);
    };

    return (
        <Navbar expand="xxl" bg="primary" variant="dark">
            <Container fluid className="">
                <Nav>
                    <LinkContainer isActive={() => activePage === '/'} to="/" onClick={() => handleClick2('/')}>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer end isActive={() => activePage === '/classes'} to="/Classes" onClick={() => handleClick2('/classes')}>
                        <Nav.Link>Classes</Nav.Link>
                    </LinkContainer>
                    <LinkContainer end isActive={() => activePage === '/personal'} to="/Personal" onClick={() => handleClick2('/personal')}>
                        <Nav.Link >Personal</Nav.Link>
                    </LinkContainer>
                    <LinkContainer end isActive={() => activePage === '/feedback'} to="/Feedback" onClick={() => handleClick2('/feedback')}>
                        <Nav.Link >Feedback</Nav.Link>
                    </LinkContainer>        
                </Nav>
                <Navbar.Brand>Almost Graduated</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navbar2