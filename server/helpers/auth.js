require('dotenv').config()
const secret = process.env.ACCESS_TOKEN_SECRET
const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {

  const authHeader = req.header('Authorization')

  const token = authHeader && authHeader.split(' ')[1]

  console.log(secret)
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, secret, (err, user) => {
 
    if (err) {
        console.log(err)
        return res.sendStatus(403)
    }
   
    next()
  })
}
module.exports={
    authenticateToken
}