import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

function ProductSettings() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 450, featured: true, active: true, createdAt: new Date('2024-03-28T10:00:00') },
    { id: 2, name: 'Product 2', price: 200, featured: false, active: true, createdAt: new Date('2024-03-28T11:00:00') },
    { id: 3, name: 'Product 3', price: 308, featured: true, active: false, createdAt: new Date('2024-03-28T12:00:00') },
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
                  <h5>PRODUCT SETTINGS</h5>
                </CardHeader>
                <CardBody>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>PRODUCT NAME</th>
                        <th>PRODUCT PRICE</th>
                        <th>FEATURED</th>
                        <th>ACTIVE</th>
                        <th>CREATED AT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(product => (
                        <tr key={product.id}>
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                          <td>
                            <span style={{ color: product.featured ? 'green' : 'red' }}>●</span>
                            {product.featured ? 'Yes' : 'No'}
                          </td>
                          <td>
                            <span style={{ color: product.active ? 'green' : 'red' }}>●</span>
                            {product.active ? 'Yes' : 'No'}
                          </td>
                          <td>{`${product.createdAt.toLocaleDateString()}, ${product.createdAt.toLocaleTimeString()}`}</td>
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

export default ProductSettings;


