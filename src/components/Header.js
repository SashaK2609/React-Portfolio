import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const isActive = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

function Header() {
	return (
		<nav className="navbar">
		<ul className="nav">
      <li className="nav-item NonOpaque">
        <NavLink
          to="/"
          end
          className={ isActive }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="projectGallery/"
          className={ isActive }
        >
          Project Gallery
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={ isActive }
        >
          Contact
        </NavLink>
      </li>
    </ul>
	 </nav>
	);
}

export default Header;