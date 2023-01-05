import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import BreadcrumbComponent from '../components/BreadCrumbComponent';
import FormComponentInformation from '../components/FormComponentInformation';
import FormTotalPrice from '../components/FormTotalPrice';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Information() {
  return (
    <div className="Information">
      <NavbarComponent />
      <FormTotalPrice />
      <BreadcrumbComponent />
      <h5 className="tagline1 ms-5 mt-5"><strong>Contact Information</strong></h5>
      <p className="ms-5">Felina Satariah (felinasatariah@gmail.com)</p>
      <h5 className="tagline1 ms-5 mt-5 mb-3"><strong>Shipping Address</strong></h5>
      <FormComponentInformation />
      <div className="Bottom-btn mt-4 mb-5 ms-5">
      <Row>
      <Col xs={3}><a href="#back" style={{ fontSize: 20, color:'darkred' }}><strong><i className="bi bi-arrow-left me-2" style={{ fontSize: 25, color:'black' }}></i>Return To Cart</strong></a></Col>
      <Col><a href="/Shipping"><Button size="md" style={{ fontSize: 20, width:280, height:80, backgroundColor:'darkred', fontWeight:'Bold', border:'none'}}>Continue To Shipping</Button></a></Col>
      </Row>
      </div>

    </div>
  );
}

export default Information;
