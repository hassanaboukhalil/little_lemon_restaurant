import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    let navRef = useRef(null)
    let besideNavRef = useRef(null)

    if(window.matchMedia("(max-width: 992px)").matches){

    }

    function openNav(){
        besideNavRef.current.style.display = 'unset';
        navRef.current.style.display = 'unset';
    }

    function closeNav(){
        besideNavRef.current.style.display = 'none';
        navRef.current.style.display = 'none';
    }

    return (
        window.matchMedia("(min-width: 992px)").matches ?
        <>
            <nav role='navigation' ref={navRef}>
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
                        <a href='#Menu' role='button' aria-label="On Click">Menu</a>
                    </li>
                    <li>
                        <a href='#Reservation' role='button' aria-label="On Click">Reservations</a>
                    </li>
                    <li>
                        <a href='#OrderOnline' role='button' aria-label="On Click">Order Online</a>
                    </li>
                    <li>
                        <a href='#Login' role='button' aria-label="On Click">Login</a>
                    </li>
                </ul>
            </nav>
        </>
        :
        <>
            <svg className='hamburger-icon' onClick={openNav} width="35" height="27" viewBox="0 0 35 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.34615 0C0.6027 0 0 0.652724 0 1.45788C0 2.26304 0.6027 2.91577 1.34615 2.91577H33.6538C34.3972 2.91577 35 2.26304 35 1.45788C35 0.652724 34.3972 0 33.6538 0H1.34615ZM0 13.121C0 12.3158 0.6027 11.6631 1.34615 11.6631H33.6538C34.3972 11.6631 35 12.3158 35 13.121C35 13.9261 34.3972 14.5788 33.6538 14.5788H1.34615C0.6027 14.5788 0 13.9261 0 13.121ZM0 24.784C0 23.979 0.6027 23.3261 1.34615 23.3261H33.6538C34.3972 23.3261 35 23.979 35 24.784C35 25.5891 34.3972 26.2419 33.6538 26.2419H1.34615C0.6027 26.2419 0 25.5891 0 24.784Z" fill="black"/>
            </svg>
            <nav role='navigation' ref={navRef}>
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
                        <a href='#Menu' role='button' aria-label="On Click">Menu</a>
                    </li>
                    <li>
                        <a href='#Reservation' role='button' aria-label="On Click">Reservations</a>
                    </li>
                    <li>
                        <a href='#OrderOnline' role='button' aria-label="On Click">Order Online</a>
                    </li>
                    <li>
                        <a href='#Login' role='button' aria-label="On Click">Login</a>
                    </li>
                </ul>
            </nav>
            <div className='beside-nav' onClick={closeNav} ref={besideNavRef}>
            </div>
        </>
    )
}

