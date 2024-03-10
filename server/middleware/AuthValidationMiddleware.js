const ApiError = require("../errors/ApiError");
const redisDB = require("../models/dbconnection");
const bcrypt = require("bcrypt");
module.exports = async function authValidation(req, res, next) {
  const host = req.originalUrl;
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      ApiError.badRequest("Неккоректные имя пользователя или пароль")
    );
  }

  //Проверяем есть ли такой пользователь в БД
  const exists = await redisDB.EXISTS(email);
  console.log(exists);
  console.log(exists);
  if (exists && host === "/registration") {
    return next(
      ApiError.badRequest("Пользователь с таким емайл уже существует")
    );
    // } else if (exists && host === "/login") {
    //   // await redisDB.json.get();
    //   // bcrypt.compare(password);
    // }
  }
  next();
};
