import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import Link from 'next/link';

const BsNavLink = props => {
  const {title, href} = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">
        {title}
      </a>
    </Link>
  )
}

const BSNavBrand = () => {
  return (
    <Link href="/">
      <a className="navbar-brand port-navbar-brand">Richard Siem</a>
    </Link>
  )
}

const LoginBtn = () => {
  return <a className="nav-link port-navbar-link" href="/api/v1/login">Login</a>
}

const LogoutBtn = () => {
  return <a className="nav-link port-navbar-link" href="/api/v1/logout">Logout</a>
}

const Header = ({user, loading}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
      <BSNavBrand />
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/" title="Home" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/about" title="About" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/portfolios" title="Portfolios" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/blogs" title="Blogs" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/cv" title="CV" />
          </NavItem>
        </Nav>
        <Nav navbar>
          { !loading &&
            <>
              { user &&
                <NavItem className="port-navbar-item">
                  <LogoutBtn />
                </NavItem>
              }
              { !user &&
                <NavItem className="port-navbar-item">
                  <LoginBtn />
                </NavItem>
              }
            </>
          }
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
