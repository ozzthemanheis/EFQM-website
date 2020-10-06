import React from 'react';
import './FooterHome.css';
import { Button } from './Button';
import "./Button.css"
import { Link } from 'react-router-dom';

function FooterHome() {
  return (
    <div className='footer-container'>

        <div className="footerrow">
            <div className="footercolumn">
              <h3>The EFQM model is our foundation</h3><br/>
              <h4> A globally-recognised practical framework for organizational change and performance improvement.</h4>
            <br/>
              <h4>Now includes EFQM's RADAR diagnostic method <br/> and is available in 17 languages</h4>
           
  
            </div>
            <div className="footercolumn">
             
              <p>AVAILABLE TO BUY IN OUR SHOP</p><br/>
              <Button
          className='btns'
          buttonStyle='btn--footer'
          buttonSize='btn--large'
          onClick='https://shop.efqm.org/publications/the-efqm-model/'
        >
          PRINTED BOOKLET
        </Button>    <Button
          className='btns'
          buttonStyle='btn--footer'
          buttonSize='btn--large'
          onClick='https://shop.efqm.org/publications/the-efqm-model--ebook/'
        >
          DIGITAL E-BOOK
        </Button>
         <br/>
        <p>You can also try it for FREE, download and share the EFQM Model summary, which covers all the main concepts.</p>
            </div>
          </div>
     
         
          <small class='website-rights'>EFQM © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      
   
  );
}

export default FooterHome;