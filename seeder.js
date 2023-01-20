const mongoose = require('mongoose')
require('./config/config');

const Pizza =  require('./model/PizzaModel');
const Pizzas =require('./data/pizza-data');


const imoprtData = async () => {
    try{
         await Pizza.deleteMany()
         const sampleData = Pizzas.map(pizza =>{return {...pizza}})
         await Pizza.insertMany(sampleData)
         console.log(`data imported`)
         process.exit()
    } catch (error) {
        console.log(`${error}`)
         process.exit(1)
    }
}

const dataDestroy = () => {}

if (process.argv[2]==='-d'){
    data
}else{
    imoprtData()
}