import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const Navi = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          Google Book Search
        </NavbarBrand>
        <div>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>
              </li>
              <li className="nav-item">
                <NavItem>
                  <NavLink
                    href="/saved"
                    className={
                      window.location.pathname === "/saved"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  />
                  <Link to="/saved">Saved</Link>
                </NavItem>
              </li>
            </ul>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navi;
