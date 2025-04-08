const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});


app.use(express.json())

async function startServer(){
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.xfcbvkb.mongodb.net/potions?retryWrites=true&w=majority&appName=Cluster0")
    app.listen(3000, ()=>{
      console.log("Server is running")
    })
  }

startServer()


const potionSchema = new mongoose.Schema({
    label: { type: String, required: true },
    effect: { type: String },
    ingredients: { type: String },
    color: { type: String },
    isExplosive: { type: Boolean },
});

const Potion = mongoose.model("Potion", potionSchema, "Potions")

// In script.js (NOT THIS FILE), write a function that creates a new potion by calling this route
app.post("/create-potion", function(){
  const newPotion = new Potion({
    label: req.body.label,
    effect: req.body.effect,
    ingredients: req.body.ingredients,
    color: req.body.color,
    isExplosive: req.body.isExplosive
  }).save()

  res.json(newPotion)
})
