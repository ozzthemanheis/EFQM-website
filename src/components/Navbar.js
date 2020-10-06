import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className="logo" src="/images/EFQM-nav-logo.png" />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/what-we-do' className='nav-links' onClick={closeMobileMenu}>
                WHAT WE DO
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/who-we-are' className='nav-links' onClick={closeMobileMenu}>
                WHO WE ARE
              </Link>
            </li>

            <div class="dropdown">
              <li className='nav-item'>
                <Link
                  to='/Contact-us'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  CONTACT US
              </Link>
              </li>
            </div>
            <li className='nav-item'>
              <Link
                to='https://www.efqm.org/index.php/frequently-asked-questions/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Model'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                EFQM MODEL
              </Link>
            </li>
            
            

          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;