const express= require('express')
const app= express()
const productRoutes= require('./routes/productRoutes')
const userRoutes= require('./routes/userRoutes')
const dotenv= require('dotenv')
dotenv.config({path: './config.env'})


app.use(express.json())



app.use('/api/v1/products', productRoutes)
app.use('/api/v1/users', userRoutes)
const port= process.env.PORT || 5000
app.listen(port, ()=> console.log(`Listinning on port ${port}...`))