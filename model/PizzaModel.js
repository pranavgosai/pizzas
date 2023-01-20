const mongoose = require('mongoose');


const pizzaSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    varients : [],
    prices : [],
    category:{
        type:String,
    },
    image:{
        
            type:String,
    },
    description:{
        type:String,
    }
  },{timestamps:true}
  );

  const pizzaModel = mongoose.model('pizza',pizzaSchema)
  module.exports = pizzaModel;