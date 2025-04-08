import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import UserModel from "./models/UserModel.js";
import bcrypt from "bcrypt";
const app = express();

app.use(express.json());

app.use(cors());

//Database connection

const connectString =
  "mongodb+srv://admin:admin@postitcluster.drjjiqf.mongodb.net/postITDb?retryWrites=true&w=majority&appName=PostITCluster";

mongoose.connect(connectString);

//API routes
app.post("/registerUser", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = UserModel({
      name: name,
      email: email,
      password: hashedpassword,
    });

    await user.save();
    res.send({ user: user, msg: "Added" });
  } catch (error) {
    res.status(500).json({ error: "An error ocurred" });
  }
});

app.post("/login", async (req, res) => {});

app.post("/updateProfile", async (req, res) => {});
app.listen(3001, () => {
  console.log("You are connected thank you!");
});
