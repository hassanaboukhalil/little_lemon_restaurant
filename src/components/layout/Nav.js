import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    let navRef = useRef(null)
    let besideNavRef = useRef(null)
    let logo = useRef(null)
    let navHome = useRef(null)
    let navAbout = useRef(null)
    let navReservations = useRef(null)
    let navContact = useRef(null)
    let navMenu = useRef(null)
    let navLogin = useRef(null)

    const [pageName, setPageName] = useState(() => {
        const storedName = localStorage.getItem('page-name');
        return storedName;
    });

    function openNav(){
        besideNavRef.current.style.display = 'unset';
        navRef.current.style.display = 'unset';
    }

    function closeNav(){
        besideNavRef.current.style.display = 'none';
        navRef.current.style.display = 'none';
    }

    useEffect(() => {
        localStorage.setItem('page-name', pageName);
    }, [pageName]);

    useEffect(() => {
        let arr = [
            {
                el: navHome.current,
                styleItem: 0,
                toPage: "home"
            },
            {
                el: logo.current,
                styleItem: 0,
                toPage: "home"
            },
            {
                el: navAbout.current,
                styleItem: 0,
                toPage: "about"
            },
            {
                el: navMenu.current,
                styleItem: 3,
                toPage: "menu"
            },
            {
                el: navReservations.current,
                styleItem: 4,
                toPage: "reservations"
            },
            {
                el: navContact.current,
                styleItem: 5,
                toPage: "contact"
            },
            {
                el: navLogin.current,
                styleItem: 6,
                toPage: "login"
            }
        ]

        function changeNav(navNb){
            let arrRef = []
            arr.forEach((item) => arrRef.push(item.el))
            for(let i = 0 ; i < arrRef.length ; i++){
                if(i === navNb){
                    arrRef[i].style.backgroundColor = "#495e57";
                    arrRef[i].style.color = "white";
                    arrRef[i].style.borderRadius = "9px";
                    arrRef[i].style.fontWeight = "normal";
                    arrRef[i].style.padding = "2px 8px";
                    continue
                }
                arrRef[i].style.backgroundColor = "unset";
                arrRef[i].style.color = "unset";
                arrRef[i].style.borderRadius = "unset";
                arrRef[i].style.fontWeight = "unset";
                arrRef[i].style.padding = "unset";
            }
            if(!window.matchMedia("(min-width: 992px)").matches){
                closeNav()
            }
        }

        function addingClickEvents(item){
            item.el.addEventListener('click', () => {
                changeNav(item.styleItem)
                setPageName(item.toPage)
                if(item.el === navAbout.current){
                    setTimeout(() => {
                        document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
            });
        }

        arr.forEach((item) => addingClickEvents(item))

        if(pageName === 'home')navHome.current.click()
        else if(pageName === 'about')navAbout.current.click()
        else if(pageName === 'reservations')navReservations.current.click()
        else if(pageName === 'contact')navContact.current.click()
        else if(pageName === 'menu')navMenu.current.click()
        else if(pageName === 'login')navLogin.current.click()
    },[])

    return (
        window.matchMedia("(min-width: 992px)").matches ?
        <>
            <Link to='/' ref={logo} className='nav-item' aria-label="On Click">
                <img src="./images/little-lemon-logo.png" alt="little lemon logo"/>
            </Link>
            <nav role='navigation' ref={navRef}>
                <ul>
                    <li>
                        <Link to='/' ref={navHome} aria-label="On Click">Home</Link>
                    </li>
                    <li>
                        <Link to='/' ref={navAbout} aria-label="On Click">About</Link>
                    </li>
                    <li>
                        <Link to='/menu-page' ref={navMenu} aria-label="On Click">Menu</Link>
                    </li>
                    <li>
                        <Link to='/booking-page' ref={navReservations} aria-label="On Click">Reservations</Link>
                    </li>
                    <li>
                        <Link to='/contact-page' ref={navContact} aria-label="On Click">Contact</Link>
                    </li>
                    <li>
                        <Link to='/login' ref={navLogin} aria-label="On Click">Login</Link>
                    </li>
                </ul>
            </nav>
        </>
        :
        <>
            <Link to='/' ref={logo} className='nav-item' aria-label="On Click">
                <img src="./images/little-lemon-logo.png" alt="little lemon logo"/>
            </Link>
            <svg className='hamburger-icon' onClick={openNav} width="35" height="27" viewBox="0 0 35 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.34615 0C0.6027 0 0 0.652724 0 1.45788C0 2.26304 0.6027 2.91577 1.34615 2.91577H33.6538C34.3972 2.91577 35 2.26304 35 1.45788C35 0.652724 34.3972 0 33.6538 0H1.34615ZM0 13.121C0 12.3158 0.6027 11.6631 1.34615 11.6631H33.6538C34.3972 11.6631 35 12.3158 35 13.121C35 13.9261 34.3972 14.5788 33.6538 14.5788H1.34615C0.6027 14.5788 0 13.9261 0 13.121ZM0 24.784C0 23.979 0.6027 23.3261 1.34615 23.3261H33.6538C34.3972 23.3261 35 23.979 35 24.784C35 25.5891 34.3972 26.2419 33.6538 26.2419H1.34615C0.6027 26.2419 0 25.5891 0 24.784Z" fill="black"/>
            </svg>
            <nav role='navigation' ref={navRef}>
                <ul>
                    <li>
                        <Link to='/' ref={navHome} aria-label="On Click">Home</Link>
                    </li>
                    <li>
                        <Link to='/' ref={navAbout} aria-label="On Click">About</Link>
                    </li>
                    <li>
                        <Link to='/menu-page' ref={navMenu} aria-label="On Click">Menu</Link>
                    </li>
                    <li>
                        <Link to='/booking-page' ref={navReservations} aria-label="On Click">Reservations</Link>
                    </li>
                    <li>
                        <Link to='/contact-page' ref={navContact} aria-label="On Click">Contact</Link>
                    </li>
                    <li>
                        <Link to='/login' ref={navLogin} aria-label="On Click">Login</Link>
                    </li>
                </ul>
            </nav>
            <div className='beside-nav' onClick={closeNav} ref={besideNavRef}>
            </div>
        </>
    )
}

