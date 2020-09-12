import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { db, auth } from "./firebase.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); //allows to programatically change the url

  const signIn = (e) => {
    e.preventDefault(); //stops refreshing
    //fiebase login

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const registerFunc = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully created user
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__image"
          src="https://justcreative.com/wp-content/uploads/2020/05/amazon.jpg"
        />
      </Link>
      <div className="login__container">
        <h1>Sing-in</h1>
        <form className="login__form" action="">
          <h5>Email</h5>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon Clone by MEE!! condition of use and
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={registerFunc}>
          Create your Amazon(Clone) account
        </button>
      </div>
    </div>
  );
}

export default Login;
