import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import Timeline from '../Timeline/Timeline';
import Chat from '../Chat/Chat';
export default class Home extends Component {

    render() {
        return (
            <section className="content">
                <Container>
                    <Row>
                        <Timeline />
                        <Chat />
                    </Row>
                </Container>
            </section>
        );
    }
}