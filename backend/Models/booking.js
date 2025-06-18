const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    room: {
      type: String,
    },
    roomid: {
      type: String,
    },
    userid: {
      type: String, 
    },
    fromdate: {
      type: String,
    },
    todate: {
      type: String,
    },
    totalamount: {
      type: Number,
    },
    totaldays: {
      type: Number,
    },
    transactionid: {
      type: String,
    },
    status: {
      type: String,
      default: "Booked",
    },
  },
  {
    timestamps: true,
  }
);

const BookingRoom = mongoose.model("BookingRoom", BookingSchema);

module.exports = BookingRoom;
