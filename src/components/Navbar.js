import { Link } from 'react-router-dom'
import "./Navbar.css"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'

const Navbar2 = () => {
    return (
        <Navbar expand="lg" bg="primary">
            <Nav>
                <LinkContainer  to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Classes">
                    <Nav.Link>Classes</Nav.Link>
                </LinkContainer>     
            </Nav>
            <Navbar.Brand>Almost Graduated</Navbar.Brand>
            
        </Navbar>
    );
}

export default Navbar2