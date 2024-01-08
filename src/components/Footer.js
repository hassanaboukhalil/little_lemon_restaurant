import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className='container'>
          <img src='./images/logo2.png' alt='logo2' />
          <div className='texts-and-links'>
            <div>
              <h5>Doormat Navigation</h5>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Order Online</li>
                <li>Reservation</li>
                <li>Login</li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
              </ul>
            </div>
            <div>
              <h5>Social Media Links</h5>
              <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
              </ul>
            </div>
          </div>
        </div>
    </footer>
  )
}