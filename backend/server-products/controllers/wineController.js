const wineService = require("../services/wineService");
const WineDto = require("../dtos/wineDto");

const getWines = async (req, res) => {
  try {
    const wines = await wineService.getWines();
    res.json(wines);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const createWine = async (req, res) => {
  const { name, price, description, photo, qty, category } = req.body;
  try {
    const newWineDto = new WineDto(
      name,
      price,
      description,
      photo,
      qty,
      category
    );
    const wine = await wineService.createWine(newWineDto);
    res.json(wine.id);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating new wine");
  }
};

const getWineById = async (req, res) => {
  try {
    const wineId = req.params.id;
    const wine = await wineService.getWineById(wineId);
    res.json(wine);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting wine by id");
  }
};

const updateWine = async (req, res) => {
  try {
    const wineId = req.params.id;
    const wineDto = new WineDto(req.body);
    const updatedWine = await wineService.updateWine(wineId, wineDto);
    res.json(updatedWine);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating wine");
  }
};

const deleteWine = async (req, res) => {
  try {
    const wineId = req.params.id;
    const deletedWine = await wineService.deleteWine(wineId);
    res.json(deletedWine);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error with deleting of this wine");
  }
};

module.exports = {
  getWines,
  createWine,
  getWineById,
  updateWine,
  deleteWine,
};
