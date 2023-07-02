const express = require("express");
const cuisineModel = require("./model/CuisinesDB");
const cors = require('cors');

const app= new express();

app.use(express.urlencoded({extended:'true'}));
app.use(express.json());
app.use(cors());

app.post('/addcuisne',async (req,res)=>{
    console.log(req.body)
    var data = await cuisineModel(req.body)
    data.save();
    res.send({status:"Data Saved"})
})

app.get('/viewcuisine',async(req,res)=>{
    var data = await cuisineModel.find();
    res.json(data);
})

app.delete('/deletecuisine/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id;
    await cuisineModel.findByIdAndDelete(id);
    res.json({status:"Deleted"})
})

app.put('/edit/:id', async(req,res)=>{
    let id = req.params.id;
    try{
        var data = await cuisineModel.findByIdAndUpdate(id,req.body)
        res.json({status:"Updated"})
    }
    catch(err){
        res.status(500).send(err)
    }
})

app.listen(5050,()=>{
    console.log("App is running fine in 5050")
})