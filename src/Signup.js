import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from "axios";
import "./styles/Signup.css";

function Signup() {
  const [values, setValues] = useState({
    name: "",
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
    if (err.name === "" && err.email === "" && err.password === "") {
      axios
        .post("https://vercel.live/link/entries-repo.vercel.app?via=deployment-domains-list&p=1/signup", values)
        .then((res) => {
          if (res.data === "Success") {
            alert(
              "The email you have provided is already associated with an account."
            );
          } else {
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex box justify-content-center align-items-center">
      <div className="p-3 rounded bg-white box2">
        <h2>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              onChange={handleInput}
              type="text"
              className="form-control"
              name="name"
            />
            {errors.name && <span className="text-danger"> {errors.name}</span>}
          </div>

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
            <b>Signup</b>
          </button>
          <p>Sign up or Login if you already had an account. </p>
          <Link
            to="/"
            className="btn btn-default login border w-100 text-decoration-none"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
