import React, { useEffect } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";

const LandingPage = () => {
  const user = JSON.parse(localStorage.getItem("currUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, [user]);
  return (
    <>
      <Nav />
      <div id="landing" className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-9 p-5 text-center text-light mt-5">
            <div>
              <h1 className="display-2">
                <b>Enjoy a luxury experience</b>
              </h1>
            </div>
            <div>
              <h1 className="h2 mt-3">Hotel & Resort</h1>
            </div>
            <div id="but">
              <Link to="/home">
                <button className="btn btn-outline-light mt-3 p-2">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
