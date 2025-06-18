import React, { useEffect, useState } from "react";
import Rooms from "../Components/Rooms";
import Loader from "../Components/Loader";
import Footer from "../Components/Footer";
import { DatePicker } from "antd";
import "./HomeScreen.css";
import Nav from "../Components/Nav";

const { RangePicker } = DatePicker;

const HomeScreen = () => {
  const user = JSON.parse(localStorage.getItem("currUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, [user]);

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [fromDate, setfromDate] = useState();
  const [toDate, settoDate] = useState();
  const [search, setsearch] = useState();
  const [type, setttype] = useState("all");
  const [dupt, setdupt] = useState();
  const [displayedRoomsCount, setDisplayedRoomsCount] = useState(5);

  async function fetchRoomData() {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/rooms/getallrooms"
      );
      const data = await response.json();
      setRooms(data);
      setdupt(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching room data:", error);
    }
  }

  useEffect(() => {
    fetchRoomData();
  }, []);

  const filterDate = (dates) => {
    setfromDate(dates[0].format("DD-MM-YYYY"));
    settoDate(dates[1].format("DD-MM-YYYY"));
  };

  const availableRooms = rooms.filter((room) => {
    return (
      !room.currentbookings ||
      room.currentbookings.every((booking) => {
        const bookingFromDate = booking.fromdate;
        const bookingToDate = booking.todate;
        const selectedFromDate = fromDate;
        const selectedToDate = toDate;

        return (
          selectedToDate < bookingFromDate || selectedFromDate > bookingToDate
        );
      })
    );
  });

  const filterSearch = () => {
    const temproom = dupt.filter((rooms) =>
      rooms.name.toLowerCase().includes(search.toLowerCase())
    );
    setRooms(temproom);
  };

  const filterType = (e) => {
    setttype(e);

    if (e !== "all") {
      const temprooms = dupt.filter(
        (rooms) => rooms.type.toLowerCase() === e.toLowerCase()
      );
      setRooms(temprooms);
    } else {
      setRooms(dupt);
    }
  };

  const showMoreRooms = () => {
    setDisplayedRoomsCount(displayedRoomsCount + 4);
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div
          id="row"
          className="row m-1 mt-5 p-5 d-flex justify-content-between"
          style={{ height: "auto" }}
        >
          <h1
            className="text-center mb-4"
            style={{ fontSize: "50px", fontWeight: "bold" }}
          >
            {" "}
            Welcome {user.name}
          </h1>
          <h3 className="text-center mt-1 mb-5">Make a Reservation</h3>
          <div className="col-md-3 col-sm-6 col-12 mb-3">
            <span className="">Select your dates</span>
            <RangePicker format="DD-MM-YYYY" onChange={filterDate} />
          </div>
          <div className="col-md-3 col-sm-6 col-12 mb-3">
            <span className="">Serach your rooms</span>
            <input
              id="search"
              type="text"
              placeholder="Search Rooms"
              value={search}
              onKeyUp={filterSearch}
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <span className="">Select your type</span>
            <select
              id="select"
              value={type}
              onChange={(e) => {
                filterType(e.target.value);
              }}
            >
              <option value="all">All</option>
              <option value="delux">Delux</option>
              <option value="no-delux">No-Delux</option>
            </select>
          </div>
        </div>

        <div id="roww" className="row mx-4 p-4">
          <div id="card" className="card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.CVS718jI4Q4jFaknLitICwAAAA&pid=Api&P=0&h=220"
              alt="Room 1"
            ></img>
            <div className="card-content">
              <h2>Deluxe Suite</h2>
              <p>
                Experience luxury in our spacious Deluxe Suite. Equipped with
                modern amenities and stunning views.
              </p>
            </div>
          </div>

          <div id="card" className="card">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.LlZTmvksRxjrDi6pU1KTgAHaES&pid=Api&P=0&h=220"
              alt="Room 2"
            ></img>
            <div className="card-content">
              <h2>Executive Room</h2>
              <p>
                Our Executive Room offers a perfect blend of comfort and style.
                Ideal for business or leisure travelers.
              </p>
            </div>
          </div>

          <div id="card" className="card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.96r6fRbTJ9Zy-l4QRhpI9wHaE8&pid=Api&P=0&h=220"
              alt="Room 3"
            ></img>
            <div className="card-content">
              <h2>Family Suite</h2>
              <p>
                Spacious and comfortable, our Family Suite is perfect for family
                getaways. Enjoy quality time together.
              </p>
            </div>
          </div>

          <div id="card" className="card">
            <img
              src="https://www.landmarklondon.co.uk/wp-content/uploads/2017/10/familiy_room_grid.jpg"
              alt="Room 4"
            ></img>
            <div className="card-content">
              <h2>Presidential Suite</h2>
              <p>
                Indulge in luxury with our Presidential Suite. Experience
                top-notch service and exclusive amenities.
              </p>
            </div>
          </div>

          <div id="card" className="card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.U3lwZKUGQjuygXndkw_ArgHaE7&pid=Api&P=0&h=220"
              alt="Room 5"
            ></img>
            <div className="card-content">
              <h2>Standard Room</h2>
              <p>
                Our Standard Room provides a comfortable stay with essential
                amenities. A perfect choice for budget-conscious travelers.
              </p>
            </div>
          </div>

          <div id="card" className="card">
            <img
              src="https://hotellakestar.com/wp-content/uploads/2019/09/family-suite-2.jpg"
              alt="Room 6"
            ></img>
            <div className="card-content">
              <h2>Suite with a View</h2>
              <p>
                Enjoy breathtaking views from our Suite with a View. Immerse
                yourself in the beauty of the surroundings.
              </p>
            </div>
          </div>
        </div>

        {loading ? (
          <h1>
            <Loader />
          </h1>
        ) : (
          <>
            {availableRooms.slice(0, displayedRoomsCount).map((room) => (
              <Rooms room={room} fromDate={fromDate} toDate={toDate} />
            ))}
            {availableRooms.length > displayedRoomsCount && (
              <button
                onClick={showMoreRooms}
                className="btn btn-dark mt-5 d-flex m-auto"
              >
                Show More Rooms
              </button>
            )}
          </>
        )}
      </div>
      {showScrollButton && (
        <button
          className="btn btn-dark"
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
          onClick={scrollToTop}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
      <Footer />
    </>
  );
};

export default HomeScreen;
