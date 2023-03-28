const { Router } = require("express");
const router = Router();
const { create } = require("../Controllers/calendar");

router.route("/create").post(create);

module.exports = router;
