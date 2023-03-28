const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// settings
app.set("port", process.env.PORT || 4000);

//Route
app.use("/api", require("./routes/get"));
app.use("/api", require("./routes/post"));

//Conecction mongoDB
const URL = process.env.MONGO;

mongoose.set("strictQuery", true);
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database is connected");
});


app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
