import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

function OrderList() {
  const [orders, setOrders] = useState([
    { id: 1, orderId: 'ORD001', name: 'User 1', mobile: '1234567890', productStatus: 'Delivered', totalPrice: 100, paymentMode: 'Credit Card', paymentStatus: 'Paid' },
    { id: 2, orderId: 'ORD002', name: 'User 2', mobile: '2345678901', productStatus: 'Shipped', totalPrice: 200, paymentMode: 'PayPal', paymentStatus: 'Pending' },
    { id: 3, orderId: 'ORD003', name: 'User 3', mobile: '3456789012', productStatus: 'Pending', totalPrice: 300, paymentMode: 'Cash on Delivery', paymentStatus: 'Paid' },
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
                  <h5>ORDER LIST</h5>
                </CardHeader>
                <CardBody>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>SR. NO</th>
                        <th>ORDER ID</th>
                        <th>NAME</th>
                        <th>MOBILE</th>
                        <th>PRODUCT STATUS</th>
                        <th>TOTAL PRICE</th>
                        <th>PAYMENT MODE</th>
                        <th>PAYMENT STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
                        <tr key={order.id}>
                          <td>{index + 1}</td>
                          <td>{order.orderId}</td>
                          <td>{order.name}</td>
                          <td>{order.mobile}</td>
                          <td>{order.productStatus}</td>
                          <td>{order.totalPrice}</td>
                          <td>{order.paymentMode}</td>
                          <td>{order.paymentStatus}</td>
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

export default OrderList;
