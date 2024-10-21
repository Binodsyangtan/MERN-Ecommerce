import express from 'express'
import mongoose, { Mongoose } from 'mongoose';
import bodyParser from 'express'
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'

const app = express();
app.use(bodyParser.json())

//home testing route
app.get('/',(req,res)=>{
    res.json({message:'this is home route'})
})


//user Router
app.use('/api/user',userRouter)

//product Router
app.use('/api/product',productRouter)

mongoose.connect(
    "mongodb+srv://lamabbb042:l7N0XYVvESqpDTNG@cluster0.n8tzf.mongodb.net/",{
        dbName:"ECOMMERCE"
    }
).then(()=>{
    console.log("MongoDb connected successfully..");
    
}).catch((err)=>console.log(err));

const port = 8000;

app.listen(port,()=>console.log(`server is running on port ${port}`)
);