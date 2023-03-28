const { Router } = require("express");
const router = Router();
const { feriados } = require("../Controllers/calendar");

router.route("/feriados").get(feriados);

module.exports = router;
