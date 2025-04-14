import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

import { Container, Row, Col, Form } from "react-bootstrap";
import { userSchemaValidation } from "./Validations/UserValidations";

import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import { addUser, deleteUser, updateUser } from "../Features/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import UpdateUser from "./UpdateUser";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Features/UserSlice";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchemaValidation) });
  // Handle form submission

  const userList = useSelector((state) => state.users.value);

  const [name, setname] = useState("");

  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const [confirmPassword, setconfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const navigate = useNavigate(); //declares a constant variable named navigate and assigns it the value returned by the useNavigate() hook.

  const handleDelete = (email) => {
    dispatch(deleteUser(email));
  };

  const onSubmit = (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      console.log("Form Data", data);
      alert("Validation all good.");
      dispatch(registerUser(userData));
      navigate("/login");
    } catch (error) {
      console.log("Error.");
    }
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
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name..."
              {...register("name", {
                onChange: (e) => setname(e.target.value),
              })}
            />
            <Col md={2}></Col>
            <p className="error">{errors.name?.message}</p>
          </Row>
          <br />
          <Row>
            e-mail <br />
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email..."
              {...register("email", {
                onChange: (e) => setemail(e.target.value),
              })}
            />
            <p className="error">{errors.email?.message}</p>
            <Col md={2}></Col>
          </Row>
          <br />
          <Row>
            password <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password..."
              {...register("password", {
                onChange: (e) => setpassword(e.target.value),
              })}
            />
            <Col md={2}></Col>
            <p className="error">{errors.password?.message}</p>
          </Row>
          <br />
          <Row>
            Confirm password
            <input
              type="password"
              className="form-control"
              id="confirmPasswordd"
              placeholder="Enter your confirmPassword..."
              {...register("confirmPassword", {
                onChange: (e) => setconfirmPassword(e.target.value),
              })}
            />
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
        {/* <Row>
          <Col md={6}>
            List of users
            <table className="table">
              <tbody>
                {userList.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <Button onClick={() => handleDelete(user.email)}>
                        Delete User
                      </Button>
                    </td>
                    <td>
                      <Link to="/update">
                        <Button type="submit">Update</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Register;
