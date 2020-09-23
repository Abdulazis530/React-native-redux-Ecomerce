const express = require('express');
const router = express.Router();
const models = require('../models/index')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
require('dotenv').config()
const secret = process.env.ACCESS_TOKEN_SECRET

/* GET users listing. */
router.get('/list', async (req, res, next) => {
  let response = []
  try {
    const result = await models.Users.findAll({})
    console.log(result)
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
    res.status(500).json({ response });
  }
});

router.post('/register', async (req, res, next) => {
  console.log(secret)
  let response = { data: {}, token: null, message: "" }
  const { email, password, retypepassword } = req.body

  if (password === retypepassword) {
    try {
      const emailDb = await models.Users.findOne({ where: {
       email
      }})
   
      if (emailDb) {
        response.message = `Email already exists`
        return res.status(200).json(response)
      }

      const token = jwt.sign({ email }, secret)
      const decoded = jwt.verify(token, secret);
      console.log(decoded)
      const newUser = await models.Users.create({
        email,
        password,
        token
      })
  
      res.status(201).json(newUser)
    } catch (error) {
      console.log(error)
      res.status(500).json(response)
    }
  } else {
    response.message = "Email or password wrong!"
    res.status(200).json(response)
  }
});

module.exports = router;
