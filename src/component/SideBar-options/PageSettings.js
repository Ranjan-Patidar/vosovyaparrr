import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function PageSettings() {
  return (
    <Fragment>
    <Breadcrumb parent="Starter kit" title="Sample Page" />
    <Container fluid={true}>
        <Row>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <h5>PAGES</h5>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="message">About Content:</Label>
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

export default PageSettings
