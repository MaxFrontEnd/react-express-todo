const Router = require("express");
const router = Router();
const todoController = require("../controllers/todoController");

//router.post("/login", loginController);

router.get("/", todoController);

module.exports = router;
