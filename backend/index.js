import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connect from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js"
import sidebarRoute from "./routes/sideBarroute.js";
import cors from "cors"

dotenv.config();
connect();



const app = express();
const Port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use("/users", userRoute)
app.use("/message", messageRoute);
app.use("/sidebar", sidebarRoute)

app.get("/", (req, res) => {
  res.send("Hello Worlddzzzzz!"); 
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

