const Router = require("express");
const router = Router();
const registrationController = require("../controllers/registrationController");

router.post("/", registrationController);

router.get("/", (request, response) => {
  response.status(200).json("this is registration page");
});
module.exports = router;
