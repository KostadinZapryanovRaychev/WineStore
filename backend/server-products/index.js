const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const wineController = require("./controllers/wineController");

const app = express();
const port = 5001;

app.use("/public", express.static("public"));

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", async () => {
  console.log("Mongoose connected to Products database");
});

db.on("error", (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

db.on("disconnected", () => {
  console.log("Mongoose disconnected from Products database");
});

app.get("/", wineController.getWines);
app.post("/", wineController.createWine);
app.get("/:id", wineController.getWineById);
app.put("/:id", wineController.updateWine);
app.delete("/:id", wineController.deleteWine);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
