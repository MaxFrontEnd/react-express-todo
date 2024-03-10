const redisDB = require("../models/dbconnection");
const ApiError = require("../errors/ApiError");
const bcrypt = require("bcrypt");

const login = async function (req, res, next) {
  const { email, password } = req.body;
  const hash = await redisDB.json.get(email, "$..password");

  bcrypt.compare(password, hash.password).then((result) => {
    if (result) {
      res.status(200).json("Пользователь успешно залогинен");
    } else {
      return next(ApiError.badRequest("Вы ввели неправильный пароль"));
    }
  });
  // Проверить правильный ли пароль

  // Если все праавильно то ответить успешным котодм и выслать токен авторизации
};

module.exports = login;
