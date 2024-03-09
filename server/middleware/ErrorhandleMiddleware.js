const ApiError = require("../errors/ApiError");

function middleWareError(err, req, res, next) {
  if (err instanceof ApiError) {
    console.log(err.status);
    res.status(err.status).json(err.message);
    return next();
  }
  res.status(500, "Непредвиденная ошибка");
  return next();
}

module.exports = middleWareError;
