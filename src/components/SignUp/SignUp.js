import React, { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import "./SignUp.css";
import { AuthContext } from "../../contexts/UserContexts";

const SignUp = () => {
  const { createUser, user } = useContext(AuthContext);
  const [wrongMsg, setWrongMsg] = useState("");
  const signUpHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const passwordValid = form.rePassword.value;
    console.log(email, password, passwordValid);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const msg = error.message;
        console.error(msg);
        setWrongMsg(msg);
      });
  };
  return (
    <div className="login-card2">
      <div className="login-text">SignUp</div>
      <Form onSubmit={signUpHandle}>
        <div className="form-control">
          <label>Email</label>
          <input type="email" name="email"></input>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password"></input>
        </div>
        <div className="form-control">
          <label>Re-enter Password</label>
          <input type="password" name="rePassword"></input>
        </div>
        <button className="loginBtn">SignUp</button>
      </Form>
      <p className="linking">
        Already have account?{" "}
        <Link to="/login" className="link">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
