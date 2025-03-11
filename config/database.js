const mongoose=require('mongoose');
require('dotenv').config();
const connectdb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("connected to database");
    })
    .catch((err)=>{
        console.log("DB facing connection issue");
        console.log(err);
        process.exit(1);
    })
};
module.exports=connectdb;