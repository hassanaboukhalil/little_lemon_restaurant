import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { authActions } from '../../store/authSlice'

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
    let navCart = useRef(null)

    let isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    let dispatch = useDispatch()

    const [pageName, setPageName] = useState(() => {
        if(localStorage.getItem('page-name'))return localStorage.getItem('page-name')
        localStorage.setItem('page-name', 'home')
        return localStorage.getItem('page-name');
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
        let arrRef = [
            {
                el: navHome.current,
                toPage: "home"
            },
            {
                el: logo.current,
                toPage: "home"
            },
            {
                el: navAbout.current,
                toPage: "about"
            },
            {
                el: navMenu.current,
                toPage: "menu"
            },
            {
                el: navReservations.current,
                toPage: "reservations"
            },
            {
                el: navContact.current,
                toPage: "contact"
            },
            {
                el: navLogin.current,
                toPage: "login"
            }
        ]

        let loginNavObj = {
            el: navLogin.current,
            toPage: "login"
        }
    
        let cartNavObj = {
            el: navCart.current,
            toPage: "cart"
        }

        if(isLoggedIn){
            if(arrRef.indexOf(loginNavObj) !== -1){
                let i = arrRef.indexOf(loginNavObj)
                arrRef = [...arrRef.slice(0, i), ...arrRef.slice(i, arrRef.length)]
            }
            if(arrRef.indexOf(cartNavObj) === -1){
                arrRef.push(cartNavObj)
            }
            // dispatch(authActions.login())
            arrRef.push(cartNavObj)
            
        }
        else{
            if(arrRef.indexOf(loginNavObj) === -1){
                arrRef.push(loginNavObj)
            }
            if(arrRef.indexOf(cartNavObj) !== -1){
                let i = arrRef.indexOf(cartNavObj)
                arrRef = [...arrRef.slice(0, i), ...arrRef.slice(i, arrRef.length)]
            }
            // dispatch(authActions.logout())
        }

        function changeNav(element){
            if(element === navAbout.current || element === logo.current)element = navHome.current
            for(let i = 0 ; i < arrRef.length ; i++){
                if(arrRef[i].el){
                    if(arrRef[i].el === element){
                        arrRef[i].el.style.backgroundColor = "#495e57";
                        arrRef[i].el.style.color = "white";
                        arrRef[i].el.style.borderRadius = "9px";
                        arrRef[i].el.style.fontWeight = "normal";
                        arrRef[i].el.style.padding = "2px 8px";
                        continue
                    }
                    arrRef[i].el.style.backgroundColor = "unset";
                    arrRef[i].el.style.color = "unset";
                    arrRef[i].el.style.borderRadius = "unset";
                    arrRef[i].el.style.fontWeight = "unset";
                    arrRef[i].el.style.padding = "unset";
                }
            }
            if(!window.matchMedia("(min-width: 992px)").matches){
                closeNav()
            }
        }
    
        function addingClickEvents(item){
            if(item.el){
                item.el.addEventListener('click', () => {
                    changeNav(item.el)
                    setPageName(item.toPage)
                    if(item.el === navAbout.current){
                        setTimeout(() => {
                            document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }
                });
            }
        }

        arrRef.forEach((item) =>  addingClickEvents(item))
        navHome.current.click()
    },[isLoggedIn])



    function logout(){
        navHome.current.click()
        dispatch(authActions.logout())
    }

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
                    {
                        isLoggedIn ?
                        <>
                            <li>
                                <Link to='/cart' ref={navCart} aria-label="On Click">Cart</Link>
                            </li>
                            <li>
                                <Link to='/' onClick={logout} aria-label="On Click">Logout</Link>
                            </li>
                        </>
                        :
                        <li>
                            <Link to='/login' ref={navLogin} aria-label="On Click">Login</Link>
                        </li>
                    }
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
                    {
                        isLoggedIn ?
                        <>
                            <li>
                                <Link to='/cart' ref={navCart} aria-label="On Click">Cart</Link>
                            </li>
                            <li>
                                <Link to='/' onClick={logout} aria-label="On Click">Logout</Link>
                            </li>
                        </>
                        :
                        <li>
                            <Link to='/login' ref={navLogin} aria-label="On Click">Login</Link>
                        </li>
                    }
                </ul>
            </nav>
            <div className='beside-nav' onClick={closeNav} ref={besideNavRef}>
            </div>
        </>
    )
}

