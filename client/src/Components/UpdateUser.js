import { Button } from "reactstrap";
import { Container, Row, Col, Form } from "react-bootstrap";
import { userSchemaValidation } from "./Validations/UserValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Features/UserSlice";
import { useSelector } from "react-redux";

import { useEffect } from "react";
const UpdateUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Email = useSelector((state) => state.users.user.email);

  useEffect(() => {
    if (!Email) {
      navigate("/login");
    }
  }, [Email]);

  // Retrieve the passed user data
  const user = location.state?.user || { name: "", email: "", password: "" };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
    defaultValues: user,
  });

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const onSubmit = (data) => {
    try {
      const updatedUser = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      console.log("Updated User Data:", updatedUser);
      alert("User updated successfully.");
      dispatch(addUser(updatedUser));
      navigate("/"); // Redirect back to register page
    } catch (error) {
      console.log("Error updating user.");
    }
  };

  return (
    <div>
      <Container className="div-form">
        <h2>Update User</h2>
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
            />
            <p className="error">{errors.name?.message}</p>
          </Row>
          <br />
          <Row>
            E-mail <br />
            <input
              type="text"
              className="form-control"
              id="email"
              value={email} // Email remains unchanged
              disabled
            />
            <p className="error">{errors.email?.message}</p>
          </Row>
          <br />
          <Row>
            Password <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password..."
              {...register("password", {
                onChange: (e) => setPassword(e.target.value),
              })}
            />
            <p className="error">{errors.password?.message}</p>
          </Row>
          <br />
          <Row>
            <Button type="submit">Update</Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default UpdateUser;
