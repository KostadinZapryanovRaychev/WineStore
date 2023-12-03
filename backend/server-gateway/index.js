const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const { authenticateMiddleware } = require("./auth/auth");

const app = express();
const port = 5000;

app.use(cors());

const publicPaths = ["/users/login", "/users/register"];

app.use((req, res, next) => {
  if (
    publicPaths.includes(req.path) ||
    (req.path === "/wines" && req.method === "GET")
  ) {
    return next();
  }
  authenticateMiddleware(req, res, next);
});

app.use("/wines", proxy("http://localhost:5001"));
app.use("/users", proxy("http://localhost:5002"));

app.listen(port, () => {
  console.log(`Gatway is running on http://localhost:${port}`);
});
