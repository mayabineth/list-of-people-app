import personRoutes from "./routes/personsRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

app.use(express.json());
app.use("/persons", personRoutes);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
