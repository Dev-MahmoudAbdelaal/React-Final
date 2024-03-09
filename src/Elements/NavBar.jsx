import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdDiscount } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './ElementsCss/NavBarCss.css'
import { useSelector } from 'react-redux';


const NavBar=()=>{
  const {cartCount} = useSelector((state) =>state.Cart);
    return (
      <div className="header" style={{backgroundColor:"#2c2f33"}}>
             <Navbar  expand="lg" className='navbar-dark' >
              <Container>
                <NavLink to="/"><img src="./logo3.png" alt="" style={{width:" 250px",height:"60px"}}/></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto mx-auto d-flex nav-item">
                    
                      <NavLink to="/" className='mx-3 nav-link ' style={{fontSize:"24px"}}>Home</NavLink>
                      <NavLink to="store" className='mx-3 nav-link'  style={{fontSize:"24px"}}>Store</NavLink>
                      <NavLink to="login" className='mx-3 nav-link'  style={{fontSize:"24px"}}>Login</NavLink>
                    
                    
                    <NavLink to="discount" className='mx-5 nav-link'  style={{fontSize:"28px"}}><MdDiscount style={{}}/></NavLink>
                    <NavLink to="signUp" className='mx-5 nav-link'  style={{fontSize:"28px"}}><FaUserPlus style={{}}/></NavLink>
                    <NavLink to="myCart" className='mx-5 nav-link'  style={{fontSize:"28px"}}>
                      <div className="myCart">
                        <FaShoppingCart style={{}}/>
                        <span className='cartCounter'>{cartCount}</span>
                      </div>
                    </NavLink>
                    
                  </Nav>
                  
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          )
    
  }

export default NavBar;
