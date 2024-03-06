const login = function (request, response) {
  const { user, email } = request.body;
  response.status(200).json({ user, email, message: "Пользователь залогинен" });
};

export default login;
