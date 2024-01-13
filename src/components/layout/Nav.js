import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav role='navigation'>
        <ul>
            <li>
                <Link to='/' className='nav-item' >Home</Link>
            </li>
            {/* <li>
                <a href='' role='button' >About</a>
            </li> */}
            <li>
                <Link to='/booking-page' className='nav-item'>About</Link>
            </li>
            <li>
                <a href='' role='button' >Menu</a>
            </li>
            <li>
                <a href='' role='button' >Reservations</a>
            </li>
            <li>
                <a href='' role='button' >Order Online</a>
            </li>
            <li>
                <a href='' role='button' >Login</a>
            </li>
        </ul>
    </nav>
  )
}
