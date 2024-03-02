import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header>
            <div className='container'>
                {/* <Link to='/' className='nav-item' aria-label="On Click">
                    <img src="./images/little-lemon-logo.png" alt="little lemon logo"/>
                </Link> */}
                <Nav />
            </div>
        </header>
    )
}

