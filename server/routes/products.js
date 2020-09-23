var express = require('express');
var router = express.Router();
var models = require('../models/index');
const path = require('path');
const server_URL = "http://localhost:3001";

/* get list products */
router.get('/', function (req, res, next) {
  console.log('here')
  let page = Number(req.header('page')) || 1;
  let limit = Number(req.header('limit')) || 4;
  let offset = (page - 1) * limit;

  models.Products.findAndCountAll({
    order: [
      ['createdAt', 'ASC']
    ],
    limit,
    offset
  })
    .then(products => {
      console.log(products.rows[0].dataValues)
      console.log('INI DATA VALUE',products.dataValues)
      let numOfPages = Math.ceil(products.count / limit);
      let result = products.rows.map(item => ({
        ...item.dataValues,
        image: item.dataValues.image ? server_URL + item.dataValues.image[0] : null
      }))
      console.log('ini RESULT',result)
      res.json({
        numOfPages,
        result
      })
    })
    .catch(err => {
      res.json({
        error: true,
        message: err
      })
    })
});

/* add new ads */
router.post('/', (req, res) => {
  console.log('aduuh dum pusing')
  let { title, rate, description, price, brand, detailProduct, category, fileId, color, capacities, stock, size } = req.body;
  let { file } = req.files;
  let filename = `${fileId}-${file.name}`;
  file.mv(path.join(__dirname, "..", "public", "images", filename), err => {
    if (err) console.log('error file upload:', err);
    else {
      models.Products.create({
        title,
        rate,
        description,
        price,
        brand,
        detail_product: detailProduct,
        category,
        image: [`/images/${filename}`],
        color: color.split(','),
        stock,
        size: size,
        capacities: capacities.split(',')
      })
        .then(product => {
          
          console.log('ININININI',product)
          
            console.log(product)
          let result = {
            ...product.dataValues,
            image: server_URL + product.dataValues.image[0]
          }
          console.log('RESULT DI BACKEND >>>', result);
          res.json(result)
        })
        .catch(err => {
          console.log(err)
          res.json({
            error: true,
            message: err
          })
        })
    }
  })
})

/* find product details */
router.get('/:id', (req, res) => {
  models.Products.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(product => {
      let result = {
        ...product.dataValues,
        image: server_URL + product.dataValues.image[0]
      }
      res.json(result)
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: true,
        message: err
      })
    })
})

/* delete product */
router.delete('/:id', (req, res) => {
  models.Products.destroy({
    returning: true,
    where: {
      id: req.params.id
    }
  })
    .then(product => res.json(product))
    .catch(err => res.json(err))
})

/* edit a products when someone buy it */
router.put('/:id', (req, res) => {
  // let {testimonials, rate } = req.body;
  console.log('BODI BABADOTOT:', req.body)
  models.Products.findOne({
    where: { id: req.params.id }
  })
    .then(product => {
      console.log('product', product)
      if (product.dataValues.testimonials === null) {
        product.dataValues.testimonials = [];
      }

      let newTestimonials = [
        ...product.dataValues.testimonials, req.body
      ]

      models.Products.update({ testimonials: newTestimonials }, {
        where: {
          id: req.params.id
        }
      })
        .then(product => res.json(product))
        .catch(err => res.json(err))
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: true,
        message: err
      })
    })
})

module.exports = router;
