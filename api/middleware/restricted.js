const Users = require("../users/users-model");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");

module.exports = async (req, res, next) => {
  if (req.headers.authorization == null) return res.status(401).json({ message: "token required" });

  const token = req.headers.authorization;
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) res.status(401).json({ message: "token invalid" });
    else next();
  });

  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};
