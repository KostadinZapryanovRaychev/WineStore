const Wine = require("../models/Wine");
const WineDto = require("../dtos/wineDto");

const getWines = async () => {
  try {
    const wines = await Wine.find();
    return wines;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

const createWine = async (wineDto) => {
  try {
    const wine = new Wine(wineDto);
    await wine.save();
    return wine;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

const getWineById = async (wineId) => {
  try {
    const wine = await Wine.findById(wineId);
    if (!wine) {
      throw new Error("Wine not found");
    }
    return wine;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

const updateWine = async (wineId, wineDto) => {
  try {
    const wine = await Wine.findById(wineId);
    if (!wine) {
      throw new Error("Wine not found");
    }

    wine.name = wineDto.name;
    wine.price = wineDto.price;
    wine.description = wineDto.description;
    wine.photo = wineDto.photo;
    wine.qty = wineDto.qty;
    wine.category = wineDto.category;

    await wine.save();
    return wine;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

const deleteWine = async (wineId) => {
  try {
    const wine = await Wine.findByIdAndDelete(wineId);
    if (!wine) {
      throw new Error("Wine not found");
    }
    return wine;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

module.exports = {
  getWines,
  createWine,
  getWineById,
  updateWine,
  deleteWine,
};
