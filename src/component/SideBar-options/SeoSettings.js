import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function SeoSettings() {
  return (
    <Fragment>
    <Breadcrumb parent="Starter kit" title="Sample Page" />
    <Container fluid={true}>
        <Row>
            <Col sm="12">
                <Card>
                    <CardHeader>
                        <h5>SEO SETTINGS</h5>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="title">Home Title:</Label>
                                <Input type="text" name="title" id="title" placeholder="Digital vyapar,Bada vyapar\Indore" required />
                            </FormGroup>
                            <FormGroup>
                            <Label for="title">Site Title:</Label>
                            <Input type="text" name="title" id="title" placeholder="Digital vyapar,Bada vyapar\Indore" required />
                           </FormGroup>
                        <FormGroup>
                        <Label for="keyword">Meta Keyword:</Label>
                        <Input type="text" name="keyword" id="keyword" placeholder="Vosoyapar" required />
                    </FormGroup>
                    <FormGroup>
                    <Label for="analytics">Google Analytics:</Label>
                    <Input type="text" name="analytics" id="analytics" placeholder="1" required />
                </FormGroup>
                <FormGroup>
                    <Label for="code">Google Verification Code:</Label>
                    <Input type="text" name="code" id="code" placeholder="1" required />
                </FormGroup>
                <FormGroup>
                    <Label for="tag">Google Tag Manager:</Label>
                    <Input type="text" name="tag" id="tag" placeholder="1" required />
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

export default SeoSettings
