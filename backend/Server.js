const express = require("express");
const bodyParser = require("body-parser");
const connectToDatabase = require("./db");
const cors = require("cors");
const roomRoute = require("./Routes/roomRoute");
const userRoute = require("./Routes/userRoute");
const bookingRoute = require("./Routes/BookingRoute");
const app = express();
const port = 5000;

connectToDatabase();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/rooms", roomRoute);
app.use("/api/users", userRoute);
app.use("/api/booking", bookingRoute);

if(process.env.NODE_ENV=='production'){
  const path = require('path')

  app.get('/',(req,res)=>{
      app.use(express.static(path.resolve(__dirname,'build')))
      res.sendFile(path.resolve(__dirname,'build','index.html'))
  })
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
