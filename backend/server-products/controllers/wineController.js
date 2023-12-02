const wineService = require("../services/wineService");
const WineDto = require("../dtos/wineDto");
const WineByIdDto = require("../dtos/wineByIdDto");

const getWines = async (req, res) => {
  try {
    const wines = await wineService.getWines();
    res.json(wines);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error getting all wines");
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
  const wineId = req.params.id;
  try {
    const idDto = new WineByIdDto(wineId);
    const wine = await wineService.getWineById(idDto.id);
    res.json(wine);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting this wine");
  }
};

const updateWine = async (req, res) => {
  const wineId = req.params.id;
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
    const idDto = new WineByIdDto(wineId);
    const updatedWine = await wineService.updateWine(idDto.id, newWineDto);
    res.json(updatedWine);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating wine");
  }
};

const deleteWine = async (req, res) => {
  const wineId = req.params.id;
  try {
    const idDto = new WineByIdDto(wineId);
    const deletedWine = await wineService.deleteWine(idDto.id);
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
