import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

const img1 = "https://www.google.com/imgres?imgurl=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F04%2F60%2F91%2F88%2F360_F_460918802_XVCymFr7MoziFpnInbTDvrlblYhvAOi2.jpg&tbnid=oFmqhbHmodMb6M&vet=10CAIQxiAoAGoXChMI6K7g6tCWhQMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dprofile&docid=SixlWtBpRVa7SM&w=540&h=360&itg=1&q=profile%20images&ved=0CAIQxiAoAGoXChMI6K7g6tCWhQMVAAAAAB0AAAAAEAc"
const img2 = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F008%2F931%2F593%2Fsmall%2Fconfident-cheerful-male-lawyer-reads-business-news-has-gentle-smile-dressed-in-formal-clothes-poses-in-urban-setting-businessman-checks-email-or-updates-profile-on-digital-tablet-computer-photo.JPG&tbnid=lNzLambjL4IX1M&vet=10CAwQxiAoBGoXChMI6K7g6tCWhQMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fmale-profile&docid=aBlp8BCbn9iPqM&w=300&h=200&itg=1&q=profile%20images&ved=0CAwQxiAoBGoXChMI6K7g6tCWhQMVAAAAAB0AAAAAEAc"
const img3 = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.ctfassets.net%2Fh6goo9gw1hh6%2F2sNZtFAWOdP1lmQ33VwRN3%2F24e953b920a9cd0ff2e1d587742a2472%2F1-intro-photo-final.jpg%3Fw%3D1200%26h%3D992%26fl%3Dprogressive%26q%3D70%26fm%3Djpg&tbnid=gIgCQ-hjxb6uFM&vet=12ahUKEwi788b00ZaFAxUmyqACHbECDHoQMygAegQIARBw..i&imgrefurl=https%3A%2F%2Fwww.picmonkey.com%2Fblog%2Fcreate-the-best-profile-pic&docid=R6YihD6FdgssrM&w=1200&h=992&q=profile%20images&ved=2ahUKEwi788b00ZaFAxUmyqACHbECDHoQMygAegQIARBw"

function GallerySettings() {
  const [images, setImages] = useState([
    { id: 1, url: img1, type: 'Type 1', featured: true, active: true, createdAt: new Date('2024-03-28T10:00:00') },
    { id: 2, url: img2, type: 'Type 2', featured: false, active: true, createdAt: new Date('2024-03-28T11:00:00') },
    { id: 3, url: img3, type: 'Type 3', featured: true, active: false, createdAt: new Date('2024-03-28T12:00:00') },
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
                  <h5>GALLERY SETTINGS</h5>
                </CardHeader>
                <CardBody>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>IMAGE</th>
                        <th>TYPE</th>
                        <th>FEATURED</th>
                        <th>ACTIVE</th>
                        <th>CREATED AT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {images.map(image => (
                        <tr key={image.id}>
                          <td><img src={image.url} alt="" style={{ width: '50px', height: '50px', objectFit: 'cover' }} /></td>
                          <td>{image.type}</td>
                          <td>
                            <span style={{ color: image.featured ? 'green' : 'red' }}>●</span>
                            {image.featured ? 'Yes' : 'No'}
                          </td>
                          <td>
                            <span style={{ color: image.active ? 'green' : 'red' }}>●</span>
                            {image.active ? 'Yes' : 'No'}
                          </td>
                          <td>{`${image.createdAt.toLocaleDateString()}, ${image.createdAt.toLocaleTimeString()}`}</td>
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

export default GallerySettings;
