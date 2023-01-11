import React from 'react';
import NavbarComponent from '../../components/checkout/NavbarComponent';
import BreadcrumbComponent from '../../components/checkout/BreadCrumbComponent';
import FormTotalPrice from '../../components/checkout/FormTotalPrice';
import FormDetailPayment from '../../components/checkout/FormDetailPayment';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function Payment() {
  return (
    <div className="Payment">
      <NavbarComponent />
      <BreadcrumbComponent />
      <FormTotalPrice />
      <FormDetailPayment />
      <div className="Bottom-btn mt-4 mb-5 ms-5">
      <Row>
      <Col xs={4}><a href="/Shipping" style={{ fontSize: 20, color:'darkred' }} >
      <strong><i className="bi bi-arrow-left me-2" style={{ fontSize: 25, color:'black' }}></i>Return To Shipping</strong></a></Col>
      <Col><a href="#"><Button size="md" style={{ fontSize: 20, width:280, height:80, 
      backgroundColor:'darkred', fontWeight:'Bold', border:'none'}}>Checkout</Button></a></Col>
      </Row>
      </div>

    </div>
  );
}

export default Payment;