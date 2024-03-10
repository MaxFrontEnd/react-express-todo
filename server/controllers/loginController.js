const redisDB = require("../models/dbconnection");
const ApiError = require("../errors/ApiError");
const bcrypt = require("bcrypt");

const login = async function (request, response) {
  const { email, password } = request.body;

  //Проверить есть ли такой пользователь в БД

  // Проверить правильный ли пароль

  // Если все праавильно то ответить успешным котодм и выслать токен авторизации
  response.status(200).json({ message: "Пользователь залогинен" });
};

module.exports = login;
