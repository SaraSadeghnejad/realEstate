import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from '../api/routes/user.route.js'
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
app.use('/api/user',userRouter)