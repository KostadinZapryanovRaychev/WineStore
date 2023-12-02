const wineService = require("../services/wineService");

const getWines = async (req, res) => {
  try {
    const wines = await wineService.getWines();
    console.log(wines);
    res.json(wines);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getWines,
};
