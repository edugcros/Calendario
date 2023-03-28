const mongoose = require("mongoose");

const CEventSchema = new mongoose.Schema({
  motivo: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  dia: {
    type: Number,
    required: true,
  },
  mes: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
  },
});

module.exports = mongoose.model("CEvent", CEventSchema);