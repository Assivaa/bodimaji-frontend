import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormTotalPrice() {
  return (
    <Card className="me-5" style={{ width: '20rem', float:'right', backgroundColor:'transparent',border:'none'}}>
      <Card.Body>
        <Row>
        <Col xs={7}><p style={{color:'darkred'}}>Everyone Shirt In Pearl</p></Col>
        <Col  className="mb-2"><p style={{color:'darkred'}}>Rp.214.000</p></Col>
        <hr></hr>
        <Col xs={7}><p className="mt-2">Subtotal</p></Col>
        <Col  className="mt-2 mb-2"><p>Rp.214.000</p></Col>
        <Col xs={5}><p className="mt-2">Shipping</p></Col>
        <Col  className="mt-2 mb-2"><p>Calculated at next stop</p></Col>
        <hr></hr>
        <Col xs={5}><h5 style={{fontFamily: 'DM Serif Display'}} className="mt-2"><strong>
        Total</strong></h5></Col>
        <Col><h5 style={{color:'darkred',fontFamily: 'DM Serif Display'}} className="mt-2 ms-3"><strong>
        Rp.214.000</strong></h5></Col>
        </Row>

      </Card.Body>
    </Card>
  );
}

export default FormTotalPrice;