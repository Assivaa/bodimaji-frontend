import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormContact() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Contact  "
        className="ms-5 mt-5"
      >
        <Form.Control type="text" placeholder="name@example.com"  style={{width:'47%',backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}} />
      </FloatingLabel>
   
      <FloatingLabel
        controlId="floatingInput"
        label="Ship To  "
        className="ms-5 mt-3"
      >
        <Form.Control type="text" placeholder="name@example.com"  style={{width:'47%',backgroundColor:'transparent',
      border:'solid 2px grey', borderRadius:'15px'}} />
      </FloatingLabel>
    </>
  );
}

export default FormContact;