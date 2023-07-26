import { React, useState} from 'react'
import "./Navbar.css"
import {Link, NavLink} from "react-router-dom"
import Logo from "../../images/logo.png"
import { links } from "../../data"
import { FaBars } from "react-icons/fa"
import { MdOutlineClose } from "react-icons/md"

const Navbar = () => {
    const[isNavShowing, setIsNavShowing] = useState(false)
  return (
    <nav>
        <div className="container nav-container">
            <Link to="/" className="logo">
                <img src={Logo} alt="nav-logo" />
            </Link>
            <ul className={`nav-links ${isNavShowing ? "show-nav" : "hide-nav"}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => 
                                isActive ? "active-nav" : ""}>
                                    {name}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav-toggle-btn" onClick={() => setIsNavShowing 
            (!isNavShowing)}>
                {
                    isNavShowing ? <MdOutlineClose /> : <FaBars />
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar
