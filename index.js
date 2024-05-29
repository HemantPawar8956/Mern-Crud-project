const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const projectRoutes=require("./routes/projectRoutes")


const app=express();
app.use(cors({
    origin:"*"
}));

mongoose.connect("mongodb://127.0.0.1:27017/emp");

let connection= mongoose.connection;
connection.once("open", () => {
    console.log("connection done");
  });



module.exports=connection;
app.listen(8000,()=>{
    console.log("server is running on port 8000");
});

app.use("/api",projectRoutes);



