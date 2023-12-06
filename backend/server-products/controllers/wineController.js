const wineService = require("../services/wineService");
const WineDto = require("../dtos/wineDto");
const WineByIdDto = require("../dtos/wineByIdDto");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../public");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single("photo");

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
  upload(req, res, async function (err) {
    if (err) {
      console.error(err);
      return res.status(500).send("Error uploading file");
    }

    const { name, price, description, qty, category } = req.body;
    const photo = req.file ? `/public/${req.file.filename}` : null;
    try {
      const newWineDto = new WineDto(name, price, description, photo, qty, category);
      const wine = await wineService.createWine(newWineDto);
      res.json(wine.id);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error creating new wine");
    }
  });
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
  upload(req, res, async function (err) {
    if (err) {
      console.error(err);
      return res.status(500).send("Error uploading file");
    }

    const { name, price, description, qty, category } = req.body;
    const photoUrl = req.file ? `/public/${req.file.filename}` : null;

    try {
      const newWineDto = new WineDto(name, price, description, photoUrl, qty, category);
      const idDto = new WineByIdDto(wineId);
      const updatedWine = await wineService.updateWine(idDto.id, newWineDto);
      res.json(updatedWine);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error updating wine");
    }
  });
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
