const express = require('express');
const router = express.Router();
const CategoryService = require('./../services/category.service')

const service = new CategoryService();

router.get('/', (req,res) => {
  res.json(service.find());
});

router.get("/:id", (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    products:
    [
      {name: "Product 1", price: 100},
      {name: "Product 2", price: 200}
    ]
  })
});

router.get("/:categoryId/products/:productId", (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
    price: 1000
  })
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: "deleted",
    id
  });
});

module.exports = router;
