import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./logo.png"
import "./navigation.css"



const Navigation = () => {
    return (
        <Navbar expand="lg" className="custom-nav">
            <Container fluid>
                {/* <Navbar.Brand href="#home"><img src={logo} alt="logo" height="60" width="60" /></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href='/Contact'>Contact</Nav.Link>
                    </Nav>
                        
                </Navbar.Collapse>
            </Container>
        </Navbar >


    )
}

export default Navigation;