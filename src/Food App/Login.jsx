import React from "react";
import { FaWindowClose } from "react-icons/fa";
import "./login.css";
const Login = ({ setLogin, setStatus, status, onSubmit }) => {
  return (
    <div className="container">
      <FaWindowClose className="close" onClick={() => setLogin(false)} />
      <form onSubmit={onSubmit} className="div" action="">
        <h1>{status}</h1>

        {status === "Login" ? (
          <>
            <input type="text" placeholder="email" required />
            <input type="text" placeholder="password" required />
          </>
        ) : (
          <>
            <input type="text" placeholder="name" required />
            <input type="text" placeholder="email" required />
            <input type="text" placeholder="password" required />
          </>
        )}
        <button
        onClick={onSubmit}
        >{status === "Sign up" ? "Sign up" : "Login"} </button>

        {status === "Login" ? (
          <p>
            Create a new account{" "}
            <span onClick={() => setStatus("Sign up")}>Click Here</span>{" "}
          </p>
        ) : (
          <p>
            Already have account{" "}
            <span onClick={() => setStatus("Login")}>Login here</span>{" "}
          </p>
        )}

        <button></button>
      </form>
    </div>
  );
};

export default Login;
