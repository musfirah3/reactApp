import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FcShop} from 'react-icons/fc';
import { LoginRouteContext } from '../context/loginContext/LoginContext';

function NavigationBar() {
  const {state}=useContext(LoginRouteContext)
  return (
    
    <Navbar expand="lg" className="bg-success bg-opacity-25">
      <Container>
        <Link to="/" className='Brand text-decoration-none text-success fw-bold fs-4'><span className='largeNavIcon'><FcShop/></span>Calzanda</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className='d-flex align-items-center'>
            <Link to="/" className='mx-3 text-decoration-none text-dark'>Home</Link>
            <Link to="/products" className='mx-3 text-decoration-none text-dark'>Products</Link>
            <Link to="/login" className='mx-3 text-decoration-none text-dark'>Login</Link>
              <Link to="/registration" className='mx-3 text-decoration-none btn btn-outline-success'>Sign Up</Link>
              </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavigationBar