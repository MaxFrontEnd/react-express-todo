require("dotenv").config();

const redisDB = require("../models/dbconnection");
const ApiError = require("../errors/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async function getUerTodos(req, res) {
  // Проверим переданный токен и вернем все задачи

  const { token } = req.body;
  try {
    var decoded = jwt.verify(token, process.env.SECRET_JWT_KEY);
    await redisDB.get();
  } catch (error) {
    throw new ApiError.badRequest({
      message: "Некорректный токен авторизации",
    });
  }
};
