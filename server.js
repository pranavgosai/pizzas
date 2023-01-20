const express = require('express');
require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
 require('./config/config');


dotenv.config()





const app = express();

//middlewares

app.use(express.json());
app.use(morgan('dev'))

//route

app.use('/api/pizzas/',require('./routes/PizzaRoute'))

app.get('/',(req,res)=>{
    res.send('<h1>hiiiiiiiii node</h1>')
})

const port = process.env.POST || 8080
app.listen(port,()=>{
    console.log(`server is runing on ${process.env.NODE_ENV} mpde on port ${process.env.PORT}`.bgRed.white);
});

