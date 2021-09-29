import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
  const  activeStyle={
        fontWeight: "bold",
            color: "red"
    }
    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle}>Home</NavLink>
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
            <NavLink to="/friend" activeStyle={activeStyle}>Friends</NavLink>

        </nav>
    );
};

export default Header;