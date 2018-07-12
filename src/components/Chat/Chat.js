import React, { Component } from "react";
import { Col, CardHeader, CardFooter, ListGroup, ListGroupItem, Media } from "reactstrap";
export default class Chat extends Component {
    render() {
        return (
            <Col md={{ size: 3, order: "right" }} xs="12" className="d-none d-sm-block aside pt-5">
                <CardHeader className="text-center">
                    Your Latest Chat
                </CardHeader>

                <div className="chat-list">
                    <ListGroup flush className="scrollspy-example">
                        <ListGroupItem>
                            <Media>
                                <Media object src="https://placehold.it/30x30" alt="Generic placeholder" />
                                <Media body>
                                    <h5 className="mt-0">Person</h5>
                                </Media>
                            </Media>
                        </ListGroupItem>

                        <ListGroupItem>
                            <Media>
                                <Media object src="https://placehold.it/30x30" alt="Generic placeholder" />
                                <Media body>
                                    <h5 className="mt-0">Person</h5>
                                </Media>
                            </Media>
                        </ListGroupItem>

                    </ListGroup>
                </div>
                <CardFooter className="chat-footer col-md-3">
                    <input type="text" className="col-md-12 search" />
                </CardFooter>

            </Col>
        );

    }
}