import React from 'react';
import Logo from '../assets/footer-little-lemon.jpg';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Footer logo" />
      <div>
        <h2>Navigation</h2>
      <ul>
        <li><Link to='/' >Home </Link></li>
        <li><Link to='/about' >About </Link></li>
        <li><Link to='/menu' >Menu </Link></li>
        <li><Link to='/reservation' >Reservation </Link></li>
        <li><Link to='/order' >Order Online </Link></li>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <ul>
            <li>12345 Naperville,</li>
            <li>Chicago Illinois</li>

            <li> <a href="tel:1236547890">(123) 456-7890</a></li>
            <li><a href="mailto: info@littlelemon.com" target="_blank" rel="noreferrer"
            >
              family@littlelemon.com
            </a>
            </li>
        </ul>
      </div>
      <div>
        <h2>Social Media</h2>
          <ul>
            <li>
            <a href="https://www.facebook.com/login/" target="_blank" rel="noreferrer">
              Facebook
            </a>
            </li>
            <li>
               <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer">
              Instagram
            </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/login" target="_blank" rel="noreferrer">
              LinkedIn
                  </a>
                </li>
          </ul>
      </div>


    </footer>
  )
}

export default Footer;