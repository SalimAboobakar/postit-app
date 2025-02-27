import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import img from "../Images/loginImage.jpg";
import { Container, Row, Col, Form } from "react-bootstrap"; // Import necessary components
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchemaValidation } from "./Validations/UserValidations";
import Register from "./Register";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchemaValidation) });

  const onSubmit = (data) => {
    console.log("Form");
  };
  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={3}></Col>
          </Row>

          <Row>
            e-mail <br />
            <input type="text" {...register("email")} />
            <Col md={3}></Col>
            <p className="error">{errors.email?.message}</p>
          </Row>
          <br />
          <Row>
            password <br />
            <input type="text" {...register("password")}></input>
            <Col md={3}></Col>
            <p className="error">{errors.password?.message}</p>
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
