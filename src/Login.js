import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const err = Validation(values);
    setErrors(err);
    if (err.email === "" && err.password === "") {
      axios
        .post("http://localhost:4000/login", values)
        .then((res) => {
          if (res.data.status === "Success") {
            const usr = res.data.data[0].name;
            console.log(usr);
            navigate("/home",  { state: { name: usr } });
          } else {
            alert("Login failed, please check your credentials");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex box vh-100 justify-content-center align-items-center">
      <div className="p-3 rounded bg-white box2">
        <h2>Sign-In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              onChange={handleInput}
              type="email"
              className="form-control"
              name="email"
            />
            {errors.email && (
              <span className="text-danger"> {errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              onChange={handleInput}
              type="password"
              className="form-control"
              name="password"
            />
            {errors.password && (
              <span className="text-danger"> {errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100">
            <b>Login</b>
          </button>
          <p>Sign up or Login if you already had an account. </p>
          <Link
            to="/signup"
            className="btn btn-default login border w-100 text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
