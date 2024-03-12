const ApiError = require("../errors/ApiError");
const redisDB = require("../models/dbconnection");
const bcrypt = require("bcrypt");
module.exports = async function authValidation(req, res, next) {
  const host = req.originalUrl;
  const { email, password } = req.body;

  // Проверяем есть ли в полях email и пароль данные
  if (!email || !password) {
    return next(
      ApiError.badRequest("Неккоректные имя пользователя или пароль")
    );
  }

  // Проверяем есть ли такой емайл при регистрации

  //Проверяем есть ли такой пользователь в БД
  const exists = await redisDB.EXISTS(email);

  // При логине проверям наличие такого пользователя
  if (!exists && host === "/login") {
    return next(ApiError.badRequest("Такого пользователя не существует"));
  }

  if (exists && host === "/registration") {
    return next(
      ApiError.badRequest("Пользователь с таким емайл уже существует")
    );
  }

  next();
};
