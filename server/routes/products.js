require('dotenv').config()
const express = require('express');
const router = express.Router();
const models = require('../models/index')
const path = require('path');
const secret = process.env.ACCESS_TOKEN_SECRET
const API_SERVER = "http://192.168.1.13:3001";
const helpers = require('../helpers/auth')


/* GET products listing. */
router.get('/', async (req, res) => {

  try {
    const page = req.query.page || 1
    const limit = req.query.limit || 3
    const offset = page * limit - limit

    const dataProducts = await models.AddsProducts.findAndCountAll({
      order: [
        ['createdAt', 'ASC']
      ],
      limit,
      offset
    })

    const totalPage = Math.ceil(dataProducts.count / limit)
    const response = {
      page,
      totalPage,
      data: dataProducts.rows
    }
    res.json(response)

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {

  try {
    const product = await models.AddsProducts.findByPk(req.params.id)
    res.json(product);
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.post('/', helpers.authenticateToken, async (req, res) => {

  try {
    const { title, rate, description, price, brand, detail, likes } = req.body
    const images = req.files.image


    const renamedImages = images.map(image => {
      const newImageName = image.name.toLowerCase().replace("", Date.now()).split(' ').join('-')
      /* moving each renamedImage to public/images */
      image.mv(path.join(__dirname, "..", "public", "images", newImageName))
      return newImageName
    })

    const product = await models.AddsProducts.create({
      title,
      rate: Number(rate),
      description,
      price,
      brand,
      detail,
      likes,
      images: renamedImages,
    })

    res.json(product);
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});


router.put('/:id', async (req, res) => {

  try {
    const product = await models.AddsProducts.update({
      vote: req.body.vote,

    }, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    res.json(product);
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const targetProducts = await models.AddsProducts.findByPk(req.params.id)
    if (targetProducts) {
      await models.AddsProducts.destroy({
        where: {
          id: req.params.id
        }
      })
      res.json(targetProducts);
    } else {
      return res.json({ message: "id not found" })
    }

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});
module.exports = router;
