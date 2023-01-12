import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import BreadcrumbComponent from '../../components/checkout/BreadCrumbComponent';
import FormTotalPrice from '../../components/checkout/FormTotalPrice';
import FormCheckShipping from '../../components/checkout/FormCheckShipping';
import FormContact from '../../components/checkout/FormContact';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Shipping() {
  return (
    <div className="/checkout/shipping">
      <Navbar />
      <BreadcrumbComponent />
      <FormTotalPrice />
      <FormContact />
      <h5 className="ms-5 mt-5 mb-3" style={{fontFamily:'DM Serif Display'}}><strong>Shipping Method</strong></h5>
      <FormCheckShipping />
      <div className="Bottom-btn mt-4 mb-5 ms-5">
      <Row>
      <Col xs={4}><a href="/checkout/information" style={{ fontSize: 20, color:'darkred' }} >
      <strong><i className="bi bi-arrow-left me-2" style={{ fontSize: 25, color:'black' }}></i>Return To Information</strong></a></Col>
      <Col><a href="/checkout/Payment"><Button size="md" style={{ fontSize: 20, width:280, height:80, 
      backgroundColor:'darkred', fontWeight:'Bold', border:'none'}}>Continue To Payment</Button></a></Col>
      </Row>
      </div>

    </div>
  );
}

export default Shipping;