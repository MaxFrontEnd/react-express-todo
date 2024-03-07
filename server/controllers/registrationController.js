const connectionToRedis = require("../models/dbconnection");

async function registerNewUser(email) {
  try {
    const exists = await connectionToRedis.get(email);
  } catch (err) {
    throw new Error("Непредвиденная ошибка при получении данных из редис", err);
  }
  console.log(exists);
  if (exists) {
    throw new Error("Пользователь с таким email уже существует");
  }
  connectionToRedis.hSet(`user:${email}, {}`);
}

const registration = function (request, response) {
  const { email, password } = request.body;

  //Проверить есть ли такой пользователь в БД
  registerNewUser(email, password);
  // Проверить правильный ли пароль

  // Если все праавильно то ответить успешным котодм и выслать токен авторизации
  response.status(200).json({ message: "Пользователь создан" });
};

module.exports = registration;
