import React, { Fragment } from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import NavLogo from '../../images/logo.svg'
const Header = () => {
    return (
        <Fragment>
            <Navbar className="fixed-top" variant="light" expand="lg">
                <Navbar.Brand href=""> <NavLink className="nav-font" to="/" href="#home"><img className="nav-logo" src={NavLogo} /></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ">
                        <NavLink className="nav-font" to="/" href="#home">Home</NavLink>
                        <NavLink className="nav-font" to="/courseplan" href="#link">Course Plan</NavLink>
                        <NavLink className="nav-font" to="/registration" href="#link">Registration</NavLink>
                        <NavLink className="nav-font" to="/freeclass" href="#link">Free Class</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
};

export default Header;
