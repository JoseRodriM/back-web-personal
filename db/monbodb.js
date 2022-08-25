const mongoose = require('mongoose');
require('dotenv').config()
try{
  mongoose.connect(`${process.env.MONGODB_CONNECTION}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () =>
  console.log("connected"));
  }catch (error) {
  console.log("could not connect");
}
const cliente = mongoose.model('clientes', { 
  name: {
    type: String
  },
  email: {      
    type: String
  },
  message: {      
    type: String
  }
});

module.exports = cliente;
