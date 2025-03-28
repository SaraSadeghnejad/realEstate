import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "../api/routes/user.route.js";
import authRouter from "../api/routes/auth.route.js";
import listingRouter from "../api/routes/listing.route.js";
import cookieParser from "cookie-parser";
import cookieParser from 'cookie-parser';
import path from 'path';
import { STATUS_CODES } from "http";
import { error } from "console";
dotenv.config();
const app = express();
app.use(express.json());
const db = mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
  const __dirname = path.resolve();
  app.use(cookieParser())
app.listen("3000", () => {
  console.log("listening on port 3000");
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});
