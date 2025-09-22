const express=require('express');
const app=express();
const connectDB=require("./config/connection");
const dotenv=require('dotenv');
const cors=require('cors');
// const sellRouter=require('./routers/commonRouter');
const commonRouter=require('./routers/commonRouter');
const sellRouter=require('./routers/sellRouter');
const userSideSellRouter=require('./routers/userSideSellRouter');
const imageUploadRouter=require('./routers/imageUploadRouter');
const partnerRouter = require("./routers/partner/partnerRouter");
const paymentRoutes = require("./routers/partner/paymentRoutes");
const pickupPersonRouter=require("./routers/partner/pickupPersonRouter");
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors({
    // origin: "http://localhost:5173", // allowing partner frontend 
   origin: "*", // allowing all
    credentials: true,
}));

app.use('/api/common-module',commonRouter);
app.use('/api/sell-module',sellRouter);
app.use('/api/sell-module/user',userSideSellRouter);
app.use('/api/file',imageUploadRouter);
app.use('/api/partner-module',partnerRouter);
app.use('/api/pickupperson-module',pickupPersonRouter);
app.use('/api/payment',paymentRoutes);

app.get("/hello",(req,res)=>{
    return res.status(200).json("Hello from quick backend👋")
})

app.listen(process.env.PORT,'0.0.0.0',()=>{
    console.log(`server is running on port ${process.env.PORT} `);
});

