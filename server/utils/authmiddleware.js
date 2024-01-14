const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Authorization token not found" });
  }

  try {
    const jwtVerify = jwt.verify(token, process.env.SECRET_KEY);
    req.user = jwtVerify;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
