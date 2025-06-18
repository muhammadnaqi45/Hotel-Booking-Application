import React, { useEffect } from "react";
import { Tabs } from "antd";
import BookingByUser from "./BookingByUser";
import Nav from "../Components/Nav";
const { TabPane } = Tabs;

const user = JSON.parse(localStorage.getItem("currUser"));

const Profile = () => {
  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <>
      <Nav />
      <div className="container mt-3">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Profile" key="1">
            <h1 className="text-center">
              <i className="fa-solid fa-user mx-1"></i> MY PROFILE
            </h1>
            <div
              className="col-md-8 m-auto  mt-4"
              style={{ borderRadius: "15px" }}
            >
              <div className="card p-3">
                <div className="card-body" style={{ fontSize: "20px" }}>
                  <h4>Userid</h4>
                  <p> {user._id} </p>
                  <h4>Name</h4>
                  <p> {user.name} </p>
                  <h4>Email</h4>
                  <p> {user.email} </p>

                  <h4>Admin</h4>
                  <p> {user?.isAdmin ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Bookings" key="2">
            <BookingByUser />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default Profile;
