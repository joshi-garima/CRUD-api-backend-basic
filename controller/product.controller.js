const model = require('../models/product.model.js')

// Inserting to database
const createProduct = async (req,res) =>{
    try {
        const product = await model.create(req.body)
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({messege: error.messege})
    }
}


// Fetch all Products
const getProducts = async (req,res) =>{
    try {
        const products = await model.find({})
        res.status(200).json(products)
        
    } catch (error) {
        res.status(500).json({messege: error.messege})
    }
}


// Fetch single Product via id
const  getProduct = async (req, res) =>{
    try {
        
        const {id} = req.params
        const product = await model.findById(id)

        if(!product){
            return res.status(404).json({messege: "Product not found"})
        }

        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({messege: error.messege})
    }
}


// Update a Product
const updateProduct = async (req,res) =>{
    try {

        const {id} = req.params
        const product = await model.findByIdAndUpdate(id, req.body)

        if(!product){
           return res.status(404).json({messege: "Product not find"})
        }

        const updatedProduct = await model.findById(id)
        res.status(200).json(updatedProduct)


    } catch (error) {
        res.status(500).jason({messege: error.messege})
    }

}

// Delete a Product
const deleteProduct = async (req,res) =>{
    try {
        
        const {id} = req.params
        const product = await model.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({messege: "Product not found"})
        }

        res.status(200).json({messege: "Product deleted Successfully"})

    } catch (error) {
        res.status(500).json({messege: error.messege})
    }
}


module.exports ={
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}