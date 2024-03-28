import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

function BlogSettings() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Blog 1', active: true, createdAt: new Date('2024-03-28T10:00:00') },
    { id: 2, title: 'Blog 2', active: false, createdAt: new Date('2024-03-28T11:00:00') },
    { id: 3, title: 'Blog 3', active: true, createdAt: new Date('2024-03-28T12:00:00') },
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
                  <h5>BLOGS SETTINGS</h5>
                </CardHeader>
                <CardBody>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>TITLE</th>
                        <th>ACTIVE</th>
                        <th>CREATED AT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {blogs.map(blog => (
                        <tr key={blog.id}>
                          <td>{blog.title}</td>
                          <td>
                            <span style={{ color: blog.active ? 'green' : 'red' }}>●</span>
                            {blog.active ? 'Yes' : 'No'}
                          </td>
                          <td>{`${blog.createdAt.toLocaleDateString()}, ${blog.createdAt.toLocaleTimeString()}`}</td>
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

export default BlogSettings;
