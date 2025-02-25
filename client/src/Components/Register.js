import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

import { Container, Row, Col, Form } from "react-bootstrap";

import { userSchemaValidation } from "../Validations/UserValidations";

const Register = () => {
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col md={2}></Col>
          </Row>
          <br />
          <Row>
            Name <br />
            <Input type="text"></Input>
            <Col md={2}></Col>
          </Row>
          <br />
          <Row>
            e-mail <br />
            <Input type="text"></Input>
            <Col md={2}></Col>
          </Row>
          <br />
          <Row>
            password <br />
            <Input type="password"></Input>
            <Col md={2}></Col>
          </Row>
          <br />
          <Row>
            Confirm password
            <Input type="password"></Input>
            <Col md={2}></Col>
          </Row>

          <Row>
            <br />
            <Col md={2}></Col>
            <Button>Register</Button>
            <p className="smalltext">
              Have Account? <Link to="/login">login now.</Link>
            </p>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
