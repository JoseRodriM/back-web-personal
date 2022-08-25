const express = require('express');
const {addClientes} = require('./controllers/clientes');
require('dotenv').config()
const cors = require('cors');
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())
const port = process.env.PORT || 3001;

app.get('/', (req, res)=>{
  res.send('conectado')
})
app.post('/', addClientes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})