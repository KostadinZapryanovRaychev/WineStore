const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const wineController = require("./controllers/wineController");

const app = express();
const port = 5001;

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

app.get("/wines", wineController.getWines);
app.post("/wines", wineController.createWine);
app.get("/wines/:id", wineController.getWineById);
app.put("/wines/:id", wineController.updateWine);
app.delete("/wines/:id", wineController.deleteWine);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
