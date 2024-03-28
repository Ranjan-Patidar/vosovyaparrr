import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import { Container, Row, Col, Card, CardHeader, CardBody, Form, Button } from 'reactstrap';
const imgurl_1 = "https://vosovyapar.com/usr/assets/img/theme/theme_2.png"
const imgurl_2 = "https://vosovyapar.com/usr/assets/img/theme/theme_3.png"
const imgurl_3 = "https://vosovyapar.com/usr/assets/img/theme/theme_4.png"
function TemplateSettings() {
  return (
    <Fragment>
      <Breadcrumb parent="Starter kit" title="Sample Page" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>TEMPLATE SETTINGS</h5>
              </CardHeader>
              <CardBody>
                <Form style={{ display: "flex" }}>
                  <img src={imgurl_1} alt="" style={{ height: "800px", width: "230px", marginBottom: "45px", marginRight: "50px" }} />
                  <img src={imgurl_2} alt="" style={{ height: "800px", width: "230px", marginBottom: "45px", marginRight: "50px" }} />
                  <img src={imgurl_3} alt="" style={{ height: "800px", width: "230px", marginBottom: "45px", marginRight: "50px" }} />
                </Form>
                <Button color="primary" type="submit">Submit</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default TemplateSettings;

