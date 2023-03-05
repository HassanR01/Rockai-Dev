import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logoRockAi from '../images/logo-Rockai.png'

const options = [
    {
      name: 'Enable backdrop (default)',
      scroll: false,
      backdrop: true,
    }]

const Header = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <header>
            <div className="logo">
                <img src={ logoRockAi } alt="Rockai Dev's Logo" />
                <h1>Rockai<span>Dev</span></h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/addOrder">Add Order</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a id='login' href="/login">Login</a></li>                 
                </ul>
                <div className="navIcon" onClick={toggleShow}>
                    <span></span>
                    <br />
                    <span></span>
                    <br />
                    <span></span>
                </div>
    
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>
            <div className="offlogo">
                <img src={ logoRockAi } alt="Rockai Dev's Logo" />
                <h1>Rockai<span>Dev</span></h1>
            </div>      
            </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul>
                  <li><a className='offul' href="/">Home</a></li>
                  <li><a className='offul' href="/projects">Projects</a></li>
                  <li><a className='offul' href="/addOrder">Add Order</a></li>
                  <li><a className='offul' href="/contact">Contact Us</a></li>
                  <li><a id='offlogin' href="/login">Login</a></li>                 
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
            </nav>
        </header>
    );
}
 
export default Header;