import React from 'react';
import { NavLink } from 'react-router-dom';
import '../StylePage/Navbar.css';
import logo from './Images/logo.png';


function Navbar() {
    return (
        <nav id="Navbar">
            <div className="Navbar-Container">
                <div className="Nav-Logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul className="Nav-list">
                    <li className="Nav-item">
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li className="Nav-item">
                        <NavLink to="/Packages">Services</NavLink>
                    </li>
                    <li className="Nav-item">
                        <NavLink to="/Remedies">Traditional Remedies</NavLink>
                    </li>
                    <li className="Nav-item">
                        <NavLink to="/Abortions">Abortions & Miscarriages</NavLink>
                    </li>
                    <li className="Nav-item">
                        <NavLink to="/Contact">Contact Me</NavLink>
                    </li>
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;
