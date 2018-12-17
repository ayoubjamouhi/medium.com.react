import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown ,
  NavbarBrand,
  NavbarToggler,
  Navbar,
  Collapse,
} from 'reactstrap';

import './Styles/Header.css'

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar  light expand="md">
          <NavbarBrand href="/"><Link to="/">readinGarden</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/blog/">
                  <Link to="/blog">Blog</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contact us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}


export default Header;
