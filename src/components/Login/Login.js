import React, { useContext } from "react";
import "./Login.css";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContexts";

const Login = () => {
  const { loggingIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log("location stored", from);
  const loginHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    loggingIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        // navigate("/");
        navigate(from, { replace: true });
        console.log(navigate);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="login-card">
      <div className="login-text">Login</div>
      <Form onSubmit={loginHandle}>
        <div className="form-control">
          <label>Email</label>
          <input type="email" name="email"></input>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password"></input>
        </div>
        <button className="loginBtn">Login</button>
      </Form>
      <p className="linking">
        New to Emma-Jhon?{" "}
        <Link to="/signup" className="link">
          Create New Account
        </Link>
      </p>
    </div>
  );
};

export default Login;
