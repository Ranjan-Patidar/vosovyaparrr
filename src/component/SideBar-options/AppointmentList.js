import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

function AppointmentList() {
  const [appointments, setAppointments] = useState([
    { id: 1, userName: 'User 1', userEmail: 'user1@example.com', userMobile: '1234567890', appointmentType: 'Type 1', status: 'Pending', createdAt: new Date('2024-03-28T10:00:00'), userMessage: 'Message 1' },
    { id: 2, userName: 'User 2', userEmail: 'user2@example.com', userMobile: '2345678901', appointmentType: 'Type 2', status: 'Confirmed', createdAt: new Date('2024-03-28T11:00:00'), userMessage: 'Message 2' },
    { id: 3, userName: 'User 3', userEmail: 'user3@example.com', userMobile: '3456789012', appointmentType: 'Type 3', status: 'Cancelled', createdAt: new Date('2024-03-28T12:00:00'), userMessage: 'Message 3' },
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
                  <h5>APPOINTMENTS</h5>
                </CardHeader>
                <CardBody>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>SR. NO</th>
                        <th>USER NAME</th>
                        <th>USER EMAIL</th>
                        <th>USER MOBILE</th>
                        <th>APPOINTMENT TYPE</th>
                        <th>STATUS</th>
                        <th>CREATED AT</th>
                        <th>USER MESSAGE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment, index) => (
                        <tr key={appointment.id}>
                          <td>{index + 1}</td>
                          <td>{appointment.userName}</td>
                          <td>{appointment.userEmail}</td>
                          <td>{appointment.userMobile}</td>
                          <td>{appointment.appointmentType}</td>
                          <td>{appointment.status}</td>
                          <td>{appointment.createdAt.toLocaleString()}</td>
                          <td>{appointment.userMessage}</td>
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

export default AppointmentList;
