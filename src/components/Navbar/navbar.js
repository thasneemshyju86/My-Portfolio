import React from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'
import {Link} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'

const Navbar=()=>{
    const [showMenu,setShowMenu]=useState(false)
    return(
        <nav className="navbar" >
            <img src={logo} alt="" className='logo'/>
            <div className="desktopMenu" >
             <Link activeClass='active' to='intro' spy={true} duration={500} smooth={true} offset={-150} className='desktopMenuItem'>Home</Link>
             <Link activeClass='active' to='about' spy={true} duration={500} smooth={true} offset={-150} className='desktopMenuItem'>About</Link>
             <Link  className='desktopMenuItem'>Portfolio</Link>
             <Link activeClass='active' to='contactMe' spy={true} duration={500} smooth={true} offset={-150} className='desktopMenuItem'>Contact</Link>
            </div>
            <button className='contactBtn' onClick={()=>{
                document.getElementById('contactMe').scrollIntoView({behaviour:'smooth'})}}>Contact Me</button>
                
                {/* -------- only in mobile view-------- */}
                <FaBars onClick={()=>setShowMenu(!showMenu)} className='mobMenu'/>
                <div className="mobileMenu" style={{display:showMenu?'flex':'none'}} >
                
             <Link activeClass='active' to='intro' spy={true} duration={500} offset={-150} className='mobileMenuItem'>Home</Link>
             <Link activeClass='active' to='about' spy={true} duration={500} offset={-150} className='mobileMenuItem'>About</Link>
             <Link  className='mobileMenuItem'>Portfolio</Link>
             <Link activeClass='active' to='contactMe' spy={true} duration={500} offset={-150} className='mobileMenuItem'>Contact</Link>
            </div>
       </nav>
    )
}
export default Navbar