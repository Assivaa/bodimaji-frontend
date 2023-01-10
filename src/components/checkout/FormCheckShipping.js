import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FormCheckShipping() {
  return (
    <>
      <InputGroup className="p-2 ms-5" style={{width:'47%',border:'solid 2px grey', borderRadius:'15px', 
      backgroundColor:'transparent'}}>
        <Form.Check type="radio" className="mt-2 mb-1 ms-2"isInvalid/>
        <Form.Control placeholder="South Java" disabled style={{backgroundColor:'transparent'
        ,border:'none'}} /><p className="mt-2 mb-1">Rp.90000</p>
      </InputGroup>
       
       <InputGroup className="p-2 ms-5 mt-2" style={{width:'47%',border:'solid 2px grey', borderRadius:'15px', 
      backgroundColor:'transparent'}}>
        <Form.Check type="radio" className="mt-2 mb-1 ms-2"isInvalid/>
        <Form.Control placeholder="North Java" disabled style={{backgroundColor:'transparent'
        ,border:'none'}} /><p className="mt-2 mb-1">Rp.80000</p>
      </InputGroup>
      
      <InputGroup className="p-2 ms-5 mt-2" style={{width:'47%',border:'solid 2px grey', borderRadius:'15px', 
      backgroundColor:'transparent'}}>
        <Form.Check type="radio" className="mt-2 mb-1 ms-2"isInvalid/>
        <Form.Control placeholder="North Java" disabled style={{backgroundColor:'transparent'
        ,border:'none'}} /><p className="mt-2 mb-1">Rp.80000</p>
      </InputGroup>

<InputGroup className="p-2 ms-5 mt-2" style={{width:'47%',border:'solid 2px grey', borderRadius:'15px', 
      backgroundColor:'transparent'}}>
        <Form.Check type="radio" className="mt-2 mb-1 ms-2"isInvalid/>
        <Form.Control placeholder="North Java" disabled style={{backgroundColor:'transparent'
        ,border:'none'}} /><p className="mt-2 mb-1">Rp.80000</p>
      </InputGroup>

<InputGroup className="p-2 ms-5 mt-2 mb-5" style={{width:'47%',border:'solid 2px grey', borderRadius:'15px', 
      backgroundColor:'transparent'}}>
        <Form.Check type="radio" className="mt-2 mb-1 ms-2"isInvalid/>
        <Form.Control placeholder="North Java" disabled style={{backgroundColor:'transparent'
        ,border:'none'}} /><p className="mt-2 mb-1">Rp.80000</p>
      </InputGroup>

    </>
  );
}

export default FormCheckShipping;