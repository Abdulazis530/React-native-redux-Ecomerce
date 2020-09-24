require('dotenv').config()
const secret = process.env.ACCESS_TOKEN_SECRET
function authenticateToken(req, res, next) {

  const authHeader = req.headers['Authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, secret, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}
module.exports={
    authenticateToken
}