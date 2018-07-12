import React, { Component } from 'react';
import { Row , Card } from "reactstrap";
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <Row>
                <Card className="w-100">
                    <Post />
                    <Post />
                </Card>
            </Row>

        );
    }
}