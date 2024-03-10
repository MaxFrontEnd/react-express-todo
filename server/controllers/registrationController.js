const redisDB = require("../models/dbconnection");
const bcrypt = require("bcrypt");
const registrationController = async function (req, res) {
  const { email, password } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const json_data = { password: hashedPassword, todos: {} };
  await redisDB.json
    .set(email, "$", json_data)
    .then(console.log("data is stored"));

  //Проверить есть ли такой пользователь в БД
  // Проверить правильный ли пароль

  // Если все праавильно то ответить успешным котодм и выслать токен авторизации
  res.status(200).json({ message: "Пользователь создан" });
};

module.exports = registrationController;
