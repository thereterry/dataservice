import React from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <a href="#">LOGO A/S</a>
        </div>

        <div>
        
          <NavLink to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">Om os</NavLink>
          <NavLink to="/news" activeClassName="active">Nyheder</NavLink>
          <NavLink to="/contact" activeClassName="active">Kontakt</NavLink>
          <NavLink to="/admin" activeClassName="active">ADMIN</NavLink>
          <NavLink to="/posts" activeClassName="active">JsonPlaceholder</NavLink>
          <NavLink to="/post/1" activeClassName="active">Post</NavLink>
          <NavLink to="/photos" activeClassName="active">Photos</NavLink>
          <NavLink to="/todos" activeClassName="active">Todos</NavLink>
          <NavLink to="/starships" activeClassName="active">SWAPI</NavLink>
          <NavLink to="/login" activeClassName="active">Login</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
