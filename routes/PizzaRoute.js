const express = require('express')
const pizzaModel = require('../model/PizzaModel')
const router = express.Router()
const PizzaModel = require('../model/PizzaModel')

//get all pizzas

router.get('/getpizzas',async(req,res)=>{
    try{
      const pizzas = await pizzaModel.find({})
      res.send(pizzas)
    }catch(error){
        res.json({message:error})
    }
})

module.exports= router;