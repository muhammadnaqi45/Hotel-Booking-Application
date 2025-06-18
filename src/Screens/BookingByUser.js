import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";

const BookingByUser = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState();
  const user = JSON.parse(localStorage.getItem("currUser"));

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/booking/bookbyuser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userid: user._id }),
        }
      );

      const data = await response.json();
      setLoading(false);
      if (response.status == 200) {
        console.log("Data received:", data);
        setBookings(data);
      }
    } catch (error) {
      setLoading(false);
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center">
        <i className="fa-solid fa-key"></i> MY BOOKINGS{" "}
      </h1>
      <div className="row">
        {loading && <Loader />}
        {bookings.map((booking) => (
          <div key={booking._id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{booking.room}</h5>
                <p className="card-text">
                  <b>Bookingid:</b> {booking._id}
                </p>
                <p className="card-text">
                  <b>CheckIn:</b> {booking.fromdate}
                </p>
                <p className="card-text">
                  <b>Check Out:</b> {booking.todate}
                </p>
                <p className="card-text">
                  <b>Amount:</b> {booking.totalamount}
                </p>
                <p className="card-text">
                  <b>Status:</b>{" "}
                  {booking.status === "Booked" ? "Confirmed" : "Cancelled"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookingByUser;
