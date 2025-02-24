import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar>
        <Nav>
          <NavItem>
            <Link to="/">
              <img src={logo} />
            </Link>
          </NavItem>
          <NavItem>
            <NavLink active href="/login">
              Login
            </NavLink>
          </NavItem>

          <NavItem>
            <Link to="/profile">Profile</Link>
          </NavItem>

          <NavItem>
            <Link to="/register">Register</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
