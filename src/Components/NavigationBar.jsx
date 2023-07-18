import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FcShop } from 'react-icons/fc';
import {FaHome} from 'react-icons/fa'
import {BsFillBoxSeamFill } from 'react-icons/bs'
import {FaUserCheck,FaUserShield} from 'react-icons/fa'
import { LoginRouteContext } from '../context/loginContext/LoginContext'
import Cart from './Cart';

function NavigationBar() {
  const { state } = useContext(LoginRouteContext)
  const { user } = state
  return (

    <Navbar expand="lg" className="bg-success bg-opacity-25">
      <Container>
        <Link to="/" className='Brand text-decoration-none text-success fw-bold fs-4'><span className='largeNavIcon'><FcShop /></span>Calzanda</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <div className='d-flex align-items-center'>
              <Link to="/" className='mx-3 text-decoration-none text-dark'><FaHome/> Home</Link>
              <Link to="/products" className='mx-3 text-decoration-none text-dark'><BsFillBoxSeamFill/> Products</Link>
              </div>
              </Nav>
              {user ? (
                <>
                <span className='mx-3'><FaUserCheck/> Hi,{user.username}</span> 
                <span><Cart/></span>
                </>
              ) : (
                <Link to="/login" className='mx-3 text-decoration-none text-dark'><FaUserShield/> Login</Link>
              )}
{/* <BsFillBasketFill/>Cart */}

             
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavigationBar