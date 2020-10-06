require('dotenv').config()
const multer = require("multer");
const path = require('path');
const secret = process.env.ACCESS_TOKEN_SECRET
const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {

  const authHeader = req.header('Authorization')

  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, secret, (err, user) => {

    if (err) {
      console.log(err)
      return res.sendStatus(403)
    }

    next()
  })
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "public", "images"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname.replace(" ", "-")}.jpg`);
  }
});

const upload = multer({ storage })

module.exports = {
  authenticateToken,
  upload
}