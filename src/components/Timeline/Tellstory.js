import React, { Component } from 'react';
import { Row, Card, CardBody, InputGroup, InputGroupAddon } from "reactstrap";

export default class Tellstory extends Component {

    constructor(props) {
        super(props);
        this.imageInput = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.imageInput.current.click();
    }
    render() {
        return (
            <Row className="d-sm-block">
                <Card className="card w-100 tell-story">
                    <CardBody>
                        <InputGroup>
                            <input type="text" className="form-control" placeholder="Tell Your Story" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <InputGroupAddon addonType="append">
                                <button className="btn btn-outline-secondary" type="button" onClick={this.handleClick}>
                                    <i className="fa fa-picture-o"></i>
                                    <input id="input" type="file" ref={this.imageInput} />
                                </button>
                                <button className="btn btn-outline-secondary" type="button"><i className="fa fa-paper-plane"></i></button>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardBody>
                </Card>
            </Row>
        );
    }
}