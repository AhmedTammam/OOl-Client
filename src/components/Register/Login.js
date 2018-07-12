import React from 'react';
import { Col, Card, CardBody, CardTitle, CardSubtitle, Button, FormGroup, Label } from 'reactstrap';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import Facebook from './Facebook';

const Login = ({
    onChangeReg,
    values,
    errors,
    touched
})=> {
    return (
        <Col xs="12" md={{size:6, offset:3}} className="mb-3">
        <Card>
            <CardBody>
                <CardTitle className="text-center mb-3 py-3 text-primary border-bottom">Login</CardTitle>
                <CardSubtitle>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Field className="form-control" type="email" name="email" id="exampleEmail" placeholder="Email"/>
                            {touched.email && errors.email && <p className="text-danger font-weight-light">{errors.email}</p>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Field className="form-control" type="password" name="password" id="examplePassword" placeholder="password"/>
                            {touched.password && errors.password && <p className="text-danger font-weight-light">{errors.password}</p>}
                        </FormGroup>
                        <Button type="submit" className="btn bg-primary btn-block">Submit</Button>
                        <div className="justify-content-center mt-3">
                        <Facebook/>
                        </div>
                        <FormGroup className="mt-3">
                        <Label>
                        Don't have an account? <a href="" onClick={onChangeReg}>Create One</a>
                        </Label>
                    </FormGroup>
                    </Form>
                </CardSubtitle>
            </CardBody>
        </Card>
        </Col>
    );
};

const LoginForm = withFormik({
    mapPropsToValues({ email, password }) {
        return{
            email: email || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
    }),
    handleSubmit(values, { setSubmitting}) {
        console.log(values)
        setSubmitting(false)
    }
})(Login);

export default LoginForm;