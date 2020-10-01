require('dotenv').config()
const express = require('express');
const router = express.Router();
const models = require('../models/index')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const secret = process.env.ACCESS_TOKEN_SECRET

/* GET users listing. */
router.get('/list', async (req, res, next) => {
  let response = []
  try {
    const result = await models.Users.findAll({})
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
    res.status(500).json({ response });
  }
});

router.post('/register', async (req, res, next) => {

  let response = { data: {}, token: null, message: "" }
  const { email, password, retypepassword } = req.body

  if (password === retypepassword) {
    try {
      const emailDb = await models.Users.findOne({
        where: {
          email
        }
      })

      if (emailDb) {
        response.message = `Email already exists`
        return res.status(200).json(response)
      }

      const token = jwt.sign({ email }, secret)
      const result = await models.Users.create({
        email,
        password,
        token
      })
      responese.data = { email }
      response.token = token
      responese.message = 'Log In Success'
      res.status(201).json(response)
    } catch (error) {
      console.log(error)
      res.status(500).json(response)
    }
  } else {
    response.message = "Email or password wrong!"
    res.status(200).json(response)
  }
});



router.post('/login', async (req, res, next) => {

  let response = { data: {}, token: null, message: "" }
  const { email, password } = req.body
  console.log(email, password)

  try {
    const user = await models.Users.findOne({
      where: {
        email
      }
    })
    /*check if email realy stored in db*/
    if (!user) {
      response.message = 'Email has been used'
      return res.status(500).json(response)
    }

    const check = await bcrypt.compare(password, user.password)

    if (check) {
      if (user.token) {
        res.status(201).json(user)
      } else {
        /*made new token , every log out token is destroyed*/
        const newToken = jwt.sign({ email }, secret)
        const updateUser = await models.Users.update({ token: newToken }, {
          returning: true,
          where: {
            email
          }
        })

        if (!updateUser) {
          response.message = "update token failed"
          return res.status(500).json(response)
        }
        res.status(201).json(updateUser)
      }

    } else {
      response.message = 'Email or password wrong!'
      res.status(200).json(response)
    }
  } catch (error) {
    console.log(error)
    response.message = "Email or password wrong"
    res.status(500).json(response)
  }

});

router.post('/check', async (req, res, next) => {

  const token = req.header("Authorization")

  let response = {
    valid: false
  };

  try {
    const decoded = jwt.verify(token, secret);
    if (!decoded) return res.status(200).json(response)

    const user = await models.Users.findOne({
      where: {
        email: decoded.email
      }
    })
    if (!user) return res.status(200).json(response)

    response.valid = true
    res.status(200).json(response)

  } catch (error) {
    console.log(error);
    res.status(500).json(response)
  }

});


router.get('/destroy', async (req, res, next) => {
  const token = req.header("Authorization")

  let response = {
    logout: false
  };
  if (token) {
    try {
      const decoded = jwt.verify(token, secret);
      if (!decoded) return res.status(500).json(response)

      const user = await models.Users.update({ token: null }, {
        returning: true,
        where: {
          email: decoded.email
        }
      })
      if (!user) return res.status(500).json(response)

      response.logout = true
      res.status(200).json(response)

    } catch (error) {
      console.log(error)
      res.status(200).json(response)
    }
  } else {
    res.status(500).json(response)
  }
});
module.exports = router;
