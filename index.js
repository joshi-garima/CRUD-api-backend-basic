require('dotenv').config()

const express = require('express')
const mg = require('mongoose')
const app = express()
const productRoute = require('./routes/product.route.js')

const PORT =  process.env.PORT || 5000
// MiddleWare
// json file directly not sennd in express. So we need to use a middleware that is the below function
app.use(express.json())
app.use(express.urlencoded({extended: false}))



// routes
app.use('/api/products', productRoute)



app.listen(process.env.PORT,() =>{
    console.log("Server is running on port 5000");
})

app.get('/', function (req, res) {
    res.send('Welcome to CRUD API server..')
})



mg.connect("mongodb+srv://joshigarima:Addu321@backenddb.6qe4l48.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() =>{
    console.log("Connected to database");
})
.catch(()=>{
    console.log("Connection failed");
})

