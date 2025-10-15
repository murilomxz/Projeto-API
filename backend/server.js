const express = require('express')
const app = express()
const port = 3000
const rotasProdutos = require ('./rotas/rotasProdutos')

const rotaslogger = require ('./middlewares/logger')
const cors = require('cors');




app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json())
app.use(rotaslogger)
app.use('/produtos', rotasProdutos)


app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})