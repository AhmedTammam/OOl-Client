import React, { Component } from 'react';
import { Col } from "reactstrap";
import Tellstory from "./Tellstory";
import Posts from "./Posts";

export default class Home extends Component {
    render() {
        return (
            <Col md={{ size: 6, offset: 3 }}>
                <Tellstory/>
                <Posts />
            </Col>
        );
    }
}