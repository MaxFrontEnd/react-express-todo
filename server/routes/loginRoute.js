const Router = require("express");
const router = Router();
const loginController = require("../controllers/loginController");

//router.post("/login", loginController);

router.get("/", (req, res) => {
  res.status(200).json("login page");
});

module.exports = router;
