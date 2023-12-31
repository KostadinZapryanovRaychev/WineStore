const jwt = require("jsonwebtoken");

function authenticateMiddleware(req, res, next) {
  const authorizationHeader = req.headers.authorization;
  const [bearer, token] = authorizationHeader.split(" ");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - Token missing" });
  }

  try {
    const decoded = jwt.verify(token, "TODO-secret-key");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized - Invalid token" });
  }
}

module.exports = { authenticateMiddleware };
