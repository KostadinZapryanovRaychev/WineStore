const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();
const port = 5000;

app.use(cors());

app.use("/wines", proxy("http://localhost:5001"));
app.use("/users", proxy("http://localhost:5002"));

// / coming from here error handler or we can set up root directory

// Adding middleware

app.listen(port, () => {
  console.log(`Gatway is running on http://localhost:${port}`);
});
