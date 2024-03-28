import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

function ServiceSettings() {
  const [services, setServices] = useState([
    { id: 1, name: 'Service 1', price: 100, featured: true, active: true, createdAt: new Date('2024-03-28T10:00:00') },
    { id: 2, name: 'Service 2', price: 200, featured: false, active: true, createdAt: new Date('2024-03-28T11:00:00') },
    { id: 3, name: 'Service 3', price: 300, featured: true, active: false, createdAt: new Date('2024-03-28T12:00:00') },
    // Add more dummy data as needed
  ]);

  return (
    <div>
      <Fragment>
        <Breadcrumb parent="Default" title="Sample Page"/>
        <Container fluid={true}>
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader>
                  <h5>SERVICE SETTINGS</h5>
                </CardHeader>
                <CardBody>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>SERVICE NAME</th>
                        <th>SERVICE PRICE</th>
                        <th>FEATURED</th>
                        <th>ACTIVE</th>
                        <th>CREATED AT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.map(service => (
                        <tr key={service.id}>
                          <td>{service.name}</td>
                          <td>{service.price}</td>
                          <td>
                            <span style={{ color: service.featured ? 'green' : 'red' }}>●</span>
                            {service.featured ? 'Yes' : 'No'}
                          </td>
                          <td>
                            <span style={{ color: service.active ? 'green' : 'red' }}>●</span>
                            {service.active ? 'Yes' : 'No'}
                          </td>
                          <td>{`${service.createdAt.toLocaleDateString()}, ${service.createdAt.toLocaleTimeString()}`}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>   
      </Fragment> 
    </div>
  );
}

export default ServiceSettings;
