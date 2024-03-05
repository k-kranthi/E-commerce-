import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    
         <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div>
      <div className="social-icons m-2">
        <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/your_facebook_page" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://wa.me/your_whatsapp_number" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} PK COLLECTIONS</p>
      </div>
      </nav>
    
  );
}

export default Footer;
