import express from "express";
import dotenv from "dotenv";
import connect from "./config/db.js";

dotenv.config();

connect();

const app = express();
const Port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello Worlddzzzzz!");
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

