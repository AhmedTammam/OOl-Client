import React, { Component } from "react";

import { Form, Input } from 'reactstrap';

export default class Search extends Component {
    render() {
        return (
            <Form inline className="col-md-7 my-2 my-lg-0 mr-auto cont d-none d-sm-block">
                <Input placeholder="Search" className="col-md-12 search d-none d-sm-block" />
            </Form>
        );
    }
}