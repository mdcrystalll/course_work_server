const express = require("express")
require('dotenv').config()
const cors = require('cors')
const sequelize = require('./db')
const {callback} = require("pg/lib/native/query");
const PORT = process.env.PORT
const models = require('./models/models')
const router = require('./routes')
const fileUpload = require('express-fileupload')
const app = express()
const errorHandler = require('./middleware/ErrorHandingMiddleware')


app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)



//error checker, last Middleware
app.use(errorHandler)




app.get('/', (req,res) => {
  res.status(200).json({message:'WORKING!!!'})
})


const start = async () => {
    try{
        await sequelize.authenticate()
        await  sequelize.sync()
        app.listen(PORT,()=>{console.log("ServerStart")})

    }catch (e) {
        console.log(e);
    }
}
start()
