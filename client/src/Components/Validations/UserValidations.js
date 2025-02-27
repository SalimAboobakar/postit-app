import * as yup from "yup"; //import all exports from the yup

export const userSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Not valid email format")
    .required("email is required"),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters long")
    .max(20, "Password must not exceed 20 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords Don't Match")
    .required("Confirm password is required"),
});
