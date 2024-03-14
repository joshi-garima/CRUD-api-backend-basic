const express = require('express')
const {createProduct,getProducts,getProduct,updateProduct,deleteProduct} = require('../controller/product.controller.js')


const router = express.Router()
// '/' - '/api/products'

// get methods - fetching db
router.get('/', getProducts)
router.get('/:id', getProduct)
// post meathod - creating db
router.post('/', createProduct)
// put meathod - update
router.put('/:id', updateProduct)
// delete meathod -
router.delete('/:id', deleteProduct)

module.exports = router