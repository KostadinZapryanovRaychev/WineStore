const mongoose = require("mongoose");

const wineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    photo: String,
    date: { type: Date, default: Date.now },
    qty: { type: Number, default: 0 },
    category: String,
  },
  {
    timestamps: true,
  }
);

const Wine = mongoose.model("Wine", wineSchema);
module.exports = Wine;
