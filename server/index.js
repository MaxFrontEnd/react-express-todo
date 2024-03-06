const express = require("express");
const app = express();
const { PORT } = require("./constants/sever_data");
console.log(PORT);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
app.get("/", (request, response) => {
  response.status(200).json({ message: "Добро пожаловать на сервер" });
});
