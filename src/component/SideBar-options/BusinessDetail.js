import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function BusinessDetail() {
  return (
             
    <Fragment>
    <Breadcrumb parent="Starter kit" title="Sample Page" />
    <Container fluid={true}>
        <Row>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <h5>BUSINESS DETAILS</h5>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">Business Information:</Label>
                                <Input type="text" name="name" id="name" placeholder="Enter your name" required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Business Name:</Label>
                                <Input type="email" name="email" id="email" placeholder="Enter your email" required />
                            </FormGroup>
                        <FormGroup>
                        <Label for="city">City:</Label>
                        <Input type="text" name="email" id="email" placeholder="Enter your city" required />
                    </FormGroup>
                    <FormGroup>
                    <Label for="state">State:</Label>
                    <Input type="text" name="state" id="state" placeholder="Enter your state" required />
                </FormGroup>
                <FormGroup>
                          <Label for="address">Address:</Label>
                            <Input type="text" name="email" id="email" placeholder="Enter your address" required />
                        </FormGroup>

                            <FormGroup>
                                <Label for="message">Description:</Label>
                                <Input type="textarea" name="message" id="message" placeholder="Enter your message" required />
                            </FormGroup>

                            <Button color="primary" type="submit">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
</Fragment>
                      
                   
    
  )
}

export default BusinessDetail;
