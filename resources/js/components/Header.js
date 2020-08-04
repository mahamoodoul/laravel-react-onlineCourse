import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand className="text-dark" href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="nav-font" href="#home"><NavLink to="/">Home</NavLink></Nav.Link>
                        <Nav.Link className="nav-font" href="#link"><NavLink to="/courseplan">Course Plan</NavLink></Nav.Link>
                        <Nav.Link className="nav-font" href="#home"><NavLink to="/registration">Registration</NavLink></Nav.Link>
                        <Nav.Link className="nav-font" href="#link"><NavLink to="/freeclass">Free Class</NavLink></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
