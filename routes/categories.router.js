const express = require('express');
const router = express.Router();


router.get("/category/:id", (req, res) => {
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

router.get("/categories/:categoryId/products/:productId", (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
    price: 1000
  })
});


module.exports = router;
