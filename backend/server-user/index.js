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

app.get("/users", userController.getUsers);
app.post("/users", userController.registerUser);
app.get("/users/:id", userController.getUserById);
app.put("/users/:id", userController.updateUser);
app.delete("/users/:id", userController.deleteUser);
app.post("/users/login", userController.loginUser);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
