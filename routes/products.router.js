const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get("/", (req, res) => {
  const products = [];
  const {size} = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    });
  }

  res.json(products);
});

router.get("/filter", (req, res) => {
  res.send("Filter");
})

router.get("/:id", (req, res) => {
  const {id} = req.params
  res.json({
    id,
    name: "Product 1",
    price: 100
  });
});

module.exports = router;