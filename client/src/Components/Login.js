import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import img from "../Images/loginImage.jpg";
import { Container, Row, Col, Form } from "react-bootstrap"; // Import necessary components
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchemaValidation } from "./Validations/UserValidations";
import Register from "./Register";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";
import { useEffect } from "react";
import logo from "../Images/logo-t.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);

  const isSuccess = useSelector((state) => state.users.isSuccess);

  const isError = useSelector((state) => state.users.isError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchemaValidation) });

  const onSubmit = (data) => {
    console.log("Form");
  };
  const handleLogin = () => {
    const userData = {
      email: email,

      password: password,
    };
    dispatch(login(userData));
  };
  useEffect(() => {
    if (isError) {
      navigate("/login");
    }

    if (isSuccess) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user, isError, isSuccess]);
  //dispatch a login action from the user slice.

  return (
    <div>
      <Container>
        <img src={logo} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={3}></Col>
          </Row>

          <Row>
            e-mail <br />
            <input type="text" onChange={(e) => setemail(e.target.value)} />
            <Col md={3}></Col>
            <p className="error">{errors.email?.message}</p>
          </Row>
          <br />
          <Row>
            password <br />
            <input
              type="text"
              onChange={(e) => setpassword(e.target.value)}
            ></input>
            <Col md={3}></Col>
            <p className="error">{errors.password?.message}</p>
          </Row>

          <Row>
            <br />
            <Col md={3}></Col>
            <Button
              color="primary"
              className="button"
              onClick={() => handleLogin()}
            >
              Sign in
            </Button>
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
