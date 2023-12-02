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
  try {
    const wineDto = new WineDto(req.body);
    const wine = await wineService.createWine(wineDto);
    res.json(wine);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getWineById = async (req, res) => {
  try {
    const wineId = req.params.id;
    const wine = await wineService.getWineById(wineId);
    res.json(wine);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
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
    res.status(500).send("Internal Server Error");
  }
};

const deleteWine = async (req, res) => {
  try {
    const wineId = req.params.id;
    const deletedWine = await wineService.deleteWine(wineId);
    res.json(deletedWine);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getWines,
  createWine,
  getWineById,
  updateWine,
  deleteWine,
};
