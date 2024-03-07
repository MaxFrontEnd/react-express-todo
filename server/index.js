require("dotenv").config();
const express = require("express");
const app = express();
//const redisConnect = require("./models/dbconnection");
const loginRouter = require("./routes/loginRoute");
const registrationRouter = require("./routes/registrationRoute");
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

app.get("/", (request, responce) => {
  responce.status(200).json("welcom to home page");
});

// app.get("/login", (request, response) => {
//   response.status(200).json("welcom to login page");
// });

app.use("/login", loginRouter);
app.use("/registration", registrationRouter);
