import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

function EnquiryList() {
  const [enquiries, setEnquiries] = useState([
    { id: 1, userName: 'User 1', userEmail: 'user1@example.com', userMobile: '1234567890', createdAt: new Date('2024-03-28T10:00:00'), userMessage: 'Message 1' },
    { id: 2, userName: 'User 2', userEmail: 'user2@example.com', userMobile: '2345678901', createdAt: new Date('2024-03-28T11:00:00'), userMessage: 'Message 2' },
    { id: 3, userName: 'User 3', userEmail: 'user3@example.com', userMobile: '3456789012', createdAt: new Date('2024-03-28T12:00:00'), userMessage: 'Message 3' },
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
                  <h5>ENQUIRY LIST</h5>
                </CardHeader>
                <CardBody>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>USER NAME</th>
                        <th>USER EMAIL</th>
                        <th>USER MOBILE</th>
                        <th>CREATED AT</th>
                        <th>USER MESSAGE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {enquiries.map(enquiry => (
                        <tr key={enquiry.id}>
                          <td>{enquiry.userName}</td>
                          <td>{enquiry.userEmail}</td>
                          <td>{enquiry.userMobile}</td>
                          <td>{enquiry.createdAt.toLocaleString()}</td>
                          <td>{enquiry.userMessage}</td>
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

export default EnquiryList;
