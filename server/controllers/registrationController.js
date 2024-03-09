const redisDB = require("../models/dbconnection");
const ApiError = require("../errors/ApiError");

const registration = async function (request, response, next) {
  const { email, password } = request.body;
  if (!email || !password) {
    return next(
      ApiError.badRequest("Неккоректные имя пользователя или пароль")
    );
  }
  await redisDB.set(email, password);
  // console.log(email, password);
  //Проверить есть ли такой пользователь в БД
  // Проверить правильный ли пароль

  // Если все праавильно то ответить успешным котодм и выслать токен авторизации
  response.status(200).json({ message: "Пользователь создан" });
};

module.exports = registration;
