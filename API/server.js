import express from 'express'
import mongoose, { Mongoose } from 'mongoose';
import bodyParser from 'express'
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'
import addressRouter from './Routes/address.js'
import cors from 'cors';

const app = express();
app.use(bodyParser.json())


app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))


//home testing route
app.get('/',(req,res)=>{
    res.json({message:'this is home route'})
})


//user Router
app.use('/api/user',userRouter)

//product Router
app.use('/api/product',productRouter)

//card Router
app.use('/api/cart',cartRouter)


//address Router 
app.use('/api/address',addressRouter)


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