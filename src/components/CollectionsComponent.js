import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';

function CollectionsComponent() {
  return (
    <Container>
    <div className="mt-3">
      <Row>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./assets/images/img2.jpg" />
      <Card.Body>
        <Card.Title><h4 className="card-title">Gorgeous Dress</h4></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="btn-dark btn-sm">Detail <i className="bi bi-eye"></i></Button>
      </Card.Body>
    </Card>
    </Col>

        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./assets/images/img2.jpg" />
      <Card.Body>
        <Card.Title><h4 className="card-title">Gorgeous Dress</h4></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="btn-dark btn-sm">Detail <i className="bi bi-eye"></i></Button>
      </Card.Body>
    </Card>
    </Col>

        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./assets/images/img2.jpg" />
      <Card.Body>
        <Card.Title><h4 className="card-title">Gorgeous Dress</h4></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="btn-dark btn-sm">Detail <i className="bi bi-eye"></i></Button>
      </Card.Body>
    </Card>
    </Col>

      </Row>
      </div>
    </Container>
  );
}

export default CollectionsComponent;