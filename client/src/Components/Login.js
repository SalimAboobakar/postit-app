import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import img from "../Images/loginImage.jpg";
import { Container, Row, Col, Form } from "react-bootstrap"; // Import necessary components
const Login = () => {
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col md={3}></Col>
          </Row>

          <Row>
            e-mail <br />
            <Input type="text">e-mail</Input>
            <Col md={3}></Col>
          </Row>
          <br />
          <Row>
            password <br />
            <Input type="text"></Input>
            <Col md={3}></Col>
          </Row>

          <Row>
            <br />
            <Col md={3}></Col>
            <Button>login</Button>
            <p className="smalltext">
              No Account? <Link to="/register">Sign Up now.</Link>
            </p>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
