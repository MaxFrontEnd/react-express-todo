require("dotenv").config();

const redisDB = require("../models/dbconnection");
const ApiError = require("../errors/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Генерируем токен
const generateAccessTocken = (email) => {
  const payload = {
    email,
  };
  const token = jwt.sign(payload, process.env.SECRET_JWT_KEY, {
    expiresIn: "24h",
  });
  return token;
};

const login = async function (req, res, next) {
  const { email, password } = req.body;
  const hash = await redisDB.json.get(email, "$..password");
  // Проверить правильный ли пароль
  bcrypt.compare(password, hash.password).then((result) => {
    if (result) {
      // Если пароль верный отправляем токен
      const generatedToken = generateAccessTocken(email);
      res.status(200).json({ token: generatedToken });
    } else {
      return next(
        ApiError.badRequest({ message: "Вы ввели неправильный пароль" })
      );
    }
  });

  // Если все праавильно то ответить успешным котодм и выслать токен авторизации
};

module.exports = login;
