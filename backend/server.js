const express = require('express')
const app = express()
const port = 3001
const rotasProdutos = require ('./rotas/rotasProdutos')

const rotaslogger = require ('./middlewares/logger')
const cors = require('cors');




app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json())
app.use(rotaslogger)
app.use('/produtos', rotasProdutos)


app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})