import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import UserModel from "./models/UserModel.js";
const app = express();

app.use(express.json());

app.use(cors());

//Database connection

const connectString =
  "mongodb+srv://admin:admin@postitcluster.drjjiqf.mongodb.net/postITDb?retryWrites=true&w=majority&appName=PostITCluster";

mongoose.connect(connectString, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});

app.listen(3001, () => {
  console.log("You are connected thank you!");
});
