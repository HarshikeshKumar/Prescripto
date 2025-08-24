import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());

// api end point

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is listening at port: ${port}`);
});
