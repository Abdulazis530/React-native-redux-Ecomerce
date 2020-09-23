const express = require('express');
const router = express.Router();
const models = require('../models/index')
const path = require('path');
const API_SERVER = "http://localhost:3001";


/* GET products listing. */
router.get('/', async (req, res) => {
  console.log('here')
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

router.post('/', async (req, res) => {

  try {
    const { title, rate, description, price, brand, detail,likes } = req.body
    const images = req.files.image

    const imageWithDirectory = []
    const renamedImages = images.map(image => {
      const newImageName = image.name.toLowerCase().replace("", Date.now()).split(' ').join('-')
      imageWithDirectory.push(`${API_SERVER}/images/${newImageName}`)
      return newImageName
    })

    /* moving renamedImages to public/images */
    for (let index = 0; index < images.length; index++) await images[index].mv(path.join(__dirname, "..", "public", "images", renamedImages[index]))

    const adds = await models.AddsProducts.create({ 
        title,
        rate:Number(rate),
        description,
        price,
        brand,
        detail,
        likes,
        images:imageWithDirectory,
    })

    res.json(adds);
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});


router.put('/:id', async (req, res) => {
  console.log('here')
  console.log(req.body.vote)
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
    }

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});
module.exports = router;
