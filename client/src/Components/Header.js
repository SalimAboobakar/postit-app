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

import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { logout } from "../Features/UserSlice";
function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlelogout = async () => {
    dispatch(logout());

    //ensure that the state update from the logout action has been processed before proceeding to the next step.

    await new Promise((resolve) => setTimeout(resolve, 100));

    navigate("/login"); //redirect to login page route.
  };
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
          <NavItem>
            <Link to="/update">Update</Link>
          </NavItem>
          <NavItem>
            <Link onClick={handlelogout}>logout</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
