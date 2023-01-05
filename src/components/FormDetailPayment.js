import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormDetailPayment() {
  return (
    <>
 <FloatingLabel
        controlId="floatingInput"
        label="Contact"
        className="ms-5 mt-5"
      >
        <Form.Control type="text"  style={{width:'47%',backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}} value="Felina Satariah" disabled/>
      </FloatingLabel>
      
      <FloatingLabel
        controlId="floatingInput"
        label="Ship To"
        className="ms-5 mt-2"
      >
        <Form.Control type="text"  style={{width:'47%',backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}} value="Jl.Raya" disabled/>
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Method"
        className="ms-5 mt-2"
      >
        <Form.Control type="text"  style={{width:'47%',backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}} value="South Java - Rp.90.000" disabled/>
      </FloatingLabel>

      <h3 className="ms-5 mt-5 mb-4" style={{fontFamily: 'Arapey'}}><strong>Payment Method</strong></h3>
      <InputGroup className="p-2 ms-5" style={{width:'47%',border:'solid 2px grey', borderRadius:'15px', 
      backgroundColor:'transparent'}}>
        <Form.Check type="radio" className="mt-2 mb-1 ms-2"isInvalid/>
        <Form.Control placeholder="Bank Transfer" disabled style={{backgroundColor:'transparent'
        ,border:'none'}} /><p className="mt-2 mb-1">BCA a.n Sabrina Satariah : 012345678</p>
      </InputGroup>
      </>

  );
}

export default FormDetailPayment;