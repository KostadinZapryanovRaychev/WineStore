const Wine = require("../models/Wine");

const getWines = async () => {
  try {
    const wines = await Wine.find();
    return wines;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

const getWineById = async (wineId) => {
  try {
    const wine = await Wine.findById(wineId);
    return wine;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

const createWine = async (wineData) => {
  try {
    const wine = new Wine(wineData);
    await wine.save();
    return wine;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

const updateWine = async (wineId, wineData) => {
  try {
    const wine = await Wine.findByIdAndUpdate(wineId, wineData, { new: true });
    return wine;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

const deleteWine = async (wineId) => {
  try {
    const wine = await Wine.findByIdAndDelete(wineId);
    return wine;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

module.exports = {
  getWines,
  getWineById,
  createWine,
  updateWine,
  deleteWine,
};
