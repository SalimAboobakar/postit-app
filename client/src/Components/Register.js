import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

import { Container, Row, Col, Form } from "react-bootstrap";
import { userSchemaValidation } from "./Validations/UserValidations";

import { useForm, useFormState } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchemaValidation) });
  // Handle form submission

  const onSubmit = (data) => {
    console.log("Form Data", data); // You can handle the form submission here
  };
  return (
    <div>
      <Container className="div-form">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={2}></Col>
          </Row>
          <br />
          <Row>
            Name <br />
            <input type="text" name="name" {...register("name")}></input>
            <Col md={2}></Col>
            <p className="error">{errors.name?.message}</p>
          </Row>
          <br />
          <Row>
            e-mail <br />
            <input type="text" name="email" {...register("email")}></input>
            <p className="error">{errors.email?.message}</p>
            <Col md={2}></Col>
          </Row>
          <br />
          <Row>
            password <br />
            <input
              type="password"
              name="password"
              {...register("password")}
            ></input>
            <Col md={2}></Col>
            <p className="error">{errors.password?.message}</p>
          </Row>
          <br />
          <Row>
            Confirm password
            <input
              type="password"
              name="confirm password"
              {...register("confirmPassword")}
            ></input>
            <p className="error">{errors.confirmPassword?.message}</p>
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
