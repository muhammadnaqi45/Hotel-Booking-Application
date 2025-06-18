const express = require("express");
const Room = require("../Models/room");
const router = express.Router();

router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/getroombyid", async (req, res) => {
  const roomid = await req.body.roomid;
  try {
    const room = await Room.findOne({ _id: roomid });
    res.status(200).json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
