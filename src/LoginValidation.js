function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    error.email = "Name should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email did'nt match";
  } else {
    error.email = "";
  }

  if (!password_pattern.test(values.password)) {
    error.password = "Password did'nt match";
  } else {
    error.password = "";
  }
  return error;
}

export default Validation;
