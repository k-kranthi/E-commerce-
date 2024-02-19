import React from 'react';

const Footer = () => {
  return (
    <footer>
        <center> <br/>
            <h3 style={{color:'green'}}>THANK YOU... </h3>
        </center>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>We are dedicated to provide great services to our customers </p>
          </div>
          <div className="col-md-8">
            <h3>Contact Us</h3>
            <ul>
              <li>Email:kranthi3460@gmail.com</li>
              <li>Phone: 9398761904</li>
              <li>Address: 1-83-2 RGUKT basar,Telangana </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright text-center">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
