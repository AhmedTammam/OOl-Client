import React from 'react';
import { Col, Card, CardBody, CardTitle, CardSubtitle, Button, FormGroup, Label } from 'reactstrap';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';


const Signup = ({
    onChangeReg,
    values,
    errors,
    touched,
    isSubmitting
}) => {
        return (
            <Col  xs="12" md={{size:6, offset:3}} className="mb-3">
            <Card>
                <CardBody>
                    <CardTitle className="text-center mb-3 py-3 text-primary border-bottom">SignUp</CardTitle>
                    <CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Label>Name</Label>
                                <Field className="form-control" type="text" name="name" placeholder="Name"/>
                                {touched.name && errors.name && <p className="text-danger font-weight-light">{errors.name}</p>}
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Field className="form-control"  type="email" name="email" placeholder="Email"/>
                                {touched.email && errors.email && <p className="text-danger font-weight-light">{errors.email}</p>}
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Field className="form-control" type="password" name="password" placeholder="password"/>
                                {touched.password && errors.password && <p className="text-danger font-weight-light">{errors.password}</p>}
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label>
                                    <Field type="checkbox" name="check" checked={values.check}/>{' '}
                                    I agree to the Terms and Conditions
                                    {touched.check && errors.check && <p className="text-danger font-weight-light">{errors.check}</p>}
                                </Label>
                            </FormGroup>
                            <Button disabled={isSubmitting} type="submit" className="btn bg-primary btn-block">Submit</Button>
                            <FormGroup className="mt-3">
                                <Label>
                                Already have an account? <a href="" onClick={onChangeReg}>login</a>
                                </Label>
                            </FormGroup>
                        </Form>
                    </CardSubtitle>
                </CardBody>
            </Card>
            </Col>
        );
};

const SignupForm = withFormik({
    mapPropsToValues({ name, email, password, check }) {
        return{
            name: name || '',
            email: email || '',
            password: password || '',
            check: check || false
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().min(6).required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
        check: Yup.bool().test(value => value === true).required()
    }),
    handleSubmit(values, { setSubmitting}) {
        console.log(values)
        setSubmitting(false)
    }
})(Signup);

export default SignupForm;