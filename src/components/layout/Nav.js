import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav role='navigation'>
        <ul>
            <li>
                <Link to='/' className='nav-item' aria-label="On Click">Home</Link>
            </li>
            {/* <li>
                <a href='' role='button' >About</a>
            </li> */}
            <li>
                <Link to='/booking-page' className='nav-item' aria-label="On Click">About</Link>
            </li>
            <li>
                <a href='' role='button' aria-label="On Click">Menu</a>
            </li>
            <li>
                <a href='' role='button' aria-label="On Click">Reservations</a>
            </li>
            <li>
                <a href='' role='button' aria-label="On Click">Order Online</a>
            </li>
            <li>
                <a href='' role='button' aria-label="On Click">Login</a>
            </li>
        </ul>
    </nav>
  )
}
