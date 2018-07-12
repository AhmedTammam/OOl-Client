import React, { Component } from 'react';

import { CardBody, Media, InputGroup, InputGroupAddon, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";

export default class Post extends Component {
    render() {
        return (

            <CardBody>
                <Media>
                    <Media object className="rounded-circle" src="https://placehold.it/60x60" alt="Generic placeholder" />
                    <Media body>
                        <h5 className="mt-0">Person</h5>
                        <p className="text-justify">Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <Media object className="mr-3 w-100" src="https://placehold.it/200x200" alt="Generic placeholder" />
                        <InputGroup className="mt-2">
                            <input type="text" className="form-control" placeholder="Leave Comment" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <InputGroupAddon addonType="append">
                                <div className="nav-item dropdown my-0">
                                    <UncontrolledDropdown>
                                        <DropdownToggle>
                                            <i className="fa fa-paper-plane"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Comment</DropdownItem>
                                            <DropdownItem>Comment anonymous</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </InputGroupAddon>
                        </InputGroup>

                        <Media className="mt-3">
                            <Media object className="rounded-circle" src="https://placehold.it/50x50" alt="Generic placeholder" />
                            <Media body>
                                <h5 className="mt-0">Person</h5>
                                <p className="d-inline">Cras sit amet nibh libero,</p>
                                <button className="btn btn-outline-secondary float-right"><i className="fa fa-comments"></i></button>
                            </Media>
                        </Media>
                    </Media>

                </Media>
            </CardBody>


        );
    }
}