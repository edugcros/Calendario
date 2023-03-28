const fetch = require("node-fetch");
const CalendarE = require("../models/CalendarE");
const slugify = require("slugify");
get = {};

get.feriados = (req, res) => {
  const year = req.query.year;

  fetch(`http://nolaborables.com.ar/api/v2/feriados/${year}`)
    .then((response) => {
      return response.json();
    })
    .then((resp) => {
      res.json(resp);
    });
};

get.create = async (req, res) => {
  try {
    if (req.body.motivo) {
      req.body.id = slugify(req.body.motivo);
    }
    const calendar = await CalendarE.create(req.body);
    res.status(200).json(calendar);
  } catch (err) {
    throw Error(err);
  }
};
module.exports = get;
