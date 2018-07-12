import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';


const NotFound = () => (
    <section className="content">
        
            <Row>
                <Col md={{ size:6 , offset:3}}>
                    <h2> Page Not Found </h2>
                    <Link to="/">Go Home</Link>
                </Col>
            </Row>
        
    </section>
   
);

export default NotFound;