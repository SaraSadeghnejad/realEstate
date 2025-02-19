import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const app = express();
const db = mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen("3000", () => {
  console.log("listening on port 3000");
});
