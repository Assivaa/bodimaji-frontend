import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormComponentInformation() {
  return (
    <>
    <FloatingLabel controlId="floatingSelect1" label="Saved Address" className="ms-5 mt-3" >
      <Form.Select aria-label="Floating label select example" style={{width:'47%', backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}}>
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>

    <FloatingLabel controlId="floatingSelect1" label="Country/Region" className="ms-5 mt-3" >
      <Form.Select aria-label="Floating label select example" style={{width:'47%', backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}}>
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>

    <Form>
    <Row className="max-vw-70">
      <Col xs={3}>
        <FloatingLabel controlId="floatingInputGrid" label="First Name" className="ms-5 mt-3">
          <Form.Control type="text" placeholder="name@example.com" style={{backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}}/>
        </FloatingLabel>
      </Col>
      <Col xs={3}>
        <FloatingLabel controlId="floatingInputGrid" label="Last Name" className="mt-3">
          <Form.Control type="text" placeholder="name@example.com" style={{backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}}/>
        </FloatingLabel>
      </Col>
    </Row>
    </Form>

    <FloatingLabel
        controlId="floatingInput"
        label="Address"
        className="ms-5 mt-3"
      >
        <Form.Control type="text" placeholder="name@example.com"  style={{width:'47%',backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}} />
      </FloatingLabel>

       <FloatingLabel
        controlId="floatingInput"
        label="Apartment,Suite,etc (Optional)"
        className="ms-5 mt-3"
      >
        <Form.Control type="text" placeholder="name@example.com"  style={{width:'47%',backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}} />
      </FloatingLabel>

       <FloatingLabel
        controlId="floatingInput"
        label="City"
        className="ms-5 mt-3"
      >
        <Form.Control type="text" placeholder="name@example.com"  style={{width:'47%',backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}} />
      </FloatingLabel>

         <Form>
    <Row className="max-vw-70">
      <Col xs={3}>
        <FloatingLabel controlId="floatingInputGrid" label="Province" className="ms-5 mt-3">
          <Form.Control type="text" placeholder="name@example.com" style={{backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}}/>
        </FloatingLabel>
      </Col>
      <Col xs={3}>
        <FloatingLabel controlId="floatingInputGrid" label="Postal Code" className="mt-3">
          <Form.Control type="text" placeholder="name@example.com" style={{backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}}/>
        </FloatingLabel>
      </Col>
    </Row>
    </Form>

     <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="ms-5 mt-3"
      >
        <Form.Control type="text" placeholder="name@example.com"  style={{width:'47%',backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}} />
      </FloatingLabel>


    </>
    


  );
}

export default FormComponentInformation;