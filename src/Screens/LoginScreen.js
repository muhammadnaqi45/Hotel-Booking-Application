import React, { useState } from "react";
import "./LoginScreen.css";
import { Link } from "react-router-dom";
import swal from "sweetalert2";

const LoginScreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.status === 200) {
        setemail("");
        setpassword("");

        localStorage.setItem("currUser", JSON.stringify(data));

        setTimeout(() => (window.location.href = "/"), 2000);
      } else {
        console.error("Login failed");
        swal.fire({
          title: "OOPS",
          text: "Invalid Credentials",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      swal.fire({
        title: "OOPS",
        text: "Invalid Credentials",
      });
    }
  };
  return (
    <>
      <div id="login">
        <div className="container d-flex justify-content-center">
          <div
            id="form"
            className="col-md-7 p-5"
            style={{ borderRadius: "5px", marginTop: "7rem" }}
          >
            <h1 className="text-center">Sign in</h1>

            <form className="d-flex flex-column">
              <input
                type="text"
                placeholder="Email"
                className="m-1"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                id="email"
                minLength={4}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="m-1"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                id="password"
                minLength={4}
                required
              />
              <button
                type="submit"
                className="btn btn-dark mt-3 m-1"
                onClick={login}
              >
                Submit
              </button>
              <p className="m-1 mt-2 text-center">
                Not a member <Link to="/register">Sign up now</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
