import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import Footer from "../Components/Footer";
import moment from "moment/moment";
import StripeCheckout from "react-stripe-checkout";
import swal from "sweetalert2";
import Nav from "../Components/Nav";

const BookingScreen = () => {
  const [room, setRoom] = useState([]);
  const [Tamount, setTamount] = useState();
  const [loading, setLoading] = useState(false);
  const { roomid, fromDate, toDate } = useParams();

  const from = moment(fromDate, "DD-MM-YYYY");
  const to = moment(toDate, "DD-MM-YYYY");

  const TDays = moment.duration(to.diff(from)).asDays() + 1;

  // async function Booking() {
  //   const bookingDetails = {
  //     room: room.name,
  //     roomid,
  //     userid: JSON.parse(localStorage.getItem("currUser")).email,
  //     fromdate: fromDate,
  //     todate: toDate,
  //     totalamount: Tamount,
  //     totaldays: TDays,
  //   };
  //   try {
  //     let response = await fetch("http://localhost:5000/api/booking/bookroom", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(bookingDetails),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // }

  async function fetchRoomData() {
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/rooms/getroombyid",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ roomid: roomid }),
        }
      );

      const data = await response.json();
      setRoom(data);
      setTamount(data.rentperday * TDays);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRoomData();
  }, []);

  async function onToken(token) {
    console.log(token);

    const bookingDetails = {
      room: room.name,
      roomid,
      userid: JSON.parse(localStorage.getItem("currUser"))._id,
      fromdate: fromDate,
      todate: toDate,
      totalamount: Tamount,
      totaldays: TDays,
      token,
    };
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/booking/bookroom",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingDetails),
        }
      );
      const data = await response.json();
      console.log(data);
      swal
        .fire({
          title: "Congratulations",
          text: "Your Room Booked Successfully",
          icon: "success",
        })
        .then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/profile";
          }
        });
    } catch (error) {
      swal.fire(" 'OOPS !' , 'Something Went Wrong' , 'error' ");
      setLoading(false);
      console.error("An error occurred:", error);
    }
  }

  return (
    <>
      <Nav />
      <div className="container mt-4">
        {loading ? (
          <h1>
            <Loader />
          </h1>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title text-center">{room.name}</h1>
                    <hr />
                    <img src={room.imageurls} className="card-img-top" />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title">Booking Details</h1>
                    <hr />
                    <p>
                      Name:{" "}
                      <b>{JSON.parse(localStorage.getItem("currUser")).name}</b>{" "}
                    </p>
                    <p>
                      From Date: <b>{fromDate}</b>{" "}
                    </p>
                    <p>
                      To Date: <b>{toDate}</b>{" "}
                    </p>
                    <p>
                      Max Count: <b>{room.maxcount}</b>{" "}
                    </p>
                    <h3 className="card-title">Amount</h3>
                    <hr />
                    <p>
                      Total Days: <b>{TDays}</b>{" "}
                    </p>
                    <p>
                      Rent Per Day: <b>${room.rentperday}</b>{" "}
                    </p>
                    <h5>
                      Total Amount: <b>${Tamount}</b>{" "}
                    </h5>

                    <StripeCheckout
                      amount={Tamount * 100}
                      token={onToken}
                      currency="usd"
                      stripeKey="pk_test_51OAE8rSD8o8rdtjrli4SgzMJB9PuFhKQ3evaRtOTWLTM86O1JanU7hR85g2t26URxjhswU0y9b8kIcMFiNiHtYKp00gZ7h5Pgb"
                    >
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "black",
                          color: "white",
                        }}
                        // onClick={Booking}
                        className="btn btn-primary"
                      >
                        Pay Now
                      </button>
                    </StripeCheckout>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BookingScreen;
