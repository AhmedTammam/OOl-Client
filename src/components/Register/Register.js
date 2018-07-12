import React, {Component} from 'react';

import { Container, Row } from 'reactstrap';

import SignupForm from './Signup';
import LoginForm from './Login';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            register: true
        };

        this.ChangeRegister = this.ChangeRegister.bind(this);
    }
    ChangeRegister(e){
        e.preventDefault();
        this.setState({
            register: !this.state.register
        });
    }
    render(){
            return (
                <Container>
                    <h1 className="display-3 text-center">OOOl</h1>
                    <Row className="mt-5">
                        {!this.state.register ?
                             <SignupForm onChangeReg={this.ChangeRegister}/> :
                             <LoginForm onChangeReg={this.ChangeRegister}/> 
                        }
                    </Row>
                </Container>
            );
        
    
    }
};

export default Register;