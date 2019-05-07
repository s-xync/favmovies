import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavbarBrand, NavItem, NavLink } from "reactstrap";

import "./css/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark app-navbar">
        <NavbarBrand tag={Link} to="/">
          FavMovies
        </NavbarBrand>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav ml-auto">
            <NavItem>
              <NavLink tag={Link} to="/now-playing" activeclassname="active">
                Now Playing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/favourites" activeclassname="active">
                Favourite Movies
              </NavLink>
            </NavItem>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
