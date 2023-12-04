import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import "../../css/FormLogin.css"

function FormRegistroUser() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className="white-text">Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label className="white-text" >Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className="white-text" >Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridPhoneNumber">
        <Form.Label className="white-text" >Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Enter phone number" />
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check className="white-text" type="checkbox" label="Check me out" />
      </Form.Group>

      <Link to="/login" className="linkPrimerioCadastro">
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Link>
    </Form>
  );
}

export default FormRegistroUser;