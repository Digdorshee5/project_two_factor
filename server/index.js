import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
// getting-started.js
main().catch((err) => console.log("Connection error:", err));

async function main() {
  const uri = `mongodb+srv://digdorsheeghosal:${process.env.DB_PASSWORD}@employee-details.i9cnu.mongodb.net/?retryWrites=true&w=majority&appName=employee-details`;
  const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
  await mongoose.connect(uri, clientOptions);
  // mongoose.connect("mongodb://127.0.0.1:27017/formdata");
  console.log("DB connection established");
}

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  id: { type: Number, unique: true, required: true },
  phoneNumber: {
    type: Number,
    unique: true,
    minlength: 10,
    maxlength: 10,
    required: true,
  },
  email: { type: String, unique: true, required: true },
  address: { type: String, required: true },
  role: { type: String, required: true },
  duration: { type: Number, required: true },
  imageFile: String,
  joinDate: { type: Date, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  termsAccepted: { type: Boolean, required: true },
});

const Userdata = mongoose.model("Userdata", UserSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post("/search", async (req, res) => {
  try {
    const users = await Userdata.findOne(req.body);
    if (!users) {
      return res.status(404).json({ error: "No matching user found" });
    }
    console.log(req.body);
    console.log(users);
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
});

server.post("/data", async (req, res) => {
  try {
    const userdata = new Userdata(req.body);
    const doc = await userdata.save();
    console.log(doc);
    res.status(201).json(doc);
  } catch (error) {
    console.error("Error saving user data:", error);
    res.status(400).json({ message: "Error saving user data", error: error.message });
  }
});

server.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

server.get("/overview", (req, res) => {
  res.send("This is the overview page!");
});

server.listen(8080, () => {
  console.log(`Example app listening on port 8080!`);
});
