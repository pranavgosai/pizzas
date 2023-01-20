// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    mongoose.set('strictQuery', false);
  await mongoose.connect('mongodb://127.0.0.1:27017/foods',{
    useNewUrlparser:true,
    useUnifiedTopology:true,
 
  });
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}