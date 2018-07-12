import React, { Component } from "react";

import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Nav, DropdownToggle, DropdownMenu, DropdownItem, Container, UncontrolledDropdown, Button
} from 'reactstrap';
import Search from './Search';

export default class NavBar extends Component {

    constructor(props) {
        super(props)

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            isNavbarOpen: false,
        };

    }

    toggleNavbar() {
        this.setState({
            isNavbarOpen: !this.state.isNavbarOpen
        });
    }


    render() {
        return (
            <Navbar className="navbar-bg" fixed="top" expand="lg">
                <Container>
                    <NavbarBrand href="#">
                        OOOL
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar}>
                        <span><i className="fa fa-align-justify fa-lg text-light"></i></span>
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isNavbarOpen} navbar>
                        <Nav className="mr-auto navbar-nav">
                            <NavItem>
                                <NavLink href="/profile" className="d-none d-sm-block">
                                    Profile
                                </NavLink>
                            </NavItem>

                        </Nav>
                        <Search />
                        <Button color="setting" className="d-none d-sm-block d-none d-sm-block">
                            <i className="fa fa-cog fa-lg"></i>
                        </Button>
                        <Nav>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <i className="fa fa-chevron-circle-down fa-lg d-none d-sm-block"></i>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Post</DropdownItem>
                                    <DropdownItem>Comment</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
};


