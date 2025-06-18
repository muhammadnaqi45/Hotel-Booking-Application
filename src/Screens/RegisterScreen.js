import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import swal from "sweetalert2";

const RegisterScreen = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    if (name.length > 3 && password.length > 3 && password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      try {
        const response = await fetch(
          "http://localhost:5000/api/users/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          }
        );
        if (response.status === 200) {
          setname("");
          setemail("");
          setpassword("");
          setcpassword("");

          console.log("Registration successful");
          swal
            .fire({
              title: "Congratulations",
              text: "User Successfully Registered",
              icon: "success",
            })
            .then((result) => {
              if (result.isConfirmed) {
                window.location.href = "/login";
              }
            });
        } else {
          swal.fire({ title: "OOPS", text: "Email Already in use" });
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      swal.fire({
        title: "OOPS",
        text: "Something Went Wrong, Length should be 4 characters or more and add correct Info",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div id="reg">
        <div className="container d-flex justify-content-center">
          <div
            id="form"
            className="col-md-8 p-5"
            style={{ borderRadius: "5px", marginTop: "5rem" }}
          >
            <h1 className="text-center">Sign up</h1>
            <form className="d-flex flex-column">
              <input
                type="text"
                placeholder="Name"
                className="m-1"
                value={name}
                onChange={(e) => setname(e.target.value)}
                id="name"
                minLength={4}
                required
              />
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
              <input
                type="password"
                placeholder="Confirm Password"
                className="m-1"
                value={cpassword}
                onChange={(e) => setcpassword(e.target.value)}
                id="cpassword"
                minLength={4}
                required
              />

              <button
                type="submit"
                className="btn btn-dark m-1 mt-3"
                onClick={register}
              >
                Submit
              </button>
              <p className="m-1 mt-2 text-center">
                Already have an account <Link to="/login">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
