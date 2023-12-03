const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userController = require("./controllers/userController");

const app = express();
const port = 5002;

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", async () => {
  console.log("Mongoose connected to Users database");
});

db.on("error", (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

db.on("disconnected", () => {
  console.log("Mongoose disconnected from Users database");
});

app.get("/", userController.getUsers);
app.post("/", userController.registerUser);
app.get("/:id", userController.getUserById);
app.put("/:id", userController.updateUser);
app.delete("/:id", userController.deleteUser);
app.post("/login", userController.loginUser);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
