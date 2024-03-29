import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import logo from '../../../Images/download.png'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuth } from '../../../context/AuthContext';
import DropdownMenu from '../../DropdownMenu/DropdownMenu';
const Header = () => {
    const { rkkAuth, setRkkAuth } = useAuth()
    const navigate = useNavigate()

    const handleSignOut = () => {
        // signOut(auth);
        setRkkAuth({
            ...rkkAuth,
            user: null,
            token: ''
        })
        localStorage.removeItem('userId')
        localStorage.removeItem('rkkAuth')
        navigate('/login')
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" sticky='top' variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} height='100' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/courses">Courses</Nav.Link>
                            <Nav.Link href="#about">About us</Nav.Link>
                            {rkkAuth?.user ? <DropdownMenu /> : null}
                            {/* <Nav.Link href="/pricing">Pricing</Nav.Link> */}
                            {/* <Nav.Link as={Link} to="/blogs">Blogs </Nav.Link> */}
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>


                        <Nav>
                            {
                                rkkAuth.user ?
                                    <button className='login-btn' onClick={handleSignOut}>Sign out </button>
                                    :
                                    <Nav.Link as={Link} to="/login" className='login-btn' style={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        Join now
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;