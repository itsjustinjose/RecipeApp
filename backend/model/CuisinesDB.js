const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://itsjustinjose:justinjose@cluster0.hvykuwn.mongodb.net/cuisineapp?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB connected")
})
.catch(err=>console.log(err))

let Schema = mongoose.Schema;

const cuisineSchema = new Schema({
    CuisineName: String, 
    Duration: String,
    Servings:Number, 
    Image: String
});

var cuisineModel = mongoose.model("cuisine",cuisineSchema);
module.exports=cuisineModel;
