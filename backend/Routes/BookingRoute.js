const express = require("express");
const BookingRoom = require("../Models/booking");
const Room = require("../Models/room");
const router = express.Router();

router.post("/bookroom", async (req, res) => {
  const {
    room,
    status,
    roomid,
    userid,
    fromdate,
    todate,
    totalamount,
    totaldays,
  } = req.body;
  try {
    const newBooking = new BookingRoom({
      status,
      room,
      roomid,
      userid,
      fromdate,
      todate,
      totalamount,
      totaldays,
      transactionid: "1234",
    });
    const booking = await newBooking.save();

    const roomTemp = await Room.findOne({ _id: roomid });

    //   roomTemp.currentbookings = roomTemp.currentbookings || []; // Ensure currentbookings is an array

    roomTemp.currentbookings.push({
      bookingid: booking._id,
      fromdate: fromdate,
      todate: todate,
      userid: userid,
      status: booking.status,
    });
    await roomTemp.save();
    res.status(200).json({ message: "Room Booked Successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal server error" });
  }
  //   router.get("/getuser", async (req, res) => {
  //     const userid = req.body.userid;

  //     try {
  //         const user = await User.find({});
  //         res.status(200).json(user);
  //     } catch (error) {
  //         console.error(error);
  //         res.status(500).json({ message: "Internal server error" });
  //     }
  // });

  router.post("/bookbyuser", async (req, res) => {
    const userid = req.body.userid;
    try {
      const book = await BookingRoom.find({ userid: userid });
      res.status(200).json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // router.post("/cancel", async (req, res) => {
  //   const { bookingid, roomid } = req.body;

  //   try {
  //     const bookingC = await BookingRoom.findOne({ _id: bookingid });

  //     bookingC.status = "Cancelled";
  //     await bookingC.save();

  //     const room = await Room.findOne({ _id: roomid });

  //     room.currentbookings = room.currentbookings.filter(
  //       (booking) => booking.toString() !== bookingid
  //     );

  //     await room.save();

  //     res.status(200).json({ message: "Booking cancelled successfully" });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  // });
});

module.exports = router;
