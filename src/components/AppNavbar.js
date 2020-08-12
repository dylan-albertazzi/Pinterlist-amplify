import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";

export default function AppNavbar() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <Navbar
        light
        collapseOnSelect
        expand="sm"
        className="mb-5 pt-3 color-nav shadow-sm"
      >
        <Container>
          <NavbarBrand>
            <Link to="/">
              <img
                src={
                  // process.env.PUBLIC_URL
                  require("../images/Pinterlist-logo-main.png")
                }
                height="60"
              />
            </Link>
          </NavbarBrand>
          <NavbarToggler
            className="toggle-color border-0 p-1"
            onClick={toggle}
          />
          <Collapse variant="dark" dark isOpen={isToggled} navbar>
            <Nav className="ml-auto d-flex align-items-center" navbar>
              <NavItem>
                <span className="navbar-text-color mr-3 text-muted">About</span>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
