import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

function TransactionList() {
  const [transactions, setTransactions] = useState([
    { id: 1, transactionId: 'TXN001', typeBankId: 'Type/Bank 1', status: 'Success', planMonth: 'March 2024', amount: 100, paidAmount: 100, createdAt: new Date('2024-03-28T10:00:00') },
    { id: 2, transactionId: 'TXN002', typeBankId: 'Type/Bank 2', status: 'Failed', planMonth: 'April 2024', amount: 200, paidAmount: 0, createdAt: new Date('2024-03-28T11:00:00') },
    { id: 3, transactionId: 'TXN003', typeBankId: 'Type/Bank 3', status: 'Pending', planMonth: 'May 2024', amount: 300, paidAmount: 0, createdAt: new Date('2024-03-28T12:00:00') },
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
                  <h5>TRANSACTION LIST</h5>
                </CardHeader>
                <CardBody>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>SR. NO</th>
                        <th>TRANSACTION ID</th>
                        <th>TYPE/BANK ID</th>
                        <th>STATUS</th>
                        <th>PLAN MONTH</th>
                        <th>AMOUNT</th>
                        <th>PAID AMOUNT</th>
                        <th>CREATED AT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction, index) => (
                        <tr key={transaction.id}>
                          <td>{index + 1}</td>
                          <td>{transaction.transactionId}</td>
                          <td>{transaction.typeBankId}</td>
                          <td>{transaction.status}</td>
                          <td>{transaction.planMonth}</td>
                          <td>{transaction.amount}</td>
                          <td>{transaction.paidAmount}</td>
                          <td>{transaction.createdAt.toLocaleString()}</td>
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

export default TransactionList;

