import React from "react";
import { NavLink } from "react-router-dom";

const isActive = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

function Header() {
	return (
		<ul className="nav nav-tabs">
      <li className="nav-item">
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
          ProjectGallery
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
	);
}

export default Header;