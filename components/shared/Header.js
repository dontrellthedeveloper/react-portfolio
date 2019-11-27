import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';


const BsNavLink = (props) => {
  const { route, title } = props;

  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link"> {title} </a>
    </Link>
  )
}

export default class Header extends React.Component {
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

    const { isAuthenticated, user } = this.props;

    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Dontrell Washington</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/portfolios" title="Portfolio" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/blogs" title="Blog" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/cv" title="Cv" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// import React, { useState } from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText
// } from 'reactstrap';
//
// const Header = (props) => {
//     const [isOpen, setIsOpen] = useState(false);
//
//     const toggle = () => setIsOpen(!isOpen);
//
//     return (
//         <div>
//             <Navbar color="light" light expand="md">
//                 <NavbarBrand href="/">reactstrap</NavbarBrand>
//                 <NavbarToggler onClick={toggle} />
//                 <Collapse isOpen={isOpen} navbar>
//                     <Nav className="mr-auto" navbar>
//                         <NavItem>
//                             <NavLink href="/components/">Components</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//                         </NavItem>
//                         <UncontrolledDropdown nav inNavbar>
//                             <DropdownToggle nav caret>
//                                 Options
//                             </DropdownToggle>
//                             <DropdownMenu right>
//                                 <DropdownItem>
//                                     Option 1
//                                 </DropdownItem>
//                                 <DropdownItem>
//                                     Option 2
//                                 </DropdownItem>
//                                 <DropdownItem divider />
//                                 <DropdownItem>
//                                     Reset
//                                 </DropdownItem>
//                             </DropdownMenu>
//                         </UncontrolledDropdown>
//                     </Nav>
//                     <NavbarText>Simple Text</NavbarText>
//                 </Collapse>
//             </Navbar>
//         </div>
//     );
// };
//
// export default Header;