import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container1'>
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
      <div />
      </div>
          
  );
}

export default Footer;