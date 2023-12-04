import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import "../../css/FormLogin.css";

function FormLogin() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="white-text">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="white-text">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="white-text">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className="white-text" type="checkbox" label="Check me out" />
      </Form.Group>

      <Link to="/inicial" className="linkPrimerioCadastro">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Link>

      <Link to="/registrosUsuario" className="linkPrimerioCadastro">
        <p>Primeiro cadastro</p>
      </Link>
    </Form>
  );
}

export default FormLogin;
