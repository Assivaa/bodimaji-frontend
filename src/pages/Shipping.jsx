import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import BreadcrumbComponent from '../components/BreadCrumbComponent';
import FormTotalPrice from '../components/FormTotalPrice';
import FormCheckShipping from '../components/FormCheckShipping';
import FormContact from '../components/FormContact';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Shipping() {
  return (
    <div className="Shipping">
      <NavbarComponent />
      <BreadcrumbComponent />
      <FormTotalPrice />
      <FormContact />
      <h5 className="ms-5 mt-5 mb-3" style={{fontFamily:'DM Serif Display'}}><strong>Shipping Method</strong></h5>
      <FormCheckShipping />
      <div className="Bottom-btn mt-4 mb-5 ms-5">
      <Row>
      <Col xs={4}><a href="/Information" style={{ fontSize: 20, color:'darkred' }} >
      <strong><i className="bi bi-arrow-left me-2" style={{ fontSize: 25, color:'black' }}></i>Return To Information</strong></a></Col>
      <Col><a href="/Payment"><Button size="md" style={{ fontSize: 20, width:280, height:80, 
      backgroundColor:'darkred', fontWeight:'Bold', border:'none'}}>Continue To Payment</Button></a></Col>
      </Row>
      </div>

    </div>
  );
}

export default Shipping;